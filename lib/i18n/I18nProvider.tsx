"use client";

/**
 * I18n provider del sitio de marketing.
 * El idioma lo decide la URL (lo resuelve el middleware y llega desde el
 * layout). Cambiar de idioma navega a la misma página en el otro prefijo y
 * guarda la elección en una cookie para las próximas visitas a la raíz.
 */

import { createContext, useCallback, useContext, useMemo } from "react";

import {
  DEFAULT_LOCALE,
  type Locale,
  type TranslationKey,
  dictionaries,
} from "./dictionaries";
import { localizePath, splitLocale } from "./routing";

const COOKIE_KEY = "mekovault_locale";

type I18nCtx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
};

const Ctx = createContext<I18nCtx | null>(null);

function interpolate(str: string, vars?: Record<string, string | number>) {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (_, key) =>
    key in vars ? String(vars[key as string]) : `{${key}}`,
  );
}

export function I18nProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  /** Idioma resuelto en el servidor a partir de la URL. */
  initialLocale?: Locale;
}) {
  const locale = initialLocale ?? DEFAULT_LOCALE;

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;
      const oneYear = 60 * 60 * 24 * 365;
      try {
        document.cookie = `${COOKIE_KEY}=${next}; path=/; max-age=${oneYear}; samesite=lax`;
      } catch {
        /* ignore */
      }
      const { path } = splitLocale(window.location.pathname);
      window.location.assign(`${localizePath(next, path)}${window.location.search}${window.location.hash}`);
    },
    [locale],
  );

  const t = useCallback<I18nCtx["t"]>(
    (key, vars) => {
      const dict = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
      const raw = dict[key] ?? dictionaries[DEFAULT_LOCALE][key] ?? key;
      return interpolate(raw, vars);
    },
    [locale],
  );

  const value = useMemo<I18nCtx>(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n(): I18nCtx {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error("useI18n() must be used within <I18nProvider>");
  }
  return ctx;
}

export function useT() {
  return useI18n().t;
}
