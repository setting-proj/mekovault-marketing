"use client";

/**
 * Secciones que explican el servicio (modelo 2026-09): dos servicios,
 * plataformas con su estado real y sistemas de personas opcionales.
 * Se usan en /products y /platforms. Los estados salen de `lib/platforms.ts`:
 * nada se muestra como conectado si no lo está.
 */

import { Check } from "lucide-react";

import { Container } from "@/components/Container";
import { ArrowLink } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n/I18nProvider";
import { HR_SOURCES, PLATFORMS, type PlatformStatus } from "@/lib/platforms";

const STATUS_KEY = {
  today: "status.today",
  soon: "status.soon",
  guided: "status.guided",
} as const;

const STATUS_STYLE: Record<PlatformStatus, { pill: string; chip: string }> = {
  today: {
    pill: "bg-[#dcfce7] text-[#166534]",
    chip: "border-[#c9dde8] bg-white text-[#03045e]",
  },
  soon: {
    pill: "bg-[#eaf6fb] text-[#33507a]",
    chip: "border-dashed border-[#c9dde8] bg-white text-[#33507a]",
  },
  guided: {
    pill: "bg-[#eaf6fb] text-[#33507a]",
    chip: "border-dashed border-[#c9dde8] bg-transparent text-[#5b7390]",
  },
};

export function StatusPill({ status }: { status: PlatformStatus }) {
  const t = useT();
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold", STATUS_STYLE[status].pill)}>
      {t(STATUS_KEY[status])}
    </span>
  );
}

export function TwoServicesSection({ className }: { className?: string }) {
  const t = useT();
  const cards = [
    {
      status: "today" as const,
      title: t("two.a.title"),
      desc: t("two.a.desc"),
      bullets: [t("two.a.b1"), t("two.a.b2"), t("two.a.b3")],
      href: "/platforms",
    },
    {
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
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {cards.map((c) => (
            <div key={c.title} className="flex flex-col rounded-[12px] border border-[#c9dde8] bg-white p-6 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[22px] font-extrabold tracking-[-0.02em] text-[#03045e]">{c.title}</h3>
                <StatusPill status={c.status} />
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-[#33507a]">{c.desc}</p>
              <ul className="mt-5 space-y-2 text-[15px] text-[#03045e]">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-[18px] shrink-0 text-[#00b4d8]" strokeWidth={2.4} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ArrowLink href={c.href} tone="blue" className="text-[15px]">
                  {t("common.learn_more")}
                </ArrowLink>
              </div>
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
        <SectionHeading eyebrow={t("platforms.eyebrow")} title={t("platforms.title")} desc={t("platforms.subtitle")} />
        <div className="mt-12 space-y-8">
          {groups.map((g) => (
            <div key={g} className="grid gap-4 lg:grid-cols-[200px_minmax(0,1fr)]">
              <div>
                <StatusPill status={g} />
              </div>
              <ul className="flex flex-wrap gap-2">
                {PLATFORMS.filter((p) => p.status === g).map((p) => (
                  <li key={p.name} className={cn("rounded-lg border px-3.5 py-2 text-sm font-semibold", STATUS_STYLE[g].chip)}>
                    {p.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-xs font-semibold text-[#5b7390]">{t("platforms.note")}</p>
        </div>
      </Container>
    </Section>
  );
}

export function HrTriggersSection({ className }: { className?: string }) {
  const t = useT();
  const modes = [
    { n: 1, title: t("hr.m1.title"), desc: t("hr.m1.desc") },
    { n: 2, title: t("hr.m2.title"), desc: t("hr.m2.desc"), featured: true },
    { n: 3, title: t("hr.m3.title"), desc: t("hr.m3.desc") },
  ];
  return (
    <Section className={className}>
      <Container>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-16">
          <div>
            <SectionHeading eyebrow={t("hr.eyebrow")} title={t("hr.title")} desc={t("hr.subtitle")} />
            <p className="mt-8 text-xs font-bold text-[#5b7390]">{t("platforms.group.hr")}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {HR_SOURCES.map((s) => (
                <span key={s.name} className="rounded-lg border border-dashed border-[#c9dde8] bg-white px-3.5 py-2 text-sm font-semibold text-[#33507a]">
                  {s.name}
                </span>
              ))}
              <StatusPill status="soon" />
            </div>
            <p className="mt-6 text-sm text-[#5b7390]">{t("hr.note")}</p>
          </div>
          <div className="flex flex-col gap-3">
            {modes.map((m) => (
              <div
                key={m.title}
                className={cn(
                  "flex gap-4 rounded-[12px] border bg-white p-5",
                  m.featured ? "border-[#0077b6]" : "border-[#c9dde8]",
                )}
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#03045e] text-xs font-extrabold text-white">
                  {m.n}
                </span>
                <div>
                  <h3 className="text-[17px] font-extrabold tracking-[-0.01em] text-[#03045e]">{m.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[#33507a]">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
