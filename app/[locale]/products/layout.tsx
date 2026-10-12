import { metadataFor } from "@/lib/pageMeta";

export const generateMetadata = metadataFor("/products", "seo.products.title", "seo.products.description");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
