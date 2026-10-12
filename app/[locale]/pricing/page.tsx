/**
 * /pricing: página estática por idioma. El precio por cuenta, los adicionales y
 * las mini apps salen de `lib/pricing.ts` y `lib/miniapps.ts` (precios de lista).
 */

import { PricingClient } from "./PricingClient";

export default function PricingPage() {
  return <PricingClient />;
}
