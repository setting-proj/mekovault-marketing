"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";

/**
 * Aviso localizado en /legal/*: los documentos legales se publican en
 * español. Solo se muestra cuando el visitante navega en otro idioma.
 */
export function LegalLangNotice() {
  const { locale, t } = useI18n();
  if (locale.startsWith("es")) return null;
  return (
    <p className="mb-6 rounded-lg border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
      {t("legal.lang_notice")}
    </p>
  );
}
