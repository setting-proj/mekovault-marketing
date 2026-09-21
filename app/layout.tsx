import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import { detectLocaleServer } from "@/lib/i18n/detectLocale.server";
import { dictionaries, htmlLang } from "@/lib/i18n/dictionaries";
import "./globals.css";

// Type trio:
//   Display: Space Grotesk · Body: Inter · Mono: JetBrains Mono.
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

const OG_LOCALE: Record<string, string> = {
  "es-CL": "es_CL",
  "es-AR": "es_AR",
  "es-MX": "es_MX",
  "en-US": "en_US",
  "pt-BR": "pt_BR",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await detectLocaleServer();
  const dict = dictionaries[locale];
  const title = dict["meta.title"];
  const description = dict["meta.description"];

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s · Mekovault",
    },
    description,
    applicationName: "Mekovault",
    keywords: [
      "Google Workspace",
      "Microsoft 365",
      "cuentas de correo",
      "licencias",
      "control de licencias",
      "plataformas por usuario",
      "altas y bajas",
      "onboarding",
      "offboarding",
      "pymes",
      "Chile",
      "Latinoamérica",
    ],
    authors: [{ name: "Mekovault SpA" }],
    creator: "Mekovault",
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: "Mekovault",
      locale: OG_LOCALE[locale] ?? "es_CL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#010226" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Detección server-side ANTES del render: el HTML sale en el locale
  // correcto según cookie o Accept-Language. Sin flash en el cliente.
  const locale = await detectLocaleServer();

  return (
    <html lang={htmlLang(locale)} suppressHydrationWarning>
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
