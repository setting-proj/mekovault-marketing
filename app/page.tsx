"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Check,
  ClipboardCheck,
  Cloud,
  EyeOff,
  FileClock,
  Smile,
  Ticket,
  UserMinus,
  UserPlus,
  Wallet,
} from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { TimelineCompare } from "@/components/TimelineCompare";
import { LeakCalculator } from "@/components/LeakCalculator";
import { FAQ } from "@/components/FAQ";
import { HrTriggersSection, PlatformsSection, TwoServicesSection } from "@/components/ServiceModel";
import { useT } from "@/lib/i18n/I18nProvider";
import { formatCLP, mainAppPrice } from "@/lib/catalog";

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
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {t("hero.eyebrow")}
            </span>

            <h1 className="mt-8 text-balance leading-[1.05] tracking-tight">
              <span className="block font-heading text-4xl sm:text-5xl md:text-6xl">
                {t("hero.title.line1")}
              </span>
              <span className="mt-2 block font-heading text-4xl sm:text-5xl md:text-6xl text-brand-gradient">
                {t("hero.title.line2")}
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground">
              {t("hero.subtitle")}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <LinkButton href="https://app.mekovault.com/signup" external size="lg">
                {t("hero.cta.signup")} <ArrowRight />
              </LinkButton>
              <Link
                href="#calculadora"
                className="text-sm font-medium text-muted-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground hover:decoration-primary"
              >
                {t("hero.cta.calc")} →
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
              <TrustDot color="emerald" label={t("hero.trust.1")} />
              <TrustDot color="cyan" label={t("hero.trust.2")} />
              <TrustDot color="deep" label={t("hero.trust.3")} />
            </div>
          </div>

          {/* Mock dashboard: una salida resuelta y registrada */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div
              aria-hidden
              className="absolute -inset-x-10 -inset-y-6 bg-brand-gradient opacity-20 blur-3xl"
            />
            <div className="glass relative rounded-2xl p-3 shadow-[var(--shadow-glow)] animate-brand-float">
              <div className="rounded-xl bg-card p-5">
                <div className="flex items-center gap-2 border-b pb-3 font-mono text-xs text-muted-foreground">
                  <span className="text-emerald-500">●</span>
                  <span>app.mekovault.com</span>
                  <span className="ml-auto text-[10px] opacity-60">{t("mock.ago")}</span>
                </div>
                <div className="grid gap-4 pt-5 sm:grid-cols-3">
                  <MockStat label={t("mock.acc_active")} value="132" delta="+3" />
                  <MockStat label={t("mock.left_year")} value="18" delta="18/18" />
                  <MockStat label={t("mock.requests_done")} value="214" delta="100 %" />
                </div>
                <div className="mt-5 rounded-lg border bg-muted/40 p-4">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="font-mono font-medium">
                      {t("mock.offboarding_of")} c.rojas@tuempresa.cl
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300">
                      {t("mock.status_completed")}
                    </span>
                  </div>
                  <MockStep label={t("mock.step_1")} />
                  <MockStep label={t("mock.step_2")} />
                  <MockStep label={t("mock.step_3")} />
                  <MockStep label={t("mock.step_4")} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Funciona con */}
      <Section compact className="border-t bg-background/60">
        <Container>
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
            {t("integrations.title")}
          </p>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-muted-foreground">
            <span>Google Workspace</span>
            <span className="text-border">·</span>
            <span>Microsoft 365</span>
            <span className="text-border">·</span>
            <Link
              href="/platforms"
              className="underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground hover:decoration-primary"
            >
              {t("status.soon")}: Slack, Jira, Zoom… →
            </Link>
          </div>
        </Container>
      </Section>

      {/* Problema: la fuga */}
      <Section className="border-t">
        <Container>
          <SectionHeading
            eyebrow={t("problem.eyebrow")}
            title={t("problem.title")}
            desc={t("problem.subtitle")}
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <Reveal delay={0}>
              <ProblemCard icon={<BadgeDollarSign />} title={t("problem.c1.title")} desc={t("problem.c1.desc")} highlight />
            </Reveal>
            <Reveal delay={80}>
              <ProblemCard icon={<FileClock />} title={t("problem.c2.title")} desc={t("problem.c2.desc")} />
            </Reveal>
            <Reveal delay={160}>
              <ProblemCard icon={<EyeOff />} title={t("problem.c3.title")} desc={t("problem.c3.desc")} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Calculadora */}
      <Section id="calculadora" className="relative scroll-mt-20 border-t bg-muted/30">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <Container className="relative">
          <SectionHeading
            eyebrow={t("calc.eyebrow")}
            title={t("calc.title")}
            desc={t("calc.subtitle")}
          />
          <Reveal>
            <div className="mx-auto mt-10 max-w-4xl">
              <LeakCalculator />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Dos servicios: administrar y dejar de pagar */}
      <TwoServicesSection className="border-t" />

      {/* Beneficios */}
      <Section id="beneficios" className="border-t">
        <Container>
          <SectionHeading
            eyebrow={t("benefits.eyebrow")}
            title={t("benefits.title")}
            desc={t("benefits.subtitle")}
          />

          <div className="mt-14 grid gap-4 md:auto-rows-min md:grid-cols-6">
            <Reveal delay={0} className="md:col-span-4 md:row-span-2">
              <FeatureHero
                icon={<Wallet />}
                title={t("benefits.b1.title")}
                desc={t("benefits.b1.desc")}
                flow={[
                  t("benefits.flow.1"),
                  t("benefits.flow.2"),
                  t("benefits.flow.3"),
                  t("benefits.flow.4"),
                ]}
              />
            </Reveal>
            <Reveal delay={80} className="md:col-span-2">
              <Feature icon={<UserPlus />} title={t("benefits.b2.title")} desc={t("benefits.b2.desc")} />
            </Reveal>
            <Reveal delay={160} className="md:col-span-2">
              <Feature icon={<ClipboardCheck />} title={t("benefits.b3.title")} desc={t("benefits.b3.desc")} />
            </Reveal>
            <Reveal delay={240} className="md:col-span-2">
              <Feature icon={<FileClock />} title={t("benefits.b4.title")} desc={t("benefits.b4.desc")} />
            </Reveal>
            <Reveal delay={320} className="md:col-span-2">
              <Feature icon={<Cloud />} title={t("benefits.b5.title")} desc={t("benefits.b5.desc")} />
            </Reveal>
            <Reveal delay={400} className="md:col-span-2">
              <Feature icon={<Smile />} title={t("benefits.b6.title")} desc={t("benefits.b6.desc")} />
            </Reveal>
          </div>

          <Reveal delay={100}>
            <FounderQuote t={t} />
          </Reveal>
        </Container>
      </Section>

      {/* Plataformas con su estado real */}
      <PlatformsSection className="border-t bg-muted/30" />

      {/* Cómo funciona */}
      <Section className="border-t bg-muted/30">
        <Container>
          <SectionHeading
            eyebrow={t("how.eyebrow")}
            title={t("how.title")}
            desc={t("how.subtitle")}
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

      {/* Antes y después */}
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

      {/* Sistemas de personas como aviso opcional */}
      <HrTriggersSection className="border-t bg-muted/30" />

      {/* Módulos */}
      <Section className="border-t">
        <Container>
          <SectionHeading
            eyebrow={t("services.eyebrow")}
            title={t("services.title")}
            desc={t("services.subtitle")}
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon={<UserMinus />}
              status={t("svc.status.available")}
              title={t("svc.workspace.title")}
              official={t("svc.workspace.official")}
              desc={t("svc.workspace.desc")}
              bullets={[t("svc.workspace.b1"), t("svc.workspace.b2"), t("svc.workspace.b3")]}
              featured
            />
            <ServiceCard
              icon={<Ticket />}
              status={t("svc.status.available")}
              title={t("svc.tickets.title")}
              official={t("svc.tickets.official")}
              desc={t("svc.tickets.desc")}
              bullets={[t("svc.tickets.b1"), t("svc.tickets.b2"), t("svc.tickets.b3")]}
            />
            <ServiceCard
              icon={<FileClock />}
              status={t("svc.status.available")}
              title={t("svc.audit.title")}
              official={t("svc.audit.official")}
              desc={t("svc.audit.desc")}
              bullets={[t("svc.audit.b1"), t("svc.audit.b2"), t("svc.audit.b3")]}
            />
          </div>
        </Container>
      </Section>

      {/* Precios (preview) */}
      <Section className="border-t bg-muted/30">
        <Container>
          <SectionHeading
            eyebrow={t("pricing.eyebrow")}
            title={t("pricing.title")}
            desc={t("pricing.subtitle", { price: `${formatCLP(mainAppPrice())} CLP` })}
          />

          <div className="mt-12 flex justify-center">
            <LinkButton href="/pricing" size="lg" variant="outline">
              {t("pricing.cta.viewAll")} <ArrowRight />
            </LinkButton>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
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
                { q: t("faq.it.q"), a: t("faq.it.a") },
                { q: t("faq.security.q"), a: t("faq.security.a") },
                { q: t("faq.leave.q"), a: t("faq.leave.a") },
                { q: t("faq.platforms.q"), a: t("faq.platforms.a") },
                { q: t("faq.licenses.q"), a: t("faq.licenses.a") },
                { q: t("faq.ms.q"), a: t("faq.ms.a") },
                { q: t("faq.setup.q"), a: t("faq.setup.a") },
                { q: t("faq.support.q"), a: t("faq.support.a") },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* CTA final */}
      <Section className="border-t">
        <Container size="narrow">
          <div
            className="relative overflow-hidden rounded-3xl border bg-brand-gradient p-10 text-center text-white sm:p-14"
            style={{ boxShadow: "var(--shadow-glow-cyan)" }}
          >
            <div aria-hidden className="absolute inset-0 grid-lines opacity-20" />
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
                <LinkButton href="/pricing" size="lg" variant="white">
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

