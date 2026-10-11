import type { ArticleFaq, ArticleStep } from "@/components/Article";

/** Lo que exporta cada archivo de guía (base es-CL y variantes por idioma). */
export type ResourceContent = {
  /** Respuesta directa bajo el H1 (2 o 3 frases). */
  summary: string;
  Body: () => React.JSX.Element;
  faq?: ArticleFaq[];
  steps?: ArticleStep[];
  /** Slugs relacionados. */
  related?: string[];
  cta?: { title: string; desc: string };
  /** Metadatos localizados (solo en las variantes; la base los toma de lib/resources.ts). */
  meta?: { title: string; seoTitle: string; description: string; question: string };
};
