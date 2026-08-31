"use client";

/**
 * TimelineCompare: comparación honesta entre onboarding manual y Mekovault.
 *
 * Rediseñado post-feedback: SIN números inventados (antes decía "210 min
 * manual vs 8 min Mekovault" que no salían de una medición real). Ahora
 * el value viene de contrastar el ESFUERZO cualitativo, no de simular
 * métricas falsas.
 *
 * El slider deja al lector decidir dónde le duele más. Sin claim de datos.
 */

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/cn";

type Row = {
  step: string;
  manual: string;
  meko: string;
};

const ROWS: Row[] = [
  { step: "Recibir solicitud", manual: "Email + planilla", meko: "Ticket en /tickets/new" },
  { step: "Verificar autorización", manual: "Buscar aprobación en cadena de mails", meko: "Chequeo automático de permissions" },
  { step: "Crear cuenta", manual: "Admin console del provider", meko: "Google Directory / MS Graph API" },
  { step: "Asignar OU + grupos", manual: "Un click por grupo", meko: "Access Profile aplicado" },
  { step: "Setear recovery email", manual: "Fácil de olvidar", meko: "Requerido en el formulario" },
  { step: "Notificar al empleado", manual: "Redactar email a mano", meko: "Auto con branding del tenant" },
  { step: "Registrar auditoría", manual: "Otra planilla aparte", meko: "Audit log inmutable con timestamp" },
];

export function TimelineCompare() {
  // 0 = todo manual, 100 = todo Mekovault. El slider mueve el punto de vista.
  const [pos, setPos] = useState(50);
  const side: "manual" | "meko" = pos < 50 ? "manual" : "meko";

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      {/* Slider bipolar */}
      <div>
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
