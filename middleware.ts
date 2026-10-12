import { NextResponse, type NextRequest } from "next/server";

import {
  DEFAULT_LOCALE,
  LOCALE_PREFIX,
  PREFIX_TO_LOCALE,
  normalizeLocaleTag,
} from "@/lib/i18n/routing";

/**
 * Idiomas por URL con prerender por idioma.
 *
 * Las páginas viven en `app/[locale]/` y se generan en el build una vez por
 * idioma, así que la CDN guarda el HTML. En la URL pública:
 * - `/ar/...`, `/mx/...`, `/es/...`, `/en/...`, `/pt/...` coinciden directo
 *   con el segmento `[locale]`; no hay que reescribir nada.
 * - Sin prefijo es Chile: se reescribe por dentro a `/cl/...` (el segmento
 *   interno de es-CL), que nunca se muestra; si alguien entra a `/cl/...`
 *   se lo redirige a la ruta sin prefijo.
 * - Si la persona eligió otro idioma antes (cookie `mekovault_locale`), se
 *   la lleva a su versión. Los rastreadores no traen cookie, así que ven
 *   cada versión en su propia URL.
 */

const COOKIE_KEY = "mekovault_locale";
const DEFAULT_SEGMENT = "cl";

export const config = {
  // Páginas solamente: nada de _next, api ni archivos con extensión.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const seg = pathname.split("/")[1] ?? "";

  // Idioma con prefijo público: la ruta ya es la del segmento.
  if (PREFIX_TO_LOCALE[seg]) return NextResponse.next();

  // El segmento interno de Chile no es una URL pública.
  if (seg === DEFAULT_SEGMENT) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_SEGMENT.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (req.method === "GET") {
    const chosen = normalizeLocaleTag(req.cookies.get(COOKIE_KEY)?.value);
    if (chosen && chosen !== DEFAULT_LOCALE) {
      const url = req.nextUrl.clone();
      url.pathname = `${LOCALE_PREFIX[chosen]}${pathname === "/" ? "" : pathname}`;
      return NextResponse.redirect(url, 302);
    }
  }

  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_SEGMENT}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}
