"use client";

/**
 * /account-governance: Gobierno de cuentas y credenciales de servicios.
 *
 * Mensaje (Jorge, 2026-10-03): todo nace en la nómina o en el ingreso de una persona, y desde ahí
 * se gobierna lo que esa persona tiene en cada plataforma. La palabra clave es "gobernanza". La
 * fuga: cuando alguien deja la organización o cambia de rol, nadie garantiza que las demás cuentas
 * dejen de cobrarse. Sin decir "despido" ni "desvinculación": "deja la organización".
 *
 * La copy vive en los diccionarios (`agov.*`); los nombres de personas y plataformas son de ejemplo.
 */

import { ArrowRight, Check, X } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { EyebrowBadge, Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n/I18nProvider";

export function AccountGovernanceView() {
  const t = useT();
  const leaks = [1, 2, 3, 4] as const;
  const pillars = [1, 2, 3] as const;
  const stages = [1, 2, 3, 4] as const;
  const roles = [1, 2, 3, 4] as const;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-[#dbeaf2] bg-white">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <EyebrowBadge>{t("agov.eyebrow")}</EyebrowBadge>
            <h1 className="text-balance text-[36px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#03045e] sm:text-[48px]">
              {t("agov.title.pre")} <span className="text-[#0077b6]">{t("agov.title.hl")}</span>
            </h1>
            <p className="text-pretty text-[17px] leading-[1.6] text-[#33507a] sm:text-[19px]">{t("agov.subtitle")}</p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href="https://app.mekovault.com/signup" external variant="navy" size="lg">
                {t("agov.cta.signup")} <ArrowRight />
              </LinkButton>
              <LinkButton href="#ciclo" variant="outline" size="lg">
                {t("agov.cta.cycle")}
              </LinkButton>
            </div>
          </div>
          <Reveal>
            <OriginPanel />
          </Reveal>
        </Container>
      </section>

      {/* Las fugas que nadie ve */}
      <Section tone="panel" className="border-b border-[#dbeaf2]">
        <Container>
          <SectionHeading eyebrow={t("agov.leaks.eyebrow")} title={t("agov.leaks.title")} desc={t("agov.leaks.desc")} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {leaks.map((n) => (
              <Reveal key={n}>
                <article className="flex h-full flex-col gap-3 rounded-2xl border border-[#dbeaf2] bg-white p-6">
                  <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.08em] text-[#c0392b]">
                    <X className="size-4" /> {t(`agov.leaks.${n}.tag`)}
                  </div>
                  <h3 className="text-[19px] font-extrabold leading-snug text-[#03045e]">{t(`agov.leaks.${n}.title`)}</h3>
                  <p className="text-[15px] leading-relaxed text-[#33507a]">{t(`agov.leaks.${n}.desc`)}</p>
                  <p className="mt-auto flex items-start gap-2 rounded-xl bg-[#f7fbfd] p-3 text-[14px] leading-relaxed text-[#0a4a73]">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#0077b6]" />
                    <span>
                      <strong>{t("agov.leaks.with")}</strong> {t(`agov.leaks.${n}.fix`)}
                    </span>
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Qué es gobernar: origen, regla, evidencia */}
      <Section tone="navy">
        <Container>
          <SectionHeading tone="dark" eyebrow={t("agov.pillars.eyebrow")} title={t("agov.pillars.title")} desc={t("agov.pillars.desc")} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((n) => (
              <Reveal key={n}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-6">
                  <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#00b4d8]">{t(`agov.pillars.${n}.tag`)}</span>
                  <h3 className="text-[22px] font-extrabold leading-snug text-white">{t(`agov.pillars.${n}.title`)}</h3>
                  <p className="text-[15px] leading-relaxed text-[#b9d7e6]">{t(`agov.pillars.${n}.desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* El ciclo completo */}
      <Section id="ciclo" className="scroll-mt-20">
        <Container>
          <SectionHeading eyebrow={t("agov.cycle.eyebrow")} title={t("agov.cycle.title")} desc={t("agov.cycle.desc")} />
          <ol className="mt-10 grid gap-5 lg:grid-cols-4">
            {stages.map((n) => (
              <Reveal key={n}>
                <li className="relative flex h-full flex-col gap-3 rounded-2xl border border-[#dbeaf2] bg-white p-6">
                  <span className="flex size-9 items-center justify-center rounded-full bg-[#03045e] text-[15px] font-extrabold text-white">{n}</span>
                  <h3 className="text-[19px] font-extrabold leading-snug text-[#03045e]">{t(`agov.cycle.${n}.title`)}</h3>
                  <p className="text-[15px] leading-relaxed text-[#33507a]">{t(`agov.cycle.${n}.desc`)}</p>
                  <p className="mt-auto text-[13.5px] font-semibold text-[#0077b6]">{t(`agov.cycle.${n}.who`)}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Cuentas y credenciales de servicio */}
      <Section tone="panel" className="border-y border-[#dbeaf2]">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-center">
          <div>
            <SectionHeading eyebrow={t("agov.svc.eyebrow")} title={t("agov.svc.title")} desc={t("agov.svc.desc")} />
            <ul className="mt-6 flex flex-col gap-4">
              {([1, 2, 3] as const).map((n) => (
                <li key={n} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-[#33507a]">
                  <Check className="mt-1 size-5 shrink-0 text-[#0077b6]" />
                  <span>
                    <strong className="text-[#03045e]">{t(`agov.svc.${n}.strong`)}</strong> {t(`agov.svc.${n}.rest`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <ServiceAccountsPanel />
          </Reveal>
        </Container>
      </Section>

      {/* Qué obtiene cada rol */}
      <Section>
        <Container>
          <SectionHeading eyebrow={t("agov.roles.eyebrow")} title={t("agov.roles.title")} desc={t("agov.roles.desc")} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((n) => (
              <Reveal key={n}>
                <div className="flex h-full flex-col gap-2 rounded-2xl border border-[#dbeaf2] bg-white p-6">
                  <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#0077b6]">{t(`agov.roles.${n}.who`)}</span>
                  <h3 className="text-[18px] font-extrabold leading-snug text-[#03045e]">{t(`agov.roles.${n}.title`)}</h3>
                  <p className="text-[14.5px] leading-relaxed text-[#33507a]">{t(`agov.roles.${n}.desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Cierre */}
      <Section tone="navy">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl text-balance text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-[38px]">{t("agov.end.title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-[17px] leading-relaxed text-[#b9d7e6]">{t("agov.end.desc")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <LinkButton href="https://app.mekovault.com/signup" external variant="secondary" size="lg">
              {t("agov.cta.signup")} <ArrowRight />
            </LinkButton>
            <LinkButton href="/governance" variant="white" size="lg">
              {t("agov.end.security")}
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

/** Panel ilustrativo: una persona en la nómina y lo que tiene en cada plataforma. */
function OriginPanel() {
  const t = useT();
  const rows = [
    { name: "Google Workspace", state: "ok" as const },
    { name: "Slack", state: "ok" as const },
    { name: "Figma", state: "leak" as const },
    { name: "Adobe Creative Cloud", state: "leak" as const },
    { name: "Canva", state: "ok" as const },
  ];
  return (
    <div className="rounded-2xl border border-[#dbeaf2] bg-white p-5 shadow-[0_18px_50px_-30px_rgba(3,4,94,0.35)]">
      <div className="flex items-center justify-between border-b border-[#e8f1f6] pb-4">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0077b6]">{t("agov.panel.origin")}</p>
          <p className="mt-1 text-[16px] font-extrabold text-[#03045e]">{t("agov.panel.person")}</p>
          <p className="text-[13px] text-[#33507a]">{t("agov.panel.person_meta")}</p>
        </div>
        <span className="rounded-full bg-[#fde8e6] px-3 py-1 text-[12px] font-bold text-[#c0392b]">{t("agov.panel.badge")}</span>
      </div>
      <ul className="divide-y divide-[#e8f1f6]">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center justify-between py-3">
            <span className="text-[14.5px] font-semibold text-[#03045e]">{r.name}</span>
            {r.state === "ok" ? (
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1f7f4f]">
                <Check className="size-4" /> {t("agov.panel.closed")}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#c0392b]">
                <X className="size-4" /> {t("agov.panel.still_paying")}
              </span>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-xl bg-[#f7fbfd] p-3 text-[13px] leading-relaxed text-[#0a4a73]">{t("agov.panel.note")}</p>
    </div>
  );
}

/** Panel ilustrativo: cuentas genéricas y credenciales de servicio con responsable. */
function ServiceAccountsPanel() {
  const t = useT();
  const rows = [
    { name: "soporte@tu-empresa.cl", kind: t("agov.svcpanel.generic"), owner: "c.mena" },
    { name: "ventas@tu-empresa.cl", kind: t("agov.svcpanel.generic"), owner: "a.rojas" },
    { name: "API · facturación", kind: t("agov.svcpanel.credential"), owner: "Finanzas" },
    { name: "Integración · BUK", kind: t("agov.svcpanel.credential"), owner: "Personas" },
  ];
  return (
    <div className="rounded-2xl border border-[#dbeaf2] bg-white p-5 shadow-[0_18px_50px_-30px_rgba(3,4,94,0.35)]">
      <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0077b6]">{t("agov.svcpanel.title")}</p>
      <table className="mt-3 w-full text-left text-[14px]">
        <thead>
          <tr className="text-[12px] uppercase tracking-[0.06em] text-[#33507a]">
            <th className="py-2 font-semibold">{t("agov.svcpanel.col1")}</th>
            <th className="py-2 font-semibold">{t("agov.svcpanel.col2")}</th>
            <th className="py-2 font-semibold">{t("agov.svcpanel.col3")}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#e8f1f6]">
          {rows.map((r) => (
            <tr key={r.name}>
              <td className="py-2.5 font-semibold text-[#03045e]">{r.name}</td>
              <td className="py-2.5 text-[#33507a]">{r.kind}</td>
              <td className="py-2.5 text-[#33507a]">{r.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 rounded-xl bg-[#f7fbfd] p-3 text-[13px] leading-relaxed text-[#0a4a73]">{t("agov.svcpanel.note")}</p>
    </div>
  );
}
