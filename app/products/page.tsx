"use client";

import {
  ArrowRight,
  Check,
  ClipboardCheck,
  FileClock,
  KeyRound,
  Ticket,
  UserMinus,
  UserPlus,
} from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { useT } from "@/lib/i18n/I18nProvider";

export default function ProductsPage() {
  const t = useT();

  const CAPABILITIES = [
    { icon: <UserPlus />, title: t("products.cap.1.title"), desc: t("products.cap.1.desc") },
    { icon: <UserMinus />, title: t("products.cap.2.title"), desc: t("products.cap.2.desc") },
    { icon: <ClipboardCheck />, title: t("products.cap.3.title"), desc: t("products.cap.3.desc") },
    { icon: <KeyRound />, title: t("products.cap.4.title"), desc: t("products.cap.4.desc") },
    { icon: <FileClock />, title: t("products.cap.5.title"), desc: t("products.cap.5.desc") },
  ];

  const ADDONS = [
    {
      icon: <UserMinus />,
      title: t("svc.workspace.title"),
      official: t("svc.workspace.official"),
      desc: t("svc.workspace.desc"),
      bullets: [t("svc.workspace.b1"), t("svc.workspace.b2"), t("svc.workspace.b3")],
      featured: true,
    },
    {
      icon: <Ticket />,
      title: t("svc.tickets.title"),
      official: t("svc.tickets.official"),
      desc: t("svc.tickets.desc"),
      bullets: [t("svc.tickets.b1"), t("svc.tickets.b2"), t("svc.tickets.b3")],
      featured: false,
    },
    {
      icon: <FileClock />,
      title: t("svc.audit.title"),
      official: t("svc.audit.official"),
      desc: t("svc.audit.desc"),
      bullets: [t("svc.audit.b1"), t("svc.audit.b2"), t("svc.audit.b3")],
      featured: false,
    },
  ];

  return (
    <>
      <Section compact>
        <Container>
          <SectionHeading
            eyebrow={t("products.eyebrow")}
            title={
              <>
                {t("products.title.pre")}{" "}
                <span className="text-brand-gradient">{t("products.title.hl")}</span>
              </>
            }
            desc={t("products.subtitle")}
          />
        </Container>
      </Section>

      {/* Qué hace por tu empresa */}
      <Section compact className="border-t">
        <Container>
          <SectionHeading eyebrow={t("products.cap.eyebrow")} title={t("products.cap.title")} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="h-full rounded-2xl border bg-card p-5 card-lift hover:card-lift-hover">
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:size-5">
                    {c.icon}
                  </div>
                  <h3 className="font-heading text-lg tracking-tight">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Una salida de principio a fin */}
      <Section className="border-t bg-muted/30">
        <Container>
          <SectionHeading
            eyebrow={t("workflow.eyebrow")}
            title={t("workflow.title")}
            desc={t("workflow.subtitle")}
          />
          <Reveal>
            <div className="mt-10">
              <WorkflowDiagram />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Módulos */}
      <Section className="border-t">
        <Container>
          <SectionHeading
            eyebrow={t("products.addons.eyebrow")}
            title={t("products.addons.title")}
            desc={t("products.addons.subtitle")}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ADDONS.map((s) => (
              <AddonCard key={s.title} {...s} status={t("svc.status.available")} />
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
          <p className="mt-3 text-muted-foreground">{t("products.cta.subtitle")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LinkButton href="https://app.mekovault.com/signup" external size="lg">
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

function AddonCard({
  icon,
  status,
  title,
  official,
  desc,
  bullets,
  featured,
}: {
  icon: React.ReactNode;
  status: string;
  title: string;
  official: string;
  desc: string;
  bullets: string[];
  featured: boolean;
}) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:border-primary/40 " +
        (featured ? "border-primary/40" : "")
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
      <h3 className="font-heading text-lg font-semibold tracking-tight">{title}</h3>
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
