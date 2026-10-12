import type { TranslationKey } from "./i18n/dictionaries";

/**
 * Mini apps (una por plataforma) y paquetes, tal como se venden en /pricing.
 *
 * Decisión de Jorge (2026-10-11): "venderlo como mini apps o paquetes de apps,
 * seleccionables; cada paquete tiene un valor; es más barato comprar el paquete
 * que de a una, pero igual se puede adquirir de a una".
 *
 * REGLA DE HONESTIDAD: ninguna mini app se anuncia como disponible. "soon" =
 * conector en preparación; "guided" = la plataforma no permite automatizar la
 * baja y Mekovault organiza la tarea con un responsable y evidencia.
 *
 * Los precios son de lista (propuesta publicada). El portal cobra hoy por los
 * módulos del catálogo; cuando estos productos existan en la facturación, el
 * origen pasa a ser la API con este archivo como respaldo (igual que
 * `lib/catalog.ts`).
 */

export type MiniAppStatus = "soon" | "guided";

export interface MiniApp {
  slug: string;
  name: string;
  status: MiniAppStatus;
  /** Página propia en /plataformas/<slug>, si existe. */
  page?: string;
}

export type PackageKey = "collab" | "sales" | "dev" | "design" | "admin" | "all";

export interface AppPackage {
  key: PackageKey;
  name: TranslationKey;
  desc: TranslationKey;
  apps: string[];
  priceClp: number;
}

/** Precio de lista de una mini app suelta, por empresa al mes. */
export const SINGLE_APP_CLP = 9_900;

/** Compras de software (módulo), por empresa al mes. */
export const COMPRAS_CLP = 24_900;

export const MINI_APPS: MiniApp[] = [
  { slug: "slack", name: "Slack", status: "soon", page: "/plataformas/slack" },
  { slug: "zoom", name: "Zoom", status: "soon", page: "/plataformas/zoom" },
  { slug: "notion", name: "Notion", status: "guided" },
  { slug: "asana", name: "Asana", status: "soon" },
  { slug: "monday", name: "monday.com", status: "soon" },
  { slug: "hubspot", name: "HubSpot", status: "soon" },
  { slug: "pipedrive", name: "Pipedrive", status: "soon" },
  { slug: "salesforce", name: "Salesforce", status: "soon" },
  { slug: "zendesk", name: "Zendesk", status: "soon" },
  { slug: "atlassian", name: "Jira y Confluence", status: "soon" },
  { slug: "github", name: "GitHub", status: "soon" },
  { slug: "1password", name: "1Password", status: "soon" },
  { slug: "dropbox", name: "Dropbox", status: "soon" },
  { slug: "figma", name: "Figma", status: "guided" },
  { slug: "canva", name: "Canva", status: "guided" },
  { slug: "adobe", name: "Adobe Creative Cloud", status: "guided" },
  { slug: "chatgpt", name: "ChatGPT", status: "guided" },
  { slug: "defontana", name: "Defontana", status: "guided" },
  { slug: "nubox", name: "Nubox", status: "guided" },
  { slug: "softland", name: "Softland", status: "guided" },
  { slug: "docusign", name: "DocuSign", status: "soon" },
  { slug: "webdox", name: "Webdox", status: "soon" },
  { slug: "zoho", name: "Zoho", status: "soon" },
];

export const PACKAGES: AppPackage[] = [
  {
    key: "collab",
    name: "apps.pkg.collab.name",
    desc: "apps.pkg.collab.desc",
    apps: ["slack", "zoom", "notion", "asana", "monday"],
    priceClp: 34_900,
  },
  {
    key: "sales",
    name: "apps.pkg.sales.name",
    desc: "apps.pkg.sales.desc",
    apps: ["hubspot", "pipedrive", "salesforce", "zendesk"],
    priceClp: 29_900,
  },
  {
    key: "dev",
    name: "apps.pkg.dev.name",
    desc: "apps.pkg.dev.desc",
    apps: ["atlassian", "github", "1password", "dropbox"],
    priceClp: 29_900,
  },
  {
    key: "design",
    name: "apps.pkg.design.name",
    desc: "apps.pkg.design.desc",
    apps: ["figma", "canva", "adobe", "chatgpt"],
    priceClp: 29_900,
  },
  {
    key: "admin",
    name: "apps.pkg.admin.name",
    desc: "apps.pkg.admin.desc",
    apps: ["defontana", "nubox", "softland", "docusign", "webdox", "zoho"],
    priceClp: 34_900,
  },
  {
    key: "all",
    name: "apps.pkg.all.name",
    desc: "apps.pkg.all.desc",
    apps: MINI_APPS.map((a) => a.slug),
    priceClp: 79_900,
  },
];

export function findMiniApp(slug: string): MiniApp | undefined {
  return MINI_APPS.find((a) => a.slug === slug);
}

/** Lo que costarían las apps de un paquete compradas de a una. */
export function packageSinglesClp(pkg: AppPackage): number {
  return pkg.apps.length * SINGLE_APP_CLP;
}

/** Ahorro del paquete frente a las sueltas, en porcentaje entero. */
export function packageSavingPct(pkg: AppPackage): number {
  const singles = packageSinglesClp(pkg);
  return Math.round(((singles - pkg.priceClp) / singles) * 100);
}

export interface Quote {
  /** Paquetes marcados, en el orden del catálogo. */
  packages: AppPackage[];
  /** Mini apps sueltas que sí se cobran (no vienen en un paquete marcado). */
  singles: MiniApp[];
  /** Apps cubiertas por algún paquete marcado. */
  covered: Set<string>;
  /** Paquetes que saldrían más baratos que las sueltas marcadas de ese grupo. */
  suggestions: AppPackage[];
  totalClp: number;
}

/** Calcula la cotización a partir de los paquetes y mini apps marcados. */
export function quote(selectedPackages: Set<PackageKey>, selectedApps: Set<string>): Quote {
  const packages = PACKAGES.filter((p) => selectedPackages.has(p.key));
  const covered = new Set(packages.flatMap((p) => p.apps));
  const singles = MINI_APPS.filter((a) => selectedApps.has(a.slug) && !covered.has(a.slug));
  const suggestions = PACKAGES.filter((p) => {
    if (p.key === "all" || selectedPackages.has(p.key)) return false;
    const n = p.apps.filter((s) => singles.some((a) => a.slug === s)).length;
    return n * SINGLE_APP_CLP > p.priceClp;
  });
  const totalClp = packages.reduce((acc, p) => acc + p.priceClp, 0) + singles.length * SINGLE_APP_CLP;
  return { packages, singles, covered, suggestions, totalClp };
}
