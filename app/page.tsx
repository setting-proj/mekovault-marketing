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
                  <MockStat label={t("mock.acc_active")} value="1,284" delta="+34" />
                  <MockStat label={t("mock.req_today")} value="47" delta="+12" />
                  <MockStat label={t("mock.sla_met")} value="99.9%" delta="30d" />
                </div>
                <div className="mt-5 rounded-lg border bg-muted/40 p-4">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="font-medium">
                      {t("mock.onboarding_of")} maria@empresa.cl
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

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={0}>
              <Feature icon={<Zap />} title={t("features.async.title")} desc={t("features.async.desc")} />
            </Reveal>
            <Reveal delay={60}>
              <Feature icon={<Workflow />} title={t("features.approvals.title")} desc={t("features.approvals.desc")} />
            </Reveal>
            <Reveal delay={120}>
              <Feature icon={<Users />} title={t("features.rbac.title")} desc={t("features.rbac.desc")} />
            </Reveal>
            <Reveal delay={180}>
              <Feature icon={<KeySquare />} title={t("features.vault.title")} desc={t("features.vault.desc")} />
            </Reveal>
            <Reveal delay={240}>
              <Feature icon={<ShieldCheck />} title={t("features.audit.title")} desc={t("features.audit.desc")} />
            </Reveal>
            <Reveal delay={300}>
              <Feature icon={<LineChart />} title={t("features.metrics.title")} desc={t("features.metrics.desc")} />
            </Reveal>
          </div>
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
            <div className="relative">
              <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("cta.title")}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/85">
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
    <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 card-lift hover:card-lift-hover">
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
