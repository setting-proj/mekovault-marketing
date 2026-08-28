"use client";

import {
  ArrowRight,
  Check,
  Cloud,
  KeySquare,
  MailCheck,
  ShieldCheck,
  Ticket,
  Video,
  ClipboardList,
  BellRing,
  Building2,
  CreditCard,
} from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { useT } from "@/lib/i18n/I18nProvider";

const SERVICES = [
  {
    icon: <Cloud />,
    status: "available" as const,
    title: "Super Workspace",
    desc: "Gestión de cuentas en Google Workspace y Microsoft Entra. Alta, suspensión, reactivación, delete, cambio de OU y reset de password como operaciones async.",
    bullets: [
      "Adapters de Google Admin SDK + Microsoft Graph SDK",
      "Workers con reintentos exponenciales, circuit breaker y DLQ",
      "Sync incremental de tenant_users cada 5 minutos",
      "Health checks periódicos + estado por conexión",
    ],
  },
  {
    icon: <MailCheck />,
    status: "available" as const,
    title: "Notifications Engine",
    desc: "Emails transaccionales multi-idioma con quiet hours por timezone, business days y holidays. Cada tenant puede override el sender y los templates.",
    bullets: [
      "Backend Brevo SMTP + tenant SMTP override",
      "Templates es / en / pt, editables desde el portal",
      "Quiet hours + business_days_bitmask + país (holidays)",
      "Worker quiet_hours_dispatcher para dispatch diferido",
    ],
  },
  {
    icon: <Ticket />,
    status: "available" as const,
    title: "Requests & Tickets",
    desc: "Solicitudes con state machine, Access Profiles (plantillas de acceso), scheduled requests para altas programadas y bulk CSV para altas masivas.",
    bullets: [
      "State machine: draft → submitted → approved → completed",
      "Access Profiles con expand_profile_to_items idempotente",
      "Bulk CSV: 1 request con N items validados",
      "Scheduled requests promovidos por worker cada 60s",
    ],
  },
  {
    icon: <ClipboardList />,
    status: "available" as const,
    title: "Audit & Compliance",
    desc: "Audit log inmutable con triggers PL/pgSQL, retención larga por tabla, y viewer con filtros y export CSV para compliance.",
    bullets: [
      "Triggers bloquean UPDATE / DELETE",
      "Retención 18 meses tenant, 5 años platform",
      "Filtros por actor / target / acción / rango",
      "Export CSV bajo demanda",
    ],
  },
  {
    icon: <ShieldCheck />,
    status: "available" as const,
    title: "Identity Core",
    desc: "El núcleo: auth (JWT RS256, MFA TOTP, OAuth), RBAC multi-tenant con RLS, y un vault por tenant en Infisical self-hosted.",
    bullets: [
      "JWT RS256 firmado por svc-auth, validado cross-service",
      "MFA TOTP con recovery codes single-use",
      "RBAC engine con cache Redis 5 min",
      "Infisical project per tenant · aislamiento real",
    ],
  },
  {
    icon: <CreditCard />,
    status: "available" as const,
    title: "Billing con MercadoPago",
    desc: "6 tiers seed en CLP nativo con FX USD→CLP cacheado, prorrateo día-a-día y plan anual con 15% de descuento. Integración con MercadoPago Chile.",
    bullets: [
      "6 planes en CLP con excedentes por cuenta gestionada",
      "FX Frankfurter cache 6h + fallback",
      "Daily meter worker (02:00 UTC) snapshot MANAGED",
      "MercadoPago preapproval + webhook HMAC",
    ],
  },
  {
    icon: <BellRing />,
    status: "available" as const,
    title: "SuperAdmin & Resellers",
    desc: "Vista cross-tenant para el operador de la plataforma: dashboards, control de MFA enforcement, resellers con budget alerts y suspension automática.",
    bullets: [
      "Dashboards por tenant / billing / audit",
      "Enforce MFA a nivel plataforma",
      "Resellers con presupuesto + auto-suspensión",
      "Email templates por reseller",
    ],
  },
  {
    icon: <Building2 />,
    status: "available" as const,
    title: "Onboarding & Wizard",
    desc: "Wizard de conexión guiado, con help drawer contextual para Service Account (Google) y App Registration (Microsoft).",
    bullets: [
      "3 pasos + drawer con enlaces oficiales",
      "Validación de dominio y permisos",
      "Testing de conexión en vivo",
      "Trial gestionado por account management",
    ],
  },
  {
    icon: <Video />,
    status: "roadmap" as const,
    title: "Super Rooms",
    desc: "Gestión de salas de Google Meet compartidas: pool centralizado, reservas por evento y auto-cleanup al final del día.",
    bullets: [
      "Pool de rooms + calendario",
      "Reservas atómicas + cancelación",
      "Auto-cleanup post-evento",
      "Q4 2026",
    ],
  },
  {
    icon: <KeySquare />,
    status: "roadmap" as const,
    title: "Super Audit",
    desc: "Auditorías periódicas sobre el directorio: cuentas huérfanas, roles sobredimensionados, licencias sin uso, offboardings incompletos.",
    bullets: [
      "Checks agendables por tenant",
      "Reportes exportables PDF / CSV",
      "Alertas cuando algo se degrada",
      "Q4 2026",
    ],
  },
];

export default function ProductsPage() {
  const t = useT();
  return (
    <>
      <Section compact>
        <Container>
          <SectionHeading
            eyebrow={t("features.eyebrow")}
            title={
              <>
                {t("products.title.pre")}{" "}
                <span className="text-brand-gradient">
                  {t("products.title.hl")}
                </span>
              </>
            }
            desc={t("products.subtitle")}
          />
        </Container>
      </Section>

      <Section compact>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t bg-muted/30">
        <Container size="narrow" className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            {t("products.cta.title")}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t("products.cta.subtitle")}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LinkButton
              href="https://app.mekovault.com/signup"
              external
              size="lg"
            >
              {t("products.cta.signup")} <ArrowRight />
            </LinkButton>
            <LinkButton href="/contact" size="lg" variant="outline">
              {t("products.cta.sales")}
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ServiceCard({
  icon,
  status,
  title,
  desc,
  bullets,
}: {
  icon: React.ReactNode;
  status: "available" | "roadmap";
  title: string;
  desc: string;
  bullets: string[];
}) {
  const isRoadmap = status === "roadmap";
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border p-6 transition-all " +
        (isRoadmap ? "bg-muted/40" : "bg-card hover:border-primary/40")
      }
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:size-5">
          {icon}
        </div>
        <span
          className={
            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium " +
            (isRoadmap
              ? "border border-border text-muted-foreground"
              : "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300")
          }
        >
          <span
            className={
              "size-1.5 rounded-full " +
              (isRoadmap ? "bg-muted-foreground/50" : "bg-emerald-500")
            }
          />
          {isRoadmap ? "Roadmap" : "Disponible"}
        </span>
      </div>
      <h3 className="font-heading text-lg font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
      <ul className="mt-4 space-y-1.5 text-sm">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
