"use client";

/**
 * TimelineCompare: la misma salida de una persona, hecha a mano vs con
 * Mekovault. Sin números inventados: contraste cualitativo del esfuerzo.
 * El slider deja al lector decidir dónde le duele más. Copy 100% desde
 * el diccionario (localizada).
 */

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n/I18nProvider";

const ROW_IDS = ["r1", "r2", "r3", "r4", "r5", "r6", "r7"] as const;

export function TimelineCompare() {
  const t = useT();
  // 0 = todo manual, 100 = todo Mekovault.
  const [pos, setPos] = useState(50);
  const side: "manual" | "meko" = pos < 50 ? "manual" : "meko";

  const rows = ROW_IDS.map((id) => ({
    step: t(`compare.${id}.step`),
    manual: t(`compare.${id}.manual`),
    meko: t(`compare.${id}.meko`),
  }));

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <div>
        <div className="mb-2 flex items-center justify-between text-xs font-mono uppercase tracking-widest">
          <span className={cn(side === "manual" ? "text-foreground" : "text-muted-foreground")}>
            {t("compare.left")}
          </span>
          <span className={cn(side === "meko" ? "text-foreground" : "text-muted-foreground")}>
            {t("compare.right")}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="w-full accent-[var(--accent)]"
          aria-label={t("compare.aria")}
        />
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border">
        <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-muted/40 px-3 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <span>{t("compare.col.step")}</span>
          <span className={cn(side === "manual" && "text-foreground")}>{t("compare.col.manual")}</span>
          <span className={cn(side === "meko" && "text-foreground")}>{t("compare.col.meko")}</span>
        </div>
        <div className="divide-y">
          {rows.map((r) => (
            <div
              key={r.step}
              className="grid grid-cols-[1.2fr_1fr_1fr] items-center gap-2 px-3 py-2 text-sm"
            >
              <span className="font-medium">{r.step}</span>
              <span
                className={cn(
                  "flex items-center gap-1.5 text-xs transition-opacity",
                  side === "manual"
                    ? "text-foreground opacity-100"
                    : "text-muted-foreground opacity-40",
                )}
              >
                <XCircle className="size-3 shrink-0 text-red-500" />
                <span className="truncate">{r.manual}</span>
              </span>
              <span
                className={cn(
                  "flex items-center gap-1.5 text-xs transition-opacity",
                  side === "meko"
                    ? "text-foreground opacity-100"
                    : "text-muted-foreground opacity-40",
                )}
              >
                <CheckCircle2 className="size-3 shrink-0 text-emerald-500" />
                <span className="truncate">{r.meko}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
