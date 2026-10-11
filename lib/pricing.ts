import type { Locale } from "./i18n/routing";

/**
 * Precios por tamaño de empresa (plan de marketing 2026-10-11, propuesta a Jorge).
 *
 * El cobro real del portal sigue siendo por módulos con descuento (catálogo
 * público). Lo que se muestra aquí son tres configuraciones recomendadas por
 * tramo de personas, con el total que resulta del catálogo y, fuera de
 * Chile, una referencia en dólares. Si Jorge confirma los montos por tramo,
 * pasan al catálogo y a la facturación.
 */

export type TierKey = "free" | "small" | "medium" | "large";

export interface Tier {
  key: TierKey;
  /** Personas en la empresa: [desde, hasta]; `null` = sin tope. */
  people: [number, number | null];
  /** Módulos del catálogo que incluye la configuración recomendada. */
  modules: string[];
  /** Precio mensual sugerido por empresa, en CLP (propuesta; no se cobra aún). */
  suggestedClp: number;
  /** Referencia mensual en USD para fuera de Chile. */
  suggestedUsd: number;
}

export const TIERS: Tier[] = [
  // Jorge, 2026-10-11: hasta 20 cuentas es gratis, solo Google Workspace y solicitudes.
  { key: "free", people: [1, 20], modules: ["super-workspace"], suggestedClp: 0, suggestedUsd: 0 },
  { key: "small", people: [21, 50], modules: ["super-workspace"], suggestedClp: 49_900, suggestedUsd: 59 },
  {
    key: "medium",
    people: [51, 200],
    modules: ["super-workspace", "requests-tickets", "audit-compliance"],
    suggestedClp: 99_900,
    suggestedUsd: 119,
  },
  {
    key: "large",
    people: [201, 500],
    modules: ["super-workspace", "requests-tickets", "audit-compliance"],
    suggestedClp: 199_900,
    suggestedUsd: 239,
  },
];

/**
 * Tipo de cambio de referencia para mostrar precios fuera de Chile.
 * Se actualiza a mano; la fecha se muestra en la página.
 */
export const FX_REFERENCE = { usdPerClp: 1 / 950, date: "2026-10-11" };

/** Moneda en la que se presenta el precio según el idioma de la URL. */
export function displayCurrency(locale: Locale): "CLP" | "USD" {
  return locale === "es-CL" ? "CLP" : "USD";
}

export function clpToUsd(clp: number): number {
  return Math.round(clp * FX_REFERENCE.usdPerClp);
}

export function formatUSD(v: number): string {
  return `US$ ${new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(v)}`;
}

/** Formatea un monto en CLP o, fuera de Chile, su referencia en USD. */
export function formatPrice(clp: number, locale: Locale): string {
  if (displayCurrency(locale) === "CLP") {
    return `$${new Intl.NumberFormat("es-CL", { maximumFractionDigits: 0 }).format(clp)} CLP`;
  }
  return formatUSD(clpToUsd(clp));
}
