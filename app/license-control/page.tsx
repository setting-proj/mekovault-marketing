"use client";

/**
 * /license-control: por qué bloquear una cuenta no siempre deja de cobrarla, y qué hace
 * Control de licencias. El servicio está "próximamente": la página lo dice en el encabezado
 * y en el llamado final, y NO promete que Mekovault reduce lo contratado (ninguna plataforma
 * lo permite a un tercero). Los datos de la tabla viven en `lib/billing-facts.ts`, con su fuente.
 */

import { ArrowRight, Check, X } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { EyebrowBadge, Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { LicensesPanel } from "@/components/panels/LicensesPanel";
import { BILLING_FACTS, type BillingEffect } from "@/lib/billing-facts";
import { useT } from "@/lib/i18n/I18nProvider";

const EFFECT_KEY = {
  auto: "lc.effect.auto",
  next_cycle: "lc.effect.next_cycle",
  renewal: "lc.effect.renewal",
  google: "lc.effect.google",
} as const satisfies Record<BillingEffect, string>;

export default function LicenseControlPage() {
  const t = useT();
  const STEPS = [
    { n: 1, title: t("lc.s1.title"), desc: t("lc.s1.desc") },
    { n: 2, title: t("lc.s2.title"), desc: t("lc.s2.desc") },
    { n: 3, title: t("lc.s3.title"), desc: t("lc.s3.desc") },
  ];

  return (
    <>
      {/* Hero: texto + pantalla de Licencias */}
      <section className="border-b border-[#dbeaf2] bg-white">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <EyebrowBadge>{t("lc.eyebrow")}</EyebrowBadge>
            <h1 className="text-balance text-[36px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#03045e] sm:text-[48px]">
              {t("lc.title.pre")} <span className="text-[#0077b6]">{t("lc.title.hl")}</span>
            </h1>
            <p className="text-pretty text-[17px] leading-[1.6] text-[#33507a] sm:text-[19px]">{t("lc.subtitle")}</p>
          </div>
          <Reveal>
            <LicensesPanel />
          </Reveal>
        </Container>
      </section>

      {/* Plataforma por plataforma */}
      <Section tone="panel" className="border-b border-[#dbeaf2]">
        <Container>
          <SectionHeading eyebrow={t("lc.table.eyebrow")} title={t("lc.table.title")} desc={t("lc.table.subtitle")} />
          <div className="mt-10 overflow-x-auto rounded-[12px] border border-[#c9dde8] bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#dbeaf2] bg-[#f2f8fb] text-[11px] font-bold uppercase tracking-[0.06em] text-[#5b7390]">
                  <th scope="col" className="px-5 py-3">{t("lc.table.col.platform")}</th>
                  <th scope="col" className="px-5 py-3">{t("lc.table.col.block")}</th>
                  <th scope="col" className="px-5 py-3">{t("lc.table.col.todo")}</th>
                </tr>
              </thead>
              <tbody>
                {BILLING_FACTS.map((f) => (
                  <tr key={f.platform} className="border-b border-[#eaf3f8] align-top last:border-0">
                    <th scope="row" className="whitespace-nowrap px-5 py-3.5 font-bold text-[#03045e]">
                      {f.platform}
                      {f.qualifier === "monthly" && (
                        <span className="ml-1.5 text-xs font-medium text-[#5b7390]">({t("lc.q.monthly")})</span>
                      )}
                    </th>
                    <td className="px-5 py-3.5">
                      {f.blockStopsBilling ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dcfce7] px-2.5 py-1 text-xs font-bold text-[#166534]">
                          <Check className="size-3.5" /> {t("lc.yes")}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ffedd5] px-2.5 py-1 text-xs font-bold text-[#9a3412]">
                          <X className="size-3.5" /> {t("lc.no")}
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 leading-relaxed text-[#33507a]">
                      {t(EFFECT_KEY[f.effect])}{" "}
                      <a
                        href={f.source}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="whitespace-nowrap text-xs font-semibold text-[#0077b6] underline underline-offset-2 hover:text-[#03045e]"
                      >
                        ({t("lc.source")})
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-[#5b7390]">
            {t("lc.table.note")} {t("platforms.note")}
          </p>
        </Container>
      </Section>

      {/* Qué hace */}
      <Section className="border-b border-[#dbeaf2]">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-16">
          <SectionHeading eyebrow={t("lc.steps.eyebrow")} title={t("lc.steps.title")} />
          <div className="flex flex-col gap-3">
            {STEPS.map((s) => (
              <div key={s.title} className="flex gap-4 rounded-[12px] border border-[#c9dde8] bg-white p-5 sm:p-6">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#03045e] text-xs font-extrabold text-white">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-[18px] font-extrabold tracking-[-0.01em] text-[#03045e]">{s.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[#33507a]">{s.desc}</p>
                </div>
              </div>
            ))}
            <div className="rounded-[12px] border border-dashed border-[#c9dde8] p-5 sm:p-6">
              <h3 className="text-[16px] font-extrabold text-[#03045e]">{t("lc.honest.title")}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[#33507a]">{t("lc.honest.desc")}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Llamado final */}
      <Section tone="panel">
        <Container size="narrow" className="text-center">
          <h2 className="text-balance text-[30px] font-extrabold tracking-[-0.025em] text-[#03045e] sm:text-[36px]">{t("lc.cta.title")}</h2>
          <p className="mt-3 text-[17px] text-[#33507a]">{t("lc.cta.subtitle")}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <LinkButton href="/contact" size="lg">
              {t("lc.cta.contact")} <ArrowRight />
            </LinkButton>
            <LinkButton href="/platforms" size="lg" variant="outline">
              {t("lc.cta.platforms")}
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
