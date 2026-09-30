"use client";

/**
 * WorkflowDiagram: la salida de una persona de principio a fin, en seis
 * pasos. Click en un paso revela el detalle, contado en lenguaje de
 * negocio (sin jerga). Copy 100% desde el diccionario.
 */

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n/I18nProvider";

const STEP_IDS = ["s1", "s2", "s3", "s4", "s5", "s6"] as const;

export function WorkflowDiagram() {
  const t = useT();
  const [selected, setSelected] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const steps = STEP_IDS.map((id) => ({
    actor: t(`wf.${id}.actor`),
    action: t(`wf.${id}.action`),
    service: t(`wf.${id}.service`),
    detail: t(`wf.${id}.detail`),
  }));

  // Autoplay: rota los pasos cada 3.5s hasta que el user interactúa.
  useEffect(() => {
    if (!autoplay) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    autoplayRef.current = setInterval(() => {
      setSelected((s) => (s + 1) % STEP_IDS.length);
    }, 3500);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoplay]);

  const current = steps[selected]!;

  return (
    <div
      className="grid gap-6 lg:grid-cols-[280px_1fr]"
      onMouseEnter={() => setAutoplay(false)}
    >
      <div className="relative">
        <div aria-hidden className="absolute left-4 top-2 bottom-2 w-px bg-[#dbeaf2]" />
        <ol className="relative space-y-1">
          {steps.map((s, i) => {
            const active = selected === i;
            const past = i < selected;
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => {
                    setSelected(i);
                    setAutoplay(false);
                  }}
                  className={cn(
                    "group flex w-full items-start gap-3 rounded-lg px-2 py-2 text-left transition-colors",
                    active ? "bg-[#f2f8fb]" : "hover:bg-[#f7fbfd]",
                  )}
                >
                  <span
                    className={cn(
                      "relative mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 bg-white transition-all",
                      active ? "border-[#0077b6]" : past ? "border-[#0077b6]/60" : "border-[#c9dde8]",
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        active ? "bg-[#0077b6]" : past ? "bg-[#0077b6]/60" : "bg-transparent",
                      )}
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div
                      className={cn(
                        "text-xs font-bold",
                        active ? "text-[#0077b6]" : "text-[#5b7390]",
                      )}
                    >
                      {s.actor}
                    </div>
                    <div
                      className={cn(
                        "text-[15px]",
                        active ? "font-bold text-[#03045e]" : "font-semibold text-[#33507a]",
                      )}
                    >
                      {s.action}
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="rounded-[12px] border border-[#c9dde8] bg-[#f7fbfd] p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="text-xs font-bold text-[#5b7390]">
            {t("workflow.step_of", { n: selected + 1, total: STEP_IDS.length })}
          </span>
          <span className="text-xs font-bold text-[#0077b6]">{current.service}</span>
        </div>
        <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.02em] text-[#03045e]">{current.action}</h3>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#33507a]">
          {current.detail}
        </p>
      </div>
    </div>
  );
}
