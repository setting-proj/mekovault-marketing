import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Article } from "@/components/Article";
import Link from "@/components/Link";
import { detectLocaleServer } from "@/lib/i18n/detectLocale.server";
import { CONNECTORS } from "@/lib/resources";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return CONNECTORS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CONNECTORS.find((x) => x.slug === slug);
  if (!c) return {};
  const locale = await detectLocaleServer();
  return pageMetadata({
    locale,
    path: `/conectores/${c.slug}`,
    title: c.seoTitle,
    description: c.description,
    type: "article",
    localized: false,
  });
}

/** BUK y Talana están conectados en el producto; Rankmi no todavía (y lo decimos). */
const AVAILABLE = new Set(["buk", "talana"]);

export default async function ConnectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CONNECTORS.find((x) => x.slug === slug);
  if (!c) notFound();
  const available = AVAILABLE.has(c.slug);
  const name = c.name;

  const summary = available
    ? `Con ${name} conectado, cada contratación crea la cuenta de Google Workspace el día de ingreso y cada término la cierra el último día a la hora de salida, con el correo redirigido, los archivos traspasados según decida la jefatura, la licencia liberada y la evidencia guardada. Personas no tiene que pedir nada: todo nace en la nómina.`
    : `El conector de ${name} está en preparación: el patrón es el mismo que ya funciona con BUK y Talana (la nómina avisa el ingreso y el término, y Mekovault crea y cierra la cuenta de Google Workspace a la fecha). Mientras tanto, las altas y bajas se piden desde Personas y se ejecutan solas igual. Escríbenos y te avisamos cuando esté.`;

  const faq = [
    {
      q: `¿Qué datos lee Mekovault de ${name}?`,
      a: "Solo lo necesario para crear y cerrar cuentas: nombre, correo personal, cargo, área, jefatura, fecha de ingreso y fecha de término. No lee sueldos ni documentos.",
    },
    {
      q: "¿Qué pasa si la nómina y Google no coinciden?",
      a: "Google Workspace es la fuente de la verdad de las cuentas. Si la nómina trae una persona que no está en Google, se crea la cuenta el día de ingreso; si trae un término para alguien que no tiene cuenta, la solicitud queda en 'requiere atención' en vez de inventar algo.",
    },
    {
      q: "¿Puedo revisar antes de que se ejecute?",
      a: "Sí. Por defecto es automático; en Origen de altas y bajas puedes exigir aprobación manual para cada ingreso o término que venga de la nómina.",
    },
    {
      q: "¿Y si no uso nómina conectada?",
      a: "Funciona igual: Personas registra el ingreso o la salida con su fecha y Mekovault lo ejecuta. La nómina conectada solo ahorra ese paso.",
    },
  ];

  return (
    <Article
      path={`/conectores/${c.slug}`}
      title={`${name} + Google Workspace: que las altas y bajas nazcan donde ya nacen`}
      description={c.description}
      summary={summary}
      updated="2026-10-11"
      readingMinutes={5}
      crumbs={[
        { href: "/", label: "Inicio" },
        { href: "/recursos", label: "Guías" },
      ]}
      faq={faq}
      related={[
        { href: "/recursos/baja-empleado-google-workspace", label: "Cómo dar de baja a un empleado en Google Workspace" },
        { href: "/recursos/alta-de-cuentas-el-primer-dia", label: "Alta de correo corporativo el primer día" },
      ]}
      cta={
        available
          ? { title: `Conecta ${name} en una tarde`, desc: "Nombre de tu cuenta, un token de API y desde cuándo manda. Al guardar se prueba la conexión. Gratis 90 días." }
          : { title: `Avísame cuando ${name} esté`, desc: "Escríbenos a cloud@mekovault.com con el nombre de tu empresa y te avisamos. Mientras tanto, las altas y bajas se piden desde Personas." }
      }
    >
      <h2>Cómo funciona</h2>
      <ol>
        <li>
          <strong>La nómina manda.</strong> {name} registra la contratación con su fecha de ingreso, o el término con su
          último día. {available ? "Mekovault lo recibe por webhook y por sincronización periódica." : "Mekovault lo recibirá por sincronización periódica."}
        </li>
        <li>
          <strong>Mekovault programa.</strong> Cada ingreso se convierte en una solicitud de alta para el día de ingreso;
          cada término, en una baja para el último día a la hora de salida. Si pides aprobación manual, alguien de
          Personas confirma con un clic.
        </li>
        <li>
          <strong>Se ejecuta sola.</strong> El alta crea la cuenta con grupos, unidad y licencia por área. La baja
          bloquea, redirige el correo, revoca las apps autorizadas, marca la licencia y programa la eliminación a 30 días.
        </li>
        <li>
          <strong>La jefatura decide lo que solo ella sabe.</strong> Recibe un correo con las opciones para los archivos y
          el correo de quien se va: traspasar, recuperar información unos días, o desactivar. {name} también puede
          traer la jefatura de cada persona.
        </li>
        <li>
          <strong>Queda la evidencia.</strong> Quién lo originó ({name}), qué se hizo, cuándo, y qué decidió la jefatura.
          365 días, descargable.
        </li>
      </ol>

      <h2>Qué sí y qué no</h2>
      <ul>
        <li>Sí: ingresos, términos y jefaturas. Países: {c.countries}.</li>
        <li>No: sueldos, finiquitos, vacaciones ni documentos. Eso sigue en {name}.</li>
        <li>No: Mekovault no escribe en {name}. Solo lee.</li>
        <li>Si tu empresa usa otra nómina, Personas sigue siendo el origen; cuéntanos cuál usas.</li>
      </ul>

      <h2>Para quién es</h2>
      <p>
        Para la empresa de 10 a 500 personas que ya lleva su nómina en {name} y que hoy, cuando alguien entra o se va,
        manda un correo a quien tenga la clave de Google. Con el conector ese correo desaparece: el dato ya está en la
        nómina, y la cuenta se crea y se cierra a la fecha. Cómo se gobierna cada cuenta desde ahí, en{" "}
        <Link href="/account-governance">Gobierno de cuentas</Link>.
      </p>
    </Article>
  );
}
