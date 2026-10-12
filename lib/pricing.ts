import type { Locale } from "./i18n/routing";

/**
 * Modelo de precios (decisión de Jorge, 2026-10-12): se paga por cuenta
 * administrada de Google Workspace, con una barra que elige la cantidad.
 *
 * - 1 a 20 cuentas: gratis para siempre.
 * - De 21 en adelante: un precio por cuenta al mes, más barato por tramo.
 * - Más de 200: a conversar.
 *
 * Incluido en ese precio: la integración con Google Workspace (altas, bajas,
 * bloqueos, correo, archivos, licencias) y las solicitudes (ticketera). Todo lo
 * demás es adicional con su propio precio por empresa: nómina conectada,
 * registro y auditoría, Compras de software, aplicaciones vinculadas y las
 * mini apps por plataforma (`lib/miniapps.ts`).
 *
 * Son precios de lista publicados; el cobro del portal se ajusta aparte.
 */

export const FREE_ACCOUNTS = 20;
export const TALK_ABOVE = 200;
export const SLIDER_MAX = 250;

/** Precio por cuenta al mes en USD según la cantidad total de cuentas. */
export const ACCOUNT_TIERS: Array<{ from: number; to: number; usd: number }> = [
  { from: 1, to: 20, usd: 0 },
  { from: 21, to: 50, usd: 1.2 },
  { from: 51, to: 100, usd: 1.0 },
  { from: 101, to: 200, usd: 0.85 },
];

/** USD por cuenta para `n` cuentas; `null` cuando hay que conversar. */
export function perAccountUsd(n: number): number | null {
  if (n > TALK_ABOVE) return null;
  const tier = ACCOUNT_TIERS.find((t) => n >= t.from && n <= t.to) ?? ACCOUNT_TIERS[0]!;
  return tier.usd;
}

/** Total mensual en USD del precio base (todas las cuentas al precio del tramo). */
export function baseMonthlyUsd(n: number): number | null {
  const rate = perAccountUsd(n);
  if (rate === null) return null;
  return n <= FREE_ACCOUNTS ? 0 : Math.round(n * rate * 100) / 100;
}

export type AddonKey = "nomina" | "audit" | "compras" | "apps";

export interface Addon {
  key: AddonKey;
  /** Precio de lista por empresa al mes, en CLP. */
  clp: number;
  /** Página con más detalle. */
  href?: string;
}

export const ADDONS: Addon[] = [
  { key: "nomina", clp: 27_900, href: "/conectores/buk" },
  { key: "audit", clp: 24_900, href: "/account-governance" },
  { key: "compras", clp: 24_900, href: "/compras-de-software" },
  { key: "apps", clp: 17_900, href: "/recursos/aplicaciones-vinculadas" },
];

/**
 * Tipo de cambio de referencia para pasar entre USD y CLP.
 * Se actualiza a mano; la fecha se muestra en la página.
 */
export const FX_REFERENCE = { clpPerUsd: 950, usdPerClp: 1 / 950, date: "2026-10-11" };

/** Moneda en la que se presenta el precio según el idioma de la URL. */
export function displayCurrency(locale: Locale): "CLP" | "USD" {
  return locale === "es-CL" ? "CLP" : "USD";
}

export function clpToUsd(clp: number): number {
  return Math.round(clp * FX_REFERENCE.usdPerClp);
}

export function usdToClp(usd: number): number {
  return Math.round(usd * FX_REFERENCE.clpPerUsd);
}

export function formatUSD(v: number, decimals = 0): string {
  return `US$ ${new Intl.NumberFormat("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(v)}`;
}

export function formatCLPAmount(v: number): string {
  return `$${new Intl.NumberFormat("es-CL", { maximumFractionDigits: 0 }).format(v)} CLP`;
}

/** Un monto en CLP mostrado en la moneda del idioma. */
export function formatPrice(clp: number, locale: Locale): string {
  return displayCurrency(locale) === "CLP" ? formatCLPAmount(clp) : formatUSD(clpToUsd(clp));
}

/** Un monto en USD mostrado en la moneda del idioma (con decimales en USD). */
export function formatUsdPrice(usd: number, locale: Locale, decimals = 0): string {
  return displayCurrency(locale) === "CLP" ? formatCLPAmount(usdToClp(usd)) : formatUSD(usd, decimals);
}

/** Precio por cuenta del primer tramo pagado, para el texto del inicio. */
export function formatStartingRate(locale: Locale): string {
  return formatUsdPrice(ACCOUNT_TIERS[1]!.usd, locale, 2);
}
