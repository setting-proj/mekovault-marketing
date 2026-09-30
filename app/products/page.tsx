"use client";

import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { EyebrowBadge, Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { HrTriggersSection, PlatformsSection, TwoServicesSection } from "@/components/ServiceModel";
import { RequestsCenterPanel } from "@/components/panels/RequestsCenterPanel";
import { useT } from "@/lib/i18n/I18nProvider";

export default function ProductsPage() {
  const t = useT();

  const CAPABILITIES = [
    { title: t("products.cap.1.title"), desc: t("products.cap.1.desc") },
    { title: t("products.cap.2.title"), desc: t("products.cap.2.desc") },
    { title: t("products.cap.3.title"), desc: t("products.cap.3.desc") },
    { title: t("products.cap.4.title"), desc: t("products.cap.4.desc") },
    { title: t("products.cap.5.title"), desc: t("products.cap.5.desc") },
  ];

  const ADDONS = [
    {
      title: t("svc.workspace.title"),
      official: t("svc.workspace.official"),
      desc: t("svc.workspace.desc"),
      bullets: [t("svc.workspace.b1"), t("svc.workspace.b2"), t("svc.workspace.b3")],
      featured: true,
    },
    {
      title: t("svc.tickets.title"),
      official: t("svc.tickets.official"),
      desc: t("svc.tickets.desc"),
      bullets: [t("svc.tickets.b1"), t("svc.tickets.b2"), t("svc.tickets.b3")],
      featured: false,
    },
    {
      title: t("svc.audit.title"),
      official: t("svc.audit.official"),
      desc: t("svc.audit.desc"),
      bullets: [t("svc.audit.b1"), t("svc.audit.b2"), t("svc.audit.b3")],
      featured: false,
    },
  ];

  return (
    <>
      {/* Hero: texto + Centro de solicitudes */}
      <section className="overflow-hidden border-b border-[#dbeaf2] bg-white">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-12 pt-14 sm:pt-20 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-6 lg:pb-20">
            <EyebrowBadge>{t("products.eyebrow")}</EyebrowBadge>
            <h1 className="text-balance text-[36px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#03045e] sm:text-[48px]">
              {t("products.title.pre")} <span className="text-[#0077b6]">{t("products.title.hl")}</span>
            </h1>
            <p className="text-pretty text-[17px] leading-[1.6] text-[#33507a] sm:text-[19px]">{t("products.subtitle")}</p>
          </div>
          <div className="min-w-0 self-end pb-8 lg:pb-0">
            <div className="lg:-mb-px lg:w-[880px] lg:max-w-none">
              <RequestsCenterPanel cut />
            </div>
          </div>
        </Container>
      </section>

      {/* Dos servicios */}
      <TwoServicesSection className="border-b border-[#dbeaf2]" />

      {/* Qué hace por tu empresa */}
      <Section tone="panel" className="border-b border-[#dbeaf2]">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-16">
          <SectionHeading eyebrow={t("products.cap.eyebrow")} title={t("products.cap.title")} />
          <div className="divide-y divide-[#dbeaf2] rounded-[12px] border border-[#c9dde8] bg-white">
            {CAPABILITIES.map((c, i) => (
              <div key={c.title} className="grid gap-2 p-5 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6 sm:p-6">
                <h3 className="flex items-baseline gap-3 text-[18px] font-extrabold tracking-[-0.01em] text-[#03045e]">
                  <span className="text-xs font-bold text-[#0077b6]">0{i + 1}</span>
                  {c.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#33507a]">{c.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Una solicitud de principio a fin */}
      <Section className="border-b border-[#dbeaf2]">
        <Container>
          <SectionHeading eyebrow={t("workflow.eyebrow")} title={t("workflow.title")} desc={t("workflow.subtitle")} />
          <Reveal>
            <div className="mt-12">
              <WorkflowDiagram />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Plataformas y sistemas de personas */}
      <PlatformsSection className="border-b border-[#dbeaf2]" />
      <HrTriggersSection className="border-b border-[#dbeaf2] bg-[#f7fbfd]" />

      {/* Módulos */}
      <Section className="border-b border-[#dbeaf2]">
        <Container>
          <SectionHeading eyebrow={t("products.addons.eyebrow")} title={t("products.addons.title")} desc={t("products.addons.subtitle")} />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {ADDONS.map((s) => (
              <AddonCard key={s.title} {...s} status={t("svc.status.available")} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Llamado final */}
      <Section tone="panel">
        <Container size="narrow" className="text-center">
          <h2 className="text-balance text-[30px] font-extrabold tracking-[-0.025em] text-[#03045e] sm:text-[36px]">{t("products.cta.title")}</h2>
          <p className="mt-3 text-[17px] text-[#33507a]">{t("products.cta.subtitle")}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <LinkButton href="https://app.mekovault.com/signup" external size="lg">
              {t("products.cta.signup")} <ArrowRight />
            </LinkButton>
            <LinkButton href="/contact" size="lg" variant="outline">
              {t("products.cta.sales")}
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

function AddonCard({
  status,
  title,
  official,
  desc,
  bullets,
  featured,
}: {
  status: string;
  title: string;
  official: string;
  desc: string;
  bullets: string[];
  featured: boolean;
}) {
  return (
    <div className={"flex flex-col rounded-[12px] border bg-white p-6 " + (featured ? "border-[#0077b6]" : "border-[#c9dde8]")}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[20px] font-extrabold tracking-[-0.02em] text-[#03045e]">{title}</h3>
          <p className="mt-0.5 text-xs font-bold text-[#5b7390]">{official}</p>
        </div>
        <span className="rounded-full bg-[#dcfce7] px-2.5 py-1 text-xs font-bold text-[#166534]">{status}</span>
      </div>
      <p className="mt-3 text-[15px] leading-relaxed text-[#33507a]">{desc}</p>
      <ul className="mt-4 space-y-2 text-[15px] text-[#03045e]">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <Check className="mt-0.5 size-[18px] shrink-0 text-[#00b4d8]" strokeWidth={2.4} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
