import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs Factorial: crear la cuenta no es lo mismo que gobernar el ciclo completo",
  seoTitle: "Mekovault vs Factorial para cuentas y licencias",
  description:
    "Factorial crea y elimina cuentas de Google desde su suite de RRHH. Mekovault se engancha a la nómina que ya tienes y gobierna cuentas, licencias y apps.",
  question: "¿Me sirve Factorial o necesito Mekovault?",
};

export const summary =
  "Factorial es un software de recursos humanos con un módulo de IT que crea y elimina cuentas de Google Workspace al dar de alta o de baja a un trabajador. Mekovault no sustituye tu software de RRHH: se engancha a tu sistema de nómina (hoy Buk y Talana; Factorial y Sesame se van sumando) o a Personas, y gobierna el ciclo completo de cuentas, licencias y aplicaciones con decisión de la jefatura y evidencia. Si ya usas Factorial, puedes usar los dos.";

export const faq = [
  {
    q: "¿Factorial crea la cuenta de Google Workspace?",
    a: "Sí, su integración con Google Workspace crea y elimina cuentas desde la ficha del empleado, dentro de su suite de RRHH. Es un paso del alta y de la baja, no el ciclo completo.",
  },
  {
    q: "¿Necesito cambiar de software de RRHH para usar Mekovault?",
    a: "No. Mekovault funciona con Personas (su propio registro simple) o conectado a tu sistema de nómina (hoy Buk y Talana; Factorial y Sesame se van sumando). Si tu nómina todavía no está conectada, Personas es el origen mientras llega el conector. No pide migrar la nómina ni los contratos.",
  },
  {
    q: "¿Puedo usar Factorial y Mekovault a la vez?",
    a: "Sí. Factorial para contratos, vacaciones y nómina; Mekovault para que las cuentas, licencias y apps se cierren con decisión de la jefatura y evidencia. Si Factorial crea la cuenta, Mekovault la encuentra en Google y la gobierna desde ahí.",
  },
];

export const related = [
  "mekovault-vs-consola-de-google",
  "que-es-el-control-de-cuentas-y-licencias",
  "que-preguntar-antes-de-contratar",
];

export function Body() {
  return (
    <>
      <p>
        Factorial es una empresa española, así que en España es la comparación más natural. Esta guía responde con lo
        que hace cada herramienta, sin más.
      </p>
      <h2>Lo que hace cada uno</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Factorial (módulo IT)</th>
            <th>Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Qué es</td>
            <td>Suite de RRHH (contratos, nómina, vacaciones) con módulo de gestión de software</td>
            <td>Control de cuentas, licencias y aplicaciones, conectado a tu RRHH o a Personas</td>
          </tr>
          <tr>
            <td>Origen de altas y bajas</td>
            <td>Su propia ficha de empleado</td>
            <td>Tu sistema de nómina (hoy Buk y Talana; Factorial y Sesame se van sumando) o Personas; no exige cambiar de sistema</td>
          </tr>
          <tr>
            <td>Crear cuenta de Google</td>
            <td>Sí</td>
            <td>Sí, el día de la incorporación, con grupos, unidad y licencia por departamento</td>
          </tr>
          <tr>
            <td>Cerrar la cuenta</td>
            <td>Elimina al dar de baja</td>
            <td>Bloquea el último día a la hora, redirige el correo, traspasa archivos, libera licencia, elimina a los 30 días con opción de deshacer</td>
          </tr>
          <tr>
            <td>Quién decide sobre archivos y correo</td>
            <td>Quien ejecuta</td>
            <td>La jefatura directa, por correo, con recordatorios</td>
          </tr>
          <tr>
            <td>Licencias</td>
            <td>Inventario y costes por persona</td>
            <td>Compradas, asignadas y en cuentas bloqueadas por plataforma; qué reducir en la renovación</td>
          </tr>
          <tr>
            <td>Aplicaciones autorizadas con la cuenta</td>
            <td>No</td>
            <td>Revisión semanal, riesgo, decisión de la jefatura, revocación</td>
          </tr>
          <tr>
            <td>Reactivación temporal</td>
            <td>No</td>
            <td>Sí, por los días que elijas, con aprobación de la jefatura</td>
          </tr>
          <tr>
            <td>Evidencia</td>
            <td>Historial de la ficha</td>
            <td>Auditoría inmutable de 365 días, descargable, con quién pidió y quién aprobó</td>
          </tr>
          <tr>
            <td>Precio</td>
            <td>Por empleado al mes, suite completa</td>
            <td>Un precio por empresa, sin coste por persona</td>
          </tr>
          <tr>
            <td>Mercado</td>
            <td>España y México principalmente</td>
            <td>España, Chile, Argentina, México, Brasil</td>
          </tr>
        </tbody>
      </table>

      <h2>Cuándo elegir Factorial</h2>
      <p>
        Si no tienes software de RRHH y quieres uno que además cree las cuentas de Google, Factorial resuelve las dos
        cosas con un solo proveedor, pagando por empleado.
      </p>
      <h2>Cuándo elegir Mekovault</h2>
      <p>
        Si ya tienes nómina (Factorial, Sesame, Personio o cualquier otra) y no quieres cambiarla: Mekovault se engancha
        a tu sistema de nómina (hoy Buk y Talana; Factorial y Sesame se van sumando) y, mientras llega el conector,
        Personas es el origen. Si quieres que la baja sea completa y no solo “eliminar usuario”; si te importa que la
        jefatura decida y que quede evidencia; si usas más plataformas que Google; si prefieres un precio por empresa. Y
        si quieres las dos cosas, se pueden combinar. Más detalle de cómo gobierna Mekovault en{" "}
        <Link href="/account-governance">Gobierno de cuentas</Link>.
      </p>
      <p className="text-sm">Datos de Factorial tomados de su sitio público en octubre de 2026; si cambian, avísanos y corregimos.</p>
    </>
  );
}
