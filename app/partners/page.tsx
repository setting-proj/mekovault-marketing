"use client";

/**
 * /partners: landing pública del programa de partners de Mekovault.
 *
 * El formulario hace POST a `/api/v1/public/reseller-applications`. Si el
 * endpoint falla, se muestra un mensaje simple con el correo alternativo.
 */

import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Handshake,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton, Button } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { useT } from "@/lib/i18n/I18nProvider";
import type { TranslationKey } from "@/lib/i18n/dictionaries";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.mekovault.com";

type TierDef = {
  name: string;
  color: string;
  commission: string;
  monthly_fee: string;
  perks: TranslationKey[];
};

const TIERS: TierDef[] = [
  {
    name: "Silver",
    color: "#94a3b8",
    commission: "5%",
    monthly_fee: "CLP $99.000",
    perks: [
      "partners.tier.silver.p1",
      "partners.tier.silver.p2",
      "partners.tier.silver.p3",
      "partners.tier.silver.p4",
    ],
  },
  {
    name: "Gold",
    color: "#fbbf24",
    commission: "7%",
    monthly_fee: "CLP $199.000",
    perks: [
      "partners.tier.gold.p1",
      "partners.tier.gold.p2",
      "partners.tier.gold.p3",
      "partners.tier.gold.p4",
    ],
  },
  {
    name: "Platinum",
    color: "#a78bfa",
    commission: "10%",
    monthly_fee: "CLP $399.000",
    perks: [
      "partners.tier.platinum.p1",
      "partners.tier.platinum.p2",
      "partners.tier.platinum.p3",
      "partners.tier.platinum.p4",
      "partners.tier.platinum.p5",
    ],
  },
];

const COUNTRIES: Array<[string, string]> = [
  ["CL", "Chile"],
  ["AR", "Argentina"],
  ["MX", "México"],
  ["CO", "Colombia"],
  ["PE", "Perú"],
  ["UY", "Uruguay"],
  ["BR", "Brasil"],
  ["US", "USA"],
  ["ES", "España"],
];

