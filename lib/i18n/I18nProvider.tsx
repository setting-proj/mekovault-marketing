"use client";

/**
 * I18n provider del sitio de marketing.
 * Espejo del provider del portal — mismo pattern (localStorage + cookie
 * + Accept-Language detection).
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
  LOCALES,
  type Locale,
  type TranslationKey,
  dictionaries,
} from "./dictionaries";

const STORAGE_KEY = "mekovault_locale";
const COOKIE_KEY = "mekovault_locale";

type I18nCtx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
};

const Ctx = createContext<I18nCtx | null>(null);

function normalizeToSupported(raw: string | undefined): Locale {
  if (!raw) return DEFAULT_LOCALE;
  const lower = raw.toLowerCase();
  const direct = LOCALES.find((l) => l.toLowerCase() === lower);
  if (direct) return direct;
  const lang = lower.split("-")[0];
  if (lang === "es") return "es-419";
  if (lang === "pt") return "pt-BR";
  if (lang === "en") return "en";
  return DEFAULT_LOCALE;
}

// (detectLocale client-side ya no es necesario: el server lo hace vía
// detectLocaleServer y lo pasa como prop `initialLocale`. Mantenemos
// solo la lectura de localStorage por si el user cambió en otra sesión.)

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
   * Fallback DEFAULT_LOCALE por compatibilidad.
   */
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? DEFAULT_LOCALE);

  useEffect(() => {
    // Sincronizar SOLO con localStorage (por si el user cambió locale en
    // otra sesión y hay override client-side). Si no hay override, el locale
    // del server sigue siendo el correcto y no forzamos re-render.
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const norm = normalizeToSupported(stored);
        if (norm !== locale) {
          setLocaleState(norm);
          document.documentElement.lang = norm;
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
    document.documentElement.lang = next;
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
