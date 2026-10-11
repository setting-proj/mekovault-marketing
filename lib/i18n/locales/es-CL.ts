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
  "meta.title": "Mekovault · Bajas, altas y licencias en Google Workspace sin IT",
  "meta.description": "Cierra cuentas, libera licencias y traspasa archivos el mismo día que alguien deja la empresa. Lo pide RRHH, sin IT. Gratis 90 días, desde $49.900 CLP al mes.",

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
  "hero.title.line1": "Cierra las cuentas y licencias de quien se va, el mismo día.",
  "hero.title.line2": "Sin depender de IT.",
  "hero.subtitle": "Google Workspace, Slack, Zoom, Figma y todo lo que pagas por persona. Personas pide, Mekovault lo ejecuta a la hora y queda la evidencia. Todo nace en la nómina y se gobierna desde ahí.",
  "hero.cta.signup": "Empieza gratis 90 días",
  "hero.trust.1": "Sin tarjeta para partir",
  "hero.trust.2": "Se instala en una tarde",
  "hero.trust.3": "Cancelas cuando quieras",

  // ========== Home: mock dashboard ==========

  // ========== Home: integrations ==========

  // ========== Home: problem ==========

  // ========== Home: calculator ==========
  "calc.eyebrow": "Calculadora",
  "calc.title": "¿Cuánto se te está escapando?",
  "calc.subtitle":
    "Tres datos y una estimación honesta. Ajusta los valores a tu empresa.",
  "calc.people": "Personas en la empresa",
  "calc.turnover": "Rotación anual estimada",
  "calc.turnover.hint": "Porcentaje de personas que sale en un año. En Chile suele estar entre 15 % y 30 %.",
  "calc.cost": "Costo por licencia al mes (USD)",
  "calc.cost.hint": "Google Workspace y las plataformas similares cuestan entre 7 y 25 dólares por persona al mes.",
  "calc.leavers": "{n} personas salen al año",
  "calc.result.label": "Fuga anual estimada",
  "calc.result.monthly": "≈ {v} al mes que estás pagando de más",
  "calc.assumption":
    "Asumimos que una cuenta olvidada se sigue pagando 6 meses en promedio antes de que alguien la cierre. Es una estimación conservadora.",
  "calc.cta": "Deja de pagar esto: empieza gratis",
  "calc.compare": "Mekovault cierra esa fuga: bloquea las cuentas el mismo día y te muestra qué licencias liberar y reducir.",

  // ========== Home: benefits ==========

  // ========== Home: how it works ==========
  "how.eyebrow": "Cómo funciona",
  "how.title": "De la solicitud al registro, sin pasar por Soporte",

  // ========== Home: compare ==========

  // ========== Home: founder quote ==========

  // ========== Home: services ==========
  "svc.status.available": "Disponible",
  "svc.status.included": "Incluido",
  "svc.workspace.title": "Gestión de cuentas",
  "svc.workspace.official": "Super Workspace",
  "svc.workspace.desc": "El producto principal. Altas, bajas y cambios de cuentas en Google Workspace.",
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
  "pricing.subtitle":
    "Desde {price} al mes por empresa. Gratis los primeros 90 días, sin tarjeta.",

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
  "faq.setup.q": "¿Cuánto demora empezar?",
  "faq.setup.a": "Diez minutos para conectar tu Google Workspace con la guía. La primera solicitud la haces ese mismo día. No hay proyecto de implementación ni consultora.",
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
  "footer.tagline": "Controla las cuentas y licencias de tu gente en las plataformas de la empresa, desde un solo lugar. Para empresas que no tienen un administrador de cuentas.",
  "footer.note":
    "Mekovault SpA es una empresa chilena. Tus datos se tratan según nuestra política de privacidad.",
  "footer.col.product": "Producto",
  "footer.col.company": "Empresa",
  "footer.col.legal": "Legal",
  "footer.link.services": "Producto",
  "footer.link.pricing": "Precios",
  "footer.link.governance": "Seguridad y arquitectura",
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
  "products.subtitle": "Mekovault administra las cuentas de tu equipo en las plataformas que pagas por persona: quién entra, quién sale, quién pide qué y cuánto cuesta. Hoy con Google Workspace; las demás, en camino.",
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
  "workflow.eyebrow": "Una solicitud de principio a fin",
  "workflow.title": "Seis pasos que hoy toman semanas. Con Mekovault, un día.",
  "workflow.subtitle": "Así se resuelve una solicitud desde que alguien la pide hasta que todo queda registrado. Haz click en cada paso.",
  "workflow.step_of": "paso {n} de {total}",
  "wf.s1.actor": "Quien pide",
  "wf.s1.action": "Crea la solicitud",
  "wf.s1.service": "Formulario simple",
  "wf.s1.detail": "Personas, un gerente o quien administra indica qué necesita: una alta, una baja, un alias, un acceso o una reactivación temporal. Con la fecha en que debe ocurrir: hoy o dentro de dos semanas.",
  "wf.s2.actor": "Aprobación",
  "wf.s2.action": "Solo si hace falta",
  "wf.s2.service": "Un clic desde el correo",
  "wf.s2.detail": "Si el dato viene de Personas, no se aprueba nada. Si lo pide un gerente por su cuenta, quien tú definas aprueba desde el correo con un clic y decide a quién derivar el correo de la persona que sale.",
  "wf.s3.actor": "Mekovault",
  "wf.s3.action": "Ejecuta a la hora",
  "wf.s3.service": "Automático",
  "wf.s3.detail": "El día y la hora indicados, la cuenta se crea, se bloquea o se modifica en Google Workspace. Sin entrar a la consola. Si es una salida, la persona ya no puede entrar a su correo, a los archivos ni al calendario desde ningún dispositivo.",
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
  "products.cta.subtitle": "Crea tu cuenta y conecta Google Workspace con la guía. Gratis 90 días.",
  "products.cta.signup": "Empieza gratis 90 días",
  "products.cta.sales": "Hablar con nosotros",

  // ========== Pricing page ==========
  "pricing_page.title.pre": "Precios simples,",
  "pricing_page.title.hl": "por empresa",
  "pricing_page.subtitle":
    "Elige solo lo que necesitas. Cada módulo tiene un precio mensual fijo. Mientras más módulos activas, más descuento en todos.",
  "pricing_page.trial_badge": "Gratis para siempre hasta 20 cuentas · 90 días gratis en los planes pagados · sin tarjeta",
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
  "status.today": "Conectada",
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
  "platforms.title": "Por dónde partimos y qué viene después",
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
  "faq.platforms.a": "Hoy, con Google Workspace. Estamos sumando las plataformas que las empresas pagan por persona: chat, proyectos, ventas, soporte y código. Para las que no permiten automatizar, o solo lo permiten en su plan más caro, Mekovault organiza la tarea con un responsable y guarda la evidencia.",
  "faq.licenses.q":
    "Si bloqueo una cuenta, ¿dejo de pagar su licencia?",
  "faq.licenses.a":
    "No siempre. En la mayoría de las plataformas una cuenta bloqueada se sigue cobrando hasta que se libera la licencia y se reduce la cantidad contratada, y eso último lo hace tu empresa en la pantalla de pagos de cada plataforma. Control de licencias (próximamente) libera la licencia y te avisa a tiempo qué reducir.",
  "pricing_page.model_note":
    "Un precio fijo por empresa según los módulos que actives, sin costo por persona ni por implementación. Si tienes más de 500 personas o varias empresas, conversemos: cloud@mekovault.com.",

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
    "Control de licencias",
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
  "lc.cta.subtitle": "Control de licencias funciona hoy con Google Workspace y con las suscripciones registradas en Compras. Las demás plataformas se suman una por una; mientras tanto te decimos qué cambiar en cada consola.",
  "lc.cta.contact":
    "Empieza gratis 90 días",
  "lc.cta.platforms":
    "Ver plataformas",

  // ========== Rediseño 2026-09-30: el panel es el sitio ==========
  "marquee.label": "Pensado para las plataformas que pagas por persona",
  "hero.cta.how": "Ver cómo funciona",
  "panel.url": "app.mekovault.com/tu-empresa/tickets/centro",
  "panel.nav.ops": "Operaciones",
  "panel.nav.tickets": "Tickets",
  "panel.nav.center": "Centro de solicitudes",
  "panel.nav.calendar": "Calendario",
  "panel.nav.origin": "Origen de altas y bajas",
  "panel.nav.platforms": "Plataformas",
  "panel.nav.people": "Personas",
  "panel.nav.licenses": "Licencias",
  "panel.nav.tasks": "Tareas",
  "panel.nav.settings": "Configuración",
  "panel.nav.roles": "Personas y roles",
  "panel.nav.audit": "Auditoría",
  "panel.center.meta": "Últimos 7 días · 6 solicitudes · 1 requiere atención",
  "panel.center.stat.auto": "Ejecutadas solas",
  "panel.center.stat.waiting": "Programadas",
  "panel.center.stat.attention": "Requiere atención",
  "panel.col.n": "N.º",
  "panel.col.request": "Solicitud",
  "panel.col.person": "Persona",
  "panel.col.status": "Estado",
  "panel.col.by": "Resuelto por",
  "panel.row.join": "Alta de cuenta",
  "panel.row.exit": "Baja programada",
  "panel.row.react": "Reactivación temporal",
  "panel.row.release": "Liberar licencia",
  "panel.row.alias": "Alias",
  "panel.status.done": "Ejecutada",
  "panel.status.approval": "Programada",
  "panel.status.attention": "Atención",
  "panel.by.system_day": "sistema · día de ingreso",
  "panel.by.system_time": "sistema · 18:00",
  "panel.by.manager": "sistema · a la fecha",
  "panel.by.google": "Google la asigna sola",
  "panel.by.support": "Soporte de tickets",
  "panel.days3": "3 días",
  "panel.callout.1": "Las altas se ejecutan solas el día de ingreso",
  "panel.callout.2": "Lo que necesita a alguien, se ve; el resto no molesta",
  "exit.eyebrow": "Cuando alguien entra o sale",
  "exit.title": "Personas pide. Y listo: Mekovault lo ejecuta a la hora.",
  "exit.desc": "Si el dato viene de Personas, no hay que aprobar nada ni escribirle a Soporte ni entrar a la consola de Google. La solicitud se programa para el último día, se ejecuta sola y deja todo registrado.",
  "exit.b1.strong": "Salida el mismo día, en todas las plataformas conectadas.",
  "exit.b1.rest": "Bloqueo, redirección del correo y licencia liberada, en un solo paso.",
  "exit.b2.strong": "Reactivación temporal por los días que elijas.",
  "exit.b2.rest": "Avisa 5 días antes y el mismo día; al vencer se bloquea sola.",
  "exit.b3.strong": "Todo queda en la auditoría de tu empresa.",
  "exit.b3.rest": "Quién pidió, qué se hizo y cuándo. Se conserva 365 días y la descargas completa.",
  "exit.link": "Ver todas las solicitudes que puedes hacer",
  "exit.panel.title": "Baja de",
  "exit.panel.requested": "Pidió",
  "exit.panel.requested_by": "Personas (RRHH)",
  "exit.panel.lastday": "Último día",
  "exit.panel.lastday_value": "30-09-2026 · 18:00",
  "exit.panel.mailto": "Recibe su correo",
  "exit.panel.t1": "18:00",
  "exit.panel.t3": "18:01",
  "exit.panel.t4": "en 30 días",
  "exit.panel.e1.strong": "Cuenta bloqueada en Google Workspace.",
  "exit.panel.e1.rest": "Sesiones cerradas, contraseña invalidada.",
  "exit.panel.e2.strong": "Correo redirigido",
  "exit.panel.e2.rest": "a c.mena@tu-empresa.cl y respuesta automática activada.",
  "exit.panel.e3.strong": "Licencia liberada.",
  "exit.panel.e3.rest": "Dejas de pagar Business Standard por esta cuenta desde hoy.",
  "exit.panel.e4.strong": "Eliminación programada.",
  "exit.panel.e4.rest": "Puedes reactivarla hasta entonces con un clic.",
  "exit.panel.note": "Detalle de una solicitud en el panel. Los nombres son de ejemplo.",
  "exit.email.leaver": "p.riquelme@tu-empresa.cl",
  "exit.email.receiver": "c.mena@tu-empresa.cl",
  "panel.email.1": "m.contreras@tu-empresa.cl",
  "panel.email.2": "p.riquelme@tu-empresa.cl",
  "panel.email.3": "a.soto@tu-empresa.cl",
  "panel.email.4": "ventas@ → c.rojas@tu-empresa.cl",
  "lic.eyebrow": "Plataformas y licencias",
  "lic.title": "Mira lo que pagas por persona. Y deja de pagar lo que nadie usa.",
  "lic.desc": "Mekovault lee las licencias de cada plataforma conectada: cuántas compraste, cuántas están asignadas y cuántas quedaron en cuentas bloqueadas. Cuando alguien sale, libera la licencia o te dice exactamente qué tienes que cambiar en la consola.",
  "lic.p1.name": "Google Workspace",
  "lic.p1.desc": "Cuentas, alias, grupos y licencias",
  "lic.p2.name": "Chat, proyectos, ventas y soporte",
  "lic.p2.desc": "Las plataformas que tu equipo ya usa, una por una",
  "lic.p3.name": "Tu sistema de personas",
  "lic.p3.desc": "Que las altas y bajas nazcan donde ya nacen",
  "lic.status.connected": "Conectada",
  "lic.panel.title": "Licencias por plataforma",
  "lic.panel.meta": "Leído hoy 08:10 · Google Workspace",
  "lic.panel.bought": "Compradas",
  "lic.panel.assigned": "Asignadas",
  "lic.panel.blocked": "En cuentas bloqueadas",
  "lic.panel.leak": "Se te escapa al mes",
  "lic.panel.col.license": "Licencia",
  "lic.panel.col.inuse": "En uso",
  "lic.panel.col.unused": "Sin usar",
  "lic.panel.col.plan": "Plan",
  "lic.panel.plan.annual": "Anual · renueva 01-03-2027",
  "lic.panel.plan.flex": "Flexible",
  "lic.panel.alert.strong": "Antes del 01-02-2027:",
  "lic.panel.alert.rest": "baja 8 licencias de Business Standard en la renovación. Te lo recordamos con fecha.",
  "lic.panel.note": "Pantalla de Licencias. Las cifras son de ejemplo.",
  "lic.link": "Ver Control de licencias",
  "calc.fig1.value": "US$ 500 a 1.000",
  "calc.fig1.label": "al mes se fuga en licencias de gente que ya no está, en una empresa de 50 a 500 personas",
  "calc.fig2.value": "7 a 25 dólares",
  "calc.fig2.label": "cuesta cada licencia por persona al mes; la factura llega igual aunque nadie la use",
  "calc.fig3.value": "6 meses",
  "calc.fig3.label": "se sigue pagando una cuenta olvidada, en promedio, antes de que alguien la cierre",
  "cta.pricing_line": "Gratis hasta 20 cuentas. Después, desde {price} al mes por empresa, sin costo por persona.",
  "faq.other.q": "Mi empresa no usa Google Workspace. ¿Sirve igual?",
  "faq.other.a": "Hoy Mekovault se conecta con Google Workspace. Las demás plataformas se están sumando una por una. Escríbenos cuál usas y te avisamos apenas esté.",
  "pf.panel.title": "Plataformas",
  "pf.panel.meta": "1 conectada · 2 con responsable",
  "pf.panel.col.platform": "Plataforma",
  "pf.panel.col.accounts": "Cuentas",
  "pf.panel.col.mode": "Cómo se resuelve",
  "pf.panel.col.status": "Estado",
  "pf.panel.mode.auto": "Automático",
  "pf.panel.mode.guided": "Tarea guiada",
  "pf.panel.mode.manual": "Registrada por ti",
  "pf.panel.status.ok": "Conectada",
  "pf.panel.status.owner": "Responsable: a.soto",
  "pf.panel.status.soon": "Próximamente",
  "pf.panel.note": "Pantalla de Plataformas. Las cifras son de ejemplo.",
  "pf.panel.add": "Agregar plataforma",
  "pf.panel.row.manual": "Sistema contable",
  "pf.panel.url": "app.mekovault.com/tu-empresa/plataformas",
  "nav.governance_short": "Gobernanza",

  // Gobierno de cuentas y credenciales (/account-governance), 2026-10-03
  "footer.link.account_governance": "Gobierno de cuentas",
  "agov.eyebrow": "Gobierno de cuentas y credenciales de servicios",
  "agov.title.pre": "Todo nace en la nómina.",
  "agov.title.hl": "Y todo se gobierna desde ahí.",
  "agov.subtitle": "Cada cuenta, licencia y credencial existe porque una persona entró a la empresa. Mekovault une ese dato de origen con lo que la persona tiene en cada plataforma, y lo cierra cuando cambia de rol o deja la organización. Con evidencia.",
  "agov.cta.signup": "Empieza gratis 90 días",
  "agov.cta.cycle": "Ver el ciclo completo",
  "agov.panel.origin": "Origen: nómina",
  "agov.panel.person": "P. Riquelme · Diseño",
  "agov.panel.person_meta": "Último día en la organización: 30-09-2026",
  "agov.panel.badge": "2 cuentas se siguen cobrando",
  "agov.panel.closed": "cerrada y liberada",
  "agov.panel.still_paying": "sigue cobrando",
  "agov.panel.note": "Lo que suele pasar sin gobierno: se cierra el correo y nadie vuelve a mirar el resto. Nombres y plataformas de ejemplo.",
  "agov.leaks.eyebrow": "Las fugas que nadie ve",
  "agov.leaks.title": "Cuando alguien deja la organización, nadie garantiza que las demás cuentas dejen de cobrarse",
  "agov.leaks.desc": "El correo se cierra el mismo día. Pero la licencia de diseño, el asiento de Slack, la suscripción pagada con tarjeta y la cuenta genérica que esa persona administraba siguen vivas. Cada una es un cobro mensual y una puerta abierta.",
  "agov.leaks.with": "Con gobierno:",
  "agov.leaks.1.tag": "Licencias huérfanas",
  "agov.leaks.1.title": "Se bloquea el correo y el resto sigue cobrando",
  "agov.leaks.1.desc": "Slack, Figma, Adobe, Canva o Zoom no se enteran de que la persona ya no está. El asiento queda asignado y la factura llega igual, mes tras mes, hasta que alguien lo nota.",
  "agov.leaks.1.fix": "la salida se ejecuta en todas las plataformas conectadas y el informe muestra qué se liberó y cuánto dejas de pagar.",
  "agov.leaks.2.tag": "Cuentas genéricas sin dueño",
  "agov.leaks.2.title": "soporte@, ventas@ y facturacion@ quedan sin responsable",
  "agov.leaks.2.desc": "Las cuentas compartidas las administraba una persona concreta. Cuando esa persona cambia de rol o se va, nadie sabe quién tiene la contraseña ni quién responde por ellas.",
  "agov.leaks.2.fix": "cada cuenta genérica tiene un responsable y, al salir, Mekovault pide reasignarla antes de cerrar.",
  "agov.leaks.3.tag": "Credenciales de servicio",
  "agov.leaks.3.title": "Claves de API, tokens e integraciones viven en planillas y chats",
  "agov.leaks.3.desc": "La credencial que conecta la nómina, la facturación o el CRM la creó alguien con su propio usuario. Si esa persona ya no está, la integración sigue corriendo con una identidad que nadie controla.",
  "agov.leaks.3.fix": "las credenciales de servicio se guardan cifradas por empresa, con dueño, vencimiento y registro de cada uso.",
  "agov.leaks.4.tag": "Suscripciones con tarjeta",
  "agov.leaks.4.title": "Lo que se compró con tarjeta se renueva solo",
  "agov.leaks.4.desc": "Una herramienta contratada por un equipo se renueva automáticamente aunque ya nadie la use. La factura llega al correo de quien la contrató y nadie más la ve.",
  "agov.leaks.4.fix": "Compras de software registra cada licencia con su periodicidad, avisa 30 días antes de renovar y pide la factura cada mes a quien corresponde.",
  "agov.pillars.eyebrow": "Qué significa gobernar",
  "agov.pillars.title": "Un origen, una regla y una evidencia",
  "agov.pillars.desc": "Gobernanza no es una política en un PDF. Es que cada cuenta tenga un motivo para existir, alguien que responda por ella y un registro de lo que pasó.",
  "agov.pillars.1.tag": "Origen",
  "agov.pillars.1.title": "La nómina manda",
  "agov.pillars.1.desc": "La solicitud de ingreso define qué recibe la persona. El cambio de rol y la salida salen del mismo lugar: Personas lo pide y Mekovault lo ejecuta a la hora, sin pasar por Soporte.",
  "agov.pillars.2.tag": "Regla",
  "agov.pillars.2.title": "Por rol de negocio, no por favor de IT",
  "agov.pillars.2.desc": "Quién pide, quién aprueba y qué se ejecuta solo se define una vez por rol: Personas, Soporte, Compras, Tesorería, Auditoría. Nadie necesita que le den acceso: lo tiene por lo que hace.",
  "agov.pillars.3.tag": "Evidencia",
  "agov.pillars.3.title": "Todo queda registrado y se puede mostrar",
  "agov.pillars.3.desc": "Quién pidió, qué se hizo, en qué plataforma, cuándo y desde dónde. Auditoría de 365 días, informe de salida por persona y exportación completa para auditores.",
  "agov.cycle.eyebrow": "El ciclo completo",
  "agov.cycle.title": "De la nómina a la última cuenta cerrada",
  "agov.cycle.desc": "Cuatro momentos en los que una cuenta nace, cambia o termina. En cada uno Mekovault sabe qué hacer porque el dato viene del origen.",
  "agov.cycle.1.title": "Ingreso",
  "agov.cycle.1.desc": "Personas registra a la persona con su rol y su fecha. Las cuentas y licencias que le corresponden se crean el primer día, con la licencia más económica que cumpla.",
  "agov.cycle.1.who": "Pide Personas · ejecuta Mekovault",
  "agov.cycle.2.title": "Cambio de rol o de equipo",
  "agov.cycle.2.desc": "Lo que ya no corresponde se libera y lo nuevo se asigna. Las herramientas que se pagan por persona se piden por Compras de software, con aprobación de la jefatura por correo.",
  "agov.cycle.2.who": "Pide la jefatura · aprueba por correo",
  "agov.cycle.3.title": "Salida de la organización",
  "agov.cycle.3.desc": "Bloqueo el último día, correo redirigido, licencias liberadas en todas las plataformas, cuentas genéricas reasignadas y suscripciones a nombre de la persona revisadas.",
  "agov.cycle.3.who": "Pide Personas · informe de salida con el ahorro",
  "agov.cycle.4.title": "Después",
  "agov.cycle.4.desc": "Eliminación programada con días de gracia, reactivación temporal si hace falta, renovaciones avisadas 30 días antes y recordatorio de factura cada mes.",
  "agov.cycle.4.who": "Automático · con aviso a quien corresponde",
  "agov.svc.eyebrow": "Cuentas y credenciales de servicio",
  "agov.svc.title": "Lo que no es de una persona también tiene dueño",
  "agov.svc.desc": "Las cuentas compartidas y las credenciales con las que los sistemas hablan entre sí son las que más se olvidan. Aquí también hay un responsable, un vencimiento y un registro.",
  "agov.svc.1.strong": "Cuentas genéricas con responsable.",
  "agov.svc.1.rest": "soporte@, ventas@ o facturacion@ tienen una persona a cargo; si esa persona sale, se reasigna antes de cerrar nada.",
  "agov.svc.2.strong": "Credenciales guardadas cifradas, por empresa.",
  "agov.svc.2.rest": "Las claves que Mekovault usa para operar tus plataformas viven en una bóveda separada por organización, con auditoría de cada uso y aviso antes de vencer.",
  "agov.svc.3.strong": "Suscripciones con periodicidad y factura.",
  "agov.svc.3.rest": "Cada herramienta contratada queda con su monto, su renovación, quién la paga y a qué correo llega la factura.",
  "agov.svcpanel.title": "Cuentas y credenciales con responsable",
  "agov.svcpanel.col1": "Cuenta",
  "agov.svcpanel.col2": "Tipo",
  "agov.svcpanel.col3": "Responsable",
  "agov.svcpanel.generic": "cuenta genérica",
  "agov.svcpanel.credential": "credencial de servicio",
  "agov.svcpanel.note": "Al salir una persona, Mekovault lista lo que tenía a cargo y pide un nuevo responsable. Datos de ejemplo.",
  "agov.roles.eyebrow": "Qué obtiene cada rol",
  "agov.roles.title": "Gerencia, Personas, Finanzas y Auditoría ven lo mismo, cada uno desde su lado",
  "agov.roles.desc": "No es una herramienta más para IT. Es el lugar donde cada área encuentra la respuesta que hoy pide por correo.",
  "agov.roles.1.who": "Gerencia",
  "agov.roles.1.title": "Cuánto pagas por persona y cuánto dejaste de pagar",
  "agov.roles.1.desc": "Licencias por plataforma, asientos sin usar, ahorro por salidas e informes mensuales sin pedirle nada a nadie.",
  "agov.roles.2.who": "Personas",
  "agov.roles.2.title": "Pide y listo",
  "agov.roles.2.desc": "Ingreso, cambio y salida desde un formulario. Se ejecuta a la fecha y queda registrado. Sin consola de Google ni tickets a Soporte.",
  "agov.roles.3.who": "Finanzas y Compras",
  "agov.roles.3.title": "Cada licencia con su OC, su renovación y su factura",
  "agov.roles.3.desc": "Solicitudes de herramientas con aprobación de jefatura, orden de compra, Tesorería y recordatorio de factura. Nada se renueva sin que alguien lo vea.",
  "agov.roles.4.who": "Auditoría y seguridad",
  "agov.roles.4.title": "Evidencia lista para mostrar",
  "agov.roles.4.desc": "Registro inmutable de 365 días con IP y navegador, informe de salida por persona y exportación completa. Lo que un auditor pide, ya existe.",
  "agov.end.title": "Gobierna las cuentas desde donde nacen",
  "agov.end.desc": "Conecta tu Google Workspace en una tarde, sube tu nómina (o conecta BUK) y el Mapa de fugas te muestra, con el costo mensual, qué cuentas y licencias se siguen pagando por gente que ya no está.",
  "agov.end.security": "Cómo está construido y protegido",
  "gov.home.eyebrow": "Control de cuentas y accesos",
  "gov.home.title": "Todo nace en la nómina. Y todo se gobierna desde ahí.",
  "gov.home.desc": "Una cuenta existe porque una persona entró a la empresa. Cuando cambia de rol o deja la organización, nadie garantiza que las demás cuentas dejen de cobrarse: la licencia de diseño, el asiento de Slack, la suscripción con tarjeta, la cuenta genérica que administraba.",
  "gov.home.b1.strong": "Origen único.",
  "gov.home.b1.rest": "Ingreso, cambio y salida salen de Personas y se ejecutan en todas las plataformas conectadas.",
  "gov.home.b2.strong": "Responsable para todo.",
  "gov.home.b2.rest": "Cuentas genéricas, credenciales de servicio y suscripciones con dueño, vencimiento y factura.",
  "gov.home.b3.strong": "Evidencia de 365 días.",
  "gov.home.b3.rest": "Quién pidió, qué se hizo y cuánto dejaste de pagar. Lista para un auditor.",
  "gov.home.link": "Ver cómo se gobiernan las cuentas",

  // ========== SEO, guías y búsquedas (plan de marketing 2026-10-11) ==========
  "seo.home.title": "Mekovault · Bajas, altas y licencias en Google Workspace sin IT",
  "seo.home.description": "Cierra cuentas, libera licencias y traspasa archivos el mismo día que alguien deja la empresa. Lo pide RRHH, sin IT. Gratis 90 días, desde $49.900 CLP al mes.",
  "seo.og.tagline": "Lo pide RRHH, Mekovault lo ejecuta y queda la evidencia. Gratis 90 días.",
  "seo.offer.description": "Gratis hasta 20 cuentas de Google Workspace. Después, desde $49.900 CLP al mes por empresa, sin costo por persona.",
  "seo.products.title": "Producto: altas, bajas y licencias sin IT · Mekovault",
  "seo.products.description": "Alta el día de ingreso, baja el último día con correo y archivos traspasados, licencias liberadas y evidencia 365 días. Todo lo pide Personas, sin ticket a IT.",
  "seo.platforms.title": "Plataformas que pagas por persona · Mekovault",
  "seo.platforms.description": "Google Workspace conectado hoy; Slack, Zoom, Figma, Adobe y las demás plataformas que pagas por persona, una por una. Qué hace sola cada una y qué queda guiado.",
  "seo.license_control.title": "Control de licencias de Google Workspace · Mekovault",
  "seo.license_control.description": "Bloquear una cuenta no siempre deja de cobrarla. Mira cuántas licencias compraste, cuántas usas y cuántas quedaron en cuentas bloqueadas, y qué cambiar en la renovación.",
  "seo.pricing.title": "Precios: gratis hasta 20 cuentas, luego por empresa · Mekovault",
  "seo.pricing.description": "Gratis para siempre hasta 20 cuentas de Google Workspace (altas, bajas y solicitudes). Después, un precio por empresa según el tamaño, sin costo por persona. Sin tarjeta.",
  "seo.about.title": "Nosotros: una empresa chilena · Mekovault",
  "seo.about.description": "Mekovault SpA nació en Santiago para que las empresas sin administrador de cuentas cierren, abran y controlen sus cuentas y licencias sin depender de IT.",
  "seo.contact.title": "Contacto y soporte en español · Mekovault",
  "seo.contact.description": "Escríbenos a cloud@mekovault.com o agenda una videollamada. Soporte en español y en horario de Chile, también para Argentina, México, España y Brasil.",
  "seo.partners.title": "Programa de partners: comisión mensual · Mekovault",
  "seo.partners.description": "Ofrece Mekovault a tus clientes y cobra una comisión cada mes mientras sigan activos. Para consultoras de RRHH, contadores y partners de Google Workspace.",
  "seo.agov.title": "Gobierno de cuentas y credenciales · Mekovault",
  "seo.agov.description": "Cada cuenta, licencia y credencial existe porque una persona entró a la empresa. Cómo se cierra cuando se va, con un origen, un responsable y evidencia para auditar.",
  "seo.governance.title": "Seguridad y arquitectura de Mekovault",
  "seo.governance.description": "Cómo está construido y operado Mekovault: aislamiento por empresa, sesiones con MFA, credenciales cifradas con auditoría de cada uso y eliminación de datos a pedido.",
  "seo.status.title": "Estado del servicio · Mekovault",
  "seo.status.description": "Estado en vivo de la aplicación, la API y el sitio de Mekovault, comprobado cada minuto desde tu navegador.",
  "seo.docs.title": "Documentación · Mekovault",
  "seo.docs.description": "Guías para poner Mekovault en marcha: crear la organización, conectar Google Workspace, personas y roles, tickets y automatizaciones, problemas frecuentes.",
  "seo.resources.title": "Guías: bajas de cuentas y control de licencias · Mekovault",
  "seo.resources.description": "Cómo dar de baja a un empleado en Google Workspace, qué hacer con su correo y archivos, qué licencias sigues pagando y qué apps tienen acceso a tu empresa.",
  "seo.help.title": "Centro de ayuda: cuentas, alias y licencias · Mekovault",
  "seo.help.description": "Respuestas cortas a lo que más se pregunta: alias y cuentas genéricas, reactivar un usuario, cambiar de dominio, delegar un buzón y liberar licencias de Zoom o Slack.",
  "seo.legal.title": "Términos, privacidad y seguridad · Mekovault",
  "seo.legal.description": "Términos de servicio, política de privacidad, seguridad, tratamiento de datos, uso aceptable, cookies y proveedores de Mekovault SpA.",
  "nav.resources": "Guías",
  "footer.link.resources": "Guías y recursos",
  "footer.link.help": "Centro de ayuda",
  "searches.eyebrow": "Lo que la gente busca",
  "searches.title": "Las preguntas que los dueños y gerentes le hacen a Google y a ChatGPT",
  "searches.desc": "Las respondimos completas, con los pasos y lo que hace Mekovault en cada caso.",
  "searches.q1": "¿Cómo doy de baja a un empleado en Google Workspace sin seguir pagando?",
  "searches.q2": "¿Qué pasa con el correo y los archivos de la persona que se va?",
  "searches.q3": "¿Cuántas licencias paga mi empresa y quién las usa?",
  "searches.q4": "¿Qué aplicaciones tienen acceso a las cuentas de mi empresa?",
  "searches.q5": "¿Cómo conecto Buk o Talana para que las altas y bajas salgan solas?",
  "searches.q6": "¿Qué le pregunto a cualquier proveedor antes de contratar?",
  "searches.link": "Ver todas las guías",

  // ========== Precios por tamaño, contacto, nosotros, estado (2026-10-11, ola 2) ==========
  "tiers.eyebrow": "Por tamaño de empresa",
  "tiers.title": "Elige por el tamaño de tu empresa",
  "tiers.desc": "Gratis hasta 20 cuentas, para siempre. Después, un precio por empresa según el tamaño, no por persona: dentro de cada tramo pagas lo mismo con 25 o con 200 cuentas.",
  "tiers.small.name": "Pequeña",
  "tiers.small.who": "De 21 a 50 cuentas",
  "tiers.small.i1": "Altas y bajas en Google Workspace el día que corresponde",
  "tiers.small.i2": "Correo redirigido, archivos traspasados, licencia liberada",
  "tiers.small.i3": "Licencias: compradas, usadas y en cuentas bloqueadas",
  "tiers.small.i4": "Auditoría de 365 días",
  "tiers.medium.name": "Mediana",
  "tiers.medium.who": "De 51 a 200 cuentas",
  "tiers.medium.i1": "Todo lo de Pequeña",
  "tiers.medium.i2": "Nómina conectada (BUK, Talana) y jefaturas",
  "tiers.medium.i3": "Solicitudes con aprobación por rol y carga masiva",
  "tiers.medium.i4": "Aplicaciones vinculadas y compras de software",
  "tiers.large.name": "Grande",
  "tiers.large.who": "De 201 a 500 cuentas",
  "tiers.large.i1": "Todo lo de Mediana",
  "tiers.large.i2": "API por empresa y doble aprobación",
  "tiers.large.i3": "Exportación de auditoría para auditores externos",
  "tiers.large.i4": "Soporte prioritario",
  "tiers.people.range": "{a} a {b} cuentas",
  "tiers.people.from": "Desde {n} cuentas",
  "tiers.per_company": "por empresa al mes, sin costo por persona",
  "tiers.modules": "Módulos",
  "tiers.note.clp": "Precios en pesos chilenos, IVA incluido en la boleta o factura. El total sale del catálogo de módulos con su descuento.",
  "tiers.note.usd": "Referencia en dólares al tipo de cambio del {date}; fuera de Chile facturamos en USD por transferencia o tarjeta.",
  "tiers.note.more": "Más de 500 personas o varias empresas: escríbenos a cloud@mekovault.com.",
  "contact.after.title": "Qué pasa después de escribir",
  "contact.after.s1.title": "Te respondemos en un día hábil",
  "contact.after.s1.desc": "Una persona del equipo, no un robot. Si tu pregunta es técnica, la responde quien construyó esa parte.",
  "contact.after.s2.title": "Videollamada de 20 minutos, si quieres",
  "contact.after.s2.desc": "Te mostramos Mekovault con una empresa de ejemplo y, si ya tienes Google Workspace, lo conectamos contigo en la misma llamada.",
  "contact.after.s3.title": "Pruebas 90 días gratis",
  "contact.after.s3.desc": "Sin tarjeta y sin contrato. Si no te sirve, no pasa nada: tus cuentas siguen en Google tal como estaban.",
  "contact.hours.title": "Horarios y canales",
  "contact.hours.desc": "Lunes a viernes de 9:00 a 19:00, hora de Chile. Soporte a clientes por correo y por el panel; urgencias de clientes con prioridad. Atendemos en español, inglés y portugués.",
  "contact.faq.q1": "¿Atienden fuera de Chile?",
  "contact.faq.a1": "Sí: Argentina, México, España, Brasil y Estados Unidos. La facturación fuera de Chile es en dólares.",
  "contact.faq.q2": "¿Puedo pedir una demo con mis propios datos?",
  "contact.faq.a2": "Sí. Conectamos tu Google Workspace en la llamada y hacemos una solicitud real con una cuenta de prueba, para que veas qué se cierra, qué licencia se libera y qué queda registrado.",
  "contact.faq.q3": "¿Trabajan con consultoras o partners?",
  "contact.faq.a3": "Sí. Hay un programa de partners con comisión mensual para consultoras de RRHH, contadores y partners de Google Workspace.",
  "contact.faq.link": "Ver el programa de partners",
  "about.believe.title": "En qué creemos",
  "about.believe.1.strong": "Todo nace en la nómina.",
  "about.believe.1.rest": "Una cuenta existe porque una persona entró a la empresa. Si el dato de ingreso y salida ya está en Personas o en la nómina, nadie debería tener que pedirlo por correo.",
  "about.believe.2.strong": "La jefatura decide, no IT.",
  "about.believe.2.rest": "Qué pasa con los archivos y el correo de quien se va lo sabe su jefatura directa. Nuestro trabajo es preguntárselo a tiempo y ejecutar lo que decida.",
  "about.believe.3.strong": "Decimos lo que no hacemos.",
  "about.believe.3.rest": "Ninguna plataforma deja que un tercero reduzca lo contratado, y varias no permiten automatizar nada. Lo decimos en cada página, y lo que no se puede automatizar queda como tarea con evidencia.",
  "about.believe.4.strong": "Un precio por empresa.",
  "about.believe.4.rest": "Cobrar por persona castiga a la empresa que crece. Cobramos por empresa, según el tamaño, y no hay costo por implementación.",
  "about.where.title": "Dónde estamos",
  "about.where.desc": "Mekovault SpA está en Santiago de Chile y el equipo trabaja remoto. Atendemos Chile, Argentina, México, España, Brasil y Estados Unidos en español, inglés y portugués. Los servidores están en Estados Unidos con copias cifradas; el detalle de dónde viven los datos está en Seguridad y arquitectura.",
  "about.where.link": "Ver seguridad y arquitectura",
  "status.what.title": "Qué se comprueba",
  "status.what.desc": "Tres cosas, desde tu navegador: que la aplicación responda, que la API pública responda y que este sitio cargue. Si tu navegador no puede llegar a alguna, aquí sale 'Sin respuesta' aunque el servicio esté operativo; en ese caso prueba desde otra red.",
  "status.incidents.title": "Cómo avisamos",
  "status.incidents.desc": "Los incidentes y mantenimientos programados se avisan por correo a los administradores de cada organización, con hora de inicio, impacto y hora estimada de fin, y después un resumen de causa. No hay mantenimientos en horario de oficina de Chile.",
  "status.scheduled.title": "Lo que corre solo",
  "status.scheduled.desc": "Las altas y bajas programadas se ejecutan a la hora indicada por un proceso con reintentos; si una operación falla, la solicitud queda en 'requiere atención' con el motivo y se avisa. El calendario de operaciones de cada organización muestra cada ejecución con su estado.",
  "status.links": "Cómo está construido y operado Mekovault, en Seguridad y arquitectura. Soporte a clientes: soporte@mekovault.com.",
  "tiers.talk": "A conversar",
  "tiers.talk.desc": "Con más de 200 personas confirmamos el plan contigo: mismo precio por empresa, sin costo por persona.",
  "tiers.talk.cta": "Escríbenos",
  "tiers.free.name": "Gratis",
  "tiers.free.who": "Hasta 20 cuentas",
  "tiers.free.price": "$0",
  "tiers.free.desc": "Para siempre, sin tarjeta. Google Workspace y solicitudes.",
  "tiers.free.i1": "Altas y bajas en Google Workspace el día que corresponde",
  "tiers.free.i2": "Solicitudes: alta, baja, reactivación, alias, genérica",
  "tiers.free.i3": "Correo redirigido y archivos traspasados al salir",
  "tiers.free.i4": "Auditoría de 365 días",
  "tiers.accounts_note": "Las cuentas son las de Google Workspace que Mekovault administra (activas y bloqueadas). El tramo se ajusta solo cuando creces.",
  "faq.free.q": "¿Qué incluye el plan gratis?",
  "faq.free.a": "Hasta 20 cuentas de Google Workspace, para siempre y sin tarjeta: altas y bajas el día que corresponde, solicitudes (alta, baja, reactivación, alias, cuenta genérica), correo redirigido y archivos traspasados al salir, y la auditoría de 365 días. Cuando pasas de 20 cuentas o quieres nómina conectada, licencias por plataforma o compras, pasas a un plan por tamaño.",
} as const;

export type TranslationKey = keyof typeof esCL;
export type Dictionary = Record<TranslationKey, string>;

export default esCL as Dictionary;
