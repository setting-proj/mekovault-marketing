import Link from "@/components/Link";

export const meta = {
  title: "Inventario de software: cómo saber qué paga tu empresa, quién lo usa y cuánto cuesta por mes",
  seoTitle: "Cómo armar el inventario de software · Mekovault",
  description:
    "La lista de todo lo que la empresa paga por persona, con precio, responsable, renovación y uso real. Cómo armarla en una tarde y mantenerla sin planillas.",
  question: "¿Cómo sé qué programas paga mi empresa y quién los usa?",
};

export const summary =
  "Un inventario de software es una lista de todo lo que la empresa paga por persona: cada herramienta con su precio, quién la paga, quién responde por ella, cuántas licencias se compraron y cuántas se usan, y cuándo se renueva. En una empresa de 60 personas se arma en una tarde con tres fuentes: el resumen de la tarjeta, la consola de Google Workspace y los mails de recibo. Lo difícil no es armarlo, es que siga vivo después del primer mes.";

export const steps = [
  {
    name: "Pedir el resumen de cada tarjeta",
    text: "Los últimos 12 meses de la tarjeta de la empresa y de cualquier tarjeta personal que se reintegre. Cada cobro de un proveedor de software es una fila.",
  },
  {
    name: "Revisar la consola de Google Workspace",
    text: "Facturación muestra lo que se paga a Google. Las aplicaciones de terceros con acceso a las cuentas muestran lo que la gente usa aunque nadie lo pague todavía.",
  },
  {
    name: "Buscar los recibos en el mail",
    text: "Buscá 'your receipt', 'tu recibo', 'invoice' y 'factura' en las casillas de administración, finanzas y los gerentes. Ahí aparecen las suscripciones que no pasan por la tarjeta de la empresa.",
  },
  {
    name: "Completar los seis datos de cada fila",
    text: "Nombre, precio y periodicidad, quién paga, responsable, licencias compradas y usadas, fecha de renovación. Si un dato no está, se anota 'no sé' y se pregunta.",
  },
  {
    name: "Decidir qué hacer con cada hallazgo",
    text: "Licencias en cuentas bloqueadas se liberan, duplicados se unifican, pruebas que nadie canceló se cortan. Cada decisión con un responsable y una fecha.",
  },
  {
    name: "Elegir dónde va a vivir la lista",
    text: "Una planilla sirve para la primera tarde. Para que siga al día necesita que cada compra, cada baja y cada renovación la actualicen sin que alguien se acuerde.",
  },
];

export const faq = [
  {
    q: "¿Qué es un inventario de software?",
    a: "La lista de todas las herramientas por las que paga la empresa, con precio, periodicidad, quién la paga, quién es responsable, cuántas licencias se compraron y cuántas se usan, y la fecha de renovación. Es la base del control de gastos en software: sin la lista no sabés cuánto gastás ni qué podés cortar.",
  },
  {
    q: "¿Cómo sé qué suscripciones paga mi empresa si nadie las anotó?",
    a: "Con tres fuentes: el resumen de cada tarjeta (empresa y personales reintegradas), la sección Facturación de la consola de Google Workspace y una búsqueda de recibos en el mail. Entre las tres aparece casi todo; lo que falta sale preguntándole a cada jefatura qué paga su área.",
  },
  {
    q: "¿Cuánto tiempo lleva armar el inventario de aplicaciones de una empresa de 60 personas?",
    a: "Una tarde para la primera versión, si tenés acceso a las tarjetas y a la consola de Google. Lo que lleva más es confirmar quién es responsable de cada herramienta y cuántas licencias se usan de verdad, porque eso requiere preguntar. Mantenerlo al día es lo que falla después, no armarlo.",
  },
  {
    q: "¿Hace falta un programa para llevar el inventario o alcanza con una planilla?",
    a: "Para empezar, la planilla alcanza. Falla cuando nadie la actualiza: una compra nueva, una persona que se va o una renovación no la tocan. Mekovault lee las licencias de Google Workspace, registra el resto en Compras de software con precio y fecha de renovación, e importa tu planilla para no arrancar de cero.",
  },
];

export const related = ["licencias-que-sigues-pagando", "aplicaciones-vinculadas", "licencias-sin-usar"];

export const cta = {
  title: "Importá tu planilla y dejá que se mantenga sola",
  desc: "Mekovault lee las licencias de Google Workspace, registra el resto en Compras de software y te avisa antes de cada renovación. Gratis hasta 20 cuentas.",
};

