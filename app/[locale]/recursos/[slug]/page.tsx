import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Article } from "@/components/Article";
import { CONTENT_BY_LOCALE } from "@/lib/content/recursos/index.generated";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/routing";
import { RESOURCES, RESOURCE_SLUGS, findResource } from "@/lib/resources";
import { pageMetadata } from "@/lib/seo";
import { localeFromParams } from "@/lib/i18n/params";

export const dynamicParams = false;

export function generateStaticParams() {
  return RESOURCE_SLUGS.map((slug) => ({ slug }));
}

/** Variante de la guía para el idioma de la URL, o la base en español de Chile. */
function pick(slug: string, locale: Locale) {
  const variants = CONTENT_BY_LOCALE[slug] ?? {};
  const content = variants[locale] ?? variants[DEFAULT_LOCALE];
  const localized = Boolean(variants[locale]) && locale !== DEFAULT_LOCALE;
  const available = Object.keys(variants) as Locale[];
  return { content, localized, available };
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = findResource(slug);
  if (!r) return {};
  const locale = await localeFromParams(params);
  const { content, localized, available } = pick(slug, locale);
  const meta = localized && content?.meta ? content.meta : { seoTitle: r.seoTitle, description: r.description };
  return pageMetadata({
    locale,
    path: `/recursos/${r.slug}`,
    title: meta.seoTitle,
    description: meta.description,
    type: "article",
    localized,
    availableLocales: available,
  });
}

export default async function ResourcePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const r = findResource(slug);
  const locale = await localeFromParams(params);
  const { content, localized } = pick(slug, locale);
  if (!r || !content) notFound();
  const meta = localized && content.meta ? content.meta : { title: r.title, description: r.description };

  const related = (content.related ?? [])
    .map((s) => {
      const base = RESOURCES.find((x) => x.slug === s);
      if (!base) return null;
      const v = CONTENT_BY_LOCALE[s]?.[locale];
      return { href: `/recursos/${s}`, label: v?.meta?.title ?? base.title };
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <Article
      path={`/recursos/${r.slug}`}
      title={meta.title}
      description={meta.description}
      summary={content.summary}
      updated={r.updated}
      readingMinutes={r.readingMinutes}
      crumbs={[
        { href: "/", label: "Inicio" },
        { href: "/recursos", label: "Guías" },
      ]}
      faq={content.faq}
      steps={content.steps}
      related={related}
      cta={content.cta}
      locale={locale}
    >
      <content.Body />
    </Article>
  );
}
