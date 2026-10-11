import Link from "@/components/Link";

export const meta = {
  title: "Desvinculación en Argentina: del telegrama de despido a la liquidación final y el cierre de cuentas",
  seoTitle: "Desvinculación en Argentina y cierre de cuentas · Mekovault",
  description:
    "Plazos del telegrama de despido y de la liquidación final en Argentina, y cómo encajar ahí el cierre del mail, el traspaso de Drive y las licencias.",
  question: "¿Cómo coordino la liquidación final con el cierre de las cuentas?",
};

export const summary =
  "En Argentina la desvinculación tiene trámites con fecha: el telegrama de despido (o la renuncia por telegrama), el preaviso o su pago, y la liquidación final dentro de los 4 días hábiles siguientes al cese. Las cuentas no tienen fecha, y por eso quedan abiertas. La regla simple es: la cuenta se bloquea el último día trabajado a la hora de salida, el traspaso de archivos lo decide la jefatura esa misma semana, y la eliminación se programa a 30 días, con la liquidación final ya pagada.";

export const faq = [
  {
    q: "¿Bloqueo la cuenta el día del telegrama o el último día trabajado?",
    a: "El último día trabajado, a la hora de salida. Si hay preaviso y la persona lo trabaja, sigue necesitando su cuenta hasta el final. Si el despido es con preaviso pagado (indemnización sustitutiva), el último día es el mismo día en que se comunica.",
  },
  {
    q: "¿Qué pasa si la persona se va antes de cobrar la liquidación final?",
    a: "La cuenta se bloquea igual el último día trabajado. La liquidación final y la certificación de servicios son trámites posteriores y no requieren que la persona conserve acceso al correo corporativo. Si necesita documentos personales que dejó en Drive, se los entrega la empresa.",
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
            <th>Trámite laboral (Argentina)</th>
            <th>Cuentas y accesos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Decisión</td>
            <td>Se define la causa y la fecha de cese</td>
            <td>Personas programa la baja con la fecha y hora de salida; la jefatura queda avisada</td>
          </tr>
          <tr>
            <td>Telegrama de despido</td>
            <td>Comunicación fehaciente (telegrama o carta documento) con la causa, si la hay; preaviso de 15 días a 2 meses según la antigüedad, o su pago</td>
            <td>Nada cambia en las cuentas todavía si la persona sigue trabajando el preaviso</td>
          </tr>
          <tr>
            <td>Último día trabajado</td>
            <td>Devolución de equipos y credenciales físicas</td>
            <td>Bloqueo a la hora de salida: sesiones cerradas, respuesta automática, redirección del mail, apps autorizadas revocadas, asientos de Slack y Zoom marcados</td>
          </tr>
          <tr>
            <td>Primera semana</td>
            <td>Liquidación final dentro de los 4 días hábiles siguientes al cese; certificación de servicios y remuneraciones</td>
            <td>La jefatura decide por mail qué pasa con Drive y la casilla; traspaso ejecutado</td>
          </tr>
          <tr>
            <td>Cierre del trámite</td>
            <td>Liquidación final pagada y recibo firmado; baja en los organismos que correspondan</td>
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
        Los plazos laborales son los generales de la Ley de Contrato de Trabajo; confirmalos con tu contador o abogado
        para cada causa y cada convenio. Lo que sí es universal es la columna de la derecha: en la mayoría de las
        empresas no existe, y por eso las cuentas quedan abiertas.
      </p>

      <h2>Tres situaciones típicas en Argentina</h2>
      <h3>Despido con preaviso pagado</h3>
      <p>
        La persona deja de trabajar el mismo día de la comunicación. El bloqueo tiene que ser ese día, a la hora en que
        termina la reunión. Si la baja se programa en Mekovault durante la mañana, a las 18:00 se ejecuta sola.
      </p>
      <h3>Renuncia con preaviso trabajado</h3>
      <p>
        Hay tiempo. Se programa la baja para el último día, se arma el traspaso con el reemplazo y la jefatura decide con
        calma. El riesgo acá es el contrario: olvidar la fecha. Una baja programada no se olvida.
      </p>
      <h3>Pasantía o contrato a plazo fijo</h3>
      <p>
        La salida se conoce desde el primer día. En Mekovault la cuenta puede nacer con fecha de término y la baja queda
        programada desde el alta; si la persona se queda, se extiende con un clic.
      </p>

      <h2>Lo que exige la ley sobre los datos</h2>
      <p>
        La Ley 25.326 de Protección de los Datos Personales pide finalidad y proporcionalidad en el tratamiento de los
        datos del trabajador, incluido lo que queda en su mail y sus archivos. Lo práctico: una política informada,
        redirección en vez de lectura, y registro de quién hizo qué. Más en{" "}
        <Link href="/recursos/correo-del-que-se-va">qué hacer con el mail del que se va</Link>.
      </p>

      <h2>Cómo lo hace Mekovault</h2>
      <p>
        Personas programa la baja (o llega sola desde tu sistema de sueldos cuando esté conectado; hoy BUK y Talana),
        Mekovault la ejecuta el último día a la hora de salida, la jefatura decide por mail qué pasa con los archivos, la
        eliminación queda a 30 días y todo se guarda 365 días. Sin IT, sin tickets, y con la fecha de la liquidación
        final respetada.
      </p>
    </>
  );
}
