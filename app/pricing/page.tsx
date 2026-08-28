"use client";

import { ArrowRight, Check, Sparkles } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { useT } from "@/lib/i18n/I18nProvider";

const PLANS = [
  {
    slug: "starter",
    name: "Starter",
    priceCLP: 29_000,
    included: 25,
    extra: 990,
    bestFor: "Equipos pequeños empezando",
    features: [
      "Hasta 25 cuentas gestionadas",
      "Google Workspace o Microsoft Entra (1 conexión)",
      "Portal self-service + wizard",
      "Audit log + RBAC básico",
      "Soporte por email",
    ],
  },
  {
    slug: "growth",
    name: "Growth",
    priceCLP: 79_000,
    included: 100,
    extra: 790,
    highlighted: true,
    bestFor: "Empresas de 50 a 200 personas",
    features: [
      "Hasta 100 cuentas gestionadas",
      "Google + Microsoft (2 conexiones)",
      "Notifications Engine multi-idioma",
      "Access Profiles + Bulk CSV",
      "Scheduled requests",
      "Soporte prioritario",
    ],
  },
  {
    slug: "business",
    name: "Business",
    priceCLP: 149_000,
    included: 300,
    extra: 590,
    bestFor: "Mid-market en crecimiento",
    features: [
      "Hasta 300 cuentas gestionadas",
      "Múltiples conexiones (sin límite)",
      "SMTP propio del tenant",
      "Tenant email templates override",
      "SLA 99.9%",
      "Soporte con SLA de respuesta",
    ],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    priceCLP: 349_000,
    included: 1000,
    extra: 390,
    bestFor: "Empresas con compliance formal",
    features: [
      "Hasta 1.000 cuentas gestionadas",
      "Vault dedicado (Infisical project)",
      "Audit reports periódicos",
      "SSO reversal para admins de plataforma",
      "Soporte con account manager",
      "Onboarding asistido",
    ],
  },
];

function formatCLP(v: number) {
  return "$" + v.toLocaleString("es-CL");
}

export default function PricingPage() {
  const t = useT();
  return (
    <>
      <Section compact>
        <Container>
          <SectionHeading
            eyebrow={t("pricing.eyebrow")}
            title={
              <>
                {t("pricing_page.title.pre")}{" "}
                <span className="text-brand-gradient">{t("pricing_page.title.hl")}</span>
              </>
            }
            desc={t("pricing_page.subtitle")}
          />
          <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs">
            <Sparkles className="size-3.5 text-primary" />
            <span className="text-muted-foreground">{t("pricing_page.trial_badge")}</span>
          </div>
        </Container>
      </Section>

      <Section compact>
        <Container size="wide">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {PLANS.map((plan) => (
              <div
                key={plan.slug}
                className={
                  "relative flex flex-col overflow-hidden rounded-2xl border p-6 " +
                  (plan.highlighted
                    ? "border-primary/50 bg-card shadow-[var(--shadow-glow)]"
                    : "bg-card")
                }
              >
                {plan.highlighted && (
                  <span className="absolute right-4 top-4 rounded-full bg-brand-gradient px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {t("pricing_page.popular")}
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold tracking-tight">
                  {plan.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {plan.bestFor}
                </p>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-semibold tracking-tight">
                      {formatCLP(plan.priceCLP)}
                    </span>
                    <span className="text-sm text-muted-foreground">{t("pricing_page.per_month")}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {plan.included} {t("pricing_page.included")}{" "}
                    {formatCLP(plan.extra)}{t("pricing_page.per_account")}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-2 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <LinkButton
                  href="https://app.mekovault.com/signup"
                  external
                  className="mt-6 w-full"
                  variant={plan.highlighted ? "primary" : "outline"}
                >
                  {t("pricing_page.start_with")} {plan.name}
                </LinkButton>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Comparativa CLP vs USD */}
      <Section compact className="border-t bg-muted/30">
        <Container size="narrow">
          <SectionHeading
            eyebrow={t("pricing_page.no_surprises.eyebrow")}
            title={t("pricing_page.no_surprises.title")}
            desc={t("pricing_page.no_surprises.desc")}
            center
          />
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
            <FAQItem q={t("faq.what_counts.q")}>{t("faq.what_counts.a")}</FAQItem>
            <FAQItem q={t("faq.overages.q")}>{t("faq.overages.a")}</FAQItem>
            <FAQItem q={t("faq.switch_plan.q")}>{t("faq.switch_plan.a")}</FAQItem>
            <FAQItem q={t("faq.payment.q")}>{t("faq.payment.a")}</FAQItem>
            <FAQItem q={t("faq.contract.q")}>{t("faq.contract.a")}</FAQItem>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t bg-muted/30">
        <Container size="narrow" className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            {t("pricing_page.cta.title")}
          </h2>
          <div className="mt-6">
            <LinkButton
              href="https://app.mekovault.com/signup"
              external
              size="lg"
            >
              {t("hero.cta.signup")} <ArrowRight />
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

function FAQItem({
  q,
  children,
}: {
  q: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-xl border bg-card p-5 transition-colors open:border-primary/30">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
        <span>{q}</span>
        <span className="text-muted-foreground transition-transform group-open:rotate-45 text-lg leading-none">
          +
        </span>
      </summary>
      <div className="mt-3 text-sm text-muted-foreground">{children}</div>
    </details>
  );
}
