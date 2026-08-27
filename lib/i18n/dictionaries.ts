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
};

export type TranslationKey = keyof typeof es_419;

export const dictionaries: Record<Locale, Record<TranslationKey, string>> = {
  "es-419": es_419,
  en,
  "pt-BR": pt_BR,
};
