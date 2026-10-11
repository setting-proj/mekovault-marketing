import type { MetadataRoute } from "next";

import { CONTENT_BY_LOCALE } from "@/lib/content/recursos/index.generated";
import { ALL_LOCALES, DEFAULT_LOCALE, HREFLANG, absoluteUrl, type Locale } from "@/lib/i18n/routing";
import { CONNECTORS, RESOURCE_SLUGS, UPCOMING_PLATFORMS } from "@/lib/resources";

export const dynamic = "force-static";

/** Páginas que existen en todos los idiomas. */
const LOCALIZED = [
  "/",
  "/products",
  "/platforms",
  "/license-control",
  "/pricing",
  "/about",
  "/contact",
  "/partners",
  "/account-governance",
  "/governance",
  "/status",
  "/docs",
  "/docs/getting-started",
  "/docs/admin-guide",
  "/docs/tickets",
  "/docs/troubleshooting",
  "/legal/terms",
  "/legal/privacy",
  "/legal/security",
  "/legal/dpa",
  "/legal/aup",
  "/legal/cookies",
  "/legal/sub-processors",
  "/recursos",
];

/** Páginas que hoy solo existen en español de Chile. */
const SPANISH_ONLY = [
  "/ayuda",
  "/calculadora-licencias",
  ...CONNECTORS.map((c) => `/conectores/${c.slug}`),
  ...UPCOMING_PLATFORMS.map((p) => `/plataformas/${p.slug}`),
];

function priorityFor(path: string): number {
  if (path === "/") return 1;
  if (path === "/pricing") return 0.9;
  if (path.startsWith("/recursos/") || path.startsWith("/conectores/")) return 0.8;
  if (path.startsWith("/legal")) return 0.3;
  return 0.7;
}

function entries(path: string, locales: Locale[], now: Date, freq: "monthly" | "yearly"): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[HREFLANG[l]] = absoluteUrl(l, path);
  languages["x-default"] = absoluteUrl(DEFAULT_LOCALE, path);
  return locales.map((l) => ({
    url: absoluteUrl(l, path),
    lastModified: now,
    changeFrequency: freq,
    priority: l === DEFAULT_LOCALE ? priorityFor(path) : Math.max(0.3, priorityFor(path) - 0.2),
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const out: MetadataRoute.Sitemap = [];

  for (const path of LOCALIZED) {
    out.push(...entries(path, ALL_LOCALES, now, path.startsWith("/legal") ? "yearly" : "monthly"));
  }

  // Guías: solo los idiomas en los que existe cada una.
  for (const slug of RESOURCE_SLUGS) {
    const available = Object.keys(CONTENT_BY_LOCALE[slug] ?? {}) as Locale[];
    out.push(...entries(`/recursos/${slug}`, available.length ? available : [DEFAULT_LOCALE], now, "monthly"));
  }

  for (const path of SPANISH_ONLY) {
    out.push({ url: absoluteUrl(DEFAULT_LOCALE, path), lastModified: now, changeFrequency: "monthly", priority: priorityFor(path) });
  }

  return out;
}
