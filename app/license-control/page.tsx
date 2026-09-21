"use client";

/**
 * /license-control — por qué bloquear una cuenta no siempre deja de cobrarla, y qué hace
 * Control de licencias. El servicio está "próximamente": la página lo dice en el encabezado
 * y en el llamado final, y NO promete que Mekovault reduce lo contratado (ninguna plataforma
 * lo permite a un tercero). Los datos de la tabla viven en `lib/billing-facts.ts`, con su fuente.
 */

import { ArrowRight, BellRing, Check, LineChart, Unlock, X } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
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
    { icon: <Unlock />, title: t("lc.s1.title"), desc: t("lc.s1.desc") },
    { icon: <BellRing />, title: t("lc.s2.title"), desc: t("lc.s2.desc") },
    { icon: <LineChart />, title: t("lc.s3.title"), desc: t("lc.s3.desc") },
  ];

  return (
    <>
      <Section compact>
        <Container>
          <SectionHeading
            eyebrow={t("lc.eyebrow")}
            title={
              <>
                {t("lc.title.pre")} <span className="text-brand-gradient">{t("lc.title.hl")}</span>
              </>
            }
            desc={t("lc.subtitle")}
          />
        </Container>
      </Section>

      <Section className="border-t bg-muted/30">
        <Container>
          <SectionHeading
            eyebrow={t("lc.table.eyebrow")}
            title={t("lc.table.title")}
            desc={t("lc.table.subtitle")}
          />
          <div className="mx-auto mt-12 max-w-5xl overflow-x-auto rounded-2xl border bg-card">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase tracking-wider text-muted-foreground">
                  <th scope="col" className="px-5 py-3 font-medium">
                    {t("lc.table.col.platform")}
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    {t("lc.table.col.block")}
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    {t("lc.table.col.todo")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {BILLING_FACTS.map((f) => (
                  <tr key={f.platform} className="border-b last:border-0 align-top">
                    <th scope="row" className="whitespace-nowrap px-5 py-3.5 font-medium">
                      {f.platform}
                      {f.qualifier === "monthly" && (
                        <span className="ml-1.5 text-xs font-normal text-muted-foreground">({t("lc.q.monthly")})</span>
                      )}
                    </th>
                    <td className="px-5 py-3.5">
                      {f.blockStopsBilling ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300">
                          <Check className="size-3.5" /> {t("lc.yes")}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-500/15 dark:text-red-300">
                          <X className="size-3.5" /> {t("lc.no")}
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-muted-foreground">
                      {t(EFFECT_KEY[f.effect])}{" "}
                      <a
                        href={f.source}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="whitespace-nowrap text-xs underline decoration-primary/40 underline-offset-2 hover:text-foreground"
                      >
                        ({t("lc.source")})
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-4 max-w-5xl text-xs text-muted-foreground">
            {t("lc.table.note")} {t("platforms.note")}
          </p>
        </Container>
      </Section>

      <Section className="border-t">
        <Container>
          <SectionHeading eyebrow={t("lc.steps.eyebrow")} title={t("lc.steps.title")} />
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.title} className="rounded-2xl border bg-card p-6">
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:size-5">
                  {s.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-5xl rounded-2xl border border-dashed p-6">
            <h3 className="font-heading text-base font-semibold tracking-tight">{t("lc.honest.title")}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{t("lc.honest.desc")}</p>
          </div>
        </Container>
      </Section>

      <Section className="border-t bg-muted/30">
        <Container size="narrow" className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">{t("lc.cta.title")}</h2>
          <p className="mt-3 text-muted-foreground">{t("lc.cta.subtitle")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
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
