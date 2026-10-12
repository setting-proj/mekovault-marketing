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

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Share2 } from "lucide-react";

import { LinkButton } from "@/components/Button";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { localizePath } from "@/lib/i18n/routing";

const MONTHS_UNNOTICED = 6;

export function LeakCalculator() {
  const { t, locale } = useI18n();
  const [people, setPeople] = useState(120);
  const [turnover, setTurnover] = useState(20);
  const [cost, setCost] = useState(12);
  const [shared, setShared] = useState<"idle" | "copied" | "failed">("idle");

  // Valores compartidos por enlace (?p=personas&t=rotación&c=costo), solo en el navegador.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const num = (k: string, min: number, max: number) => {
      const v = Number(q.get(k));
      return q.has(k) && Number.isFinite(v) && v >= min && v <= max ? v : null;
    };
    const p = num("p", 10, 1000);
    const tv = num("t", 0, 60);
    const c = num("c", 1, 40);
    if (p !== null) setPeople(p);
    if (tv !== null) setTurnover(tv);
    if (c !== null) setCost(c);
  }, []);

  async function share() {
    const url = `${window.location.origin}${localizePath(locale, "/calculadora-licencias")}?p=${people}&t=${turnover}&c=${cost}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: t("calc.title"), url });
      } else {
        await navigator.clipboard.writeText(url);
      }
      setShared("copied");
    } catch {
      setShared("failed");
    }
    window.setTimeout(() => setShared("idle"), 4000);
  }

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
    <div className="rounded-[12px] border border-[#c9dde8] bg-white p-6 sm:p-8">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="min-w-0 space-y-6">
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

        <div className="rounded-[12px] border border-[#dbeaf2] bg-[#f7fbfd] p-6 sm:p-8">
          <p className="text-sm font-bold text-[#0077b6]">
            {t("calc.leavers", { n: leavers })}
          </p>
          <p className="mt-4 text-sm font-semibold text-[#5b7390]">{t("calc.result.label")}</p>
          <p
            aria-live="polite"
            className="mt-1 text-4xl font-extrabold tabular-nums tracking-[-0.03em] text-[#03045e] sm:text-5xl"
          >
            {money.format(annual)}
          </p>
          <p className="mt-2 text-sm font-semibold text-[#33507a]">
            {t("calc.result.monthly", { v: money.format(monthly) })}
          </p>
          <p className="mt-5 text-xs leading-relaxed text-[#5b7390]">
            {t("calc.assumption")}
          </p>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-[#03045e]">{t("calc.compare")}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <LinkButton href="https://app.mekovault.com/signup" external size="lg" className="w-full sm:w-auto">
              {t("calc.cta")} <ArrowRight />
            </LinkButton>
            <button
              type="button"
              onClick={share}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[10px] border border-[#c9dde8] bg-white px-5 text-sm font-bold text-[#03045e] transition-colors hover:border-[#0077b6]"
            >
              <Share2 className="size-4" />
              {shared === "copied" ? t("calc.share.copied") : shared === "failed" ? t("calc.share.failed") : t("calc.share")}
            </button>
          </div>
          <p className="mt-2 text-xs text-[#5b7390]">{t("calc.share.hint")}</p>
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
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <label htmlFor={id} className="text-sm font-bold text-[#03045e]">
          {label}
        </label>
        <div className="flex items-center gap-1.5 text-sm tabular-nums">
          {prefix && <span className="text-xs font-semibold text-[#5b7390]">{prefix}</span>}
          <input
            id={id}
            type="number"
            inputMode="numeric"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(clamp(Number(e.target.value)))}
            className="h-9 w-24 rounded-md border border-[#c9dde8] bg-white px-2 text-right font-semibold outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/25"
          />
          {suffix && <span className="text-xs font-semibold text-[#5b7390]">{suffix}</span>}
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
        className="mt-2 w-full"
      />
      {hint && <p className="mt-1 text-xs text-[#5b7390]">{hint}</p>}
    </div>
  );
}
