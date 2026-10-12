import Link from "@/components/Link";

export const meta = {
  title: "Cómo armar un sistema de compras de software sin comprar un ERP: pedir, aprobar, pagar y renovar en orden",
  seoTitle: "Sistema de compras de software sin ERP · Mekovault",
  description:
    "Quién pide, quién aprueba, quién paga y quién renueva cada herramienta: un sistema de compras de software simple para pymes de 20 a 500 personas, sin ERP.",
  question: "¿Cómo ordeno las compras de software de mi empresa sin un ERP?",
};

export const summary =
  "Un sistema de compras de software no necesita un ERP: necesita que cada herramienta tenga a alguien que la pide, alguien que la aprueba, alguien que la paga y una fecha en la que se revisa. Con un catálogo de lo ya aprobado, una solicitud que diga para quién y por qué, un aprobador por área y la orden de compra ligada al pago y a la factura, una empresa de 20 a 500 personas ordena sus compras en una semana. Puedes empezar con una hoja de cálculo y un formulario; cuando las renovaciones se te pasan, hace falta algo más.";

export const steps = [
  {
    name: "Arma el catálogo de lo aprobado",
    text: "Lista las herramientas que la empresa ya paga: nombre, plan, precio, quién la administra y fecha de renovación. Todo lo que está ahí se puede pedir sin discusión.",
  },
  {
    name: "Define una solicitud con tres datos",
    text: "Para quién es, para qué sirve y cuánto cuesta al mes o al año. Si la herramienta es nueva, agrega qué problema resuelve y si existe algo parecido en el catálogo.",
  },
  {
    name: "Nombra un aprobador por área",
    text: "La jefatura directa aprueba lo que está en catálogo. Lo nuevo o lo que supera un monto pasa además por quien controla el presupuesto. Fija un plazo de respuesta: 48 horas.",
  },
  {
    name: "Compra con orden de compra",
    text: "Quien compra emite una orden de compra con proveedor, monto, periodicidad y centro de costos, y guarda las credenciales en el lugar acordado, no en su correo.",
  },
  {
    name: "Paga y liga la factura",
    text: "Tesorería paga con tarjeta corporativa o transferencia y adjunta la factura (el CFDI) a la orden. Así cada cargo de la tarjeta tiene una solicitud detrás.",
  },
  {
    name: "Anota la renovación y la baja",
    text: "Registra la fecha de renovación y quién decide si sigue. Cuando el colaborador que usaba la licencia se va, la licencia se libera o se reasigna, no se sigue pagando.",
  },
];

export const faq = [
  {
    q: "¿Necesito un ERP para tener un sistema de compras?",
    a: "No. Un ERP ordena compras de insumos, inventario y contabilidad de empresas grandes. Para software, lo que necesitas es un flujo con cuatro roles (quien pide, quien aprueba, quien compra, quien paga) y un registro donde cada herramienta tenga solicitud, orden de compra, factura y fecha de renovación. Eso cabe en una hoja de cálculo al principio y en un módulo como Compras de software de Mekovault después.",
  },
  {
    q: "¿Qué es una orden de compra y por qué sirve para software?",
    a: "Es el documento donde la empresa dice qué compra, a quién, por cuánto y con qué periodicidad, antes de pagar. Para software sirve porque deja escrito el centro de costos, la fecha de renovación y quién autorizó. Cuando llega el cargo de la tarjeta, se sabe de dónde viene.",
  },
  {
    q: "¿Cómo funciona la gestión de compras si la jefatura no responde la aprobación?",
    a: "Con un plazo y un siguiente. La regla práctica es 48 horas: si la jefatura no responde, la solicitud pasa a la siguiente persona definida (por ejemplo, Control o el administrador del sistema). Sin esa regla, las solicitudes se quedan en el correo y la gente termina pagando con su tarjeta.",
  },
  {
    q: "¿Cómo hago control de gastos de software en la empresa sin revisar la tarjeta cada mes?",
    a: "Haz que ningún gasto exista sin solicitud. Si cada herramienta nace con una solicitud aprobada, una orden de compra y una factura ligada, el control de gastos es mirar esa lista, no reconstruir el estado de cuenta. Los cargos que no tienen solicitud detrás son los que hay que perseguir.",
  },
];

export const related = ["inventario-de-software", "calendario-de-renovaciones", "que-preguntar-antes-de-contratar"];

