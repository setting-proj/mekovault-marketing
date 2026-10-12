"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Link2,
  Mail,
  ShieldCheck,
  ShoppingCart,
  Ticket,
  Users,
  type LucideIcon,
} from "lucide-react";

import { ArrowLink, LinkButton } from "@/components/Button";
import { MiniAppsPicker } from "@/components/MiniAppsPicker";
import { useI18n } from "@/lib/i18n/I18nProvider";
import type { TranslationKey } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/cn";
import {
  ACCOUNT_TIERS,
  ADDONS,
  FREE_ACCOUNTS,
  SLIDER_MAX,
  TALK_ABOVE,
  baseMonthlyUsd,
  billsInClp,
  formatUSD,
  perAccountUsd,
  type AddonKey,
} from "@/lib/pricing";

const ADDON_I18N: Record<AddonKey, { name: TranslationKey; desc: TranslationKey; icon: LucideIcon }> = {
  nomina: { name: "build.addon.nomina.name", desc: "build.addon.nomina.desc", icon: Users },
  audit: { name: "build.addon.audit.name", desc: "build.addon.audit.desc", icon: ShieldCheck },
  compras: { name: "build.addon.compras.name", desc: "build.addon.compras.desc", icon: ShoppingCart },
  apps: { name: "build.addon.apps.name", desc: "build.addon.apps.desc", icon: Link2 },
};

const INCLUDED: Array<{ key: TranslationKey; icon: LucideIcon }> = [
  { key: "build.included.1", icon: Mail },
  { key: "build.included.2", icon: Ticket },
];

/**
 * Arma el precio: barra de cuentas (gratis hasta 20, por cuenta después, a
 * conversar sobre 200), adicionales por empresa y plataformas de a una.
 * Todo en USD (Jorge, 2026-10-12).
 */
