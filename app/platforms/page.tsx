"use client";

/**
 * /platforms: qué plataformas administra Mekovault y cómo resuelve cada una.
 * Los estados salen de `lib/platforms.ts`: nada aparece como conectado si no lo está.
 */

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/Container";
import { ArrowLink, LinkButton } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { MiniAppsPicker } from "@/components/MiniAppsPicker";
import { EyebrowBadge, Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { HrTriggersSection, PlatformsSection } from "@/components/ServiceModel";
import { PlatformsPanel } from "@/components/panels/PlatformsPanel";
import { useI18n } from "@/lib/i18n/I18nProvider";
import type { TranslationKey } from "@/lib/i18n/dictionaries";

/** Preguntas con la palabra "control de aplicaciones" (plan 8.4). */
const FAQ: Array<[TranslationKey, TranslationKey]> = [
  ["pf.faq.1.q", "pf.faq.1.a"],
  ["pf.faq.2.q", "pf.faq.2.a"],
  ["pf.faq.3.q", "pf.faq.3.a"],
  ["pf.faq.4.q", "pf.faq.4.a"],
];

export default function PlatformsPage() {
  const { t, locale } = useI18n();
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: FAQ.map(([q, a]) => ({
      "@type": "Question",
      name: t(q),
      acceptedAnswer: { "@type": "Answer", text: t(a) },
    })),
  };
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

      {/* Aplicaciones con acceso a las cuentas (shadow IT) */}
      <Section className="border-b border-[#dbeaf2]">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-16">
          <SectionHeading eyebrow={t("pf.apps.eyebrow")} title={t("pf.apps.title")} />
          <div className="flex flex-col gap-5">
            <p className="text-[17px] leading-relaxed text-[#33507a]">{t("pf.apps.desc")}</p>
            <ArrowLink href="/recursos/aplicaciones-vinculadas" tone="blue" className="text-base">
              {t("pf.apps.link")}
            </ArrowLink>
          </div>
        </Container>
      </Section>

      {/* Mini apps y paquetes */}
      <Section id="mini-apps" tone="panel" className="scroll-mt-20 border-b border-[#dbeaf2]">
        <Container size="wide">
          <SectionHeading eyebrow={t("apps.eyebrow")} title={t("apps.title")} desc={t("apps.desc")} />
          <div className="mt-10">
            <MiniAppsPicker />
          </div>
        </Container>
      </Section>

      {/* Preguntas: control de aplicaciones */}
      <Section className="border-b border-[#dbeaf2]">
        <Container>
          <JsonLd data={faqLd} />
          <SectionHeading eyebrow={t("pf.faq.eyebrow")} title={t("pf.faq.title")} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {FAQ.map(([q, a]) => (
              <div key={q} className="rounded-[12px] border border-[#c9dde8] bg-white p-5 sm:p-6">
                <h3 className="text-[17px] font-extrabold tracking-[-0.01em] text-[#03045e]">{t(q)}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#33507a]">{t(a)}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

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
