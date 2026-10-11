import Link from "@/components/Link";

export const meta = {
  title: "Las 21 preguntas que hay que hacerle a cualquier proveedor antes de contratar, y qué responde Mekovault",
  seoTitle: "21 preguntas antes de contratar y qué responde Mekovault",
  description:
    "El checklist que daría un asesor: descubrir programas, salidas de empleados, facilidad de uso, precio y seguridad. Con la respuesta honesta de Mekovault.",
  question: "¿Qué le pregunto a cualquier proveedor antes de contratar?",
};

export const summary =
  "Estas son las 21 preguntas que un asesor le haría a cualquier proveedor de control de cuentas y licencias antes de contratar, agrupadas en cinco bloques: descubrir los programas, gestionar las salidas, facilidad de uso, precio y seguridad. Al lado de cada una, lo que responde Mekovault, incluidas las respuestas que son 'todavía no'.";

export const cta = {
  title: "Pedí la demo con tus propias pruebas",
  desc: "Creá un empleado de prueba, simulale la salida y mirá qué se cerró, qué licencia se liberó y qué quedó registrado. Gratis 90 días, sin tarjeta.",
};

export const related = [
  "que-es-el-control-de-cuentas-y-licencias",
  "offboarding-digital",
  "mekovault-vs-factorial",
];

type Row = { q: string; a: string; state: "si" | "parcial" | "no" };

const BLOCKS: Array<{ title: string; rows: Row[] }> = [
  {
    title: "1. Descubrir todos los programas",
    rows: [
      { q: "¿Detecta programas que pagamos aunque no estén en un inventario?", a: "Sí para lo que entra con la cuenta de Google de la empresa: cada semana lista las aplicaciones autorizadas por cada persona. Lo que se paga con tarjeta y no toca Google se registra en Compras, con dueño y factura, pero no se descubre solo.", state: "parcial" },
      { q: "¿Identifica suscripciones pagadas con tarjetas de distintas áreas?", a: "Solo si se registran en Compras. No leemos los resúmenes de la tarjeta.", state: "parcial" },
      { q: "¿Muestra el costo mensual y anual de cada programa?", a: "Sí, en Licencias para las plataformas conectadas y en Compras para las suscripciones registradas, con total por moneda.", state: "si" },
      { q: "¿Detecta cuentas sin uso y licencias que se pueden eliminar?", a: "Sí: licencias compradas, asignadas y en cuentas bloqueadas, por plataforma, y qué cambiar en la renovación.", state: "si" },
    ],
  },
  {
    title: "2. Gestionar las salidas de empleados",
    rows: [
      { q: "Si mañana despido a alguien, ¿una sola acción retira todos sus accesos?", a: "Una solicitud de baja: bloqueo en Google a la hora de salida, mail redirigido, apps autorizadas revocadas, licencia marcada, eliminación programada. Las plataformas conectadas se cierran en el mismo paso; las guiadas quedan como tarea con responsable.", state: "si" },
      { q: "¿Suspende o elimina cuentas de Google Workspace, Slack, Zoom y Canva?", a: "Google Workspace: sí, hoy. Slack, Zoom y Canva: se están sumando una por una; mientras tanto son tareas guiadas con evidencia.", state: "parcial" },
      { q: "¿Cancela la suscripción o solo desactiva al usuario?", a: "Desactiva al usuario y libera el asiento. Ninguna plataforma deja que un tercero reduzca lo contratado: te decimos exactamente qué reducir y cuándo (en plan anual, en la renovación).", state: "parcial" },
      { q: "¿Reasigna licencias y conserva archivos y mails antes de cerrar?", a: "Sí: la jefatura decide por mail a quién van los archivos y el correo; la licencia se libera o se reasigna al próximo ingreso.", state: "si" },
      { q: "¿Qué pasa con las aplicaciones que no se pueden desconectar automáticamente?", a: "Quedan como tarea guiada con responsable, fecha y evidencia. No decimos que sí cuando es no.", state: "si" },
    ],
  },
  {
    title: "3. Facilidad de uso",
    rows: [
      { q: "¿Puedo usarlo sin conocimientos técnicos?", a: "Sí. Lo conecta el gerente o alguien de administración siguiendo una guía, y desde ahí lo usa Personas. Si preferís, lo conectamos por videollamada sin costo.", state: "si" },
      { q: "¿Recibo alertas antes de las renovaciones y cuando hay cuentas de ex empleados?", a: "Sí: aviso antes de la renovación con la cantidad a reducir, y aviso cuando una baja queda pendiente o requiere atención.", state: "si" },
      { q: "¿El panel y los informes están en español?", a: "Sí: español de Argentina, Chile y México, inglés y portugués.", state: "si" },
      { q: "¿Cuánto tarda implementarlo y quién lo configura?", a: "Diez minutos para conectar Google Workspace; la primera solicitud el mismo día. No hay proyecto de implementación.", state: "si" },
    ],
  },
  {
    title: "4. Precio y condiciones",
    rows: [
      { q: "¿Se cobra por persona, por aplicación o por cantidad de cuentas?", a: "Por empresa. Un precio mensual por los módulos que usés, sin costo por persona.", state: "si" },
      { q: "¿Hay costos adicionales por implementación, conectores o soporte?", a: "No.", state: "si" },
      { q: "¿Puedo contratar mes a mes o exige contrato anual?", a: "Mes a mes. Gratis 90 días sin tarjeta; cancelás cuando quieras.", state: "si" },
      { q: "¿Pueden demostrar cuánto ahorro y cómo se calcula?", a: "Licencias muestra lo que se paga en cuentas bloqueadas y sin asignar; la auditoría registra cada licencia liberada. La calculadora da una estimación antes de conectar.", state: "si" },
    ],
  },
  {
    title: "5. Seguridad y responsabilidad",
    rows: [
      { q: "¿Qué permisos necesita para acceder a mis aplicaciones?", a: "Los de administrar usuarios, grupos, licencias y aplicaciones autorizadas en Google Workspace. No lee mails ni archivos y no pide permisos para hacerlo.", state: "si" },
      { q: "¿Quién puede autorizar una baja y cómo se registra cada acción?", a: "Los roles que vos definas; cada solicitud dice qué roles pueden pedirla. Todo queda en una auditoría que no se puede borrar, 365 días, descargable.", state: "si" },
      { q: "¿Dónde se guarda la información y cómo se protege?", a: "Datos separados por empresa, credenciales cifradas con auditoría de cada uso, sesiones con MFA. Detalle en Seguridad y arquitectura.", state: "si" },
      { q: "¿Qué pasa si la herramienta falla o no logra cerrar una cuenta?", a: "La solicitud queda en 'requiere atención' con el motivo y avisa; nada se da por hecho sin confirmación de la plataforma. Un bloqueo ejecutado se puede deshacer dentro de 60 minutos.", state: "si" },
    ],
  },
];

