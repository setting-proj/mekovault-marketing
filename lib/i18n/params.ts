import { notFound } from "next/navigation";

import { SEGMENT_TO_LOCALE, type Locale } from "./routing";

/**
 * Idioma desde el segmento de ruta `app/[locale]`.
 *
 * Reemplaza la detección por cabecera: con el idioma en los params cada página
 * se prerenderiza por idioma (una vez por segmento) y la CDN la guarda.
 * Chile vive en el segmento interno `cl`; el middleware lo esconde de la URL.
 */
export type LocaleParams = Promise<{ locale: string }>;

export async function localeFromParams(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params;
  const found = SEGMENT_TO_LOCALE[locale];
  if (!found) notFound();
  return found;
}
