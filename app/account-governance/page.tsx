import type { Metadata } from "next";

import { AccountGovernanceView } from "./AccountGovernanceView";

export const metadata: Metadata = {
  title: "Gobierno de cuentas y credenciales de servicios",
  description:
    "Todo nace en la nómina y todo se gobierna desde ahí: cuentas, licencias, cuentas genéricas y credenciales de servicio con origen, responsable y evidencia. Lo que se sigue cobrando cuando alguien deja la organización, y cómo Mekovault lo cierra.",
  alternates: { canonical: "/account-governance" },
  openGraph: {
    title: "Gobierno de cuentas y credenciales · Mekovault",
    description:
      "Cuando alguien deja la organización, nadie garantiza que las demás cuentas dejen de cobrarse. Gobernanza con un origen, una regla y una evidencia.",
    url: "/account-governance",
    type: "article",
  },
};

export default function AccountGovernancePage() {
  return <AccountGovernanceView />;
}
