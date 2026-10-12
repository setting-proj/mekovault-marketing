import { metadataFor } from "@/lib/pageMeta";

export const generateMetadata = metadataFor("/pricing", "seo.pricing.title", "seo.pricing.description");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
