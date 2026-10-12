import type { Metadata } from "next";
import { dictionaries } from "@/lib/i18n/dictionaries";
import * as EN from "@/lib/content/legal/cookies.en";
import * as PT from "@/lib/content/legal/cookies.pt";
import { pageMetadata } from "@/lib/seo";
import { localeFromParams, type LocaleParams } from "@/lib/i18n/params";

const ES = {
  title: "Política de Cookies",
  description: "Uso de cookies en el sitio y portal de Mekovault.",
};

function SpanishBody() {
  return (
    <>
      <h1>Política de Cookies</h1>
      <p className="text-sm text-muted-foreground">Vigencia: 2026</p>

      <h2>Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web almacena en tu
        dispositivo para recordar información entre visitas.
      </p>

      <h2>Cookies que usamos</h2>
      <ul>
        <li>
          <strong>Esenciales</strong>: cookies de sesión para el portal
          (autenticación, refresh tokens HttpOnly). Sin ellas el servicio no
          funciona.
        </li>
        <li>
          <strong>Preferencias</strong>: recordar el tema (claro/oscuro) elegido
          por el usuario. Almacenado en <code>localStorage</code>.
        </li>
      </ul>

      <h2>Lo que NO usamos</h2>
      <p>
        Mekovault no utiliza cookies de tracking publicitario ni analytics de
        terceros en el sitio marketing por defecto. Si un cliente activa
        Cloudflare Insights u otra analítica en su propio portal white-label,
        eso se rige por su propia política.
      </p>

      <h2>Cómo gestionarlas</h2>
      <p>
        Puedes eliminar las cookies desde la configuración de tu navegador. Si
        eliminas las cookies esenciales, tendrás que iniciar sesión de nuevo.
      </p>

      <h2>Contacto</h2>
      <p>
        Escríbenos a{" "}
        <a href="mailto:privacidad@mekovault.com">privacidad@mekovault.com</a>{" "}
        si tienes dudas.
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
    path: "/legal/cookies",
    title: title.includes("Mekovault") ? title : `${title} · Mekovault`,
    description: v ? v.description : (es.description ?? dictionaries[locale]["seo.legal.description"]),
    type: "article",
  });
}

export default async function Page({ params }: { params: LocaleParams }) {
  const locale = await localeFromParams(params);
  if (locale === "en-US") return <EN.default />;
  if (locale === "pt-BR") return <PT.default />;
  return <SpanishBody />;
}
