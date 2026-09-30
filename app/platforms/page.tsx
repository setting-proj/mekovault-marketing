"use client";

/**
 * /platforms: qué plataformas administra Mekovault y cómo resuelve cada una.
 * Los estados salen de `lib/platforms.ts`: nada aparece como conectado si no lo está.
 */

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { EyebrowBadge, Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { HrTriggersSection, PlatformsSection } from "@/components/ServiceModel";
import { PlatformsPanel } from "@/components/panels/PlatformsPanel";
import { useT } from "@/lib/i18n/I18nProvider";

export default function PlatformsPage() {
  const t = useT();
  const HOW = [
    { n: 1, title: t("pf.how.auto.title"), desc: t("pf.how.auto.desc") },
    { n: 2, title: t("pf.how.guided.title"), desc: t("pf.how.guided.desc") },
    { n: 3, title: t("pf.how.any.title"), desc: t("pf.how.any.desc") },
  ];

  return (
    <>
      {/* Hero: texto + pantalla de Plataformas */}
      <section className="border-b border-[#dbeaf2] bg-white">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <EyebrowBadge>{t("pf.eyebrow")}</EyebrowBadge>
            <h1 className="text-balance text-[36px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#03045e] sm:text-[48px]">
              {t("pf.title.pre")} <span className="text-[#0077b6]">{t("pf.title.hl")}</span>
            </h1>
            <p className="text-pretty text-[17px] leading-[1.6] text-[#33507a] sm:text-[19px]">{t("pf.subtitle")}</p>
          </div>
          <Reveal>
            <PlatformsPanel />
          </Reveal>
        </Container>
      </section>

      <PlatformsSection className="border-b border-[#dbeaf2]" />

      {/* Cómo lo resolvemos */}
      <Section tone="panel" className="border-b border-[#dbeaf2]">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-16">
          <SectionHeading eyebrow={t("pf.how.eyebrow")} title={t("pf.how.title")} />
          <div className="flex flex-col gap-3">
            {HOW.map((h) => (
              <div key={h.title} className="flex gap-4 rounded-[12px] border border-[#c9dde8] bg-white p-5 sm:p-6">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#03045e] text-xs font-extrabold text-white">
                  {h.n}
                </span>
                <div>
                  <h3 className="text-[18px] font-extrabold tracking-[-0.01em] text-[#03045e]">{h.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[#33507a]">{h.desc}</p>
                </div>
              </div>
            ))}
            <div className="rounded-[12px] border border-dashed border-[#c9dde8] p-5 sm:p-6">
              <h3 className="text-[16px] font-extrabold text-[#03045e]">{t("pf.never.title")}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[#33507a]">{t("pf.never.desc")}</p>
            </div>
          </div>
        </Container>
      </Section>

      <HrTriggersSection className="border-b border-[#dbeaf2]" />

      {/* Llamado final */}
      <Section>
        <Container size="narrow" className="text-center">
          <h2 className="text-balance text-[30px] font-extrabold tracking-[-0.025em] text-[#03045e] sm:text-[36px]">{t("pf.cta.title")}</h2>
          <p className="mt-3 text-[17px] text-[#33507a]">{t("pf.cta.subtitle")}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <LinkButton href="/contact" size="lg">
              {t("pf.cta.contact")} <ArrowRight />
            </LinkButton>
            <LinkButton href="/license-control" size="lg" variant="outline">
              {t("pf.cta.license")}
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
