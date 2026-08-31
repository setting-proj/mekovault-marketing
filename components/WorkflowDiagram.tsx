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
    actor: "HR",
    action: "Envía formulario",
    service: "svc-tickets · account-create",
    duration: "0s",
    detail:
      "María del área de RRHH completa un formulario con los datos de Juan Pérez. Nombre, apellidos, RUT, cargo, fecha de inicio. Si su rol tiene ticket_action_permissions=account_create, el ticket se crea directo. Sino, queda pendiente de aprobación.",
  },
  {
    actor: "svc-tickets",
    action: "Corre identity resolution",
    service: "identity_resolution_service.lookup",
    duration: "+1.2s",
    detail:
      "El backend busca en IdentityRegistry si el RUT o el nombre completo ya existieron. Si hay match, se marca en el ticket como HIGH/MEDIUM confidence y el admin decide: create_new, reactivate o create_distinct con username extendido.",
  },
  {
    actor: "Admin IT",
    action: "Aprueba y ejecuta",
    service: "POST /tickets/{id}/resolve-access-request",
    duration: "+3m",
    detail:
      "El admin ve la solicitud en su inbox. Confirma dominio, elige la acción y aprieta 'Provisionar'. En 200ms el sistema publica identity.provisioning.requested al topic RabbitMQ y auto-transiciona el ticket a RESOLVED.",
  },
  {
    actor: "identity-worker",
    action: "Dispatcha a provider",
    service: "super-workspace · provisioning_service.dispatch",
    duration: "+3m 400ms",
    detail:
      "Un consumer del topic mekovault.events crea un ProvisioningRun row en Postgres y publica a la queue workspace.provision. El provisioning_worker toma el mensaje y llama al adapter Google Admin SDK con reintentos exponenciales y circuit breaker.",
  },
  {
    actor: "Google Workspace",
    action: "users.insert",
    service: "Admin SDK Directory API",
    duration: "+3m 6s",
    detail:
      "Google crea la cuenta juan.perez@moov.cl con el password temporal. El adapter devuelve el provider_user_id. El worker lo guarda en LinkedAccount + append en accounts_history + escribe en audit_log inmutable con timestamp firmado.",
  },
  {
    actor: "svc-notifications",
    action: "Envía welcome email",
    service: "handlers.tickets.handle_welcome_email",
    duration: "+3m 12s",
    detail:
      "El worker de notifications consume identity.welcome_email.requested y despacha un email a juan.personal@gmail.com con el correo corporativo listo. El template lleva el logo y color del tenant Moov, no genérico Mekovault.",
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
                      {s.actor} · {s.duration}
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
            <code className="font-mono text-xs text-primary/80">{current.service}</code>
          </div>
          <h3 className="mt-3 font-heading text-2xl italic tracking-tight">
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
