"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Plus } from "lucide-react";

import { ArrowLink, LinkButton } from "@/components/Button";
import { StatusPill } from "@/components/panels/shared";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { cn } from "@/lib/cn";
import {
  COMPRAS_CLP,
  MINI_APPS,
  PACKAGES,
  SINGLE_APP_CLP,
  packageSavingPct,
  packageSinglesClp,
  quote,
  type MiniApp,
  type PackageKey,
} from "@/lib/miniapps";
import { FX_REFERENCE, displayCurrency, formatPrice } from "@/lib/pricing";

/**
 * Selector de mini apps (una por plataforma) y paquetes, con el total.
 * Decisión de Jorge (2026-10-11): seleccionables, cada paquete con su valor,
 * más barato que de a una, pero de a una también se puede.
 */
export function MiniAppsPicker({
  embedded = false,
  onQuote,
}: {
  /** Dentro del armador de precios: sin panel propio de total ni CTA. */
  embedded?: boolean;
  /** Avisa el total mensual en CLP de lo marcado. */
  onQuote?: (totalClp: number) => void;
} = {}) {
  const { t, locale } = useI18n();
  const [pkgs, setPkgs] = useState<Set<PackageKey>>(new Set());
  const [apps, setApps] = useState<Set<string>>(new Set());
  const q = useMemo(() => quote(pkgs, apps), [pkgs, apps]);
  const currency = displayCurrency(locale);
  useEffect(() => {
    onQuote?.(q.totalClp);
  }, [q.totalClp, onQuote]);

  const togglePkg = (key: PackageKey) =>
    setPkgs((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  const toggleApp = (slug: string) =>
    setApps((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });

  const pkgName = (key: PackageKey) => {
    const p = PACKAGES.find((x) => x.key === key)!;
    return t(p.name);
  };
  const coveredBy = (slug: string) => q.packages.find((p) => p.apps.includes(slug));
  const statusLabel = (a: MiniApp) => (a.status === "guided" ? t("apps.status.guided") : t("apps.status.soon"));

  return (
    <div className={cn("grid gap-8 lg:items-start", !embedded && "lg:grid-cols-[minmax(0,1fr)_320px]")}>
      <div className="flex flex-col gap-10">
        {/* Paquetes */}
        <div>
          <h3 className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#5b7390]">{t("apps.packages.title")}</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {PACKAGES.map((p) => {
              const on = pkgs.has(p.key);
              return (
                <button
                  key={p.key}
                  type="button"
                  aria-pressed={on}
                  onClick={() => togglePkg(p.key)}
                  className={cn(
                    "flex flex-col rounded-[14px] border bg-white p-5 text-left transition-colors",
                    on ? "border-[#0077b6] ring-1 ring-[#0077b6]" : "border-[#c9dde8] hover:border-[#0077b6]",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[18px] font-extrabold tracking-[-0.01em] text-[#03045e]">{t(p.name)}</p>
                      <p className="mt-0.5 text-[13px] text-[#5b7390]">{t(p.desc)}</p>
                    </div>
                    <span
                      className={cn(
                        "flex size-6 shrink-0 items-center justify-center rounded-full border",
                        on ? "border-[#0077b6] bg-[#0077b6] text-white" : "border-[#c9dde8] text-[#5b7390]",
                      )}
                    >
                      {on ? <Check className="size-4" strokeWidth={3} /> : <Plus className="size-4" />}
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-[26px] font-extrabold tracking-[-0.02em] text-[#03045e]">{formatPrice(p.priceClp, locale)}</span>
                    <span className="text-[12px] text-[#5b7390]">{t("pricing_page.per_month")}</span>
                  </div>
                  <p className="mt-1 text-[12px] text-[#5b7390]">
                    <span className="line-through">{t("apps.pkg.singles", { price: formatPrice(packageSinglesClp(p), locale) })}</span>{" "}
                    <span className="font-bold text-[#166534]">{t("apps.pkg.saving", { pct: packageSavingPct(p) })}</span>
                  </p>
                  <p className="mt-3 text-[12px] font-semibold text-[#33507a]">
                    {t("apps.pkg.apps", { n: p.apps.length })}
                    {p.key === "all" ? "" : ": " + p.apps.map((s) => MINI_APPS.find((a) => a.slug === s)?.name ?? s).join(", ")}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mini apps de a una */}
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#5b7390]">{t("apps.singles.title")}</h3>
            <p className="text-[13px] text-[#33507a]">{t("apps.single.price", { price: formatPrice(SINGLE_APP_CLP, locale) })}</p>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {MINI_APPS.map((a) => {
              const by = coveredBy(a.slug);
              const on = apps.has(a.slug) || Boolean(by);
              return (
                <button
                  key={a.slug}
                  type="button"
                  aria-pressed={on}
                  disabled={Boolean(by)}
                  onClick={() => toggleApp(a.slug)}
                  title={by ? t("apps.included", { pkg: t(by.name) }) : undefined}
                  className={cn(
                    "flex items-center justify-between gap-2 rounded-[10px] border bg-white px-3 py-2.5 text-left transition-colors",
                    on ? "border-[#0077b6]" : "border-[#dbeaf2] hover:border-[#0077b6]",
                    by && "bg-[#f2f8fb]",
                  )}
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      className={cn(
                        "flex size-5 shrink-0 items-center justify-center rounded-full border",
                        on ? "border-[#0077b6] bg-[#0077b6] text-white" : "border-[#c9dde8]",
                      )}
                    >
                      {on && <Check className="size-3" strokeWidth={3} />}
                    </span>
                    <span className="truncate text-[14px] font-bold text-[#03045e]">{a.name}</span>
                  </span>
                  <StatusPill tone={a.status === "guided" ? "gray" : "blue"}>{statusLabel(a)}</StatusPill>
                </button>
              );
            })}
          </div>
          <div className="mt-4 flex flex-col gap-1 text-[12px] leading-relaxed text-[#5b7390]">
            <p>
              <strong className="text-[#33507a]">{t("apps.status.soon")}:</strong> {t("apps.status.soon.help")}
            </p>
            <p>
              <strong className="text-[#33507a]">{t("apps.status.guided")}:</strong> {t("apps.status.guided.help")}
            </p>
          </div>
        </div>

        {/* Compras de software */}
        <div className="rounded-[14px] border border-[#c9dde8] bg-white p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-[18px] font-extrabold tracking-[-0.01em] text-[#03045e]">{t("apps.compras.title")}</p>
              <p className="mt-1 text-[14px] leading-relaxed text-[#33507a]">{t("apps.compras.desc")}</p>
              <ArrowLink href="/compras-de-software" tone="blue" className="mt-3 text-[14px]">
                {t("apps.compras.link")}
              </ArrowLink>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[26px] font-extrabold tracking-[-0.02em] text-[#03045e]">{formatPrice(COMPRAS_CLP, locale)}</span>
              <span className="text-[12px] text-[#5b7390]">{t("pricing_page.per_month")}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-[13px] leading-relaxed text-[#5b7390]">
          <p>{t("apps.licenses.note")}</p>
          <p>{t("apps.m365.note")}</p>
          <p>
            {currency === "CLP" ? t("apps.note.clp") : t("tiers.note.usd", { date: FX_REFERENCE.date })} {t("apps.note.activate")}
          </p>
        </div>
      </div>

      {/* Tu selección */}
      {!embedded && (
      <aside className="rounded-[14px] border border-[#c9dde8] bg-white p-6 lg:sticky lg:top-[88px]">
        <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#5b7390]">{t("apps.quote.title")}</p>
        {q.packages.length === 0 && q.singles.length === 0 ? (
          <p className="mt-3 text-[14px] leading-relaxed text-[#33507a]">{t("apps.quote.empty")}</p>
        ) : (
          <ul className="mt-3 flex flex-col gap-2 text-[14px] text-[#33507a]">
            {q.packages.map((p) => (
              <li key={p.key} className="flex justify-between gap-3">
                <span className="font-bold text-[#03045e]">{t(p.name)}</span>
                <span>{formatPrice(p.priceClp, locale)}</span>
              </li>
            ))}
            {q.singles.map((a) => (
              <li key={a.slug} className="flex justify-between gap-3">
                <span>{a.name}</span>
                <span>{formatPrice(SINGLE_APP_CLP, locale)}</span>
              </li>
            ))}
          </ul>
        )}
        {q.suggestions.map((p) => (
          <p key={p.key} className="mt-3 rounded-[10px] bg-[#fff7ed] p-3 text-[13px] leading-relaxed text-[#9a3412]">
            {t("apps.quote.suggest", {
              pkg: pkgName(p.key),
              price: formatPrice(p.priceClp, locale),
              singles: formatPrice(
                p.apps.filter((s) => q.singles.some((a) => a.slug === s)).length * SINGLE_APP_CLP,
                locale,
              ),
            })}
          </p>
        ))}
        <div className="mt-5 flex items-baseline justify-between gap-3 border-t border-[#dbeaf2] pt-4">
          <span className="text-[14px] font-bold text-[#03045e]">{t("apps.quote.total")}</span>
          <span className="text-[26px] font-extrabold tracking-[-0.02em] text-[#03045e]">{formatPrice(q.totalClp, locale)}</span>
        </div>
        <p className="mt-1 text-[12px] text-[#5b7390]">{t("apps.quote.base")}</p>
        <LinkButton href="https://app.mekovault.com/signup" external className="mt-5 w-full">
          {t("apps.quote.cta")}
        </LinkButton>
      </aside>
      )}
    </div>
  );
}
