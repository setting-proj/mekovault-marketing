import type { MetadataRoute } from "next";

import { ALL_LOCALES, DEFAULT_LOCALE, HREFLANG, absoluteUrl } from "@/lib/i18n/routing";
import { RESOURCE_SLUGS } from "@/lib/resources";

export const dynamic = "force-static";

/** Páginas que existen en los cinco idiomas. */
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
];

/** Guías y ayuda: hoy solo en español de Chile (una URL, sin alternativas). */
const SPANISH_ONLY = [
  "/recursos",
  ...RESOURCE_SLUGS.map((s) => `/recursos/${s}`),
  "/ayuda",
  "/conectores/buk",
  "/conectores/talana",
  "/conectores/rankmi",
  "/calculadora-licencias",
];

function priorityFor(path: string): number {
  if (path === "/") return 1;
  if (path === "/pricing") return 0.9;
  if (path.startsWith("/recursos/") || path.startsWith("/conectores/")) return 0.8;
  if (path.startsWith("/legal")) return 0.3;
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const out: MetadataRoute.Sitemap = [];

  for (const path of LOCALIZED) {
    const languages: Record<string, string> = {};
    for (const l of ALL_LOCALES) languages[HREFLANG[l]] = absoluteUrl(l, path);
    languages["x-default"] = absoluteUrl(DEFAULT_LOCALE, path);
    for (const l of ALL_LOCALES) {
      out.push({
        url: absoluteUrl(l, path),
        lastModified: now,
        changeFrequency: path.startsWith("/legal") ? "yearly" : "monthly",
        priority: l === DEFAULT_LOCALE ? priorityFor(path) : Math.max(0.3, priorityFor(path) - 0.2),
        alternates: { languages },
      });
    }
  }

  for (const path of SPANISH_ONLY) {
    out.push({
      url: absoluteUrl(DEFAULT_LOCALE, path),
      lastModified: now,
      changeFrequency: "monthly",
      priority: priorityFor(path),
    });
  }

  return out;
}
