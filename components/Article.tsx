import { ArrowRight } from "lucide-react";

import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import Link from "@/components/Link";
import { LinkButton } from "@/components/Button";
import { SITE_URL } from "@/lib/i18n/routing";

export type ArticleFaq = { q: string; a: string };
export type ArticleStep = { name: string; text: string };

/**
 * Plantilla de guía (recursos, conectores, ayuda): migas, H1, resumen directo
 * bajo el título (lo que citan las IA), cuerpo en `prose`, llamado a la acción
 * y datos estructurados (Article + BreadcrumbList + FAQPage/HowTo opcionales).
 */
export function Article({
  path,
  title,
  description,
  summary,
  updated,
  readingMinutes,
  crumbs,
  faq,
  steps,
  children,
  related,
  cta,
}: {
  path: string;
  title: string;
  description: string;
  /** Respuesta directa de 2 o 3 frases, en texto plano. */
  summary: string;
  updated: string;
  readingMinutes?: number;
  crumbs: Array<{ href: string; label: string }>;
  faq?: ArticleFaq[];
  steps?: ArticleStep[];
  children: React.ReactNode;
  related?: Array<{ href: string; label: string }>;
  cta?: { title: string; desc: string };
}) {
  const url = `${SITE_URL}${path}`;
  const data: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      inLanguage: "es-CL",
      dateModified: updated,
      datePublished: updated,
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Mekovault", url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [...crumbs, { href: path, label: title }].map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        item: `${SITE_URL}${c.href}`,
      })),
    },
  ];
  if (faq && faq.length) {
    data.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  if (steps && steps.length) {
    data.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: title,
      description: summary,
      step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })),
    });
  }

  const ctaTitle = cta?.title ?? "Esto lo hace Mekovault solo, el mismo día";
  const ctaDesc =
    cta?.desc ??
    "Personas pide la baja o el alta, Mekovault la ejecuta a la hora en Google Workspace y queda la evidencia. Sin IT. Gratis 90 días, sin tarjeta.";

  return (
    <>
      <JsonLd data={data} />
      <Container size="narrow" className="py-12 sm:py-16">
        <nav aria-label="Migas" className="text-[13px] font-semibold text-[#5b7390]">
          <ol className="flex flex-wrap gap-x-2">
            {crumbs.map((c) => (
              <li key={c.href} className="after:ml-2 after:content-['/']">
                <Link href={c.href} className="hover:text-[#03045e]">
                  {c.label}
                </Link>
              </li>
            ))}
            <li aria-current="page" className="text-[#03045e]">
              {crumbs.length ? "" : ""}
              {title.length > 48 ? `${title.slice(0, 48)}…` : title}
            </li>
          </ol>
        </nav>
        <h1 className="mt-6 text-balance text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#03045e] sm:text-[44px]">
          {title}
        </h1>
        <p className="mt-5 text-pretty text-[18px] leading-[1.6] text-[#0a4a73] sm:text-[19px]">{summary}</p>
        <p className="mt-4 text-[13px] font-semibold text-[#5b7390]">
          Actualizado el {formatDate(updated)}
          {readingMinutes ? ` · ${readingMinutes} min de lectura` : ""} · Mekovault
        </p>

        <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-extrabold prose-headings:tracking-[-0.02em] prose-headings:text-[#03045e] prose-h2:mt-12 prose-h2:text-[26px] prose-h3:text-[19px] prose-p:text-[16px] prose-p:leading-[1.7] prose-p:text-[#33507a] prose-li:text-[#33507a] prose-a:font-semibold prose-a:text-[#0077b6] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#03045e] prose-table:text-[15px] prose-th:text-[#03045e]">
          {children}
        </div>

        {faq && faq.length > 0 && (
          <section className="mt-14">
            <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-[#03045e]">Preguntas frecuentes</h2>
            <div className="mt-6 space-y-3">
              {faq.map((f) => (
                <details key={f.q} className="group rounded-[10px] border border-[#dbeaf2] bg-white p-5 open:border-[#c9dde8]">
                  <summary className="cursor-pointer list-none text-[16px] font-bold text-[#03045e]">{f.q}</summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#33507a]">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <aside className="mt-14 rounded-[14px] border border-[#c9dde8] bg-[#f7fbfd] p-7 sm:p-9">
          <p className="text-[22px] font-extrabold tracking-[-0.02em] text-[#03045e]">{ctaTitle}</p>
          <p className="mt-3 text-[16px] leading-[1.6] text-[#33507a]">{ctaDesc}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <LinkButton href="https://app.mekovault.com/signup" external size="md">
              Empieza gratis 90 días
            </LinkButton>
            <Link href="/products" className="inline-flex items-center gap-1.5 text-[15px] font-bold text-[#0077b6] hover:text-[#03045e]">
              Ver cómo funciona <ArrowRight className="size-4" />
            </Link>
          </div>
        </aside>

        {related && related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-[18px] font-extrabold text-[#03045e]">Sigue leyendo</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="flex items-start justify-between gap-3 rounded-[10px] border border-[#dbeaf2] p-4 text-[15px] font-bold text-[#03045e] hover:border-[#0077b6]"
                  >
                    <span>{r.label}</span>
                    <ArrowRight className="mt-0.5 size-4 shrink-0 text-[#0077b6]" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </Container>
    </>
  );
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  return `${d} de ${months[(m ?? 1) - 1]} de ${y}`;
}
