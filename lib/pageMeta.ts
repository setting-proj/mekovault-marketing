import type { Metadata } from "next";

import { localeFromParams, type LocaleParams } from "@/lib/i18n/params";
import { dictionaries, type TranslationKey } from "@/lib/i18n/dictionaries";
import { pageMetadata } from "@/lib/seo";

/**
 * Fábrica de `generateMetadata` para páginas traducidas: título y descripción
 * salen del diccionario del idioma de la URL, con canónica y hreflang.
 *
 *   export const generateMetadata = metadataFor("/pricing", "seo.pricing.title", "seo.pricing.description");
 */
export function metadataFor(
  path: string,
  titleKey: TranslationKey,
  descriptionKey: TranslationKey,
  opts: { type?: "website" | "article"; localized?: boolean } = {},
) {
  return async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
    const locale = await localeFromParams(params);
    const dict = dictionaries[locale];
    return pageMetadata({
      locale,
      path,
      title: dict[titleKey],
      description: dict[descriptionKey],
      ...opts,
    });
  };
}
