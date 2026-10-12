/**
 * Idiomas por URL (SEO): cada mercado tiene su propia dirección y las
 * versiones se unen con `hreflang`. Chile (es-CL) vive en la raíz; el resto
 * lleva un prefijo corto. Este archivo no importa diccionarios para que el
 * middleware siga siendo liviano.
 *
 *   /            → es-CL (base)
 *   /ar/...      → es-AR
 *   /mx/...      → es-MX
 *   /en/...      → en-US
 *   /pt/...      → pt-BR
 */

export const SITE_URL = "https://www.mekovault.com";

export type Locale = "es-CL" | "es-AR" | "es-MX" | "es-ES" | "en-US" | "pt-BR";

export const DEFAULT_LOCALE: Locale = "es-CL";

export const LOCALE_PREFIX: Record<Locale, string> = {
  "es-CL": "",
  "es-AR": "/ar",
  "es-MX": "/mx",
  "es-ES": "/es",
  "en-US": "/en",
  "pt-BR": "/pt",
};

export const PREFIX_TO_LOCALE: Record<string, Locale> = {
  ar: "es-AR",
  mx: "es-MX",
  es: "es-ES",
  en: "en-US",
  pt: "pt-BR",
};

export const ALL_LOCALES: Locale[] = ["es-CL", "es-AR", "es-MX", "es-ES", "en-US", "pt-BR"];

/** Normaliza un tag (cookie, Accept-Language) a un locale soportado, sin diccionarios. */
export function normalizeLocaleTag(raw: string | undefined | null): Locale | null {
  if (!raw) return null;
  const lower = raw.toLowerCase().trim().replace("_", "-");
  if (!lower) return null;
  const direct = ALL_LOCALES.find((l) => l.toLowerCase() === lower);
  if (direct) return direct;
  const [lang, region] = lower.split("-");
  if (lang === "es") {
    if (region === "ar") return "es-AR";
    if (region === "mx") return "es-MX";
    if (region === "es") return "es-ES";
    return "es-CL";
  }
  if (lang === "pt") return "pt-BR";
  if (lang === "en") return "en-US";
  return null;
}

/** Separa el prefijo de idioma de una ruta: "/ar/pricing" → { locale: "es-AR", path: "/pricing" }. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const seg = pathname.split("/")[1] ?? "";
  const locale = PREFIX_TO_LOCALE[seg];
  if (!locale) return { locale: DEFAULT_LOCALE, path: pathname || "/" };
  const rest = pathname.slice(seg.length + 1);
  return { locale, path: rest === "" ? "/" : rest };
}

/** Ruta pública para un locale: localizePath("es-AR", "/pricing") → "/ar/pricing". */
export function localizePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const prefix = LOCALE_PREFIX[locale];
  if (!prefix) return clean;
  return clean === "/" ? prefix : `${prefix}${clean}`;
}

/** URL absoluta (con www) para el sitemap, las canónicas y el hreflang. */
export function absoluteUrl(locale: Locale, path: string): string {
  return `${SITE_URL}${localizePath(locale, path)}`;
}

/** Código hreflang por locale (BCP-47). */
export const HREFLANG: Record<Locale, string> = {
  "es-CL": "es-CL",
  "es-AR": "es-AR",
  "es-MX": "es-MX",
  "es-ES": "es-ES",
  "en-US": "en-US",
  "pt-BR": "pt-BR",
};

export const OG_LOCALE: Record<Locale, string> = {
  "es-CL": "es_CL",
  "es-AR": "es_AR",
  "es-MX": "es_MX",
  "es-ES": "es_ES",
  "en-US": "en_US",
  "pt-BR": "pt_BR",
};

/**
 * Segmento interno de `app/[locale]`. Igual al prefijo público, salvo Chile,
 * que en la URL no lleva prefijo y por dentro es `cl` (el middleware reescribe
 * `/x` a `/cl/x` y redirige `/cl/x` a `/x`).
 */
export const SEGMENT_TO_LOCALE: Record<string, Locale> = { cl: "es-CL", ...PREFIX_TO_LOCALE };
export const LOCALE_SEGMENTS: string[] = Object.keys(SEGMENT_TO_LOCALE);
