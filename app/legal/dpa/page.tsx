import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acuerdo de tratamiento de datos (DPA)",
  description:
    "Data Processing Agreement plantilla — cumple RGPD Art. 28 + Ley 21.719 de Chile.",
};

export default function DPAPage() {
  return (
    <>
      <h1>Acuerdo de Tratamiento de Datos (DPA)</h1>
      <p className="text-sm text-muted-foreground">
        Versión 1.0 · Vigencia: 2026 · Este documento es una <strong>plantilla</strong>{" "}
        de referencia — para operar con un cliente lo firmamos como anexo al contrato de servicio.
      </p>

      <h2>1. Partes</h2>
      <ul>
        <li>
          <strong>Encargado del tratamiento</strong> (Data Processor): Mekovault
          SpA, Santiago de Chile.
        </li>
        <li>
          <strong>Responsable del tratamiento</strong> (Data Controller): el
          Cliente que contrata los servicios de Mekovault.
        </li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        Este DPA regula el tratamiento de datos personales que Mekovault
        realiza <em>por cuenta y en nombre del Cliente</em> como consecuencia
        de la prestación de servicios (gestión de identidades corporativas
        en Google Workspace, Microsoft Entra y otros directorios).
      </p>

      <h2>3. Categorías de datos tratados</h2>
      <ul>
        <li>
          <strong>Empleados del Cliente</strong>: nombre, apellido, email
          corporativo, cargo, departamento, manager, permieres asignados, IP y
          user-agent de sesiones.
        </li>
        <li>
          <strong>Solicitantes externos</strong> (formulario público): email,
          nombre, motivo de la solicitud.
        </li>
        <li>
          <strong>Registros de actividad</strong>: audit log inmutable de todas
          las acciones administrativas realizadas sobre las identidades del
          Cliente.
        </li>
      </ul>

      <h2>4. Duración</h2>
      <p>
        Mientras dure el contrato de servicios. Al terminar, Mekovault ejecuta
        el borrado de los datos del Cliente en un plazo máximo de 30 días
        calendario, salvo obligaciones legales de conservación (facturación
        tributaria, audit logs de plataforma).
      </p>

      <h2>5. Obligaciones de Mekovault (Encargado)</h2>
      <ul>
        <li>
          Tratar los datos únicamente según las instrucciones documentadas del
          Cliente.
        </li>
        <li>
          Aplicar medidas técnicas y organizativas apropiadas: cifrado en
          tránsito TLS 1.3, aislamiento multi-tenant con Row-Level Security en
          PostgreSQL, vault dedicado por Cliente en Infisical, backups cifrados
          AES-256 en Backblaze B2 con object lock.
        </li>
        <li>
          Garantizar que su personal se compromete a mantener la
          confidencialidad.
        </li>
        <li>
          Notificar al Cliente sin dilación indebida (dentro de 72 horas) ante
          cualquier violación de seguridad que afecte datos personales.
        </li>
        <li>
          Asistir al Cliente en el cumplimiento de sus obligaciones frente a
          solicitudes de titulares (derechos ARCO / GDPR Art. 15-22).
        </li>
        <li>
          Asistir al Cliente en la realización de evaluaciones de impacto
          (DPIA) cuando sean requeridas.
        </li>
      </ul>

      <h2>6. Sub-encargados</h2>
      <p>
        Mekovault contrata sub-encargados para prestar el servicio. La lista
        actualizada está publicada en{" "}
        <a href="/legal/sub-processors">/legal/sub-processors</a>. Notificamos
        con 30 días de anticipación cualquier cambio.
      </p>

      <h2>7. Transferencias internacionales</h2>
      <p>
        Los datos del Cliente se procesan principalmente en{" "}
        <strong>Estados Unidos (AWS us-east-1)</strong> con backup en
        Backblaze B2 US-West. Ambos proveedores están adheridos al marco{" "}
        <em>EU-US Data Privacy Framework</em> (para datos de residentes UE).
      </p>

      <h2>8. Derechos de auditoría</h2>
      <p>
        El Cliente puede auditar el cumplimiento de este DPA con 15 días de
        aviso previo. Alternativamente Mekovault entrega evidencias
        documentales (informes SOC 2, políticas internas) cuando así se
        solicite.
      </p>

      <h2>9. Devolución o supresión de datos</h2>
      <p>
        A pedido del Cliente y en cualquier momento:
      </p>
      <ul>
        <li>
          <strong>Exportación</strong>: Mekovault entrega los datos del Cliente
          en formato estructurado (JSON/CSV) en un plazo de 15 días.
        </li>
        <li>
          <strong>Borrado</strong>: se ejecuta la eliminación completa (DB +
          sub-encargados) en un plazo de 30 días. Excepciones: audit log de
          plataforma (5 años) y backups con object lock (hasta que expire la
          retención).
        </li>
      </ul>

      <h2>10. Responsabilidad</h2>
      <p>
        Cada Parte responde por los daños causados por su incumplimiento de
        este DPA o de la normativa aplicable de protección de datos, hasta
        el límite establecido en el contrato de servicios.
      </p>

      <h2>11. Legislación aplicable</h2>
      <p>
        Este DPA se rige por las leyes de la República de Chile, en particular
        la <strong>Ley 21.719</strong>. Para clientes con titulares en la
        Unión Europea, aplica adicionalmente el <strong>Reglamento (UE)
        2016/679 (RGPD)</strong>.
      </p>

      <p className="mt-10 text-sm text-muted-foreground">
        Solicitar la versión firmable del DPA: escribir a{" "}
        <a href="mailto:legal@mekovault.com">legal@mekovault.com</a> o
        directamente a <a href="mailto:cloud@mekovault.com">cloud@mekovault.com</a>.
      </p>
    </>
  );
}