function ProblemCard({
  icon,
  title,
  desc,
  highlight = false,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        "group relative h-full overflow-hidden rounded-2xl border p-6 card-lift hover:card-lift-hover " +
        (highlight ? "border-primary/40 bg-primary/5" : "bg-card")
      }
    >
      <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:size-5">
        {icon}
      </div>
      <h3 className={"font-heading text-xl tracking-tight " + (highlight ? "text-brand-gradient" : "")}>
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

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
    <div className="group relative h-full overflow-hidden rounded-2xl border bg-card p-6 card-lift hover:card-lift-hover">
      <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110 [&_svg]:size-5">
        {icon}
      </div>
      <h3 className="font-heading text-xl tracking-tight">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function FeatureHero({
  icon,
  title,
  desc,
  flow,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  flow: string[];
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border bg-card p-8 card-lift hover:card-lift-hover">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-dot opacity-25 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_60%)]" />
      <div className="relative">
        <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[var(--shadow-glow-cyan)] transition-transform group-hover:scale-105 [&_svg]:size-7">
          {icon}
        </div>
        <h3 className="font-heading text-2xl tracking-tight text-brand-gradient sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">{desc}</p>
        <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {flow.map((label, i) => (
            <span key={label} className="contents">
              {i > 0 && <FlowArrow />}
              <FlowChip highlight={i === flow.length - 1}>{label}</FlowChip>
            </span>
          ))}
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
          ? "border border-primary/30 bg-primary/15 text-primary"
          : "border border-border bg-muted/60")
      }
    >
      {children}
    </span>
  );
}

