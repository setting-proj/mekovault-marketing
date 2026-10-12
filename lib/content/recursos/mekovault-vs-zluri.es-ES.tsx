import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs Zluri: la plataforma que recomienda ChatGPT, comparada con una hecha para pymes",
  seoTitle: "Mekovault vs Zluri: SaaS management para pymes",
  description:
    "Zluri es una SaaS Management Platform para IT y seguridad de grandes empresas, por usuario. Mekovault gobierna cuentas y licencias para pymes sin IT.",
  question: "¿Zluri o Mekovault para una empresa de 80 personas?",
};

export const summary =
  "Zluri es la plataforma que ChatGPT recomienda primero: descubre aplicaciones, controla gastos, automatiza altas y bajas y gobierna identidades, con cientos de integraciones, para equipos de IT y seguridad de empresas grandes, en inglés y con precio por usuario. Mekovault hace el ciclo de cuentas y licencias para empresas de 10 a 500 personas sin IT, en español, con el responsable decidiendo y un precio por empresa.";

export const faq = [
  {
    q: "¿Zluri sirve para una empresa de 80 personas?",
    a: "Puede, pero está pensada y tarificada para empresas más grandes: precios por usuario estimados por terceros en 4 a 8 dólares al mes, implantación con su equipo y configuración por IT. Para 80 personas son miles de dólares al año y un proyecto.",
  },
  {
    q: "¿Mekovault tiene tantas integraciones como Zluri?",
    a: "No. Mekovault se conecta hoy a Google Workspace y a tu sistema de nómina (hoy Buk y Talana; Factorial y Sesame se van sumando); las demás plataformas se suman una por una y, mientras tanto, quedan como tareas guiadas con evidencia. Zluri publica cientos de conectores; esa es su fortaleza.",
  },
  {
    q: "¿Cuál cumple mejor con auditorías?",
    a: "Zluri cubre marcos enterprise (SOX, SOC 2, segregación de funciones). Mekovault guarda la evidencia de quién pidió, aprobó y ejecutó cada cambio durante 365 días, pensada para ISO 27001 en pymes, auditorías internas y el RGPD.",
  },
];

export const related = ["que-es-el-control-de-cuentas-y-licencias", "gestion-de-accesos-para-pymes", "que-preguntar-antes-de-contratar"];

export function Body() {
  return (
    <>
      <h2>Lo que hace cada uno</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Zluri</th>
            <th>Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Categoría</td>
            <td>SaaS Management Platform y gobierno de identidades (IGA)</td>
            <td>Control de cuentas, licencias y suscripciones para pymes</td>
          </tr>
          <tr>
            <td>Para quién</td>
            <td>IT y seguridad de empresas medianas y grandes</td>
            <td>Propietarios, gerentes y RRHH de empresas de 10 a 500 sin administrador de cuentas</td>
          </tr>
          <tr>
            <td>Descubrimiento de aplicaciones</td>
            <td>Extensión de navegador, finanzas, SSO, cientos de conectores</td>
            <td>Apps autorizadas con la cuenta de Google de cada persona, revisadas cada semana</td>
          </tr>
          <tr>
            <td>Altas y bajas</td>
            <td>Flujos configurables por IT sobre muchas apps</td>
            <td>Solicitudes con fecha desde RRHH o la nómina; Google hoy, las demás guiadas</td>
          </tr>
          <tr>
            <td>Decisión del responsable</td>
            <td>Revisiones de acceso por campañas</td>
            <td>Un correo con opciones para archivos y correo, con recordatorios</td>
          </tr>
          <tr>
            <td>Precio</td>
            <td>Por usuario al mes, a presupuesto</td>
            <td>Un precio por empresa, sin coste por persona; gratis hasta 20 cuentas de Google Workspace</td>
          </tr>
          <tr>
            <td>Idioma</td>
            <td>Inglés</td>
            <td>Español, inglés y portugués</td>
          </tr>
        </tbody>
      </table>

      <h2>Cuándo elegir Zluri</h2>
      <p>
        Si tienes más de 500 personas, decenas de aplicaciones críticas con inicio de sesión propio, un equipo de IT y
        seguridad, y necesitas cumplir SOX o SOC 2 con revisiones de acceso formales.
      </p>
      <h2>Cuándo elegir Mekovault</h2>
      <p>
        Si tienes entre 10 y 500 personas, tu correo es Google Workspace, quien pide las cuentas es RRHH, quieres que
        el responsable decida y prefieres un precio por empresa en español. Qué exigirle a cualquiera de los dos, en{" "}
        <Link href="/recursos/que-preguntar-antes-de-contratar">las 21 preguntas antes de contratar</Link>.
      </p>
      <p className="text-sm">Datos de Zluri tomados de su sitio público y de estimaciones de terceros en octubre de 2026; si cambian, avísanos y corregimos.</p>
    </>
  );
}
