import type { NextConfig } from "next";

/**
 * Sitio 100% estático — genera un build listo para servir desde Vercel
 * (o cualquier CDN de estáticos).
 */
const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default config;
