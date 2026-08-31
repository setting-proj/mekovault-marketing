import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import "./globals.css";

// Type trio (design lesson from 10k-websites, "Never Inter as display face"):
//   Display face fresca: Instrument Serif (cinematográfica, editorial)
//   Body quieto: Inter (legible en párrafos)
//   Mono para labels: JetBrains Mono (eyebrows, code, metadata)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <I18nProvider>
          <Header />
          <div className="pt-16">{children}</div>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
