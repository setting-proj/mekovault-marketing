import Link from "@/components/Link";

export const meta = {
  title: "Aplicaciones con acceso a las cuentas de tu empresa: cómo verlas, decidir y revocarlas",
  seoTitle: "Apps con acceso a las cuentas de tu empresa · Mekovault",
  description:
    "Cada persona autoriza apps con su cuenta de Google (Slack, Canva, Apps Script). Cómo listar las de toda la empresa, clasificar el riesgo y revocar.",
  question: "¿Qué aplicaciones tienen acceso a las cuentas de mi empresa?",
};

export const summary =
  "Cada persona de tu empresa autoriza aplicaciones con su cuenta de Google: Slack, Canva, Notion, un complemento de Sheets, el celular. Esas aplicaciones leen Drive, Gmail o Contactos aunque la persona ya se haya ido. La consola de Google permite listarlas cuenta por cuenta y revocarlas; lo que no hace es mirarlas todas juntas, clasificar el riesgo ni avisar cuando aparece una nueva.";

export const faq = [
  {
    q: "¿Dónde veo las apps que tienen acceso a una cuenta de Google?",
    a: "La persona lo ve en su cuenta, en Seguridad, 'Aplicaciones de terceros con acceso a la cuenta'. El administrador lo ve en la consola, en la ficha de cada usuario, 'Aplicaciones conectadas', y puede revocarlas. No hay una vista de toda la empresa en la consola; hay que recorrer usuario por usuario o usar la API.",
  },
  {
    q: "¿Qué es shadow IT?",
    a: "Las herramientas que la gente usa para trabajar sin que la empresa las haya aprobado ni sepa que existen. La forma más común hoy es una app autorizada con la cuenta de Google de la empresa. No es mala intención: es gente resolviendo su trabajo. El problema es que nadie decide si esa app puede leer Drive.",
  },
  {
    q: "¿Revocar una app rompe algo?",
    a: "La persona deja de poder usar esa app con su cuenta de Google hasta que la vuelva a autorizar. Por eso conviene avisar antes, dar un plazo y revocar solo cuando hay una decisión. Si la app es de la empresa (Slack, por ejemplo), se marca como permitida y no se toca.",
  },
];

export const related = [
  "offboarding-digital",
  "baja-empleado-google-workspace",
  "gestion-de-accesos-para-pymes",
];

export function Body() {
  return (
    <>
      <h2>Qué significa “aplicación con acceso a la cuenta”</h2>
      <p>
        Cuando alguien entra a una herramienta con “Continuar con Google” o instala un complemento, esa herramienta pide
        permisos: a veces solo saber quién es (mail y nombre), a veces leer el calendario, a veces leer y escribir todo
        Drive o todo Gmail. La persona acepta, y desde ese momento la aplicación tiene una llave que sigue funcionando
        aunque la persona cierre sesión, cambie de computadora o deje la empresa, hasta que alguien la revoca.
      </p>
      <p>
        En una empresa de 100 personas es normal encontrar entre 300 y 600 autorizaciones activas. La mayoría son
        inofensivas (entrar a Slack, a Notion, al celular). Unas pocas leen Drive completo o Gmail, y nadie en la empresa
        decidió que eso estuviera bien.
      </p>

      <h2>Los tres niveles de riesgo</h2>
      <table>
        <thead>
          <tr>
            <th>Nivel</th>
            <th>Qué permiso pidió</th>
            <th>Ejemplos</th>
            <th>Qué hacer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bajo</td>
            <td>Solo “entrar con Google” (nombre, mail)</td>
            <td>Slack, Notion, Canva, Figma, Zoom</td>
            <td>Permitir si es una herramienta de la empresa; tolerar si es personal y no toca datos</td>
          </tr>
          <tr>
            <td>Medio</td>
            <td>Calendario, Tareas, Formularios, archivos propios de la app</td>
            <td>Calendly, complementos de Sheets, apps de notas</td>
            <td>Permitir con responsable; revisar al año</td>
          </tr>
          <tr>
            <td>Alto</td>
            <td>Drive completo, Gmail, Contactos, administración</td>
            <td>Asistentes de mail, sincronizadores, scripts, apps desconocidas</td>
            <td>Decidir con la jefatura; revocar si no se justifica</td>
          </tr>
        </tbody>
      </table>

      <h2>Cómo revisarlo en Google, hoy, a mano</h2>
      <ol>
        <li>En la consola de administración, abrí un usuario y mirá “Aplicaciones conectadas”. Repetí por cada persona (sí, por cada una).</li>
        <li>Anotá las que piden Drive, Gmail o Contactos.</li>
        <li>Preguntale a la jefatura de cada persona si esa app es de trabajo.</li>
        <li>Revocá las que no se justifican y avisale a la persona.</li>
        <li>Volvé a hacerlo el mes que viene, porque la gente autoriza apps todas las semanas.</li>
      </ol>
      <p>
        También podés bloquear una app para toda la empresa desde Seguridad, Controles de API, pero esa decisión la toma
        un administrador y no deja trazabilidad de por qué.
      </p>

      <h2>Cómo lo hace Mekovault</h2>
      <p>
        Mekovault revisa todas las cuentas de la empresa una vez a la semana (sábado de madrugada), guarda el inventario
        de aplicaciones por persona con su nivel de riesgo y después solo registra los cambios. Cuando aparece una app
        nueva sin política, la jefatura directa recibe un aviso con un plazo de 5 días hábiles para decidir (permitir,
        tolerar o bloquear); si no decide, hay un recordatorio, un aviso final y la revocación al término del día. Si la
        persona la vuelve a vincular, se vuelve a quitar y la jefatura se entera. Y al dar de baja una cuenta, todas sus
        aplicaciones se revocan en el mismo paso, Slack primero. Todo con evidencia. Es la parte “shadow IT” de{" "}
        <Link href="/recursos/offboarding-digital">el offboarding digital</Link>, resuelta sin que RRHH tenga que
        aprender qué es un token.
      </p>
    </>
  );
}
