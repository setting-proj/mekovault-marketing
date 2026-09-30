"use client";

/**
 * Pantalla de Licencias por plataforma, dibujada en HTML.
 * Se usa en el home (sección 3) y en /license-control.
 */

import { useT } from "@/lib/i18n/I18nProvider";
import { PanelCaption, StatCard, TableHead, TableRow } from "./shared";

const COLS = "minmax(0,1fr) 88px 72px 72px 150px";

export function LicensesPanel() {
  const t = useT();
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-5 rounded-[14px] border border-[#c9dde8] bg-[#f7fbfd] p-5 shadow-window sm:p-7">
        <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
          <div className="text-xl font-extrabold text-[#03045e]">{t("lic.panel.title")}</div>
          <div className="text-[13px] font-semibold text-[#5b7390]">{t("lic.panel.meta")}</div>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard label={t("lic.panel.bought")} value="120" />
          <StatCard label={t("lic.panel.assigned")} value="104" />
          <StatCard label={t("lic.panel.blocked")} value="9" tone="orange" />
          <StatCard label={t("lic.panel.leak")} value="US$ 129" tone="navy" />
        </div>
        <div className="overflow-x-auto rounded-[10px] border border-[#dbeaf2] bg-white text-[13px]">
          <div className="min-w-[520px]">
            <TableHead cols={COLS}>
              <div>{t("lic.panel.col.license")}</div>
              <div>{t("lic.panel.bought")}</div>
              <div>{t("lic.panel.col.inuse")}</div>
              <div>{t("lic.panel.col.unused")}</div>
              <div>{t("lic.panel.col.plan")}</div>
            </TableHead>
            <TableRow cols={COLS}>
              <div className="font-bold text-[#03045e]">Business Standard</div>
              <div className="tabular-nums">100</div>
              <div className="tabular-nums">92</div>
              <div className="font-bold tabular-nums text-[#9a3412]">8</div>
              <div className="text-[#33507a]">{t("lic.panel.plan.annual")}</div>
            </TableRow>
            <TableRow cols={COLS}>
              <div className="font-bold text-[#03045e]">Business Starter</div>
              <div className="tabular-nums">20</div>
              <div className="tabular-nums">12</div>
              <div className="font-bold tabular-nums text-[#9a3412]">1</div>
              <div className="text-[#33507a]">{t("lic.panel.plan.flex")}</div>
            </TableRow>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-[10px] border border-[#fed7aa] bg-[#fff7ed] px-3.5 py-3 text-[13px] leading-relaxed text-[#9a3412]">
          <svg viewBox="0 0 24 24" className="mt-0.5 size-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
            <path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
          </svg>
          <span>
            <strong>{t("lic.panel.alert.strong")}</strong> {t("lic.panel.alert.rest")}
          </span>
        </div>
      </div>
      <PanelCaption>{t("lic.panel.note")}</PanelCaption>
    </div>
  );
}
