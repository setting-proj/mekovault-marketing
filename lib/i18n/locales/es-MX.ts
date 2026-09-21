/**
 * Español (México). Extiende es-CL con tuteo, vocabulario local
 * ("nómina", "colaboradores", "factura", "RR. HH.") y ejemplos en pesos
 * mexicanos. Sutil, sin caricatura.
 */

import esCL, { type Dictionary, type TranslationKey } from "./es-CL";

const overrides: Partial<Record<TranslationKey, string>> = {
  "meta.description":
    "Crea, bloquea y da de baja las cuentas de tu equipo en Google Workspace, Microsoft 365 y las demás plataformas que pagas por persona, desde un solo lugar. Y controla lo que pagas en licencias. Gratis 90 días.",

  // Hero
  "hero.title.line1": "Un colaborador deja la empresa.",
  "hero.title.line2": "Sus cuentas siguen abiertas. Y se siguen pagando.",
  "hero.subtitle":
    "Mekovault administra las cuentas de tu gente en las plataformas que pagas por persona: correo, chat, proyectos, ventas, soporte. Cada ingreso y cada salida se resuelve desde un solo lugar, con aprobación y registro. Y pronto, con Control de licencias, verás qué estás pagando de más y cómo dejar de pagarlo.",
  "hero.trust.2": "No necesitas un área de sistemas",

  "mock.step_1": "Aviso de RR. HH. recibido",
  "mock.step_3": "Correo redirigido a su jefe",

  // Problem
  "problem.title": "Sin un proceso de altas y bajas, el dinero se va solo",
  "problem.subtitle":
    "En una empresa de 50 a 500 colaboradores entra y sale gente todo el año. Cada cuenta que nadie cierra sigue costando entre 7 y 25 dólares al mes. Nadie se da cuenta porque la factura llega igual.",
  "problem.c1.title": "Entre 500 y 1,000 dólares al mes",
  "problem.c1.desc":
    "Es lo que suele irse en licencias de colaboradores que ya no están. Son entre 9 y 18 mil pesos cada mes, más de 100 mil pesos al año, en cuentas que nadie usa.",
  "problem.c2.title": "Nadie es dueño del proceso",
  "problem.c2.desc":
    "RR. HH. avisa por correo, alguien de administración crea la cuenta cuando puede, y la baja depende de que alguien se acuerde. Sin un responsable, la cuenta queda abierta.",
  "problem.c3.desc":
    "Un colaborador que ya no trabaja contigo sigue entrando a su correo, a los archivos y al calendario. Es un gasto, y también un riesgo que preferirías no tener.",

  // Calculator
  "calc.people": "Colaboradores en la empresa",
  "calc.turnover.hint": "Porcentaje de colaboradores que sale en un año. En México suele estar entre 15 % y 35 %.",
  "calc.cost.hint": "Google Workspace o Microsoft 365 cuestan entre 7 y 25 dólares por colaborador al mes.",
  "calc.leavers": "{n} colaboradores salen al año",
  "calc.assumption":
    "Asumimos que una cuenta olvidada se sigue pagando 6 meses en promedio antes de que alguien la dé de baja. Es una estimación conservadora.",

  // Benefits
  "benefits.subtitle":
    "Pensado para empresas sin un administrador de cuentas. Lo usa la persona de administración, de RR. HH. o el mismo director.",
  "benefits.b1.title": "Nadie queda con accesos después de irse",
  "benefits.b1.desc":
    "Cuando una persona sale, sus cuentas se bloquean en las plataformas conectadas y su correo pasa a su jefe directo, el mismo día y sin depender de que alguien se acuerde. Donde una plataforma no permite hacerlo automático, Mekovault le asigna la tarea a su responsable y guarda la evidencia.",
  "benefits.flow.1": "Sale un colaborador",
  "benefits.b2.desc":
    "El colaborador nuevo llega el lunes y su correo ya funciona. Con su firma, sus grupos y sus accesos según el puesto.",
  "benefits.b3.desc":
    "Un jefe pide una cuenta o un acceso. Quien corresponde aprueba con un clic. Nadie crea cuentas por su cuenta.",
  "benefits.b6.desc":
    "Un formulario para pedir, un botón para aprobar. Si tu equipo usa correo, sabe usar Mekovault.",

  // How
  "how.step2.desc": "Por ejemplo: RR. HH. pide, el director de área aprueba. Lo cambias cuando quieras.",
  "how.step3.title": "Cada alta o baja es una solicitud",

  // Compare
  "compare.title": "La misma baja de un colaborador, de dos formas",
  "compare.subtitle":
    "Siete cosas que hay que hacer cuando un colaborador deja la empresa. Mueve el control y mira cuál se parece a tu empresa hoy.",
  "compare.r1.step": "RR. HH. avisa la baja",
  "compare.r2.meko": "Un clic del jefe",
  "compare.r4.step": "El correo pasa al jefe",

  // Founder
  "founder.quote":
    "La empresa que originó Mekovault tenía cerca de 200 cuentas de Google y las manejaba con un formulario y una hoja de cálculo. Cada alta tomaba media tarde. Cada baja olvidaba algo, y ese algo se seguía pagando. No inventamos un producto: ordenamos ese problema.",

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
  "workflow.eyebrow": "Una baja de principio a fin",
  "workflow.subtitle":
    "Así se resuelve la salida de una persona desde que Recursos Humanos avisa hasta que todo queda registrado. Haz clic en cada paso.",
  "wf.s1.actor": "RR. HH.",
  "wf.s1.action": "Avisa la baja",
  "wf.s1.detail":
    "La persona de RR. HH. indica quién sale y en qué fecha. Puede ser hoy o dentro de dos semanas: Mekovault espera a la fecha indicada.",
  "wf.s2.actor": "Jefe",
  "wf.s2.action": "Aprueba con un clic",
  "wf.s2.detail":
    "El jefe del área recibe un correo y aprueba. Ahí mismo decide a quién redirigir el correo del colaborador que sale.",
  "wf.s3.detail":
    "El día de la baja, la cuenta queda bloqueada. El colaborador ya no puede entrar a su correo, a los archivos ni al calendario, desde ningún dispositivo.",
  "wf.s4.action": "Redirige el correo y los archivos",
  "wf.s4.detail":
    "Los correos que lleguen se reenvían al jefe y los archivos quedan disponibles para quien se definió. No se pierde nada de la empresa.",

  // Calculator (títulos y CTA)
  "calc.title": "¿Cuánto dinero se te está yendo?",
  "calc.subtitle":
    "Tres datos y una estimación honesta. Ajusta los valores a tu empresa.",
  "calc.cta": "Deja de pagar esto: empieza gratis",
  "calc.compare": "Mekovault cierra esa fuga: bloquea las cuentas el mismo día y pronto, con Control de licencias, te mostrará qué licencias liberar y reducir.",

  // Pricing (home)
  "pricing.title": "Menos de lo que se te está yendo",
  "pricing.subtitle":
    "Desde {price} al mes por empresa. Gratis los primeros 90 días, sin tarjeta.",

  // CTA final
  "cta.title": "Empieza hoy. En diez minutos tienes las cuentas bajo control.",
  "cta.subtitle":
    "Gratis 90 días, sin tarjeta y sin compromiso. Si no te convence, no pagas nada.",
  "cta.signup": "Empieza gratis 90 días",

  // Vocabulario: planilla → hoja de cálculo, plata → dinero
  "compare.r7.manual": "En una hoja de cálculo, a veces",
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
};

const esMX: Dictionary = { ...esCL, ...overrides };

export default esMX;
