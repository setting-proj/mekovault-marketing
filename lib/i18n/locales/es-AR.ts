/**
 * Español (Argentina). Extiende es-CL y sobrescribe la copy principal con
 * voseo natural, vocabulario local ("sueldos", "RR. HH.", "factura") y
 * ejemplos en dólares. Sin exagerar el "che".
 */

import esCL, { type Dictionary, type TranslationKey } from "./es-CL";

const overrides: Partial<Record<TranslationKey, string>> = {
  "meta.title": "Mekovault · Las cuentas de tu gente, en todas tus plataformas",
  "meta.description":
    "Creá, bloqueá y dá de baja las cuentas de tu equipo en Google Workspace, Microsoft 365 y las demás plataformas que pagás por persona, desde un solo lugar. Y controlá lo que pagás en licencias. Gratis 90 días.",

  "nav.signup": "Empezá gratis",

  // Hero
  "hero.eyebrow": "Gratis 90 días · sin tarjeta · sin TI",
  "hero.title.line1": "Alguien se va de la empresa.",
  "hero.title.line2": "Sus cuentas siguen abiertas. Y se siguen pagando.",
  "hero.subtitle":
    "Mekovault administra las cuentas de tu gente en las plataformas que pagás por persona: correo, chat, proyectos, ventas, soporte. Cada ingreso y cada salida se resuelve desde un solo lugar, con aprobación y registro. Y pronto, con Control de licencias, vas a ver qué estás pagando de más y cómo dejar de pagarlo.",
  "hero.cta.signup": "Empezá gratis 90 días",
  "hero.cta.calc": "Calculá cuánto se te está yendo",
  "hero.trust.1": "Sin tarjeta para arrancar",
  "hero.trust.2": "No necesitás TI",
  "hero.trust.3": "Cancelás cuando quieras",

  "mock.step_1": "Aviso de RR. HH. recibido",
  "mock.step_3": "Correo derivado a su jefe",

  "integrations.title": "Las plataformas que tu empresa paga por persona",

  // Problem
  "problem.title": "Sin un proceso de altas y bajas, la plata se va sola",
  "problem.subtitle":
    "En una empresa de 50 a 500 personas entra y sale gente todo el año. Cada cuenta que nadie cierra sigue costando entre 7 y 25 dólares por mes. Nadie se da cuenta porque la factura llega igual.",
  "problem.c1.title": "Entre 500 y 1.000 dólares por mes",
  "problem.c1.desc":
    "Es lo que suele irse en licencias de gente que ya no está. Al año son entre 6.000 y 12.000 dólares en cuentas que nadie usa. Más que un aguinaldo.",
  "problem.c2.title": "Nadie es dueño del proceso",
  "problem.c2.desc":
    "RR. HH. avisa por mail, alguien de administración crea la cuenta cuando puede, y la baja depende de que alguien se acuerde. Sin un responsable, la cuenta queda abierta.",
  "problem.c3.title": "Accesos abiertos después de la salida",
  "problem.c3.desc":
    "Una persona que ya no trabaja con vos sigue entrando a su mail, a los archivos y al calendario. Es un gasto, y también un riesgo que preferirías no tener.",

  // Calculator
  "calc.title": "¿Cuánto se te está yendo?",
  "calc.subtitle": "Tres datos y una estimación honesta. Ajustá los valores a tu empresa.",
  "calc.turnover.hint": "Porcentaje de personas que se va en un año. En Argentina suele estar entre 15 % y 30 %.",
  "calc.cost": "Costo por licencia por mes (USD)",
  "calc.cost.hint": "Google Workspace o Microsoft 365 cuestan entre 7 y 25 dólares por persona por mes.",
  "calc.leavers": "{n} personas se van por año",
  "calc.result.monthly": "≈ {v} por mes que estás pagando de más",
  "calc.assumption":
    "Asumimos que una cuenta olvidada se sigue pagando 6 meses en promedio antes de que alguien la cierre. Es una estimación conservadora.",
  "calc.cta": "Dejá de pagar esto: empezá gratis",
  "calc.compare": "Mekovault cierra esa fuga: bloquea las cuentas el mismo día y pronto, con Control de licencias, te va a mostrar qué licencias liberar y reducir.",

  // Benefits
  "benefits.subtitle":
    "Pensado para empresas sin un administrador de cuentas. Lo usa la persona de administración, de RR. HH. o el mismo gerente.",
  "benefits.b1.desc":
    "Cuando una persona sale, sus cuentas se bloquean en las plataformas conectadas y su correo pasa a su jefatura, el mismo día y sin depender de que alguien se acuerde. Donde una plataforma no permite hacerlo automático, Mekovault le asigna la tarea a su responsable y guarda la evidencia.",
  "benefits.b2.desc":
    "La persona nueva llega el lunes y su mail ya funciona. Con su firma, sus grupos y sus accesos según el puesto.",
  "benefits.b3.desc":
    "Un jefe pide una cuenta o un acceso. Quien corresponde aprueba con un click. Nadie crea cuentas por su cuenta.",
  "benefits.b5.desc":
    "Hoy funciona con Google Workspace y Microsoft 365. Estamos sumando las plataformas que más usan las empresas: chat, proyectos, ventas, soporte y código. Sin cambiar nada de lo que ya tenés.",
  "benefits.b6.desc":
    "Un formulario para pedir, un botón para aprobar. Si tu equipo usa mail, sabe usar Mekovault.",

  // How
  "how.step1.title": "Conectá tus plataformas",
  "how.step1.desc": "Arrancá con Google Workspace o Microsoft 365: diez minutos con una guía paso a paso. Las demás se suman desde el mismo panel. Si te trabás, te ayudamos por videollamada.",
  "how.step2.title": "Definí quién pide y quién aprueba",
  "how.step2.desc": "Por ejemplo: RR. HH. pide, el gerente de área aprueba. Lo cambiás cuando quieras.",
  "how.step3.desc":
    "Se llena un formulario simple. Mekovault crea, bloquea o modifica la cuenta y avisa a quien corresponde.",
  "how.step4.title": "Ves quién tiene qué, y cuánto cuesta",
  "how.step4.desc":
    "Un panel con las cuentas de cada persona en cada plataforma, las salidas resueltas y pronto, con Control de licencias, las licencias que podés dejar de pagar.",

  // Compare
  "compare.subtitle":
    "Siete cosas que hay que hacer cuando alguien deja la empresa. Mové el control y fijate cuál se parece a tu empresa hoy.",
  "compare.r1.step": "RR. HH. avisa la salida",
  "compare.r1.manual": "Un mail que alguien tiene que leer",
  "compare.r2.manual": "Se busca la autorización en el mail",
  "compare.r2.meko": "Un click del jefe",
  "compare.r4.step": "El mail pasa al jefe",

  // Founder
  "founder.quote":
    "La empresa que originó Mekovault tenía cerca de 200 cuentas de Google y las manejaba con un formulario y una planilla. Cada ingreso llevaba media tarde. Cada salida se olvidaba de algo, y ese algo se seguía pagando. No inventamos un producto: ordenamos ese problema.",

  // Services
  "services.title": "Arrancá con la gestión de cuentas. Sumá el resto cuando lo necesites.",
  "services.subtitle": "Cada módulo se contrata por separado y se activa desde tu panel. Sin contratos largos.",
  "svc.workspace.b3": "Panel con las cuentas de cada persona",
  "svc.tickets.desc":
    "Un formulario para pedir cuentas o accesos y un flujo de aprobación. Ideal si varios jefes piden cosas.",
  "svc.tickets.b3": "Ingresos masivos desde una planilla",
  "svc.audit.desc":
    "Un historial que no se puede borrar de todo lo que pasó con cada cuenta. Para auditorías, certificaciones o simplemente dormir tranquilo.",
  "svc.audit.b2": "Descargá el historial en Excel",

  // Pricing preview
  "pricing.title": "Menos de lo que se te está yendo",
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
  "faq.ms.q": "Mi empresa usa Microsoft 365, no Google. ¿Sirve igual?",
  "faq.setup.a":
    "Diez minutos para conectar tu Google Workspace o Microsoft 365 con la guía. La primera solicitud la hacés ese mismo día. No hay proyecto de implementación ni consultora.",
  "faq.support.q": "¿El soporte es en español y en horario de Argentina?",
  "faq.support.a":
    "Sí. El equipo está en Santiago de Chile, misma zona horaria que Buenos Aires, y responde en español en horario hábil. También atendemos en portugués e inglés.",

  // CTA
  "cta.title": "Empezá hoy. En diez minutos tenés las cuentas bajo control.",
  "cta.subtitle": "Gratis 90 días, sin tarjeta y sin compromiso. Si no te sirve, no pagás nada.",
  "cta.signup": "Empezá gratis 90 días",

  // Footer / misc
  "footer.tagline":
    "Las cuentas de tu gente en todas tus plataformas, desde un solo lugar, y control de lo que pagas en licencias. Para empresas que no tienen un administrador de cuentas.",
  "notfound.desc": "La dirección que buscás no existe o la movimos.",

  // Products
  "products.subtitle":
    "Mekovault administra las cuentas de tu equipo en las plataformas que pagás por persona: quién entra, quién sale, quién pide qué y cuánto cuesta. Hoy con Google Workspace y Microsoft 365; las demás, en camino.",
  "products.cap.1.desc":
    "La persona nueva tiene mail, grupos y accesos desde el primer día. RR. HH. llena un formulario y listo.",
  "products.cap.2.desc":
    "Se bloquea el acceso en las plataformas conectadas, el correo pasa a la jefatura y se quitan los grupos. Todo el mismo día, con registro.",
  "products.cap.3.desc":
    "Un jefe pide una cuenta nueva, un alias o un cambio de puesto. Se aprueba con un click y se ejecuta solo.",
  "workflow.subtitle":
    "Así se resuelve la salida de una persona desde que RR. HH. avisa hasta que todo queda registrado. Hacé click en cada paso.",
  "wf.s1.actor": "RR. HH.",
  "wf.s1.detail":
    "La persona de RR. HH. indica quién se va y en qué fecha. Puede ser hoy o dentro de dos semanas: Mekovault espera a la fecha indicada.",
  "wf.s2.actor": "Jefe",
  "wf.s2.service": "Aviso por mail",
  "wf.s2.detail":
    "El jefe del área recibe un mail y aprueba. Ahí mismo decide a quién derivar el mail de la persona que se va.",
  "wf.s3.detail":
    "El día de la salida, la cuenta queda bloqueada. La persona ya no puede entrar a su mail, a los archivos ni al calendario, desde ningún dispositivo.",
  "wf.s4.action": "Deriva el mail y los archivos",
  "wf.s4.detail":
    "Los mails que lleguen se reenvían al jefe y los archivos quedan disponibles para quien se definió. No se pierde nada de la empresa.",
  "products.cta.title": "¿Querés verlo con las cuentas de tu empresa?",
  "products.cta.subtitle":
    "Creá tu cuenta y conectá Google Workspace o Microsoft 365 con la guía. Gratis 90 días.",
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
};

const esAR: Dictionary = { ...esCL, ...overrides };

export default esAR;
