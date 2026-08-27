"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Workflow,
  KeySquare,
  LineChart,
  Cloud,
  MailCheck,
  Ticket,
  Check,
} from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading, EyebrowBadge } from "@/components/Section";
import { useT } from "@/lib/i18n/I18nProvider";

export default function Home() {
  const t = useT();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-brand-radial" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid-dot opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        />

        <Container className="relative pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="mx-auto max-w-3xl text-center">
            <EyebrowBadge>
              <span className="size-1.5 rounded-full bg-current animate-brand-pulse" />
              {t("hero.eyebrow")}
            </EyebrowBadge>

            <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              {t("hero.title.pre")}{" "}
              <span className="text-brand-gradient">{t("hero.title.hl1")}</span>{" "}
              {t("hero.title.and")}{" "}
              <span className="text-brand-gradient">{t("hero.title.hl2")}</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              {t("hero.subtitle")}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <LinkButton
                href="https://app.mekovault.com/signup"
                external
                size="lg"
              >
                {t("hero.cta.signup")} <ArrowRight />
              </LinkButton>
              <LinkButton href="/products" variant="outline" size="lg">
                {t("nav.product")}
              </LinkButton>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <TrustDot color="emerald" label={t("hero.trust.sla")} />
              <TrustDot color="cyan" label={t("hero.trust.rls")} />
              <TrustDot color="deep" label={t("hero.trust.latam")} />
            </div>
          </div>

          {/* Mock dashboard */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div
              aria-hidden
              className="absolute -inset-x-10 -inset-y-6 bg-brand-gradient opacity-20 blur-3xl"
            />
            <div className="glass relative rounded-2xl p-3 shadow-[var(--shadow-glow)] animate-brand-float">
              <div className="rounded-xl bg-card p-5">
                <div className="flex items-center gap-2 border-b pb-3">
                  <span className="size-2.5 rounded-full bg-red-400/60" />
                  <span className="size-2.5 rounded-full bg-amber-400/60" />
                  <span className="size-2.5 rounded-full bg-emerald-400/60" />
                  <span className="ml-3 text-xs text-muted-foreground">
                    app.mekovault.com/admin/access-profiles
                  </span>
                </div>
                <div className="grid gap-4 pt-5 sm:grid-cols-3">
                  <MockStat label="Cuentas activas" value="1,284" delta="+34" />
                  <MockStat label="Requests hoy" value="47" delta="+12" />
                  <MockStat label="SLA cumplido" value="99.9%" delta="30d" />
                </div>
                <div className="mt-5 rounded-lg border bg-muted/40 p-4">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="font-medium">
                      Onboarding · maria@empresa.cl
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300">
                      completado
                    </span>
                  </div>
                  <MockStep label="Aprobado por RRHH" />
                  <MockStep label="Cuenta Google creada" />
                  <MockStep label="Grupos + OU asignados" />
                  <MockStep label="Notificación al manager" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Logos */}
      <Section compact className="border-t bg-background/60">
        <Container>
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
            {t("integrations.title")}
          </p>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-muted-foreground">
            <span>Google Workspace</span>
            <span className="text-border">·</span>
            <span>Microsoft Entra ID</span>
            <span className="text-border">·</span>
            <span>Google Meet</span>
            <span className="text-border">·</span>
            <span>MercadoPago</span>
            <span className="text-border">·</span>
            <span>Infisical Vault</span>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section id="features" className="border-t">
        <Container>
          <SectionHeading
            eyebrow="Producto"
            title="Todo el lifecycle en un solo panel"
            desc="Diseñado para IT Managers e integradores que hoy dependen de spreadsheets, tickets sueltos y consolas dispersas."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={<Zap />}
              title="Provisioning async"
              desc="Workers con reintentos exponenciales, circuit breaker y DLQ. Nunca pierdes una operación."
            />
            <Feature
              icon={<Workflow />}
              title="Aprobaciones y plantillas"
              desc="Access Profiles + Bulk CSV. Aprobación por rol antes de tocar el directorio."
            />
            <Feature
              icon={<Users />}
              title="RBAC granular"
              desc="Roles + grupos + permisos por servicio. Cache Redis 5 min para latencia baja."
            />
            <Feature
              icon={<KeySquare />}
              title="Vault por tenant"
              desc="Infisical self-hosted. Cada empresa tiene su project, aislamiento real de secretos."
            />
            <Feature
              icon={<ShieldCheck />}
              title="Audit log inmutable"
              desc="Triggers PL/pgSQL bloquean UPDATE/DELETE. Retención 18 meses tenant, 5 años platform."
            />
            <Feature
              icon={<LineChart />}
              title="Métricas y SLA"
              desc="Grafana + Loki + Tempo. Dashboards por tenant, alertas por Brevo."
            />
          </div>
        </Container>
      </Section>

      {/* Cómo funciona */}
      <Section className="border-t bg-muted/30">
        <Container>
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Cuatro pasos para pasar de tickets a self-service"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            <Step
              n={1}
              title="Conecta tu directorio"
              desc="Google Workspace o Microsoft Entra vía Service Account con Domain-Wide Delegation. Wizard guiado en menos de 10 minutos."
            />
            <Step
              n={2}
              title="Define plantillas"
              desc="Access Profiles con roles, grupos y OU. Un IT Manager los mantiene, todo el resto los usa."
            />
            <Step
              n={3}
              title="El manager pide, la plataforma provisiona"
              desc="Los managers piden accesos por template o por CSV. Aprobación → workers → auditoría."
            />
            <Step
              n={4}
              title="Observabilidad total"
              desc="Cada operación queda en audit log inmutable. Dashboards y alertas listas para tu equipo."
            />
          </div>
        </Container>
      </Section>

      {/* Servicios */}
      <Section className="border-t">
        <Container>
          <SectionHeading
            eyebrow="Servicios"
            title="Módulos verticales, todos en la misma plataforma"
            desc="Empezá con Super Workspace y activá el resto cuando lo necesites."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <ServiceCard
              icon={<Cloud />}
              status="Disponible"
              title="Super Workspace"
              desc="Gestión de lifecycle de cuentas en Google Workspace y Microsoft Entra: alta, suspensión, reactivación, delete, cambio de OU y reset de password."
              bullets={[
                "Google Admin SDK + Microsoft Graph",
                "Provisioning async con reintentos",
                "Sync incremental cada 5 min",
              ]}
            />
            <ServiceCard
              icon={<MailCheck />}
              status="Disponible"
              title="Notifications Engine"
              desc="Emails transaccionales multi-idioma con quiet hours por timezone, business days y feriados, y templates overrideable por tenant."
              bullets={[
                "Brevo SMTP + tenant SMTP override",
                "Quiet hours + holidays",
                "Templates es/en/pt",
              ]}
            />
            <ServiceCard
              icon={<Ticket />}
              status="Disponible"
              title="Requests & Tickets"
              desc="Solicitudes con state machine (draft → submitted → approved → completed), scheduled requests y bulk CSV para altas masivas."
              bullets={[
                "Access Profiles",
                "Scheduled requests",
                "Bulk import 500 filas",
              ]}
            />
            <ServiceCard
              icon={<KeySquare />}
              status="Roadmap"
              title="Super Rooms · Super Audit"
              desc="Módulos en desarrollo: gestión de Google Meet rooms compartidas y auditorías de compliance sobre el directorio activo."
              bullets={[
                "Rooms: pool + reservas + auto-cleanup",
                "Audit: checks periódicos + reportes",
                "Q4 2026",
              ]}
              muted
            />
          </div>
        </Container>
      </Section>

      {/* Pricing preview */}
      <Section className="border-t bg-muted/30">
        <Container>
          <SectionHeading
            eyebrow="Planes"
            title="Precios claros en pesos chilenos"
            desc="Desde 6 tiers pensados para SMBs y mid-market. Descuento de 15% pagando anual."
          />

          <div className="mt-12 flex justify-center">
            <LinkButton href="/pricing" size="lg" variant="outline">
              Ver todos los planes <ArrowRight />
            </LinkButton>
          </div>
        </Container>
      </Section>

      {/* CTA final */}
      <Section className="border-t">
        <Container size="narrow">
          <div className="relative overflow-hidden rounded-3xl border bg-brand-gradient p-10 text-center text-white sm:p-14"
            style={{ boxShadow: "var(--shadow-glow-cyan)" }}
          >
            <div aria-hidden className="absolute inset-0 grid-lines opacity-20" />
            <div className="relative">
              <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Empieza a automatizar en menos de 10 minutos
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/85">
                Conecta Google Workspace o Microsoft Entra desde el Wizard.
                Cuando estés listo, activa el plan que necesites.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <LinkButton
                  href="https://app.mekovault.com/signup"
                  external
                  size="lg"
                  variant="secondary"
                >
                  Crear cuenta gratis <ArrowRight />
                </LinkButton>
                <LinkButton
                  href="/pricing"
                  size="lg"
                  variant="white"
                >
                  Ver planes
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

/* ------------------------------------------------------------ */

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
      <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110 [&_svg]:size-5">
        {icon}
      </div>
      <h3 className="font-heading text-base font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function Step({
  n,
  title,
  desc,
}: {
  n: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative rounded-2xl border bg-card p-6">
      <div className="mb-4 inline-flex size-9 items-center justify-center rounded-lg bg-brand-gradient font-heading text-sm font-semibold text-white">
        {n}
      </div>
      <h3 className="font-heading text-base font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function ServiceCard({
  icon,
  status,
  title,
  desc,
  bullets,
  muted = false,
}: {
  icon: React.ReactNode;
  status: string;
  title: string;
  desc: string;
  bullets: string[];
  muted?: boolean;
}) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border p-6 " +
        (muted ? "bg-muted/40" : "bg-card")
      }
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:size-5">
          {icon}
        </div>
        <span
          className={
            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium " +
            (muted
              ? "border border-border text-muted-foreground"
              : "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300")
          }
        >
          <span
            className={
              "size-1.5 rounded-full " +
              (muted ? "bg-muted-foreground/50" : "bg-emerald-500")
            }
          />
          {status}
        </span>
      </div>
      <h3 className="font-heading text-xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
      <ul className="mt-4 space-y-1.5 text-sm">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Check className="mt-0.5 size-4 text-primary" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TrustDot({
  color,
  label,
}: {
  color: "emerald" | "cyan" | "deep";
  label: string;
}) {
  const cls =
    color === "emerald"
      ? "bg-emerald-500"
      : color === "cyan"
        ? "bg-[#00b4d8]"
        : "bg-[#0077b6]";
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={"size-1.5 rounded-full " + cls} />
      {label}
    </span>
  );
}

function MockStat({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-lg border bg-muted/30 p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="font-heading text-2xl font-semibold tracking-tight">
          {value}
        </span>
        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
          {delta}
        </span>
      </div>
    </div>
  );
}

function MockStep({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 py-1 text-xs">
      <span className="flex size-4 items-center justify-center rounded-full bg-emerald-500 text-white">
        <svg
          viewBox="0 0 24 24"
          className="size-2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={3.5}
        >
          <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}
