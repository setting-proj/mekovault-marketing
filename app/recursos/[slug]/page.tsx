import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Article } from "@/components/Article";
import { CONTENT } from "@/lib/content/recursos";
import { detectLocaleServer } from "@/lib/i18n/detectLocale.server";
import { RESOURCES, RESOURCE_SLUGS, findResource } from "@/lib/resources";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return RESOURCE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = findResource(slug);
  if (!r) return {};
  const locale = await detectLocaleServer();
  return pageMetadata({
    locale,
    path: `/recursos/${r.slug}`,
    title: r.seoTitle,
    description: r.description,
    type: "article",
    localized: false,
  });
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = findResource(slug);
  const content = CONTENT[slug];
  if (!r || !content) notFound();

  const related = (content.related ?? [])
    .map((s) => RESOURCES.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x))
    .map((x) => ({ href: `/recursos/${x.slug}`, label: x.title }));

  return (
    <Article
      path={`/recursos/${r.slug}`}
      title={r.title}
      description={r.description}
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
    >
      <content.Body />
    </Article>
  );
}
