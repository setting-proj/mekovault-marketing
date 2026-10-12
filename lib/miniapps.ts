/**
 * Mini apps: una por plataforma, se eligen de a una y el precio por plataforma
 * baja según cuántas se elijan (Jorge, 2026-10-12: "que aparezca una a una,
 * lo pueden seleccionar y hacer un pack según la necesidad, no paquetes armados").
 *
 * REGLA DE HONESTIDAD: ninguna mini app se anuncia como disponible. "soon" =
 * conector en preparación (no se cobra hasta estar conectada); "guided" = la
 * plataforma no permite automatizar la baja y Mekovault organiza la tarea con
 * un responsable y evidencia.
 *
 * Precios de lista en USD por plataforma al mes. Cuando estos productos existan
 * en la facturación del portal, el origen pasa a ser la API con este archivo
 * como respaldo (igual que `lib/catalog.ts`).
 */

export type MiniAppStatus = "soon" | "guided";

export interface MiniApp {
  slug: string;
  name: string;
  status: MiniAppStatus;
  /** Página propia en /plataformas/<slug>, si existe. */
  page?: string;
}

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

/** Precio por plataforma al mes (USD) según cuántas plataformas se eligen. */
export const APP_PRICE_TIERS: Array<{ from: number; to: number | null; usd: number }> = [
  { from: 1, to: 2, usd: 10 },
  { from: 3, to: 5, usd: 8 },
  { from: 6, to: 9, usd: 7 },
  { from: 10, to: null, usd: 6 },
];

export function perAppUsd(count: number): number {
  if (count <= 0) return APP_PRICE_TIERS[0]!.usd;
  const tier = APP_PRICE_TIERS.find((t) => count >= t.from && (t.to === null || count <= t.to));
  return (tier ?? APP_PRICE_TIERS[APP_PRICE_TIERS.length - 1]!).usd;
}

export function findMiniApp(slug: string): MiniApp | undefined {
  return MINI_APPS.find((a) => a.slug === slug);
}

export interface Quote {
  apps: MiniApp[];
  count: number;
  unitUsd: number;
  totalUsd: number;
}

/** El pack que resulta de las plataformas marcadas. */
export function quote(selected: Set<string>): Quote {
  const apps = MINI_APPS.filter((a) => selected.has(a.slug));
  const count = apps.length;
  const unitUsd = perAppUsd(count);
  return { apps, count, unitUsd, totalUsd: count * unitUsd };
}
