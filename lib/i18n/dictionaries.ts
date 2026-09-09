/**
 * Índice i18n del sitio de marketing (mekovault.com).
 *
 * Locales: es-CL (base), es-AR, es-MX, en-US, pt-BR.
 * Los diccionarios viven en ./locales/*.ts; es-AR y es-MX extienden es-CL.
 *
 * El selector muestra SOLO bandera + nombre natural (nunca códigos).
 */

import esCL, { type Dictionary, type TranslationKey } from "./locales/es-CL";
import esAR from "./locales/es-AR";
import esMX from "./locales/es-MX";
import enUS from "./locales/en-US";
import ptBR from "./locales/pt-BR";

export const LOCALES = ["es-CL", "es-AR", "es-MX", "en-US", "pt-BR"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es-CL";

export const LOCALE_LABELS: Record<Locale, { native: string; flag: string }> = {
  "es-CL": { native: "Español (Chile)", flag: "🇨🇱" },
  "es-AR": { native: "Español (Argentina)", flag: "🇦🇷" },
  "es-MX": { native: "Español (México)", flag: "🇲🇽" },
  "en-US": { native: "English (US)", flag: "🇺🇸" },
  "pt-BR": { native: "Português", flag: "🇧🇷" },
};

export type { TranslationKey, Dictionary };

export const dictionaries: Record<Locale, Dictionary> = {
  "es-CL": esCL,
  "es-AR": esAR,
  "es-MX": esMX,
  "en-US": enUS,
  "pt-BR": ptBR,
};

/**
 * Normaliza cualquier tag (cookie vieja "es-419"/"en", Accept-Language,
 * localStorage) a un locale soportado.
 *
 *   es-AR → es-AR · es-MX → es-MX · cualquier otro es-* → es-CL
 *   pt*   → pt-BR · resto → en-US
 */
export function normalizeLocale(raw: string | undefined | null): Locale | null {
  if (!raw) return null;
  const lower = raw.toLowerCase().trim().replace("_", "-");
  if (!lower) return null;
  const direct = LOCALES.find((l) => l.toLowerCase() === lower);
  if (direct) return direct;
  const [lang, region] = lower.split("-");
  if (lang === "es") {
    if (region === "ar") return "es-AR";
    if (region === "mx") return "es-MX";
    return "es-CL";
  }
  if (lang === "pt") return "pt-BR";
  if (lang === "en") return "en-US";
  return null;
}

/** Locale para <html lang> (todos son tags BCP-47 válidos). */
export function htmlLang(locale: Locale): string {
  return locale;
}
