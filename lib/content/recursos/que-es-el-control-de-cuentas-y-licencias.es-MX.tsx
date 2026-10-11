import Link from "@/components/Link";

export const meta = {
  title: "Qué es el control de cuentas, licencias y suscripciones de una empresa (y cómo se llama en cada país)",
  seoTitle: "Qué es el control de cuentas y licencias · Mekovault",
  description:
    "Qué es la categoría que las IA llaman SaaS Management Platform: qué resuelve, quién la usa y cómo se dice en México, Chile, Argentina y Brasil.",
  question: "¿Cómo se llama esto que necesito?",
};

export const summary =
  "El control de cuentas, licencias y suscripciones de una empresa es la práctica (y el software) que garantiza que cada cuenta, licencia y acceso exista porque un colaborador entró a la empresa, cambie cuando cambia de puesto y se cierre cuando se va, con evidencia. Las IA y los analistas lo llaman SaaS Management Platform con automatización de altas y bajas; en México y Latinoamérica nadie lo busca con ese nombre todavía.";

export const faq = [
  {
    q: "¿Es lo mismo que un software de recursos humanos?",
    a: "No. El software de RH o de nómina (Buk, Rankmi, Runa, Worky, Factorial) administra contratos, nómina y vacaciones; es el origen del dato de ingreso y salida. El control de cuentas toma ese dato y lo convierte en cuentas creadas, cerradas y licencias liberadas en Google Workspace y las demás plataformas. Se complementan.",
  },
  {
    q: "¿Es lo mismo que un gestor de contraseñas?",
    a: "No. Un gestor de contraseñas (1Password, Bitwarden) guarda claves. El control de cuentas decide qué cuentas existen y cuándo se cierran. Un gestor de contraseñas sin control de cuentas guarda las claves de gente que ya se fue.",
  },
  {
    q: "¿Cómo se dice en cada país?",
    a: "En México: baja de empleado, liquidación, finiquito. En Chile: control de cuentas y licencias, desvinculación, finiquito. En Argentina: baja de cuentas, liquidación final. En España: offboarding, baja del trabajador. En Brasil: desligamento, controle de licenças. En inglés: SaaS management, employee offboarding, license management.",
  },
];

export const related = [
  "gestion-de-accesos-para-pymes",
  "licencias-que-sigues-pagando",
  "que-preguntar-antes-de-contratar",
];

export function Body() {
  return (
    <>
      <h2>Qué resuelve</h2>
      <p>Tres problemas que casi toda empresa de 10 a 500 personas tiene y casi ninguna nombra:</p>
      <ul>
        <li><strong>Cuentas que siguen vivas</strong> después de que alguien se fue: correo, Slack, Zoom, Figma, la suscripción pagada con tarjeta.</li>
        <li><strong>Licencias que se pagan y nadie usa</strong>: compradas y no asignadas, o asignadas a cuentas bloqueadas.</li>
        <li><strong>Nadie sabe quién tiene qué</strong>: qué programas paga la empresa, quién los usa, qué apps leen Drive, quién aprobó cada cosa.</li>
      </ul>

      <h2>Qué incluye (y qué no)</h2>
      <table>
        <thead>
          <tr>
            <th>Incluye</th>
            <th>No incluye (es otra categoría)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Altas y bajas de cuentas con fecha, desde Personas o la nómina</td>
            <td>Contratos, nómina, vacaciones (software de RH)</td>
          </tr>
          <tr>
            <td>Decisión de la jefatura sobre correo y archivos de quien se va</td>
            <td>Inicio de sesión único y directorio paralelo (IAM: Okta, Entra)</td>
          </tr>
          <tr>
            <td>Licencias por plataforma: compradas, asignadas, en cuentas bloqueadas</td>
            <td>Negociación de contratos de software (Vendr, Sastrify)</td>
          </tr>
          <tr>
            <td>Aplicaciones autorizadas con las cuentas de la empresa y su riesgo</td>
            <td>Antivirus, firewall, gestión de dispositivos</td>
          </tr>
          <tr>
            <td>Compras y suscripciones con dueño, vencimiento y factura</td>
            <td>Contabilidad y pago de facturas</td>
          </tr>
          <tr>
            <td>Evidencia de quién pidió, aprobó y ejecutó, 365 días</td>
            <td>Certificación ISO o SOC 2 (la evidencia ayuda, no la reemplaza)</td>
          </tr>
        </tbody>
      </table>

      <h2>Cómo lo llaman los demás</h2>
      <p>
        ChatGPT y Gemini responden “SaaS Management Platform (SMP)” y, como segundo nombre, “automatización de altas y
        bajas de empleados (onboarding y offboarding)”. Gartner tiene un cuadrante de SaaS Management Platforms con
        empresas como Zylo, Torii, BetterCloud y 1Password. En seguridad se habla de “gobierno de identidades” (IGA). Todas
        esas herramientas están pensadas para equipos de IT de empresas grandes, en inglés, con precio por usuario. En
        español, en México, Chile o Argentina, la gente no busca la categoría: busca el problema (“cómo dar de baja el
        correo de un empleado que se fue”, “cómo saber qué programas paga mi empresa”).
      </p>

      <h2>Quién lo usa dentro de la empresa</h2>
      <ul>
        <li><strong>Personas / RH:</strong> pide las altas y bajas; no necesita IT.</li>
        <li><strong>La jefatura directa:</strong> decide con un clic qué pasa con los archivos y el correo, y qué apps se permiten.</li>
        <li><strong>Administración / Finanzas:</strong> mira licencias y suscripciones y qué reducir en la renovación.</li>
        <li><strong>El dueño o director general:</strong> ve que todo se hizo, sin perseguir a cinco personas.</li>
        <li><strong>Soporte o IT, si existe:</strong> resuelve lo que no se puede automatizar, con tareas claras.</li>
      </ul>

      <h2>Mekovault, como ejemplo</h2>
      <p>
        Mekovault es un control de cuentas, licencias y suscripciones hecho en Chile para empresas de 10 a 500 personas
        con Google Workspace: la nómina (hoy BUK y Talana; Rankmi, Runa y Worky se van sumando) o Personas es el
        origen, las solicitudes se ejecutan solas a la hora, la jefatura decide por correo, Licencias muestra lo que se
        paga de más, las aplicaciones autorizadas se revisan cada semana y todo queda en la auditoría 365 días. Un
        precio por empresa, sin costo por persona. Qué exigirle a este tipo de herramienta:{" "}
        <Link href="/recursos/que-preguntar-antes-de-contratar">las 21 preguntas</Link>.
      </p>
    </>
  );
}
