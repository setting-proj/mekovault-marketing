import Link from "@/components/Link";

export const meta = {
  title: "Licencias sin usar: cómo encontrarlas en cada plataforma y dejar de pagarlas antes de la renovación",
  seoTitle: "Licencias sin usar: encontrarlas y cancelarlas · Mekovault",
  description:
    "Dónde se esconden las licencias que nadie usa en Google Workspace, Slack, Zoom y el resto, qué hacer en cada plataforma y cuándo reducir antes de renovar.",
  question: "¿Cómo encuentro las licencias que pagamos y nadie usa?",
};

export const summary =
  "Las licencias sin usar se esconden en tres sitios: compradas y nunca asignadas, asignadas a cuentas bloqueadas de gente que ya se ha ido, y asignadas a personas activas que no entran desde hace meses. Cada plataforma las muestra en un rincón distinto de su consola y tiene su propia regla para dejar de cobrarlas: en Google suspender no basta, en Slack desactivar sí es suficiente, en Zoom hay que quitar la licencia y además bajar la cantidad contratada. Y en los planes anuales solo se puede reducir en la renovación, así que el trabajo hay que hacerlo 30 días antes.";

export const steps = [
  {
    name: "Contar compradas y asignadas en cada plataforma",
    text: "En la pantalla de facturación de Google Workspace, Slack, Zoom y el resto: cuántas licencias pagas y cuántas tienen a alguien detrás. La diferencia es el primer grupo de licencias sin usar.",
  },
  {
    name: "Cruzar las cuentas bloqueadas con sus licencias",
    text: "Lista de usuarios suspendidos o desactivados en cada plataforma. Cada uno que conserve una licencia es el segundo grupo, el más caro, porque parece en uso.",
  },
  {
    name: "Mirar el último acceso de las cuentas activas",
    text: "Quien no entra desde hace 90 días no necesita esa licencia. En Google se ve en la lista de usuarios; en Zoom, en los informes de uso. Ese es el tercer grupo.",
  },
  {
    name: "Decidir qué hacer con cada una",
    text: "Eliminar o archivar la cuenta, quitar la licencia, reasignarla a la próxima incorporación o bajar el plan. Con un responsable y una fecha por cada decisión.",
  },
  {
    name: "Anotar la renovación y reducir a tiempo",
    text: "Para cada plan anual: fecha de renovación y cantidad a la que quieres bajar. Pon un aviso 30 días antes, porque después de esa fecha pagas otro año completo.",
  },
  {
    name: "Repetir cada mes en 20 minutos",
    text: "Una rutina corta el primer día laborable de cada mes evita que el problema vuelva a crecer hasta la próxima factura anual.",
  },
];

export const faq = [
  {
    q: "¿Qué es una licencia sin usar?",
    a: "Una licencia que la empresa paga y nadie aprovecha. Hay tres tipos: la que compraste y nunca asignaste a nadie, la que está asignada a una cuenta bloqueada de alguien que ya se ha ido, y la que tiene una persona activa que no entra desde hace meses. Las tres cuestan lo mismo que una licencia en uso.",
  },
  {
    q: "¿Suspender la cuenta en Google Workspace deja de cobrar la licencia?",
    a: "No. Una cuenta suspendida conserva su licencia y se factura igual que una activa. Para dejar de pagarla tienes que eliminar la cuenta o pasarla a usuario archivado. En plan flexible el cobro baja en el siguiente ciclo; en plan anual la cantidad solo baja en la renovación.",
  },
  {
    q: "¿Cuándo tengo que renovar licencias o bajar la cantidad en un plan anual?",
    a: "Antes de la fecha de renovación. En la mayoría de los planes anuales puedes subir la cantidad cuando quieras, pero bajarla solo en la renovación. Si esa fecha pasa, te comprometes otro año con las licencias que tenías. Por eso la revisión se hace 30 días antes, no el día que llega la factura.",
  },
  {
    q: "¿Mekovault reduce las licencias por mí?",
    a: "No. Mekovault te muestra cuántas licencias pagas, cuántas se usan y cuántas están en cuentas bloqueadas, te dice hasta qué fecha puedes reducir y los pasos exactos en cada plataforma, y te avisa antes de la renovación. Bajar la cantidad contratada lo hace la empresa en la pantalla de pagos de cada plataforma, porque es un cambio del contrato.",
  },
];

export const related = [
  "licencias-que-sigues-pagando",
  "suspender-eliminar-o-archivar-usuario-google-workspace",
  "calendario-de-renovaciones",
];

export const cta = {
  title: "Mira cuántas licencias pagas sin que nadie las use",
  desc: "Mekovault lee Google Workspace y muestra compradas, usadas y en cuentas bloqueadas, con aviso antes de cada renovación. Gratis hasta 20 cuentas.",
};

