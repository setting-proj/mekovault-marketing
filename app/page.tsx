import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { detectLocaleServer } from "@/lib/i18n/detectLocale.server";
import { dictionaries, type TranslationKey } from "@/lib/i18n/dictionaries";
import { pageMetadata } from "@/lib/seo";

import { HomeView } from "./HomeView";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await detectLocaleServer();
  const dict = dictionaries[locale];
  return pageMetadata({
    locale,
    path: "/",
    title: dict["seo.home.title"],
    description: dict["seo.home.description"],
  });
}

/** Las 8 preguntas del inicio, para que Google y las IA las lean como FAQPage. */
const FAQ_KEYS: Array<[TranslationKey, TranslationKey]> = [
  ["faq.free.q", "faq.free.a"],
  ["faq.it.q", "faq.it.a"],
  ["faq.security.q", "faq.security.a"],
  ["faq.leave.q", "faq.leave.a"],
  ["faq.platforms.q", "faq.platforms.a"],
  ["faq.licenses.q", "faq.licenses.a"],
  ["faq.other.q", "faq.other.a"],
  ["faq.setup.q", "faq.setup.a"],
  ["faq.support.q", "faq.support.a"],
];

export default async function Home() {
  const locale = await detectLocaleServer();
  const dict = dictionaries[locale];
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: FAQ_KEYS.map(([q, a]) => ({
      "@type": "Question",
      name: dict[q],
      acceptedAnswer: { "@type": "Answer", text: dict[a] },
    })),
  };
  return (
    <>
      <JsonLd data={faq} />
      <HomeView />
    </>
  );
}
