import type { MetadataRoute } from "next";

const BASE = "https://mekovault.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "/",
    "/products",
    "/pricing",
    "/about",
    "/contact",
    "/legal/terms",
    "/legal/privacy",
    "/legal/aup",
    "/legal/cookies",
    "/legal/sub-processors",
  ];
  return routes.map((path) => ({
    url: `${BASE}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path.startsWith("/legal") ? "yearly" : "monthly",
    priority: path === "/" ? 1 : path === "/pricing" ? 0.9 : 0.7,
  }));
}
