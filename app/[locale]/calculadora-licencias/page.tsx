import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { LeakCalculator } from "@/components/LeakCalculator";
import Link from "@/components/Link";
import { EyebrowBadge } from "@/components/Section";
import { SITE_URL } from "@/lib/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import { localeFromParams, type LocaleParams } from "@/lib/i18n/params";

const TITLE = "Calculadora: cuánto pagas en licencias de gente que ya no está";
const DESCRIPTION =
  "Personas, rotación y costo por licencia: una estimación honesta de cuánto se fuga al año en cuentas de ex empleados que se siguen cobrando en Google Workspace y otras plataformas.";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await localeFromParams(params);
  return pageMetadata({
    locale,
    path: "/calculadora-licencias",
    title: "Calculadora de licencias que sigues pagando · Mekovault",
    description: DESCRIPTION,
    localized: false,
  });
}

export default function CalculatorPage() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: TITLE,
    url: `${SITE_URL}/calculadora-licencias`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: DESCRIPTION,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
  return (
    <>
      <JsonLd data={data} />
      <Container className="py-12 sm:py-16">
        <EyebrowBadge>Calculadora</EyebrowBadge>
        <h1 className="mt-4 max-w-[760px] text-balance text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#03045e] sm:text-[44px]">
          {TITLE}
        </h1>
        <p className="mt-5 max-w-[680px] text-pretty text-[17px] leading-[1.6] text-[#33507a]">
          Tres datos y una estimación. Asumimos que una cuenta olvidada se sigue pagando seis meses en promedio antes de
          que alguien la cierre, que es lo que vemos en empresas de 50 a 500 personas. Es una estimación conservadora:
          no cuenta Slack, Zoom, Figma ni las suscripciones con tarjeta.
        </p>
        <div className="mt-10">
          <LeakCalculator />
        </div>
        <section className="mt-14 max-w-[760px]">
          <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-[#03045e]">Cómo se calcula</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-[1.7] text-[#33507a]">
            <li>Personas que salen al año = personas en la empresa × rotación anual. En Chile la rotación suele estar entre 15 % y 30 %.</li>
            <li>Fuga anual = personas que salen × costo mensual de la licencia × 6 meses promedio sin cerrar.</li>
            <li>Google Workspace y las plataformas similares cuestan entre 7 y 25 dólares por persona al mes.</li>
          </ul>
          <h2 className="mt-10 text-[22px] font-extrabold tracking-[-0.02em] text-[#03045e]">Por qué pasa</h2>
          <p className="mt-3 text-[16px] leading-[1.7] text-[#33507a]">
            Porque suspender una cuenta en Google no deja de cobrarla, porque en plan anual la reducción solo rige en la
            renovación, y porque nadie tiene la tarea de volver a mirar. El detalle, con las reglas por plataforma, en{" "}
            <Link href="/recursos/licencias-que-sigues-pagando" className="font-bold text-[#0077b6] hover:underline">
              las licencias que sigues pagando
            </Link>
            .
          </p>
        </section>
      </Container>
    </>
  );
}
