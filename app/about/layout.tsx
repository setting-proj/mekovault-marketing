import { metadataFor } from "@/lib/pageMeta";

export const generateMetadata = metadataFor("/about", "seo.about.title", "seo.about.description");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
