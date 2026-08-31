"use client";

/**
 * WorkflowDiagram: flow interactivo de un onboarding real de punta a punta.
 * Interactive moment de /products (10k-websites §6). Click en un paso
 * revela el detalle del backend real que lo ejecuta. Sin video, sin
 * gradients ubicuos, sin iconos lucide en cada paso.
 */

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type WorkflowStep = {
  actor: string;
  action: string;
  service: string;
  duration: string;
  detail: string;
};

const STEPS: WorkflowStep[] = [
  {
    actor: "Recursos Humanos",
    action: "Solicita la cuenta",
    service: "Formulario en el portal",
    duration: "",
    detail:
      "El área de RRHH completa un formulario con los datos del nuevo empleado: nombre, apellidos, RUT, cargo, fecha de inicio. Si su rol tiene permisos de crear cuentas, el ticket entra a la cola directo. Si no, queda pendiente de aprobación.",
  },
  {
    actor: "Mekovault",
    action: "Detecta duplicados",
    service: "Verificación de identidad",
    duration: "",
    detail:
      "El sistema busca en el registro histórico si el RUT o el nombre completo ya existieron en la empresa. Si detecta un match, avisa al admin: quizás la persona ya trabajó acá, o hay otro empleado con el mismo nombre. El admin decide: cuenta nueva, reactivar la anterior, o cuenta distinta con nombre ampliado.",
  },
  {
    actor: "Admin IT",
    action: "Aprueba la solicitud",
    service: "Un click en la consola",
    duration: "",
    detail:
      "El admin ve la solicitud en su inbox. Confirma dominio corporativo, elige qué acción tomar, y aprieta \"Provisionar\". El ticket queda en estado resuelto y la operación entra a la cola de ejecución.",
  },
  {
    actor: "Mekovault",
    action: "Envía la orden al provider",
    service: "Cola async con reintentos",
    duration: "",
    detail:
      "La orden se ejecuta en background contra Google Workspace o Microsoft Entra, según el tenant. Reintentos exponenciales, circuit breaker por conexión, y una cola muerta si algo falla. El admin no se queda esperando en la pantalla.",
  },
  {
    actor: "Google / Microsoft",
    action: "Crea la cuenta",
    service: "Directory API del provider",
    duration: "",
    detail:
      "El provider crea la cuenta corporativa con la password temporal. Mekovault registra el resultado en su base: qué cuenta se creó, cuándo, con qué grupos y OU, y quién lo autorizó. El audit log queda firmado y no se puede editar.",
  },
  {
    actor: "Mekovault",
    action: "Notifica al empleado",
    service: "Email con branding del tenant",
    duration: "",
    detail:
      "Se envía un email al correo personal del nuevo empleado con los datos de acceso. El template lleva el logo y color de tu empresa, no de Mekovault. Si el admin activó \"restaurar grupos previos\" (caso rehire), el sistema reasigna en cascada las membresías que tenía antes.",
  },
];

export function WorkflowDiagram() {
  const [selected, setSelected] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Autoplay: rota los pasos cada 3.5s hasta que el user clickea o hover-pause.
  useEffect(() => {
    if (!autoplay) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    autoplayRef.current = setInterval(() => {
      setSelected((s) => (s + 1) % STEPS.length);
    }, 3500);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoplay]);

  const current = STEPS[selected]!;

  return (
    <div
      className="grid gap-6 lg:grid-cols-[280px_1fr]"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(false)} // permanent pause on first interaction
    >
      {/* Steps rail vertical */}
      <div className="relative">
        <div aria-hidden className="absolute left-4 top-2 bottom-2 w-px bg-border" />
        <ol className="relative space-y-1">
          {STEPS.map((s, i) => {
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
                    active
                      ? "bg-primary/5"
                      : "hover:bg-muted/50",
                  )}
                >
                  <span
                    className={cn(
                      "relative mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 bg-background transition-all",
                      active
                        ? "border-primary shadow-[0_0_0_4px_var(--accent-muted)]"
                        : past
                          ? "border-primary/60"
                          : "border-border",
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        active ? "bg-primary" : past ? "bg-primary/60" : "bg-transparent",
                      )}
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className={cn(
                      "font-mono text-[10px] uppercase tracking-widest",
                      active ? "text-primary" : "text-muted-foreground",
                    )}>
                      {s.actor}
                    </div>
                    <div className={cn(
                      "text-sm",
                      active ? "font-medium text-foreground" : "text-muted-foreground",
                    )}>
                      {s.action}
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Detalle del paso activo */}
      <div className="glass relative overflow-hidden rounded-2xl p-6 sm:p-8">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-dot opacity-20 [mask-image:radial-gradient(ellipse_at_bottom_right,black,transparent_60%)]" />
        <div className="relative">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              paso {selected + 1} / {STEPS.length}
            </span>
            <span className="font-mono text-xs text-primary/80">{current.service}</span>
          </div>
          <h3 className="mt-3 font-heading text-2xl tracking-tight">
            {current.action}
          </h3>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            {current.detail}
          </p>
        </div>
      </div>
    </div>
  );
}
