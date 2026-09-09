/**
 * Server-side locale detection.
 *
 * Se ejecuta en Vercel ANTES de renderizar el HTML. El HTML sale ya en el
 * idioma correcto, sin flash de switch en el cliente.
 *
 * Precedencia:
 *   1. Cookie `mekovault_locale` (si el user ya eligió alguna vez)
 *   2. Accept-Language del browser:
 *        es-AR → es-AR · es-MX → es-MX · otro es-* → es-CL
 *        pt*   → pt-BR · resto → en-US
 *   3. DEFAULT_LOCALE (es-CL)
 */

import { cookies, headers } from "next/headers";
import { DEFAULT_LOCALE, normalizeLocale, type Locale } from "./dictionaries";

const COOKIE_KEY = "mekovault_locale";

/**
 * Parsea el Accept-Language y devuelve el primer locale soportado según
 * el peso `q`. Ej: "es-AR,es;q=0.9,en;q=0.8" → "es-AR".
 * Si el header tiene un idioma que no soportamos con mayor peso que uno
 * que sí (ej. "fr,en;q=0.8"), gana el soportado ("en-US").
 */
function parseAcceptLanguage(accept: string | null): Locale | null {
  if (!accept) return null;
  const items = accept
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return {
        tag: (tag ?? "").trim(),
        q: q ? parseFloat(q) : 1,
      };
    })
    .filter((x) => x.tag && x.tag !== "*")
    .sort((a, b) => b.q - a.q);

  for (const item of items) {
    const loc = normalizeLocale(item.tag);
    if (loc) return loc;
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
      const fromCookie = normalizeLocale(decodeURIComponent(cookieVal));
      if (fromCookie) return fromCookie;
    }
  } catch {
    /* cookies() puede fallar en algún contexto edge */
  }

  // 2. Accept-Language del browser
  try {
    const headerStore = await headers();
    const fromAccept = parseAcceptLanguage(headerStore.get("accept-language"));
    if (fromAccept) return fromAccept;
    // Header presente pero sin idioma soportado → en-US (regla "resto → en-US")
    if (headerStore.get("accept-language")) return "en-US";
  } catch {
    /* ignore */
  }

  return DEFAULT_LOCALE;
}
