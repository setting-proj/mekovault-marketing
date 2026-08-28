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
  "hero.eyebrow": "Trial 90 días · Sin límites · Sin tarjeta",
  "hero.title.pre": "Identidades corporativas,",
  "hero.title.hl1": "automatizadas",
  "hero.title.and": "y",
  "hero.title.hl2": "auditadas",
  "hero.subtitle":
    "Mekovault reemplaza el flujo manual de altas, bajas y cambios en Google Workspace, Microsoft Entra y otros directorios por un portal self-service con aprobaciones, workers async y auditoría inmutable.",
  "hero.cta.signup": "Crear cuenta gratis",
  "hero.cta.customer": "Ya soy cliente",
  "hero.trust.sla": "99.9% SLA",
  "hero.trust.rls": "Multi-tenant + RLS",
  "hero.trust.latam": "Datos en LATAM",

  // Integrations strip
  "integrations.title": "Integraciones nativas",

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
    "Roles + grupos + permisos por servicio. Cache Redis 5 min para latencia baja.",
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
  "how.step1.title": "Conectá tu directorio",
  "how.step1.desc":
    "Google Workspace o Microsoft Entra vía Service Account con Domain-Wide Delegation. Wizard guiado en menos de 10 minutos.",
  "how.step2.title": "Definí plantillas",
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
    "Empezá con Super Workspace y activá el resto cuando lo necesites.",

  // Pricing preview
  "pricing.eyebrow": "Planes",
  "pricing.title": "Precios claros en pesos chilenos",
  "pricing.subtitle":
    "Desde 6 tiers pensados para SMBs y mid-market. Descuento de 15% pagando anual.",
  "pricing.cta.viewAll": "Ver todos los planes",

  // CTA
  "cta.title": "Empezá a automatizar en menos de 10 minutos",
  "cta.subtitle":
    "Conectá Google Workspace o Microsoft Entra desde el Wizard. Cuando estés listo, activá el plan que necesites.",
  "cta.signup": "Crear cuenta gratis",
  "cta.pricing": "Ver planes",

  // Footer
  "footer.tagline":
    "Automatiza el lifecycle de identidades corporativas en Google Workspace, Microsoft Entra y otros directorios. Portal self-service, aprobaciones, workers async y auditoría inmutable.",
  "footer.dataResidency": "Datos alojados en LATAM. Infraestructura AWS con red privada + Tailscale.",
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
  "footer.copyright": "Mekovault SpA — Santiago, Chile",

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
  "svc.workspace.b3": "Sync incremental cada 5 min",
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
    "Todo comparte el mismo core de identidad, RBAC y auditoría. Activás lo que necesitás, cuando lo necesitás.",
  "products.cta.title": "¿Querés verlo en tu directorio?",
  "products.cta.subtitle":
    "Creá tu cuenta y conectá Google Workspace o Microsoft Entra desde el Wizard. No hay setup manual: todo desde el portal.",
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
  "pricing_page.faq.desc": "Si tenés otra duda, escribinos a cloud@mekovault.com.",
  "pricing_page.cta.title": "Empezá tu trial en 2 minutos",

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
    "No. El trial es de 90 días y podés cancelar cuando quieras. Los anuales tienen 15% off pero se prorratean al cancelar.",

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
    "Empezamos por Chile — precios en CLP, boletas chilenas, soporte en español. Escalamos a LATAM después.",
  "about.pillar.ambition.title": "Ambición",
  "about.pillar.ambition.desc":
    "Ser el standard regional para gestión de identidades en SMB y mid-market. Sin dependencias en integradores externos.",
  "about.why.title": "Por qué construimos Mekovault",
  "about.why.p1":
    "El punto de partida fue un cliente concreto. Un IT Manager en Santiago que gestionaba ~200 cuentas Google Workspace con un formulario, una hoja de cálculo y ~20 archivos de Apps Script. La contradicción era clara: una empresa moderna ejecutando procesos artesanales.",
  "about.why.p2":
    "El diagnóstico fue simple. Los productos globales de IAM se enfocan en enterprises que ya tienen un equipo dedicado. Para todos los demás — 50, 100, 200, 500 personas — no hay opción simple, local y accesible.",
  "about.why.p3":
    "Mekovault es esa opción. Multi-tenant real (RLS + vault por tenant), audit inmutable, workers async con reintentos, y una paleta de servicios que crece por módulos. No es solo un provisioning tool: es la infraestructura de identidad que las empresas de LATAM necesitan.",
  "about.cta.title": "¿Querés conocer al equipo?",
  "about.cta.desc":
    "Escribinos y coordinamos una reunión. Contamos qué hacemos, cómo lo hacemos, y qué te podemos resolver.",
  "about.cta.contact": "Contactanos",
  "about.cta.signup": "Empezar gratis",

  // ========== Contact page ==========
  "contact.eyebrow": "Contacto",
  "contact.title.pre": "Hablemos.",
  "contact.title.hl": "Respondemos en 1 día hábil.",
  "contact.subtitle":
    "La forma más rápida de conocer Mekovault es abrir un trial. Si preferís hablar antes, escribinos por email o vía formulario.",
  "contact.card.sales": "Ventas y consultas generales",
  "contact.card.support": "Soporte a clientes",
  "contact.card.office": "Oficina",
  "contact.card.office_value": "Santiago de Chile",
  "contact.card.office_sub": "Trabajo remoto por defecto",
  "contact.card.trial": "Trial inmediato",
  "contact.form.eyebrow": "Formulario",
  "contact.form.title": "Escribinos",
  "contact.form.desc":
    "Contanos brevemente qué necesitás. Este formulario abre tu cliente de email.",
  "contact.form.name": "Nombre",
  "contact.form.email": "Email",
  "contact.form.company": "Empresa",
  "contact.form.message": "Cuéntanos",
  "contact.form.send": "Enviar mensaje",
  "contact.form.also":
    "También podés escribirnos directamente a",
} as const;

