"use client";

/**
 * I18n provider del sitio de marketing.
 * El locale inicial viene del server (cookie + Accept-Language). En el
 * cliente solo se respeta un override guardado en localStorage.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  DEFAULT_LOCALE,
  type Locale,
  type TranslationKey,
  dictionaries,
  htmlLang,
  normalizeLocale,
} from "./dictionaries";

const STORAGE_KEY = "mekovault_locale";
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
  /**
   * Locale detectado server-side (cookie + Accept-Language). Cuando viene
   * pasado desde el layout, el HTML ya salió en este idioma y no hay flash.
   */
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? DEFAULT_LOCALE);

  useEffect(() => {
    // Sincronizar SOLO con localStorage (por si el user cambió locale en
    // otra sesión). Si no hay override, el locale del server es el correcto.
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const norm = normalizeLocale(stored);
        if (norm && norm !== locale) {
          setLocaleState(norm);
          document.documentElement.lang = htmlLang(norm);
        }
      }
    } catch {
      /* private mode */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${COOKIE_KEY}=${next}; path=/; max-age=${oneYear}; samesite=lax`;
    document.documentElement.lang = htmlLang(next);
  }, []);

  const t = useCallback<I18nCtx["t"]>(
    (key, vars) => {
      const dict = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
      const raw = dict[key] ?? dictionaries[DEFAULT_LOCALE][key] ?? key;
      return interpolate(raw, vars);
    },
    [locale],
  );

  const value = useMemo<I18nCtx>(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

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
