"use client";

/**
 * Detalle de una solicitud de baja, dibujado en HTML. Va sobre fondo navy
 * en la sección "Personas pide. Y listo".
 */

import { useT } from "@/lib/i18n/I18nProvider";
import { PanelCaption, StatusPill } from "./shared";

function Event({
  time,
  strong,
  rest,
  tone = "done",
  last = false,
}: {
  time: string;
  strong: string;
  rest: string;
  tone?: "done" | "next";
  last?: boolean;
}) {
  return (
    <div
      className={
        "grid grid-cols-[18px_minmax(0,1fr)] items-start gap-x-3 gap-y-1 py-2.5 sm:grid-cols-[22px_96px_minmax(0,1fr)] " +
        (last ? "" : "border-b border-[#eaf3f8]")
      }
    >
      <span
        className={
          "mt-1.5 ml-1 inline-block size-2.5 rounded-full " + (tone === "done" ? "bg-[#16a34a]" : "bg-[#0077b6]")
        }
      />
      <span className="text-xs font-semibold text-[#5b7390] sm:pt-0.5 sm:text-[13px]">{time}</span>
      <span className="col-span-2 text-[13px] leading-relaxed text-[#03045e] sm:col-span-1">
        <strong className="font-bold">{strong}</strong> {rest}
      </span>
    </div>
  );
}

export function TicketDetailPanel() {
  const t = useT();
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-4 rounded-[14px] bg-white p-5 text-[#03045e] shadow-window sm:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-mono text-xs font-bold text-[#5b7390]">T-055</span>
          <span className="text-base font-extrabold sm:text-lg">
            {t("exit.panel.title")} {t("exit.email.leaver")}
          </span>
          <StatusPill tone="green" className="ml-auto">
            {t("panel.status.done")}
          </StatusPill>
        </div>
        <div className="grid gap-3 text-[13px] sm:grid-cols-3">
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-[#5b7390]">{t("exit.panel.requested")}</span>
            <span className="font-bold">{t("exit.panel.requested_by")}</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-[#5b7390]">{t("exit.panel.lastday")}</span>
            <span className="font-bold">{t("exit.panel.lastday_value")}</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-[#5b7390]">{t("exit.panel.mailto")}</span>
            <span className="truncate font-bold">{t("exit.email.receiver")}</span>
          </div>
        </div>
        <div className="border-t border-[#eaf3f8] pt-1.5">
          <Event time={t("exit.panel.t1")} strong={t("exit.panel.e1.strong")} rest={t("exit.panel.e1.rest")} />
          <Event time={t("exit.panel.t1")} strong={t("exit.panel.e2.strong")} rest={t("exit.panel.e2.rest")} />
          <Event time={t("exit.panel.t3")} strong={t("exit.panel.e3.strong")} rest={t("exit.panel.e3.rest")} />
          <Event time={t("exit.panel.t4")} strong={t("exit.panel.e4.strong")} rest={t("exit.panel.e4.rest")} tone="next" last />
        </div>
      </div>
      <PanelCaption tone="dark">{t("exit.panel.note")}</PanelCaption>
    </div>
  );
}
