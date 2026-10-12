import Link from "@/components/Link";

export const summary =
  "La renovación es el único momento en que el gasto en software baja: en un plan anual, la cantidad contratada solo se reduce ese día, y si nadie lo revisa, se renueva sola por un año más. Un calendario de renovaciones tiene tres datos por suscripción: la fecha, el plazo de aviso y quién decide. Con eso, y una revisión 30 días antes, se pueden bajar licencias, pasar a mensual o cancelar antes de que la tarjeta pague de nuevo.";

export const steps = [
  {
    name: "Lista todas las suscripciones",
    text: "Incluye las que se pagan con tarjeta de alguien y no mandan factura. Fuente: la cartola de la tarjeta corporativa, los reembolsos y la planilla de compras, si existe.",
  },
  {
    name: "Anota fecha, plazo de aviso y responsable",
    text: "Para cada una: cuándo se renueva, cuántos días antes hay que avisar al proveedor para bajar cantidad o cancelar, y quién decide. Sin responsable, no hay decisión.",
  },
  {
    name: "Pon la alerta 30 días antes",
    text: "Un recordatorio en el calendario del responsable y de finanzas, 30 días antes de la fecha (o antes, si el plazo de aviso del contrato es mayor).",
  },
  {
    name: "Revisa las cuatro cosas",
    text: "Licencias compradas y sin asignar, cuentas bloqueadas que todavía tienen licencia, personas que entran el próximo mes y el precio nuevo que te van a cobrar.",
  },
  {
    name: "Decide y avisa al proveedor por escrito",
    text: "Bajar la cantidad, pasar a mensual, cancelar o seguir. Hazlo en la pantalla de pagos de la plataforma o por correo al proveedor, dentro del plazo de aviso.",
  },
];

export const faq = [
  {
    q: "¿Qué es la renovación automática y cómo la desactivo?",
    a: "Es la cláusula por la que la suscripción se cobra de nuevo al terminar el periodo si no la cancelas antes. Casi todas las suscripciones de la empresa la tienen. En algunas plataformas se desactiva en la pantalla de pagos; en otras hay que avisar al proveedor por escrito con un plazo (30 o 60 días es común). Lo que importa no es desactivarla, sino tener la fecha en el calendario con tiempo para decidir.",
  },
  {
    q: "¿Puedo bajar licencias en un plan anual a mitad de año?",
    a: "Normalmente no. En plan anual te comprometes a una cantidad por doce meses: puedes subir, pero la reducción rige en la renovación. En Google Workspace es así; en Slack y Zoom la regla es distinta. Si una persona se va a mitad de año, lo práctico es reasignar su licencia al próximo ingreso y anotar la reducción para la fecha de renovación.",
  },
  {
    q: "¿Cada cuánto conviene revisar las suscripciones de la empresa?",
    a: "Dos ritmos: una revisión corta cada mes (cargos nuevos en la tarjeta, personas que salieron) y una revisión a fondo 30 días antes de cada renovación anual. Con 15 o 20 suscripciones, eso es una hora al mes y una tarde por cada renovación grande.",
  },
  {
    q: "¿Qué puedo negociar antes de renovar licencias?",
    a: "Tres cosas, en este orden: la cantidad (pagar solo las licencias que usas), la periodicidad (pasar a mensual si el equipo va a cambiar) y el precio (pedir que mantengan el precio del año anterior o un descuento por volumen). El proveedor sabe que la renovación es el único momento en que puedes irte, así que es cuando más escucha.",
  },
];

export const related = ["licencias-sin-usar", "licencias-que-sigues-pagando", "sistema-de-compras-de-software-sin-erp"];

export const cta = {
  title: "Que ninguna suscripción se renueve sola",
  desc: "Mekovault te avisa 30 días antes de cada renovación con las licencias sin uso y los pasos exactos de esa plataforma, y Compras de software guarda fecha, tarjeta y responsable de cada suscripción. Gratis hasta 20 cuentas de Google Workspace.",
};

