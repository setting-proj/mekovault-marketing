import { ImageResponse } from "next/og";

import { dictionaries, type TranslationKey } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/routing";

export const OG_SIZE = { width: 1200, height: 630 };

/**
 * Imagen para compartir (1200×630) con la marca, un rótulo de sección, una o
 * dos líneas de título y el lema. La usan el inicio, los pilares, Compras y
 * las guías; cada ruta `opengraph-image.tsx` solo elige los textos.
 */
export function ogImage({
  locale,
  kicker,
  line1,
  line2,
  tagline,
}: {
  locale: Locale;
  kicker?: string;
  line1: string;
  line2?: string;
  tagline?: string;
}) {
  const dict = dictionaries[locale];
  const foot = tagline ?? dict["seo.og.tagline"];
  const total = line1.length + (line2?.length ?? 0);
  const fontSize = total > 110 ? 42 : total > 75 ? 50 : 60;

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
          {kicker && <div style={{ fontSize: 22, color: "#90e0ef", marginLeft: 12 }}>{kicker}</div>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1.2 }}>{line1}</div>
          {line2 && (
            <div style={{ fontSize, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1.2, color: "#90e0ef" }}>
              {line2}
            </div>
          )}
        </div>
        <div style={{ fontSize: 24, color: "#b9d7e6" }}>{foot}</div>
      </div>
    ),
    { ...OG_SIZE },
  );
}

/** Fábrica para una página fija: rótulo y dos líneas desde el diccionario. */
export function ogFor(kickerKey: TranslationKey, line1Key: TranslationKey, line2Key?: TranslationKey) {
  return (locale: Locale) => {
    const d = dictionaries[locale];
    return ogImage({ locale, kicker: d[kickerKey], line1: d[line1Key], line2: line2Key ? d[line2Key] : undefined });
  };
}