export default function PartnersPage() {
  const t = useT();

  const HOW = [
    { icon: Handshake, title: t("partners.how.s1.title"), desc: t("partners.how.s1.desc") },
    { icon: BadgeCheck, title: t("partners.how.s2.title"), desc: t("partners.how.s2.desc") },
    { icon: Rocket, title: t("partners.how.s3.title"), desc: t("partners.how.s3.desc") },
    { icon: Target, title: t("partners.how.s4.title"), desc: t("partners.how.s4.desc") },
  ];

  return (
    <>
      {/* Hero */}
      <Section compact>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-[#0077b6]">
              <Sparkles className="size-3.5 text-primary" />
              {t("partners.eyebrow")}
            </div>
            <h1 className="text-4xl font-extrabold tracking-[-0.02em] text-[#03045e] sm:text-5xl">
              {t("partners.title.pre")}{" "}
              <span className="text-brand-gradient">{t("partners.title.hl")}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              {t("partners.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LinkButton href="#apply" size="lg">
                {t("partners.cta.apply")} <ArrowRight />
              </LinkButton>
              <LinkButton href="#tiers" variant="outline" size="lg">
                {t("partners.cta.tiers")}
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cómo funciona */}
      <Section className="border-t">
        <Container>
          <SectionHeading
            eyebrow={t("partners.how.eyebrow")}
            title={t("partners.how.title")}
            desc={t("partners.how.desc")}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-2xl border bg-card p-6">
                  <div className="mb-4 inline-flex text-[#0077b6] [&_svg]:size-6">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-extrabold tracking-[-0.02em] text-[#03045e]">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Niveles */}
      <Section id="tiers" className="scroll-mt-20 border-t bg-muted/20">
        <Container>
          <SectionHeading
            eyebrow={t("partners.tiers.eyebrow")}
            title={t("partners.tiers.title")}
            desc={t("partners.tiers.desc")}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TIERS.map((tier, i) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-6 ${
                  i === 2 ? "border-primary bg-primary/5 shadow-[var(--shadow-glow)]" : "bg-card"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-[#03045e]">{tier.name}</h3>
                  <span className="size-8 rounded-full" style={{ backgroundColor: tier.color }} aria-hidden />
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-extrabold tracking-[-0.02em] text-[#03045e]">{tier.commission}</div>
                  <div className="text-xs text-muted-foreground">{t("partners.tiers.commission")}</div>
                </div>
                <div className="mb-6 text-xs text-muted-foreground">
                  {t("partners.tiers.fee")}: <strong>{tier.monthly_fee}</strong>
                  {t("pricing_page.per_month")}
                </div>
                <ul className="space-y-2">
                  {tier.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{t(p)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Formulario */}
      <Section id="apply" className="scroll-mt-20 border-t">
        <Container size="narrow">
          <SectionHeading
            eyebrow={t("partners.apply.eyebrow")}
            title={t("partners.apply.title")}
            desc={t("partners.apply.desc")}
          />
          <ApplicationForm />
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="border-t bg-muted/20">
        <Container size="narrow">
          <SectionHeading eyebrow="FAQ" title={t("partners.faq.title")} />
          <div className="mt-10 space-y-4">
            {(["q1", "q2", "q3", "q4", "q5"] as const).map((id) => (
              <FAQItem key={id} q={t(`partners.faq.${id}.q`)}>
                {t(`partners.faq.${id}.a`)}
              </FAQItem>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

function ApplicationForm() {
  const t = useT();
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
  const [error, setError] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch(`${API_BASE}/api/v1/public/reseller-applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const inputCls = "h-10 w-full rounded-md border bg-background px-3 text-sm";

  if (submitted) {
    return (
      <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-emerald-300 bg-emerald-50/50 p-8 text-center dark:border-emerald-500/30 dark:bg-emerald-500/10">
        <div className="mx-auto mb-4 inline-flex text-[#166534]">
          <Check className="size-6 text-emerald-700 dark:text-emerald-300" />
        </div>
        <h3 className="text-xl font-extrabold tracking-[-0.02em] text-[#03045e]">{t("partners.form.success.title")}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("partners.form.success.desc")}{" "}
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
          {t("partners.form.error")}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label={t("partners.form.company")}
          value={form.company_name}
          onChange={(v) => setForm({ ...form, company_name: v })}
          required
        />
        <Field
          label={t("partners.form.website")}
          type="url"
          value={form.website}
          onChange={(v) => setForm({ ...form, website: v })}
          placeholder="https://…"
        />
        <div>
          <label className="mb-1 block text-xs font-medium">{t("partners.form.country")}</label>
          <select
            required
            className={inputCls}
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
          >
            {COUNTRIES.map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
            <option value="OTHER">{t("partners.form.country.other")}</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium">{t("partners.form.team")}</label>
          <select
            required
            className={inputCls}
            value={form.team_size}
            onChange={(e) => setForm({ ...form, team_size: e.target.value })}
          >
            <option value="1-5">1 – 5</option>
            <option value="6-15">6 – 15</option>
            <option value="16-50">16 – 50</option>
            <option value="51-200">51 – 200</option>
            <option value="200+">{t("partners.form.team.more")}</option>
          </select>
        </div>
        <Field
          label={t("partners.form.name")}
          value={form.contact_name}
          onChange={(v) => setForm({ ...form, contact_name: v })}
          required
        />
        <Field
          label={t("partners.form.email")}
          type="email"
          value={form.contact_email}
          onChange={(v) => setForm({ ...form, contact_email: v })}
          required
        />
        <Field
          label={t("partners.form.phone")}
          value={form.contact_phone}
          onChange={(v) => setForm({ ...form, contact_phone: v })}
        />
        <div>
          <label className="mb-1 block text-xs font-medium">{t("partners.form.tier")}</label>
          <select
            className={inputCls}
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
        <label className="mb-1 block text-xs font-medium">{t("partners.form.customers")}</label>
        <input
          type="text"
          required
          className={inputCls}
          value={form.current_customers}
          onChange={(e) => setForm({ ...form, current_customers: e.target.value })}
          placeholder={t("partners.form.customers_ph")}
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium">{t("partners.form.why")}</label>
        <textarea
          required
          className="h-24 w-full rounded-md border bg-background p-3 text-sm"
          value={form.why_partner}
          onChange={(e) => setForm({ ...form, why_partner: e.target.value })}
          placeholder={t("partners.form.why_ph")}
          maxLength={2000}
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? t("partners.form.sending") : t("partners.form.submit")} <ArrowRight />
        </Button>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        {t("partners.form.privacy_pre")}{" "}
        <a href="/legal/privacy" className="underline">
          {t("partners.form.privacy_link")}
        </a>
        . {t("partners.form.privacy_post")}
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