const en: Record<keyof typeof es_419, string> = {
  "nav.product": "Product",
  "nav.pricing": "Pricing",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.login": "Sign in",
  "nav.signup": "Start free",

  "hero.eyebrow": "90-day trial · No limits · No card",
  "hero.title.pre": "Corporate identities,",
  "hero.title.hl1": "automated",
  "hero.title.and": "and",
  "hero.title.hl2": "audited",
  "hero.subtitle":
    "Mekovault replaces the manual flow of hires, leaves and changes in Google Workspace, Microsoft Entra and other directories with a self-service portal, approvals, async workers and immutable audit.",
  "hero.cta.signup": "Create free account",
  "hero.cta.customer": "I'm a customer",
  "hero.trust.sla": "99.9% SLA",
  "hero.trust.rls": "Multi-tenant + RLS",
  "hero.trust.latam": "Data in LATAM",

  "integrations.title": "Native integrations",

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
    "Roles + groups + per-service permissions. Redis cache 5 min for low latency.",
  "features.vault.title": "Vault per tenant",
  "features.vault.desc":
    "Infisical self-hosted. Each company has its own project — real cross-tenant secret isolation.",
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
    "Data hosted in LATAM. AWS infrastructure with private network + Tailscale.",
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
  "footer.copyright": "Mekovault SpA — Santiago, Chile",

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
  "svc.workspace.b3": "Incremental sync every 5 min",
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
    "We start in Chile — CLP pricing, Chilean invoicing, Spanish support. LATAM afterwards.",
  "about.pillar.ambition.title": "Ambition",
  "about.pillar.ambition.desc":
    "Be the regional standard for identity management in SMB and mid-market. No dependency on external integrators.",
  "about.why.title": "Why we built Mekovault",
  "about.why.p1":
    "The starting point was a real customer. An IT Manager in Santiago managing ~200 Google Workspace accounts with a form, a spreadsheet and ~20 Apps Script files. The contradiction was clear: a modern company running artisanal processes.",
  "about.why.p2":
    "The diagnosis was simple. Global IAM products focus on enterprises that already have a dedicated team. For everyone else — 50, 100, 200, 500 people — there's no simple, local, accessible option.",
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

  "hero.eyebrow": "Trial 90 dias · Sem limites · Sem cartão",
  "hero.title.pre": "Identidades corporativas,",
  "hero.title.hl1": "automatizadas",
  "hero.title.and": "e",
  "hero.title.hl2": "auditadas",
  "hero.subtitle":
    "O Mekovault substitui o fluxo manual de admissões, desligamentos e alterações no Google Workspace, Microsoft Entra e outros diretórios por um portal self-service com aprovações, workers assíncronos e auditoria imutável.",
  "hero.cta.signup": "Criar conta grátis",
  "hero.cta.customer": "Já sou cliente",
  "hero.trust.sla": "SLA 99,9%",
  "hero.trust.rls": "Multi-tenant + RLS",
  "hero.trust.latam": "Dados na LATAM",

  "integrations.title": "Integrações nativas",

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
    "Papéis + grupos + permissões por serviço. Cache Redis 5 min para baixa latência.",
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
  "how.title": "Quatro passos de tickets para self-service",
  "how.step1.title": "Conecte seu diretório",
  "how.step1.desc":
    "Google Workspace ou Microsoft Entra via Service Account com Domain-Wide Delegation. Wizard guiado em menos de 10 minutos.",
  "how.step2.title": "Defina templates",
  "how.step2.desc":
    "Access Profiles com papéis, grupos e OUs. Um IT Manager mantém, todo o resto consome.",
  "how.step3.title": "Managers pedem, a plataforma provisiona",
  "how.step3.desc":
    "Managers pedem acessos por template ou CSV. Aprovação → workers → auditoria.",
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
    "Dados hospedados na LATAM. Infraestrutura AWS com rede privada + Tailscale.",
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
  "footer.copyright": "Mekovault SpA — Santiago, Chile",

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
  "svc.workspace.b3": "Sync incremental a cada 5 min",
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
    "Começamos pelo Chile — preços em CLP, notas chilenas, suporte em espanhol. LATAM depois.",
  "about.pillar.ambition.title": "Ambição",
  "about.pillar.ambition.desc":
    "Ser o padrão regional para gestão de identidades em SMB e mid-market. Sem dependência de integradores externos.",
  "about.why.title": "Por que construímos o Mekovault",
  "about.why.p1":
    "O ponto de partida foi um cliente concreto. Um IT Manager em Santiago que gerenciava ~200 contas do Google Workspace com um formulário, uma planilha e ~20 arquivos de Apps Script. A contradição era clara: uma empresa moderna executando processos artesanais.",
  "about.why.p2":
    "O diagnóstico foi simples. Os produtos globais de IAM focam em enterprises que já têm equipe dedicada. Para todos os outros — 50, 100, 200, 500 pessoas — não há opção simples, local e acessível.",
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
