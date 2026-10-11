import { metadataFor } from "@/lib/pageMeta";

export const generateMetadata = metadataFor("/contact", "seo.contact.title", "seo.contact.description");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
