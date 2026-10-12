"use client";

import { Mail, MapPin, Building, ArrowRight } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import Link from "@/components/Link";
import { useT } from "@/lib/i18n/I18nProvider";

export default function ContactPage() {
  const t = useT();
  return (
    <>
      <Section compact>
        <Container size="narrow">
          <SectionHeading
            as="h1"
            eyebrow={t("contact.eyebrow")}
            title={
              <>
                {t("contact.title.pre")}{" "}
                <span className="text-brand-gradient">
                  {t("contact.title.hl")}
                </span>
              </>
            }
            desc={t("contact.subtitle")}
          />
        </Container>
      </Section>

      <Section compact>
        <Container size="narrow">
          <div className="grid gap-6 sm:grid-cols-2">
            <ContactCard
              icon={<Mail />}
              title={t("contact.card.sales")}
              value="cloud@mekovault.com"
              href="mailto:cloud@mekovault.com"
            />
            <ContactCard
              icon={<Building />}
              title={t("contact.card.support")}
              value="soporte@mekovault.com"
              href="mailto:soporte@mekovault.com"
            />
            <ContactCard
              icon={<MapPin />}
              title={t("contact.card.office")}
              value={t("contact.card.office_value")}
              subvalue={t("contact.card.office_sub")}
            />
            <ContactCard
              icon={<ArrowRight />}
              title={t("contact.card.trial")}
              value="app.mekovault.com/signup"
              href="https://app.mekovault.com/signup"
              external
            />
          </div>
        </Container>
      </Section>

      {/* Qué pasa después de escribir, horarios y preguntas (plan de marketing 2026-10-11) */}
      <Section compact className="border-t">
        <Container size="narrow">
          <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-[#03045e]">{t("contact.after.title")}</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-3">
            {(["s1", "s2", "s3"] as const).map((k, i) => (
              <li key={k} className="rounded-[12px] border border-[#dbeaf2] bg-white p-6">
                <p className="text-[13px] font-bold text-[#0077b6]">{i + 1}</p>
                <p className="mt-1 text-[17px] font-extrabold text-[#03045e]">{t(`contact.after.${k}.title`)}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-[#33507a]">{t(`contact.after.${k}.desc`)}</p>
              </li>
            ))}
          </ol>
          <h2 className="mt-14 text-3xl font-extrabold tracking-[-0.02em] text-[#03045e]">{t("contact.hours.title")}</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[#33507a]">{t("contact.hours.desc")}</p>
          <div className="mt-10 space-y-3">
            {(["1", "2", "3"] as const).map((n) => (
              <details key={n} className="group rounded-[10px] border border-[#dbeaf2] bg-white p-5 open:border-[#c9dde8]">
                <summary className="cursor-pointer list-none text-[16px] font-bold text-[#03045e]">{t(`contact.faq.q${n}`)}</summary>
                <p className="mt-3 text-[15px] leading-relaxed text-[#33507a]">
                  {t(`contact.faq.a${n}`)}
                  {n === "3" && (
                    <>
                      {" "}
                      <Link href="/partners" className="font-bold text-[#0077b6] hover:underline">
                        {t("contact.faq.link")}
                      </Link>
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t bg-muted/30">
        <Container size="narrow">
          <SectionHeading
            eyebrow={t("contact.form.eyebrow")}
            title={t("contact.form.title")}
            desc={t("contact.form.desc")}
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
                {t("contact.form.name")}
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
                {t("contact.form.email")}
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
                {t("contact.form.company")}
              </label>
              <input
                id="company"
                name="company"
                className="h-10 w-full rounded-lg border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                {t("contact.form.message")}
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
              {t("contact.form.send")}
            </LinkButton>
            <p className="text-center text-xs text-muted-foreground">
              {t("contact.form.also")}{" "}
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
      <div className="mb-3 inline-flex text-[#0077b6] [&_svg]:size-5">
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
