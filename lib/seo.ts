import type { Metadata } from "next";

import {
  ALL_LOCALES,
  DEFAULT_LOCALE,
  HREFLANG,
  OG_LOCALE,
  SITE_URL,
  absoluteUrl,
  type Locale,
} from "./i18n/routing";

type PageMeta = {
  locale: Locale;
  /** Ruta sin prefijo de idioma, por ejemplo "/pricing". */
  path: string;
  /** Título completo (≤ 60 caracteres, ya con "· Mekovault" cuando corresponda). */
  title: string;
  /** ≤ 155 caracteres. */
  description: string;
  type?: "website" | "article";
  /**
   * `true` (defecto): la página existe en los cinco idiomas y se declaran
   * todas las versiones. `false`: solo existe en es-CL (guías); las copias
   * bajo /ar, /mx, /en y /pt apuntan su canónica a la versión chilena.
   */
  localized?: boolean;
  /**
   * Idiomas en los que existe la página (guías con variantes). Si se pasa,
   * el hreflang solo declara esos; la canónica es la del idioma actual si
   * está en la lista y, si no, la de es-CL.
   */
  availableLocales?: Locale[];
  noindex?: boolean;
};

/** Metadatos por página: título, descripción, canónica, hreflang y Open Graph. */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  type = "website",
  localized = true,
  availableLocales,
  noindex = false,
}: PageMeta): Metadata {
  const locales = availableLocales ?? (localized ? ALL_LOCALES : [DEFAULT_LOCALE]);
  const canonical = locales.includes(locale) ? absoluteUrl(locale, path) : absoluteUrl(DEFAULT_LOCALE, path);
  const languages: Record<string, string> = {};
  for (const l of locales) languages[HREFLANG[l]] = absoluteUrl(l, path);
  languages["x-default"] = absoluteUrl(DEFAULT_LOCALE, path);

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: title },
    description,
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Mekovault",
      locale: OG_LOCALE[locale],
      type,
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Mekovault" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/opengraph-image`] },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
  };
}

/** Recorta a un largo máximo sin cortar palabras (por si un diccionario se pasa). */
export function clamp(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}
