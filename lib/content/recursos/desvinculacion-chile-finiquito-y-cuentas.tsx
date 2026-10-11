import Link from "@/components/Link";

export const summary =
  "En Chile la desvinculación tiene fechas fijas: la carta de despido dentro de 3 días hábiles, el finiquito dentro de 10 días hábiles. Las cuentas no tienen fecha, y por eso quedan abiertas. La regla simple es: la cuenta se bloquea el último día trabajado a la hora de salida, el traspaso de archivos lo decide la jefatura esa misma semana, y la eliminación se programa a 30 días, con el finiquito ya firmado.";

export const faq = [
  {
    q: "¿Bloqueo la cuenta el día del aviso o el último día trabajado?",
    a: "El último día trabajado, a la hora de salida. Si hay aviso con 30 días, la persona sigue trabajando y necesita su cuenta. Si el despido es inmediato (por ejemplo, con pago del mes de aviso), el último día es el mismo día de la carta.",
  },
  {
    q: "¿Qué pasa si la persona se va antes de firmar el finiquito?",
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
            <th>Trámite laboral (Chile)</th>
            <th>Cuentas y accesos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Decisión</td>
            <td>Se define la causal y la fecha de término</td>
            <td>Personas programa la baja con la fecha y hora de salida; la jefatura queda avisada</td>
          </tr>
          <tr>
            <td>Carta de despido</td>
            <td>Dentro de 3 días hábiles desde el término (6 si es por necesidades de la empresa), con copia a la Inspección del Trabajo</td>
            <td>Nada cambia en las cuentas todavía si la persona sigue trabajando</td>
          </tr>
          <tr>
            <td>Último día trabajado</td>
            <td>Devolución de equipos y credenciales físicas</td>
            <td>Bloqueo a la hora de salida: sesiones cerradas, respuesta automática, redirección del correo, apps autorizadas revocadas, asientos de Slack y Zoom marcados</td>
          </tr>
          <tr>
            <td>Primera semana</td>
            <td>Preparación del finiquito</td>
            <td>La jefatura decide por correo qué pasa con Drive y el buzón; traspaso ejecutado</td>
          </tr>
          <tr>
            <td>Finiquito</td>
            <td>Dentro de 10 días hábiles; firma ante ministro de fe o finiquito electrónico</td>
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
        Los plazos laborales son los generales del Código del Trabajo; confírmalos con tu asesor para cada causal. Lo
        que sí es universal es la columna de la derecha: en la mayoría de las empresas no existe, y por eso las cuentas
        quedan abiertas.
      </p>

      <h2>Tres situaciones típicas en Chile</h2>
      <h3>Despido con mes de aviso pagado</h3>
      <p>
        La persona deja de trabajar el mismo día de la carta. El bloqueo tiene que ser ese día, a la hora en que termina
        la reunión. Si la baja se programa en Mekovault durante la mañana, a las 18:00 se ejecuta sola.
      </p>
      <h3>Renuncia con 30 días</h3>
      <p>
        Hay tiempo. Se programa la baja para el último día, se arma el traspaso con el reemplazo y la jefatura decide con
        calma. El riesgo aquí es el contrario: olvidar la fecha. Una baja programada no se olvida.
      </p>
      <h3>Práctica profesional o contrato a plazo</h3>
      <p>
        La salida se conoce desde el primer día. En Mekovault la cuenta puede nacer con fecha de término y la baja queda
        programada desde el alta; si la persona se queda, se extiende con un clic.
      </p>

      <h2>Lo que exige la ley sobre los datos</h2>
      <p>
        La Ley 21.719 de protección de datos personales (vigente desde diciembre de 2026) pide finalidad y
        proporcionalidad en el tratamiento de los datos del trabajador, incluido lo que queda en su correo y sus
        archivos. Lo práctico: una política informada, redirección en vez de lectura, y registro de quién hizo qué. Más
        en <Link href="/recursos/correo-del-que-se-va">qué hacer con el correo del que se va</Link>.
      </p>

      <h2>Cómo lo hace Mekovault</h2>
      <p>
        Personas programa la baja (o llega sola desde BUK o Talana con la fecha de término), Mekovault la ejecuta el
        último día a la hora de salida, la jefatura decide por correo qué pasa con los archivos, la eliminación queda a
        30 días y todo se guarda 365 días. Sin IT, sin tickets, y con la fecha del finiquito respetada.
      </p>
    </>
  );
}
