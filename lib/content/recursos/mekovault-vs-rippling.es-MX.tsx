import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs Rippling: cuentas resueltas sin cambiar de nómina",
  seoTitle: "Mekovault vs Rippling IT para pymes en México",
  description:
    "Rippling revoca accesos porque también es tu nómina y RH; exige migrar todo y pagar por empleado. Mekovault se engancha a tu nómina y a Google Workspace.",
  question: "¿Rippling sirve para una pyme en México o necesito Mekovault?",
};

export const summary =
  "Rippling resuelve las cuentas de los colaboradores porque también es la nómina, el RH y la gestión de computadoras de la empresa: al marcar la baja de un empleado, revoca sus accesos. Para eso hay que mover toda la empresa a Rippling y pagar por empleado más una plataforma base. Mekovault hace la parte de cuentas y licencias enganchándose a la nómina que ya tienes (hoy BUK y Talana; Rankmi, Runa y Worky se van sumando) y a tu Google Workspace, por un precio por empresa.";

export const faq = [
  {
    q: "¿Rippling funciona en México?",
    a: "Rippling vende en Estados Unidos y en varios países, principalmente en inglés, con nómina propia para algunos mercados. Para una empresa mexicana implica cambiar la nómina (hoy en Buk, Rankmi, Runa o Worky) y pagar en dólares por empleado más una plataforma base.",
  },
  {
    q: "¿Mekovault administra computadoras y celulares?",
    a: "No. Mekovault administra cuentas, licencias, apps autorizadas y suscripciones. La gestión de dispositivos queda en tu consola de Google o en la herramienta que uses para eso.",
  },
  {
    q: "¿Y si ya tengo Rippling?",
    a: "Entonces la baja de cuentas la hace Rippling. Mekovault te aportaría la decisión de la jefatura sobre archivos y correo, las licencias por plataforma y las apps autorizadas, pero el caso típico de Mekovault es la empresa que no quiere migrar su nómina.",
  },
];

export const related = ["gestion-de-accesos-para-pymes", "mekovault-vs-factorial", "que-preguntar-antes-de-contratar"];

export function Body() {
  return (
    <>
      <h2>Lo que hace cada uno</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Rippling (IT)</th>
            <th>Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Qué es</td>
            <td>Nómina, RH, IT y dispositivos en un solo sistema</td>
            <td>Control de cuentas, licencias y apps, conectado a tu nómina y a Google Workspace</td>
          </tr>
          <tr>
            <td>Qué hay que cambiar para usarlo</td>
            <td>Migrar la nómina y el registro de personas a Rippling</td>
            <td>Nada: se conecta a Google Workspace tal como está, y a BUK o Talana si los usas</td>
          </tr>
          <tr>
            <td>Cuando alguien se va</td>
            <td>Al marcar la baja, revoca accesos en las apps conectadas y recupera la computadora</td>
            <td>Bloqueo el último día a la hora, correo redirigido, la jefatura decide los archivos, licencia liberada, eliminación programada</td>
          </tr>
          <tr>
            <td>Quién decide sobre archivos y correo</td>
            <td>Reglas definidas por IT</td>
            <td>La jefatura directa, por correo, con recordatorios</td>
          </tr>
          <tr>
            <td>Dispositivos</td>
            <td>Sí (compra, envío, borrado remoto)</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Precio</td>
            <td>Por empleado al mes, más plataforma base obligatoria, en dólares</td>
            <td>Un precio por empresa, sin costo por persona</td>
          </tr>
          <tr>
            <td>Idioma y soporte</td>
            <td>Inglés principalmente</td>
            <td>Español de México, Chile y Argentina, inglés y portugués; soporte en español</td>
          </tr>
        </tbody>
      </table>

      <h2>Cuándo elegir Rippling</h2>
      <p>
        Si estás armando la empresa desde cero o vas a cambiar de nómina de todos modos, quieres computadoras, RH y
        cuentas en un solo proveedor, operas en inglés y el precio por empleado te conviene.
      </p>
      <h2>Cuándo elegir Mekovault</h2>
      <p>
        Si tu nómina ya está en Buk, Rankmi, Runa o Worky y no la vas a mover; si tu correo es Google Workspace; si
        quieres que la jefatura decida y quede evidencia; si prefieres un precio por empresa y soporte en español. Más
        en <Link href="/recursos/gestion-de-accesos-para-pymes">gestión de accesos para pymes</Link>.
      </p>
      <p className="text-sm">Datos de Rippling tomados de su sitio público en octubre de 2026; si cambian, avísanos y corregimos.</p>
    </>
  );
}