export function PricingBuilder() {
  const { t, locale } = useI18n();
  const [accounts, setAccounts] = useState(30);
  const [addons, setAddons] = useState<Set<AddonKey>>(new Set());
  const [showApps, setShowApps] = useState(false);
  const [appsUsd, setAppsUsd] = useState(0);
  const [appSlugs, setAppSlugs] = useState<string[]>([]);

  const rate = perAccountUsd(accounts);
  const baseUsd = baseMonthlyUsd(accounts);
  const talk = rate === null;
  const addonsUsd = useMemo(
    () => ADDONS.filter((a) => addons.has(a.key)).reduce((acc, a) => acc + a.usd, 0),
    [addons],
  );
  const totalUsd = (baseUsd ?? 0) + addonsUsd + appsUsd;
  // La selección viaja al registro como estimación (no cobra nada): el asistente la compara
  // con las cuentas reales de Google Workspace y la deja ajustar antes de activar.
  const signupUrl = useMemo(() => {
    const q = new URLSearchParams({ src: "pricing", accounts: String(accounts) });
    if (addons.size) q.set("addons", [...addons].join(","));
    if (appSlugs.length) q.set("apps", appSlugs.join(","));
    return `https://app.mekovault.com/signup?${q.toString()}`;
  }, [accounts, addons, appSlugs]);
  const pct = ((accounts - 1) / (SLIDER_MAX - 1)) * 100;

  const toggleAddon = (k: AddonKey) =>
    setAddons((prev) => {
      const next = new Set(prev);
      if (next.has(k)) next.delete(k);
      else next.add(k);
      return next;
    });

  const clamp = (v: number) => Math.min(SLIDER_MAX, Math.max(1, Number.isFinite(v) ? Math.round(v) : 1));

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
      <div className="flex flex-col gap-10">
        {/* Barra de cuentas */}
        <div className="rounded-[14px] border border-[#c9dde8] bg-white p-6 sm:p-8">
          <label htmlFor="accounts-range" className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#5b7390]">
            {t("build.accounts")}
          </label>
          <p className="mt-1 text-[13px] text-[#5b7390]">{t("build.accounts.hint")}</p>

          {/* Valor sobre la barra */}
          <div className="relative mt-8 h-9">
            <div
              className="absolute -translate-x-1/2 rounded-[8px] bg-[#03045e] px-3 py-1 text-[14px] font-extrabold text-white"
              style={{ left: `calc(${pct}% )` }}
            >
              {accounts}
            </div>
          </div>
          <input
            id="accounts-range"
            type="range"
            min={1}
            max={SLIDER_MAX}
            step={1}
            value={accounts}
            onChange={(e) => setAccounts(clamp(Number(e.target.value)))}
            className="h-2 w-full cursor-pointer accent-[#0077b6]"
          />
          <div className="mt-2 flex justify-between text-[11px] font-semibold text-[#5b7390]">
            <span>1</span>
            <span>{FREE_ACCOUNTS}</span>
            <span>50</span>
            <span>100</span>
            <span>{TALK_ABOVE}</span>
            <span>{TALK_ABOVE}+</span>
          </div>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              {talk ? (
                <>
                  <span className="text-[30px] font-extrabold tracking-[-0.02em] text-[#03045e]">{t("build.talk")}</span>
                  <span className="text-[14px] text-[#5b7390]">{t("build.talk.desc")}</span>
                </>
              ) : accounts <= FREE_ACCOUNTS ? (
                <>
                  <span className="text-[30px] font-extrabold tracking-[-0.02em] text-[#03045e]">{t("build.free")}</span>
                  <span className="text-[14px] text-[#5b7390]">{t("build.free.desc")}</span>
                </>
              ) : (
                <>
                  <span className="text-[30px] font-extrabold tracking-[-0.02em] text-[#03045e]">{formatUSD(baseUsd ?? 0, 0, locale)}</span>
                  <span className="text-[14px] text-[#5b7390]">
                    {t("pricing_page.per_month")} · {t("build.rate", { price: formatUSD(rate ?? 0, 2, locale) })}
                  </span>
                </>
              )}
            </div>
            <label className="flex items-center gap-2 text-[12px] text-[#5b7390]">
              {t("build.accounts.write")}
              <input
                type="number"
                inputMode="numeric"
                min={1}
                max={SLIDER_MAX}
                value={accounts}
                onChange={(e) => setAccounts(clamp(Number(e.target.value)))}
                aria-label={t("build.accounts")}
                className="h-9 w-20 rounded-md border border-[#c9dde8] bg-white px-2 text-right text-[14px] font-bold text-[#03045e] outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/25"
              />
            </label>
          </div>

          {/* Tramos */}
          <ul className="mt-6 grid gap-2 text-[13px] text-[#33507a] sm:grid-cols-5">
            {ACCOUNT_TIERS.map((tier) => {
              const active = accounts >= tier.from && accounts <= tier.to;
              return (
                <li
                  key={tier.from}
                  className={cn(
                    "rounded-[10px] border px-3 py-2",
                    active ? "border-[#0077b6] bg-[#f2f8fb] font-bold text-[#03045e]" : "border-[#dbeaf2]",
                  )}
                >
                  <div className="text-[11px] uppercase tracking-[0.04em] text-[#5b7390]">
                    {tier.from} a {tier.to}
                  </div>
                  <div>{tier.usd === 0 ? t("build.free") : t("build.tier.rate", { price: formatUSD(tier.usd, 2, locale) })}</div>
                </li>
              );
            })}
            <li
              className={cn(
                "rounded-[10px] border px-3 py-2",
                talk ? "border-[#0077b6] bg-[#f2f8fb] font-bold text-[#03045e]" : "border-[#dbeaf2]",
              )}
            >
              <div className="text-[11px] uppercase tracking-[0.04em] text-[#5b7390]">{TALK_ABOVE}+</div>
              <div>{t("build.talk")}</div>
            </li>
          </ul>
        </div>

        {/* Incluido */}
        <div>
          <h2 className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#5b7390]">{t("build.included.title")}</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {INCLUDED.map(({ key, icon: Icon }) => (
              <li key={key} className="flex items-start gap-3 rounded-[10px] border border-[#dbeaf2] bg-white p-4 text-[14px] leading-snug text-[#33507a]">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-[#dcfce7] text-[#166534]">
                  <Icon className="size-4" />
                </span>
                <span className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#166534]" strokeWidth={3} />
                  <span>{t(key)}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Adicionales */}
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#5b7390]">{t("build.addons.title")}</h2>
            <p className="text-[13px] text-[#33507a]">{t("build.addons.desc")}</p>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {ADDONS.map((a) => {
              const on = addons.has(a.key);
              const i18n = ADDON_I18N[a.key];
              const Icon = i18n.icon;
              return (
                <button
                  key={a.key}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleAddon(a.key)}
                  className={cn(
                    "flex gap-4 rounded-[12px] border bg-white p-5 text-left transition-colors",
                    on ? "border-[#0077b6] ring-1 ring-[#0077b6]" : "border-[#c9dde8] hover:border-[#0077b6]",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-11 shrink-0 items-center justify-center rounded-[10px]",
                      on ? "bg-[#0077b6] text-white" : "bg-[#eaf6fb] text-[#0077b6]",
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="flex items-start justify-between gap-3">
                      <span className="text-[17px] font-extrabold tracking-[-0.01em] text-[#03045e]">{t(i18n.name)}</span>
                      <span
                        className={cn(
                          "flex size-6 shrink-0 items-center justify-center rounded-full border",
                          on ? "border-[#0077b6] bg-[#0077b6] text-white" : "border-[#c9dde8]",
                        )}
                      >
                        {on && <Check className="size-4" strokeWidth={3} />}
                      </span>
                    </span>
                    <span className="mt-1 text-[13px] leading-relaxed text-[#33507a]">{t(i18n.desc)}</span>
                    <span className="mt-3 text-[15px] font-bold text-[#03045e]">
                      {formatUSD(a.usd, 0, locale)} <span className="text-[12px] font-semibold text-[#5b7390]">{t("build.addon.per_company")}</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Plataformas de a una */}
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#5b7390]">{t("build.miniapps.title")}</h2>
            <p className="text-[13px] text-[#33507a]">{t("build.miniapps.desc")}</p>
          </div>
          <button
            type="button"
            onClick={() => setShowApps((v) => !v)}
            className="mt-3 inline-flex items-center gap-2 rounded-[10px] border border-[#c9dde8] bg-white px-4 py-2.5 text-[14px] font-bold text-[#03045e] transition-colors hover:border-[#0077b6]"
          >
            {showApps ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
            {showApps ? t("build.miniapps.hide") : t("build.miniapps.toggle")}
          </button>
          {showApps && (
            <div className="mt-5">
              <MiniAppsPicker embedded onQuote={setAppsUsd} onSelection={setAppSlugs} />
            </div>
          )}
          {!showApps && appsUsd > 0 && (
            <p className="mt-2 text-[13px] text-[#33507a]">{t("build.miniapps.selected", { price: formatUSD(appsUsd, 0, locale) })}</p>
          )}
        </div>
      </div>

      {/* Tu precio */}
      <aside className="rounded-[14px] border border-[#c9dde8] bg-white p-6 lg:sticky lg:top-[88px]">
        <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#5b7390]">{t("build.summary.title")}</p>
        <ul className="mt-3 flex flex-col gap-2 text-[14px] text-[#33507a]">
          <li className="flex justify-between gap-3">
            <span className="font-bold text-[#03045e]">{t("build.summary.base", { n: accounts })}</span>
            <span>{talk ? t("build.talk") : baseUsd === 0 ? t("build.free") : formatUSD(baseUsd ?? 0, 0, locale)}</span>
          </li>
          {ADDONS.filter((a) => addons.has(a.key)).map((a) => (
            <li key={a.key} className="flex justify-between gap-3">
              <span>{t(ADDON_I18N[a.key].name)}</span>
              <span>{formatUSD(a.usd, 0, locale)}</span>
            </li>
          ))}
          {appsUsd > 0 && (
            <li className="flex justify-between gap-3">
              <span>{t("build.summary.miniapps")}</span>
              <span>{formatUSD(appsUsd, 0, locale)}</span>
            </li>
          )}
        </ul>
        <div className="mt-5 flex items-baseline justify-between gap-3 border-t border-[#dbeaf2] pt-4">
          <span className="text-[14px] font-bold text-[#03045e]">{t("build.summary.total")}</span>
          <span className="text-[26px] font-extrabold tracking-[-0.02em] text-[#03045e]">
            {talk ? t("build.talk") : totalUsd === 0 ? t("build.free") : formatUSD(totalUsd, 0, locale)}
          </span>
        </div>
        <p className="mt-1 text-[12px] text-[#5b7390]">
          {talk ? t("build.talk.desc") : accounts <= FREE_ACCOUNTS && totalUsd === 0 ? t("build.summary.free") : t("build.summary.trial")}
        </p>
        {talk ? (
          <LinkButton href="/contact" className="mt-5 w-full">
            {t("build.summary.talk_cta")} <ArrowRight />
          </LinkButton>
        ) : (
          <LinkButton href={signupUrl} external className="mt-5 w-full">
            {t("build.summary.cta")} <ArrowRight />
          </LinkButton>
        )}
        <p className="mt-4 text-[12px] leading-relaxed text-[#5b7390]">
          {billsInClp(locale) ? t("build.summary.note.cl") : t("build.summary.note")}
        </p>
        <ArrowLink href="/contact" tone="blue" className="mt-3 text-[13px]">
          {t("build.summary.more")}
        </ArrowLink>
      </aside>
    </div>
  );
}
