import type { Metadata } from "next";
import { dictionaries } from "@/lib/i18n/dictionaries";
import * as EN from "@/lib/content/docs/index.en";
import * as PT from "@/lib/content/docs/index.pt";
import { pageMetadata } from "@/lib/seo";
import Link from "@/components/Link";
import { localeFromParams, type LocaleParams } from "@/lib/i18n/params";



const ES = { title: "Documentación" };
function SpanishBody() {
  return (
    <>
      <h1>Documentación</h1>
      <p>
        Guías breves para poner Mekovault en marcha y administrarlo día a día. Están escritas
        para administradores de TI y personas de RRHH, sin jerga técnica salvo donde hace falta.
      </p>
      <ul>
        <li>
          <Link href="/docs/getting-started">Primeros pasos</Link>: crear la organización, conectar
          Google Workspace y dar acceso al equipo.
        </li>
        <li>
          <Link href="/docs/admin-guide">Guía del administrador</Link>: personas y roles, productos,
          remitentes de correo, calendario de operaciones y auditoría.
        </li>
        <li>
          <Link href="/docs/tickets">Tickets y automatizaciones</Link>: qué hace cada tipo de
          ticket, quién lo puede pedir y qué ocurre solo.
        </li>
        <li>
          <Link href="/docs/troubleshooting">Problemas frecuentes</Link>: errores de conexión,
          correos que no llegan, accesos que no aparecen.
        </li>
      </ul>
      <p>
        El detalle técnico (servicios, base de datos, seguridad) está en{" "}
        <Link href="/governance">Arquitectura y gobernanza</Link>. El estado del servicio, en{" "}
        <Link href="/status">/status</Link>.
      </p>
    </>
  );
}

/** Versión por idioma: inglés y portugués traducidos; el resto, el original en español. */
export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await localeFromParams(params);
  const v = locale === "en-US" ? EN : locale === "pt-BR" ? PT : null;
  const es = ES as { title: string; description?: string };
  const title = v ? v.title : es.title;
  return pageMetadata({
    locale,
    path: "/docs",
    title: title.includes("Mekovault") ? title : `${title} · Mekovault`,
    description: v ? v.description : (es.description ?? dictionaries[locale]["seo.docs.description"]),
    type: "article",
  });
}

export default async function Page({ params }: { params: LocaleParams }) {
  const locale = await localeFromParams(params);
  if (locale === "en-US") return <EN.default />;
  if (locale === "pt-BR") return <PT.default />;
  return <SpanishBody />;
}
