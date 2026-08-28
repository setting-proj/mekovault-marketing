"use client";

/**
 * /partners — Landing pública del programa de partners de Mekovault.
 *
 * Objetivo: captar leads de resellers potenciales. El formulario POST-ea
 * al backend `/api/v1/public/reseller-applications` (creado en próximo
 * pass) que:
 *   1. Persiste la aplicación (tabla nueva reseller_applications)
 *   2. Publica evento `reseller.application.submitted`
 *   3. Consumer en svc-notifications avisa a soporte@mekovault.com
 *   4. SuperAdmin ve las aplicaciones en /superadmin/reseller-applications
 *   5. Al aprobar → crea el Reseller + envía invitación al founder
 */

import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChartNoAxesColumnIncreasing,
  Check,
  Handshake,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton, Button } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.mekovault.com";

const TIER_TABLE = [
  {
    name: "Silver",
    color: "#94a3b8",
    commission: "5%",
    monthly_fee: "CLP $99.000",
    perks: [
      "Portal partner completo",
      "Templates de invitación custom",
      "Tracking comisiones por vendedor",
      "Dashboard de clientes",
    ],
  },
  {
    name: "Gold",
    color: "#fbbf24",
    commission: "7%",
    monthly_fee: "CLP $199.000",
    perks: [
      "Todo lo de Silver",
      "White-label parcial (logo + colores)",
      "Prioridad en soporte",
      "MDF trimestral USD $500",
    ],
  },
  {
    name: "Platinum",
    color: "#a78bfa",
    commission: "10%",
    monthly_fee: "CLP $399.000",
    perks: [
      "Todo lo de Gold",
      "White-label completo (partner.tudominio.com)",
      "MDF trimestral USD $2.000",
      "Marketplace de leads compartidos",
      "Certificación técnica incluida",
    ],
  },
];

