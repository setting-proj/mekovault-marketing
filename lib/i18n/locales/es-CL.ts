/**
 * Español (Chile) · diccionario base del sitio.
 *
 * Es la fuente de verdad de las claves: `TranslationKey` se deriva de acá.
 * es-AR y es-MX extienden este diccionario sobrescribiendo lo que cambia.
 *
 * Tono: dueño / gerente general / finanzas / personas de una empresa de
 * 50 a 500 personas. Cero jerga técnica. Frases cortas. Plata y personas.
 */

const esCL = {
  // ========== Meta ==========
  "meta.title": "Mekovault · Las cuentas de tu gente, en todas tus plataformas",
  "meta.description":
    "Crea, bloquea y da de baja las cuentas de tu equipo en Google Workspace, Microsoft 365 y las demás plataformas que pagas por persona, desde un solo lugar. Y controla lo que pagas en licencias. Gratis 90 días.",

  // ========== Header nav ==========
  "nav.product": "Producto",
  "nav.pricing": "Precios",
  "nav.about": "Nosotros",
  "nav.contact": "Contacto",
  "nav.governance": "Gobernanza y arquitectura",
  "nav.partners": "Partners",
  "nav.login": "Entrar",
  "nav.signup": "Empieza gratis",

  // ========== Home: hero ==========
  "hero.eyebrow": "Gratis 90 días · sin tarjeta · sin TI",
  "hero.title.line1": "Alguien se va de la empresa.",
  "hero.title.line2": "Sus cuentas siguen abiertas. Y se siguen pagando.",
  "hero.subtitle":
    "Mekovault administra las cuentas de tu gente en las plataformas que pagas por persona: correo, chat, proyectos, ventas, soporte. Cada ingreso y cada salida se resuelve desde un solo lugar, con aprobación y registro. Y pronto, con Control de licencias, verás qué estás pagando de más y cómo dejar de pagarlo.",
  "hero.cta.signup": "Empieza gratis 90 días",
  "hero.cta.calc": "Calcula cuánto se te está escapando",
  "hero.trust.1": "Sin tarjeta para partir",
  "hero.trust.2": "No necesitas TI",
  "hero.trust.3": "Cancelas cuando quieras",

  // ========== Home: mock dashboard ==========
  "mock.acc_active": "Cuentas activas",
  "mock.left_year": "Salidas este año",
  "mock.requests_done": "Solicitudes resueltas",
  "mock.ago": "hace 47 s",
  "mock.offboarding_of": "Salida ·",
  "mock.status_completed": "lista",
  "mock.step_1": "Aviso de Personas recibido",
  "mock.step_2": "Acceso bloqueado en sus plataformas",
  "mock.step_3": "Correo derivado a su jefatura",
  "mock.step_4": "Todo registrado, con fecha y responsable",

  // ========== Home: integrations ==========
  "integrations.title": "Las plataformas que tu empresa paga por persona",

  // ========== Home: problem ==========
  "problem.eyebrow": "El gasto que nadie ve",
  "problem.title": "Sin un proceso de altas y bajas, la plata se va sola",
  "problem.subtitle":
    "En una empresa de 50 a 500 personas entran y salen colaboradores todo el año. Cada cuenta que nadie cierra sigue costando entre 7 y 25 dólares al mes. Nadie se da cuenta porque la factura llega igual.",
  "problem.c1.title": "Entre 500 y 1.000 dólares al mes",
  "problem.c1.desc":
    "Es lo que suele fugarse en licencias de gente que ya no está. Al año son entre 5 y 11 millones de pesos, más de 150 UF, en cuentas que nadie usa.",
  "problem.c2.title": "Nadie es dueño del proceso",
  "problem.c2.desc":
    "Personas avisa por correo, alguien de administración crea la cuenta cuando puede, y la baja depende de que alguien se acuerde. Sin un responsable, la cuenta queda abierta.",
  "problem.c3.title": "Accesos abiertos después de la salida",
  "problem.c3.desc":
    "Una persona que ya no trabaja contigo sigue entrando a su correo, a los archivos y al calendario. Es un gasto, y también un riesgo que preferirías no tener.",

  // ========== Home: calculator ==========
  "calc.eyebrow": "Calculadora",
  "calc.title": "¿Cuánto se te está escapando?",
  "calc.subtitle":
    "Tres datos y una estimación honesta. Ajusta los valores a tu empresa.",
  "calc.people": "Personas en la empresa",
  "calc.turnover": "Rotación anual estimada",
  "calc.turnover.hint": "Porcentaje de personas que sale en un año. En Chile suele estar entre 15 % y 30 %.",
  "calc.cost": "Costo por licencia al mes (USD)",
  "calc.cost.hint": "Google Workspace o Microsoft 365 cuestan entre 7 y 25 dólares por persona al mes.",
  "calc.leavers": "{n} personas salen al año",
  "calc.result.label": "Fuga anual estimada",
  "calc.result.monthly": "≈ {v} al mes que estás pagando de más",
  "calc.assumption":
    "Asumimos que una cuenta olvidada se sigue pagando 6 meses en promedio antes de que alguien la cierre. Es una estimación conservadora.",
  "calc.cta": "Deja de pagar esto: empieza gratis",
  "calc.compare": "Mekovault cierra esa fuga: bloquea las cuentas el mismo día y pronto, con Control de licencias, te mostrará qué licencias liberar y reducir.",

  // ========== Home: benefits ==========
  "benefits.eyebrow": "Qué cambia con Mekovault",
  "benefits.title": "Un solo lugar para todas las cuentas. Y control de lo que pagas.",
  "benefits.subtitle":
    "Pensado para empresas sin un administrador de cuentas. Lo usa la persona de administración, de Personas o el mismo gerente.",
  "benefits.b1.title": "Nadie queda con accesos después de irse",
  "benefits.b1.desc":
    "Cuando una persona sale, sus cuentas se bloquean en las plataformas conectadas y su correo pasa a su jefatura, el mismo día y sin depender de que alguien se acuerde. Donde una plataforma no permite hacerlo automático, Mekovault le asigna la tarea a su responsable y guarda la evidencia.",
  "benefits.flow.1": "Sale una persona",
  "benefits.flow.2": "Se avisa",
  "benefits.flow.3": "Se bloquea",
  "benefits.flow.4": "Queda registrado",
  "benefits.b2.title": "Altas en minutos, no en días",
  "benefits.b2.desc":
    "La persona nueva llega el lunes y su correo ya funciona. Con su firma, sus grupos y sus accesos según el cargo.",
  "benefits.b3.title": "Solicitudes con aprobación",
  "benefits.b3.desc":
    "Un jefe pide una cuenta o un acceso. Quien corresponde aprueba con un click. Nadie crea cuentas por su cuenta.",
  "benefits.b4.title": "Todo queda registrado",
  "benefits.b4.desc":
    "Quién pidió, quién aprobó y cuándo se hizo. Cuando alguien pregunte, la respuesta está ahí.",
  "benefits.b5.title": "Google, Microsoft y las que vienen",
  "benefits.b5.desc":
    "Hoy funciona con Google Workspace y Microsoft 365. Estamos sumando las plataformas que más usan las empresas: chat, proyectos, ventas, soporte y código. Sin cambiar nada de lo que ya tienes.",
  "benefits.b6.title": "Sin capacitación",
  "benefits.b6.desc":
    "Un formulario para pedir, un botón para aprobar. Si tu equipo usa correo, sabe usar Mekovault.",

  // ========== Home: how it works ==========
  "how.eyebrow": "Cómo funciona",
  "how.title": "Cuatro pasos y listo",
  "how.subtitle": "Sin proyecto de implementación. Sin consultora.",
  "how.step1.title": "Conecta tus plataformas",
  "how.step1.desc":
    "Parte con Google Workspace o Microsoft 365: diez minutos con una guía paso a paso. Las demás se suman desde el mismo panel. Si te trabas, te ayudamos por videollamada.",
  "how.step2.title": "Define quién pide y quién aprueba",
  "how.step2.desc":
    "Por ejemplo: Personas pide, el gerente de área aprueba. Lo cambias cuando quieras.",
  "how.step3.title": "Cada ingreso o salida es una solicitud",
  "how.step3.desc":
    "Se llena un formulario simple. Mekovault crea, bloquea o modifica las cuentas y avisa a quien corresponde.",
  "how.step4.title": "Ves quién tiene qué, y cuánto cuesta",
  "how.step4.desc":
    "Un panel con las cuentas de cada persona en cada plataforma, las salidas resueltas y pronto, con Control de licencias, las licencias que puedes dejar de pagar.",

  // ========== Home: compare ==========
  "compare.eyebrow": "Antes y después",
  "compare.title": "La misma salida de una persona, de dos formas",
  "compare.subtitle":
    "Siete cosas que hay que hacer cuando alguien deja la empresa. Mueve el control y mira cuál se parece a tu empresa hoy.",
  "compare.left": "← Como se hace hoy",
  "compare.right": "Con Mekovault →",
  "compare.aria": "Comparar el proceso manual con Mekovault",
  "compare.col.step": "Paso",
  "compare.col.manual": "Hoy",
  "compare.col.meko": "Mekovault",
  "compare.r1.step": "Personas avisa la salida",
  "compare.r1.manual": "Un correo que alguien tiene que leer",
  "compare.r1.meko": "Una solicitud con fecha de salida",
  "compare.r2.step": "Alguien aprueba",
  "compare.r2.manual": "Se busca la autorización en el correo",
  "compare.r2.meko": "Un click de la jefatura",
  "compare.r3.step": "Se bloquea el acceso",
  "compare.r3.manual": "Cuando alguien tiene tiempo",
  "compare.r3.meko": "El mismo día, automático",
  "compare.r4.step": "El correo pasa a la jefatura",
  "compare.r4.manual": "Casi nunca se hace",
  "compare.r4.meko": "Incluido en la salida",
  "compare.r5.step": "Se quitan los grupos y archivos",
  "compare.r5.manual": "Uno por uno, si se acuerdan",
  "compare.r5.meko": "Todo junto",
  "compare.r6.step": "Se deja de pagar la licencia",
  "compare.r6.manual": "Se descubre meses después en la factura",
  "compare.r6.meko": "Control de licencias la libera y te avisa qué reducir (próximamente)",
  "compare.r7.step": "Queda registrado",
  "compare.r7.manual": "En una planilla, a veces",
  "compare.r7.meko": "Siempre, con fecha y responsable",

  // ========== Home: founder quote ==========
  "founder.quote":
    "La empresa que originó Mekovault tenía cerca de 200 cuentas de Google y las manejaba con un formulario y una planilla. Cada ingreso tomaba media tarde. Cada salida olvidaba algo, y ese algo se seguía pagando. No inventamos un producto: ordenamos ese problema.",
  "founder.name": "Jorge",
  "founder.role": "Fundador",
  "founder.date": "Santiago de Chile",

  // ========== Home: services ==========
  "services.eyebrow": "Lo que puedes activar",
  "services.title": "Parte con la gestión de cuentas. Suma el resto cuando lo necesites.",
  "services.subtitle":
    "Cada módulo se contrata por separado y se activa desde tu panel. Sin contratos largos.",
  "svc.status.available": "Disponible",
  "svc.status.included": "Incluido",
  "svc.workspace.title": "Gestión de cuentas",
  "svc.workspace.official": "Super Workspace",
  "svc.workspace.desc":
    "El producto principal. Altas, bajas y cambios de cuentas en Google Workspace y Microsoft 365.",
  "svc.workspace.b1": "Ingresos listos el primer día",
  "svc.workspace.b2": "Salidas completas: acceso, correo y grupos",
  "svc.workspace.b3": "Panel con las cuentas de cada persona",
  "svc.tickets.title": "Solicitudes y aprobaciones",
  "svc.tickets.official": "Requests & Tickets",
  "svc.tickets.desc":
    "Un formulario para pedir cuentas o accesos y un flujo de aprobación. Ideal si varias jefaturas piden cosas.",
  "svc.tickets.b1": "Quién pide y quién aprueba, por área",
  "svc.tickets.b2": "Solicitudes programadas para una fecha",
  "svc.tickets.b3": "Ingresos masivos desde una planilla",
  "svc.audit.title": "Registro y auditoría",
  "svc.audit.official": "Audit & Compliance",
  "svc.audit.desc":
    "Un historial que no se puede borrar de todo lo que pasó con cada cuenta. Para auditorías, certificaciones o simplemente dormir tranquilo.",
  "svc.audit.b1": "Quién hizo qué, y cuándo",
  "svc.audit.b2": "Descarga el historial en Excel",
  "svc.audit.b3": "Retención larga para cumplimiento",

  // ========== Home: pricing preview ==========
  "pricing.eyebrow": "Precios",
  "pricing.title": "Menos de lo que se te está fugando",
  "pricing.subtitle":
    "Desde {price} al mes por empresa. Gratis los primeros 90 días, sin tarjeta.",
  "pricing.cta.viewAll": "Ver precios",

  // ========== Home: FAQ ==========
  "faq.eyebrow": "Preguntas honestas",
  "faq.title": "Lo que preguntan los dueños y gerentes antes de partir",
  "faq.subtitle": "Recopilado de conversaciones con empresas de Chile y Latinoamérica.",
  "faq.it.q": "¿Necesito a alguien de TI para usarlo?",
  "faq.it.a":
    "No. Mekovault está hecho para empresas que no tienen un administrador de cuentas. Lo conecta el gerente o la persona de administración siguiendo una guía, y desde ahí lo usa Personas o quien tú definas. Si prefieres que lo conectemos nosotros, lo hacemos por videollamada sin costo.",
  "faq.security.q": "¿Es seguro darle acceso a las cuentas de mi empresa?",
  "faq.security.a":
    "Mekovault solo puede crear, bloquear y modificar cuentas. No lee correos ni archivos, y no pide permisos para hacerlo. Tus credenciales se guardan cifradas y separadas de las de otros clientes, y cada acción queda registrada con fecha y responsable. Cumplimos la Ley 21.719 de protección de datos.",
  "faq.leave.q": "¿Qué pasa con mis cuentas si dejo de usar Mekovault?",
  "faq.leave.a":
    "Nada. Las cuentas siguen viviendo en tus plataformas, como siempre. Si te vas mañana, todo queda tal cual y te llevas el historial en Excel.",
  "faq.ms.q": "Mi empresa usa Microsoft 365, no Google. ¿Sirve igual?",
  "faq.ms.a":
    "Sí. Funciona con Google Workspace, con Microsoft 365 y con empresas que usan los dos, por ejemplo después de una fusión.",
  "faq.setup.q": "¿Cuánto demora empezar?",
  "faq.setup.a":
    "Diez minutos para conectar tu Google Workspace o Microsoft 365 con la guía. La primera solicitud la haces ese mismo día. No hay proyecto de implementación ni consultora.",
  "faq.support.q": "¿El soporte es en español y en horario de Chile?",
  "faq.support.a":
    "Sí. El equipo está en Santiago y responde en español en horario hábil de Chile. También atendemos en portugués e inglés.",

  // ========== Home: CTA ==========
  "cta.title": "Empieza hoy. En diez minutos tienes las cuentas bajo control.",
  "cta.subtitle":
    "Gratis 90 días, sin tarjeta y sin compromiso. Si no te sirve, no pagas nada.",
  "cta.signup": "Empieza gratis 90 días",
  "cta.pricing": "Ver precios",

  // ========== Footer ==========
  "footer.tagline":
    "Las cuentas de tu gente en todas tus plataformas, desde un solo lugar, y control de lo que pagas en licencias. Para empresas que no tienen un administrador de cuentas.",
  "footer.note":
    "Mekovault SpA es una empresa chilena. Tus datos se tratan según nuestra política de privacidad.",
  "footer.col.product": "Producto",
  "footer.col.company": "Empresa",
  "footer.col.legal": "Legal",
  "footer.link.services": "Producto",
  "footer.link.pricing": "Precios",
  "footer.link.governance": "Gobernanza y arquitectura",
  "footer.link.status": "Estado del servicio",
  "footer.link.docs": "Documentación",
  "footer.link.portal": "Entrar al panel",
  "footer.link.about": "Nosotros",
  "footer.link.contact": "Contacto",
  "footer.link.partners": "Programa de partners",
  "footer.link.terms": "Términos",
  "footer.link.privacy": "Privacidad",
  "footer.link.security": "Seguridad",
  "footer.link.dpa": "Tratamiento de datos",
  "footer.link.aup": "Uso aceptable",
  "footer.link.cookies": "Cookies",
  "footer.link.subprocessors": "Proveedores",
  "footer.copyright": "Mekovault SpA, Santiago, Chile",
  "legal.lang_notice": "Nuestros documentos legales se publican en español.",

  // ========== Compliance badges ==========
  "compliance.gdpr": "Cumplimos con el RGPD (UE 2016/679)",
  "compliance.chile": "Cumple con la Ley 21.719 · Chile",

  // ========== Language switcher ==========
  "lang.switcher_label": "Cambiar idioma",

  // ========== 404 ==========
  "notfound.title": "Página no encontrada",
  "notfound.desc": "La dirección que buscas no existe o la movimos.",
  "notfound.home": "Volver al inicio",
  "notfound.product": "Ver producto",

  // ========== Products page ==========
  "products.eyebrow": "Producto",
  "products.title.pre": "Todas las cuentas de tu empresa,",
  "products.title.hl": "bajo control.",
  "products.subtitle":
    "Mekovault administra las cuentas de tu equipo en las plataformas que pagas por persona: quién entra, quién sale, quién pide qué y cuánto cuesta. Hoy con Google Workspace y Microsoft 365; las demás, en camino.",
  "products.cap.eyebrow": "Qué hace por tu empresa",
  "products.cap.title": "Cinco cosas que hoy se hacen a mano, o no se hacen",
  "products.cap.1.title": "Ingresos",
  "products.cap.1.desc":
    "La persona nueva tiene correo, grupos y accesos desde el primer día. Personas llena un formulario y listo.",
  "products.cap.2.title": "Salidas",
  "products.cap.2.desc":
    "Se bloquea el acceso en las plataformas conectadas, el correo pasa a la jefatura y se quitan los grupos. Todo el mismo día, con registro.",
  "products.cap.3.title": "Solicitudes",
  "products.cap.3.desc":
    "Una jefatura pide una cuenta nueva, un alias o un cambio de cargo. Se aprueba con un click y se ejecuta solo.",
  "products.cap.4.title": "Tickets de acceso",
  "products.cap.4.desc":
    "Alguien necesita entrar a una carpeta o a un grupo. Se pide, se aprueba, se otorga y queda registrado quién lo autorizó.",
  "products.cap.5.title": "Registro",
  "products.cap.5.desc":
    "Un historial de cada cuenta desde que se creó hasta que se cerró. Para auditorías, o para responder \"¿quién aprobó esto?\".",
  "workflow.eyebrow": "Una salida de principio a fin",
  "workflow.title": "Seis pasos que hoy toman semanas. Con Mekovault, un día.",
  "workflow.subtitle":
    "Así se resuelve la salida de una persona desde que Personas avisa hasta que todo queda registrado. Haz click en cada paso.",
  "workflow.step_of": "paso {n} de {total}",
  "wf.s1.actor": "Personas",
  "wf.s1.action": "Avisa la salida",
  "wf.s1.service": "Formulario simple",
  "wf.s1.detail":
    "La persona de Personas indica quién se va y en qué fecha. Puede ser hoy o dentro de dos semanas: Mekovault espera a la fecha indicada.",
  "wf.s2.actor": "Jefatura",
  "wf.s2.action": "Aprueba con un click",
  "wf.s2.service": "Aviso por correo",
  "wf.s2.detail":
    "La jefatura del área recibe un correo y aprueba. Ahí mismo decide a quién derivar el correo de la persona que sale.",
  "wf.s3.actor": "Mekovault",
  "wf.s3.action": "Bloquea el acceso",
  "wf.s3.service": "Automático",
  "wf.s3.detail":
    "El día de la salida, la cuenta queda bloqueada en las plataformas conectadas. La persona ya no puede entrar a su correo, a los archivos ni al calendario, desde ningún dispositivo.",
  "wf.s4.actor": "Mekovault",
  "wf.s4.action": "Deriva el correo y los archivos",
  "wf.s4.service": "Automático",
  "wf.s4.detail":
    "Los correos que lleguen se reenvían a la jefatura y los archivos quedan disponibles para quien se definió. No se pierde nada de la empresa.",
  "wf.s5.actor": "Mekovault",
  "wf.s5.action": "Libera la licencia",
  "wf.s5.service": "Control de licencias · próximamente",
  "wf.s5.detail":
    "Bloquear una cuenta no siempre deja de cobrarla. Control de licencias libera la licencia cuando ya no hace falta conservar la cuenta y te avisa, con fecha, qué cantidad reducir antes de tu próxima renovación. Es el paso que hoy casi nadie hace, y el que más cuesta.",
  "wf.s6.actor": "Mekovault",
  "wf.s6.action": "Deja todo registrado",
  "wf.s6.service": "Historial",
  "wf.s6.detail":
    "Quién avisó, quién aprobó y qué día se bloqueó cada cuenta. Queda guardado y no se puede borrar.",
  "products.addons.eyebrow": "Módulos",
  "products.addons.title": "Activa solo lo que tu empresa necesita",
  "products.addons.subtitle":
    "Parte con la gestión de cuentas. Los demás módulos se suman desde el panel cuando los necesites, con descuento por cada módulo adicional.",
  "products.cta.title": "¿Quieres verlo con las cuentas de tu empresa?",
  "products.cta.subtitle":
    "Crea tu cuenta y conecta Google Workspace o Microsoft 365 con la guía. Gratis 90 días.",
  "products.cta.signup": "Empieza gratis 90 días",
  "products.cta.sales": "Hablar con nosotros",

  // ========== Pricing page ==========
  "pricing_page.title.pre": "Precios simples,",
  "pricing_page.title.hl": "por empresa",
  "pricing_page.subtitle":
    "Elige solo lo que necesitas. Cada módulo tiene un precio mensual fijo. Mientras más módulos activas, más descuento en todos.",
  "pricing_page.trial_badge": "Gratis 90 días · sin tarjeta · cancelas cuando quieras",
  "pricing_page.bundle.title": "Descuento por módulos",
  "pricing_page.bundle.apps": "{n}+ módulos",
  "pricing_page.bundle.one": "1 módulo",
  "pricing_page.bundle.some": "{n} módulos",
  "pricing_page.bundle.off": "de descuento",
  "pricing_page.per_month": "/mes",
  "pricing_page.select_hint": "Toca un módulo para armar tu plan",
  "pricing_page.selection": "Tu selección: {n} módulo(s)",
  "pricing_page.discount_line": "{pct} % de descuento con {n} módulos",
  "pricing_page.included_with": "Incluido con {name}",
  "pricing_page.currency_note":
    "Precios en pesos chilenos, IVA incluido en la boleta o factura. Sin costo por persona.",
  "pricing_page.reference_note":
    "Precios de referencia. Los confirmas al crear tu cuenta.",
  "pricing_page.faq.eyebrow": "Preguntas",
  "pricing_page.faq.title": "Preguntas sobre precios",
  "pricing_page.faq.desc": "Si tienes otra duda, escríbenos a cloud@mekovault.com.",
  "pricing_page.cta.title": "Empieza gratis. Decide en 90 días.",
  "app.workspace.name": "Gestión de cuentas",
  "app.workspace.pitch": "Ingresos, salidas y cambios de cuentas. El producto principal.",
  "app.tickets.name": "Solicitudes y aprobaciones",
  "app.tickets.pitch": "Formulario de solicitudes con aprobación por jefatura.",
  "app.audit.name": "Registro y auditoría",
  "app.audit.pitch": "Historial que no se puede borrar, listo para auditorías.",
  "faq.price_includes.q": "¿Qué incluye el precio?",
  "faq.price_includes.a":
    "Cada módulo tiene un precio mensual fijo por empresa. Incluye soporte en español y todas las actualizaciones. Lo ves antes de activarlo y lo puedes desactivar cuando quieras.",
  "faq.discount.q": "¿Cómo funciona el descuento por módulos?",
  "faq.discount.a":
    "Con dos módulos activos, los dos tienen 5 % de descuento. Con tres, 10 %. Se aplica solo, sin cupones.",
  "faq.switch.q": "¿Puedo agregar o quitar módulos después?",
  "faq.switch.a":
    "Sí, en cualquier momento desde tu panel. Se cobra proporcional a los días: no pagas doble por el cambio.",
  "faq.payment.q": "¿Cómo se paga?",
  "faq.payment.a":
    "Con tarjeta de crédito o débito, a través de MercadoPago. Recibes boleta o factura cada mes. Para empresas grandes también aceptamos transferencia.",
  "faq.contract.q": "¿Hay contrato mínimo?",
  "faq.contract.a":
    "No. Los primeros 90 días son gratis y después pagas mes a mes. Cancelas cuando quieras desde el panel.",

  // ========== About page ==========
  "about.eyebrow": "Nuestra historia",
  "about.title.pre": "Nacimos viendo cómo las empresas",
  "about.title.hl": "pierden plata",
  "about.title.post": "en cuentas que nadie cierra.",
  "about.subtitle":
    "Mekovault SpA es una empresa chilena. Vimos que las empresas medianas manejan sus cuentas de correo con planillas y buena voluntad, y que eso cuesta más de lo que parece.",
  "about.pillar.mission.title": "Lo que hacemos",
  "about.pillar.mission.desc":
    "Que administrar las cuentas de tu empresa sea tan simple como aprobar un correo, y que sepas siempre cuánto estás pagando.",
  "about.pillar.focus.title": "Para quién",
  "about.pillar.focus.desc":
    "Empresas de 50 a 500 personas sin un administrador de cuentas. Partimos en Chile y ya atendemos en toda Latinoamérica.",
  "about.pillar.ambition.title": "Cómo trabajamos",
  "about.pillar.ambition.desc":
    "Sin consultoras ni proyectos de implementación. Te conectas, lo pruebas gratis y decides.",
  "about.why.title": "Por qué construimos Mekovault",
  "about.why.p1":
    "El punto de partida fue una empresa concreta en Santiago. Cerca de 200 cuentas de Google, un formulario, una planilla y una persona que hacía todo a mano cuando tenía tiempo. Cada ingreso tomaba media tarde. Cada salida olvidaba algo.",
  "about.why.p2":
    "Miramos alrededor y era lo mismo en todas partes. Las herramientas grandes de este tipo están hechas para corporaciones con equipos de TI. Para una empresa de 50, 100 o 300 personas no había nada simple, local ni accesible.",
  "about.why.p3":
    "Mekovault es esa opción. Se conecta en minutos, lo usa gente sin perfil técnico, y te muestra, persona por persona, qué cuentas tiene tu empresa y cuáles ya no deberían existir.",
  "about.timeline.eyebrow": "Cómo llegamos hasta acá",
  "about.timeline.title": "El proyecto en cinco momentos",
  "about.timeline.subtitle": "Los momentos donde el producto tomó forma, en orden.",
  "timeline.m1.date": "Momento 1",
  "timeline.m1.title": "El problema en una empresa real",
  "timeline.m1.metric": "Santiago · 200 cuentas",
  "timeline.m1.detail":
    "Una empresa con 200 cuentas de Google las manejaba con un formulario, una planilla y mucha paciencia. Los ingresos tomaban horas. Las salidas dejaban cuentas abiertas que se descubrían meses después, en la factura.",
  "timeline.m2.date": "Momento 2",
  "timeline.m2.title": "La primera versión",
  "timeline.m2.metric": "Adiós a la planilla",
  "timeline.m2.detail":
    "Reemplazamos la planilla y los parches por un sistema que hacía el mismo trabajo, pero siempre igual y sin olvidar pasos. La empresa siguió usando su Google Workspace de siempre.",
  "timeline.m3.date": "Momento 3",
  "timeline.m3.title": "Para muchas empresas a la vez",
  "timeline.m3.metric": "Cada cliente, separado",
  "timeline.m3.detail":
    "Rediseñamos todo para atender a muchas empresas, con los datos y las credenciales de cada una completamente separados de las demás.",
  "timeline.m4.date": "Momento 4",
  "timeline.m4.title": "Un panel para gente sin perfil técnico",
  "timeline.m4.metric": "Pide, aprueba, listo",
  "timeline.m4.detail":
    "El panel que usan hoy los clientes: cada empresa define quién puede pedir, quién aprueba y quién solo mira. Con pago mensual y boleta o factura chilena.",
  "timeline.m5.date": "Momento 5",
  "timeline.m5.title": "Solicitudes y salidas completas",
  "timeline.m5.metric": "Un click, toda la salida",
  "timeline.m5.detail":
    "Una persona con tres correos en tres dominios se bloquea con un solo click. Alias, correos secundarios y cambios de cargo, todo con historial que no se puede borrar.",
  "about.cta.title": "¿Quieres conversar?",
  "about.cta.desc":
    "Escríbenos y coordinamos una reunión corta. Te contamos qué hacemos y qué te podemos resolver.",
  "about.cta.contact": "Contáctanos",
  "about.cta.signup": "Empieza gratis",

  // ========== Contact page ==========
  "contact.eyebrow": "Contacto",
  "contact.title.pre": "Hablemos.",
  "contact.title.hl": "Respondemos en un día hábil.",
  "contact.subtitle":
    "La forma más rápida de conocer Mekovault es probarlo gratis. Si prefieres conversar antes, escríbenos por correo o con el formulario.",
  "contact.card.sales": "Ventas y consultas generales",
  "contact.card.support": "Soporte a clientes",
  "contact.card.office": "Oficina",
  "contact.card.office_value": "Santiago de Chile",
  "contact.card.office_sub": "Trabajamos remoto",
  "contact.card.trial": "Prueba gratis",
  "contact.form.eyebrow": "Formulario",
  "contact.form.title": "Escríbenos",
  "contact.form.desc":
    "Cuéntanos brevemente qué necesitas. Este formulario abre tu programa de correo.",
  "contact.form.name": "Nombre",
  "contact.form.email": "Correo",
  "contact.form.company": "Empresa",
  "contact.form.message": "Mensaje",
  "contact.form.send": "Enviar mensaje",
  "contact.form.also": "También puedes escribirnos directamente a",

  // ========== Partners page ==========
  "partners.eyebrow": "Programa de partners",
  "partners.title.pre": "Ofrece Mekovault a tus clientes.",
  "partners.title.hl": "Gana una comisión cada mes.",
  "partners.subtitle":
    "Contadores, consultoras y empresas de servicios: lleva Mekovault a las empresas que ya te contratan. Nosotros hacemos la parte técnica, tú cierras el negocio y cobras entre 5 % y 10 % mensual por cliente.",
  "partners.cta.apply": "Postular al programa",
  "partners.cta.tiers": "Ver niveles",
  "partners.how.eyebrow": "Cómo funciona",
  "partners.how.title": "Cuatro pasos para partir",
  "partners.how.desc": "De la postulación al primer cliente en menos de dos semanas.",
  "partners.how.s1.title": "1. Postula",
  "partners.how.s1.desc": "Llena el formulario. Te contactamos en 48 horas.",
  "partners.how.s2.title": "2. Te preparamos",
  "partners.how.s2.desc": "Una semana de puesta en marcha y capacitación para tu equipo.",
  "partners.how.s3.title": "3. Vendes",
  "partners.how.s3.desc": "Invitas clientes desde tu portal con tu marca. Nosotros los conectamos si quieres.",
  "partners.how.s4.title": "4. Cobras cada mes",
  "partners.how.s4.desc": "Cada cliente activo te genera comisión recurrente. Pago automático o transferencia.",
  "partners.tiers.eyebrow": "Niveles",
  "partners.tiers.title": "Crece a tu ritmo",
  "partners.tiers.desc": "Todos incluyen portal de partner, seguimiento de comisiones e invitaciones con tu marca.",
  "partners.tiers.commission": "comisión mensual por cliente activo",
  "partners.tiers.fee": "Cuota del programa",
  "partners.tier.silver.p1": "Portal de partner completo",
  "partners.tier.silver.p2": "Invitaciones con tu marca",
  "partners.tier.silver.p3": "Comisiones por vendedor",
  "partners.tier.silver.p4": "Panel de clientes",
  "partners.tier.gold.p1": "Todo lo de Silver",
  "partners.tier.gold.p2": "Tu logo y colores en el portal",
  "partners.tier.gold.p3": "Soporte prioritario",
  "partners.tier.gold.p4": "Fondo de marketing trimestral USD 500",
  "partners.tier.platinum.p1": "Todo lo de Gold",
  "partners.tier.platinum.p2": "Portal con tu propio dominio",
  "partners.tier.platinum.p3": "Fondo de marketing trimestral USD 2.000",
  "partners.tier.platinum.p4": "Clientes referidos por Mekovault",
  "partners.tier.platinum.p5": "Capacitación técnica incluida",
  "partners.apply.eyebrow": "Postula",
  "partners.apply.title": "Cuéntanos de tu empresa",
  "partners.apply.desc": "Revisamos tu postulación en 48 horas y agendamos una llamada.",
  "partners.form.company": "Nombre de la empresa *",
  "partners.form.website": "Sitio web",
  "partners.form.country": "País *",
  "partners.form.country.other": "Otro",
  "partners.form.team": "Tamaño del equipo *",
  "partners.form.team.more": "Más de 200",
  "partners.form.name": "Tu nombre *",
  "partners.form.email": "Tu correo de empresa *",
  "partners.form.phone": "Teléfono / WhatsApp",
  "partners.form.tier": "Nivel que te interesa",
  "partners.form.customers": "¿Cuántos clientes tienen hoy? *",
  "partners.form.customers_ph": "Ej: 25 empresas, principalmente pymes de 20 a 200 personas",
  "partners.form.why": "¿Por qué te interesa el programa? *",
  "partners.form.why_ph": "Cuéntanos qué buscas resolver para tus clientes y cómo ves Mekovault en tu oferta.",
  "partners.form.submit": "Enviar postulación",
  "partners.form.sending": "Enviando…",
  "partners.form.privacy_pre": "Al enviar aceptas nuestra",
  "partners.form.privacy_link": "Política de Privacidad",
  "partners.form.privacy_post": "Nunca compartimos tus datos con terceros.",
  "partners.form.success.title": "¡Postulación recibida!",
  "partners.form.success.desc": "Te contactamos en 48 horas al correo que registraste. Mientras tanto, puedes escribirnos a",
  "partners.form.error": "No pudimos enviar la postulación. Intenta de nuevo o escríbenos a partners@mekovault.com.",
  "partners.faq.title": "Preguntas frecuentes",
  "partners.faq.q1.q": "¿Necesito gente técnica en mi equipo?",
  "partners.faq.q1.a": "No para partir. En Silver tú vendes y nosotros conectamos a cada cliente. En Gold y Platinum recomendamos capacitar a una o dos personas para atender a tus clientes de punta a punta.",
  "partners.faq.q2.q": "¿La comisión es recurrente?",
  "partners.faq.q2.a": "Sí. Mientras el cliente siga activo y pagando cada mes, tú sigues cobrando tu porcentaje. Si el cliente cancela en los primeros 30 días, la comisión de ese mes se revierte.",
  "partners.faq.q3.q": "¿Puedo tener varios vendedores?",
  "partners.faq.q3.a": "Sí. El portal permite varios usuarios con distintos roles. Cada vendedor tiene su comisión y su seguimiento.",
  "partners.faq.q4.q": "¿En qué países puedo ser partner?",
  "partners.faq.q4.a": "Latinoamérica, España y Estados Unidos. Si estás en otro país, escríbenos y lo evaluamos.",
  "partners.faq.q5.q": "¿Puedo poner mi marca en el portal?",
  "partners.faq.q5.a": "Sí. En Gold con tu logo y colores. En Platinum con tu propio dominio, sin la marca Mekovault visible.",

  // ========== Modelo 2026-09: plataformas + control de licencias ==========
  "status.today":
    "Disponible hoy",
  "status.soon":
    "Próximamente",
  "status.guided":
    "Con tarea guiada · próximamente",
  "two.eyebrow":
    "Dos servicios",
  "two.title":
    "Administrar las cuentas es una cosa. Dejar de pagarlas, otra.",
  "two.subtitle":
    "En la mayoría de las plataformas, una cuenta bloqueada se sigue cobrando. Por eso son dos servicios, y contratas el que necesites.",
  "two.a.title":
    "Administración de cuentas",
  "two.a.desc":
    "Crear, bloquear, reactivar y dar de baja las cuentas de tu gente en las plataformas conectadas, desde un solo lugar.",
  "two.a.b1":
    "Solicitudes con aprobación y registro",
  "two.a.b2":
    "Salidas el mismo día, en todas las plataformas conectadas",
  "two.a.b3":
    "Un precio fijo según cuántas plataformas conectas",
  "two.b.title":
    "Control de licencias",
  "two.b.desc":
    "Que tu empresa deje de pagar por cuentas que ya no usa: no solo bloquear, también liberar la licencia y reducir lo contratado a tiempo.",
  "two.b.b1":
    "Licencias compradas, asignadas y sin uso, por plataforma",
  "two.b.b2":
    "Libera la licencia al salir la persona",
  "two.b.b3":
    "Te avisa, con fecha, qué reducir antes de renovar",
  "platforms.eyebrow":
    "Plataformas",
  "platforms.title":
    "Las plataformas que pagas por persona, en un solo lugar",
  "platforms.subtitle":
    "Partimos por las que se pueden automatizar de verdad. Donde una plataforma no lo permite, o solo lo permite en su plan más caro, Mekovault organiza la tarea: responsable, instrucciones, plazo y evidencia.",
  "platforms.group.hr":
    "Sistemas de personas (avisan ingresos y salidas)",
  "platforms.note":
    "Las marcas pertenecen a sus dueños. Mekovault no está afiliado a estas empresas.",
  "hr.eyebrow":
    "Opcional",
  "hr.title":
    "Conecta tu sistema de personas, si quieres",
  "hr.subtitle":
    "Tu sistema de personas puede avisarle a Mekovault cuando alguien entra, cambia de cargo o se va. Tú decides qué pasa con cada aviso.",
  "hr.m1.title":
    "Solo avisar",
  "hr.m1.desc":
    "Le llega un correo a quien tú definas. Nada más.",
  "hr.m2.title":
    "Crear una solicitud",
  "hr.m2.desc":
    "Alguien la aprueba antes de que pase nada. Es lo que recomendamos.",
  "hr.m3.title":
    "Ejecutar en la fecha",
  "hr.m3.desc":
    "El bloqueo queda programado para el día y la hora de la salida, con un correo para adelantarlo o cancelarlo.",
  "hr.note":
    "Si no conectas ninguno, todo funciona igual con solicitudes.",
  "faq.platforms.q":
    "¿Con qué plataformas funciona?",
  "faq.platforms.a":
    "Hoy, con Google Workspace y Microsoft 365. Estamos sumando las plataformas que las empresas pagan por persona: chat, proyectos, ventas, soporte y código. Para las que no permiten automatizar, o solo lo permiten en su plan más caro, Mekovault organiza la tarea con un responsable y guarda la evidencia.",
  "faq.licenses.q":
    "Si bloqueo una cuenta, ¿dejo de pagar su licencia?",
  "faq.licenses.a":
    "No siempre. En la mayoría de las plataformas una cuenta bloqueada se sigue cobrando hasta que se libera la licencia y se reduce la cantidad contratada, y eso último lo hace tu empresa en la pantalla de pagos de cada plataforma. Control de licencias (próximamente) libera la licencia y te avisa a tiempo qué reducir.",
  "pricing_page.model_note":
    "Administrar cuentas tiene un precio fijo según cuántas plataformas conectas. Control de licencias será un adicional según las licencias que gestionemos por ti. Mientras sumamos plataformas, conversemos tu caso: cloud@mekovault.com.",

  // ========== Páginas /platforms y /license-control (2026-09-21) ==========
  "nav.platforms":
    "Plataformas",
  "footer.link.platforms":
    "Plataformas",
  "footer.link.license_control":
    "Control de licencias",
  "common.learn_more":
    "Saber más",
  "pf.eyebrow":
    "Plataformas",
  "pf.title.pre":
    "Todas las plataformas que pagas por persona,",
  "pf.title.hl":
    "en un solo lugar.",
  "pf.subtitle":
    "Correo, chat, proyectos, ventas, soporte, código. Cada persona de tu empresa tiene una cuenta en cada una, y cada cuenta se crea, se bloquea y se paga por separado. Mekovault las junta.",
  "pf.how.eyebrow":
    "Cómo lo resolvemos",
  "pf.how.title":
    "Automático donde se puede. Guiado donde no.",
  "pf.how.auto.title":
    "Conexión automática",
  "pf.how.auto.desc":
    "Mekovault habla directo con la plataforma: crea, bloquea y da de baja las cuentas, y trae el inventario de quién tiene qué.",
  "pf.how.guided.title":
    "Tarea guiada",
  "pf.how.guided.desc":
    "Hay plataformas que no permiten automatizar, o solo lo permiten en su plan más caro. Ahí Mekovault le asigna la tarea a quien administra esa plataforma en tu empresa, con instrucciones y plazo, y le pide evidencia al cerrarla.",
  "pf.how.any.title":
    "Cualquier otra plataforma",
  "pf.how.any.desc":
    "Si usas algo que no está en la lista, lo registras tú mismo con su responsable. Entra igual en la salida de cada persona.",
  "pf.never.title":
    "Lo que nunca hacemos",
  "pf.never.desc":
    "No usamos robots que se hacen pasar por una persona en el navegador, ni guardamos la clave personal de un administrador. Si una plataforma no ofrece una forma oficial de hacerlo, lo hace una persona de tu equipo y queda registrado.",
  "pf.cta.title":
    "¿Falta alguna plataforma que usas?",
  "pf.cta.subtitle":
    "Cuéntanos cuál. Priorizamos según lo que usan nuestros clientes.",
  "pf.cta.contact":
    "Escríbenos",
  "pf.cta.license":
    "Ver Control de licencias",
  "lc.eyebrow":
    "Control de licencias · próximamente",
  "lc.title.pre":
    "Bloquear una cuenta",
  "lc.title.hl":
    "no siempre deja de cobrarla.",
  "lc.subtitle":
    "En la mayoría de las plataformas, la cuenta de alguien que ya se fue se sigue pagando hasta que alguien libera su licencia y reduce la cantidad contratada. Casi nadie lo hace a tiempo. Control de licencias se encarga.",
  "lc.steps.eyebrow":
    "Qué hace",
  "lc.steps.title":
    "Tres cosas que hoy casi nadie hace a tiempo",
  "lc.s1.title":
    "Libera la licencia",
  "lc.s1.desc":
    "Cuando una persona sale, además de bloquear su cuenta le quita la licencia, después de traspasar lo que sea de la empresa. El borrado definitivo espera el plazo que tú definas.",
  "lc.s2.title":
    "Te avisa qué reducir, y cuándo",
  "lc.s2.desc":
    "Te dice cuántas licencias tienes pagadas sin usar en cada plataforma, cuánto cuestan al mes y hasta qué fecha puedes reducirlas, con los pasos exactos de esa plataforma.",
  "lc.s3.title":
    "Lo deja medido",
  "lc.s3.desc":
    "Cada mes ves cuántas licencias se liberaron, cuántas redujiste y cuánto dejaste de pagar. Sin planillas.",
  "lc.table.eyebrow":
    "Plataforma por plataforma",
  "lc.table.title":
    "¿Bloquear una cuenta deja de cobrarla?",
  "lc.table.subtitle":
    "Lo revisamos en la documentación de cada plataforma. En la mayoría, la respuesta es no.",
  "lc.table.col.platform":
    "Plataforma",
  "lc.table.col.block":
    "¿Bloquear basta?",
  "lc.table.col.todo":
    "Qué hay que hacer para dejar de pagar",
  "lc.yes":
    "Sí",
  "lc.no":
    "No",
  "lc.effect.auto":
    "Nada más: al desactivar la cuenta, el cobro baja solo.",
  "lc.effect.next_cycle":
    "Liberar el asiento y reducir la cantidad contratada. Rige desde el próximo ciclo de cobro (en planes anuales, en la renovación).",
  "lc.effect.renewal":
    "Liberar la licencia y reducir la cantidad contratada. La reducción solo rige en la renovación.",
  "lc.effect.google":
    "Suspender no basta. En el plan flexible hay que eliminar o archivar la cuenta; en el plan anual, la cantidad solo baja en la renovación.",
  "lc.q.monthly":
    "plan mensual",
  "lc.source":
    "fuente",
  "lc.table.note":
    "Según la documentación pública de cada plataforma a septiembre de 2026. Las condiciones cambian y dependen de tu contrato: confírmalas antes de decidir.",
  "lc.honest.title":
    "Lo que no prometemos",
  "lc.honest.desc":
    "Ninguna plataforma permite que un tercero reduzca la cantidad que contrataste: ese último paso lo hace tu empresa, en la pantalla de pagos de cada plataforma. Control de licencias deja hecho todo lo demás y te lo recuerda a tiempo, con los pasos exactos.",
  "lc.cta.title":
    "¿Quieres saber cuánto estás pagando de más?",
  "lc.cta.subtitle":
    "Control de licencias parte con Google Workspace y Microsoft 365. Escríbenos y te avisamos apenas esté disponible.",
  "lc.cta.contact":
    "Avísenme cuando esté",
  "lc.cta.platforms":
    "Ver plataformas",
} as const;

export type TranslationKey = keyof typeof esCL;
export type Dictionary = Record<TranslationKey, string>;

export default esCL as Dictionary;
