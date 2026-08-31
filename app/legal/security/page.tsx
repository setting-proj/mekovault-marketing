import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Políticas de Seguridad — Mekovault",
  description:
    "Cómo Mekovault protege las credenciales de directorio, aísla tenants y audita cada uso del Service Account de Google Workspace y App Registration de Microsoft Entra.",
};

export default function SecurityPage() {
  return (
    <>
      <h1>Políticas de Seguridad</h1>
      <p className="text-sm text-muted-foreground">
        Vigencia: 2026 · Última revisión: 31 de agosto de 2026
      </p>

      <p>
        Mekovault gestiona el ciclo de vida de identidades en Google Workspace,
        Microsoft Entra y otros directorios corporativos. Para funcionar,
        recibe credenciales muy sensibles (Service Accounts, App Registrations
        con permisos de administración global). Este documento describe cómo
        las almacenamos, cómo las usamos, y cómo el Cliente puede auditar cada
        uso.
      </p>

      <p>
        Está redactado como referencia para equipos de seguridad, auditores y
        compradores enterprise. Complementa —no reemplaza— la{" "}
        <Link href="/legal/privacy">Política de Privacidad</Link>, los{" "}
        <Link href="/legal/terms">Términos</Link> y el{" "}
        <Link href="/legal/dpa">DPA</Link>.
      </p>

      <h2>1. Alcance</h2>
      <p>
        Estas políticas aplican a toda credencial que el Cliente entrega a
        Mekovault para operar sobre su directorio corporativo, incluyendo pero
        no limitado a:
      </p>
      <ul>
        <li>
          <strong>Google Workspace:</strong> archivo JSON de Service Account con
          Domain-Wide Delegation.
        </li>
        <li>
          <strong>Microsoft Entra ID (Azure AD):</strong> Client Secret y
          Client/Tenant ID de una App Registration con Application permissions.
        </li>
        <li>
          Cualquier otra credencial de integración con Okta, JumpCloud, HRIS o
          IdP futuro que Mekovault soporte.
        </li>
      </ul>

      <h2>2. Arquitectura de almacenamiento</h2>

      <h3>2.1 Separación física de secretos y metadatos</h3>
      <p>
        Ninguna credencial se almacena en la base de datos relacional de
        Mekovault. La arquitectura separa dos planos:
      </p>
      <ul>
        <li>
          <strong>Plano de metadatos (PostgreSQL, host <code>mekovault-data</code>):</strong>{" "}
          solo guarda un puntero al secreto (nombre de la clave dentro del
          vault), el proveedor, el dominio primario, timestamps y resultados
          del último <em>health check</em>. Row-Level Security por{" "}
          <code>company_id</code>.
        </li>
        <li>
          <strong>Plano de secretos (Infisical, host <code>mekovault-vault</code>):</strong>{" "}
          instancia auto-hospedada de{" "}
          <a href="https://infisical.com/" target="_blank" rel="noopener noreferrer">
            Infisical
          </a>{" "}
          en red privada Tailscale, no expuesta a Internet público. Contiene
          los valores reales (JSON completo del SA, secretos de la App).
        </li>
      </ul>
      <p>
        Un bug o compromiso del servicio de metadatos no expone credenciales:
        los secretos requieren autenticación aparte contra Infisical mediante
        una identidad de máquina distinta.
      </p>

      <h3>2.2 Aislamiento por tenant (multi-tenancy hard)</h3>
      <p>
        Cada tenant recibe <strong>un proyecto Infisical dedicado</strong>{" "}
        (ejemplo: <code>setting-cl-415514</code>,{" "}
        <code>mmglatam-com-872039</code>). Los secretos nunca se comparten.
        Consecuencia:
      </p>
      <ul>
        <li>
          El radio de impacto de cualquier falla en el código de Mekovault que
          construya mal la referencia al proyecto está limitado al mismo
          tenant: no puede leer, listar ni tocar secretos de otros clientes.
        </li>
        <li>
          Las políticas de acceso de Infisical rechazan solicitudes a
          proyectos para los que la identidad de máquina de Mekovault no tiene
          permiso, aunque los conozca por nombre.
        </li>
      </ul>

      <h3>2.3 Cifrado</h3>
      <ul>
        <li>
          <strong>En tránsito:</strong> TLS 1.2+ obligatorio en todas las
          conexiones (HTTPS del portal, PostgreSQL con SSL, canal Mekovault →
          Infisical, canal Mekovault → Google/Microsoft). No aceptamos
          conexiones no cifradas.
        </li>
        <li>
          <strong>En reposo:</strong> los secretos se cifran en Infisical con
          la clave maestra del vault (AES-256-GCM); el volumen del vault se
          cifra a nivel de disco (LUKS / EBS encryption). PostgreSQL corre con
          cifrado de disco.
        </li>
        <li>
          <strong>Rotación de claves de servicio:</strong> las llaves de
          firma de JWT y las credenciales de la identidad de máquina de
          Infisical se rotan al menos cada 12 meses y ante cualquier evento
          de compromiso sospechado.
        </li>
      </ul>

      <h3>2.4 Red y perímetro</h3>
      <ul>
        <li>
          Todas las máquinas del backend (<code>mekovault-app</code>,{" "}
          <code>mekovault-data</code>, <code>mekovault-obs</code>,{" "}
          <code>mekovault-vault</code>) están conectadas por Tailscale sobre
          WireGuard.
        </li>
        <li>
          <strong><code>mekovault-vault</code> no tiene IP pública ni puerto
          abierto a Internet.</strong> Solo escucha en la interfaz privada
          Tailscale. Ni siquiera desde el frontend público (Vercel) se puede
          alcanzar directamente.
        </li>
        <li>
          El acceso administrativo por parte del equipo de Mekovault requiere
          Tailscale con MFA + clave SSH gestionada. Sin credenciales
          personales SSH root en ningún host.
        </li>
      </ul>

      <h2>3. Uso de las credenciales</h2>

      <h3>3.1 Principio de mínimo privilegio en la solicitud</h3>
      <p>
        Al conectar el directorio, Mekovault solicita exactamente los scopes
        que necesita, ni uno más. Publicamos la lista completa en la guía del
        Wizard de conexión y la reproducimos acá:
      </p>

      <h4>Google Workspace — Domain-Wide Delegation</h4>
      <ul>
        <li>
          <code>admin.directory.user</code> — crear, suspender, reactivar,
          modificar usuarios.
        </li>
        <li>
          <code>admin.directory.user.security</code> — reset de contraseña y
          cierre de sesiones activas (SSO revocation).
        </li>
        <li>
          <code>admin.directory.orgunit</code> — mover usuarios entre OU
          durante onboarding/offboarding.
        </li>
        <li>
          <code>admin.directory.group</code> — crear/eliminar grupos y listas
          de distribución.
        </li>
        <li>
          <code>admin.directory.group.member</code> — agregar/quitar miembros
          a grupos.
        </li>
        <li>
          <code>admin.directory.domain.readonly</code> — solo lectura del
          listado de dominios (para validar que el SA opera sobre el dominio
          correcto).
        </li>
        <li>
          <code>admin.directory.customer.readonly</code> — solo lectura de los
          datos de la cuenta de cliente Google (para reportes agregados).
        </li>
      </ul>
      <p>
        <strong>No solicitamos:</strong> acceso a Gmail (Mail scopes), Drive,
        Calendar, Chat, ni ningún dato de contenido del usuario. Mekovault no
        lee correos ni archivos.
      </p>

      <h4>Microsoft Entra — Application permissions</h4>
      <ul>
        <li>
          <code>User.ReadWrite.All</code> — lifecycle de usuarios.
        </li>
        <li>
          <code>Group.ReadWrite.All</code> — creación y gestión de grupos.
        </li>
        <li>
          <code>Directory.ReadWrite.All</code> — modificaciones estructurales
          menores del directorio.
        </li>
        <li>
          <code>AdministrativeUnit.Read.All</code> — solo lectura de unidades
          administrativas para segmentación.
        </li>
        <li>
          <code>User.RewritePassword.All</code> —{" "}
          <strong>opcional</strong>, solo si el Cliente desea que Mekovault
          resetee contraseñas desde el portal. Sin este permiso las demás
          operaciones funcionan; el reset queda deshabilitado y los usuarios
          usan el Self-Service Password Reset de Microsoft.
        </li>
      </ul>
      <p>
        <strong>No solicitamos:</strong> permisos <em>Delegated</em>, acceso a
        Exchange (Mail.*, Calendars.*), Teams messages, SharePoint content ni
        políticas de Conditional Access.
      </p>

      <h3>3.2 Nunca en logs, nunca fuera del proceso</h3>
      <ul>
        <li>
          Los adaptadores cargan el secreto en memoria justo antes de llamar
          al proveedor externo y lo descartan al terminar el request.
        </li>
        <li>
          El logger estructurado filtra automáticamente cualquier campo cuyo
          nombre contenga <code>password</code>, <code>secret</code>,{" "}
          <code>token</code>, <code>key</code> o <code>credential</code>. Las
          entradas de log muestran el hash truncado del <em>request-id</em>{" "}
          pero nunca el contenido del secreto.
        </li>
        <li>
          No hay backups del vault en almacenamiento externo no cifrado.
          Los snapshots se cifran con la misma clave maestra del vault.
        </li>
      </ul>

      <h2>4. Auditoría de cada uso</h2>

      <h3>4.1 Log inmutable <code>credential_usage_log</code></h3>
      <p>
        Cada vez que Mekovault ejecuta una operación sobre el directorio del
        Cliente con las credenciales almacenadas, se persiste un registro en
        la tabla <code>credential_usage_log</code> con:
      </p>
      <ul>
        <li>
          <strong>Quién:</strong> ID y email del usuario Mekovault (o
          identificador del worker/scheduler) que originó la operación.
        </li>
        <li>
          <strong>Por qué:</strong> propósito humano obligatorio (ejemplo:{" "}
          <em>“Onboarding user@empresa.cl vía ticket #4213”</em>,{" "}
          <em>“Health check nocturno”</em>,{" "}
          <em>“Bulk deprovision batch #123”</em>).
        </li>
        <li>
          <strong>Qué:</strong> operación exacta (<code>create_user</code>,{" "}
          <code>suspend_user</code>, <code>reset_password</code>,{" "}
          <code>add_group_member</code>, etc.).
        </li>
        <li>
          <strong>Qué scopes:</strong> lista de scopes OAuth / Application
          permissions consumidos.
        </li>
        <li>
          <strong>Sobre qué recurso:</strong> email del usuario, grupo, OU, u
          otro identificador (sin datos sensibles del contenido).
        </li>
        <li>
          <strong>Resultado:</strong> success / failure / partial,{" "}
          <code>error_code</code>, <code>error_message</code>,{" "}
          <code>duration_ms</code>, <code>request_id</code> para
          correlacionar con nginx.
        </li>
        <li>
          <strong>Cuándo:</strong> timestamp en UTC con precisión de
          milisegundos.
        </li>
      </ul>

      <h3>4.2 Inmutabilidad</h3>
      <p>
        La tabla tiene <em>triggers</em> PostgreSQL que rechazan cualquier{" "}
        <code>UPDATE</code> y <code>DELETE</code>. Ni el equipo de Mekovault
        con acceso root puede modificar un registro individual. La única forma
        de purgar es el <em>retention worker</em> con reglas explícitas
        publicadas —hoy: retención de 24 meses, planeado configurable por
        Cliente en Hito 7— que corre con <code>SECURITY DEFINER</code> y deja
        constancia del batch purgado.
      </p>

      <h3>4.3 Visibilidad para el Cliente</h3>
      <p>
        Cada admin del tenant puede consultar el log en:
      </p>
      <ul>
        <li>
          <code>https://app.mekovault.com/&lt;tu-slug&gt;/admin/credential-usage</code>
        </li>
      </ul>
      <p>
        Filtros por provider, resultado, operación, rango de fechas y
        actor. La consulta usa Row-Level Security por <code>company_id</code>:
        cada tenant ve exclusivamente sus propios registros.
      </p>
      <p>
        Exportación programada CSV/JSON firmada para auditores externos en el
        Hito 7. Mientras tanto, se puede solicitar bajo demanda escribiendo a{" "}
        <a href="mailto:soporte@mekovault.com">soporte@mekovault.com</a>.
      </p>

      <h3>4.4 Correlación con el sistema de auditoría</h3>
      <p>
        <code>credential_usage_log</code> es específico para llamadas al
        directorio externo. Existe una segunda tabla,{" "}
        <code>audit_events</code>, que registra acciones humanas dentro del
        portal (login, aprobación de ticket, creación de rol, etc.). Ambas
        comparten <code>request_id</code> para reconstruir una cadena
        completa: <em>“admin X aprobó el ticket Y, que disparó la operación Z
        sobre el usuario W en Google, con scope A, resultado B”</em>.
      </p>

      <h2>5. Control de accesos internos (Mekovault staff)</h2>
      <ul>
        <li>
          El acceso administrativo a los hosts requiere Tailscale con MFA y
          clave SSH personal. No hay cuentas compartidas.
        </li>
        <li>
          Ningún miembro del equipo de Mekovault necesita —ni tiene por
          defecto— la capacidad de descifrar secretos individuales de un
          Cliente para operar la plataforma.
        </li>
        <li>
          Acceso al vault Infisical restringido a los miembros del equipo de
          plataforma. Los cambios de política quedan en el audit interno de
          Infisical.
        </li>
        <li>
          El acceso a la base de datos productiva se hace vía cuentas
          nominales con RLS activo. La cuenta <code>mekovault_superadmin</code>{" "}
          (BYPASSRLS) tiene uso restringido y deja registros en{" "}
          <code>audit_events</code>.
        </li>
      </ul>

      <h2>6. Respuesta ante incidentes</h2>
      <ul>
        <li>
          Notificación al Cliente afectado dentro de las <strong>72 horas</strong>{" "}
          de confirmado un incidente que involucre datos personales suyos o
          sus credenciales (RGPD art. 33, Ley 21.719 Chile art. 33).
        </li>
        <li>
          Rotación forzosa de todas las credenciales del tenant afectado y
          revocación de la conexión: el Cliente debe reconectar el directorio
          con un Service Account nuevo (nosotros no reutilizamos el
          comprometido).
        </li>
        <li>
          Reporte post-mortem al Cliente con la línea de tiempo, alcance,
          contramedidas y aprendizajes.
        </li>
        <li>
          Canal de reporte responsable de vulnerabilidades:{" "}
          <a href="mailto:security@mekovault.com">security@mekovault.com</a>.
          Respondemos en ≤ 48h hábiles.
        </li>
      </ul>

      <h2>7. Ejercicios de derechos y portabilidad</h2>
      <p>
        Si el Cliente rescinde el servicio o solicita eliminación total de
        sus datos:
      </p>
      <ul>
        <li>
          Borrado del proyecto Infisical (elimina atómicamente todos los
          secretos del tenant).
        </li>
        <li>
          Borrado en cascada de las filas del tenant en PostgreSQL, incluyendo
          la conexión y el catálogo de identidades.
        </li>
        <li>
          El <code>credential_usage_log</code> del tenant se conserva 24 meses
          adicionales por obligaciones de auditabilidad (Ley 21.719 art. 12,
          RGPD art. 30). El Cliente puede solicitar antes su hash pseudónimo
          si su política interna lo requiere.
        </li>
      </ul>

      <h2>8. Marcos de referencia</h2>
      <p>
        Alineamos las prácticas descritas con:
      </p>
      <ul>
        <li>
          <strong>SOC 2 Type II</strong> — controles CC6 (accesos), CC7
          (monitoreo), CC8 (change management). Certificación planeada 2027.
        </li>
        <li>
          <strong>ISO/IEC 27001</strong> — controles A.5 (información), A.8
          (activos), A.9 (accesos), A.12 (operaciones), A.16 (incidentes).
        </li>
        <li>
          <strong>GDPR / RGPD (UE 2016/679)</strong> — arts. 25 (privacy by
          design), 30 (registro de actividades), 32 (seguridad del
          tratamiento), 33 (notificación).
        </li>
        <li>
          <strong>Ley 21.719 (Chile)</strong> — arts. 12 (registro de
          actividades), 33 (notificación de brechas), 34 (medidas de
          seguridad).
        </li>
        <li>
          <strong>Google Workspace</strong> — condiciones de uso del{" "}
          <em>Admin SDK Directory API</em> y del programa de Marketplace.
        </li>
        <li>
          <strong>Microsoft Entra</strong> — condiciones del{" "}
          <em>Microsoft Graph API</em> y del <em>Trust Center</em>.
        </li>
      </ul>

      <h2>9. Preguntas y contacto</h2>
      <p>
        Los equipos de seguridad de Clientes actuales o prospectos pueden
        solicitar:
      </p>
      <ul>
        <li>
          Copia de nuestro <em>DPA</em> firmable (Data Processing Agreement).
        </li>
        <li>
          Cuestionario de seguridad (CAIQ, VSA, SIG Lite) —lo respondemos en
          ≤ 5 días hábiles.
        </li>
        <li>
          Evidencia de auditorías internas y reportes de pen-testing (bajo
          NDA).
        </li>
      </ul>
      <p>
        Escríbenos a{" "}
        <a href="mailto:security@mekovault.com">security@mekovault.com</a> o
        contáctanos por{" "}
        <Link href="/contact">el formulario de contacto</Link>.
      </p>

      <h2>10. Cambios a esta política</h2>
      <p>
        Publicamos la fecha de última revisión en el encabezado. Cambios
        materiales (por ejemplo, nuevos scopes solicitados, cambios en el
        modelo de retención) se comunican con 30 días de anticipación por
        email a los administradores del tenant y quedan reflejados en el
        historial público del sitio.
      </p>

      <p className="text-xs text-muted-foreground">
        Este documento describe controles operativos y no constituye
        certificación formal. Para certificaciones vigentes o en curso ver el
        Trust Center (próximamente en{" "}
        <code>trust.mekovault.com</code>) o solicitarlo por{" "}
        <a href="mailto:security@mekovault.com">security@mekovault.com</a>.
      </p>
    </>
  );
}
