"use client";

import { useState } from "react";
import { Globe } from "lucide-react";

import { LOCALE_LABELS, LOCALES } from "@/lib/i18n/dictionaries";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { cn } from "@/lib/cn";

/**
 * Dropdown de idiomas simple (sin dep externa de dropdown-menu).
 * Toggle click-outside via useEffect handler.
 */
export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const current = LOCALE_LABELS[locale];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label={t("lang.switcher_label")}
        title={t("lang.switcher_label")}
        className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 text-xs font-medium transition-colors hover:bg-muted"
      >
        <Globe className="size-4" />
        <span className="hidden sm:inline">{current.flag}</span>
        <span className="ml-0.5 hidden sm:inline">{locale.toUpperCase()}</span>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-full z-20 mt-1 w-48 overflow-hidden rounded-lg border bg-card shadow-lg">
            {LOCALES.map((l) => {
              const label = LOCALE_LABELS[l];
              const isActive = l === locale;
              return (
                <button
                  key={l}
                  onClick={() => {
                    setLocale(l);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-muted",
                    isActive && "font-semibold text-primary",
                  )}
                >
                  <span>{label.flag}</span> {label.native}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
