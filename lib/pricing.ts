import type { Locale } from "./i18n/routing";

/**
 * Modelo de precios (decisión de Jorge, 2026-10-12): se paga por cuenta
 * administrada de Google Workspace, con una barra que elige la cantidad, y
 * todos los valores se muestran en USD.
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
  /** Precio de lista por empresa al mes, en USD. */
  usd: number;
  /** Página con más detalle. */
  href?: string;
}

export const ADDONS: Addon[] = [
  { key: "nomina", usd: 29, href: "/conectores/buk" },
  { key: "audit", usd: 25, href: "/account-governance" },
  { key: "compras", usd: 25, href: "/compras-de-software" },
  { key: "apps", usd: 19, href: "/recursos/aplicaciones-vinculadas" },
];

/** Tipo de cambio de referencia (solo para la nota de facturación en Chile). */
export const FX_REFERENCE = { clpPerUsd: 950, usdPerClp: 1 / 950, date: "2026-10-11" };

/** En Chile se factura en pesos; en el sitio todo se muestra en USD. */
export function billsInClp(locale: Locale): boolean {
  return locale === "es-CL";
}

/** Dólares con el separador del idioma: "US$ 1,20" en español y portugués, "US$ 1.20" en inglés. */
export function formatUSD(v: number, decimals = 0, locale: Locale = "es-CL"): string {
  const tag = locale === "en-US" ? "en-US" : "es-CL";
  return `US$ ${new Intl.NumberFormat(tag, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(v)}`;
}

/** Precio por cuenta del primer tramo pagado, para el texto del inicio. */
export function formatStartingRate(locale: Locale): string {
  return formatUSD(ACCOUNT_TIERS[1]!.usd, 2, locale);
}
