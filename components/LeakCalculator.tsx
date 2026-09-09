"use client";

/**
 * LeakCalculator: mini calculadora estática de la fuga anual en licencias.
 *
 * Inputs: personas, rotación anual estimada (%), costo por licencia (USD/mes).
 * Supuesto: una cuenta olvidada se sigue pagando MONTHS_UNNOTICED meses en
 * promedio antes de que alguien la cierre. Se declara en pantalla.
 *
 *   fuga anual = personas × rotación × costo mensual × meses sin cerrar
 */

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

import { LinkButton } from "@/components/Button";
import { useI18n } from "@/lib/i18n/I18nProvider";

const MONTHS_UNNOTICED = 6;

export function LeakCalculator() {
  const { t, locale } = useI18n();
  const [people, setPeople] = useState(120);
  const [turnover, setTurnover] = useState(20);
  const [cost, setCost] = useState(12);

  const { leavers, annual, monthly } = useMemo(() => {
    const leavers = Math.round((people * turnover) / 100);
    const annual = leavers * cost * MONTHS_UNNOTICED;
    return { leavers, annual, monthly: annual / 12 };
  }, [people, turnover, cost]);

  const money = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }),
    [locale],
  );

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="space-y-6">
          <Field
            id="calc-people"
            label={t("calc.people")}
            value={people}
            min={10}
            max={1000}
            step={5}
            onChange={setPeople}
          />
          <Field
            id="calc-turnover"
            label={t("calc.turnover")}
            hint={t("calc.turnover.hint")}
            value={turnover}
            min={0}
            max={60}
            step={1}
            suffix="%"
            onChange={setTurnover}
          />
          <Field
            id="calc-cost"
            label={t("calc.cost")}
            hint={t("calc.cost.hint")}
            value={cost}
            min={1}
            max={40}
            step={1}
            prefix="USD"
            onChange={setCost}
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl border bg-card p-6 sm:p-8">
          <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-brand-gradient opacity-10 blur-3xl" />
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {t("calc.leavers", { n: leavers })}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{t("calc.result.label")}</p>
          <p
            aria-live="polite"
            className="mt-1 font-heading text-4xl font-semibold tracking-tight text-brand-gradient sm:text-5xl"
          >
            {money.format(annual)}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("calc.result.monthly", { v: money.format(monthly) })}
          </p>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            {t("calc.assumption")}
          </p>
          <p className="mt-3 text-sm font-medium">{t("calc.compare")}</p>
          <div className="mt-6">
            <LinkButton href="https://app.mekovault.com/signup" external size="lg" className="w-full sm:w-auto">
              {t("calc.cta")} <ArrowRight />
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  hint,
  value,
  min,
  max,
  step,
  prefix,
  suffix,
  onChange,
}: {
  id: string;
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (v: number) => void;
}) {
  const clamp = (v: number) => Math.min(max, Math.max(min, Number.isFinite(v) ? v : min));
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        <div className="flex items-center gap-1.5 font-mono text-sm">
          {prefix && <span className="text-xs text-muted-foreground">{prefix}</span>}
          <input
            id={id}
            type="number"
            inputMode="numeric"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(clamp(Number(e.target.value)))}
            className="h-9 w-24 rounded-lg border bg-card px-2 text-right outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
          />
          {suffix && <span className="text-xs text-muted-foreground">{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-[var(--accent)]"
      />
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
