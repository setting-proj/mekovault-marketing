/**
 * Diccionarios i18n del sitio de marketing (mekovault.com).
 *
 * Consistente con el portal (app.mekovault.com/apps/web/lib/i18n/dictionaries.ts).
 * Locale keys: es-419, en, pt-BR.
 */

export const LOCALES = ["es-419", "en", "pt-BR"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es-419";

export const LOCALE_LABELS: Record<Locale, { native: string; flag: string }> = {
  "es-419": { native: "Español (LATAM)", flag: "🌎" },
  en: { native: "English", flag: "🌐" },
  "pt-BR": { native: "Português (BR)", flag: "🇧🇷" },
};

const es_419 = {
  // Header nav
  "nav.product": "Producto",
  "nav.pricing": "Planes",
  "nav.about": "Nosotros",
  "nav.contact": "Contacto",
  "nav.login": "Iniciar sesión",
  "nav.signup": "Empezar gratis",

  // Landing hero
  "hero.eyebrow": "Trial 90 días · sin tarjeta · sin límite de cuentas",
  "hero.title.line1": "Contratás a alguien un lunes.",
  "hero.title.line2": "Su cuenta está operativa a las 9:15.",
  "hero.subtitle":
    "Provisioning para Google Workspace, Microsoft Entra y las apps que usan tus equipos. Aprobaciones, audit log inmutable y offboarding en cascada. Desde una consola, con las personas de tu equipo que vos autorices.",
  "hero.cta.signup": "Empezar el trial",
  "hero.cta.customer": "Ver cómo funciona",
  "hero.trust.sla": "SLA definido en plan Pro",
  "hero.trust.rls": "RLS por tenant en Postgres",
  "hero.trust.latam": "AWS + red privada + Tailscale",

  // Integrations strip
  "integrations.title": "Integraciones nativas",

  // Compare (interactive moment)
  "compare.eyebrow": "Antes vs después",
  "compare.title": "El mismo onboarding, dos realidades",
  "compare.subtitle":
    "Siete pasos que un onboarding hace igual, resueltos de dos formas. Movés el slider y ves cuál te toca a vos hoy.",

  // Workflow (products page interactive moment)
  "workflow.eyebrow": "Un onboarding de punta a punta",
  "workflow.title": "Seis pasos, un solo click del admin",
  "workflow.subtitle":
    "Así se ejecuta la creación de una cuenta corporativa desde que RRHH envía el formulario hasta que llega el email de bienvenida. Hacé click en cada paso para ver el detalle.",

  // Timeline (about page interactive moment)
  "about.timeline.eyebrow": "Cómo llegamos hasta acá",
  "about.timeline.title": "El proyecto contado en cinco momentos",
  "about.timeline.subtitle":
    "Sin roadmap corporativo con emojis. Los momentos donde el proyecto tomó forma, en orden.",
  "timeline.m1.date": "Momento 1",
  "timeline.m1.title": "El caso que originó Mekovault",
  "timeline.m1.metric": "Cliente en Santiago",
  "timeline.m1.detail":
    "Un IT Manager gestiona alrededor de 200 cuentas Google Workspace con un formulario, una hoja de cálculo y una veintena de archivos Apps Script. Cada onboarding le toma horas de trabajo repetitivo. Los offboarding a veces dejan accesos sueltos que se descubren después.",
  "timeline.m2.date": "Momento 2",
  "timeline.m2.title": "Prototipo interno",
  "timeline.m2.metric": "Reemplazo de scripts por servicio",
  "timeline.m2.detail":
    "Reemplazamos la maraña de Apps Script por un servicio con webhooks que hace el mismo trabajo, con logs y reintentos. El cliente sigue usando su Google Workspace de siempre, pero deja de tocar las herramientas artesanales.",
  "timeline.m3.date": "Momento 3",
  "timeline.m3.title": "Multi-tenant con aislamiento real",
  "timeline.m3.metric": "Row-Level Security + vault por tenant",
  "timeline.m3.detail":
    "Refactor completo a multi-tenant. Cada empresa se aísla a nivel de fila en Postgres, no con una bandera de aplicación. Los tokens OAuth de cada tenant viven en un proyecto separado del vault self-hosted, para que no haya forma de mezclar credenciales entre clientes.",
  "timeline.m4.date": "Momento 4",
  "timeline.m4.title": "Portal, addons y facturación",
  "timeline.m4.metric": "Self-service para el IT Manager y su equipo",
  "timeline.m4.detail":
    "Portal self-service con delegación granular: el IT Manager decide qué integrantes de su equipo pueden crear cuentas, cuáles pueden bloquear, cuáles solo consultar. Facturación mensual con integraciones locales.",
  "timeline.m5.date": "Momento 5",
  "timeline.m5.title": "Sistema de tickets para gestión de cuentas",
  "timeline.m5.metric": "Bloqueo en cascada, aliases, secundarias",
  "timeline.m5.detail":
    "El caso típico: una persona con tres correos en tres dominios distintos se puede bloquear en un solo click con cascade a todas las cuentas linkeadas. Reset de contraseña con lookup de email de recuperación. Aliases con validación anti-duplicado. Todo con audit log inmutable.",

  // Founder quote (breakout editorial en features)
  "founder.quote":
    "El cliente que originó Mekovault gestionaba cerca de 200 cuentas de Google Workspace con un formulario, una hoja de cálculo y una veintena de archivos Apps Script encadenados. Cada onboarding tomaba media tarde. Cada offboarding olvidaba algo. No hizo falta imaginar un producto: hubo que mirar bien ese caso.",
  "founder.name": "Jorge",
  "founder.role": "Arquitecto y fundador",
  "founder.date": "Santiago",

  // FAQ
  "faq.eyebrow": "Objeciones honestas",
  "faq.title": "Lo que preguntan los IT Managers antes de firmar",
  "faq.subtitle":
    "Recopilado de conversaciones con IT Managers de empresas pequeñas y medianas en Chile y LATAM.",
  "faq.trial.q": "¿Puedo probarlo sin comprometer datos reales?",
  "faq.trial.a":
    "Sí. El trial de 90 días crea un tenant aislado con RLS, sin tocar tu Google Workspace ni MS Entra en producción. No hay límite de cuentas durante el trial. Al terminar, o migrás y conservás todo, o el tenant se elimina completo (data y logs) sin residuo.",
  "faq.security.q": "¿Qué tan seguro es que un tercero maneje mis identidades?",
  "faq.security.a":
    "Mekovault no maneja las cuentas: las orquesta. Los tokens OAuth de tu tenant Google/MS los guarda Infisical self-hosted, un proyecto separado por cada empresa. Cross-tenant isolation real, no un flag en un ORM. Todo cambio queda en un audit log inmutable con timestamp.",
  "faq.lockin.q": "¿Vendor lock-in? ¿Puedo salir?",
  "faq.lockin.a":
    "Cero lock-in. Las cuentas viven en tu Google Workspace o MS Entra, no en Mekovault. Si te vas mañana, tus users siguen activos en el provider como estaban. Podés exportar todo el histórico (accounts_history, audit logs, tickets) en formatos estándar.",
  "faq.stack.q": "¿Funciona si mi empresa usa MS 365 en vez de Google?",
  "faq.stack.a":
    "Sí. Los adapters de Google Workspace y Microsoft Entra son intercambiables. Un mismo tenant puede tener ambos (empresa mixta post-adquisición) con provisioning cross-provider.",
  "faq.support.q": "¿El soporte es en español? ¿En horario Chile?",
  "faq.support.a":
    "Sí. El equipo está en Santiago. Soporte principal en español, con portugués a demanda para clientes en Brasil. Horario UTC-3 a UTC-4. Los planes Pro y Enterprise tienen respuesta prioritaria en horario hábil.",
  "faq.setup.q": "¿Cuánto tarda arrancar? ¿Necesito consultora?",
  "faq.setup.a":
    "Wizard guiado que se completa en pocos minutos si ya tenés Google Workspace admin. Si tu setup tiene reglas raras (OUs custom, licencias especiales, workflows externos), el plan Pro incluye una sesión de onboarding donde configuramos junto a vos. Cero consultora externa.",

  // Features
  "features.eyebrow": "Producto",
  "features.title": "Todo el lifecycle en un solo panel",
  "features.subtitle":
    "Diseñado para IT Managers e integradores que hoy dependen de spreadsheets, tickets sueltos y consolas dispersas.",
  "features.async.title": "Provisioning async",
  "features.async.desc":
    "Workers con reintentos exponenciales, circuit breaker y DLQ. Nunca perdés una operación.",
  "features.approvals.title": "Aprobaciones y plantillas",
  "features.approvals.desc":
    "Access Profiles + Bulk CSV. Aprobación por rol antes de tocar el directorio.",
  "features.rbac.title": "RBAC granular",
  "features.rbac.desc":
    "Roles + grupos + permisos por servicio. Cache en Redis para latencia baja.",
  "features.vault.title": "Vault por tenant",
  "features.vault.desc":
    "Infisical self-hosted. Cada empresa tiene su project, aislamiento real de secretos.",
  "features.audit.title": "Audit log inmutable",
  "features.audit.desc":
    "Triggers PL/pgSQL bloquean UPDATE/DELETE. Retención 18 meses tenant, 5 años platform.",
  "features.metrics.title": "Métricas y SLA",
  "features.metrics.desc": "Grafana + Loki + Tempo. Dashboards por tenant, alertas por Brevo.",

  // How it works
  "how.eyebrow": "Cómo funciona",
  "how.title": "Cuatro pasos para pasar de tickets a self-service",
  "how.step1.title": "Conecta tu directorio",
  "how.step1.desc":
    "Google Workspace o Microsoft Entra vía Service Account con Domain-Wide Delegation. Wizard guiado en menos de 10 minutos.",
  "how.step2.title": "Define plantillas",
  "how.step2.desc":
    "Access Profiles con roles, grupos y OU. Un IT Manager los mantiene, todo el resto los usa.",
  "how.step3.title": "El manager pide, la plataforma provisiona",
  "how.step3.desc":
    "Los managers piden accesos por template o por CSV. Aprobación → workers → auditoría.",
  "how.step4.title": "Observabilidad total",
  "how.step4.desc":
    "Cada operación queda en audit log inmutable. Dashboards y alertas listas para tu equipo.",

  // Services
  "services.eyebrow": "Servicios",
  "services.title": "Módulos verticales, todos en la misma plataforma",
  "services.subtitle":
    "Empieza con Super Workspace y activa el resto cuando lo necesites.",

  // Pricing preview
  "pricing.eyebrow": "Planes",
  "pricing.title": "Precios claros en pesos chilenos",
  "pricing.subtitle":
    "Desde 6 tiers pensados para SMBs y mid-market. Descuento de 15% pagando anual.",
  "pricing.cta.viewAll": "Ver todos los planes",

  // CTA
  "cta.title": "Empieza a automatizar en menos de 10 minutos",
  "cta.subtitle":
    "Conecta Google Workspace o Microsoft Entra desde el Wizard. Cuando estés listo, activa el plan que necesites.",
  "cta.signup": "Crear cuenta gratis",
  "cta.pricing": "Ver planes",

  // Footer
  "footer.tagline":
    "Automatiza el lifecycle de identidades corporativas en Google Workspace, Microsoft Entra y otros directorios. Portal self-service, aprobaciones, workers async y auditoría inmutable.",
  "footer.dataResidency": "Infraestructura AWS con red privada + Tailscale. Data residency y sub-processors detallados en /legal.",
  "footer.col.product": "Producto",
  "footer.col.company": "Empresa",
  "footer.col.legal": "Legal",
  "footer.link.services": "Servicios",
  "footer.link.pricing": "Planes",
  "footer.link.portal": "Portal (app)",
  "footer.link.about": "Nosotros",
  "footer.link.contact": "Contacto",
  "footer.link.terms": "Términos",
  "footer.link.privacy": "Privacidad",
  "footer.link.dpa": "DPA",
  "footer.link.aup": "AUP",
  "footer.link.cookies": "Cookies",
  "footer.link.subprocessors": "Sub-procesadores",
  "footer.copyright": "Mekovault SpA, Santiago, Chile",

  // Compliance badges (footer)
  "compliance.gdpr": "Cumplimos con el RGPD (UE 2016/679)",
  "compliance.chile": "Cumple con Ley 21.719 · Chile",

  // Language switcher
  "lang.switcher_label": "Cambiar idioma",

  // ========== Landing: mock dashboard ==========
  "mock.acc_active": "Cuentas activas",
  "mock.req_today": "Requests hoy",
  "mock.sla_met": "SLA cumplido",
  "mock.status_completed": "completado",
  "mock.step_hr": "Aprobado por RRHH",
  "mock.step_gaccount": "Cuenta Google creada",
  "mock.step_groups": "Grupos + OU asignados",
  "mock.step_notify": "Notificación al manager",
  "mock.onboarding_of": "Onboarding ·",

  // ========== Landing: services (index) ==========
  "svc.workspace.title": "Super Workspace",
  "svc.workspace.desc":
    "Gestión de lifecycle de cuentas en Google Workspace y Microsoft Entra: alta, suspensión, reactivación, delete, cambio de OU y reset de password.",
  "svc.workspace.b1": "Google Admin SDK + Microsoft Graph",
  "svc.workspace.b2": "Provisioning async con reintentos",
  "svc.workspace.b3": "Sync incremental periódico",
  "svc.notifications.title": "Notifications Engine",
  "svc.notifications.desc":
    "Emails transaccionales multi-idioma con quiet hours por timezone, business days y feriados, y templates overrideable por tenant.",
  "svc.notifications.b1": "Brevo SMTP + tenant SMTP override",
  "svc.notifications.b2": "Quiet hours + holidays",
  "svc.notifications.b3": "Templates es/en/pt",
  "svc.tickets.title": "Requests & Tickets",
  "svc.tickets.desc":
    "Solicitudes con state machine (draft → submitted → approved → completed), scheduled requests y bulk CSV para altas masivas.",
  "svc.tickets.b1": "Access Profiles",
  "svc.tickets.b2": "Scheduled requests",
  "svc.tickets.b3": "Bulk import 500 filas",
  "svc.roadmap.title": "Super Rooms · Super Audit",
  "svc.roadmap.desc":
    "Módulos en desarrollo: gestión de Google Meet rooms compartidas y auditorías de compliance sobre el directorio activo.",
  "svc.roadmap.b1": "Rooms: pool + reservas + auto-cleanup",
  "svc.roadmap.b2": "Audit: checks periódicos + reportes",
  "svc.roadmap.b3": "Q4 2026",
  "svc.status.available": "Disponible",
  "svc.status.roadmap": "Roadmap",

  // ========== Products page ==========
  "products.title.pre": "Un panel único.",
  "products.title.hl": "Módulos independientes.",
  "products.subtitle":
    "Todo comparte el mismo core de identidad, RBAC y auditoría. Activas lo que necesitas, cuando lo necesitas.",
  "products.cta.title": "¿Quieres verlo en tu directorio?",
  "products.cta.subtitle":
    "Crea tu cuenta y conecta Google Workspace o Microsoft Entra desde el Wizard. No hay setup manual: todo desde el portal.",
  "products.cta.signup": "Empezar gratis",
  "products.cta.sales": "Hablar con ventas",

  // ========== Pricing page ==========
  "pricing_page.title.pre": "Precios claros en",
  "pricing_page.title.hl": "pesos chilenos",
  "pricing_page.subtitle":
    "6 tiers en CLP nativo. Excedentes por cuenta si superás el incluido. Pagando anual, 15% off automático.",
  "pricing_page.trial_badge": "Trial 90 días · sin tarjeta · sin límite de cuentas",
  "pricing_page.included": "cuentas incluidas · excedente",
  "pricing_page.per_month": "/mes",
  "pricing_page.per_account": "/cta",
  "pricing_page.start_with": "Empezar con",
  "pricing_page.popular": "Popular",
  "pricing_page.no_surprises.eyebrow": "Sin sorpresas",
  "pricing_page.no_surprises.title": "Precios locales, sin volatilidad cambiaria",
  "pricing_page.no_surprises.desc":
    "Facturamos en CLP con boleta/factura chilena. Nada de sorpresas por tipo de cambio a fin de mes.",
  "pricing_page.faq.eyebrow": "FAQ",
  "pricing_page.faq.title": "Preguntas frecuentes",
  "pricing_page.faq.desc": "Si tienes otra duda, escríbenos a cloud@mekovault.com.",
  "pricing_page.cta.title": "Empieza tu trial en 2 minutos",

  // Pricing FAQ items
  "faq.what_counts.q": "¿Qué cuenta como 'cuenta gestionada'?",
  "faq.what_counts.a":
    "Toda cuenta creada, sincronizada o suspendida por Mekovault dentro de tu tenant durante el mes. Las cuentas eliminadas ya no cuentan.",
  "faq.overages.q": "¿Cómo se cobran los excedentes?",
  "faq.overages.a":
    "Al cierre de cada período de facturación, Mekovault calcula el promedio diario de cuentas gestionadas. Todo lo que supere el incluido en tu plan se cobra al precio de excedente unitario del plan.",
  "faq.switch_plan.q": "¿Puedo cambiar de plan?",
  "faq.switch_plan.a":
    "Sí, en cualquier momento desde el panel de billing. El prorrateo es día a día: no pagás doble por el cambio.",
  "faq.payment.q": "¿Cómo se paga?",
  "faq.payment.a":
    "Vía MercadoPago Chile (suscripción con débito automático) o transferencia manual para Enterprise.",
  "faq.contract.q": "¿Hay contrato mínimo?",
  "faq.contract.a":
    "No. El trial es de 90 días y puedes cancelar cuando quieras. Los anuales tienen 15% off pero se prorratean al cancelar.",

  // ========== About page ==========
  "about.eyebrow": "Nuestra historia",
  "about.title.pre": "Nacimos observando cómo",
  "about.title.hl": "IT Managers en Chile",
  "about.title.post": "gestionan cuentas: con hojas de cálculo.",
  "about.subtitle":
    "Mekovault SpA es una empresa chilena. Vimos que los equipos de IT en SMBs y mid-market siguen ejecutando altas, bajas y cambios uno por uno, en Google Workspace y Microsoft Entra, con planillas como fuente de verdad.",
  "about.pillar.mission.title": "Misión",
  "about.pillar.mission.desc":
    "Automatizar el lifecycle de identidades corporativas para que los equipos de IT dejen de operar y empiecen a diseñar.",
  "about.pillar.focus.title": "Enfoque",
  "about.pillar.focus.desc":
    "Empezamos por Chile: precios en CLP, boletas chilenas, soporte en español. Escalamos a LATAM después.",
  "about.pillar.ambition.title": "Ambición",
  "about.pillar.ambition.desc":
    "Ser el standard regional para gestión de identidades en SMB y mid-market. Sin dependencias en integradores externos.",
  "about.why.title": "Por qué construimos Mekovault",
  "about.why.p1":
    "El punto de partida fue un cliente concreto. Un IT Manager en Santiago que gestionaba ~200 cuentas Google Workspace con un formulario, una hoja de cálculo y ~20 archivos de Apps Script. La contradicción era clara: una empresa moderna ejecutando procesos artesanales.",
  "about.why.p2":
    "El diagnóstico fue simple. Los productos globales de IAM se enfocan en enterprises que ya tienen un equipo dedicado. Para todos los demás (50, 100, 200, 500 personas), no hay opción simple, local y accesible.",
  "about.why.p3":
    "Mekovault es esa opción. Multi-tenant real (RLS + vault por tenant), audit inmutable, workers async con reintentos, y una paleta de servicios que crece por módulos. No es solo un provisioning tool: es la infraestructura de identidad que las empresas de LATAM necesitan.",
  "about.cta.title": "¿Quieres conocer al equipo?",
  "about.cta.desc":
    "Escríbenos y coordinamos una reunión. Contamos qué hacemos, cómo lo hacemos, y qué te podemos resolver.",
  "about.cta.contact": "Contactanos",
  "about.cta.signup": "Empezar gratis",

  // ========== Contact page ==========
  "contact.eyebrow": "Contacto",
  "contact.title.pre": "Hablemos.",
  "contact.title.hl": "Respondemos en 1 día hábil.",
  "contact.subtitle":
    "La forma más rápida de conocer Mekovault es abrir un trial. Si preferís hablar antes, escríbenos por email o vía formulario.",
  "contact.card.sales": "Ventas y consultas generales",
  "contact.card.support": "Soporte a clientes",
  "contact.card.office": "Oficina",
  "contact.card.office_value": "Santiago de Chile",
  "contact.card.office_sub": "Trabajo remoto por defecto",
  "contact.card.trial": "Trial inmediato",
  "contact.form.eyebrow": "Formulario",
  "contact.form.title": "Escríbenos",
  "contact.form.desc":
    "Cuéntanos brevemente qué necesitas. Este formulario abre tu cliente de email.",
  "contact.form.name": "Nombre",
  "contact.form.email": "Email",
  "contact.form.company": "Empresa",
  "contact.form.message": "Cuéntanos",
  "contact.form.send": "Enviar mensaje",
  "contact.form.also":
    "También puedes escribirnos directamente a",
} as const;

const en: Record<keyof typeof es_419, string> = {
  "nav.product": "Product",
  "nav.pricing": "Pricing",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.login": "Sign in",
  "nav.signup": "Start free",

  "hero.eyebrow": "90 day trial · no card · no account limit",
  "hero.title.line1": "You hire someone on a Monday.",
  "hero.title.line2": "Their account is running by 9:15.",
  "hero.subtitle":
    "Provisioning for Google Workspace, Microsoft Entra and the apps your teams actually use. Approvals, immutable audit log and cascading offboarding. From one console, run by the people on your team you authorise.",
  "hero.cta.signup": "Start the trial",
  "hero.cta.customer": "See how it works",
  "hero.trust.sla": "SLA defined on Pro plan",
  "hero.trust.rls": "Per-tenant RLS in Postgres",
  "hero.trust.latam": "AWS + private network + Tailscale",

  "integrations.title": "Native integrations",

  "compare.eyebrow": "Before vs after",
  "compare.title": "The same onboarding, two realities",
  "compare.subtitle":
    "Seven steps every onboarding has, solved two ways. Move the slider and see which one you deal with today.",

  "workflow.eyebrow": "An onboarding end to end",
  "workflow.title": "Six steps, one admin click",
  "workflow.subtitle":
    "How a corporate account gets created from the moment HR submits the form until the welcome email lands. Click each step to see the detail.",

  "about.timeline.eyebrow": "How we got here",
  "about.timeline.title": "The project told in five moments",
  "about.timeline.subtitle":
    "Not a corporate roadmap with emojis. The moments where the project took shape, in order.",
  "timeline.m1.date": "Moment 1",
  "timeline.m1.title": "The case that started Mekovault",
  "timeline.m1.metric": "Client in Santiago",
  "timeline.m1.detail":
    "An IT Manager runs around 200 Google Workspace accounts with a form, a spreadsheet and a couple dozen Apps Script files. Each onboarding takes hours of repetitive work. Offboardings sometimes leave loose access that only surfaces months later.",
  "timeline.m2.date": "Moment 2",
  "timeline.m2.title": "Internal prototype",
  "timeline.m2.metric": "Scripts replaced by a service",
  "timeline.m2.detail":
    "We replaced the tangle of Apps Script with a service using webhooks that does the same work, with logs and retries. The client keeps using their Google Workspace, but stops touching the artisan tooling.",
  "timeline.m3.date": "Moment 3",
  "timeline.m3.title": "Multi-tenant with real isolation",
  "timeline.m3.metric": "Row-Level Security + per-tenant vault",
  "timeline.m3.detail":
    "Full refactor to multi-tenant. Each company is isolated at the row level in Postgres, not with an application flag. Each tenant's OAuth tokens live in a separate project in the self-hosted vault, so credentials cannot mix across clients.",
  "timeline.m4.date": "Moment 4",
  "timeline.m4.title": "Portal, addons and billing",
  "timeline.m4.metric": "Self-service for the IT Manager and team",
  "timeline.m4.detail":
    "Self-service portal with granular delegation: the IT Manager decides which team members can create accounts, which can block, which can only view. Monthly billing with local integrations.",
  "timeline.m5.date": "Moment 5",
  "timeline.m5.title": "Tickets system for account management",
  "timeline.m5.metric": "Cascade block, aliases, secondary accounts",
  "timeline.m5.detail":
    "The typical case: a person with three emails in three different domains can be blocked in one click with cascade to all linked accounts. Password reset with recovery email lookup. Aliases with anti-duplicate validation. All with immutable audit log.",

  "founder.quote":
    "The client that originated Mekovault ran around 200 Google Workspace accounts with a form, a spreadsheet and a couple dozen Apps Script files chained together. Each onboarding took half an afternoon. Each offboarding forgot something. We didn't have to imagine a product: we had to look at that case carefully.",
  "founder.name": "Jorge",
  "founder.role": "Architect and founder",
  "founder.date": "Santiago",

  "faq.eyebrow": "Honest objections",
  "faq.title": "What IT Managers ask before signing",
  "faq.subtitle":
    "Collected from conversations with IT Managers at small and mid market companies in Chile and LATAM.",
  "faq.trial.q": "Can I try it without touching real data?",
  "faq.trial.a":
    "Yes. The 90 day trial spins up an isolated tenant with RLS, without touching your production Google Workspace or MS Entra. No account limit during the trial. When it ends, you either migrate and keep everything, or the tenant is fully deleted (data and logs) with no residue.",
  "faq.security.q": "How safe is it for a third party to manage my identities?",
  "faq.security.a":
    "Mekovault does not hold the accounts: it orchestrates them. Your Google/MS OAuth tokens live in a self hosted Infisical, one project per company. Real cross tenant isolation, not an ORM flag. Every change is stored in an immutable audit log with timestamp.",
  "faq.lockin.q": "Vendor lock in? Can I leave?",
  "faq.lockin.a":
    "Zero lock in. Your accounts live in Google Workspace or MS Entra, not in Mekovault. If you leave tomorrow your users keep working in the provider exactly as before. You can export the full history (accounts_history, audit logs, tickets) in standard formats.",
  "faq.stack.q": "Does it work if my company uses MS 365 instead of Google?",
  "faq.stack.a":
    "Yes. The Google Workspace and Microsoft Entra adapters are interchangeable. A single tenant can run both (mixed company after an acquisition) with cross provider provisioning.",
  "faq.support.q": "Is support in English? Real time zone coverage?",
  "faq.support.a":
    "Yes. The team is in Santiago. Primary support in Spanish, with Portuguese on demand for Brazilian clients and English for cross-border. Hours are UTC-3 to UTC-4. Pro and Enterprise plans get priority response during business hours.",
  "faq.setup.q": "How long does it take to start? Do I need a consultancy?",
  "faq.setup.a":
    "Guided wizard that completes in a few minutes if you already have Google Workspace admin. If your setup has custom rules (custom OUs, special licenses, external workflows), the Pro plan includes an onboarding session where we configure it with you. No external consultancy.",

  "features.eyebrow": "Product",
  "features.title": "The whole lifecycle in one panel",
  "features.subtitle":
    "Built for IT Managers and integrators who today rely on spreadsheets, scattered tickets and disconnected consoles.",
  "features.async.title": "Async provisioning",
  "features.async.desc":
    "Workers with exponential retries, circuit breaker and DLQ. You never lose an operation.",
  "features.approvals.title": "Approvals and templates",
  "features.approvals.desc":
    "Access Profiles + Bulk CSV. Role-based approval before touching the directory.",
  "features.rbac.title": "Granular RBAC",
  "features.rbac.desc":
    "Roles + groups + per-service permissions. Redis cache for low latency.",
  "features.vault.title": "Vault per tenant",
  "features.vault.desc":
    "Infisical self-hosted. Each company has its own project, real cross-tenant secret isolation.",
  "features.audit.title": "Immutable audit log",
  "features.audit.desc":
    "PL/pgSQL triggers block UPDATE/DELETE. Retention 18 months tenant, 5 years platform.",
  "features.metrics.title": "Metrics and SLA",
  "features.metrics.desc": "Grafana + Loki + Tempo. Per-tenant dashboards, alerts via Brevo.",

  "how.eyebrow": "How it works",
  "how.title": "Four steps from tickets to self-service",
  "how.step1.title": "Connect your directory",
  "how.step1.desc":
    "Google Workspace or Microsoft Entra via Service Account with Domain-Wide Delegation. Guided wizard in under 10 minutes.",
  "how.step2.title": "Define templates",
  "how.step2.desc":
    "Access Profiles with roles, groups and OUs. One IT Manager maintains them, everyone else consumes them.",
  "how.step3.title": "Managers request, the platform provisions",
  "how.step3.desc":
    "Managers ask for access by template or via CSV. Approval → workers → audit.",
  "how.step4.title": "Full observability",
  "how.step4.desc":
    "Every operation is stored in the immutable audit log. Dashboards and alerts ready for your team.",

  "services.eyebrow": "Services",
  "services.title": "Vertical modules, all on the same platform",
  "services.subtitle":
    "Start with Super Workspace and activate the rest when you need them.",

  "pricing.eyebrow": "Pricing",
  "pricing.title": "Clear pricing in Chilean pesos",
  "pricing.subtitle":
    "6 tiers designed for SMBs and mid-market. 15% off on annual billing.",
  "pricing.cta.viewAll": "See all plans",

  "cta.title": "Start automating in less than 10 minutes",
  "cta.subtitle":
    "Connect Google Workspace or Microsoft Entra from the Wizard. When you're ready, activate the plan you need.",
  "cta.signup": "Create free account",
  "cta.pricing": "See plans",

  "footer.tagline":
    "Automates the lifecycle of corporate identities in Google Workspace, Microsoft Entra and other directories. Self-service portal, approvals, async workers and immutable audit.",
  "footer.dataResidency":
    "AWS infrastructure with private network + Tailscale. Data residency and sub-processors detailed in /legal.",
  "footer.col.product": "Product",
  "footer.col.company": "Company",
  "footer.col.legal": "Legal",
  "footer.link.services": "Services",
  "footer.link.pricing": "Pricing",
  "footer.link.portal": "Portal (app)",
  "footer.link.about": "About",
  "footer.link.contact": "Contact",
  "footer.link.terms": "Terms",
  "footer.link.privacy": "Privacy",
  "footer.link.dpa": "DPA",
  "footer.link.aup": "AUP",
  "footer.link.cookies": "Cookies",
  "footer.link.subprocessors": "Sub-processors",
  "footer.copyright": "Mekovault SpA, Santiago, Chile",

  "compliance.gdpr": "GDPR compliant (EU 2016/679)",
  "compliance.chile": "Chile Ley 21.719 compliant",

  "lang.switcher_label": "Change language",

  "mock.acc_active": "Active accounts",
  "mock.req_today": "Requests today",
  "mock.sla_met": "SLA met",
  "mock.status_completed": "completed",
  "mock.step_hr": "Approved by HR",
  "mock.step_gaccount": "Google account created",
  "mock.step_groups": "Groups + OU assigned",
  "mock.step_notify": "Manager notified",
  "mock.onboarding_of": "Onboarding ·",

  "svc.workspace.title": "Super Workspace",
  "svc.workspace.desc":
    "Account lifecycle in Google Workspace and Microsoft Entra: create, suspend, reactivate, delete, move OU and reset password.",
  "svc.workspace.b1": "Google Admin SDK + Microsoft Graph",
  "svc.workspace.b2": "Async provisioning with retries",
  "svc.workspace.b3": "Periodic incremental sync",
  "svc.notifications.title": "Notifications Engine",
  "svc.notifications.desc":
    "Multi-language transactional emails with quiet hours per timezone, business days and holidays, and tenant-overridable templates.",
  "svc.notifications.b1": "Brevo SMTP + tenant SMTP override",
  "svc.notifications.b2": "Quiet hours + holidays",
  "svc.notifications.b3": "Templates es/en/pt",
  "svc.tickets.title": "Requests & Tickets",
  "svc.tickets.desc":
    "Requests with state machine (draft → submitted → approved → completed), scheduled requests and bulk CSV for mass onboarding.",
  "svc.tickets.b1": "Access Profiles",
  "svc.tickets.b2": "Scheduled requests",
  "svc.tickets.b3": "Bulk import 500 rows",
  "svc.roadmap.title": "Super Rooms · Super Audit",
  "svc.roadmap.desc":
    "Modules in development: shared Google Meet rooms management and compliance audits over the active directory.",
  "svc.roadmap.b1": "Rooms: pool + bookings + auto-cleanup",
  "svc.roadmap.b2": "Audit: periodic checks + reports",
  "svc.roadmap.b3": "Q4 2026",
  "svc.status.available": "Available",
  "svc.status.roadmap": "Roadmap",

  "products.title.pre": "One panel.",
  "products.title.hl": "Independent modules.",
  "products.subtitle":
    "Everything shares the same identity, RBAC and audit core. Activate what you need, when you need it.",
  "products.cta.title": "Want to see it on your directory?",
  "products.cta.subtitle":
    "Sign up and connect Google Workspace or Microsoft Entra from the Wizard. No manual setup: all from the portal.",
  "products.cta.signup": "Start free",
  "products.cta.sales": "Talk to sales",

  "pricing_page.title.pre": "Clear pricing in",
  "pricing_page.title.hl": "Chilean pesos",
  "pricing_page.subtitle":
    "6 tiers in native CLP. Overages per account if you go past what's included. Annual billing gets 15% off automatically.",
  "pricing_page.trial_badge": "90-day trial · no card · unlimited accounts",
  "pricing_page.included": "included accounts · overage",
  "pricing_page.per_month": "/mo",
  "pricing_page.per_account": "/acct",
  "pricing_page.start_with": "Start with",
  "pricing_page.popular": "Popular",
  "pricing_page.no_surprises.eyebrow": "No surprises",
  "pricing_page.no_surprises.title": "Local pricing, no FX volatility",
  "pricing_page.no_surprises.desc":
    "We bill in CLP with Chilean invoicing. No end-of-month FX surprises.",
  "pricing_page.faq.eyebrow": "FAQ",
  "pricing_page.faq.title": "Frequently asked questions",
  "pricing_page.faq.desc": "For any other question, write to cloud@mekovault.com.",
  "pricing_page.cta.title": "Start your trial in 2 minutes",

  "faq.what_counts.q": "What counts as a 'managed account'?",
  "faq.what_counts.a":
    "Every account created, synced or suspended by Mekovault inside your tenant during the month. Deleted accounts no longer count.",
  "faq.overages.q": "How are overages billed?",
  "faq.overages.a":
    "At each billing period close, Mekovault computes the daily average of managed accounts. Anything above your plan is billed at the plan's per-account overage rate.",
  "faq.switch_plan.q": "Can I change plan?",
  "faq.switch_plan.a":
    "Yes, anytime from the billing panel. Prorate is per-day: you don't pay twice for the switch.",
  "faq.payment.q": "How do I pay?",
  "faq.payment.a":
    "Via MercadoPago Chile (auto-debit subscription) or manual bank transfer for Enterprise.",
  "faq.contract.q": "Is there a minimum term?",
  "faq.contract.a":
    "No. Trial is 90 days and you can cancel anytime. Annual plans get 15% off but are prorated on cancellation.",

  "about.eyebrow": "Our story",
  "about.title.pre": "We started by watching how",
  "about.title.hl": "IT Managers in Chile",
  "about.title.post": "manage accounts: with spreadsheets.",
  "about.subtitle":
    "Mekovault SpA is a Chilean company. We saw IT teams in SMBs and mid-market still executing hires, leaves and changes one-by-one, in Google Workspace and Microsoft Entra, with spreadsheets as source of truth.",
  "about.pillar.mission.title": "Mission",
  "about.pillar.mission.desc":
    "Automate corporate identity lifecycle so IT teams stop operating and start designing.",
  "about.pillar.focus.title": "Focus",
  "about.pillar.focus.desc":
    "We start in Chile: CLP pricing, Chilean invoicing, Spanish support. LATAM afterwards.",
  "about.pillar.ambition.title": "Ambition",
  "about.pillar.ambition.desc":
    "Be the regional standard for identity management in SMB and mid-market. No dependency on external integrators.",
  "about.why.title": "Why we built Mekovault",
  "about.why.p1":
    "The starting point was a real customer. An IT Manager in Santiago managing ~200 Google Workspace accounts with a form, a spreadsheet and ~20 Apps Script files. The contradiction was clear: a modern company running artisanal processes.",
  "about.why.p2":
    "The diagnosis was simple. Global IAM products focus on enterprises that already have a dedicated team. For everyone else (50, 100, 200, 500 people), there's no simple, local, accessible option.",
  "about.why.p3":
    "Mekovault is that option. Real multi-tenant (RLS + per-tenant vault), immutable audit, async workers with retries, and a service palette that grows by modules. It's not just a provisioning tool: it's the identity infrastructure LATAM companies need.",
  "about.cta.title": "Want to meet the team?",
  "about.cta.desc":
    "Write to us and we'll schedule a call. We'll tell you what we do, how we do it, and what we can solve for you.",
  "about.cta.contact": "Contact us",
  "about.cta.signup": "Start free",

  "contact.eyebrow": "Contact",
  "contact.title.pre": "Let's talk.",
  "contact.title.hl": "We reply in 1 business day.",
  "contact.subtitle":
    "The fastest way to know Mekovault is to start a trial. If you prefer to talk first, write us by email or via the form.",
  "contact.card.sales": "Sales and general inquiries",
  "contact.card.support": "Customer support",
  "contact.card.office": "Office",
  "contact.card.office_value": "Santiago de Chile",
  "contact.card.office_sub": "Remote-first by default",
  "contact.card.trial": "Instant trial",
  "contact.form.eyebrow": "Form",
  "contact.form.title": "Write to us",
  "contact.form.desc":
    "Tell us briefly what you need. This form opens your email client.",
  "contact.form.name": "Name",
  "contact.form.email": "Email",
  "contact.form.company": "Company",
  "contact.form.message": "Message",
  "contact.form.send": "Send message",
  "contact.form.also": "You can also write directly to",
};

const pt_BR: Record<keyof typeof es_419, string> = {
  "nav.product": "Produto",
  "nav.pricing": "Planos",
  "nav.about": "Sobre",
  "nav.contact": "Contato",
  "nav.login": "Entrar",
  "nav.signup": "Começar grátis",

  "hero.eyebrow": "Trial 90 dias · sem cartão · sem limite de contas",
  "hero.title.line1": "Você contrata alguém numa segunda.",
  "hero.title.line2": "A conta dele já funciona às 9:15.",
  "hero.subtitle":
    "Provisioning para Google Workspace, Microsoft Entra e os apps que suas equipes realmente usam. Aprovações, audit log imutável e offboarding em cascata. De um único console, com as pessoas do seu time que você autorizar.",
  "hero.cta.signup": "Começar o trial",
  "hero.cta.customer": "Ver como funciona",
  "hero.trust.sla": "SLA definido no plano Pro",
  "hero.trust.rls": "RLS por tenant no Postgres",
  "hero.trust.latam": "AWS + rede privada + Tailscale",

  "integrations.title": "Integrações nativas",

  "compare.eyebrow": "Antes vs depois",
  "compare.title": "O mesmo onboarding, duas realidades",
  "compare.subtitle":
    "Sete passos que todo onboarding tem, resolvidos de duas formas. Move o slider e vê qual toca você hoje.",

  "workflow.eyebrow": "Um onboarding de ponta a ponta",
  "workflow.title": "Seis passos, um click do admin",
  "workflow.subtitle":
    "Como uma conta corporativa é criada desde que o RH envia o formulário até chegar o email de boas-vindas. Clique em cada passo para ver o detalhe.",

  "about.timeline.eyebrow": "Como chegamos aqui",
  "about.timeline.title": "O projeto contado em cinco momentos",
  "about.timeline.subtitle":
    "Não é um roadmap corporativo com emojis. Os momentos onde o projeto tomou forma, em ordem.",
  "timeline.m1.date": "Momento 1",
  "timeline.m1.title": "O caso que originou o Mekovault",
  "timeline.m1.metric": "Cliente em Santiago",
  "timeline.m1.detail":
    "Um IT Manager gerencia cerca de 200 contas Google Workspace com um formulário, uma planilha e cerca de vinte arquivos Apps Script. Cada onboarding leva horas de trabalho repetitivo. Os offboardings às vezes deixam acessos soltos que só aparecem meses depois.",
  "timeline.m2.date": "Momento 2",
  "timeline.m2.title": "Protótipo interno",
  "timeline.m2.metric": "Scripts substituídos por serviço",
  "timeline.m2.detail":
    "Substituímos o emaranhado de Apps Script por um serviço com webhooks que faz o mesmo trabalho, com logs e retries. O cliente continua usando seu Google Workspace, mas para de tocar nas ferramentas artesanais.",
  "timeline.m3.date": "Momento 3",
  "timeline.m3.title": "Multi-tenant com isolamento real",
  "timeline.m3.metric": "Row-Level Security + vault por tenant",
  "timeline.m3.detail":
    "Refactor completo para multi-tenant. Cada empresa se isola no nível de linha no Postgres, não com uma flag de aplicação. Os tokens OAuth de cada tenant vivem em um projeto separado do vault self-hosted, para que não haja como misturar credenciais entre clientes.",
  "timeline.m4.date": "Momento 4",
  "timeline.m4.title": "Portal, addons e faturamento",
  "timeline.m4.metric": "Self-service para o IT Manager e equipe",
  "timeline.m4.detail":
    "Portal self-service com delegação granular: o IT Manager decide quais integrantes da equipe podem criar contas, quais podem bloquear, quais só consultar. Faturamento mensal com integrações locais.",
  "timeline.m5.date": "Momento 5",
  "timeline.m5.title": "Sistema de tickets para gestão de contas",
  "timeline.m5.metric": "Bloqueio em cascade, aliases, secundárias",
  "timeline.m5.detail":
    "O caso típico: uma pessoa com três emails em três domínios diferentes pode ser bloqueada em um só click com cascade a todas as contas linkeadas. Reset de senha com lookup de email de recuperação. Aliases com validação anti-duplicado. Tudo com audit log imutável.",

  "founder.quote":
    "O cliente que originou o Mekovault gerenciava cerca de 200 contas do Google Workspace com um formulário, uma planilha e cerca de vinte arquivos Apps Script encadeados. Cada onboarding levava metade de uma tarde. Cada offboarding esquecia algo. Não foi preciso imaginar um produto: bastou olhar bem esse caso.",
  "founder.name": "Jorge",
  "founder.role": "Arquiteto e fundador",
  "founder.date": "Santiago",

  "faq.eyebrow": "Objeções honestas",
  "faq.title": "O que os IT Managers perguntam antes de assinar",
  "faq.subtitle":
    "Coletado de conversas com IT Managers de empresas pequenas e médias no Chile e LATAM.",
  "faq.trial.q": "Posso testar sem comprometer dados reais?",
  "faq.trial.a":
    "Sim. O trial de 90 dias cria um tenant isolado com RLS, sem tocar seu Google Workspace ou MS Entra em produção. Sem limite de contas durante o trial. No fim, você migra e conserva tudo, ou o tenant é totalmente excluído (dados e logs) sem resíduo.",
  "faq.security.q": "Quão seguro é terceirizar a gestão de identidades?",
  "faq.security.a":
    "O Mekovault não guarda as contas: as orquestra. Os tokens OAuth do seu Google/MS ficam no Infisical self hosted, um projeto separado por empresa. Isolamento cross tenant real, não uma flag no ORM. Toda mudança fica em um audit log imutável com timestamp.",
  "faq.lockin.q": "Vendor lock in? Posso sair?",
  "faq.lockin.a":
    "Zero lock in. Suas contas vivem no Google Workspace ou MS Entra, não no Mekovault. Se você sair amanhã, seus usuários seguem ativos no provider como estavam. Você pode exportar todo o histórico (accounts_history, audit logs, tickets) em formatos padrão.",
  "faq.stack.q": "Funciona se minha empresa usa MS 365 no lugar de Google?",
  "faq.stack.a":
    "Sim. Os adapters de Google Workspace e Microsoft Entra são intercambiáveis. Um mesmo tenant pode ter os dois (empresa mista pós aquisição) com provisioning cross provider.",
  "faq.support.q": "O suporte é em português? Horário LATAM?",
  "faq.support.a":
    "Sim. A equipe está em Santiago. Suporte principal em espanhol, com português sob demanda para clientes no Brasil. Horário UTC-3 a UTC-4. Os planos Pro e Enterprise têm resposta prioritária em horário útil.",
  "faq.setup.q": "Quanto tempo leva para começar? Preciso de consultoria?",
  "faq.setup.a":
    "Wizard guiado que se completa em poucos minutos se você já tem Google Workspace admin. Se seu setup tem regras diferentes (OUs custom, licenças especiais, workflows externos), o plano Pro inclui uma sessão de onboarding onde configuramos junto com você. Zero consultoria externa.",

  "features.eyebrow": "Produto",
  "features.title": "Todo o ciclo de vida em um painel",
  "features.subtitle":
    "Feito para IT Managers e integradores que hoje dependem de planilhas, tickets soltos e consoles dispersos.",
  "features.async.title": "Provisioning assíncrono",
  "features.async.desc":
    "Workers com retries exponenciais, circuit breaker e DLQ. Você nunca perde uma operação.",
  "features.approvals.title": "Aprovações e templates",
  "features.approvals.desc":
    "Access Profiles + Bulk CSV. Aprovação por papel antes de tocar o diretório.",
  "features.rbac.title": "RBAC granular",
  "features.rbac.desc":
    "Papéis + grupos + permissões por serviço. Cache Redis para baixa latência.",
  "features.vault.title": "Vault por tenant",
  "features.vault.desc":
    "Infisical self-hosted. Cada empresa tem seu projeto, isolamento real de segredos.",
  "features.audit.title": "Audit log imutável",
  "features.audit.desc":
    "Triggers PL/pgSQL bloqueiam UPDATE/DELETE. Retenção 18 meses tenant, 5 anos plataforma.",
  "features.metrics.title": "Métricas e SLA",
  "features.metrics.desc":
    "Grafana + Loki + Tempo. Dashboards por tenant, alertas via Brevo.",

  "how.eyebrow": "Como funciona",
  "how.title": "Quatro paseres de tickets para self-service",
  "how.step1.title": "Conecte seu diretório",
  "how.step1.desc":
    "Google Workspace ou Microsoft Entra via Service Account com Domain-Wide Delegation. Wizard guiado em menos de 10 minutos.",
  "how.step2.title": "Defina templates",
  "how.step2.desc":
    "Access Profiles com papéis, grupos e OUs. Um IT Manager mantém, todo o resto consome.",
  "how.step3.title": "Managers pedem, a plataforma provisiona",
  "how.step3.desc":
    "Managers pedem aceseres por template ou CSV. Aprovação → workers → auditoria.",
  "how.step4.title": "Observabilidade total",
  "how.step4.desc":
    "Cada operação fica no audit log imutável. Dashboards e alertas prontos para sua equipe.",

  "services.eyebrow": "Serviços",
  "services.title": "Módulos verticais, todos na mesma plataforma",
  "services.subtitle":
    "Comece com Super Workspace e ative o resto quando precisar.",

  "pricing.eyebrow": "Planos",
  "pricing.title": "Preços claros em pesos chilenos",
  "pricing.subtitle":
    "6 tiers desenhados para SMBs e mid-market. Desconto de 15% no pagamento anual.",
  "pricing.cta.viewAll": "Ver todos os planos",

  "cta.title": "Comece a automatizar em menos de 10 minutos",
  "cta.subtitle":
    "Conecte Google Workspace ou Microsoft Entra do Wizard. Quando estiver pronto, ative o plano que precisa.",
  "cta.signup": "Criar conta grátis",
  "cta.pricing": "Ver planos",

  "footer.tagline":
    "Automatiza o ciclo de vida de identidades corporativas no Google Workspace, Microsoft Entra e outros diretórios. Portal self-service, aprovações, workers assíncronos e auditoria imutável.",
  "footer.dataResidency":
    "Infraestrutura AWS com rede privada + Tailscale. Data residency e sub-processors detalhados em /legal.",
  "footer.col.product": "Produto",
  "footer.col.company": "Empresa",
  "footer.col.legal": "Legal",
  "footer.link.services": "Serviços",
  "footer.link.pricing": "Planos",
  "footer.link.portal": "Portal (app)",
  "footer.link.about": "Sobre",
  "footer.link.contact": "Contato",
  "footer.link.terms": "Termos",
  "footer.link.privacy": "Privacidade",
  "footer.link.dpa": "DPA",
  "footer.link.aup": "AUP",
  "footer.link.cookies": "Cookies",
  "footer.link.subprocessors": "Sub-processadores",
  "footer.copyright": "Mekovault SpA, Santiago, Chile",

  "compliance.gdpr": "Conformidade com o RGPD (UE 2016/679)",
  "compliance.chile": "Conforme Ley 21.719 · Chile",

  "lang.switcher_label": "Alterar idioma",

  "mock.acc_active": "Contas ativas",
  "mock.req_today": "Requests hoje",
  "mock.sla_met": "SLA cumprido",
  "mock.status_completed": "concluído",
  "mock.step_hr": "Aprovado por RH",
  "mock.step_gaccount": "Conta Google criada",
  "mock.step_groups": "Grupos + OU atribuídos",
  "mock.step_notify": "Manager notificado",
  "mock.onboarding_of": "Onboarding ·",

  "svc.workspace.title": "Super Workspace",
  "svc.workspace.desc":
    "Ciclo de vida de contas no Google Workspace e Microsoft Entra: criar, suspender, reativar, excluir, mover OU e resetar senha.",
  "svc.workspace.b1": "Google Admin SDK + Microsoft Graph",
  "svc.workspace.b2": "Provisioning assíncrono com retries",
  "svc.workspace.b3": "Sync incremental periódico",
  "svc.notifications.title": "Notifications Engine",
  "svc.notifications.desc":
    "Emails transacionais multi-idioma com quiet hours por timezone, dias úteis e feriados, e templates overrideable por tenant.",
  "svc.notifications.b1": "Brevo SMTP + tenant SMTP override",
  "svc.notifications.b2": "Quiet hours + holidays",
  "svc.notifications.b3": "Templates es/en/pt",
  "svc.tickets.title": "Requests & Tickets",
  "svc.tickets.desc":
    "Requests com state machine (draft → submitted → approved → completed), scheduled requests e bulk CSV para altas em massa.",
  "svc.tickets.b1": "Access Profiles",
  "svc.tickets.b2": "Scheduled requests",
  "svc.tickets.b3": "Bulk import 500 linhas",
  "svc.roadmap.title": "Super Rooms · Super Audit",
  "svc.roadmap.desc":
    "Módulos em desenvolvimento: gestão de salas compartilhadas do Google Meet e auditorias de compliance sobre o diretório ativo.",
  "svc.roadmap.b1": "Rooms: pool + reservas + auto-cleanup",
  "svc.roadmap.b2": "Audit: checks periódicos + relatórios",
  "svc.roadmap.b3": "Q4 2026",
  "svc.status.available": "Disponível",
  "svc.status.roadmap": "Roadmap",

  "products.title.pre": "Um painel único.",
  "products.title.hl": "Módulos independentes.",
  "products.subtitle":
    "Tudo compartilha o mesmo core de identidade, RBAC e auditoria. Você ativa o que precisa, quando precisa.",
  "products.cta.title": "Quer ver no seu diretório?",
  "products.cta.subtitle":
    "Crie sua conta e conecte Google Workspace ou Microsoft Entra do Wizard. Sem setup manual: tudo pelo portal.",
  "products.cta.signup": "Começar grátis",
  "products.cta.sales": "Falar com vendas",

  "pricing_page.title.pre": "Preços claros em",
  "pricing_page.title.hl": "pesos chilenos",
  "pricing_page.subtitle":
    "6 tiers em CLP nativo. Excedentes por conta se superar o incluído. Pagando anual, 15% off automático.",
  "pricing_page.trial_badge": "Trial 90 dias · sem cartão · contas ilimitadas",
  "pricing_page.included": "contas incluídas · excedente",
  "pricing_page.per_month": "/mês",
  "pricing_page.per_account": "/cta",
  "pricing_page.start_with": "Começar com",
  "pricing_page.popular": "Popular",
  "pricing_page.no_surprises.eyebrow": "Sem surpresas",
  "pricing_page.no_surprises.title": "Preços locais, sem volatilidade cambial",
  "pricing_page.no_surprises.desc":
    "Faturamos em CLP com boleta/factura chilena. Sem surpresas cambiais no fim do mês.",
  "pricing_page.faq.eyebrow": "FAQ",
  "pricing_page.faq.title": "Perguntas frequentes",
  "pricing_page.faq.desc":
    "Para qualquer outra dúvida, escreva para cloud@mekovault.com.",
  "pricing_page.cta.title": "Comece seu trial em 2 minutos",

  "faq.what_counts.q": "O que conta como 'conta gerenciada'?",
  "faq.what_counts.a":
    "Toda conta criada, sincronizada ou suspensa pelo Mekovault dentro do seu tenant durante o mês. Contas excluídas não contam mais.",
  "faq.overages.q": "Como são cobrados os excedentes?",
  "faq.overages.a":
    "No fechamento de cada período de faturamento, o Mekovault calcula a média diária de contas gerenciadas. Tudo que superar o incluído no plano é cobrado ao preço de excedente unitário do plano.",
  "faq.switch_plan.q": "Posso trocar de plano?",
  "faq.switch_plan.a":
    "Sim, a qualquer momento pelo painel de billing. Prorata é dia-a-dia: você não paga em dobro pela troca.",
  "faq.payment.q": "Como se paga?",
  "faq.payment.a":
    "Via MercadoPago Chile (assinatura com débito automático) ou transferência manual para Enterprise.",
  "faq.contract.q": "Tem contrato mínimo?",
  "faq.contract.a":
    "Não. O trial é de 90 dias e você pode cancelar quando quiser. Anuais têm 15% off mas são prorateados no cancelamento.",

  "about.eyebrow": "Nossa história",
  "about.title.pre": "Começamos observando como",
  "about.title.hl": "IT Managers no Chile",
  "about.title.post": "gerenciam contas: com planilhas.",
  "about.subtitle":
    "Mekovault SpA é uma empresa chilena. Vimos que equipes de IT em SMBs e mid-market ainda executam admissões, desligamentos e alterações uma por uma, no Google Workspace e Microsoft Entra, com planilhas como fonte da verdade.",
  "about.pillar.mission.title": "Missão",
  "about.pillar.mission.desc":
    "Automatizar o ciclo de vida de identidades corporativas para que equipes de IT parem de operar e comecem a desenhar.",
  "about.pillar.focus.title": "Foco",
  "about.pillar.focus.desc":
    "Começamos pelo Chile: preços em CLP, notas chilenas, suporte em espanhol. LATAM depois.",
  "about.pillar.ambition.title": "Ambição",
  "about.pillar.ambition.desc":
    "Ser o padrão regional para gestão de identidades em SMB e mid-market. Sem dependência de integradores externos.",
  "about.why.title": "Por que construímos o Mekovault",
  "about.why.p1":
    "O ponto de partida foi um cliente concreto. Um IT Manager em Santiago que gerenciava ~200 contas do Google Workspace com um formulário, uma planilha e ~20 arquivos de Apps Script. A contradição era clara: uma empresa moderna executando proceseres artesanais.",
  "about.why.p2":
    "O diagnóstico foi simples. Os produtos globais de IAM focam em enterprises que já têm equipe dedicada. Para todos os outros (50, 100, 200, 500 pessoas), não há opção simples, local e acessível.",
  "about.why.p3":
    "O Mekovault é essa opção. Multi-tenant real (RLS + vault por tenant), audit imutável, workers assíncronos com retries, e uma paleta de serviços que cresce por módulos. Não é só uma ferramenta de provisioning: é a infraestrutura de identidade que as empresas de LATAM precisam.",
  "about.cta.title": "Quer conhecer o time?",
  "about.cta.desc":
    "Escreva para nós e agendamos uma reunião. Contamos o que fazemos, como fazemos e o que podemos resolver para você.",
  "about.cta.contact": "Contate-nos",
  "about.cta.signup": "Começar grátis",

  "contact.eyebrow": "Contato",
  "contact.title.pre": "Vamos conversar.",
  "contact.title.hl": "Respondemos em 1 dia útil.",
  "contact.subtitle":
    "O jeito mais rápido de conhecer o Mekovault é abrir um trial. Se prefere falar antes, escreva por email ou pelo formulário.",
  "contact.card.sales": "Vendas e consultas gerais",
  "contact.card.support": "Suporte ao cliente",
  "contact.card.office": "Escritório",
  "contact.card.office_value": "Santiago do Chile",
  "contact.card.office_sub": "Trabalho remoto por padrão",
  "contact.card.trial": "Trial imediato",
  "contact.form.eyebrow": "Formulário",
  "contact.form.title": "Escreva para nós",
  "contact.form.desc":
    "Conte brevemente o que precisa. Este formulário abre seu cliente de email.",
  "contact.form.name": "Nome",
  "contact.form.email": "Email",
  "contact.form.company": "Empresa",
  "contact.form.message": "Mensagem",
  "contact.form.send": "Enviar mensagem",
  "contact.form.also": "Você também pode escrever direto para",
};

export type TranslationKey = keyof typeof es_419;

export const dictionaries: Record<Locale, Record<TranslationKey, string>> = {
  "es-419": es_419,
  en,
  "pt-BR": pt_BR,
};
