import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import { detectLocaleServer } from "@/lib/i18n/detectLocale.server";
import "./globals.css";

// Type trio (revisión post-feedback 2026-08-30):
//   Display: Space Grotesk. Geometric-tech con carácter distintivo
//     (a de doble piso, g abierta). Diseñada para SaaS técnico
//     moderno, no editorial. Reemplaza el Instrument Serif italic
//     que quedaba "magazine" en un sitio de servicio tecnológico.
//   Body: Inter. Sigue siendo la mejor legibilidad en párrafos.
//   Mono: JetBrains Mono. Eyebrows, labels, código.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://mekovault.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mekovault · Automatiza el lifecycle de identidades",
    template: "%s · Mekovault",
  },
  description:
    "Alta, baja y cambio de cuentas en Google Workspace, Microsoft Entra y más. Portal self-service, aprobaciones, workers async y auditoría inmutable.",
  applicationName: "Mekovault",
  keywords: [
    "IAM",
    "identity lifecycle",
    "Google Workspace",
    "Microsoft Entra",
    "provisioning",
    "SaaS",
    "Chile",
    "LATAM",
    "onboarding",
    "offboarding",
    "SCIM",
    "RBAC",
  ],
  authors: [{ name: "Mekovault SpA" }],
  creator: "Mekovault",
  openGraph: {
    title: "Mekovault · Automatiza el lifecycle de identidades",
    description:
      "El panel único para gestionar altas, bajas y cambios en Google Workspace, Microsoft Entra y directorios corporativos.",
    url: siteUrl,
    siteName: "Mekovault",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mekovault · Automatiza el lifecycle de identidades",
    description:
      "Portal SaaS multi-tenant para IT Managers. Onboarding, cambios y offboarding sin salir de una consola.",
  },
  robots: { index: true, follow: true },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#010226" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // FOUC de idioma fix (2026-08-30): detección server-side ANTES del render.
  // El HTML sale directamente en el locale correcto según cookie o
  // Accept-Language. Sin flash de switch en el cliente.
  const locale = await detectLocaleServer();
  const htmlLang = locale === "es-419" ? "es" : locale === "pt-BR" ? "pt" : "en";

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <I18nProvider initialLocale={locale}>
          <Header />
          <div className="pt-16">{children}</div>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
