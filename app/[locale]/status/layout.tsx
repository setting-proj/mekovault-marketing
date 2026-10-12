import { metadataFor } from "@/lib/pageMeta";

export const generateMetadata = metadataFor("/status", "seo.status.title", "seo.status.description");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
