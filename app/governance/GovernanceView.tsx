"use client";

/**
 * Vista de /governance. Componente cliente porque necesita el locale del
 * provider; la metadata vive en page.tsx (server).
 *
 * El contenido viene de lib/i18n/governance.ts (diccionario propio de esta
 * página). Si el provider del sitio no está montado o cambia de forma, la
 * página cae a es-CL sin romperse.
 */

import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { EyebrowBadge } from "@/components/Section";
import { useI18n } from "@/lib/i18n/I18nProvider";
import {
  getGovernanceContent,
  type GovBlock,
  type GovDiagramLabels,
  type GovTable,
  type GovernanceContent,
} from "@/lib/i18n/governance";

// ---------------------------------------------------------------------------
// Locale seguro
// ---------------------------------------------------------------------------

function useGovernanceContent(): GovernanceContent {
  let raw: unknown = undefined;
  try {
    // useI18n lanza si no hay provider; el hook subyacente (useContext) se
    // llama igual en cada render, así que el orden de hooks no cambia.
    const ctx = useI18n() as unknown;
    if (ctx && typeof ctx === "object" && "locale" in ctx) {
      raw = (ctx as { locale?: unknown }).locale;
    }
  } catch {
    raw = undefined;
  }
  return getGovernanceContent(raw);
}

// ---------------------------------------------------------------------------
// Inline: `código` → <code>
// ---------------------------------------------------------------------------

function Inline({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("`") && part.endsWith("`") && part.length > 2 ? (
          <code
            key={i}
            className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground"
          >
            {part.slice(1, -1)}
          </code>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

// ---------------------------------------------------------------------------
// Tabla
// ---------------------------------------------------------------------------

function Table({ table }: { table: GovTable }) {
  return (
    <figure className="my-6">
      <div className="overflow-x-auto rounded-xl border bg-card">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead className="bg-muted/60">
            <tr>
              {table.head.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, r) => (
              <tr key={r} className="border-t align-top">
                {row.map((cell, c) => (
                  <td
                    key={c}
                    className={
                      c === 0
                        ? "px-4 py-3 font-medium text-foreground"
                        : "px-4 py-3 leading-relaxed text-muted-foreground"
                    }
                  >
                    <Inline text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.caption && (
        <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {table.caption}
        </figcaption>
      )}
    </figure>
  );
}

// ---------------------------------------------------------------------------
// Diagrama de topología (SVG inline)
// ---------------------------------------------------------------------------

function Box({
  x,
  y,
  w,
  h,
  title,
  sub,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        className={
          accent
            ? "fill-card stroke-primary"
            : "fill-card stroke-border"
        }
        strokeWidth={accent ? 2 : 1.5}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 6 : y + h / 2 + 4}
        textAnchor="middle"
        fontSize={13}
        fontWeight={600}
        className="fill-foreground"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {title}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 12}
          textAnchor="middle"
          fontSize={10.5}
          className="fill-muted-foreground"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function TopologyDiagram({ labels }: { labels: GovDiagramLabels }) {
  return (
    <figure className="my-8">
      <div className="overflow-x-auto rounded-xl border bg-card p-4">
        <svg
          viewBox="0 0 800 380"
          role="img"
          aria-label={labels.caption}
          className="mx-auto block min-w-[640px] max-w-[800px]"
        >
          <defs>
            <marker
              id="gov-arrow"
              viewBox="0 0 10 10"
              refX={9}
              refY={5}
              markerWidth={7}
              markerHeight={7}
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" className="fill-muted-foreground" />
            </marker>
          </defs>

          {/* Internet y Cloudflare */}
          <Box x={40} y={40} w={160} h={44} title={labels.internet} />
          <Box x={40} y={124} w={160} h={44} title={labels.cloudflare} />
          <line
            x1={120}
            y1={84}
            x2={120}
            y2={124}
            className="stroke-muted-foreground"
            strokeWidth={1.5}
            markerEnd="url(#gov-arrow)"
          />

          {/* App (único punto expuesto) */}
          <text
            x={390}
            y={78}
            textAnchor="middle"
            fontSize={10.5}
            className="fill-primary"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}
          >
            {labels.publicEdge.toUpperCase()}
          </text>
          <Box
            x={290}
            y={90}
            w={200}
            h={70}
            title={labels.app}
            sub={labels.appSub}
            accent
          />
          <line
            x1={200}
            y1={146}
            x2={290}
            y2={130}
            className="stroke-muted-foreground"
            strokeWidth={1.5}
            markerEnd="url(#gov-arrow)"
          />
          <text
            x={240}
            y={128}
            textAnchor="middle"
            fontSize={10}
            className="fill-muted-foreground"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            80/443
          </text>

          {/* Red privada */}
          <rect
            x={250}
            y={220}
            width={530}
            height={130}
            rx={14}
            className="fill-none stroke-border"
            strokeWidth={1.5}
            strokeDasharray="6 5"
          />
          <text
            x={266}
            y={240}
            fontSize={10.5}
            className="fill-muted-foreground"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}
          >
            {labels.privateNet.toUpperCase()}
          </text>
          <Box x={270} y={258} w={150} h={64} title={labels.data} sub={labels.dataSub} />
          <Box x={445} y={258} w={150} h={64} title={labels.vault} sub={labels.vaultSub} />
          <Box x={620} y={258} w={150} h={64} title={labels.obs} sub={labels.obsSub} />

          {/* App → servicios internos */}
          <line
            x1={370}
            y1={160}
            x2={345}
            y2={258}
            className="stroke-muted-foreground"
            strokeWidth={1.5}
            markerEnd="url(#gov-arrow)"
          />
          <line
            x1={410}
            y1={160}
            x2={520}
            y2={258}
            className="stroke-muted-foreground"
            strokeWidth={1.5}
            markerEnd="url(#gov-arrow)"
          />
          <line
            x1={470}
            y1={160}
            x2={695}
            y2={258}
            className="stroke-muted-foreground"
            strokeWidth={1.5}
            markerEnd="url(#gov-arrow)"
          />

          {/* Tailscale (administración) */}
          <Box
            x={40}
            y={258}
            w={160}
            h={64}
            title={labels.tailscale}
            sub={labels.tailscaleSub}
          />
          <line
            x1={200}
            y1={290}
            x2={250}
            y2={290}
            className="stroke-primary"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            markerEnd="url(#gov-arrow)"
          />
          <line
            x1={200}
            y1={270}
            x2={290}
            y2={150}
            className="stroke-primary"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            markerEnd="url(#gov-arrow)"
          />
        </svg>
      </div>
      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        {labels.caption}
      </figcaption>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// Bloques
// ---------------------------------------------------------------------------

function Blocks({
  blocks,
  diagram,
}: {
  blocks: GovBlock[];
  diagram: GovDiagramLabels;
}) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="my-4 leading-relaxed text-muted-foreground">
                <Inline text={block.text} />
              </p>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mt-8 mb-3 font-heading text-lg font-semibold tracking-tight"
              >
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="my-4 space-y-2 pl-5">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="list-disc leading-relaxed text-muted-foreground marker:text-primary"
                  >
                    <Inline text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="my-4 space-y-2 pl-5">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="list-decimal leading-relaxed text-muted-foreground marker:font-mono marker:text-primary"
                  >
                    <Inline text={item} />
                  </li>
                ))}
              </ol>
            );
          case "table":
            return <Table key={i} table={block.table} />;
          case "callout":
            return (
              <aside
                key={i}
                className="my-6 rounded-xl border border-primary/30 bg-primary/5 p-5 text-sm"
              >
                <p className="mb-1 font-mono text-[11px] uppercase tracking-wider text-primary">
                  {block.title}
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  <Inline text={block.text} />{" "}
                  <Link
                    href="/legal/sub-processors"
                    className="text-primary hover:underline"
                  >
                    /legal/sub-processors
                  </Link>
                </p>
              </aside>
            );
          case "diagram":
            return <TopologyDiagram key={i} labels={diagram} />;
          default:
            return null;
        }
      })}
    </>
  );
}