const HOW_IT_WORKS = [
  {
    icon: Handshake,
    title: "1. Aplicá al programa",
    desc: "Llenás el formulario abajo. En 48h te contactamos.",
  },
  {
    icon: BadgeCheck,
    title: "2. Onboarding + certificación",
    desc: "1 semana de setup + capacitación técnica para tu team.",
  },
  {
    icon: Rocket,
    title: "3. Vendés e integrás",
    desc: "Invitá clientes desde tu portal branded. Nosotros hacemos el ejecución técnica si querés.",
  },
  {
    icon: Target,
    title: "4. Cobrás comisión mensual",
    desc: "Cada cliente que activa app te genera comisión recurrente. Payout automático o transferencia.",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <Section compact>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-primary/5 px-4 py-1 text-xs">
              <Sparkles className="size-3.5 text-primary" />
              Programa de partners Mekovault
            </div>
            <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Vendé Mekovault a tus clientes.{" "}
              <span className="text-brand-gradient">Ganá comisión recurrente.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Consultoras IT, MSPs y integradores: llevá Mekovault a las empresas que
              ya te contratan. Nosotros ejecutamos técnico, vos cerrás el negocio y
              cobrás <strong>5% – 10%</strong> mensual por cliente.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LinkButton href="#apply" size="lg">
                Aplicar al programa <ArrowRight />
              </LinkButton>
              <LinkButton href="#tiers" variant="outline" size="lg">
                Ver tiers
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cómo funciona */}
      <Section className="border-t">
        <Container>
          <SectionHeading
            eyebrow="Cómo funciona"
            title="4 pasos para arrancar"
            desc="De aplicación a primer cliente en menos de 2 semanas."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-2xl border bg-card p-6">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Tiers */}
      <Section id="tiers" className="border-t bg-muted/20">
        <Container>
          <SectionHeading
            eyebrow="Tiers"
            title="Escalá según crezcas"
            desc="Todos incluyen portal partner + tracking comisiones + templates custom."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TIER_TABLE.map((tier, i) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-6 ${
                  i === 2 ? "border-primary bg-primary/5 shadow-[var(--shadow-glow)]" : "bg-card"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-heading text-2xl font-semibold">
                    {tier.name}
                  </h3>
                  <span
                    className="size-8 rounded-full"
                    style={{ backgroundColor: tier.color }}
                    aria-hidden
                  />
                </div>
                <div className="mb-4">
                  <div className="font-heading text-3xl font-semibold">
                    {tier.commission}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    comisión mensual por cliente activo
                  </div>
                </div>
                <div className="mb-6 text-xs text-muted-foreground">
                  Cuota programa: <strong>{tier.monthly_fee}</strong>/mes
                </div>
                <ul className="space-y-2">
                  {tier.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Application form */}
      <Section id="apply" className="border-t">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Aplicá"
            title="Contanos de tu empresa"
            desc="Revisamos tu aplicación en 48h y agendamos una call para conocerlos."
          />
          <ApplicationForm />
        </Container>
      </Section>

      {/* FAQ compact */}
      <Section className="border-t bg-muted/20">
        <Container size="narrow">
          <SectionHeading eyebrow="FAQ" title="Preguntas frecuentes" />
          <div className="mt-10 space-y-4">
            <FAQItem q="¿Necesito tener perfil técnico en mi team?">
              No para arrancar. Silver es puramente comercial — nosotros ejecutamos
              el setup técnico (Google/MS provisioning). Al llegar a Gold/Platinum
              recomendamos certificar 1-2 personas para poder hacer full-service
              a tus clientes.
            </FAQItem>
            <FAQItem q="¿La comisión es recurrente o one-time?">
              <strong>Recurrente</strong>. Mientras el cliente siga activo y pagando
              mensualmente, vos seguís cobrando tu porcentaje. Clawback si el cliente
              cancela en los primeros 30 días.
            </FAQItem>
            <FAQItem q="¿Puedo tener varios vendedores dentro de mi empresa?">
              Sí. El portal soporta multi-user con roles (admin/sales/support). Cada
              vendedor tiene su comisión individual (override sobre el tier default)
              y trackeamos performance por persona.
            </FAQItem>
            <FAQItem q="¿En qué países pueden ser partners?">
              LATAM, España y USA. Pagos vía MercadoPago (Chile) o PayPal (resto). Si
              estás en otro país, contactanos y evaluamos.
            </FAQItem>
            <FAQItem q="¿Puedo hacer white-label del portal para mis clientes?">
              Sí en Gold (parcial: logo + colores) y Platinum (completo:
              partner.tudominio.com sin brand Mekovault visible).
            </FAQItem>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ApplicationForm() {
  const [form, setForm] = useState({
    company_name: "",
    website: "",
    country: "CL",
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    team_size: "1-5",
    current_customers: "",
    why_partner: "",
    preferred_tier: "silver",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(
        `${API_BASE}/api/v1/public/reseller-applications`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)}`);
      }
      setSubmitted(true);
    } catch (e) {
      setError(String((e as Error).message ?? e));
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-emerald-300 bg-emerald-50/50 p-8 text-center dark:border-emerald-500/30 dark:bg-emerald-500/10">
        <div className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/20">
          <Check className="size-6 text-emerald-700 dark:text-emerald-300" />
        </div>
        <h3 className="font-heading text-xl font-semibold">
          ¡Aplicación recibida!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Te contactamos en 48h al email que registraste. Mientras tanto, podés
          escribirnos a{" "}
          <a href="mailto:partners@mekovault.com" className="text-primary hover:underline">
            partners@mekovault.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 space-y-6">
      {error && (
        <div className="rounded-lg border border-red-300 bg-red-50/50 p-3 text-sm text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
          {error}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Nombre de la empresa *"
          value={form.company_name}
          onChange={(v) => setForm({ ...form, company_name: v })}
          placeholder="Consultora IT SPA"
          required
        />
        <Field
          label="Website"
          type="url"
          value={form.website}
          onChange={(v) => setForm({ ...form, website: v })}
          placeholder="https://…"
        />
        <div>
          <label className="mb-1 block text-xs font-medium">País *</label>
          <select
            required
            className="h-10 w-full rounded-md border bg-background px-3 text-sm"
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
          >
            <option value="CL">Chile</option>
            <option value="AR">Argentina</option>
            <option value="MX">México</option>
            <option value="CO">Colombia</option>
            <option value="PE">Perú</option>
            <option value="UY">Uruguay</option>
            <option value="BR">Brasil</option>
            <option value="US">USA</option>
            <option value="ES">España</option>
            <option value="OTHER">Otro</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium">
            Tamaño del team *
          </label>
          <select
            required
            className="h-10 w-full rounded-md border bg-background px-3 text-sm"
            value={form.team_size}
            onChange={(e) => setForm({ ...form, team_size: e.target.value })}
          >
            <option value="1-5">1 – 5</option>
            <option value="6-15">6 – 15</option>
            <option value="16-50">16 – 50</option>
            <option value="51-200">51 – 200</option>
            <option value="200+">Más de 200</option>
          </select>
        </div>
        <Field
          label="Tu nombre *"
          value={form.contact_name}
          onChange={(v) => setForm({ ...form, contact_name: v })}
          required
        />
        <Field
          label="Tu email corporativo *"
          type="email"
          value={form.contact_email}
          onChange={(v) => setForm({ ...form, contact_email: v })}
          required
        />
        <Field
          label="Teléfono / WhatsApp"
          value={form.contact_phone}
          onChange={(v) => setForm({ ...form, contact_phone: v })}
        />
        <div>
          <label className="mb-1 block text-xs font-medium">Tier deseado</label>
          <select
            className="h-10 w-full rounded-md border bg-background px-3 text-sm"
            value={form.preferred_tier}
            onChange={(e) => setForm({ ...form, preferred_tier: e.target.value })}
          >
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium">
          ¿Cuántos clientes tienen hoy? *
        </label>
        <input
          type="text"
          required
          className="h-10 w-full rounded-md border bg-background px-3 text-sm"
          value={form.current_customers}
          onChange={(e) =>
            setForm({ ...form, current_customers: e.target.value })
          }
          placeholder="Ej: 25 empresas en LATAM, principalmente PyMEs de 20-200 empleados"
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium">
          ¿Por qué te interesa el programa? *
        </label>
        <textarea
          required
          className="h-24 w-full rounded-md border bg-background p-3 text-sm"
          value={form.why_partner}
          onChange={(e) => setForm({ ...form, why_partner: e.target.value })}
          placeholder="Contanos qué buscás resolver para tus clientes y cómo ves Mekovault en tu portfolio."
          maxLength={2000}
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? "Enviando…" : "Enviar aplicación"}{" "}
          <ArrowRight />
        </Button>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Al enviar aceptás nuestra{" "}
        <a href="/legal/privacy" className="underline">
          Política de Privacidad
        </a>
        . Nunca compartimos tus datos con terceros.
      </p>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium">{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full rounded-md border bg-background px-3 text-sm"
      />
    </div>
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
