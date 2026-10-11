"use client";

import NextLink from "next/link";

import { useI18n } from "@/lib/i18n/I18nProvider";
import { LOCALE_PREFIX } from "@/lib/i18n/routing";

/**
 * Enlace interno que conserva el idioma de la URL: en `/ar/...` un
 * `<Link href="/pricing">` lleva a `/ar/pricing`. Los enlaces externos,
 * los anclas (`#`) y los que ya traen prefijo se dejan como están.
 */
export default function Link({ href, ...rest }: React.ComponentProps<typeof NextLink>) {
  const { locale } = useI18n();
  const prefix = LOCALE_PREFIX[locale];
  let target = href;
  if (
    prefix &&
    typeof href === "string" &&
    href.startsWith("/") &&
    !href.startsWith("//") &&
    href !== prefix &&
    !href.startsWith(`${prefix}/`)
  ) {
    target = href === "/" ? prefix : `${prefix}${href}`;
  }
  return <NextLink href={target} {...rest} />;
}
