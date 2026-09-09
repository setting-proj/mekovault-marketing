/**
 * Catálogo público de módulos (apps) de Mekovault.
 *
 * Fuente en vivo: GET https://api.mekovault.com/api/v1/public/apps-catalog
 * Fallback estático: snapshot del catálogo real (2026-09-09). Se usa si el
 * fetch falla, para que /pricing nunca muestre un error técnico.
 */

import type { TranslationKey } from "@/lib/i18n/dictionaries";

export interface PublicApp {
  slug: string;
  name: string;
  short_pitch: string | null;
  description: string | null;
  category: string;
  status: "ga" | "beta";
  base_price_clp_monthly: number;
  icon: string | null;
  color_hex: string | null;
  docs_url: string | null;
  sort_order: number;
  /** Apps incluidas sin costo al contratar esta. */
  bundled_slugs?: string[] | null;
}

export interface Catalog {
  items: PublicApp[];
  default_discount_curve: Record<string, number>;
  generated_at: string;
}

export const FALLBACK_CATALOG: Catalog = {
  items: [
    {
      slug: "super-workspace",
      name: "Super Workspace",
      short_pitch: "Onboarding, cambios y offboarding desde un panel.",
      description:
        "Onboarding, cambios y offboarding de usuarios en Google Workspace y Microsoft Entra desde un panel.",
      category: "identity_provisioning",
      status: "ga",
      base_price_clp_monthly: 49900,
      icon: "cloud",
      color_hex: "#00b4d8",
      docs_url: null,
      sort_order: 10,
      bundled_slugs: ["requests-tickets"],
    },
    {
      slug: "requests-tickets",
      name: "Requests & Tickets",
      short_pitch: "Pedidos self-service con aprobación por rol.",
      description: "Solicitudes con aprobaciones, plantillas de acceso y carga masiva.",
      category: "requests_workflow",
      status: "ga",
      base_price_clp_monthly: 29900,
      icon: "ticket",
      color_hex: "#0077b6",
      docs_url: null,
      sort_order: 20,
      bundled_slugs: null,
    },
    {
      slug: "audit-compliance",
      name: "Audit & Compliance",
      short_pitch: "Auditoría inmutable para compliance formal.",
      description: "Historial inmutable con exportación y retención configurable.",
      category: "audit_compliance",
      status: "ga",
      base_price_clp_monthly: 24900,
      icon: "shield-check",
      color_hex: "#03045e",
      docs_url: null,
      sort_order: 30,
      bundled_slugs: null,
    },
  ],
  default_discount_curve: { "1": 0, "2": 5, "3": 10, "4": 15 },
  generated_at: "2026-09-09T00:00:00Z",
};

/** Slug del producto principal (el "desde" del home). */
export const MAIN_APP_SLUG = "super-workspace";

/** Nombres y pitch localizados por slug. Slugs desconocidos usan el nombre del API. */
export const APP_I18N: Record<string, { name: TranslationKey; pitch: TranslationKey }> = {
  "super-workspace": { name: "app.workspace.name", pitch: "app.workspace.pitch" },
  "requests-tickets": { name: "app.tickets.name", pitch: "app.tickets.pitch" },
  "audit-compliance": { name: "app.audit.name", pitch: "app.audit.pitch" },
};

export function formatCLP(v: number) {
  return "$" + Math.round(v).toLocaleString("es-CL");
}

/** Aplica el % de descuento de la curva según la cantidad de apps cobradas. */
export function calcNet(base: number, count: number, curve: Record<string, number>) {
  const keys = Object.keys(curve)
    .map(Number)
    .sort((a, b) => a - b);
  const maxKey = keys.length ? keys[keys.length - 1]! : 1;
  const effective = Math.min(Math.max(count, 1), maxKey);
  const pct = curve[String(effective)] ?? 0;
  return Math.floor((base * (100 - pct)) / 100);
}

export function discountPct(count: number, curve: Record<string, number>) {
  const keys = Object.keys(curve)
    .map(Number)
    .sort((a, b) => a - b);
  const maxKey = keys.length ? keys[keys.length - 1]! : 1;
  const effective = Math.min(Math.max(count, 1), maxKey);
  return curve[String(effective)] ?? 0;
}

export function mainAppPrice(catalog: Catalog = FALLBACK_CATALOG) {
  const main = catalog.items.find((a) => a.slug === MAIN_APP_SLUG);
  return main?.base_price_clp_monthly ?? FALLBACK_CATALOG.items[0]!.base_price_clp_monthly;
}
