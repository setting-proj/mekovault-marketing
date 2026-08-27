import type { Metadata } from "next";
import { Mail, MapPin, Building, ArrowRight } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribinos a cloud@mekovault.com o pedí una reunión con nuestro equipo comercial.",
};

export default function ContactPage() {
  return (
    <>
      <Section compact>
        <Container size="narrow">
          <SectionHeading
            eyebrow="Contacto"
            title={
              <>
                Hablemos.{" "}
                <span className="text-brand-gradient">
                  Respondemos en 1 día hábil.
                </span>
              </>
            }
            desc="La forma más rápida de conocer Mekovault es abrir un trial. Si preferís hablar antes, escribinos por email o vía formulario."
          />
        </Container>
      </Section>

      <Section compact>
        <Container size="narrow">
          <div className="grid gap-6 sm:grid-cols-2">
            <ContactCard
              icon={<Mail />}
              title="Ventas y consultas generales"
              value="cloud@mekovault.com"
              href="mailto:cloud@mekovault.com"
            />
            <ContactCard
              icon={<Building />}
              title="Soporte a clientes"
              value="soporte@mekovault.com"
              href="mailto:soporte@mekovault.com"
            />
            <ContactCard
              icon={<MapPin />}
              title="Oficina"
              value="Santiago de Chile"
              subvalue="Trabajo remoto por defecto"
            />
            <ContactCard
              icon={<ArrowRight />}
              title="Trial inmediato"
              value="app.mekovault.com/signup"
              href="https://app.mekovault.com/signup"
              external
            />
          </div>
        </Container>
      </Section>

      <Section className="border-t bg-muted/30">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Formulario"
            title="Escribinos"
            desc="Contanos brevemente qué necesitás. Este formulario abre tu cliente de email."
            center
          />

          <form
            action="mailto:cloud@mekovault.com"
            method="post"
            encType="text/plain"
            className="mx-auto mt-10 max-w-lg space-y-4"
          >
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                required
                className="h-10 w-full rounded-lg border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="h-10 w-full rounded-lg border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="company" className="text-sm font-medium">
                Empresa
              </label>
              <input
                id="company"
                name="company"
                className="h-10 w-full rounded-lg border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                Cuéntanos
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border bg-card px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </div>
            <LinkButton href="mailto:cloud@mekovault.com" size="lg" className="w-full">
              Enviar mensaje
            </LinkButton>
            <p className="text-center text-xs text-muted-foreground">
              También podés escribirnos directamente a{" "}
              <a
                href="mailto:cloud@mekovault.com"
                className="font-medium text-primary hover:underline"
              >
                cloud@mekovault.com
              </a>
              .
            </p>
          </form>
        </Container>
      </Section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  value,
  subvalue,
  href,
  external = false,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subvalue?: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="rounded-2xl border bg-card p-6 transition-colors hover:border-primary/40">
      <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary [&_svg]:size-4">
        {icon}
      </div>
      <p className="text-xs text-muted-foreground">{title}</p>
      <p className="mt-1 font-medium">{value}</p>
      {subvalue && (
        <p className="mt-0.5 text-xs text-muted-foreground">{subvalue}</p>
      )}
    </div>
  );
  if (!href) return inner;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }
  return (
    <a href={href} className="block">
      {inner}
    </a>
  );
}
