import type { Metadata } from "next";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "Planes",
  description:
    "6 planes en pesos chilenos, desde Starter hasta Enterprise. 15% de descuento pagando anual. Sin tarjeta para el trial.",
};

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
  return (
    <>
      <Section compact>
        <Container>
          <SectionHeading
            eyebrow="Planes"
            title={
              <>
                Precios claros en{" "}
                <span className="text-brand-gradient">pesos chilenos</span>
              </>
            }
            desc="6 tiers en CLP nativo. Excedentes por cuenta si superás el incluido. Pagando anual, 15% off automático."
          />
          <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs">
            <Sparkles className="size-3.5 text-primary" />
            <span className="text-muted-foreground">Trial 30 días · sin tarjeta</span>
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
                    Popular
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
                    <span className="text-sm text-muted-foreground">/mes</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {plan.included} cuentas incluidas · excedente{" "}
                    {formatCLP(plan.extra)}/cta
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
                  Empezar con {plan.name}
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
            eyebrow="Sin sorpresas"
            title="Precios locales, sin volatilidad cambiaria"
            desc="Facturamos en CLP con boleta/factura chilena. Nada de sorpresas por tipo de cambio a fin de mes."
            center
          />
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="border-t">
        <Container size="narrow">
          <SectionHeading
            eyebrow="FAQ"
            title="Preguntas frecuentes"
            desc="Si tenés otra duda, escribinos a cloud@mekovault.com."
          />

          <div className="mt-10 space-y-4">
            <FAQItem q="¿Qué cuenta como 'cuenta gestionada'?">
              Toda cuenta creada, sincronizada o suspendida por Mekovault dentro
              de tu tenant durante el mes. Las cuentas eliminadas ya no cuentan.
            </FAQItem>
            <FAQItem q="¿Cómo se cobran los excedentes?">
              Al cierre de cada período de facturación, Mekovault calcula el
              promedio diario de cuentas gestionadas. Todo lo que supere el
              incluido en tu plan se cobra al precio de excedente unitario del
              plan.
            </FAQItem>
            <FAQItem q="¿Puedo cambiar de plan?">
              Sí, en cualquier momento desde el panel de billing. El prorrateo es
              día a día: no pagás doble por el cambio.
            </FAQItem>
            <FAQItem q="¿Cómo se paga?">
              Vía MercadoPago Chile (suscripción con débito automático) o
              transferencia manual para Enterprise.
            </FAQItem>
            <FAQItem q="¿Hay contrato mínimo?">
              No. El trial es de 30 días y podés cancelar cuando quieras. Los
              anuales tienen 15% off pero se prorratean al cancelar.
            </FAQItem>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t bg-muted/30">
        <Container size="narrow" className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            Empezá tu trial en 2 minutos
          </h2>
          <div className="mt-6">
            <LinkButton
              href="https://app.mekovault.com/signup"
              external
              size="lg"
            >
              Crear cuenta gratis <ArrowRight />
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
