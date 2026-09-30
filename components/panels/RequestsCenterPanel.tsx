"use client";

/**
 * Pantalla del Centro de solicitudes, dibujada en HTML. Es la imagen del hero.
 * Dos callouts numerados explican lo que importa; en pantallas chicas van
 * debajo de la ventana como lista.
 */

import { useT } from "@/lib/i18n/I18nProvider";
import { cn } from "@/lib/cn";
import { StatCard, StatusPill, TableHead, TableRow, WindowFrame } from "./shared";

const COLS = "52px 140px minmax(0,1fr) 96px 124px";

function SideNav() {
  const t = useT();
  const group = "px-2 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6f97b3]";
  const item = "rounded-[7px] px-2.5 py-2";
  return (
    <div className="hidden w-[196px] shrink-0 flex-col gap-1.5 bg-[#03045e] p-4 text-[12.5px] font-semibold text-[#b9d7e6] lg:flex">
      <div className={group}>{t("panel.nav.ops")}</div>
      <div className={item}>{t("panel.nav.tickets")}</div>
      <div className={cn(item, "bg-[#0b2a72] text-white")}>{t("panel.nav.center")}</div>
      <div className={item}>{t("panel.nav.calendar")}</div>
      <div className={item}>{t("panel.nav.origin")}</div>
      <div className={cn(group, "pt-4")}>{t("panel.nav.platforms")}</div>
      <div className={item}>{t("panel.nav.people")}</div>
      <div className={item}>{t("panel.nav.licenses")}</div>
      <div className={item}>{t("panel.nav.tasks")}</div>
      <div className={cn(group, "pt-4")}>{t("panel.nav.settings")}</div>
      <div className={item}>{t("panel.nav.roles")}</div>
      <div className={item}>{t("panel.nav.audit")}</div>
    </div>
  );
}

function Callout({ n, children, className }: { n: number; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#00b4d8] text-xs font-extrabold text-[#03045e] ring-4 ring-[#00b4d8]/25">
        {n}
      </span>
      <span className="rounded-lg bg-[#03045e] px-3 py-2 text-[13px] font-semibold text-white">{children}</span>
    </div>
  );
}

export function RequestsCenterPanel({ cut = true }: { cut?: boolean }) {
  const t = useT();
  const rows = [
    { id: "T-054", kind: t("panel.row.join"), who: t("panel.email.1"), tone: "green" as const, status: t("panel.status.done"), by: t("panel.by.system_day") },
    { id: "T-055", kind: t("panel.row.exit"), who: t("panel.email.2"), tone: "green" as const, status: t("panel.status.done"), by: t("panel.by.system_time") },
    { id: "T-056", kind: t("panel.row.react"), who: `${t("panel.email.2")} · ${t("panel.days3")}`, tone: "blue" as const, status: t("panel.status.approval"), by: t("panel.by.manager") },
    { id: "T-057", kind: t("panel.row.release"), who: t("panel.email.3"), tone: "orange" as const, status: t("panel.status.attention"), by: t("panel.by.google"), highlight: true },
    { id: "T-058", kind: t("panel.row.alias"), who: t("panel.email.4"), tone: "green" as const, status: t("panel.status.done"), by: t("panel.by.support") },
  ];

  return (
    <div className="relative">
      <WindowFrame url={t("panel.url")} cut={cut}>
        <div className="flex min-h-[420px]">
          <SideNav />
          <div className="flex min-w-0 flex-1 flex-col gap-4 bg-[#f7fbfd] p-4 sm:p-5">
            <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
              <div className="text-xl font-extrabold text-[#03045e]">{t("panel.nav.center")}</div>
              <div className="text-[13px] font-semibold text-[#5b7390]">{t("panel.center.meta")}</div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <StatCard label={t("panel.center.stat.auto")} value="4" />
              <StatCard label={t("panel.center.stat.waiting")} value="1" />
              <StatCard label={t("panel.center.stat.attention")} value="1" tone="orange" />
            </div>
            <div className="overflow-x-auto rounded-[10px] border border-[#dbeaf2] bg-white text-[13px]">
              <div className="min-w-[560px]">
                <TableHead cols={COLS}>
                  <div>{t("panel.col.n")}</div>
                  <div>{t("panel.col.request")}</div>
                  <div>{t("panel.col.person")}</div>
                  <div>{t("panel.col.status")}</div>
                  <div>{t("panel.col.by")}</div>
                </TableHead>
                {rows.map((r) => (
                  <TableRow key={r.id} cols={COLS} highlight={r.highlight}>
                    <div className="font-mono text-xs font-bold text-[#5b7390]">{r.id}</div>
                    <div className="truncate font-bold text-[#03045e]">{r.kind}</div>
                    <div className="truncate text-[#33507a]">{r.who}</div>
                    <div>
                      <StatusPill tone={r.tone}>{r.status}</StatusPill>
                    </div>
                    <div className="truncate text-[#5b7390]">{r.by}</div>
                  </TableRow>
                ))}
              </div>
            </div>
          </div>
        </div>
      </WindowFrame>

      {/* Callouts sobre la ventana (desktop) */}
      <Callout n={1} className="absolute left-[26%] top-[41%] hidden lg:flex">
        {t("panel.callout.1")}
      </Callout>
      <Callout n={2} className="absolute left-[26%] top-[72%] hidden lg:flex">
        {t("panel.callout.2")}
      </Callout>

      {/* Callouts como lista (móvil y tablet) */}
      <div className="mt-4 flex flex-col gap-2.5 lg:hidden">
        <Callout n={1}>{t("panel.callout.1")}</Callout>
        <Callout n={2}>{t("panel.callout.2")}</Callout>
      </div>
    </div>
  );
}
