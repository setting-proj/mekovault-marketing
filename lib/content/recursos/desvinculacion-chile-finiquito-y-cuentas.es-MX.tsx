import Link from "@/components/Link";

export const meta = {
  title: "Baja de empleado en México: de la renuncia o despido al finiquito y el cierre de cuentas",
  seoTitle: "Baja de empleado en México: finiquito y cuentas · Mekovault",
  description:
    "Renuncia, aviso de rescisión, finiquito o liquidación y baja ante el IMSS, y cómo encajar ahí el cierre del correo, el traspaso de Drive y las licencias.",
  question: "¿Cómo coordino el finiquito con el cierre de las cuentas?",
};

export const summary =
  "En México la baja de un empleado tiene trámites con fecha: la renuncia o el aviso de rescisión, el finiquito (o la liquidación si es despido injustificado) y la baja ante el IMSS dentro de los 5 días hábiles siguientes. Las cuentas no tienen fecha, y por eso quedan abiertas. La regla simple es: la cuenta se bloquea el último día trabajado a la hora de salida, el traspaso de archivos lo decide la jefatura esa misma semana, y la eliminación se programa a 30 días, con el finiquito ya firmado.";

export const faq = [
  {
    q: "¿Bloqueo la cuenta el día del aviso o el último día trabajado?",
    a: "El último día trabajado, a la hora de salida. Si el colaborador avisó con anticipación y sigue trabajando, necesita su cuenta hasta el final. Si el despido es inmediato, el último día es el mismo día del aviso de rescisión.",
  },
  {
    q: "¿Qué pasa si el colaborador se va antes de firmar el finiquito?",
    a: "La cuenta se bloquea igual el último día trabajado. El finiquito es un trámite posterior y no requiere que la persona conserve acceso al correo corporativo. Si necesita documentos personales que dejó en Drive, se los entrega la empresa.",
  },
  {
    q: "¿Y en una renuncia?",
    a: "Igual: último día trabajado, a la hora de salida. La renuncia suele dar más tiempo para traspasar archivos y entrenar al reemplazo, y Mekovault permite programar la baja con semanas de anticipación.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "correo-del-que-se-va",
  "offboarding-digital",
];

export function Body() {
  return (
    <>
      <h2>El calendario laboral y el calendario de las cuentas, juntos</h2>
      <table>
        <thead>
          <tr>
            <th>Momento</th>
            <th>Trámite laboral (México)</th>
            <th>Cuentas y accesos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Decisión</td>
            <td>Se define si es renuncia, despido justificado o despido injustificado, y la fecha de salida</td>
            <td>Personas programa la baja con la fecha y hora de salida; la jefatura queda avisada</td>
          </tr>
          <tr>
            <td>Renuncia o aviso de rescisión</td>
            <td>Renuncia por escrito del colaborador, o aviso de rescisión de la empresa con la causa y la fecha, entregado al trabajador o a la autoridad laboral</td>
            <td>Nada cambia en las cuentas todavía si el colaborador sigue trabajando</td>
          </tr>
          <tr>
            <td>Último día trabajado</td>
            <td>Devolución de equipos y credenciales físicas</td>
            <td>Bloqueo a la hora de salida: sesiones cerradas, respuesta automática, redirección del correo, apps autorizadas revocadas, asientos de Slack y Zoom marcados</td>
          </tr>
          <tr>
            <td>Primera semana</td>
            <td>Cálculo del finiquito (salarios pendientes, aguinaldo, vacaciones y prima vacacional proporcionales) o de la liquidación si es despido injustificado; baja ante el IMSS dentro de los 5 días hábiles</td>
            <td>La jefatura decide por correo qué pasa con Drive y el buzón; traspaso ejecutado</td>
          </tr>
          <tr>
            <td>Finiquito o liquidación</td>
            <td>Pago y firma del recibo; constancia de trabajo si la pide el colaborador</td>
            <td>Licencia liberada o reasignada; cuentas genéricas con nuevo responsable</td>
          </tr>
          <tr>
            <td>Día 30</td>
            <td>Cerrado</td>
            <td>Eliminación o archivo de la cuenta, con aviso previo y opción de deshacer</td>
          </tr>
        </tbody>
      </table>
      <p>
        Los plazos laborales son los generales de la Ley Federal del Trabajo y de la Ley del Seguro Social; confírmalos
        con tu contador o abogado para cada causa. Lo que sí es universal es la columna de la derecha: en la mayoría de
        las empresas no existe, y por eso las cuentas quedan abiertas.
      </p>

      <h2>Tres situaciones típicas en México</h2>
      <h3>Despido inmediato</h3>
      <p>
        El colaborador deja de trabajar el mismo día del aviso. El bloqueo tiene que ser ese día, a la hora en que
        termina la reunión. Si la baja se programa en Mekovault durante la mañana, a las 18:00 se ejecuta sola.
      </p>
      <h3>Renuncia con aviso de dos semanas</h3>
      <p>
        Hay tiempo. Se programa la baja para el último día, se arma el traspaso con el reemplazo y la jefatura decide con
        calma. El riesgo aquí es el contrario: olvidar la fecha. Una baja programada no se olvida.
      </p>
      <h3>Prácticas profesionales o contrato por tiempo determinado</h3>
      <p>
        La salida se conoce desde el primer día. En Mekovault la cuenta puede nacer con fecha de término y la baja queda
        programada desde el alta; si la persona se queda, se extiende con un clic.
      </p>

      <h2>Lo que exige la ley sobre los datos</h2>
      <p>
        La LFPDPPP (Ley Federal de Protección de Datos Personales en Posesión de los Particulares) pide un aviso de
        privacidad, finalidad y proporcionalidad en el tratamiento de los datos del trabajador, incluido lo que queda
        en su correo y sus archivos. Lo práctico: una política informada, redirección en vez de lectura, y registro de
        quién hizo qué. Más en{" "}
        <Link href="/recursos/correo-del-que-se-va">qué hacer con el correo del colaborador que se va</Link>.
      </p>

      <h2>Cómo lo hace Mekovault</h2>
      <p>
        Personas programa la baja (o llega sola desde la nómina con la fecha de salida; hoy BUK y Talana son las
        conectadas), Mekovault la ejecuta el último día a la hora de salida, la jefatura decide por correo qué pasa con
        los archivos, la eliminación queda a 30 días y todo se guarda 365 días. Sin IT, sin tickets, y con la fecha del
        finiquito respetada.
      </p>
    </>
  );
}
