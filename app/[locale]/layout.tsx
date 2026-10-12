import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import { localeFromParams, type LocaleParams } from "@/lib/i18n/params";
import { dictionaries, htmlLang } from "@/lib/i18n/dictionaries";
import { LOCALE_SEGMENTS, SITE_URL } from "@/lib/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import "./globals.css";

// Una sola tipografía para todo el sitio (dirección A: el panel es el sitio).
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GSC_TOKEN = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

/** Una copia estática por idioma: la CDN guarda el HTML. Chile es el segmento `cl`. */
export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALE_SEGMENTS.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await localeFromParams(params);
  const dict = dictionaries[locale];
  const base = pageMetadata({
    locale,
    path: "/",
    title: dict["seo.home.title"],
    description: dict["seo.home.description"],
  });
  // La canónica y el hreflang los pone cada página con su propia ruta.
  delete base.alternates;
  return {
    ...base,
    // Las páginas que no definen su propio título reciben "<título> · Mekovault".
    title: { default: dict["seo.home.title"], template: "%s · Mekovault" },
    applicationName: "Mekovault",
    authors: [{ name: "Mekovault SpA" }],
    creator: "Mekovault",
    verification: GSC_TOKEN ? { google: GSC_TOKEN } : undefined,
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Mekovault",
  legalName: "Mekovault SpA",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: "cloud@mekovault.com",
  address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
  areaServed: ["CL", "AR", "MX", "ES", "BR", "US"],
  sameAs: ["https://app.mekovault.com"],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: LocaleParams }>) {
  const locale = await localeFromParams(params);
  const dict = dictionaries[locale];

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: "Mekovault",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: dict["seo.home.description"],
    url: SITE_URL,
    inLanguage: locale,
    publisher: { "@id": `${SITE_URL}/#organization` },
    offers: [
      {
        "@type": "Offer",
        name: dict["tiers.free.name"],
        price: "0",
        priceCurrency: "CLP",
        description: dict["tiers.free.who"],
        url: `${SITE_URL}/pricing`,
      },
      {
        "@type": "Offer",
        name: dict["build.title"],
        price: "1.20",
        priceCurrency: "USD",
        description: dict["seo.offer.description"],
        url: `${SITE_URL}/pricing`,
      },
    ],
  };

  return (
    <html lang={htmlLang(locale)} className={manrope.variable} suppressHydrationWarning>
      <head>
        <JsonLd data={[ORGANIZATION, software]} />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
            </Script>
          </>
        )}
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <I18nProvider initialLocale={locale}>
          <Header />
          <div className="pt-[72px]">{children}</div>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
