import { metadataFor } from "@/lib/pageMeta";

export const generateMetadata = metadataFor("/partners", "seo.partners.title", "seo.partners.description");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
