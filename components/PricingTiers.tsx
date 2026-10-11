"use client";

import { Check } from "lucide-react";

import { LinkButton } from "@/components/Button";
import { APP_I18N, calcNet, type Catalog } from "@/lib/catalog";
import { useI18n } from "@/lib/i18n/I18nProvider";
import type { TranslationKey } from "@/lib/i18n/dictionaries";
import { FX_REFERENCE, TIERS, displayCurrency, formatPrice, type TierKey } from "@/lib/pricing";
import { cn } from "@/lib/cn";

const TIER_I18N: Record<TierKey, { name: TranslationKey; who: TranslationKey; includes: TranslationKey[] }> = {
  free: { name: "tiers.free.name", who: "tiers.free.who", includes: ["tiers.free.i1", "tiers.free.i2", "tiers.free.i3", "tiers.free.i4"] },
  small: { name: "tiers.small.name", who: "tiers.small.who", includes: ["tiers.small.i1", "tiers.small.i2", "tiers.small.i3", "tiers.small.i4"] },
  medium: { name: "tiers.medium.name", who: "tiers.medium.who", includes: ["tiers.medium.i1", "tiers.medium.i2", "tiers.medium.i3", "tiers.medium.i4"] },
  large: { name: "tiers.large.name", who: "tiers.large.who", includes: ["tiers.large.i1", "tiers.large.i2", "tiers.large.i3", "tiers.large.i4"] },
};

/**
 * Tres configuraciones por tamaño de empresa. El total sale del catálogo
 * (módulos con descuento), así que es lo que realmente se cobra hoy; fuera
 * de Chile se muestra la referencia en dólares.
 */
export function PricingTiers({ catalog }: { catalog: Catalog }) {
  const { t, locale } = useI18n();
  const curve = catalog.default_discount_curve;
  const currency = displayCurrency(locale);

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {TIERS.map((tier) => {
          const i18n = TIER_I18N[tier.key];
          const apps = tier.modules
            .map((slug) => catalog.items.find((a) => a.slug === slug))
            .filter((a): a is NonNullable<typeof a> => Boolean(a));
          // Un módulo incluido por otro (bundled) no se cobra.
          const bundled = new Set(apps.flatMap((a) => a.bundled_slugs ?? []));
          const chargeable = apps.filter((a) => !bundled.has(a.slug));
          const n = chargeable.length;
          const totalClp = chargeable.reduce((acc, a) => acc + calcNet(a.base_price_clp_monthly, n, curve), 0);
          const featured = tier.key === "small";
          const [from, to] = tier.people;
          return (
            <div
              key={tier.key}
              className={cn(
                "flex flex-col rounded-[14px] border bg-white p-7",
                featured ? "border-[#0077b6] ring-1 ring-[#0077b6]" : "border-[#c9dde8]",
              )}
            >
              <p className="text-[13px] font-bold text-[#0077b6]">{t(i18n.who)}</p>
              <h3 className="mt-1 text-[24px] font-extrabold tracking-[-0.02em] text-[#03045e]">{t(i18n.name)}</h3>
              <p className="mt-1 text-[14px] text-[#5b7390]">
                {to === null ? t("tiers.people.from", { n: from }) : t("tiers.people.range", { a: from, b: to })}
              </p>
              {tier.key === "free" ? (
                <>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-[34px] font-extrabold tracking-[-0.02em] text-[#03045e]">{t("tiers.free.price")}</span>
                    <span className="text-[13px] text-[#5b7390]">{t("pricing_page.per_month")}</span>
                  </div>
                  <p className="mt-1 text-[12px] font-semibold text-[#5b7390]">{t("tiers.free.desc")}</p>
                </>
              ) : tier.key === "large" ? (
                <>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-[34px] font-extrabold tracking-[-0.02em] text-[#03045e]">{t("tiers.talk")}</span>
                  </div>
                  <p className="mt-1 text-[12px] font-semibold text-[#5b7390]">{t("tiers.talk.desc")}</p>
                </>
              ) : (
                <>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-[34px] font-extrabold tracking-[-0.02em] text-[#03045e]">{formatPrice(totalClp, locale)}</span>
                    <span className="text-[13px] text-[#5b7390]">{t("pricing_page.per_month")}</span>
                  </div>
                  <p className="mt-1 text-[12px] font-semibold text-[#5b7390]">{t("tiers.per_company")}</p>
                </>
              )}
              <ul className="mt-6 flex flex-col gap-2.5">
                {i18n.includes.map((k) => (
                  <li key={k} className="flex items-start gap-2 text-[14px] leading-snug text-[#33507a]">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#0077b6]" strokeWidth={3} />
                    <span>{t(k)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[12px] text-[#5b7390]">
                {t("tiers.modules")}:{" "}
                {apps.map((a) => (APP_I18N[a.slug] ? t(APP_I18N[a.slug].name) : a.name)).join(" + ")}
              </p>
              <div className="mt-6">
                {tier.key === "large" ? (
                  <LinkButton href="/contact" variant="outline" className="w-full">
                    {t("tiers.talk.cta")}
                  </LinkButton>
                ) : (
                  <LinkButton href="https://app.mekovault.com/signup" external variant={featured ? "primary" : "outline"} className="w-full">
                    {t("hero.cta.signup")}
                  </LinkButton>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-5 max-w-3xl text-[13px] leading-relaxed text-[#5b7390]">
        {t("tiers.accounts_note")}{" "}
        {currency === "CLP"
          ? t("tiers.note.clp")
          : t("tiers.note.usd", { date: FX_REFERENCE.date })}{" "}
        {t("tiers.note.more")}
      </p>
    </div>
  );
}
