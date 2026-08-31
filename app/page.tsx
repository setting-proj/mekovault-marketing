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
import { Reveal } from "@/components/Reveal";
import { TimelineCompare } from "@/components/TimelineCompare";
import { FAQ } from "@/components/FAQ";
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
            {/* Eyebrow: mono, sin dot pulsando (rompe pattern AI-obvious de
                los "trust badges" con puntito animado que se usan en cada SaaS) */}
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {t("hero.eyebrow")}
            </span>

            {/* Título en 2 líneas asimétricas: primera declaración concreta,
                segunda promesa en italic serif con gradient. Sin paralelismo
                perfecto "verb + and + verb" que grita AI. */}
            <h1 className="mt-8 text-balance leading-[1.05] tracking-tight">
              <span className="block font-heading text-4xl sm:text-5xl md:text-6xl">
                {t("hero.title.line1")}
              </span>
              <span className="mt-2 block font-heading italic text-4xl sm:text-5xl md:text-6xl text-brand-gradient">
                {t("hero.title.line2")}
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground">
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
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                {t("hero.cta.customer")} →
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
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
                {/* URL bar simplificada: sin dots macOS que gritan "SaaS mockup". */}
                <div className="flex items-center gap-2 border-b pb-3 font-mono text-xs text-muted-foreground">
                  <span className="text-emerald-500">●</span>
                  <span>app.mekovault.com/moov/workspace/users</span>
                  <span className="ml-auto text-[10px] opacity-60">hace 47s</span>
                </div>
                <div className="grid gap-4 pt-5 sm:grid-cols-3">
                  <MockStat label={t("mock.acc_active")} value="1,284" delta="+34" />
                  <MockStat label={t("mock.req_today")} value="47" delta="+12" />
                  <MockStat label={t("mock.sla_met")} value="99.9%" delta="30d" />
                </div>
                <div className="mt-5 rounded-lg border bg-muted/40 p-4">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="font-medium font-mono">
                      {t("mock.onboarding_of")} maria.jara@moov.cl
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300">
                      {t("mock.status_completed")}
                    </span>
                  </div>
                  <MockStep label={t("mock.step_hr")} />
                  <MockStep label={t("mock.step_gaccount")} />
                  <MockStep label={t("mock.step_groups")} />
                  <MockStep label={t("mock.step_notify")} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive moment: comparativa manual vs Mekovault
          (10k-websites §6: cada página tiene UN interactive moment memorable) */}
      <Section className="relative border-t">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <Container className="relative">
          <SectionHeading
            eyebrow={t("compare.eyebrow")}
            title={t("compare.title")}
            desc={t("compare.subtitle")}
          />
          <Reveal>
            <div className="mx-auto mt-10 max-w-4xl">
              <TimelineCompare />
            </div>
          </Reveal>
        </Container>
      </Section>

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
            eyebrow={t("features.eyebrow")}
            title={t("features.title")}
            desc={t("features.subtitle")}
          />

          {/* Grid asimétrico: 1 hero card + 5 secundarias + quote breakout.
              Rompe el pattern "3x2 idéntico" que grita template AI-marketing. */}
          <div className="mt-14 grid gap-4 md:grid-cols-6 md:auto-rows-min">
            {/* Feature destacada: 4/6 cols, doble alto de contenido, iconografía distinta */}
            <Reveal delay={0} className="md:col-span-4 md:row-span-2">
              <FeatureHero
                icon={<Zap />}
                title={t("features.async.title")}
                desc={t("features.async.desc")}
              />
            </Reveal>
            {/* Aprobaciones + RBAC en columna vertical */}
            <Reveal delay={80} className="md:col-span-2">
              <Feature icon={<Workflow />} title={t("features.approvals.title")} desc={t("features.approvals.desc")} />
            </Reveal>
            <Reveal delay={160} className="md:col-span-2">
              <Feature icon={<Users />} title={t("features.rbac.title")} desc={t("features.rbac.desc")} />
            </Reveal>
            {/* Row 2: 3 features en línea */}
            <Reveal delay={240} className="md:col-span-2">
              <Feature icon={<KeySquare />} title={t("features.vault.title")} desc={t("features.vault.desc")} />
            </Reveal>
            <Reveal delay={320} className="md:col-span-2">
              <Feature icon={<ShieldCheck />} title={t("features.audit.title")} desc={t("features.audit.desc")} />
            </Reveal>
            <Reveal delay={400} className="md:col-span-2">
              <Feature icon={<LineChart />} title={t("features.metrics.title")} desc={t("features.metrics.desc")} />
            </Reveal>
          </div>

          {/* Founder quote: breakout editorial. Historia real que aparece
              también en /about, pero acá se muestra como pull-quote. */}
          <Reveal delay={100}>
            <FounderQuote t={t} />
          </Reveal>
        </Container>
      </Section>

      {/* Cómo funciona */}
      <Section className="border-t bg-muted/30">
        <Container>
          <SectionHeading
            eyebrow={t("how.eyebrow")}
            title={t("how.title")}
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            <Reveal delay={0}>
              <Step n={1} title={t("how.step1.title")} desc={t("how.step1.desc")} />
            </Reveal>
            <Reveal delay={80}>
              <Step n={2} title={t("how.step2.title")} desc={t("how.step2.desc")} />
            </Reveal>
            <Reveal delay={160}>
              <Step n={3} title={t("how.step3.title")} desc={t("how.step3.desc")} />
            </Reveal>
            <Reveal delay={240}>
              <Step n={4} title={t("how.step4.title")} desc={t("how.step4.desc")} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Servicios */}
      <Section className="border-t">
        <Container>
          <SectionHeading
            eyebrow={t("services.eyebrow")}
            title={t("services.title")}
            desc={t("services.subtitle")}
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <ServiceCard
              icon={<Cloud />}
              status={t("svc.status.available")}
              title={t("svc.workspace.title")}
              desc={t("svc.workspace.desc")}
              bullets={[
                t("svc.workspace.b1"),
                t("svc.workspace.b2"),
                t("svc.workspace.b3"),
              ]}
            />
            <ServiceCard
              icon={<MailCheck />}
              status={t("svc.status.available")}
              title={t("svc.notifications.title")}
              desc={t("svc.notifications.desc")}
              bullets={[
                t("svc.notifications.b1"),
                t("svc.notifications.b2"),
                t("svc.notifications.b3"),
              ]}
            />
            <ServiceCard
              icon={<Ticket />}
              status={t("svc.status.available")}
              title={t("svc.tickets.title")}
              desc={t("svc.tickets.desc")}
              bullets={[
                t("svc.tickets.b1"),
                t("svc.tickets.b2"),
                t("svc.tickets.b3"),
              ]}
            />
            <ServiceCard
              icon={<KeySquare />}
              status={t("svc.status.roadmap")}
              title={t("svc.roadmap.title")}
              desc={t("svc.roadmap.desc")}
              bullets={[
                t("svc.roadmap.b1"),
                t("svc.roadmap.b2"),
                t("svc.roadmap.b3"),
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
            eyebrow={t("pricing.eyebrow")}
            title={t("pricing.title")}
            desc={t("pricing.subtitle")}
          />

          <div className="mt-12 flex justify-center">
            <LinkButton href="/pricing" size="lg" variant="outline">
              {t("pricing.cta.viewAll")} <ArrowRight />
            </LinkButton>
          </div>
        </Container>
      </Section>

      {/* FAQ: objeciones reales de IT Managers (10k-websites §6) */}
      <Section id="faq" className="border-t bg-muted/30">
        <Container>
          <SectionHeading
            eyebrow={t("faq.eyebrow")}
            title={t("faq.title")}
            desc={t("faq.subtitle")}
          />
          <div className="mt-12">
            <FAQ
              items={[
                { q: t("faq.trial.q"), a: t("faq.trial.a") },
                { q: t("faq.security.q"), a: t("faq.security.a") },
                { q: t("faq.lockin.q"), a: t("faq.lockin.a") },
                { q: t("faq.stack.q"), a: t("faq.stack.a") },
                { q: t("faq.support.q"), a: t("faq.support.a") },
                { q: t("faq.setup.q"), a: t("faq.setup.a") },
              ]}
            />
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
            {/* Local scrim para legibilidad del texto sobre el gradient
                (10k-websites §10: legibility system contra el "worst frame" del bg) */}
            <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25" />
            <div className="relative">
              <h2
                className="text-balance font-heading text-3xl tracking-tight sm:text-4xl"
                style={{ textShadow: "0 2px 12px rgb(0 0 0 / 0.35)" }}
              >
                {t("cta.title")}
              </h2>
              <p
                className="mx-auto mt-3 max-w-xl text-white"
                style={{ textShadow: "0 1px 6px rgb(0 0 0 / 0.4)" }}
              >
                {t("cta.subtitle")}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <LinkButton
                  href="https://app.mekovault.com/signup"
                  external
                  size="lg"
                  variant="secondary"
                >
                  {t("cta.signup")} <ArrowRight />
                </LinkButton>
                <LinkButton
                  href="/pricing"
                  size="lg"
                  variant="white"
                >
                  {t("cta.pricing")}
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
  // Card lift + accent glow unificado (10k-websites: whole-site animated)
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border bg-card p-6 card-lift hover:card-lift-hover">
      <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110 [&_svg]:size-5">
        {icon}
      </div>
      <h3 className="font-heading text-xl tracking-tight">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

/**
 * FeatureHero: variante grande de Feature. Destaca UNA capability sobre el resto.
 * Layout distinto (icon extra + mini-diagrama de flow) para romper la simetría del grid.
 */
function FeatureHero({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border bg-card p-8 card-lift hover:card-lift-hover">
      {/* Grid pattern sutil de fondo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-dot opacity-25 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_60%)]" />
      <div className="relative">
        <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[var(--shadow-glow-cyan)] transition-transform group-hover:scale-105 [&_svg]:size-7">
          {icon}
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl italic tracking-tight text-brand-gradient">
          {title}
        </h3>
        <p className="mt-3 max-w-lg text-base text-muted-foreground leading-relaxed">
          {desc}
        </p>
        {/* Mini diagrama de flow: comunica "workflow async" visualmente */}
        <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <FlowChip>request</FlowChip>
          <FlowArrow />
          <FlowChip>queue</FlowChip>
          <FlowArrow />
          <FlowChip>worker</FlowChip>
          <FlowArrow />
          <FlowChip highlight>provider</FlowChip>
        </div>
      </div>
    </div>
  );
}

function FlowChip({ children, highlight = false }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <span
      className={
        "rounded-md px-2 py-0.5 " +
        (highlight
          ? "bg-primary/15 text-primary border border-primary/30"
          : "bg-muted/60 border border-border")
      }
    >
      {children}
    </span>
  );
}

function FlowArrow() {
  return <span aria-hidden className="text-border">→</span>;
}

/**
 * FounderQuote: pull-quote editorial con la historia de origen del proyecto.
 * Rompe el patrón de "cards de features" con un bloque tipográfico distinto.
 * Sin foto para no fake un testimonio; la voz es del founder, atribuida.
 */
function FounderQuote({ t }: { t: ReturnType<typeof useT> }) {
  return (
    <div className="mt-14 relative overflow-hidden rounded-2xl border bg-gradient-to-br from-card via-card to-primary/5 p-8 sm:p-12">
      <div aria-hidden className="absolute -right-8 -top-8 size-40 rounded-full bg-brand-gradient opacity-10 blur-3xl" />
      <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
        {/* Comilla tipográfica en display serif, sin icon lucide (evita cliché SaaS) */}
        <div className="font-heading text-7xl leading-none text-primary/40 italic select-none" aria-hidden>
          &ldquo;
        </div>
        <div>
          <p className="font-heading text-xl sm:text-2xl italic leading-snug text-balance">
            {t("founder.quote")}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span>{t("founder.name")}</span>
            <span aria-hidden className="text-border">·</span>
            <span>{t("founder.role")}</span>
            <span aria-hidden className="text-border">·</span>
            <span>{t("founder.date")}</span>
          </div>
        </div>
      </div>
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
    <div className="relative rounded-2xl border bg-card p-6 card-lift hover:card-lift-hover">
      <div className="mb-4 inline-flex size-9 items-center justify-center rounded-lg bg-brand-gradient text-sm font-semibold text-white font-mono">
        {n}
      </div>
      <h3 className="font-heading text-xl tracking-tight">
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
        "relative overflow-hidden rounded-2xl border p-6 card-lift hover:card-lift-hover " +
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
