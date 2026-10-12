"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Briefcase,
  Calculator,
  Check,
  CheckSquare,
  Cloud,
  FileSignature,
  FileText,
  FolderOpen,
  GitBranch,
  Headphones,
  Image,
  KeyRound,
  Layers,
  LayoutGrid,
  Megaphone,
  MessageSquare,
  Palette,
  PenLine,
  PenTool,
  Receipt,
  Sparkles,
  Ticket,
  TrendingUp,
  Video,
  type LucideIcon,
} from "lucide-react";

import { ArrowLink, LinkButton } from "@/components/Button";
import { StatusPill } from "@/components/panels/shared";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { cn } from "@/lib/cn";
import { APP_PRICE_TIERS, MINI_APPS, quote, type MiniApp } from "@/lib/miniapps";
import { formatUSD } from "@/lib/pricing";

const ICONS: Record<string, LucideIcon> = {
  slack: MessageSquare,
  zoom: Video,
  notion: FileText,
  asana: CheckSquare,
  monday: LayoutGrid,
  hubspot: Megaphone,
  pipedrive: TrendingUp,
  salesforce: Cloud,
  zendesk: Headphones,
  atlassian: Ticket,
  github: GitBranch,
  "1password": KeyRound,
  dropbox: FolderOpen,
  figma: PenTool,
  canva: Palette,
  adobe: Image,
  chatgpt: Sparkles,
  defontana: Calculator,
  nubox: Receipt,
  softland: Briefcase,
  docusign: PenLine,
  webdox: FileSignature,
  zoho: Layers,
};

/**
 * Plataformas de a una: cada una es una mini app y el precio por plataforma
 * baja según cuántas se marquen. El pack lo arma cada empresa; no hay
 * paquetes prearmados (Jorge, 2026-10-12).
 */
export function MiniAppsPicker({
  embedded = false,
  onQuote,
}: {
  /** Dentro del armador de precios: sin panel propio de total ni CTA. */
  embedded?: boolean;
  /** Avisa el total mensual en USD de lo marcado. */
  onQuote?: (totalUsd: number) => void;
} = {}) {
  const { t, locale } = useI18n();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const q = useMemo(() => quote(selected), [selected]);
  useEffect(() => {
    onQuote?.(q.totalUsd);
  }, [q.totalUsd, onQuote]);

  const toggle = (slug: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  const statusLabel = (a: MiniApp) => (a.status === "guided" ? t("apps.status.guided") : t("apps.status.soon"));

  const ladder = (
    <ul className="flex flex-wrap gap-2">
      {APP_PRICE_TIERS.map((tier) => {
        const active = q.count >= tier.from && (tier.to === null || q.count <= tier.to);
        return (
          <li
            key={tier.from}
            className={cn(
              "rounded-full border px-3 py-1 text-[12px] font-semibold",
              active ? "border-[#0077b6] bg-[#f2f8fb] text-[#03045e]" : "border-[#dbeaf2] text-[#5b7390]",
            )}
          >
            {tier.to === null
              ? t("apps.ladder.last", { a: tier.from, price: formatUSD(tier.usd, 0, locale) })
              : t("apps.ladder.row", { a: tier.from, b: tier.to, price: formatUSD(tier.usd, 0, locale) })}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className={cn("grid gap-8 lg:items-start", !embedded && "lg:grid-cols-[minmax(0,1fr)_320px]")}>
      <div className="flex flex-col gap-6">
        {ladder}
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {MINI_APPS.map((a) => {
            const on = selected.has(a.slug);
            const Icon = ICONS[a.slug] ?? Cloud;
            return (
              <button
                key={a.slug}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(a.slug)}
                className={cn(
                  "flex items-center justify-between gap-2 rounded-[10px] border bg-white px-3 py-2.5 text-left transition-colors",
                  on ? "border-[#0077b6] ring-1 ring-[#0077b6]" : "border-[#dbeaf2] hover:border-[#0077b6]",
                )}
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-[8px]",
                      on ? "bg-[#0077b6] text-white" : "bg-[#eaf6fb] text-[#0077b6]",
                    )}
                  >
                    {on ? <Check className="size-4" strokeWidth={3} /> : <Icon className="size-4" />}
                  </span>
                  <span className="truncate text-[14px] font-bold text-[#03045e]">{a.name}</span>
                </span>
                <StatusPill tone={a.status === "guided" ? "gray" : "blue"}>{statusLabel(a)}</StatusPill>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-1 text-[12px] leading-relaxed text-[#5b7390]">
          <p>
            <strong className="text-[#33507a]">{t("apps.status.soon")}:</strong> {t("apps.status.soon.help")}
          </p>
          <p>
            <strong className="text-[#33507a]">{t("apps.status.guided")}:</strong> {t("apps.status.guided.help")}
          </p>
          <p>{t("apps.licenses.note")}</p>
          <p>{t("apps.m365.note")}</p>
        </div>
        {embedded && q.count > 0 && (
          <p className="text-[14px] font-bold text-[#03045e]">
            {t("apps.pack.line", { n: q.count, unit: formatUSD(q.unitUsd, 0, locale), total: formatUSD(q.totalUsd, 0, locale) })}
          </p>
        )}
      </div>

      {!embedded && (
        <aside className="rounded-[14px] border border-[#c9dde8] bg-white p-6 lg:sticky lg:top-[88px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#5b7390]">{t("apps.pack.title")}</p>
          {q.count === 0 ? (
            <p className="mt-3 text-[14px] leading-relaxed text-[#33507a]">{t("apps.quote.empty")}</p>
          ) : (
            <>
              <ul className="mt-3 flex flex-col gap-1.5 text-[14px] text-[#33507a]">
                {q.apps.map((a) => (
                  <li key={a.slug} className="flex justify-between gap-3">
                    <span>{a.name}</span>
                    <span>{formatUSD(q.unitUsd, 0, locale)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[13px] text-[#5b7390]">{t("apps.pack.unit", { n: q.count, unit: formatUSD(q.unitUsd, 0, locale) })}</p>
            </>
          )}
          <div className="mt-5 flex items-baseline justify-between gap-3 border-t border-[#dbeaf2] pt-4">
            <span className="text-[14px] font-bold text-[#03045e]">{t("apps.quote.total")}</span>
            <span className="text-[26px] font-extrabold tracking-[-0.02em] text-[#03045e]">{formatUSD(q.totalUsd, 0, locale)}</span>
          </div>
          <p className="mt-1 text-[12px] text-[#5b7390]">{t("apps.quote.base")}</p>
          <LinkButton href="https://app.mekovault.com/signup" external className="mt-5 w-full">
            {t("apps.quote.cta")}
          </LinkButton>
          <ArrowLink href="/pricing" tone="blue" className="mt-4 text-[13px]">
            {t("apps.pack.pricing_link")}
          </ArrowLink>
        </aside>
      )}
    </div>
  );
}
