import { ImageResponse } from "next/og";

import { CONTENT_BY_LOCALE } from "@/lib/content/recursos/index.generated";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { localeFromParams } from "@/lib/i18n/params";
import { DEFAULT_LOCALE } from "@/lib/i18n/routing";
import { findResource } from "@/lib/resources";

/** Imagen para compartir de cada guía: el título de la guía en el idioma de la URL. */
export const alt = "Mekovault";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function GuideOpenGraphImage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const locale = await localeFromParams(params);
  const r = findResource(slug);
  const variants = CONTENT_BY_LOCALE[slug] ?? {};
  const content = variants[locale] ?? variants[DEFAULT_LOCALE];
  const localized = Boolean(variants[locale]) && locale !== DEFAULT_LOCALE;
  const title = (localized && content?.meta?.title) || r?.title || "Mekovault";
  const tagline = dictionaries[locale]["seo.og.tagline"];
  // Títulos largos bajan de tamaño para caber en dos o tres líneas.
  const fontSize = title.length > 90 ? 44 : title.length > 60 ? 52 : 60;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#03045e",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#00b4d8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#03045e",
              fontWeight: 800,
              fontSize: 26,
            }}
          >
            M
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>Mekovault</div>
          <div style={{ fontSize: 22, color: "#90e0ef", marginLeft: 12 }}>{locale.startsWith("es") ? "Guía" : locale === "pt-BR" ? "Guia" : "Guide"}</div>
        </div>
        <div style={{ fontSize, fontWeight: 800, lineHeight: 1.12, letterSpacing: -1.2 }}>{title}</div>
        <div style={{ fontSize: 24, color: "#b9d7e6" }}>{tagline}</div>
      </div>
    ),
    { ...size },
  );
}