export function Body() {
  return (
    <>
      <h2>Por qué la renovación es el único momento en que el gasto baja</h2>
      <p>
        Durante el año, el gasto en software solo sube. Entra una persona, se agrega una licencia. Un área necesita una
        función nueva, se sube de plan. Nadie se fija porque cada aumento es chico. Bajar, en cambio, tiene fecha: en un
        plan anual, la cantidad contratada se reduce solo en la renovación. Si una persona se fue en marzo y el plan se
        renueva en noviembre, su licencia se paga hasta noviembre, y si en noviembre nadie la saca, hasta el noviembre
        siguiente.
      </p>
      <p>
        El plan mensual es más caro por licencia, pero deja bajar cada mes. El plan anual es más barato, pero te amarra
        la cantidad. Y casi todos, mensuales y anuales, tienen renovación automática: si no haces nada, se cobran de
        nuevo. Por eso el calendario de renovaciones no es un detalle administrativo: es la única herramienta con la
        que una empresa sin IT baja el gasto en software.
      </p>

      <h2>Los tres datos del calendario</h2>
      <p>Cada suscripción de la empresa necesita tres datos. Con menos, el calendario no sirve.</p>
      <ul>
        <li>
          <strong>La fecha de renovación:</strong> el día en que se cobra el próximo periodo. En planes anuales suele
          ser el aniversario del contrato; en mensuales, el mismo día de cada mes.
        </li>
        <li>
          <strong>El plazo de aviso:</strong> cuántos días antes de esa fecha hay que pedir la reducción o la
          cancelación para que rija. En algunas plataformas basta con cambiarlo en la pantalla de pagos el día antes;
          en contratos con proveedor, es común que pidan 30 o 60 días por escrito.
        </li>
        <li>
          <strong>Quién decide:</strong> la persona que sabe si la herramienta sigue siendo necesaria y cuántas
          licencias hacen falta. Normalmente la jefatura del área que la usa, no finanzas.
        </li>
      </ul>
      <p>
        Las reglas cambian por plataforma. Estas tres están verificadas en la documentación de cada proveedor; para
        el resto, revisa tu contrato o la página de facturación antes de dar algo por hecho.
      </p>
      <table>
        <thead>
          <tr>
            <th>Plataforma</th>
            <th>Cuándo baja el cobro</th>
            <th>Qué hay que hacer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Workspace</td>
            <td>Plan flexible: al mes siguiente. Plan anual: solo en la renovación</td>
            <td>Suspender no basta: eliminar o archivar la cuenta (flexible) o anotar la reducción para la renovación (anual)</td>
          </tr>
          <tr>
            <td>Slack</td>
            <td>Desde el próximo ciclo de cobro</td>
            <td>Desactivar al usuario; el cobro baja solo</td>
          </tr>
          <tr>
            <td>Zoom</td>
            <td>Desde el próximo ciclo de cobro</td>
            <td>Quitar la licencia a la persona y además reducir la cantidad contratada</td>
          </tr>
          <tr>
            <td>Otras (Adobe, Notion, Canva, CRM, etc.)</td>
            <td>Depende del contrato</td>
            <td>Revisa el plazo de aviso y si la reducción rige al mes siguiente o en la renovación</td>
          </tr>
        </tbody>
      </table>

      <h2>La revisión de 30 días antes</h2>
      <p>
        Treinta días antes de cada renovación, el responsable y finanzas se juntan media hora y revisan cuatro cosas.
        Treinta días porque alcanza para decidir, avisar al proveedor dentro del plazo y, si hace falta, negociar.
      </p>
      <ol>
        <li>
          <strong>Licencias sin usar:</strong> compradas y no asignadas a nadie. Es la reducción más fácil: nadie las
          va a extrañar.
        </li>
        <li>
          <strong>Cuentas bloqueadas con licencia:</strong> personas que ya no trabajan, cuya cuenta está suspendida
          pero conserva la licencia. Se pagan igual que una activa. Hay que eliminarlas, archivarlas o reasignar la
          licencia antes de la renovación.
        </li>
        <li>
          <strong>Gente que entra el próximo mes:</strong> si hay ingresos confirmados, conviene guardarles licencia
          en vez de bajar y volver a subir. El calendario de RRHH y el de renovaciones tienen que mirarse juntos.
        </li>
        <li>
          <strong>El precio nuevo:</strong> muchos proveedores suben el precio en la renovación y lo avisan en un
          correo que nadie lee. Compara el precio por licencia del año anterior con el que te van a cobrar.
        </li>
      </ol>
      <p>
        Con esos cuatro números, la decisión es simple: seguir con la misma cantidad, bajar, pasar a mensual o
        cancelar. Lo que no sirve es descubrirlo cuando llega el cargo.
      </p>

      <h2>Una rutina y una plantilla</h2>
      <p>
        La rutina tiene dos ritmos. Una vez al mes, alguien de finanzas mira la cartola de la tarjeta corporativa y
        los reembolsos: cada cargo de software que no esté en el calendario, se agrega. Y 30 días antes de cada
        renovación anual, la revisión de arriba. Para una empresa con 15 o 20 suscripciones, es una hora al mes.
      </p>
      <p>La plantilla es una planilla con una fila por suscripción y estas columnas:</p>
      <ul>
        <li><strong>Herramienta y plan:</strong> por ejemplo, Google Workspace Business Standard.</li>
        <li><strong>Cantidad contratada y cantidad en uso:</strong> la diferencia es lo que sobra.</li>
        <li><strong>Precio por licencia y total al mes o al año.</strong></li>
        <li><strong>Periodicidad:</strong> mensual o anual.</li>
        <li><strong>Fecha de renovación.</strong></li>
        <li><strong>Plazo de aviso:</strong> en días, y cómo se avisa (pantalla de pagos o correo al proveedor).</li>
        <li><strong>Medio de pago:</strong> qué tarjeta o cuenta, y de quién.</li>
        <li><strong>Responsable:</strong> quien decide si sigue.</li>
        <li><strong>Decisión y fecha:</strong> seguir, bajar a cuánto, pasar a mensual, cancelar.</li>
      </ul>
      <p>
        Antes de renovar, negocia. El proveedor sabe que la renovación es el único momento en que puedes irte, así que
        es cuando más escucha. Pide, en este orden: menos cantidad (solo las licencias que usas), periodicidad mensual
        si el equipo va a cambiar en los próximos meses, y precio (mantener el del año anterior o un descuento por
        volumen). Si te dicen que no a las tres, al menos tienes la fecha anotada para el próximo año.
      </p>

      <h2>Lo que hace Mekovault</h2>
      <p>
        La pantalla de Licencias muestra, por plataforma, cuántas licencias tienes compradas, cuántas usadas y cuántas
        están en cuentas bloqueadas, cuánto cuestan al mes y hasta qué fecha se pueden reducir. Treinta días antes de
        cada renovación, Mekovault te avisa con las licencias sin uso y los pasos exactos de esa plataforma para bajar
        la cantidad. Reducir la cantidad contratada lo hace la empresa en la pantalla de pagos de cada plataforma;
        Mekovault te dice cuántas, cuándo y cómo, y guarda la evidencia. Las reglas verificadas por plataforma están
        en <Link href="/license-control">Control de licencias</Link>.
      </p>
      <p>
        <Link href="/compras-de-software">Compras de software</Link> guarda, para cada suscripción, la fecha de
        renovación, la tarjeta o cuenta con que se paga y el responsable que decide. También las que no tienen
        conector, como Canva, Notion o Adobe: se registran a mano con precio, fecha y responsable, o se importan desde
        tu planilla de una vez. Cuando una persona se va, la licencia que tenía queda marcada para dar de baja en vez
        de seguir hasta la próxima renovación. Para estimar cuánto se te va hoy, usa la{" "}
        <Link href="/calculadora-licencias">calculadora de licencias</Link>.
      </p>
    </>
  );
}
