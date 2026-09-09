"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { useT } from "@/lib/i18n/I18nProvider";
import {
  APP_I18N,
  calcNet,
  discountPct,
  formatCLP,
  type Catalog,
  type PublicApp,
} from "@/lib/catalog";

export function PricingClient({ catalog, live }: { catalog: Catalog; live: boolean }) {
  const t = useT();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const items = useMemo(
    () => [...catalog.items].sort((a, b) => a.sort_order - b.sort_order),
    [catalog.items],
  );
  const curve = catalog.default_discount_curve;
  const curveKeys = Object.keys(curve)
    .map(Number)
    .sort((a, b) => a - b);
  const maxKey = curveKeys.length ? curveKeys[curveKeys.length - 1]! : 1;

  const label = (app: PublicApp) => {
    const i18n = APP_I18N[app.slug];
    return {
      name: i18n ? t(i18n.name) : app.name,
      pitch: i18n ? t(i18n.pitch) : app.short_pitch ?? "",
    };
  };

  // Módulos incluidos sin costo por otro módulo seleccionado.
  const bundled = useMemo(() => {
    const map = new Map<string, PublicApp>(); // slug incluido → app que lo incluye
    for (const slug of selected) {
      const app = items.find((a) => a.slug === slug);
      for (const b of app?.bundled_slugs ?? []) {
        if (!map.has(b)) map.set(b, app!);
      }
    }
    return map;
  }, [selected, items]);

  const chargeable = [...selected].filter((s) => !bundled.has(s));
  const count = chargeable.length;
  const totalMonthly = chargeable.reduce((acc, slug) => {
    const app = items.find((a) => a.slug === slug);
    return app ? acc + calcNet(app.base_price_clp_monthly, count, curve) : acc;
  }, 0);

  const toggle = (slug: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  const bundleLabel = (n: number) => {
    if (n === 1) return t("pricing_page.bundle.one");
    if (n === maxKey) return t("pricing_page.bundle.apps", { n });
    return t("pricing_page.bundle.some", { n });
  };

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
            desc={t("pricing_page.subtitle")}
          />
          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border bg-card px-4 py-1.5">
              <Sparkles className="size-3.5 text-primary" />
              {t("pricing_page.trial_badge")}
            </span>
          </div>
        </Container>
      </Section>

      {/* Descuento por módulos */}
      <Section compact>
        <Container size="wide">
          <div className="mx-auto max-w-3xl rounded-2xl border bg-muted/30 p-6">
            <h3 className="mb-3 text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {t("pricing_page.bundle.title")}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {curveKeys.map((n) => {
                const active = count === n || (n === maxKey && count >= n);
                return (
                  <div
                    key={n}
                    className={`rounded-xl border bg-card px-4 py-3 text-center ${
                      active ? "border-primary shadow-[var(--shadow-glow)]" : ""
                    }`}
                  >
                    <p className="font-heading text-lg font-semibold">{bundleLabel(n)}</p>
                    <p className="text-2xl font-bold text-primary">{curve[String(n)] ?? 0}%</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {t("pricing_page.bundle.off")}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Módulos */}
      <Section compact>
        <Container size="wide">
          <p className="mb-6 text-center text-sm text-muted-foreground">
            {t("pricing_page.select_hint")}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((app) => {
              const { name, pitch } = label(app);
              const isSelected = selected.has(app.slug);
              const includedBy = bundled.get(app.slug);
              const effectiveCount = isSelected ? count : count + 1;
              const net = includedBy
                ? 0
                : calcNet(app.base_price_clp_monthly, Math.max(effectiveCount, 1), curve);
              const pct = includedBy ? 0 : discountPct(effectiveCount, curve);
              const bundledNames = (app.bundled_slugs ?? [])
                .map((s) => items.find((a) => a.slug === s))
                .filter(Boolean)
                .map((a) => label(a!).name);

              return (
                <button
                  key={app.slug}
                  type="button"
                  aria-pressed={isSelected || Boolean(includedBy)}
                  onClick={() => toggle(app.slug)}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 text-left transition-all ${
                    isSelected || includedBy
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
                      isSelected || includedBy ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Check className="size-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight">{name}</h3>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {app.name}
                  </p>
                  {pitch && <p className="mt-2 text-sm text-muted-foreground">{pitch}</p>}
                  {bundledNames.length > 0 && (
                    <p className="mt-2 text-xs text-emerald-700 dark:text-emerald-400">
                      + {bundledNames.join(", ")} · {t("svc.status.included").toLowerCase()}
                    </p>
                  )}
                  <div className="mt-6">
                    {includedBy ? (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="font-heading text-3xl font-semibold tracking-tight">$0</span>
                          <span className="text-xs text-muted-foreground">{t("pricing_page.per_month")}</span>
                        </div>
                        <p className="mt-1 text-xs text-emerald-700 dark:text-emerald-400">
                          <s className="text-muted-foreground">{formatCLP(app.base_price_clp_monthly)}</s>{" "}
                          · {t("pricing_page.included_with", { name: label(includedBy).name })}
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="font-heading text-3xl font-semibold tracking-tight">
                            {formatCLP(net)}
                          </span>
                          <span className="text-xs text-muted-foreground">{t("pricing_page.per_month")}</span>
                        </div>
                        {pct > 0 && (
                          <p className="mt-1 text-xs text-emerald-700 dark:text-emerald-400">
                            <s className="text-muted-foreground">{formatCLP(app.base_price_clp_monthly)}</s>{" "}
                            · {t("pricing_page.discount_line", { pct, n: effectiveCount })}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
            {t("pricing_page.currency_note")}
            {!live && <> {t("pricing_page.reference_note")}</>}
          </p>

          {/* Total */}
          {selected.size > 0 && (
            <div className="sticky bottom-4 mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-between gap-4 rounded-2xl border bg-brand-gradient p-6 text-white shadow-[var(--shadow-glow-cyan)]">
              <div>
                <p className="text-xs uppercase tracking-widest opacity-80">
                  {t("pricing_page.selection", { n: selected.size })}
                </p>
                <p className="font-heading text-3xl font-semibold">
                  {formatCLP(totalMonthly)}
                  <span className="ml-1 text-sm opacity-80">{t("pricing_page.per_month")}</span>
                </p>
              </div>
              <LinkButton href="https://app.mekovault.com/signup" external size="lg" variant="secondary">
                {t("hero.cta.signup")} <ArrowRight />
              </LinkButton>
            </div>
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
            <FAQItem q={t("faq.price_includes.q")}>{t("faq.price_includes.a")}</FAQItem>
            <FAQItem q={t("faq.discount.q")}>{t("faq.discount.a")}</FAQItem>
            <FAQItem q={t("faq.switch.q")}>{t("faq.switch.a")}</FAQItem>
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
            <LinkButton href="https://app.mekovault.com/signup" external size="lg">
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
