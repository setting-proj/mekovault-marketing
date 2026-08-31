import type { MetadataRoute } from "next";

// Requerido con output: "export" (Next 15 static export)
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://mekovault.com/sitemap.xml",
    host: "https://mekovault.com",
  };
}
