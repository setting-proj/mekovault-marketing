import { metadataFor } from "@/lib/pageMeta";

export const generateMetadata = metadataFor("/platforms", "seo.platforms.title", "seo.platforms.description");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