function FlowArrow() {
  return <span aria-hidden className="text-border">→</span>;
}

function FounderQuote({ t }: { t: ReturnType<typeof useT> }) {
  return (
    <div className="relative mt-14 overflow-hidden rounded-2xl border bg-gradient-to-br from-card via-card to-primary/5 p-8 sm:p-12">
      <div aria-hidden className="absolute -right-8 -top-8 size-40 rounded-full bg-brand-gradient opacity-10 blur-3xl" />
      <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
        <div aria-hidden className="hidden h-24 w-1 rounded-full bg-brand-gradient md:block" />
        <div>
          <p className="text-balance font-heading text-xl leading-snug sm:text-2xl">
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

function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="relative rounded-2xl border bg-card p-6 card-lift hover:card-lift-hover">
      <div className="mb-4 inline-flex size-9 items-center justify-center rounded-lg bg-brand-gradient font-mono text-sm font-semibold text-white">
        {n}
      </div>
      <h3 className="font-heading text-xl tracking-tight">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function ServiceCard({
  icon,
  status,
  title,
  official,
  desc,
  bullets,
  featured = false,
}: {
  icon: React.ReactNode;
  status: string;
  title: string;
  official: string;
  desc: string;
  bullets: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border p-6 card-lift hover:card-lift-hover " +
        (featured ? "border-primary/40 bg-card" : "bg-card")
      }
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:size-5">
          {icon}
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-medium text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          {status}
        </span>
      </div>
      <h3 className="font-heading text-xl font-semibold tracking-tight">{title}</h3>
      <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{official}</p>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
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

function TrustDot({ color, label }: { color: "emerald" | "cyan" | "deep"; label: string }) {
  const cls =
    color === "emerald" ? "bg-emerald-500" : color === "cyan" ? "bg-[#00b4d8]" : "bg-[#0077b6]";
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={"size-1.5 rounded-full " + cls} />
      {label}
    </span>
  );
}

function MockStat({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-lg border bg-muted/30 p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="font-heading text-2xl font-semibold tracking-tight">{value}</span>
        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{delta}</span>
      </div>
    </div>
  );
}

function MockStep({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 py-1 text-xs">
      <span className="flex size-4 items-center justify-center rounded-full bg-emerald-500 text-white">
        <svg viewBox="0 0 24 24" className="size-2.5" fill="none" stroke="currentColor" strokeWidth={3.5}>
          <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}
