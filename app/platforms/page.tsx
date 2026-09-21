"use client";

/**
 * /platforms — qué plataformas administra Mekovault y cómo resuelve cada una.
 * Los estados salen de `lib/platforms.ts`: nada aparece como disponible si no lo está.
 */

import { ArrowRight, Ban, ClipboardCheck, PlugZap, PlusCircle } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { HrTriggersSection, PlatformsSection } from "@/components/ServiceModel";
import { useT } from "@/lib/i18n/I18nProvider";

export default function PlatformsPage() {
  const t = useT();
  const HOW = [
    { icon: <PlugZap />, title: t("pf.how.auto.title"), desc: t("pf.how.auto.desc") },
    { icon: <ClipboardCheck />, title: t("pf.how.guided.title"), desc: t("pf.how.guided.desc") },
    { icon: <PlusCircle />, title: t("pf.how.any.title"), desc: t("pf.how.any.desc") },
  ];

  return (
    <>
      <Section compact>
        <Container>
          <SectionHeading
            eyebrow={t("pf.eyebrow")}
            title={
              <>
                {t("pf.title.pre")} <span className="text-brand-gradient">{t("pf.title.hl")}</span>
              </>
            }
            desc={t("pf.subtitle")}
          />
        </Container>
      </Section>

      <PlatformsSection className="border-t bg-muted/30" />

      <Section className="border-t">
        <Container>
          <SectionHeading eyebrow={t("pf.how.eyebrow")} title={t("pf.how.title")} />
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {HOW.map((h) => (
              <div key={h.title} className="rounded-2xl border bg-card p-6">
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:size-5">
                  {h.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold tracking-tight">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 flex max-w-5xl items-start gap-4 rounded-2xl border border-dashed p-6">
            <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground [&_svg]:size-5">
              <Ban />
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold tracking-tight">{t("pf.never.title")}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{t("pf.never.desc")}</p>
            </div>
          </div>
        </Container>
      </Section>

      <HrTriggersSection className="border-t bg-muted/30" />

      <Section className="border-t">
        <Container size="narrow" className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">{t("pf.cta.title")}</h2>
          <p className="mt-3 text-muted-foreground">{t("pf.cta.subtitle")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LinkButton href="/contact" size="lg">
              {t("pf.cta.contact")} <ArrowRight />
            </LinkButton>
            <LinkButton href="/license-control" size="lg" variant="outline">
              {t("pf.cta.license")}
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
