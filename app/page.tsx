"use client";

/**
 * Home · dirección A: "el panel es el sitio".
 *
 * Siete secciones, con ritmo:
 *   1. Hero: texto a la izquierda + Centro de solicitudes dibujado.
 *   2. Navy: detalle de una baja + "Personas pide. Y listo".
 *   3. Licencias: texto + pantalla de Licencias y la lista de plataformas.
 *   4. Cifras grandes + calculadora de fuga.
 *   5. Cómo funciona: el flujo de una solicitud (WorkflowDiagram).
 *   6. Preguntas.
 *   7. Llamado final (lo único centrado).
 */

import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/Container";
import { ArrowLink, LinkButton } from "@/components/Button";
import { EyebrowBadge, Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { LeakCalculator } from "@/components/LeakCalculator";
import { FAQ } from "@/components/FAQ";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { LogoMarquee } from "@/components/LogoMarquee";
import { RequestsCenterPanel } from "@/components/panels/RequestsCenterPanel";
import { TicketDetailPanel } from "@/components/panels/TicketDetailPanel";
import { LicensesPanel } from "@/components/panels/LicensesPanel";
import { StatusPill } from "@/components/panels/shared";
import { useT } from "@/lib/i18n/I18nProvider";
import { formatCLP, mainAppPrice } from "@/lib/catalog";

export default function Home() {
  const t = useT();
  return (
    <>
      {/* 1. Hero */}
      <section className="overflow-hidden border-b border-[#dbeaf2] bg-white">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-12 pt-14 sm:pt-20 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-14 lg:pt-24">
          <div className="flex flex-col gap-7 lg:pt-6 lg:pb-20">
            <h1 className="text-[38px] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#03045e] sm:text-[52px] lg:text-[60px]">
              {t("hero.title.line1")}
              <br />
              <span className="text-[#0077b6]">{t("hero.title.line2")}</span>
            </h1>
            <p className="max-w-[520px] text-pretty text-[17px] leading-[1.55] text-[#33507a] sm:text-[19px]">
              {t("hero.subtitle")}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-4">
              <LinkButton href="https://app.mekovault.com/signup" external size="lg">
                {t("hero.cta.signup")}
              </LinkButton>
              <ArrowLink href="#como-funciona" className="text-[17px]">
                {t("hero.cta.how")}
              </ArrowLink>
            </div>
            <div className="mt-3 flex flex-wrap gap-x-7 gap-y-2 text-sm font-semibold text-[#33507a]">
              <span>{t("hero.trust.1")}</span>
              <span>{t("hero.trust.2")}</span>
              <span>{t("hero.trust.3")}</span>
            </div>
          </div>

          <div className="min-w-0 self-end pb-8 lg:pb-0">
            <div className="lg:-mb-px lg:w-[880px] lg:max-w-none">
              <RequestsCenterPanel cut />
            </div>
          </div>
        </Container>
      </section>

      {/* Plataformas que se pagan por persona */}
      <LogoMarquee />

      {/* 1b. Gobernanza: todo nace en la nómina (Jorge, 2026-10-03) */}
      <Section id="gobernanza" tone="panel" className="scroll-mt-20 border-b border-[#dbeaf2]">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-7">
            <SectionHeading eyebrow={t("gov.home.eyebrow")} title={t("gov.home.title")} desc={t("gov.home.desc")} />
            <ul className="flex flex-col gap-4">
              <Bullet strong={t("gov.home.b1.strong")} rest={t("gov.home.b1.rest")} />
              <Bullet strong={t("gov.home.b2.strong")} rest={t("gov.home.b2.rest")} />
              <Bullet strong={t("gov.home.b3.strong")} rest={t("gov.home.b3.rest")} />
            </ul>
            <ArrowLink href="/account-governance" className="text-base">
              {t("gov.home.link")}
            </ArrowLink>
          </div>
          <Reveal>
            <GovernanceOriginCard />
          </Reveal>
        </Container>
      </Section>

      {/* 2. Cuando alguien entra o sale (navy) */}
      <Section tone="navy" id="salida">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:items-start lg:gap-16">
          <Reveal>
            <TicketDetailPanel />
          </Reveal>
          <div className="flex flex-col gap-7 lg:pt-2">
            <SectionHeading tone="dark" eyebrow={t("exit.eyebrow")} title={t("exit.title")} desc={t("exit.desc")} />
            <ul className="flex flex-col gap-4">
              <Bullet dark strong={t("exit.b1.strong")} rest={t("exit.b1.rest")} />
              <Bullet dark strong={t("exit.b2.strong")} rest={t("exit.b2.rest")} />
              <Bullet dark strong={t("exit.b3.strong")} rest={t("exit.b3.rest")} />
            </ul>
            <ArrowLink href="/products" tone="sky" className="text-base">
              {t("exit.link")}
            </ArrowLink>
          </div>
        </Container>
      </Section>

      {/* 3. Plataformas y licencias */}
      <Section id="licencias">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <div className="flex flex-col gap-6 lg:pt-2">
            <SectionHeading eyebrow={t("lic.eyebrow")} title={t("lic.title")} desc={t("lic.desc")} />
            <div className="flex flex-col gap-3">
              <PlatformRow name={t("lic.p1.name")} desc={t("lic.p1.desc")} connected />
              <PlatformRow name={t("lic.p2.name")} desc={t("lic.p2.desc")} />
              <PlatformRow name={t("lic.p3.name")} desc={t("lic.p3.desc")} />
            </div>
            <ArrowLink href="/license-control" tone="blue" className="text-base">
              {t("lic.link")}
            </ArrowLink>
          </div>
          <Reveal>
            <LicensesPanel />
          </Reveal>
        </Container>
      </Section>

      {/* 4. Cifras grandes + calculadora */}
      <Section id="calculadora" tone="panel" className="scroll-mt-20 border-y border-[#dbeaf2]">
        <Container>
          <SectionHeading eyebrow={t("calc.eyebrow")} title={t("calc.title")} desc={t("calc.subtitle")} />
          <div className="mt-12 grid gap-8 border-y border-[#dbeaf2] py-8 sm:grid-cols-3 sm:gap-10">
            <Figure value={t("calc.fig1.value")} label={t("calc.fig1.label")} />
            <Figure value={t("calc.fig2.value")} label={t("calc.fig2.label")} />
            <Figure value={t("calc.fig3.value")} label={t("calc.fig3.label")} />
          </div>
          <Reveal>
            <div className="mt-10">
              <LeakCalculator />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 5. Cómo funciona */}
      <Section id="como-funciona" className="scroll-mt-20">
        <Container>
          <SectionHeading eyebrow={t("how.eyebrow")} title={t("how.title")} desc={t("workflow.subtitle")} />
          <Reveal>
            <div className="mt-12">
              <WorkflowDiagram />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 6. Preguntas */}
      <Section id="faq" tone="panel" className="border-y border-[#dbeaf2]">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-16">
          <SectionHeading eyebrow={t("faq.eyebrow")} title={t("faq.title")} desc={t("faq.subtitle")} />
          <FAQ
            items={[
              { q: t("faq.it.q"), a: t("faq.it.a") },
              { q: t("faq.security.q"), a: t("faq.security.a") },
              { q: t("faq.leave.q"), a: t("faq.leave.a") },
              { q: t("faq.platforms.q"), a: t("faq.platforms.a") },
              { q: t("faq.licenses.q"), a: t("faq.licenses.a") },
              { q: t("faq.other.q"), a: t("faq.other.a") },
              { q: t("faq.setup.q"), a: t("faq.setup.a") },
              { q: t("faq.support.q"), a: t("faq.support.a") },
            ]}
          />
        </Container>
      </Section>

      {/* 7. Llamado final */}
      <Section>
        <Container size="narrow">
          <div className="rounded-[12px] bg-[#03045e] px-6 py-12 text-center text-white sm:px-14 sm:py-16">
            <EyebrowBadge tone="cyan" className="mx-auto">
              {t("cta.pricing_line", { price: `${formatCLP(mainAppPrice())} CLP` })}
            </EyebrowBadge>
            <h2 className="mt-4 text-balance text-[30px] font-extrabold leading-[1.1] tracking-[-0.025em] text-white sm:text-[40px]">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-[17px] leading-relaxed text-[#b9d7e6]">{t("cta.subtitle")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LinkButton href="https://app.mekovault.com/signup" external size="lg" variant="secondary">
                {t("cta.signup")} <ArrowRight />
              </LinkButton>
              <LinkButton href="/pricing" size="lg" variant="white">
                {t("cta.pricing")}
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

/* ------------------------------------------------------------ */

function Bullet({ strong, rest, dark = false }: { strong: string; rest: string; dark?: boolean }) {
  return (
    <li className="flex items-start gap-3.5">
      <Check className="mt-0.5 size-[22px] shrink-0 text-[#00b4d8]" strokeWidth={2.4} aria-hidden />
      <span className={"text-base leading-[1.5] " + (dark ? "text-white" : "text-[#03045e]")}>
        <strong className="font-bold">{strong}</strong> {rest}
      </span>
    </li>
  );
}

function PlatformRow({ name, desc, connected = false }: { name: string; desc: string; connected?: boolean }) {
  const t = useT();
  return (
    <div
      className={
        "flex items-center gap-3 rounded-[10px] border px-4 py-3.5 " +
        (connected ? "border-[#c9dde8] bg-white" : "border-dashed border-[#c9dde8] bg-white")
      }
    >
      {connected ? (
        <svg viewBox="0 0 24 24" className="size-[26px] shrink-0 text-[#0077b6]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 10h18" />
          <path d="M8 15h4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-[26px] shrink-0 text-[#5b7390]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 2" />
        </svg>
      )}
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className={"text-base font-extrabold " + (connected ? "text-[#03045e]" : "text-[#33507a]")}>{name}</span>
        <span className="text-[13px] text-[#33507a]">{desc}</span>
      </div>
      <StatusPill tone={connected ? "green" : "gray"} className="ml-auto">
        {connected ? t("lic.status.connected") : t("status.soon")}
      </StatusPill>
    </div>
  );
}

function Figure({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[34px] font-extrabold leading-none tracking-[-0.03em] text-[#03045e] sm:text-[40px]">{value}</div>
      <p className="max-w-[300px] text-[15px] leading-relaxed text-[#33507a]">{label}</p>
    </div>
  );
}

/** Tarjeta del inicio: una persona que deja la organización y lo que sigue cobrando. Datos de ejemplo. */
function GovernanceOriginCard() {
  const t = useT();
  const rows: Array<{ name: string; ok: boolean }> = [
    { name: "Google Workspace", ok: true },
    { name: "Slack", ok: true },
    { name: "Figma", ok: false },
    { name: "Adobe Creative Cloud", ok: false },
    { name: "Canva", ok: true },
  ];
  return (
    <div className="rounded-2xl border border-[#dbeaf2] bg-white p-5 shadow-[0_18px_50px_-30px_rgba(3,4,94,0.35)]">
      <div className="flex items-start justify-between gap-4 border-b border-[#e8f1f6] pb-4">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0077b6]">{t("agov.panel.origin")}</p>
          <p className="mt-1 text-[16px] font-extrabold text-[#03045e]">{t("agov.panel.person")}</p>
          <p className="text-[13px] text-[#33507a]">{t("agov.panel.person_meta")}</p>
        </div>
        <span className="shrink-0 rounded-full bg-[#fde8e6] px-3 py-1 text-[12px] font-bold text-[#c0392b]">{t("agov.panel.badge")}</span>
      </div>
      <ul className="divide-y divide-[#e8f1f6]">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center justify-between py-3">
            <span className="text-[14.5px] font-semibold text-[#03045e]">{r.name}</span>
            <span className={r.ok ? "text-[13px] font-semibold text-[#1f7f4f]" : "text-[13px] font-semibold text-[#c0392b]"}>
              {r.ok ? t("agov.panel.closed") : t("agov.panel.still_paying")}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-xl bg-[#f7fbfd] p-3 text-[13px] leading-relaxed text-[#0a4a73]">{t("agov.panel.note")}</p>
    </div>
  );
}