export function Body() {
  return (
    <>
      <h2>Los tres sitios donde se esconden las licencias sin usar</h2>
      <p>
        Cuando llega la factura de software, el número que se mira es uno: cuántas licencias se pagan. Pero las
        licencias no utilizadas no aparecen en la factura. Hay que ir a buscarlas, y están en tres sitios distintos:
      </p>
      <ul>
        <li>
          <strong>Compradas y nunca asignadas.</strong> Se contrataron 70 licencias “por si acaso” y se asignaron 62.
          Las otras 8 no tienen nombre y se pagan igual. Es el grupo más fácil de ver: la consola de cada plataforma
          lo muestra en facturación.
        </li>
        <li>
          <strong>Asignadas a cuentas bloqueadas.</strong> La persona se fue, alguien suspendió su cuenta y ahí se
          quedó. La licencia sigue asignada y se cobra como si trabajara. Es el grupo más caro porque parece en uso, y
          en una empresa que lleva tres años sin revisar puede ser el 10 por ciento de la factura.
        </li>
        <li>
          <strong>Asignadas a gente activa que no entra.</strong> El comercial que tiene Zoom con licencia y hace sus
          reuniones por Meet. El diseñador que dejó de abrir Figma en marzo. Trabajan en la empresa, pero esa licencia
          en particular no la usan desde hace meses.
        </li>
      </ul>
      <p>
        Los tres grupos juntos son lo que un proveedor llamaría “oportunidad de optimización de licencias”. Para ti es
        más simple: dinero que sale todos los meses y que nadie decidió gastar.
      </p>

      <h2>Cómo verlas en Google Workspace, Slack y Zoom</h2>
      <p>
        <strong>Google Workspace.</strong> En la consola de administración, Facturación, Suscripciones: ahí ves por
        cada plan cuántas licencias compraste y cuántas están asignadas. Para el segundo grupo, ve a Usuarios y filtra
        por estado “Suspendido”: cada uno de esos nombres que tenga una licencia asignada es una licencia que se paga
        por nadie. Para el tercer grupo, en la misma lista de usuarios añade la columna de último inicio de sesión y
        ordena por fecha: los que no entran desde hace 90 días son candidatos a bajar de plan o a archivar.
      </p>
      <p>
        <strong>Slack.</strong> En Administración, Administrar miembros, ves los miembros activos y los desactivados.
        Slack solo cobra por los activos, así que el segundo grupo aquí se resuelve desactivando. En Facturación ves
        cuántos miembros se están cobrando en el ciclo actual; si ese número es mayor que la gente que trabaja en la
        empresa, alguien sigue activo y no debería.
      </p>
      <p>
        <strong>Zoom.</strong> En Administración de usuarios ves qué cuentas tienen licencia y cuáles son básicas
        (gratis). En Informes, Uso, ves cuántas reuniones hizo cada persona en el periodo. Una cuenta con licencia y
        cero reuniones en dos meses es el caso más común de licencia sin usar en Zoom, y además de quitarla hay que
        bajar la cantidad contratada, porque si no se sigue pagando.
      </p>

      <h2>Qué hay que hacer en cada plataforma para dejar de pagar</h2>
      <p>
        Esta es la parte que confunde: bloquear a la persona no significa lo mismo en todas partes. La tabla resume lo
        verificado en la documentación de cada proveedor. Las reglas completas, con la fuente, están en{" "}
        <Link href="/license-control">Control de licencias</Link>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Plataforma</th>
            <th>¿Bloquear deja de cobrar?</th>
            <th>Qué hay que hacer</th>
            <th>Desde cuándo se aplica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Workspace</td>
            <td>No</td>
            <td>Eliminar la cuenta o pasarla a usuario archivado</td>
            <td>Plan flexible: siguiente ciclo. Plan anual: en la renovación</td>
          </tr>
          <tr>
            <td>Slack</td>
            <td>Sí</td>
            <td>Desactivar al miembro</td>
            <td>El cobro baja solo desde el siguiente ciclo</td>
          </tr>
          <tr>
            <td>Jira y Confluence (plan mensual)</td>
            <td>Sí</td>
            <td>Desactivar la cuenta</td>
            <td>El cobro baja solo</td>
          </tr>
          <tr>
            <td>1Password</td>
            <td>Sí</td>
            <td>Suspender o quitar a la persona</td>
            <td>El cobro baja solo</td>
          </tr>
          <tr>
            <td>Zoom</td>
            <td>No</td>
            <td>Quitar la licencia al usuario y reducir la cantidad contratada</td>
            <td>Siguiente ciclo de cobro</td>
          </tr>
          <tr>
            <td>GitHub Team</td>
            <td>No</td>
            <td>Quitar el puesto de usuario y reducir la cantidad contratada</td>
            <td>Siguiente ciclo de cobro</td>
          </tr>
          <tr>
            <td>HubSpot</td>
            <td>No</td>
            <td>Liberar el puesto de usuario y reducir la cantidad contratada</td>
            <td>Siguiente ciclo de cobro</td>
          </tr>
          <tr>
            <td>Dropbox Business</td>
            <td>No</td>
            <td>Quitar la licencia y reducir la cantidad contratada</td>
            <td>Solo en la renovación</td>
          </tr>
          <tr>
            <td>Salesforce</td>
            <td>No</td>
            <td>Desactivar al usuario y reducir la cantidad contratada</td>
            <td>Solo en la renovación</td>
          </tr>
          <tr>
            <td>Adobe Creative Cloud para equipos</td>
            <td>No</td>
            <td>Quitar la licencia y reducir la cantidad contratada</td>
            <td>Solo en la ventana de renovación</td>
          </tr>
        </tbody>
      </table>
      <p>
        Fíjate en la última columna. En la mitad de las plataformas, quitarle la licencia a la persona no cambia la
        factura: hay un segundo paso, reducir la cantidad contratada, que se hace en la pantalla de pagos y que nadie
        hace porque nadie sabe que existe.
      </p>

      <h2>El calendario: plan flexible, plan anual y los 30 días antes</h2>
      <p>
        En un plan flexible (mes a mes) la regla es simple: lo que liberas este mes deja de cobrarse el mes que viene.
        El coste de olvidarse es un mes de licencia.
      </p>
      <p>
        En un plan anual el coste de olvidarse es un año. Te comprometiste a una cantidad; puedes subirla cuando
        quieras, pero bajarla solo en la fecha de renovación. Si esa fecha pasa sin que nadie haya reducido, las 8
        licencias sin asignar y las 5 en cuentas suspendidas se pagan otros 12 meses. Por eso la revisión no se hace
        cuando llega la factura, sino 30 días antes de renovar licencias: tiempo suficiente para contar, decidir y
        cambiar la cantidad en la consola.
      </p>
      <p>
        <strong>Una rutina mensual de 20 minutos.</strong> El primer día laborable de cada mes, una persona de
        administración o finanzas hace esto:
      </p>
      <ol>
        <li>Abre la facturación de Google Workspace y anota compradas y asignadas (3 minutos).</li>
        <li>Revisa la lista de usuarios suspendidos y marca los que todavía tienen licencia (5 minutos).</li>
        <li>Mira en Slack y Zoom cuántos se están cobrando y los compara con la gente que trabaja (5 minutos).</li>
        <li>Revisa qué planes anuales se renuevan en los próximos 45 días y qué cantidad corresponde (4 minutos).</li>
        <li>Envía a cada responsable de área la lista de sus licencias sin usar con una pregunta: ¿se cancela o se queda? (3 minutos).</li>
      </ol>
      <p>
        Veinte minutos al mes no suenan a mucho, y no lo son. El problema es que, sin alguien asignado, no se hacen
        nunca.
      </p>

      <h2>Lo que hace Mekovault</h2>
      <p>
        La pantalla de Licencias lee Google Workspace y muestra, por plataforma, las licencias compradas, las usadas
        y las que están en cuentas bloqueadas, con lo que cuestan al mes. Para cada plan te dice hasta qué fecha
        puedes reducir y los pasos exactos de esa plataforma, con la regla verificada: eliminar o archivar en Google,
        desactivar en Slack, quitar la licencia y bajar la cantidad en Zoom.
      </p>
      <p>
        Cuando se ejecuta una baja, la licencia de esa persona queda marcada para liberar. Y antes de cada renovación
        llega un aviso con la cantidad a la que puedes bajar y dónde hacerlo. Lo que Mekovault no hace es reducir la
        cantidad contratada: ese paso lo hace la empresa en la pantalla de pagos de cada plataforma, porque es un
        cambio del contrato y conviene que lo firme quien paga. Para las plataformas que no permiten automatizar,
        Mekovault asigna un responsable, registra el puesto de usuario y guarda la evidencia de que se hizo.
      </p>
      <p>
        Si quieres una cifra antes de empezar, la <Link href="/calculadora-licencias">calculadora</Link> estima
        cuánto pagas al mes por licencias que nadie usa con los tres números de tu empresa. Y si todavía no sabes qué
        herramientas paga la empresa, empieza por el{" "}
        <Link href="/recursos/inventario-de-software">inventario de software</Link>.
      </p>
    </>
  );
}
