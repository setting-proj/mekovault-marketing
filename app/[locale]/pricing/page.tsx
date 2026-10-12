/**
 * /pricing: server component.
 *
 * Carga el catálogo público de módulos desde el API con cache de 1 hora
 * (`next.revalidate`). Si el fetch falla por cualquier motivo (red, CORS
 * ya no aplica server-side, API caído, respuesta vacía), usa el snapshot
 * estático `FALLBACK_CATALOG` y la página nunca muestra un error técnico.
 *
 * La interacción (armar el plan, total) vive en <PricingClient />.
 */

import { FALLBACK_CATALOG, type Catalog } from "@/lib/catalog";
import { PricingClient } from "./PricingClient";

export const revalidate = 3600;

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.mekovault.com";

async function loadCatalog(): Promise<{ catalog: Catalog; live: boolean }> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/public/apps-catalog`, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
      headers: { accept: "application/json" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as Partial<Catalog>;
    if (!Array.isArray(data.items) || data.items.length === 0) {
      throw new Error("empty catalog");
    }
    return {
      catalog: {
        items: data.items,
        default_discount_curve: data.default_discount_curve ?? FALLBACK_CATALOG.default_discount_curve,
        generated_at: data.generated_at ?? new Date().toISOString(),
      },
      live: true,
    };
  } catch {
    return { catalog: FALLBACK_CATALOG, live: false };
  }
}

export default async function PricingPage() {
  const { catalog, live } = await loadCatalog();
  return <PricingClient catalog={catalog} live={live} />;
}
