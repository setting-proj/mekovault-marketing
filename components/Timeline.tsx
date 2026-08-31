"use client";

/**
 * Timeline: hitos horizontales del proyecto con detalles concretos.
 * Interactive moment de /about (10k-websites §6). Click en un hito
 * revela detalle debajo. Sin dots pulsando ni gradients uniformes
 * que gritan "AI-marketing".
 */

import { useState } from "react";
import { cn } from "@/lib/cn";

export type Milestone = {
  date: string;
  title: string;
  detail: string;
  metric?: string; // detalle cuantitativo opcional (números reales)
};

export function Timeline({ milestones }: { milestones: Milestone[] }) {
  const [selected, setSelected] = useState(0);
  const current = milestones[selected]!;

  return (
    <div className="mt-8">
      {/* Track horizontal */}
      <div className="relative">
        {/* Línea de fondo */}
        <div aria-hidden className="absolute left-0 right-0 top-4 h-px bg-border" />
        {/* Línea de progreso hasta el punto seleccionado */}
        <div
          aria-hidden
          className="absolute left-0 top-4 h-px bg-brand-gradient transition-all duration-500 ease-out"
          style={{
            width: `${milestones.length > 1 ? (selected / (milestones.length - 1)) * 100 : 0}%`,
          }}
        />
        <div className="relative grid" style={{ gridTemplateColumns: `repeat(${milestones.length}, 1fr)` }}>
          {milestones.map((m, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(i)}
              className={cn(
                "group flex flex-col items-center gap-2 py-1 text-left transition-colors",
                selected === i ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span
                className={cn(
                  "relative flex size-8 items-center justify-center rounded-full border-2 bg-background transition-all",
                  selected === i
                    ? "border-primary shadow-[0_0_0_4px_var(--accent-muted)]"
                    : i < selected
                      ? "border-primary/60"
                      : "border-border group-hover:border-primary/40",
                )}
              >
                <span
                  className={cn(
                    "size-2 rounded-full transition-all",
                    selected === i ? "bg-primary" : i < selected ? "bg-primary/60" : "bg-transparent",
                  )}
                />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest">
                {m.date}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Detalle del hito seleccionado */}
      <div className="mt-8 rounded-2xl border bg-card p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="font-heading text-2xl tracking-tight text-brand-gradient">
            {current.title}
          </h3>
          {current.metric && (
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {current.metric}
            </span>
          )}
        </div>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
          {current.detail}
        </p>
      </div>
    </div>
  );
}