// ---------------------------------------------------------------------------
// Página
// ---------------------------------------------------------------------------

export function GovernanceView() {
  const c = useGovernanceContent();

  const tocItems = [
    ...c.sections.map((s, i) => ({
      id: s.id,
      label: s.title,
      num: String(i + 1).padStart(2, "0"),
    })),
    { id: "faq", label: c.faq.title, num: "FAQ" },
  ];

  return (
    <>
      {/* Hero sobrio */}
      <section className="border-b bg-muted/30 py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-5">
            <EyebrowBadge>{c.hero.eyebrow}</EyebrowBadge>
            <h1 className="font-heading text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {c.hero.title}
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {c.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-muted-foreground">
              <span>{c.hero.reviewed}</span>
              <span>{c.hero.disclaimer}</span>
            </div>
          </div>

          {/* De un vistazo */}
          <div className="mt-10 rounded-xl border bg-card">
            <p className="border-b px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {c.glance.title}
            </p>
            <dl className="grid gap-x-8 sm:grid-cols-2">
              {c.glance.rows.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[150px_1fr] gap-3 border-b px-5 py-3 text-sm last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                >
                  <dt className="font-medium">{k}</dt>
                  <dd className="text-muted-foreground">
                    <Inline text={v} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Cuerpo: índice + secciones */}
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:h-fit lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {c.toc.title}
            </p>
            <nav aria-label={c.toc.title} className="flex flex-col gap-0.5">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-baseline gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                >
                  <span className="w-7 shrink-0 font-mono text-[11px] text-primary">
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </aside>

          <article className="min-w-0 max-w-3xl">
            {c.sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-24 border-b py-10 first:pt-0 last:border-b-0"
              >
                <h2 className="mb-4 flex items-baseline gap-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                  <span className="font-mono text-sm font-medium text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </h2>
                <Blocks blocks={s.blocks} diagram={c.diagram} />
              </section>
            ))}

            {/* FAQ de auditoría */}
            <section id="faq" className="scroll-mt-24 py-10">
              <h2 className="mb-2 flex items-baseline gap-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                <span className="font-mono text-sm font-medium text-primary">FAQ</span>
                {c.faq.title}
              </h2>
              <p className="mb-6 text-muted-foreground">{c.faq.intro}</p>
              <dl className="space-y-4">
                {c.faq.items.map((item) => (
                  <div key={item.q} className="rounded-xl border bg-card p-5">
                    <dt className="font-heading text-lg font-semibold tracking-tight">
                      {item.q}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      <Inline text={item.a} />
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </article>
        </div>
      </Container>

      {/* CTA */}
      <section className="border-t bg-muted/30 py-16">
        <Container size="narrow">
          <div className="space-y-4 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              {c.cta.title}
            </h2>
            <p className="mx-auto max-w-xl text-pretty text-muted-foreground">
              {c.cta.desc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <LinkButton href="/contact" size="lg">
                <FileText />
                {c.cta.button}
                <ArrowRight />
              </LinkButton>
              <LinkButton href={c.cta.secondaryHref} variant="outline" size="lg">
                {c.cta.secondary}
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