export function Body() {
  return (
    <>
      <h2>Por qué nadie tiene la lista de suscripciones de la empresa</h2>
      <p>
        Si le preguntás al gerente de finanzas cuánto gasta la empresa en software por mes, va a mirar la tarjeta.
        Si le preguntás al encargado de sistemas, va a mirar la consola de Google. Si le preguntás a marketing, va a
        nombrar Canva y dos herramientas que el resto no conoce. Ninguno tiene la lista completa, y no es por descuido.
      </p>
      <p>
        El software se compra de a poco. Alguien arranca una prueba gratis con su tarjeta y la empresa se la
        reintegra. Un gerente contrata Zoom para su equipo con la tarjeta de su área. La persona que creó la cuenta de
        Notion se fue hace un año y el cobro sigue llegando a una tarjeta que nadie revisa fila por fila. Cada compra
        tuvo sentido en su momento; lo que nunca existió fue un lugar donde anotarlas todas.
      </p>
      <p>
        El resultado es conocido: cuando llega la renovación anual de Google Workspace, nadie sabe cuántas licencias
        hacen falta de verdad. Y cuando alguien se va, nadie sabe en qué herramientas tenía un asiento pago.
      </p>

      <h2>Los seis datos de cada fila del inventario de software</h2>
      <p>
        Un inventario de aplicaciones no necesita treinta columnas. Necesita seis, y que estén completas para cada
        herramienta:
      </p>
      <ul>
        <li>
          <strong>Nombre y plan:</strong> no “Google”, sino “Google Workspace Business Standard”. El plan cambia el
          precio y las reglas para bajar licencias.
        </li>
        <li>
          <strong>Precio y periodicidad:</strong> cuánto cuesta cada licencia y si se paga por mes o por año. Un cobro
          anual que llega en marzo se olvida en abril.
        </li>
        <li>
          <strong>Quién paga:</strong> la tarjeta de la empresa, la tarjeta de un área, una tarjeta personal que se
          reintegra, o una transferencia contra factura.
        </li>
        <li>
          <strong>Responsable:</strong> la persona que decide si la herramienta sigue, cuántas licencias necesita y
          quién entra. Si no hay nombre, la herramienta no tiene dueño y nadie la va a cortar.
        </li>
        <li>
          <strong>Licencias compradas y usadas:</strong> las que se pagan y las que tienen a alguien atrás que entra de
          verdad. La diferencia es plata que se va todos los meses.
        </li>
        <li>
          <strong>Fecha de renovación:</strong> el día en que el proveedor vuelve a cobrar el año completo. Es la única
          fecha en que se puede bajar la cantidad en la mayoría de los planes anuales.
        </li>
      </ul>

      <h2>De dónde sacar los datos en una tarde</h2>
      <p>No hace falta entrevistar a toda la empresa. Tres fuentes cubren casi todo:</p>
      <ol>
        <li>
          <strong>El resumen de la tarjeta.</strong> Pedí los últimos 12 meses de la tarjeta de la empresa y filtrá
          los cobros en dólares o con nombres de proveedores de software. Doce meses, porque los cobros anuales aparecen
          una sola vez. Repetí con las tarjetas personales que se reintegran: ahí viven las pruebas que nunca se
          cancelaron.
        </li>
        <li>
          <strong>La consola de Google Workspace.</strong> En Facturación ves cada suscripción de Google, el plan,
          cuántas licencias compraste y cuántas asignaste. En la ficha de cada usuario, las aplicaciones de terceros con
          acceso a la cuenta te muestran qué herramientas usa la gente con su mail de la empresa: Slack, Canva, Notion,
          Figma. No todas se pagan, pero todas son candidatas a aparecer en la lista.
        </li>
        <li>
          <strong>Los mails de recibo.</strong> Buscá “your receipt”, “tu recibo”, “invoice” y “factura” en las
          casillas de administración, finanzas y de cada gerente. Los proveedores mandan un mail por cada cobro, y ese
          mail trae el plan, el monto y la fecha. Es la fuente más completa para las suscripciones que no pasan por la
          tarjeta de la empresa.
        </li>
      </ol>
      <p>
        Con eso tenés nombre, precio, periodicidad y quién paga. Lo que falta, responsable y licencias usadas, se le
        pregunta a cada jefatura con una lista corta: “estas son las herramientas de tu área, ¿quién las usa?”.
      </p>

      <h2>La planilla mínima: ejemplo de una empresa de 60 personas</h2>
      <p>
        Así se ve un inventario de software recién armado, con precios de ejemplo redondeados. Las filas incompletas no
        son un error: son la lista de preguntas pendientes.
      </p>
      <table>
        <thead>
          <tr>
            <th>Herramienta</th>
            <th>Precio y periodicidad</th>
            <th>Quién paga</th>
            <th>Responsable</th>
            <th>Compradas / usadas</th>
            <th>Renovación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Workspace Business Standard</td>
            <td>US$ 14 por licencia por mes, plan anual</td>
            <td>Tarjeta de la empresa</td>
            <td>Gerente de operaciones</td>
            <td>64 / 58 (3 en cuentas suspendidas)</td>
            <td>15 de marzo</td>
          </tr>
          <tr>
            <td>Slack Pro</td>
            <td>US$ 9 por persona por mes, mensual</td>
            <td>Tarjeta de la empresa</td>
            <td>Gerente de operaciones</td>
            <td>60 / 55</td>
            <td>Mes a mes</td>
          </tr>
          <tr>
            <td>Zoom Workplace Pro</td>
            <td>US$ 15 por licencia por mes, plan anual</td>
            <td>Tarjeta del gerente comercial</td>
            <td>Ventas</td>
            <td>10 / 4</td>
            <td>1 de julio</td>
          </tr>
          <tr>
            <td>Canva para equipos</td>
            <td>US$ 10 por persona por mes, plan anual</td>
            <td>Tarjeta personal, reintegro</td>
            <td>Marketing</td>
            <td>5 / 5</td>
            <td>20 de noviembre</td>
          </tr>
          <tr>
            <td>Notion Plus</td>
            <td>US$ 10 por persona por mes, mensual</td>
            <td>Tarjeta personal de alguien que ya no trabaja</td>
            <td>Nadie definido</td>
            <td>12 / 7</td>
            <td>Desconocida</td>
          </tr>
        </tbody>
      </table>
      <p>
        Esta empresa paga unos 1.300 dólares por mes en estas cinco herramientas. Con la tabla a la vista aparecen de
        inmediato tres cosas que nadie había visto: Zoom tiene 6 licencias sin usar que se renuevan en julio, Notion lo
        paga alguien que ya no está y Google tiene 3 licencias en cuentas suspendidas que se cobran igual que las
        activas.
      </p>
      <p>
        <strong>Qué hacer con lo que aparece.</strong> Lo normal es encontrar tres tipos de hallazgos:
      </p>
      <ul>
        <li>
          <strong>Licencias en cuentas bloqueadas:</strong> personas que se fueron y conservan un asiento pago. En
          Google, suspender no alcanza; hay que eliminar o archivar la cuenta. Cómo hacerlo en cada plataforma está en{" "}
          <Link href="/recursos/licencias-sin-usar">licencias sin usar</Link>.
        </li>
        <li>
          <strong>Duplicados:</strong> dos áreas pagando Zoom por separado, o Canva y Figma para lo mismo. Se elige uno
          y se junta a la gente en un solo plan.
        </li>
        <li>
          <strong>Pruebas que nunca se cancelaron:</strong> cobros mensuales chicos en tarjetas personales, con uno o
          dos usuarios. Se pregunta, y si nadie responde en una semana, se cancelan.
        </li>
      </ul>

      <h2>Control de gastos en software sin volver a la planilla</h2>
      <p>
        La planilla que armaste hoy está desactualizada el mes que viene: entra una persona, se va otra, alguien
        contrata una herramienta nueva, Zoom se renueva. Nadie vuelve a abrirla porque mantenerla es un trabajo que no
        tiene dueño. Para que el inventario siga vivo, cada movimiento tiene que actualizarlo solo.
      </p>
      <p>
        Mekovault arranca por ahí. La pantalla de Licencias lee Google Workspace y muestra, por plataforma, las
        licencias compradas, las usadas y las que están en cuentas bloqueadas, con lo que cuestan por mes y hasta qué
        fecha se pueden reducir. Las suscripciones que no tienen conector (Canva, Notion, Adobe y el resto) se
        registran en <Link href="/compras-de-software">Compras de software</Link> con precio, fecha de renovación y
        responsable, y entran al mismo control. Y para no arrancar de cero, importás la planilla que armaste esta
        tarde: cada fila queda con dueño, vencimiento y aviso 30 días antes de la renovación.
      </p>
      <p>
        Desde ahí, cuando alguien se va, su asiento en cada herramienta queda marcado para liberar. Cuando alguien
        pide algo nuevo, pasa por aprobación y queda en la lista desde el primer día. El inventario deja de ser una
        tarea y pasa a ser el registro de lo que ya ocurre. Si querés ver cuánto pagás hoy por licencias que nadie
        usa, probá la <Link href="/calculadora-licencias">calculadora</Link>.
      </p>
    </>
  );
}