export const cta = {
  title: "Ordena las compras de software sin ERP",
  desc: "Compras de software de Mekovault lleva la solicitud, la aprobación, la orden de compra, el pago y la renovación de cada herramienta, con seis roles y aviso 30 días antes de renovar. Gratis hasta 20 cuentas de Google Workspace.",
};

export function Body() {
  return (
    <>
      <h2>Cómo se compra software hoy en una empresa de 50 personas</h2>
      <p>
        Alguien de marketing necesita Canva. Le escribe por WhatsApp a su jefatura, la jefatura dice “va”, y la
        persona paga con su tarjeta y pide reembolso. Ventas contrató un CRM hace dos años con la tarjeta del gerente
        comercial; se cobra todos los meses y nadie recuerda cuántos usuarios tiene. Diseño paga Adobe con una tarjeta
        que vence el próximo mes. Finanzas se entera de todo cuando llega el estado de cuenta.
      </p>
      <p>
        Esto no pasa por desorden: pasa porque nadie definió quién pide, quién aprueba, quién paga y quién revisa. En
        una empresa de 20 a 500 personas sin área de IT, el software se compra como se compra un café: cuando hace
        falta, con lo que hay a la mano. El problema aparece después, cuando hay tres herramientas para lo mismo, una
        suscripción de alguien que ya no trabaja y una renovación anual que se cobró sola.
      </p>

      <h2>Lo que un sistema de compras necesita de verdad</h2>
      <p>
        Un ERP resuelve compras de insumos, almacén y contabilidad para empresas grandes. Para software, la gestión de
        compras necesita mucho menos. Estas son las piezas:
      </p>
      <ul>
        <li>
          <strong>Catálogo de lo aprobado:</strong> la lista de herramientas que la empresa ya paga y acepta. Lo que
          está en el catálogo se pide sin volver a discutirlo.
        </li>
        <li>
          <strong>Una solicitud con para quién y por qué:</strong> nombre del colaborador, qué va a hacer con la
          herramienta y cuánto cuesta. Sin esto, la aprobación es un “va” por WhatsApp.
        </li>
        <li>
          <strong>Un aprobador por área:</strong> la jefatura directa. Si cada compra pasa por el director general, se
          traba; si no pasa por nadie, se desordena.
        </li>
        <li>
          <strong>Control de presupuesto y centro de costos:</strong> a qué área se carga y si hay dinero para eso
          este año. Importa cuando la herramienta es nueva o cara.
        </li>
        <li>
          <strong>Orden de compra:</strong> el documento que dice qué se compra, a quién, por cuánto y cada cuánto.
        </li>
        <li>
          <strong>Pago y factura ligados:</strong> cada cargo de la tarjeta corporativa o cada transferencia apunta a
          una orden de compra y a una factura (el CFDI del proveedor).
        </li>
        <li>
          <strong>Fecha de renovación:</strong> el día en que la empresa puede bajar la cantidad o cancelar. Es el dato
          que más dinero ahorra y el que menos se anota.
        </li>
      </ul>

      <h2>La gestión de compras en cinco pasos</h2>
      <p>
        El flujo no cambia según el tamaño de la empresa; cambia quién ocupa cada rol. En una empresa de 30 personas,
        la misma persona puede comprar y pagar. En una de 300, son áreas distintas.
      </p>
      <table>
        <thead>
          <tr>
            <th>Paso</th>
            <th>Quién</th>
            <th>Qué queda registrado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Pedir</td>
            <td>El colaborador que necesita la herramienta</td>
            <td>Para quién, para qué, cuánto cuesta, si está en catálogo o es nueva</td>
          </tr>
          <tr>
            <td>2. Aprobar</td>
            <td>La jefatura directa; si es nueva o supera el monto, también quien controla el presupuesto</td>
            <td>Quién aprobó, cuándo, con qué presupuesto y centro de costos</td>
          </tr>
          <tr>
            <td>3. Comprar</td>
            <td>Quien compra (Compras o administración)</td>
            <td>Orden de compra, proveedor, plan contratado, credenciales guardadas</td>
          </tr>
          <tr>
            <td>4. Pagar</td>
            <td>Tesorería o finanzas</td>
            <td>Medio de pago, periodicidad, factura adjunta</td>
          </tr>
          <tr>
            <td>5. Renovar o dar de baja</td>
            <td>Quien administra la herramienta, con la jefatura</td>
            <td>Fecha de renovación, decisión de seguir, bajar cantidad o cancelar; licencia liberada cuando alguien se va</td>
          </tr>
        </tbody>
      </table>
      <p>
        Lo importante del registro no es el formato: es que cada paso deje un dato que el siguiente paso usa. La orden
        de compra sale de la solicitud aprobada; la factura se liga a la orden; la renovación se revisa con la fecha
        que quedó en la orden.
      </p>

      <p>
        Un sistema de compras falla por dos razones: es tan pesado que la gente se lo salta, o tan ligero que no sirve
        para nada. Estas reglas lo mantienen en medio:
      </p>
      <ol>
        <li>
          <strong>Catálogo primero.</strong> Si la herramienta está en el catálogo, la aprobación de compras es un
          clic de la jefatura. Solo lo nuevo pasa por control de presupuesto.
        </li>
        <li>
          <strong>Umbral de monto.</strong> Por debajo de cierto monto anual (por ejemplo, lo que cuesta una licencia
          al año), aprueba la jefatura sola. Por encima de ese monto, también Control.
        </li>
        <li>
          <strong>48 horas para responder.</strong> Si el aprobador no contesta en dos días hábiles, la solicitud
          pasa al siguiente. Nadie debería pagar con su tarjeta porque una aprobación se quedó en el correo.
        </li>
        <li>
          <strong>Sin orden, no hay pago.</strong> Tesorería no paga ni reembolsa nada que no tenga solicitud aprobada
          y orden de compra.
        </li>
        <li>
          <strong>Toda suscripción tiene responsable y fecha.</strong> Incluidas las que se pagan con tarjeta y no
          mandan factura. Si nadie es responsable, nadie la cancela.
        </li>
      </ol>

      <h2>Cómo empezar con una hoja de cálculo, y cuándo deja de alcanzar</h2>
      <p>
        No necesitas un software de compras para empezar. Necesitas un formulario y una hoja de cálculo. El formulario
        recoge la solicitud: nombre, área, herramienta, para qué, costo, periodicidad. La hoja de cálculo tiene una
        fila por herramienta con estas columnas: herramienta, plan, precio, periodicidad, responsable, centro de
        costos, medio de pago, fecha de renovación, estado. Quien aprueba contesta el correo del formulario; quien
        compra agrega la fila; quien paga anota la factura.
      </p>
      <p>
        Esto alcanza hasta que pasa alguna de estas cosas: la hoja de cálculo tiene más de 30 filas y nadie la
        actualiza; se pasa una renovación anual porque la fecha estaba anotada pero nadie la miró; alguien se fue de
        la empresa y su licencia de Figma siguió pagándose seis meses; o el director pregunta “¿cuánto gastamos en
        software?” y la respuesta tarda una semana. En ese punto, el sistema de compras necesita avisar solo, no
        esperar a que alguien abra la hoja de cálculo.
      </p>

      <h2>Lo que hace Compras de software de Mekovault</h2>
      <p>
        <Link href="/compras-de-software">Compras de software</Link> es el flujo de cinco pasos de esta guía, con
        seis roles: Solicitante, Jefatura, Control, Compras, Tesorería y Administrador. Alguien pide una herramienta
        del catálogo o una nueva. La jefatura aprueba con un clic si está en catálogo; si es nueva, pasa por Control
        con presupuesto y centro de costos, y luego por Compras. Compras emite la orden de compra en PDF, registra el
        proveedor y guarda las credenciales. Tesorería paga con tarjeta corporativa o transferencia, anota la
        periodicidad y recibe el aviso de factura. Si nadie responde en 48 horas, se avisa al siguiente.
      </p>
      <p>
        Cada suscripción queda con fecha de renovación, y 30 días antes llega el aviso para decidir si sigue, baja
        cantidad o se cancela. Cuando un colaborador se va, la licencia que tenía se da de baja o se reasigna, en vez
        de seguir pagándose. Las herramientas sin conector (Canva, Notion, Adobe y el resto) se registran a mano con
        precio, fecha de renovación y responsable, y entran al{" "}
        <Link href="/license-control">control de licencias</Link> junto con Google Workspace. Si ya tienes una hoja
        de cálculo, se importa completa de una vez. Antes de decidir, puedes estimar cuánto se te va en licencias con
        la <Link href="/calculadora-licencias">calculadora</Link>.
      </p>
    </>
  );
}
