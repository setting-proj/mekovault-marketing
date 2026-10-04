/**
 * Español (Argentina). Extiende es-CL y sobrescribe la copy principal con
 * voseo natural, vocabulario local ("sueldos", "RR. HH.", "factura") y
 * ejemplos en dólares. Sin exagerar el "che".
 */

import esCL, { type Dictionary, type TranslationKey } from "./es-CL";

const overrides: Partial<Record<TranslationKey, string>> = {

  "nav.signup": "Empezá gratis",
  "agov.cta.signup": "Empezá gratis 90 días",

  // Hero
  "hero.cta.signup": "Empezá gratis 90 días",
  "hero.trust.1": "Sin tarjeta para arrancar",
  "hero.trust.3": "Cancelás cuando quieras",



  // Problem

  // Calculator
  "calc.title": "¿Cuánto se te está yendo?",
  "calc.subtitle": "Tres datos y una estimación honesta. Ajustá los valores a tu empresa.",
  "calc.turnover.hint": "Porcentaje de personas que se va en un año. En Argentina suele estar entre 15 % y 30 %.",
  "calc.cost": "Costo por licencia por mes (USD)",
  "calc.leavers": "{n} personas se van por año",
  "calc.result.monthly": "≈ {v} por mes que estás pagando de más",
  "calc.assumption":
    "Asumimos que una cuenta olvidada se sigue pagando 6 meses en promedio antes de que alguien la cierre. Es una estimación conservadora.",
  "calc.cta": "Dejá de pagar esto: empezá gratis",

  // Benefits

  // How

  // Compare

  // Founder

  // Services
  "svc.workspace.b3": "Panel con las cuentas de cada persona",
  "svc.tickets.desc":
    "Un formulario para pedir cuentas o accesos y un flujo de aprobación. Ideal si varios jefes piden cosas.",
  "svc.tickets.b3": "Ingresos masivos desde una planilla",
  "svc.audit.desc":
    "Un historial que no se puede borrar de todo lo que pasó con cada cuenta. Para auditorías, certificaciones o simplemente dormir tranquilo.",
  "svc.audit.b2": "Descargá el historial en Excel",

  // Pricing preview
  "pricing.subtitle": "Desde {price} por mes por empresa. Gratis los primeros 90 días, sin tarjeta.",

  // FAQ
  "faq.title": "Lo que preguntan los dueños y gerentes antes de arrancar",
  "faq.subtitle": "Recopilado de conversaciones con empresas de Argentina, Chile y la región.",
  "faq.it.a":
    "No. Mekovault está hecho para empresas que no tienen un administrador de cuentas. Lo conecta el gerente o la persona de administración siguiendo una guía, y desde ahí lo usa RR. HH. o quien vos definas. Si preferís que lo conectemos nosotros, lo hacemos por videollamada sin costo.",
  "faq.security.a":
    "Mekovault solo puede crear, bloquear y modificar cuentas. No lee mails ni archivos, y no pide permisos para hacerlo. Tus credenciales se guardan cifradas y separadas de las de otros clientes, y cada acción queda registrada con fecha y responsable. Cumplimos la Ley 25.326 de protección de datos personales.",
  "faq.leave.q": "¿Qué pasa con mis cuentas si dejo de usar Mekovault?",
  "faq.leave.a":
    "Nada. Las cuentas siguen viviendo en tus plataformas, como siempre. Si te vas mañana, todo queda tal cual y te llevás el historial en Excel.",
  "faq.support.q": "¿El soporte es en español y en horario de Argentina?",
  "faq.support.a":
    "Sí. El equipo está en Santiago de Chile, misma zona horaria que Buenos Aires, y responde en español en horario hábil. También atendemos en portugués e inglés.",

  // CTA
  "cta.title": "Empezá hoy. En diez minutos tenés las cuentas bajo control.",
  "cta.subtitle": "Gratis 90 días, sin tarjeta y sin compromiso. Si no te sirve, no pagás nada.",
  "cta.signup": "Empezá gratis 90 días",

  // Footer / misc
  "notfound.desc": "La dirección que buscás no existe o la movimos.",

  // Products
  "products.cap.1.desc":
    "La persona nueva tiene mail, grupos y accesos desde el primer día. RR. HH. llena un formulario y listo.",
  "products.cap.2.desc":
    "Se bloquea el acceso en las plataformas conectadas, el correo pasa a la jefatura y se quitan los grupos. Todo el mismo día, con registro.",
  "products.cap.3.desc":
    "Un jefe pide una cuenta nueva, un alias o un cambio de puesto. Se aprueba con un click y se ejecuta solo.",
  "wf.s4.action": "Deriva el mail y los archivos",
  "wf.s4.detail":
    "Los mails que lleguen se reenvían al jefe y los archivos quedan disponibles para quien se definió. No se pierde nada de la empresa.",
  "products.cta.title": "¿Querés verlo con las cuentas de tu empresa?",
  "products.cta.signup": "Empezá gratis 90 días",

  // Pricing page
  "pricing_page.subtitle":
    "Elegí solo lo que necesitás. Cada módulo tiene un precio mensual fijo. Cuantos más módulos activás, más descuento en todos.",
  "pricing_page.trial_badge": "Gratis 90 días · sin tarjeta · cancelás cuando quieras",
  "pricing_page.select_hint": "Tocá un módulo para armar tu plan",
  "pricing_page.currency_note":
    "Precios de lista en pesos chilenos (CLP). Si estás en Argentina, escribinos y te cotizamos en dólares con factura.",
  "pricing_page.reference_note": "Precios de referencia. Los confirmás al crear tu cuenta.",
  "pricing_page.faq.desc": "Si tenés otra duda, escribinos a cloud@mekovault.com.",
  "pricing_page.cta.title": "Empezá gratis. Decidí en 90 días.",
  "faq.price_includes.a":
    "Cada módulo tiene un precio mensual fijo por empresa. Incluye soporte en español y todas las actualizaciones. Lo ves antes de activarlo y lo podés desactivar cuando quieras.",
  "faq.switch.q": "¿Puedo agregar o sacar módulos después?",
  "faq.switch.a":
    "Sí, en cualquier momento desde tu panel. Se cobra proporcional a los días: no pagás doble por el cambio.",
  "faq.payment.a":
    "Con tarjeta de crédito o débito, a través de MercadoPago. Recibís factura cada mes. Para empresas grandes también aceptamos transferencia.",
  "faq.contract.a":
    "No. Los primeros 90 días son gratis y después pagás mes a mes. Cancelás cuando quieras desde el panel.",

  // About
  "about.subtitle":
    "Mekovault SpA es una empresa chilena. Vimos que las empresas medianas manejan sus cuentas de mail con planillas y buena voluntad, y que eso cuesta más de lo que parece.",
  "about.pillar.mission.desc":
    "Que administrar las cuentas de tu empresa sea tan simple como aprobar un mail, y que sepas siempre cuánto estás pagando.",
  "about.pillar.focus.desc":
    "Empresas de 50 a 500 personas sin un administrador de cuentas. Arrancamos en Chile y ya atendemos en toda la región.",
  "about.pillar.ambition.desc":
    "Sin consultoras ni proyectos de implementación. Te conectás, lo probás gratis y decidís.",
  "about.why.p1":
    "El punto de partida fue una empresa concreta en Santiago. Cerca de 200 cuentas de Google, un formulario, una planilla y una persona que hacía todo a mano cuando tenía tiempo. Cada ingreso llevaba media tarde. Cada salida se olvidaba de algo.",
  "about.why.p3":
    "Mekovault es esa opción. Se conecta en minutos, lo usa gente sin perfil técnico, y te muestra, persona por persona, qué cuentas tiene tu empresa y cuáles ya no deberían existir.",
  "about.cta.title": "¿Querés conversar?",
  "about.cta.desc": "Escribinos y coordinamos una reunión corta. Te contamos qué hacemos y qué te podemos resolver.",
  "about.cta.contact": "Contactanos",
  "about.cta.signup": "Empezá gratis",

  // Contact
  "contact.subtitle":
    "La forma más rápida de conocer Mekovault es probarlo gratis. Si preferís conversar antes, escribinos por mail o con el formulario.",
  "contact.card.trial": "Probá gratis",
  "contact.form.title": "Escribinos",
  "contact.form.desc": "Contanos brevemente qué necesitás. Este formulario abre tu programa de mail.",
  "contact.form.email": "Mail",
  "contact.form.also": "También podés escribirnos directamente a",

  // Partners
  "partners.title.pre": "Ofrecé Mekovault a tus clientes.",
  "partners.title.hl": "Ganá una comisión todos los meses.",
  "partners.subtitle":
    "Estudios contables, consultoras y empresas de servicios: llevá Mekovault a las empresas que ya te contratan. Nosotros hacemos la parte técnica, vos cerrás el negocio y cobrás entre 5 % y 10 % mensual por cliente.",
  "partners.cta.apply": "Postulate al programa",
  "partners.how.title": "Cuatro pasos para arrancar",
  "partners.how.s1.title": "1. Postulate",
  "partners.how.s1.desc": "Llená el formulario. Te contactamos en 48 horas.",
  "partners.how.s3.title": "3. Vendés",
  "partners.how.s3.desc": "Invitás clientes desde tu portal con tu marca. Nosotros los conectamos si querés.",
  "partners.how.s4.title": "4. Cobrás todos los meses",
  "partners.tiers.title": "Crecé a tu ritmo",
  "partners.apply.eyebrow": "Postulate",
  "partners.apply.title": "Contanos de tu empresa",
  "partners.form.email": "Tu mail de empresa *",
  "partners.form.why_ph": "Contanos qué buscás resolver para tus clientes y cómo ves Mekovault en tu oferta.",
  "partners.form.privacy_pre": "Al enviar aceptás nuestra",
  "partners.form.success.desc": "Te contactamos en 48 horas al mail que registraste. Mientras tanto, podés escribirnos a",
  "partners.form.error": "No pudimos enviar la postulación. Intentá de nuevo o escribinos a partners@mekovault.com.",
  "partners.faq.q1.a": "No para arrancar. En Silver vos vendés y nosotros conectamos a cada cliente. En Gold y Platinum recomendamos capacitar a una o dos personas para atender a tus clientes de punta a punta.",
  "partners.faq.q2.a": "Sí. Mientras el cliente siga activo y pagando cada mes, vos seguís cobrando tu porcentaje. Si el cliente cancela en los primeros 30 días, la comisión de ese mes se revierte.",
  "partners.faq.q4.a": "Latinoamérica, España y Estados Unidos. Si estás en otro país, escribinos y lo evaluamos.",
  "partners.faq.q5.a": "Sí. En Gold con tu logo y colores. En Platinum con tu propio dominio, sin la marca Mekovault visible.",
  "marquee.label": "Pensado para las plataformas que pagás por persona",
};

const esAR: Dictionary = { ...esCL, ...overrides };

export default esAR;
