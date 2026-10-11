import Link from "@/components/Link";

export const summary =
  "Gestión de accesos, en lenguaje de dueño, es saber quién tiene cuenta en qué, que esa cuenta se cree cuando la persona entra y se cierre cuando se va, y poder demostrarlo. Una empresa de 10 a 500 personas sin equipo de IT no necesita Okta, JumpCloud ni Rippling: necesita que su Google Workspace y sus plataformas se gobiernen desde Personas.";

export const faq = [
  {
    q: "¿Qué es IAM y necesito uno?",
    a: "IAM (gestión de identidades y accesos) es la categoría de Okta, Microsoft Entra o JumpCloud: un directorio central, inicio de sesión único y reglas de quién accede a qué. Es para empresas con IT y cientos de aplicaciones. Si tu directorio es Google Workspace y tus herramientas se abren 'con Google', ya tienes el 80 % de un IAM; lo que falta es el ciclo de altas y bajas con evidencia.",
  },
  {
    q: "¿Cuánto cuestan Okta, JumpCloud o Rippling?",
    a: "Okta publica suites desde 6 a 17 USD por usuario al mes con un mínimo anual; JumpCloud, paquetes de 9 a 13 USD por usuario; Rippling cobra por empleado más una plataforma base y exige migrar la nómina. Para 80 personas son miles de dólares al año y un proyecto de IT. Mekovault cobra un precio por empresa, sin costo por persona.",
  },
  {
    q: "¿Qué pasa con las plataformas que no permiten automatizar?",
    a: "Existen, y ninguna herramienta las automatiza de verdad sin su plan empresarial. Lo honesto es convertirlas en tareas guiadas con responsable, fecha y evidencia. Es lo que hace Mekovault con las plataformas marcadas como 'guiadas'.",
  },
];

export const related = [
  "que-es-el-control-de-cuentas-y-licencias",
  "aplicaciones-vinculadas",
  "que-preguntar-antes-de-contratar",
];

export function Body() {
  return (
    <>
      <h2>Lo que de verdad necesita una empresa de 10 a 500 personas</h2>
      <ol>
        <li><strong>Un origen:</strong> que las altas y bajas salgan de Personas o de la nómina, no de un correo a IT.</li>
        <li><strong>Un directorio que mande:</strong> Google Workspace como fuente de la verdad; las demás plataformas se cuelgan de ahí.</li>
        <li><strong>Fechas:</strong> la cuenta nace el día de ingreso y se cierra el último día, a la hora.</li>
        <li><strong>Decisión de la jefatura:</strong> a quién van los archivos y el correo de quien se va.</li>
        <li><strong>Vista de licencias:</strong> cuántas compraste, cuántas usas, cuántas quedaron en cuentas bloqueadas.</li>
        <li><strong>Apps autorizadas bajo control:</strong> qué aplicaciones leen Drive o Gmail y quién lo decidió.</li>
        <li><strong>Evidencia:</strong> quién pidió, quién aprobó, qué se hizo, cuándo. Para un auditor o para ti.</li>
      </ol>
      <p>Fíjate en lo que no está en la lista: inicio de sesión único, autenticación multifactor propia, directorio paralelo, políticas de contraseñas. Google Workspace ya trae todo eso.</p>

      <h2>Okta, JumpCloud, Rippling, Microsoft Entra: para quién son</h2>
      <table>
        <thead>
          <tr>
            <th>Herramienta</th>
            <th>Para quién</th>
            <th>Lo que exige</th>
            <th>Lo que sobra en una pyme</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Okta</td>
            <td>Empresas con IT y cientos de aplicaciones</td>
            <td>Mínimo anual, consultoría, un administrador dedicado</td>
            <td>Directorio paralelo, SSO que Google ya da</td>
          </tr>
          <tr>
            <td>JumpCloud</td>
            <td>IT de empresas medianas y proveedores de servicios</td>
            <td>Agente en cada computador, configuración técnica</td>
            <td>Gestión de dispositivos, RADIUS, LDAP</td>
          </tr>
          <tr>
            <td>Rippling</td>
            <td>Empresas que quieren mover nómina, RRHH e IT a un solo proveedor</td>
            <td>Migrar la nómina y la plataforma base obligatoria</td>
            <td>Cambiar de sistema de personas para resolver las cuentas</td>
          </tr>
          <tr>
            <td>Microsoft Entra ID Governance</td>
            <td>Empresas con Microsoft 365 y licencias P1/P2</td>
            <td>Licencias adicionales por usuario, configuración de IT</td>
            <td>No aplica si tu correo es Google</td>
          </tr>
          <tr>
            <td>Mekovault</td>
            <td>Empresas de 10 a 500 personas con Google Workspace y sin administrador de cuentas</td>
            <td>Conectar Google Workspace con una guía; opcionalmente BUK o Talana</td>
            <td>Nada: un precio por empresa, en español</td>
          </tr>
        </tbody>
      </table>

      <h2>Cómo saber si estás listo para “más”</h2>
      <p>
        Si tienes más de 500 personas, varios dominios, aplicaciones hechas en casa que necesitan inicio de sesión
        propio, o un equipo de IT con tiempo, mira Okta o JumpCloud. Si tu correo es Microsoft 365, Entra. Si tienes 10 a
        500 personas, Google Workspace y a alguien de Personas que hoy manda correos a IT para pedir cuentas, lo que te
        falta es gobierno del ciclo, no un IAM.
      </p>

      <h2>Cómo lo hace Mekovault</h2>
      <p>
        Mekovault se conecta a tu Google Workspace (y opcionalmente a tu nómina), convierte cada ingreso, cambio y salida
        en una solicitud con fecha que se ejecuta sola, le pregunta a la jefatura lo que solo ella sabe, muestra las
        licencias por plataforma, revisa las apps autorizadas cada semana y guarda la evidencia 365 días. Por un precio
        por empresa, sin costo por persona, y sin proyecto de implementación. Lo que no permite automatizar una
        plataforma queda como tarea guiada; no te vamos a decir que sí cuando es no. Más en{" "}
        <Link href="/recursos/que-es-el-control-de-cuentas-y-licencias">qué es el control de cuentas y licencias</Link>.
      </p>
    </>
  );
}
