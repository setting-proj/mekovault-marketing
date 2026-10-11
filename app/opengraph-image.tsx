import { ImageResponse } from "next/og";

import { detectLocaleServer } from "@/lib/i18n/detectLocale.server";
import { dictionaries } from "@/lib/i18n/dictionaries";

/** Imagen para compartir (LinkedIn, WhatsApp, X): 1200×630, texto del idioma de la URL. */
export const alt = "Mekovault";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const locale = await detectLocaleServer();
  const dict = dictionaries[locale];
  const line1 = dict["hero.title.line1"];
  const line2 = dict["hero.title.line2"];
  const tagline = dict["seo.og.tagline"];

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
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5 }}>{line1}</div>
          <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5, color: "#90e0ef" }}>
            {line2}
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#b9d7e6" }}>{tagline}</div>
      </div>
    ),
    { ...size },
  );
}
