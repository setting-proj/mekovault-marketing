/**
 * Español (España). Extiende es-CL con el vocabulario de España: "offboarding"
 * y "baja del trabajador" (nunca "baja laboral", que es incapacidad médica),
 * RGPD y AEPD en vez de la Ley 21.719, nómina Factorial/Sesame/Personio, y
 * precio en euros de referencia. Tono de "tú", sin voseo.
 */

import esCL, { type Dictionary, type TranslationKey } from "./es-CL";

const overrides: Partial<Record<TranslationKey, string>> = {
  "seo.home.title": "Mekovault · Offboarding, altas y licencias en Google Workspace sin IT",
  "seo.home.description":
    "Cierra cuentas, libera licencias y traspasa archivos el mismo día que alguien deja la empresa. Lo pide RRHH, sin IT. Gratis 90 días, un precio por empresa.",
  "hero.title.line1": "Cierra las cuentas y licencias de quien se va, el mismo día.",
  "hero.title.line2": "Sin depender de IT.",
  "hero.subtitle":
    "Google Workspace, Slack, Zoom, Figma y todo lo que pagas por persona. RRHH pide, Mekovault lo ejecuta a la hora y queda la evidencia. Todo nace en la nómina y se gobierna desde ahí.",
  "calc.turnover.hint": "Porcentaje de personas que sale en un año. En España suele estar entre 10 % y 25 %.",
  "calc.cost": "Coste por licencia al mes (USD)",
  "faq.subtitle": "Recopilado de conversaciones con empresas de España y Latinoamérica.",
  "faq.security.a":
    "Mekovault solo puede crear, bloquear y modificar cuentas. No lee correos ni archivos, y no pide permisos para hacerlo. Tus credenciales se guardan cifradas y separadas de las de otros clientes, y cada acción queda registrada con fecha y responsable. Cumplimos el RGPD y las guías de la AEPD.",
  "faq.support.q": "¿El soporte es en español y en horario de España?",
  "faq.support.a":
    "Sí, en español. Atendemos de 9:00 a 19:00 hora de Chile, que cubre la tarde de España; fuera de ese horario respondemos al día siguiente hábil.",
  "contact.card.office_value": "Santiago de Chile",
  "searches.q1": "¿Cómo doy de baja a un trabajador en Google Workspace sin seguir pagando?",
  "searches.q5": "¿Cómo conecto mi nómina (Factorial, Sesame) para que las altas y bajas salgan solas?",
  "tiers.note.usd": "Referencia en dólares al tipo de cambio del {date}; fuera de Chile facturamos en USD o euros por transferencia o tarjeta.",
  "seo.contact.description":
    "Escríbenos a cloud@mekovault.com o agenda una videollamada. Soporte en español para España, Chile, Argentina y México; también en inglés y portugués.",
};

const esES: Dictionary = { ...esCL, ...overrides };

export default esES;
