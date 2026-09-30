"use client";

/**
 * Pantalla de Plataformas, dibujada en HTML. Se usa en /platforms.
 * Muestra cómo se resuelve cada plataforma: automático, tarea guiada o
 * registrada por la empresa. Ninguna aparece como conectada si no lo está.
 */

import { useT } from "@/lib/i18n/I18nProvider";
import { PanelCaption, StatusPill, TableHead, TableRow, WindowFrame } from "./shared";

const COLS = "minmax(0,1.3fr) 72px minmax(0,1fr) 130px";

export function PlatformsPanel() {
  const t = useT();
  const rows: { name: string; accounts: string; mode: string; tone: "green" | "gray" | "blue"; status: string }[] = [
    { name: "Google Workspace", accounts: "132", mode: t("pf.panel.mode.auto"), tone: "green", status: t("pf.panel.status.ok") },
    { name: "Slack", accounts: "", mode: t("pf.panel.mode.auto"), tone: "gray", status: t("pf.panel.status.soon") },
    { name: "Jira", accounts: "", mode: t("pf.panel.mode.auto"), tone: "gray", status: t("pf.panel.status.soon") },
    { name: "Notion", accounts: "41", mode: t("pf.panel.mode.guided"), tone: "blue", status: t("pf.panel.status.owner") },
    { name: t("pf.panel.row.manual"), accounts: "18", mode: t("pf.panel.mode.manual"), tone: "blue", status: t("pf.panel.status.owner") },
  ];

  return (
    <div className="flex flex-col gap-3.5">
      <WindowFrame url={t("pf.panel.url")}>
        <div className="flex flex-col gap-4 bg-[#f7fbfd] p-4 sm:p-6">
          <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
            <div className="text-xl font-extrabold text-[#03045e]">{t("pf.panel.title")}</div>
            <div className="text-[13px] font-semibold text-[#5b7390]">{t("pf.panel.meta")}</div>
            <span className="ml-auto rounded-lg bg-[#03045e] px-3 py-1.5 text-xs font-bold text-white">{t("pf.panel.add")}</span>
          </div>
          <div className="overflow-x-auto rounded-[10px] border border-[#dbeaf2] bg-white text-[13px]">
            <div className="min-w-[520px]">
              <TableHead cols={COLS}>
                <div>{t("pf.panel.col.platform")}</div>
                <div>{t("pf.panel.col.accounts")}</div>
                <div>{t("pf.panel.col.mode")}</div>
                <div>{t("pf.panel.col.status")}</div>
              </TableHead>
              {rows.map((r) => (
                <TableRow key={r.name} cols={COLS}>
                  <div className="truncate font-bold text-[#03045e]">{r.name}</div>
                  <div className="tabular-nums text-[#33507a]">{r.accounts || "·"}</div>
                  <div className="truncate text-[#33507a]">{r.mode}</div>
                  <div>
                    <StatusPill tone={r.tone}>{r.status}</StatusPill>
                  </div>
                </TableRow>
              ))}
            </div>
          </div>
        </div>
      </WindowFrame>
      <PanelCaption>{t("pf.panel.note")}</PanelCaption>
    </div>
  );
}
