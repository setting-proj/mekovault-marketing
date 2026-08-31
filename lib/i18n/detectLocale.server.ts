/**
 * Server-side locale detection.
 *
 * Se ejecuta en Vercel Edge/Node ANTES de renderizar el HTML. El HTML sale
 * ya en el idioma correcto → sin flash de switch en el cliente.
 *
 * Precedencia:
 *   1. Cookie `mekovault_locale` (si el user ya eligió alguna vez)
 *   2. Accept-Language header del browser
 *   3. DEFAULT_LOCALE (es-419)
 */

import { cookies, headers } from "next/headers";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "./dictionaries";

const COOKIE_KEY = "mekovault_locale";

function normalizeToSupported(raw: string | undefined | null): Locale {
  if (!raw) return DEFAULT_LOCALE;
  const lower = raw.toLowerCase().trim();
  const direct = LOCALES.find((l) => l.toLowerCase() === lower);
  if (direct) return direct;
  const lang = (lower.split("-")[0] ?? "").trim();
  if (lang === "es") return "es-419";
  if (lang === "pt") return "pt-BR";
  if (lang === "en") return "en";
  return DEFAULT_LOCALE;
}

/**
 * Parsea el Accept-Language header y devuelve el primer locale soportado.
 * Ej: "es-CL,es;q=0.9,en;q=0.8,pt;q=0.7" → "es-419".
 */
function parseAcceptLanguage(accept: string | null): Locale | null {
  if (!accept) return null;
  const items = accept
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return {
        tag: (tag ?? "").trim().toLowerCase(),
        q: q ? parseFloat(q) : 1,
      };
    })
    .filter((x) => x.tag)
    .sort((a, b) => b.q - a.q);

  for (const item of items) {
    const lang = (item.tag.split("-")[0] ?? "").trim();
    if (lang === "es") return "es-419";
    if (lang === "en") return "en";
    if (lang === "pt") return "pt-BR";
  }
  return null;
}

/**
 * Devuelve el locale detectado desde el request server-side.
 * Uso en layout.tsx (server component).
 */
export async function detectLocaleServer(): Promise<Locale> {
  // 1. Cookie: user ya eligió antes
  try {
    const cookieStore = await cookies();
    const cookieVal = cookieStore.get(COOKIE_KEY)?.value;
    if (cookieVal) {
      return normalizeToSupported(decodeURIComponent(cookieVal));
    }
  } catch {
    /* cookies() puede fallar en algún contexto edge */
  }

  // 2. Accept-Language del browser
  try {
    const headerStore = await headers();
    const accept = headerStore.get("accept-language");
    const fromAccept = parseAcceptLanguage(accept);
    if (fromAccept) return fromAccept;
  } catch {
    /* ignore */
  }

  return DEFAULT_LOCALE;
}
