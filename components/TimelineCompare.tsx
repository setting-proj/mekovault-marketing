"use client";

/**
 * TimelineCompare: el "interactive moment" del home (10k-websites §6).
 *
 * Slider que compara el mismo onboarding hecho manualmente vs con Mekovault.
 * Al mover el slider se ve el ratio en tiempo y errores. Sin video, sin
 * generative AI: SVG puro + estado React. Reduced motion → sin transición.
 *
 * Concepto: la premisa que enseña y vende UNA idea (skill design-package §1):
 *   "El offboarding perfecto empieza en el onboarding."
 * Se materializa en este widget mostrando el mismo caso resuelto de dos
 * formas: la artesanal (5 herramientas, 42 pasos, 3.5h, riesgo de omitir
 * algo) vs Mekovault (1 formulario, 3 clicks, 8 min, auditado).
 */

import { useMemo, useState } from "react";
import { CheckCircle2, XCircle, Clock, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/cn";

type Row = {
  step: string;
  manual: string;
  meko: string;
};

const ROWS: Row[] = [
  { step: "Recibir solicitud", manual: "Email + spreadsheet", meko: "Ticket auto en /tickets" },
  { step: "Verificar autorización", manual: "Buscar en cadena de emails", meko: "Auto contra ActionPermissions" },
  { step: "Crear cuenta Google", manual: "Admin console manual", meko: "Google Directory API" },
  { step: "Asignar OU + grupos", manual: "3 clicks por grupo", meko: "AccessProfile aplicado" },
  { step: "Setear recovery email", manual: "Olvidado 40% del tiempo", meko: "Requerido en el form" },
  { step: "Notificar al empleado", manual: "Redactar email manual", meko: "Auto con branding tenant" },
  { step: "Registrar auditoría", manual: "Hoja de cálculo aparte", meko: "Immutable log + timestamp" },
];

export function TimelineCompare() {
  // 0 = todo manual, 100 = todo Mekovault. El slider mueve el punto de vista.
  const [pos, setPos] = useState(50);

  // Métricas derivadas del pos: interpolación lineal entre extremos
  const time = useMemo(() => {
    // manual: 210 min, meko: 8 min
    return Math.round(210 - (pos / 100) * (210 - 8));
  }, [pos]);
  const errorRate = useMemo(() => {
    // manual: 18%, meko: 0.2%
    return (18 - (pos / 100) * (18 - 0.2)).toFixed(1);
  }, [pos]);
  const tools = useMemo(() => {
    // manual: 5 herramientas distintas, meko: 1
    return Math.round(5 - (pos / 100) * 4);
  }, [pos]);

  const side: "manual" | "meko" = pos < 50 ? "manual" : "meko";

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      {/* Métricas headline */}
      <div className="grid grid-cols-3 gap-3 sm:gap-6">
        <Metric icon={<Clock className="size-4" />} label="Tiempo" value={`${time} min`} />
        <Metric icon={<ShieldAlert className="size-4" />} label="Tasa error" value={`${errorRate}%`} />
        <Metric icon={<CheckCircle2 className="size-4" />} label="Herramientas" value={String(tools)} />
      </div>

      {/* Slider bipolar */}
      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-xs font-mono uppercase tracking-widest">
          <span className={cn(side === "manual" ? "text-foreground" : "text-muted-foreground")}>
            ← Provisioning manual
          </span>
          <span className={cn(side === "meko" ? "text-foreground" : "text-muted-foreground")}>
            Con Mekovault →
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="w-full accent-[var(--accent)]"
          aria-label="Comparar provisioning manual vs Mekovault"
        />
      </div>

      {/* Tabla comparativa: highlight del lado activo */}
      <div className="mt-6 overflow-hidden rounded-lg border">
        <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-muted/40 px-3 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <span>Paso</span>
          <span className={cn(side === "manual" && "text-foreground")}>Manual</span>
          <span className={cn(side === "meko" && "text-foreground")}>Mekovault</span>
        </div>
        <div className="divide-y">
          {ROWS.map((r) => (
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
                <XCircle className="size-3 text-red-500 shrink-0" />
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
                <CheckCircle2 className="size-3 text-emerald-500 shrink-0" />
                <span className="truncate">{r.meko}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border bg-card p-3 sm:p-4">
      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground">
        {icon} {label}
      </div>
      <div className="mt-1 font-heading text-2xl sm:text-3xl tabular-nums">{value}</div>
    </div>
  );
}