const LABEL = { si: "Sí", parcial: "En parte", no: "Todavía no" } as const;

export function Body() {
  return (
    <>
      <p>
        La lista viene de lo que responden los asesores y las IA cuando un dueño de pyme pregunta qué exigir. La usamos
        contra nosotros mismos: donde la respuesta es “en parte”, lo decimos. Copiá las preguntas y hacéselas a
        cualquier proveedor, incluido Mekovault.
      </p>
      {BLOCKS.map((b) => (
        <section key={b.title}>
          <h2>{b.title}</h2>
          <table>
            <thead>
              <tr>
                <th>Pregunta</th>
                <th>Mekovault</th>
                <th>Detalle</th>
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r) => (
                <tr key={r.q}>
                  <td>{r.q}</td>
                  <td>
                    <strong>{LABEL[r.state]}</strong>
                  </td>
                  <td>{r.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}

      <h2>Las cinco pruebas que deberías exigir en una demo</h2>
      <ol>
        <li>Crear un empleado de prueba y asignarle mail, grupos y licencia.</li>
        <li>Simular su salida y comprobar qué accesos se retiran solos y a qué hora.</li>
        <li>Comprobar que la licencia queda libre y qué dice la herramienta sobre la renovación.</li>
        <li>Encontrar una aplicación autorizada con esa cuenta que no estaba en ningún inventario.</li>
        <li>Mostrar la auditoría: quién pidió, quién aprobó, qué se hizo, cuándo.</li>
      </ol>
      <p>
        Y la pregunta que resume todo: “si mañana se va una persona, ¿pueden demostrarme que se cerraron sus accesos, se
        recuperaron sus licencias y se canceló lo que ya no necesitamos, sin que yo tenga que perseguir a cinco
        personas?”. Lo que Mekovault hace solo, lo que queda guiado y lo que todavía no está, en{" "}
        <Link href="/platforms">Plataformas</Link>.
      </p>
    </>
  );
}
