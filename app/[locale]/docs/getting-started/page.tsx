import type { Metadata } from "next";
import { dictionaries } from "@/lib/i18n/dictionaries";
import * as EN from "@/lib/content/docs/getting-started.en";
import * as PT from "@/lib/content/docs/getting-started.pt";
import { pageMetadata } from "@/lib/seo";
import { localeFromParams, type LocaleParams } from "@/lib/i18n/params";
const ES = { title: "Primeros pasos" };

function SpanishBody() {
  return (
    <>
      <h1>Primeros pasos</h1>
      <p>
        En unos 15 minutos tienes la organización creada, el directorio conectado y las primeras
        personas con acceso.
      </p>

      <h2>1. Crea tu organización</h2>
      <ol>
        <li>Entra en <code>app.mekovault.com</code> con tu cuenta de Google de la empresa.</li>
        <li>
          El asistente crea la organización con el dominio de tu correo. Si tu dominio ya pertenece
          a una organización, no se crea otra: pide acceso a tu administrador.
        </li>
        <li>Quien crea la organización queda como <strong>Administrador</strong>.</li>
      </ol>

      <h2>2. Conecta Google Workspace</h2>
      <p>
        Mekovault necesita una credencial delegada para leer el directorio y crear, bloquear o
        reactivar cuentas. El asistente muestra paso a paso qué copiar en la consola de
        administración (en Google: el identificador del cliente y la lista de ámbitos separados por
        coma). Al terminar hace una prueba real y te dice si falta algo.
      </p>
      <p>Los dominios habilitados en tu consola aparecen luego como opciones al crear cuentas.</p>

      <h2>3. Da acceso a tu equipo</h2>
      <p>
        En <strong>Configuración → Personas y roles</strong> buscas a alguien del directorio y le
        asignas uno o varios roles: Administrador, Soporte de tickets, Personas y Cultura,
        Solicitante o Auditor. Si esa persona nunca entró a Mekovault, el acceso queda listo para su
        primer inicio de sesión. Sin un rol asignado nadie entra.
      </p>

      <h2>4. Configura los correos</h2>
      <p>
        En <strong>Configuración → Remitentes</strong> defines desde qué dirección salen los avisos
        y pruebas el envío con un clic. En <strong>Configuración → Empresa</strong> indicas el buzón
        de RRHH que recibe copia de las altas de cuenta.
      </p>

      <h2>5. Prueba con un ticket</h2>
      <p>
        Desde el sitio de tu organización, <strong>Tickets → Nuevo ticket</strong>. Elige el
        servicio, completa los datos y revisa el resumen antes de confirmar. El primer caso
        recomendado es <em>Crear cuenta</em> con fecha de ingreso: verás cómo la cuenta se crea sola
        ese día.
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
    path: "/docs/getting-started",
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
