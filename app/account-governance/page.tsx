import { metadataFor } from "@/lib/pageMeta";

import { AccountGovernanceView } from "./AccountGovernanceView";

export const generateMetadata = metadataFor("/account-governance", "seo.agov.title", "seo.agov.description", { type: "article" });

export default function AccountGovernancePage() {
  return <AccountGovernanceView />;
}
