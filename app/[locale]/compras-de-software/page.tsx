import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { LinkButton } from "@/components/Button";
import { EyebrowBadge, Section, SectionHeading } from "@/components/Section";
import { dictionaries, type TranslationKey } from "@/lib/i18n/dictionaries";
import { SITE_URL, absoluteUrl } from "@/lib/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import { localeFromParams, type LocaleParams } from "@/lib/i18n/params";

/**
 * /compras-de-software: el sistema de compras de software (addon super-compras)
 * contado con las palabras que la gente busca (Semrush 2026-10-11, plan 1.10):
 * "sistema de compras", "control de gastos", "administrar suscripciones",
 * "inventario de software". No se promete nada que no exista: el módulo
 * funciona en el portal y se activa desde ahí.
 */

const PATH = "/compras-de-software";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await localeFromParams(params);
  const dict = dictionaries[locale];
  return pageMetadata({
    locale,
    path: PATH,
    title: dict["seo.compras.title"],
    description: dict["seo.compras.description"],
  });
}

const STEPS: Array<[TranslationKey, TranslationKey]> = [
  ["compras.s1.title", "compras.s1.desc"],
  ["compras.s2.title", "compras.s2.desc"],
  ["compras.s3.title", "compras.s3.desc"],
  ["compras.s4.title", "compras.s4.desc"],
  ["compras.s5.title", "compras.s5.desc"],
];

const WORDS: Array<[TranslationKey, TranslationKey]> = [
  ["compras.w1.title", "compras.w1.desc"],
  ["compras.w2.title", "compras.w2.desc"],
  ["compras.w3.title", "compras.w3.desc"],
  ["compras.w4.title", "compras.w4.desc"],
];

const FAQ: Array<[TranslationKey, TranslationKey]> = [
  ["compras.faq.1.q", "compras.faq.1.a"],
  ["compras.faq.2.q", "compras.faq.2.a"],
  ["compras.faq.3.q", "compras.faq.3.a"],
  ["compras.faq.4.q", "compras.faq.4.a"],
  ["compras.faq.5.q", "compras.faq.5.a"],
  ["compras.faq.6.q", "compras.faq.6.a"],
];

export default async function ComprasPage({ params }: { params: LocaleParams }) {
  const locale = await localeFromParams(params);
  const t = (k: TranslationKey) => dictionaries[locale][k];
  const url = absoluteUrl(locale, PATH);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: locale,
      mainEntity: FAQ.map(([q, a]) => ({
        "@type": "Question",
        name: t(q),
        acceptedAnswer: { "@type": "Answer", text: t(a) },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      inLanguage: locale,
      name: t("compras.steps.title"),
      step: STEPS.map(([title, text], i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: t(title),
        text: t(text),
        url: `${url}#paso-${i + 1}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Mekovault", item: absoluteUrl(locale, "/") },
        { "@type": "ListItem", position: 2, name: t("compras.eyebrow"), item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Mekovault Compras de software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: locale,
      description: t("seo.compras.description"),
      url,
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: { "@type": "Offer", price: "24900", priceCurrency: "CLP", url: `${SITE_URL}/pricing` },
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="border-b border-[#dbeaf2] bg-white">
        <Container className="flex flex-col gap-6 py-14 sm:py-20">
          <EyebrowBadge>{t("compras.eyebrow")}</EyebrowBadge>
          <h1 className="max-w-4xl text-balance text-[36px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#03045e] sm:text-[48px]">
            {t("compras.title.pre")} <span className="text-[#0077b6]">{t("compras.title.hl")}</span>
          </h1>
          <p className="max-w-3xl text-pretty text-[17px] leading-[1.6] text-[#33507a] sm:text-[19px]">{t("compras.subtitle")}</p>
          <div className="flex flex-wrap gap-3">
            <LinkButton href="https://app.mekovault.com/signup" external size="lg">
              {t("compras.cta.signup")} <ArrowRight />
            </LinkButton>
            <LinkButton href="/pricing" size="lg" variant="outline">
              {t("compras.cta.pricing")}
            </LinkButton>
          </div>
        </Container>
      </section>

      {/* Cinco pasos */}
      <Section tone="panel" className="border-b border-[#dbeaf2]">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-16">
          <SectionHeading eyebrow={t("compras.steps.eyebrow")} title={t("compras.steps.title")} desc={t("compras.roles.list")} />
          <ol className="divide-y divide-[#dbeaf2] rounded-[12px] border border-[#c9dde8] bg-white">
            {STEPS.map(([title, desc], i) => (
              <li key={title} id={`paso-${i + 1}`} className="grid gap-2 p-5 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-6 sm:p-6">
                <h3 className="flex items-baseline gap-3 text-[18px] font-extrabold tracking-[-0.01em] text-[#03045e]">
                  <span className="text-xs font-bold text-[#0077b6]">0{i + 1}</span>
                  {t(title)}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#33507a]">{t(desc)}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Con las palabras de tu empresa */}
      <Section className="border-b border-[#dbeaf2]">
        <Container>
          <SectionHeading eyebrow={t("compras.words.eyebrow")} title={t("compras.words.title")} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {WORDS.map(([title, desc]) => (
              <div key={title} className="rounded-[12px] border border-[#c9dde8] bg-white p-5 sm:p-6">
                <h3 className="text-[18px] font-extrabold tracking-[-0.01em] text-[#03045e]">{t(title)}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#33507a]">{t(desc)}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Preguntas */}
      <Section tone="panel" className="border-b border-[#dbeaf2]">
        <Container>
          <SectionHeading eyebrow={t("compras.faq.eyebrow")} title={t("compras.faq.title")} />
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
          <h2 className="text-balance text-[30px] font-extrabold tracking-[-0.025em] text-[#03045e] sm:text-[36px]">{t("compras.cta.title")}</h2>
          <p className="mt-3 text-[17px] text-[#33507a]">{t("compras.cta.subtitle")}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <LinkButton href="https://app.mekovault.com/signup" external size="lg">
              {t("compras.cta.signup")} <ArrowRight />
            </LinkButton>
            <LinkButton href="/license-control" size="lg" variant="outline">
              {t("compras.cta.licenses")}
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
