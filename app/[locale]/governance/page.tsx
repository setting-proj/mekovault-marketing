import { metadataFor } from "@/lib/pageMeta";

import { GovernanceView } from "./GovernanceView";

export const generateMetadata = metadataFor("/governance", "seo.governance.title", "seo.governance.description", { type: "article" });

export default function GovernancePage() {
  return <GovernanceView />;
}
