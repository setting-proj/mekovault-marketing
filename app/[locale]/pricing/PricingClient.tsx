"use client";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { PricingBuilder } from "@/components/PricingBuilder";
import { useT } from "@/lib/i18n/I18nProvider";

/**
 * /pricing: se paga por cuenta administrada (barra), gratis hasta 20, a
 * conversar sobre 200; incluido Google Workspace y solicitudes; el resto son
 * adicionales (decisión de Jorge, 2026-10-12).
 */
export function PricingClient() {
  const t = useT();

  return (
    <>
      <Section compact>
        <Container>
          <SectionHeading
            as="h1"
            eyebrow={t("pricing.eyebrow")}
            title={
              <>
                {t("pricing_page.title.pre")}{" "}
                <span className="text-brand-gradient">{t("pricing_page.title.hl")}</span>
              </>
            }
            desc={t("pricing_page.subtitle")}
          />
          <p className="mt-6 text-sm font-semibold text-[#33507a]">{t("pricing_page.trial_badge")}</p>
        </Container>
      </Section>

      {/* Arma tu precio */}
      <Section compact id="precio" tone="panel" className="scroll-mt-20 border-y border-[#dbeaf2]">
        <Container size="wide">
          <SectionHeading eyebrow={t("build.eyebrow")} title={t("build.title")} desc={t("build.desc")} />
          <div className="mt-10">
            <PricingBuilder />
          </div>
          <p className="mt-6 max-w-2xl rounded-[10px] border border-dashed border-[#c9dde8] px-4 py-3 text-sm text-[#33507a]">
            {t("pricing_page.model_note")}
          </p>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="border-t">
        <Container size="narrow">
          <SectionHeading
            eyebrow={t("pricing_page.faq.eyebrow")}
            title={t("pricing_page.faq.title")}
            desc={t("pricing_page.faq.desc")}
          />

          <div className="mt-10 space-y-4">
            <FAQItem q={t("faq.price_includes.q")}>{t("faq.price_includes.a")}</FAQItem>
            <FAQItem q={t("faq.discount.q")}>{t("faq.discount.a")}</FAQItem>
            <FAQItem q={t("faq.switch.q")}>{t("faq.switch.a")}</FAQItem>
            <FAQItem q={t("faq.payment.q")}>{t("faq.payment.a")}</FAQItem>
            <FAQItem q={t("faq.contract.q")}>{t("faq.contract.a")}</FAQItem>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t bg-muted/30">
        <Container size="narrow" className="text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-[#03045e]">
            {t("pricing_page.cta.title")}
          </h2>
          <div className="mt-6">
            <LinkButton href="https://app.mekovault.com/signup" external size="lg">
              {t("hero.cta.signup")} <ArrowRight />
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

function FAQItem({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-xl border bg-card p-5 transition-colors open:border-primary/30">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
        <span>{q}</span>
        <span className="text-lg leading-none text-muted-foreground transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="mt-3 text-sm text-muted-foreground">{children}</div>
    </details>
  );
}
