/**
 * Idioma del request, server-side.
 *
 * La URL manda: el middleware traduce el prefijo (`/ar`, `/mx`, `/en`, `/pt`)
 * a la cabecera `x-mv-locale` y deja la ruta sin prefijo en `x-mv-path`.
 * Sin cabecera (por ejemplo, fuera del middleware) es es-CL.
 */

import { headers } from "next/headers";
import { DEFAULT_LOCALE, type Locale } from "./dictionaries";
import { normalizeLocaleTag } from "./routing";

export async function detectLocaleServer(): Promise<Locale> {
  try {
    const h = await headers();
    const fromUrl = normalizeLocaleTag(h.get("x-mv-locale"));
    if (fromUrl) return fromUrl;
  } catch {
    /* fuera de un request */
  }
  return DEFAULT_LOCALE;
}

/** Ruta sin prefijo de idioma del request actual ("/pricing"). */
export async function currentPathServer(): Promise<string> {
  try {
    const h = await headers();
    return h.get("x-mv-path") || "/";
  } catch {
    return "/";
  }
}
