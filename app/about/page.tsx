import type { Metadata } from "next";
import { ArrowRight, Building2, Compass, Mountain } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Mekovault nace en Santiago para reemplazar los flujos manuales de gestión de identidades en Chile y LATAM.",
};

export default function AboutPage() {
  return (
    <>
      <Section compact>
        <Container size="narrow">
          <SectionHeading
            eyebrow="Nuestra historia"
            title={
              <>
                Nacimos observando cómo{" "}
                <span className="text-brand-gradient">
                  IT Managers en Chile
                </span>{" "}
                gestionan cuentas: con hojas de cálculo.
              </>
            }
            desc="Mekovault SpA es una empresa chilena. Vimos que los equipos de IT en SMBs y mid-market siguen ejecutando altas, bajas y cambios uno por uno, en Google Workspace y Microsoft Entra, con planillas como fuente de verdad."
          />
        </Container>
      </Section>

      <Section className="border-t">
        <Container size="wide">
          <div className="grid gap-8 lg:grid-cols-3">
            <Pillar
              icon={<Compass />}
              title="Misión"
              desc="Automatizar el lifecycle de identidades corporativas para que los equipos de IT dejen de operar y empiecen a diseñar."
            />
            <Pillar
              icon={<Building2 />}
              title="Enfoque"
              desc="Empezamos por Chile — precios en CLP, boletas chilenas, soporte en español. Escalamos a LATAM después."
            />
            <Pillar
              icon={<Mountain />}
              title="Ambición"
              desc="Ser el standard regional para gestión de identidades en SMB y mid-market. Sin dependencias en integradores externos."
            />
          </div>
        </Container>
      </Section>

      <Section className="border-t bg-muted/30">
        <Container size="narrow">
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Por qué construimos Mekovault
            </h2>
            <p className="mt-4 text-muted-foreground">
              El punto de partida fue un cliente concreto. Un IT Manager en
              Santiago que gestionaba ~200 cuentas Google Workspace con un
              formulario, una hoja de cálculo y ~20 archivos de Apps Script. La
              contradicción era clara: <em>una empresa moderna</em> ejecutando{" "}
              <em>procesos artesanales</em>.
            </p>
            <p className="mt-4 text-muted-foreground">
              El diagnóstico fue simple. Los productos globales de IAM se
              enfocan en enterprises que ya tienen un equipo dedicado. Para
              todos los demás — 50, 100, 200, 500 personas — no hay opción
              simple, local y accesible.
            </p>
            <p className="mt-4 text-muted-foreground">
              Mekovault es esa opción. Multi-tenant real (RLS + vault por
              tenant), audit inmutable, workers async con reintentos, y una
              paleta de servicios que crece por módulos. No es solo un
              provisioning tool: es la infraestructura de identidad que las
              empresas de LATAM necesitan.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-t">
        <Container size="narrow" className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            ¿Querés conocer al equipo?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Escribinos y coordinamos una reunión. Contamos qué hacemos, cómo lo
            hacemos, y qué te podemos resolver.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LinkButton href="/contact" size="lg">
              Contactanos <ArrowRight />
            </LinkButton>
            <LinkButton
              href="https://app.mekovault.com/signup"
              external
              size="lg"
              variant="outline"
            >
              Empezar gratis
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Pillar({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:size-5">
        {icon}
      </div>
      <h3 className="font-heading text-lg font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
