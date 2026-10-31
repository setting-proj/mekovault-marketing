/**
 * Español (España). Extiende es-CL con el vocabulario de España: "offboarding"
 * y "baja del trabajador" (nunca "baja laboral", que es incapacidad médica),
 * RGPD y AEPD en vez de la Ley 21.719, nómina Factorial/Sesame/Personio, y
 * precio en euros de referencia. Tono de "tú", sin voseo.
 */

import esCL, { type Dictionary, type TranslationKey } from "./es-CL";

const overrides: Partial<Record<TranslationKey, string>> = {
  "seo.home.title": "Tus licencias se administran solas · Mekovault",
  "seo.home.description": "La IA de Mekovault detecta quién entra, quién sale y qué licencias de software sobran, y te lo deja listo para aprobar en un clic. Sin IT, sin hojas de cálculo.",
  "hero.title.line1": "Tus licencias se administran solas.",
  "hero.title.line2": "Sin IT, sin hojas de cálculo.",
  "seo.og.tagline": "La IA que administra tus licencias y cuida tu presupuesto, sin IT. Gratis hasta 20 cuentas.",
  "meta.description": "La IA de Mekovault detecta quién entra, quién sale y qué licencias sobran, y te lo deja listo para aprobar en un clic. Altas, bajas y presupuesto de software sin IT ni hojas de cálculo.",
  "meta.title": "Mekovault · Licencias y cuentas que se administran solas, con IA y sin IT",
  "hero.subtitle": "La IA de Mekovault detecta quién entra, quién sale y qué licencias sobran, y te lo deja listo para aprobar en un clic. Google Workspace, Slack, Zoom, Figma y todo lo que pagas por persona.",
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
