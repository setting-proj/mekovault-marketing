import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs Cledara: controlar el gasto no es lo mismo que cerrar las cuentas",
  seoTitle: "Mekovault vs Cledara para cuentas y suscripciones",
  description:
    "Cledara, de Barcelona, controla el gasto en software con tarjetas virtuales; Mekovault controla cuentas y licencias desde RRHH. Cuándo elegir cada uno.",
  question: "¿Cledara o Mekovault para las suscripciones de mi empresa?",
};

export const summary =
  "Cledara, con oficina en Barcelona, controla el gasto en software desde finanzas: tarjetas virtuales por suscripción, facturas y renovaciones, pensada para equipos de finanzas de empresas de 25 a 150 personas, en inglés. Mekovault controla las cuentas y licencias desde RRHH: crea y cierra la cuenta de Google el día que corresponde, decide con el responsable y libera la licencia. Si tu problema es el gasto, Cledara; si es que las cuentas sigan abiertas, Mekovault; muchas empresas necesitan las dos cosas.";

export const faq = [
  {
    q: "¿Cledara cierra la cuenta de Google de un trabajador que se va?",
    a: "No es su foco. Cledara bloquea la tarjeta con la que se pagaba la suscripción y, con su módulo de IT, puede quitar accesos en algunas aplicaciones. No sustituye al bloqueo de la cuenta de Google con correo redirigido y archivos traspasados.",
  },
  {
    q: "¿Mekovault emite tarjetas virtuales?",
    a: "No. Mekovault registra las suscripciones en Compras con responsable, vencimiento y factura, y recuerda la renovación, pero el pago sigue en tu banco o tarjeta.",
  },
  {
    q: "¿Están disponibles en español y en España?",
    a: "Cledara es de Barcelona, pero su sitio está en inglés; cobra por número de aplicaciones, en libras o euros. Mekovault está en español (España, Chile, Argentina y México), inglés y portugués, y cobra un precio por empresa, sin coste por persona.",
  },
];

export const related = ["mekovault-vs-factorial", "licencias-que-sigues-pagando", "que-es-el-control-de-cuentas-y-licencias"];

export function Body() {
  return (
    <>
      <h2>Lo que hace cada uno</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Cledara</th>
            <th>Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desde dónde se controla</td>
            <td>Finanzas: lo que se paga</td>
            <td>RRHH: quién entra, cambia y se va</td>
          </tr>
          <tr>
            <td>Herramienta principal</td>
            <td>Tarjetas virtuales por suscripción, conciliación contable, renovaciones</td>
            <td>Solicitudes con fecha que crean y cierran cuentas, licencias por plataforma, apps autorizadas</td>
          </tr>
          <tr>
            <td>Cuando alguien se va</td>
            <td>Se bloquea la tarjeta; el acceso se revisa aparte</td>
            <td>Se bloquea la cuenta el último día, se redirige el correo, el responsable decide los archivos, se libera la licencia</td>
          </tr>
          <tr>
            <td>Descubrir suscripciones</td>
            <td>Sí, por los pagos con sus tarjetas</td>
            <td>Por las apps autorizadas con la cuenta de Google y por el registro en Compras; no lee tarjetas</td>
          </tr>
          <tr>
            <td>Nómina como origen</td>
            <td>No</td>
            <td>Sí: tu sistema de nómina (hoy Buk y Talana; Factorial y Sesame se van sumando)</td>
          </tr>
          <tr>
            <td>Idioma y moneda</td>
            <td>Inglés; libras y euros; por número de aplicaciones</td>
            <td>Español, inglés y portugués; un precio por empresa</td>
          </tr>
          <tr>
            <td>Para quién</td>
            <td>Finanzas de scaleups de 25 a 150 personas</td>
            <td>Propietarios, gerentes y RRHH de empresas de 10 a 500 sin administrador de cuentas</td>
          </tr>
        </tbody>
      </table>

      <h2>Cuándo elegir Cledara</h2>
      <p>
        Si tu dolor principal es el dinero: decenas de suscripciones pagadas con tarjetas de distintas personas,
        facturas que no llegan y renovaciones sorpresa, y tienes a alguien de finanzas que lo va a operar en inglés.
        Que sea una empresa de Barcelona no cambia eso: el producto se usa en inglés.
      </p>
      <h2>Cuándo elegir Mekovault</h2>
      <p>
        Si tu dolor es que las cuentas y los accesos sigan abiertos después de que alguien se fue, que el responsable
        no decida a tiempo qué pasa con los archivos, que nadie sepa qué apps leen Drive, y que todo eso lo tenga que
        pedir RRHH sin IT. Las suscripciones también se registran, pero el control parte en la persona, no en el
        pago. Cómo lo hace, en <Link href="/account-governance">Gobierno de cuentas</Link>.
      </p>
      <p className="text-sm">Datos de Cledara tomados de su sitio público en octubre de 2026; si cambian, avísanos y corregimos.</p>
    </>
  );
}
