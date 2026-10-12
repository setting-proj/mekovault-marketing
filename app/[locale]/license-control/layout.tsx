import { metadataFor } from "@/lib/pageMeta";

export const generateMetadata = metadataFor("/license-control", "seo.license_control.title", "seo.license_control.description");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
