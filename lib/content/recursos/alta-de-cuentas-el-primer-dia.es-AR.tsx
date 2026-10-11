import Link from "@/components/Link";

export const meta = {
  title: "Alta de mail corporativo para quien entra: listo el primer día, sin ticket a IT",
  seoTitle: "Crear el mail corporativo del nuevo empleado · Mekovault",
  description:
    "Cómo crear la cuenta de Google Workspace de un nuevo ingreso con grupos, unidad, alias y licencia el día que entra, desde Personas y sin pasar por IT.",
  question: "¿Cómo creo la cuenta del que entra sin pasar por IT?",
};

export const summary =
  "La cuenta de mail de quien entra debería existir el primer día a primera hora, con su nombre bien escrito, los grupos de su área, la unidad correcta y la licencia que le corresponde. Para eso el dato tiene que salir de Personas (o de tu sistema de sueldos) antes del ingreso, no de un ticket a IT la mañana en que la persona llega.";

export const steps = [
  { name: "Registrar el ingreso con fecha", text: "Personas carga nombre, mail personal, puesto, área, jefatura y fecha de ingreso en cuanto se firma el contrato." },
  { name: "Definir el mail", text: "Nombre.apellido en el dominio de la empresa; si ya existe, se decide el alias antes del primer día, no ese día." },
  { name: "Asignar grupos, unidad y licencia", text: "Por área: los grupos de mail, la unidad organizativa y el tipo de licencia salen de una plantilla, no de memoria." },
  { name: "Crear la cuenta el día de ingreso", text: "A primera hora, con contraseña temporal enviada al mail personal y cambio obligatorio al entrar." },
  { name: "Registrar la evidencia", text: "Quién pidió, cuándo se creó y con qué: para la auditoría y para el día en que esa persona se vaya." },
];

export const faq = [
  {
    q: "¿Necesito a alguien de IT para crear la cuenta?",
    a: "No. La consola de Google permite crear usuarios a cualquier administrador, y Mekovault lo hace solo a partir del dato de Personas. Lo que sí necesita decisión es el estándar: cómo se escriben los mails, qué grupos tiene cada área y qué licencia corresponde.",
  },
  {
    q: "¿Qué pasa si el mail ya existe?",
    a: "Si es la misma persona que vuelve, se reactiva su cuenta anterior con sus grupos. Si es otra persona con el mismo nombre, se define un alias o una variante antes del primer día. Mekovault lo detecta al registrar el ingreso y pregunta.",
  },
  {
    q: "¿Y las demás plataformas (Slack, Zoom, Figma)?",
    a: "La cuenta de Google es la base; con ella la persona entra a la mayoría de las herramientas. Los asientos que se pagan por persona se asignan según el puesto; Mekovault te dice cuáles corresponden y asigna los que la plataforma permite.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "mekovault-vs-consola-de-google",
  "gestion-de-accesos-para-pymes",
];

export function Body() {
  return (
    <>
      <h2>Lo que pasa cuando el alta es un ticket</h2>
      <p>
        La persona llega a las 9:00. Su jefatura le escribe a IT o a quien tenga la clave de administrador. La cuenta se
        crea a las 11:30, con el apellido mal escrito porque se copió de un chat. No está en el grupo de su área, así
        que no le llegan los mails del equipo. La licencia es la que estaba libre, no la que corresponde. El primer día
        de esa persona fue esperar. Y seis meses después, cuando se va, nadie sabe qué tenía.
      </p>

      <h2>El estándar que hay que decidir una sola vez</h2>
      <ul>
        <li><strong>Formato del mail:</strong> nombre.apellido, o inicial y apellido. Sin números ni espacios. Qué pasa cuando se repite.</li>
        <li><strong>Grupos por área:</strong> ventas@, operaciones@, todos@. Cada área tiene su lista y cada ingreso entra a ella.</li>
        <li><strong>Unidad organizativa:</strong> por área o por sede; define qué políticas de seguridad aplican.</li>
        <li><strong>Licencia por puesto:</strong> quién necesita Business Standard y quién Starter; quién necesita asiento de Slack, Zoom o Figma.</li>
        <li><strong>Datos mínimos:</strong> nombre, mail personal para la contraseña temporal, puesto (opcional), fecha de ingreso en el formato del país.</li>
      </ul>

      <h2>El día de ingreso, paso a paso</h2>
      <ol>
        <li>A primera hora se crea la cuenta con el formato acordado.</li>
        <li>Se le asignan grupos, unidad y licencia según la plantilla del área.</li>
        <li>La persona recibe en su mail personal la dirección nueva y una contraseña temporal; al entrar la cambia.</li>
        <li>Se asignan los asientos de las plataformas que corresponden al puesto (o quedan como tarea para el encargado).</li>
        <li>Queda registrado quién lo pidió, cuándo se creó y con qué.</li>
      </ol>

      <h2>Cómo lo hace Mekovault</h2>
      <p>
        El alta se pide desde Personas con un formulario que valida nombre, mail personal, puesto y fecha (en el formato
        del país), muestra el mail que se va a crear y permite editarlo, y detecta si ya existe. Si tu sistema de sueldos
        está conectado (hoy <Link href="/conectores/buk">BUK</Link> y <Link href="/conectores/talana">Talana</Link>;
        Humand, Calipso, Tango Gestión, Bejerman o Workia cuando estén conectados), el ingreso llega solo con su fecha.
        El día de ingreso la cuenta se crea sola con grupos, unidad y licencia por área, los asientos de las
        plataformas conectadas se asignan, y todo queda en la auditoría. Si el contrato tiene fecha de término, la baja
        queda programada desde el alta.
      </p>
    </>
  );
}
