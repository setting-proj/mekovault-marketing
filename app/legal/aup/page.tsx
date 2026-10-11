import type { Metadata } from "next";
import { detectLocaleServer } from "@/lib/i18n/detectLocale.server";
import { dictionaries } from "@/lib/i18n/dictionaries";
import * as EN from "@/lib/content/legal/aup.en";
import * as PT from "@/lib/content/legal/aup.pt";
import { pageMetadata } from "@/lib/seo";

const ES = {
  title: "Política de Uso Aceptable",
  description:
    "Qué usos están permitidos y prohibidos en la plataforma Mekovault.",
};

function SpanishBody() {
  return (
    <>
      <h1>Política de Uso Aceptable (AUP)</h1>
      <p className="text-sm text-muted-foreground">Vigencia: 2026</p>

      <p>
        Esta política complementa los Términos y define qué usos NO se permiten
        en la plataforma Mekovault. Al aceptar los Términos, el Cliente acepta
        también esta AUP.
      </p>

      <h2>Usos prohibidos</h2>
      <ul>
        <li>Intentar acceder a datos de otros tenants.</li>
        <li>Probar la seguridad de la plataforma sin autorización explícita.</li>
        <li>
          Enviar spam, phishing o notificaciones no autorizadas a través del
          sistema de emails.
        </li>
        <li>
          Utilizar los conectores (Google Workspace u otras plataformas) para
          exfiltrar información sin justificación operativa.
        </li>
        <li>
          Automatizar operaciones a un ritmo que degrade el servicio para otros
          clientes.
        </li>
        <li>
          Compartir credenciales de acceso al portal con terceros no
          autorizados.
        </li>
      </ul>

      <h2>Cumplimiento</h2>
      <p>
        Mekovault se reserva el derecho de investigar y responder a violaciones
        de esta política, incluyendo la suspensión inmediata de la cuenta si el
        riesgo es material.
      </p>

      <h2>Reporte de abusos</h2>
      <p>
        Para reportar un abuso de la plataforma escribe a{" "}
        <a href="mailto:abuse@mekovault.com">abuse@mekovault.com</a>.
      </p>
    </>
  );
}

/** Versión por idioma: inglés y portugués traducidos; el resto, el original en español. */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await detectLocaleServer();
  const v = locale === "en-US" ? EN : locale === "pt-BR" ? PT : null;
  const es = ES as { title: string; description?: string };
  const title = v ? v.title : es.title;
  return pageMetadata({
    locale,
    path: "/legal/aup",
    title: title.includes("Mekovault") ? title : `${title} · Mekovault`,
    description: v ? v.description : (es.description ?? dictionaries[locale]["seo.legal.description"]),
    type: "article",
  });
}

export default async function Page() {
  const locale = await detectLocaleServer();
  if (locale === "en-US") return <EN.default />;
  if (locale === "pt-BR") return <PT.default />;
  return <SpanishBody />;
}
