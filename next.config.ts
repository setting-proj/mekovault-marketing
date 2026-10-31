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
  // Cabeceras de seguridad (revisión 2026-10-31, B-2). Sin CSP estricta: el sitio es estático y
  // carga analítica de Vercel/Cloudflare; frame-ancestors evita que nos embeban.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
        ],
      },
    ];
  },
};

export default config;
