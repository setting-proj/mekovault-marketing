import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Article } from "@/components/Article";
import Link from "@/components/Link";
import { UPCOMING_PLATFORMS } from "@/lib/resources";
import { pageMetadata } from "@/lib/seo";
import { localeFromParams } from "@/lib/i18n/params";

export const dynamicParams = false;

export function generateStaticParams() {
  return UPCOMING_PLATFORMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = UPCOMING_PLATFORMS.find((x) => x.slug === slug);
  if (!p) return {};
  const locale = await localeFromParams(params);
  return pageMetadata({
    locale,
    path: `/plataformas/${p.slug}`,
    title: p.seoTitle,
    description: p.description,
    type: "article",
    localized: false,
  });
}

/**
 * Páginas de plataformas en preparación (Microsoft 365, Slack, Zoom): dicen
 * con claridad qué va a hacer el conector y que todavía no está; captan la
 * demanda sin prometer nada. Nunca "disponible hoy".
 */
export default async function UpcomingPlatformPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const p = UPCOMING_PLATFORMS.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <Article
      path={`/plataformas/${p.slug}`}
      title={p.title}
      description={p.description}
      summary={p.summary}
      updated="2026-10-11"
      readingMinutes={4}
      crumbs={[
        { href: "/", label: "Inicio" },
        { href: "/platforms", label: "Plataformas" },
      ]}
      faq={[...p.faq]}
      related={[...p.related]}
      cta={{
        title: `Avísame cuando ${p.name} esté`,
        desc: "Escríbenos a cloud@mekovault.com con el nombre de tu empresa y cuántas personas usan la plataforma. Te avisamos cuando el conector esté en producción y, mientras tanto, te mostramos cómo queda como tarea guiada.",
      }}
    >
      <h2>Qué va a hacer el conector</h2>
      <ol>
        {p.willDo.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ol>

      <h2>Qué pasa hoy, mientras no está</h2>
      <p>{p.today}</p>

      <h2>Por qué en este orden</h2>
      <p>{p.why}</p>
      <p>
        Las plataformas que ya funcionan y las que se suman están en <Link href="/platforms">Plataformas</Link>; lo que
        hace Mekovault con cada cuenta, en <Link href="/account-governance">Gobierno de cuentas</Link>.
      </p>
    </Article>
  );
}
