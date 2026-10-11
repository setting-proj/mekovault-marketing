import { NextResponse, type NextRequest } from "next/server";

import {
  DEFAULT_LOCALE,
  LOCALE_PREFIX,
  PREFIX_TO_LOCALE,
  normalizeLocaleTag,
} from "@/lib/i18n/routing";

/**
 * Idiomas por URL.
 *
 * - `/ar/...`, `/mx/...`, `/en/...`, `/pt/...` se reescriben a la ruta sin
 *   prefijo y el layout recibe el idioma por cabecera (`x-mv-locale`).
 * - Sin prefijo es Chile (es-CL). Si la persona eligió otro idioma antes
 *   (cookie `mekovault_locale`), se la lleva a su versión. Los rastreadores
 *   no traen cookie, así que ven cada versión en su propia URL.
 */

const COOKIE_KEY = "mekovault_locale";

export const config = {
  // Páginas solamente: nada de _next, api ni archivos con extensión.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const seg = pathname.split("/")[1] ?? "";
  const requestHeaders = new Headers(req.headers);

  const prefixed = PREFIX_TO_LOCALE[seg];
  if (prefixed) {
    const rest = pathname.slice(seg.length + 1) || "/";
    requestHeaders.set("x-mv-locale", prefixed);
    requestHeaders.set("x-mv-path", rest);
    const url = req.nextUrl.clone();
    url.pathname = rest;
    return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  }

  if (req.method === "GET") {
    const chosen = normalizeLocaleTag(req.cookies.get(COOKIE_KEY)?.value);
    if (chosen && chosen !== DEFAULT_LOCALE) {
      const url = req.nextUrl.clone();
      url.pathname = `${LOCALE_PREFIX[chosen]}${pathname === "/" ? "" : pathname}`;
      return NextResponse.redirect(url, 302);
    }
  }

  requestHeaders.set("x-mv-locale", DEFAULT_LOCALE);
  requestHeaders.set("x-mv-path", pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}
