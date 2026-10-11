import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs hacerlo a mano en la consola de Google: lo que la consola no hace sola",
  seoTitle: "Mekovault vs la consola de administración de Google",
  description:
    "La consola de Google puede todo, pero no se entera de que alguien se fue. Qué queda a medias cuando se hace a mano y qué cambia con Mekovault.",
  question: "¿No me alcanza con la consola de administración de Google?",
};

export const summary =
  "La consola de administración de Google puede hacer todo lo que hace Mekovault en Google Workspace: crear, suspender, transferir, eliminar. Lo que no puede es enterarse de que alguien entró o se fue, hacerlo el día y la hora correctos sin que un administrador se acuerde, preguntarle a la jefatura, mirar las demás plataformas ni dejar evidencia legible. Mekovault no reemplaza la consola: la opera por vos.";

export const faq = [
  {
    q: "¿Mekovault necesita permisos de superadministrador?",
    a: "Necesita una cuenta de servicio con permisos para administrar usuarios, grupos, licencias y aplicaciones autorizadas. No lee mails ni archivos. Cada uso de esa credencial queda auditado.",
  },
  {
    q: "¿Y si prefiero seguir haciéndolo a mano?",
    a: "Podés. Esta guía sirve igual como checklist. La diferencia aparece cuando la persona que lo hace a mano está de vacaciones, se va, o se olvida de eliminar a los 30 días.",
  },
  {
    q: "¿Puedo seguir usando la consola después de conectar Mekovault?",
    a: "Sí. Mekovault lee lo que cambies en la consola en su siguiente sincronización. Lo ideal es que las altas y bajas pasen por Mekovault para que queden con fecha, decisión y evidencia.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "alta-de-cuentas-el-primer-dia",
  "mekovault-vs-factorial",
];

export function Body() {
  return (
    <>
      <h2>Lo mismo, hecho a mano y hecho con Mekovault</h2>
      <table>
        <thead>
          <tr>
            <th>Situación</th>
            <th>A mano en la consola</th>
            <th>Con Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Entra alguien el lunes</td>
            <td>Alguien se entera (a veces el mismo lunes), crea la cuenta, adivina grupos y licencia</td>
            <td>Personas o el sistema de sueldos registran el ingreso; la cuenta se crea el lunes a primera hora con grupos, unidad y licencia del área</td>
          </tr>
          <tr>
            <td>Se va alguien el viernes a las 18:00</td>
            <td>El administrador suspende cuando puede; a veces el lunes</td>
            <td>Se bloquea el viernes a las 18:00, con mail redirigido y respuesta automática</td>
          </tr>
          <tr>
            <td>A quién van sus archivos</td>
            <td>Lo decide el administrador, o nadie</td>
            <td>Lo decide la jefatura por mail; dos recordatorios si no responde</td>
          </tr>
          <tr>
            <td>La licencia</td>
            <td>Queda asignada a la cuenta suspendida; se descubre en la factura</td>
            <td>Queda marcada para liberar; aviso antes de la renovación con la cantidad a reducir</td>
          </tr>
          <tr>
            <td>Eliminar a los 30 días</td>
            <td>Si alguien se acuerda</td>
            <td>Programado, con aviso previo y opción de deshacer</td>
          </tr>
          <tr>
            <td>Slack, Zoom, Figma</td>
            <td>Otra consola, otro día, otra persona</td>
            <td>En la misma solicitud: se cierran las conectadas y las demás quedan como tarea con responsable</td>
          </tr>
          <tr>
            <td>Apps autorizadas con la cuenta</td>
            <td>Usuario por usuario, si alguien sabe dónde mirar</td>
            <td>Revisión semanal de toda la empresa, riesgo, decisión de la jefatura</td>
          </tr>
          <tr>
            <td>La persona vuelve por 5 días</td>
            <td>Reactivar, acordarse de volver a suspender</td>
            <td>Reactivación temporal con aprobación de la jefatura; se bloquea sola al vencer</td>
          </tr>
          <tr>
            <td>El auditor pregunta qué se hizo</td>
            <td>Registro de la consola, técnico, mezclado con todo</td>
            <td>Auditoría legible: quién pidió, quién aprobó, qué se hizo, cuándo; 365 días</td>
          </tr>
          <tr>
            <td>Quién puede hacerlo</td>
            <td>Quien tenga la clave de administrador</td>
            <td>Los roles que definas: Personas pide, la jefatura decide, Soporte resuelve</td>
          </tr>
        </tbody>
      </table>

      <h2>Lo que la consola hace mejor</h2>
      <p>
        Todo lo que es excepcional: cambiar la configuración de seguridad, crear unidades organizativas nuevas, migrar
        dominios, definir políticas de dispositivos. Mekovault no toca eso. Se ocupa de lo repetitivo que pasa cada vez
        que alguien entra, cambia o se va, que es donde se pierden las licencias y los accesos.
      </p>

      <h2>Cómo conviven</h2>
      <p>
        Conectás Google Workspace con una guía de diez minutos. Desde ahí las altas y bajas se piden en Mekovault (o
        llegan desde tu sistema de sueldos cuando esté conectado; hoy BUK y Talana) y la consola queda para lo
        excepcional. Si alguien cambia algo a mano, Mekovault lo ve en la siguiente sincronización. Cómo se gobierna
        cada cuenta, en <Link href="/account-governance">Gobierno de cuentas</Link>; qué hace cada plataforma, en{" "}
        <Link href="/platforms">Plataformas</Link>.
      </p>
    </>
  );
}
