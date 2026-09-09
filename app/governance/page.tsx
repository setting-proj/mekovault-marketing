import type { Metadata } from "next";

import { GovernanceView } from "./GovernanceView";

export const metadata: Metadata = {
  title: "Gobernanza técnica y seguridad",
  description:
    "Cómo está construido y operado Mekovault: infraestructura en AWS Lightsail, aislamiento multi-tenant con RLS, sesiones JWT y MFA, credenciales de directorio en Infisical con auditoría inmutable de cada uso, eliminación de tenants y roadmap en curso. Referencia para TI, seguridad, compliance y auditores.",
  alternates: { canonical: "/governance" },
  openGraph: {
    title: "Gobernanza técnica y seguridad · Mekovault",
    description:
      "Infraestructura, identidad, aislamiento multi-tenant, credenciales y auditoría de Mekovault, documentados para equipos de seguridad y auditores.",
    url: "/governance",
    type: "article",
  },
};

export default function GovernancePage() {
  return <GovernanceView />;
}
