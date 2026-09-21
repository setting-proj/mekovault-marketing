"use client";

/**
 * Secciones que explican el servicio (modelo 2026-09): dos servicios,
 * plataformas con su estado real y sistemas de personas opcionales.
 * Se usan en la portada y en /products. Los estados salen de `lib/platforms.ts`:
 * nada se muestra como disponible si no lo está.
 */

import Link from "next/link";
import { ArrowRight, BellRing, CalendarClock, Check, ClipboardCheck, Users, Wallet } from "lucide-react";

import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n/I18nProvider";
import { HR_SOURCES, PLATFORMS, type PlatformStatus } from "@/lib/platforms";

const STATUS_KEY = {
  today: "status.today",
  soon: "status.soon",
  guided: "status.guided",
} as const;

const STATUS_STYLE: Record<PlatformStatus, { pill: string; dot: string; chip: string }> = {
  today: {
    pill: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300",
    dot: "bg-emerald-500",
    chip: "border-emerald-500/40 bg-emerald-500/5 text-foreground",
  },
  soon: {
    pill: "bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300",
    dot: "bg-sky-500",
    chip: "bg-card text-foreground",
  },
  guided: {
    pill: "bg-muted text-muted-foreground",
    dot: "bg-muted-foreground/60",
    chip: "border-dashed bg-transparent text-muted-foreground",
  },
};

function StatusPill({ status }: { status: PlatformStatus }) {
  const t = useT();
  const s = STATUS_STYLE[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium", s.pill)}>
      <span className={cn("size-1.5 rounded-full", s.dot)} />
      {t(STATUS_KEY[status])}
    </span>
  );
}

export function TwoServicesSection({ className }: { className?: string }) {
  const t = useT();
  const cards = [
    {
      icon: <Users />,
      status: "today" as const,
      title: t("two.a.title"),
      desc: t("two.a.desc"),
      bullets: [t("two.a.b1"), t("two.a.b2"), t("two.a.b3")],
      href: "/platforms",
    },
    {
      icon: <Wallet />,
      status: "soon" as const,
      title: t("two.b.title"),
      desc: t("two.b.desc"),
      bullets: [t("two.b.b1"), t("two.b.b2"), t("two.b.b3")],
      href: "/license-control",
    },
  ];
  return (
    <Section className={className}>
      <Container>
        <SectionHeading eyebrow={t("two.eyebrow")} title={t("two.title")} desc={t("two.subtitle")} />
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border bg-card p-6 card-lift hover:card-lift-hover">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:size-5">
                  {c.icon}
                </div>
                <StatusPill status={c.status} />
              </div>
              <h3 className="font-heading text-xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={c.href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                {t("common.learn_more")} <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function PlatformsSection({ className }: { className?: string }) {
  const t = useT();
  const groups: PlatformStatus[] = ["today", "soon", "guided"];
  return (
    <Section id="plataformas" className={cn("scroll-mt-20", className)}>
      <Container>
        <SectionHeading
          eyebrow={t("platforms.eyebrow")}
          title={t("platforms.title")}
          desc={t("platforms.subtitle")}
        />
        <div className="mx-auto mt-12 max-w-4xl space-y-8">
          {groups.map((g) => (
            <div key={g}>
              <div className="mb-3">
                <StatusPill status={g} />
              </div>
              <ul className="flex flex-wrap gap-2">
                {PLATFORMS.filter((p) => p.status === g).map((p) => (
                  <li
                    key={p.name}
                    className={cn("rounded-full border px-3.5 py-1.5 text-sm font-medium", STATUS_STYLE[g].chip)}
                  >
                    {p.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-xs text-muted-foreground">{t("platforms.note")}</p>
        </div>
      </Container>
    </Section>
  );
}

export function HrTriggersSection({ className }: { className?: string }) {
  const t = useT();
  const modes = [
    { icon: <BellRing />, title: t("hr.m1.title"), desc: t("hr.m1.desc") },
    { icon: <ClipboardCheck />, title: t("hr.m2.title"), desc: t("hr.m2.desc"), featured: true },
    { icon: <CalendarClock />, title: t("hr.m3.title"), desc: t("hr.m3.desc") },
  ];
  return (
    <Section className={className}>
      <Container>
        <SectionHeading eyebrow={t("hr.eyebrow")} title={t("hr.title")} desc={t("hr.subtitle")} />
        <p className="mt-8 text-center text-xs uppercase tracking-widest text-muted-foreground">
          {t("platforms.group.hr")}
        </p>
        <div className="mx-auto mt-3 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {HR_SOURCES.map((s) => (
            <span key={s.name} className="rounded-full border bg-card px-3.5 py-1.5 text-sm font-medium">
              {s.name}
            </span>
          ))}
          <StatusPill status="soon" />
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {modes.map((m) => (
            <div
              key={m.title}
              className={cn("rounded-2xl border bg-card p-5", m.featured && "border-primary/40")}
            >
              <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:size-5">
                {m.icon}
              </div>
              <h3 className="font-heading text-base font-semibold tracking-tight">{m.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">{t("hr.note")}</p>
      </Container>
    </Section>
  );
}
