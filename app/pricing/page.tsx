"use client";

/**
 * /pricing — Precios en vivo del catálogo de apps.
 *
 * Fetch desde `/api/v1/public/apps-catalog` (sin auth, cache 60s).
 * Cambios hechos en /superadmin/apps se propagan acá en máx. 60s.
 */

import { useEffect, useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { useT } from "@/lib/i18n/I18nProvider";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.mekovault.com";

interface PublicApp {
  slug: string;
  name: string;
  short_pitch: string | null;
  description: string | null;
  category: string;
  status: "ga" | "beta";
  base_price_clp_monthly: number;
  icon: string | null;
  color_hex: string | null;
  docs_url: string | null;
  sort_order: number;
}

interface Catalog {
  items: PublicApp[];
  default_discount_curve: Record<string, number>;
  generated_at: string;
}

function formatCLP(v: number) {
  return "$" + v.toLocaleString("es-CL");
}

/** Aplica el discount % del curve según la cantidad de apps */
function calcNet(base: number, count: number, curve: Record<string, number>) {
  const keys = Object.keys(curve)
    .map(Number)
    .sort((a, b) => a - b);
  const maxKey = keys.length ? keys[keys.length - 1] : 1;
  const effective = Math.min(count, maxKey);
  const pct = curve[String(effective)] ?? 0;
  return Math.floor((base * (100 - pct)) / 100);
}

export default function PricingPage() {
  const t = useT();
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/v1/public/apps-catalog`, {
          // cache 60s del lado del browser/CDN
          headers: { "cache-control": "max-age=60" },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as Catalog;
        if (!cancelled) setCatalog(data);
      } catch (e) {
        if (!cancelled) setError(String((e as Error).message ?? e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const toggle = (slug: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  const selectedCount = selected.size;
  const curve = catalog?.default_discount_curve ?? { "1": 0 };
  const totalMonthly = catalog
    ? [...selected].reduce((acc, slug) => {
        const app = catalog.items.find((a) => a.slug === slug);
        if (!app) return acc;
        return acc + calcNet(app.base_price_clp_monthly, selectedCount, curve);
      }, 0)
    : 0;

  return (
    <>
      <Section compact>
        <Container>
          <SectionHeading
            eyebrow={t("pricing.eyebrow")}
            title={
              <>
                {t("pricing_page.title.pre")}{" "}
                <span className="text-brand-gradient">{t("pricing_page.title.hl")}</span>
              </>
            }
            desc="Elige solo lo que necesitas. Cada app se contrata individualmente. Cuantas más apps activas, más descuento en todas."
          />
          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border bg-card px-4 py-1.5">
              <Sparkles className="size-3.5 text-primary" />
              {t("pricing_page.trial_badge")}
            </span>
          </div>
        </Container>
      </Section>

      {/* Bundle discount summary */}
      <Section compact>
        <Container size="wide">
          <div className="mx-auto max-w-3xl rounded-2xl border bg-muted/30 p-6">
            <h3 className="mb-3 text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Descuento por bundling
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {Object.entries(curve)
                .sort(([a], [b]) => Number(a) - Number(b))
                .map(([n, pct]) => (
                  <div
                    key={n}
                    className={`rounded-xl border bg-card px-4 py-3 text-center ${
                      selectedCount === Number(n) ||
                      (Number(n) === Math.max(...Object.keys(curve).map(Number)) &&
                        selectedCount >= Number(n))
                        ? "border-primary shadow-[var(--shadow-glow)]"
                        : ""
                    }`}
                  >
                    <p className="font-heading text-lg font-semibold">
                      {n}+ app{n === "1" ? "" : "s"}
                    </p>
                    <p className="text-2xl font-bold text-primary">{pct}%</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      off
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Apps grid */}
      <Section compact>
        <Container size="wide">
          {loading && (
            <p className="text-center text-sm text-muted-foreground">
              Cargando catálogo…
            </p>
          )}
          {error && (
            <p className="text-center text-sm text-red-600">Error: {error}</p>
          )}

          {catalog && (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {catalog.items.map((app) => {
                  const isSelected = selected.has(app.slug);
                  const effectiveCount = isSelected
                    ? selectedCount
                    : selectedCount + 1;
                  const net = calcNet(
                    app.base_price_clp_monthly,
                    Math.max(effectiveCount, 1),
                    curve,
                  );
                  const pct = curve[String(Math.min(effectiveCount, 4))] ?? 0;
                  return (
                    <button
                      key={app.slug}
                      onClick={() => toggle(app.slug)}
                      className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 text-left transition-all ${
                        isSelected
                          ? "border-primary/60 bg-primary/5 shadow-[var(--shadow-glow)]"
                          : "bg-card hover:border-primary/40"
                      }`}
                    >
                      {app.status === "beta" && (
                        <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-amber-800 dark:bg-amber-500/15 dark:text-amber-300">
                          Beta
                        </span>
                      )}
                      <div
                        className={`mb-3 inline-flex size-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${
                          isSelected ? "bg-primary text-white" : "bg-primary/10 text-primary"
                        }`}
                      >
                        {isSelected ? <Check className="size-5" /> : <span className="text-lg">📦</span>}
                      </div>
                      <h3 className="font-heading text-lg font-semibold tracking-tight">
                        {app.name}
                      </h3>
                      {app.short_pitch && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {app.short_pitch}
                        </p>
                      )}
                      <div className="mt-6">
                        <div className="flex items-baseline gap-2">
                          <span className="font-heading text-3xl font-semibold tracking-tight">
                            {formatCLP(net)}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {t("pricing_page.per_month")}
                          </span>
                        </div>
                        {pct > 0 && (
                          <p className="mt-1 text-xs text-emerald-700 dark:text-emerald-400">
                            <s className="text-muted-foreground">
                              {formatCLP(app.base_price_clp_monthly)}
                            </s>{" "}
                            · {pct}% off con {effectiveCount} apps
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Total */}
              {selectedCount > 0 && (
                <div className="sticky bottom-4 mx-auto mt-8 flex max-w-3xl items-center justify-between gap-4 rounded-2xl border bg-brand-gradient p-6 text-white shadow-[var(--shadow-glow-cyan)]">
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-80">
                      Tu selección — {selectedCount} app
                      {selectedCount === 1 ? "" : "s"}
                    </p>
                    <p className="font-heading text-3xl font-semibold">
                      {formatCLP(totalMonthly)}
                      <span className="ml-1 text-sm opacity-80">/mes</span>
                    </p>
                  </div>
                  <LinkButton
                    href="https://app.mekovault.com/signup"
                    external
                    size="lg"
                    variant="secondary"
                  >
                    {t("hero.cta.signup")} <ArrowRight />
                  </LinkButton>
                </div>
              )}
            </>
          )}
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="border-t">
        <Container size="narrow">
          <SectionHeading
            eyebrow={t("pricing_page.faq.eyebrow")}
            title={t("pricing_page.faq.title")}
            desc={t("pricing_page.faq.desc")}
          />

          <div className="mt-10 space-y-4">
            <FAQItem q={t("faq.what_counts.q")}>{t("faq.what_counts.a")}</FAQItem>
            <FAQItem q={t("faq.overages.q")}>{t("faq.overages.a")}</FAQItem>
            <FAQItem q={t("faq.switch_plan.q")}>{t("faq.switch_plan.a")}</FAQItem>
            <FAQItem q={t("faq.payment.q")}>{t("faq.payment.a")}</FAQItem>
            <FAQItem q={t("faq.contract.q")}>{t("faq.contract.a")}</FAQItem>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t bg-muted/30">
        <Container size="narrow" className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            {t("pricing_page.cta.title")}
          </h2>
          <div className="mt-6">
            <LinkButton
              href="https://app.mekovault.com/signup"
              external
              size="lg"
            >
              {t("hero.cta.signup")} <ArrowRight />
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

function FAQItem({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-xl border bg-card p-5 transition-colors open:border-primary/30">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
        <span>{q}</span>
        <span className="text-lg leading-none text-muted-foreground transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="mt-3 text-sm text-muted-foreground">{children}</div>
    </details>
  );
}
