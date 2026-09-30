/**
 * Español (México). Extiende es-CL con tuteo, vocabulario local
 * ("nómina", "colaboradores", "factura", "RR. HH.") y ejemplos en pesos
 * mexicanos. Sutil, sin caricatura.
 */

import esCL, { type Dictionary, type TranslationKey } from "./es-CL";

const overrides: Partial<Record<TranslationKey, string>> = {

  // Hero


  // Problem

  // Calculator
  "calc.people": "Colaboradores en la empresa",
  "calc.turnover.hint": "Porcentaje de colaboradores que sale en un año. En México suele estar entre 15 % y 35 %.",
  "calc.leavers": "{n} colaboradores salen al año",
  "calc.assumption":
    "Asumimos que una cuenta olvidada se sigue pagando 6 meses en promedio antes de que alguien la dé de baja. Es una estimación conservadora.",

  // Benefits

  // How

  // Compare

  // Founder

  // Services
  "svc.workspace.b1": "Altas listas el primer día",
  "svc.workspace.b2": "Salidas completas: acceso, correo y grupos",
  "svc.tickets.desc":
    "Un formulario para pedir cuentas o accesos y un flujo de aprobación. Ideal si varios jefes piden cosas.",
  "svc.tickets.b3": "Altas masivas desde una hoja de cálculo",

  // FAQ
  "faq.title": "Lo que preguntan los dueños y directores antes de empezar",
  "faq.subtitle": "Recopilado de conversaciones con empresas de México, Chile y la región.",
  "faq.it.q": "¿Necesito un área de sistemas para usarlo?",
  "faq.it.a":
    "No. Mekovault está hecho para empresas que no tienen un administrador de cuentas. Lo conecta el director o la persona de administración siguiendo una guía, y desde ahí lo usa RR. HH. o quien tú definas. Si prefieres que lo conectemos nosotros, lo hacemos por videollamada sin costo.",
  "faq.security.a":
    "Mekovault solo puede crear, bloquear y modificar cuentas. No lee correos ni archivos, y no pide permisos para hacerlo. Tus credenciales se guardan cifradas y separadas de las de otros clientes, y cada acción queda registrada con fecha y responsable. Cumplimos la Ley Federal de Protección de Datos Personales (LFPDPPP).",
  "faq.support.q": "¿El soporte es en español y en horario de México?",
  "faq.support.a":
    "Sí. El equipo responde en español en horario hábil, con cobertura de la Ciudad de México. También atendemos en portugués e inglés.",

  // Products
  "products.cap.1.title": "Altas",
  "products.cap.1.desc":
    "El colaborador nuevo tiene correo, grupos y accesos desde el primer día. RR. HH. llena un formulario y listo.",
  "products.cap.2.title": "Bajas",
  "products.cap.2.desc":
    "Se bloquea el acceso en las plataformas conectadas, el correo pasa a su jefe directo y se quitan los grupos. Todo el mismo día, con registro.",
  "products.cap.3.desc":
    "Un jefe pide una cuenta nueva, un alias o un cambio de puesto. Se aprueba con un clic y se ejecuta solo.",
  "workflow.eyebrow": "Una solicitud de principio a fin",
  "wf.s4.action": "Redirige el correo y los archivos",
  "wf.s4.detail":
    "Los correos que lleguen se reenvían al jefe y los archivos quedan disponibles para quien se definió. No se pierde nada de la empresa.",

  // Calculator (títulos y CTA)
  "calc.title": "¿Cuánto dinero se te está yendo?",
  "calc.subtitle":
    "Tres datos y una estimación honesta. Ajusta los valores a tu empresa.",
  "calc.cta": "Deja de pagar esto: empieza gratis",

  // Pricing (home)
  "pricing.subtitle":
    "Desde {price} al mes por empresa. Gratis los primeros 90 días, sin tarjeta.",

  // CTA final
  "cta.title": "Empieza hoy. En diez minutos tienes las cuentas bajo control.",
  "cta.subtitle":
    "Gratis 90 días, sin tarjeta y sin compromiso. Si no te convence, no pagas nada.",
  "cta.signup": "Empieza gratis 90 días",

  // Vocabulario: planilla → hoja de cálculo, plata → dinero
  "about.title.hl": "pierden dinero",
  "timeline.m1.detail":
    "Una empresa con 200 cuentas de Google las manejaba con un formulario, una hoja de cálculo y mucha paciencia. Las altas tomaban horas. Las bajas dejaban cuentas abiertas que se descubrían meses después, en la factura.",

  // Pricing page
  "pricing_page.select_hint": "Elige un módulo para armar tu plan",
  "pricing_page.cta.title": "Empieza gratis. Decide en 90 días.",
  "pricing_page.currency_note":
    "Precios de lista en pesos chilenos (CLP). Si estás en México, escríbenos y te cotizamos en dólares con factura.",
  "faq.payment.a":
    "Con tarjeta de crédito o débito, a través de MercadoPago. Recibes factura cada mes. Para empresas grandes también aceptamos transferencia.",

  // About
  "about.subtitle":
    "Mekovault SpA es una empresa chilena. Vimos que las empresas medianas manejan sus cuentas de correo con hojas de cálculo y buena voluntad, y que eso cuesta más de lo que parece.",
  "about.pillar.focus.desc":
    "Empresas de 50 a 500 colaboradores sin un administrador de cuentas. Empezamos en Chile y ya atendemos en toda Latinoamérica.",
  "about.why.p1":
    "El punto de partida fue una empresa concreta en Santiago de Chile. Cerca de 200 cuentas de Google, un formulario, una hoja de cálculo y una persona que hacía todo a mano cuando tenía tiempo. Cada alta tomaba media tarde. Cada baja olvidaba algo.",
  "about.why.p2":
    "Miramos alrededor y era lo mismo en todas partes. Las herramientas grandes de este tipo están hechas para corporativos con áreas de sistemas. Para una empresa de 50, 100 o 300 colaboradores no había nada simple, local ni accesible.",
  "about.why.p3":
    "Mekovault es esa opción. Se conecta en minutos, lo usa gente sin perfil técnico, y te muestra, persona por persona, qué cuentas tiene tu empresa y cuáles ya no deberían existir.",
  "timeline.m2.metric": "Adiós a la hoja de cálculo",
  "timeline.m2.detail":
    "Reemplazamos la hoja de cálculo y los parches por un sistema que hacía el mismo trabajo, pero siempre igual y sin olvidar pasos. La empresa siguió usando su Google Workspace de siempre.",
  "timeline.m4.detail":
    "El panel que usan hoy los clientes: cada empresa define quién puede pedir, quién aprueba y quién solo mira. Con pago mensual y factura.",

  // Contact
  "contact.card.office_sub": "Trabajamos a distancia",

  // Partners
  "partners.subtitle":
    "Despachos contables, consultoras y empresas de servicios: lleva Mekovault a las empresas que ya te contratan. Nosotros hacemos la parte técnica, tú cierras el negocio y cobras entre 5 % y 10 % mensual por cliente.",
  "partners.form.customers_ph": "Ej: 25 empresas, principalmente pymes de 20 a 200 colaboradores",
  "marquee.label": "Pensado para las plataformas que pagas por persona",
};

const esMX: Dictionary = { ...esCL, ...overrides };

export default esMX;
