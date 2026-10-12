import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/Container";
import Link from "@/components/Link";
import { EyebrowBadge } from "@/components/Section";
import { CONTENT_BY_LOCALE } from "@/lib/content/recursos/index.generated";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/routing";
import { CONNECTORS, RESOURCES, UPCOMING_PLATFORMS, type ResourceKind } from "@/lib/resources";
import { pageMetadata } from "@/lib/seo";
import { localeFromParams, type LocaleParams } from "@/lib/i18n/params";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await localeFromParams(params);
  const dict = dictionaries[locale];
  return pageMetadata({
    locale,
    path: "/recursos",
    title: dict["seo.resources.title"],
    description: dict["seo.resources.description"],
  });
}

type Copy = {
  eyebrow: string;
  title: string;
  desc: string;
  kinds: Record<ResourceKind, [string, string]>;
  read: string;
  inSpanish: string;
  connectors: [string, string];
  upcoming: [string, string];
  help: [string, string];
  calc: [string, string];
};

const COPY: Record<Locale, Copy> = {
  "es-CL": {
    eyebrow: "Guías y recursos",
    title: "Las preguntas que los dueños y gerentes se hacen cuando alguien entra o sale de la empresa",
    desc: "Respondidas completas, en español, con los pasos en Google Workspace, lo que dice la ley y lo que Mekovault hace solo. Sin jerga: están escritas para quien dirige la empresa, no para IT.",
    kinds: {
      pilar: ["Las guías largas", "Un problema completo, de principio a fin, con lo que hace Mekovault en cada paso."],
      guia: ["Guías por caso", "Una situación concreta, resuelta."],
      comparativa: ["Comparativas", "Qué cambia con Mekovault frente a lo que ya tienes o a lo que te recomiendan."],
      checklist: ["Listas de comprobación", "Para imprimir, repartir o llevar a una reunión."],
      definicion: ["Conceptos", "Cómo se llama esto y qué incluye."],
    },
    read: "Leer",
    inSpanish: "En español",
    connectors: ["Conectores de nómina", "Que las altas y bajas nazcan donde ya nacen."],
    upcoming: ["Plataformas en preparación", "Qué va a hacer cada conector y cómo se maneja mientras no está."],
    help: ["Centro de ayuda", "Alias, cuentas genéricas, reactivar un usuario, cambiar de dominio, delegar un buzón, licencias de Zoom y Slack."],
    calc: ["Calculadora de licencias", "Cuánto se te fuga al año en licencias de gente que ya no está. Tres datos y una estimación honesta."],
  },
  "es-AR": {
    eyebrow: "Guías y recursos",
    title: "Las preguntas que los dueños y gerentes se hacen cuando alguien entra o se va de la empresa",
    desc: "Respondidas completas, en español, con los pasos en Google Workspace, lo que dice la ley y lo que Mekovault hace solo. Sin jerga: están escritas para quien dirige la empresa, no para IT.",
    kinds: {
      pilar: ["Las guías largas", "Un problema completo, de principio a fin, con lo que hace Mekovault en cada paso."],
      guia: ["Guías por caso", "Una situación concreta, resuelta."],
      comparativa: ["Comparativas", "Qué cambia con Mekovault frente a lo que ya tenés o a lo que te recomiendan."],
      checklist: ["Listas de comprobación", "Para imprimir, repartir o llevar a una reunión."],
      definicion: ["Conceptos", "Cómo se llama esto y qué incluye."],
    },
    read: "Leer",
    inSpanish: "Versión de Chile",
    connectors: ["Conectores de sueldos", "Que las altas y bajas nazcan donde ya nacen."],
    upcoming: ["Plataformas en preparación", "Qué va a hacer cada conector y cómo se maneja mientras no está."],
    help: ["Centro de ayuda", "Alias, cuentas genéricas, reactivar un usuario, cambiar de dominio, delegar una casilla, licencias de Zoom y Slack."],
    calc: ["Calculadora de licencias", "Cuánto se te va por año en licencias de gente que ya no está. Tres datos y una estimación honesta."],
  },
  "es-MX": {
    eyebrow: "Guías y recursos",
    title: "Las preguntas que los dueños y directores se hacen cuando alguien entra o sale de la empresa",
    desc: "Respondidas completas, en español, con los pasos en Google Workspace, lo que dice la ley y lo que Mekovault hace solo. Sin jerga: están escritas para quien dirige la empresa, no para IT.",
    kinds: {
      pilar: ["Las guías largas", "Un problema completo, de principio a fin, con lo que hace Mekovault en cada paso."],
      guia: ["Guías por caso", "Una situación concreta, resuelta."],
      comparativa: ["Comparativas", "Qué cambia con Mekovault frente a lo que ya tienes o a lo que te recomiendan."],
      checklist: ["Listas de verificación", "Para imprimir, repartir o llevar a una junta."],
      definicion: ["Conceptos", "Cómo se llama esto y qué incluye."],
    },
    read: "Leer",
    inSpanish: "Versión de Chile",
    connectors: ["Conectores de nómina", "Que las altas y bajas nazcan donde ya nacen."],
    upcoming: ["Plataformas en preparación", "Qué va a hacer cada conector y cómo se maneja mientras no está."],
    help: ["Centro de ayuda", "Alias, cuentas genéricas, reactivar un usuario, cambiar de dominio, delegar un buzón, licencias de Zoom y Slack."],
    calc: ["Calculadora de licencias", "Cuánto se te fuga al año en licencias de gente que ya no está. Tres datos y una estimación honesta."],
  },
  "es-ES": {
    eyebrow: "Guías y recursos",
    title: "Las preguntas que los dueños y gerentes se hacen cuando alguien entra o sale de la empresa",
    desc: "Respondidas completas, en español, con los pasos en Google Workspace, lo que dice la ley y lo que Mekovault hace solo. Sin jerga: están escritas para quien dirige la empresa, no para IT.",
    kinds: {
      pilar: ["Las guías largas", "Un problema completo, de principio a fin, con lo que hace Mekovault en cada paso."],
      guia: ["Guías por caso", "Una situación concreta, resuelta."],
      comparativa: ["Comparativas", "Qué cambia con Mekovault frente a lo que ya tienes o a lo que te recomiendan."],
      checklist: ["Listas de comprobación", "Para imprimir, repartir o llevar a una reunión."],
      definicion: ["Conceptos", "Cómo se llama esto y qué incluye."],
    },
    read: "Leer",
    inSpanish: "Versión de Chile",
    connectors: ["Conectores de nómina", "Que las altas y bajas nazcan donde ya nacen."],
    upcoming: ["Plataformas en preparación", "Qué va a hacer cada conector y cómo se maneja mientras no está."],
    help: ["Centro de ayuda", "Alias, cuentas genéricas, reactivar un usuario, cambiar de dominio, delegar un buzón, licencias de Zoom y Slack."],
    calc: ["Calculadora de licencias", "Cuánto se te fuga al año en licencias de gente que ya no está. Tres datos y una estimación honesta."],
  },
  "en-US": {
    eyebrow: "Guides and resources",
    title: "The questions owners and managers ask when someone joins or leaves the company",
    desc: "Answered in full, with the steps in Google Workspace, what the law says and what Mekovault does on its own. No jargon: written for whoever runs the company, not for IT.",
    kinds: {
      pilar: ["The long guides", "A whole problem, start to finish, with what Mekovault does at each step."],
      guia: ["Guides by case", "One concrete situation, solved."],
      comparativa: ["Comparisons", "What changes with Mekovault versus what you already have or what you are being recommended."],
      checklist: ["Checklists", "To print, hand out or bring to a meeting."],
      definicion: ["Concepts", "What this is called and what it includes."],
    },
    read: "Read",
    inSpanish: "In Spanish",
    connectors: ["Payroll connectors", "So joiners and leavers start where they already start."],
    upcoming: ["Platforms in preparation", "What each connector will do and how it is handled meanwhile."],
    help: ["Help center", "Aliases, shared accounts, reactivating a user, changing domain, delegating a mailbox, Zoom and Slack seats."],
    calc: ["License calculator", "How much leaks every year in licenses of people who already left. Three numbers and an honest estimate."],
  },
  "pt-BR": {
    eyebrow: "Guias e recursos",
    title: "As perguntas que donos e gestores fazem quando alguém entra ou sai da empresa",
    desc: "Respondidas por completo, com os passos no Google Workspace, o que diz a lei e o que a Mekovault faz sozinha. Sem jargão: escritas para quem dirige a empresa, não para a TI.",
    kinds: {
      pilar: ["Os guias longos", "Um problema completo, do início ao fim, com o que a Mekovault faz em cada passo."],
      guia: ["Guias por caso", "Uma situação concreta, resolvida."],
      comparativa: ["Comparativos", "O que muda com a Mekovault em relação ao que você já tem ou ao que recomendam."],
      checklist: ["Listas de verificação", "Para imprimir, distribuir ou levar a uma reunião."],
      definicion: ["Conceitos", "Como isso se chama e o que inclui."],
    },
    read: "Ler",
    inSpanish: "Em espanhol",
    connectors: ["Conectores de folha de pagamento", "Para que admissões e desligamentos nasçam onde já nascem."],
    upcoming: ["Plataformas em preparação", "O que cada conector fará e como é tratado enquanto não existe."],
    help: ["Central de ajuda", "Aliases, contas genéricas, reativar um usuário, trocar de domínio, delegar uma caixa de e-mail, licenças do Zoom e do Slack."],
    calc: ["Calculadora de licenças", "Quanto vaza por ano em licenças de pessoas que já saíram. Três números e uma estimativa honesta."],
  },
};

export default async function ResourcesIndex({ params }: { params: LocaleParams }) {
  const locale = await localeFromParams(params);
  const c = COPY[locale] ?? COPY[DEFAULT_LOCALE];
  const kinds: ResourceKind[] = ["pilar", "guia", "comparativa", "checklist", "definicion"];

  return (
    <Container className="py-12 sm:py-16">
      <EyebrowBadge>{c.eyebrow}</EyebrowBadge>
      <h1 className="mt-4 max-w-[760px] text-balance text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#03045e] sm:text-[44px]">
        {c.title}
      </h1>
      <p className="mt-5 max-w-[680px] text-pretty text-[17px] leading-[1.6] text-[#33507a]">{c.desc}</p>

      {kinds.map((kind) => {
        const items = RESOURCES.filter((r) => r.kind === kind);
        if (!items.length) return null;
        const [title, desc] = c.kinds[kind];
        return (
          <section key={kind} className="mt-14">
            <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-[#03045e]">{title}</h2>
            <p className="mt-1 text-[15px] text-[#5b7390]">{desc}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {items.map((r) => {
                const v = locale === DEFAULT_LOCALE ? undefined : CONTENT_BY_LOCALE[r.slug]?.[locale]?.meta;
                return (
                  <li key={r.slug}>
                    <Link
                      href={`/recursos/${r.slug}`}
                      className="flex h-full flex-col gap-3 rounded-[12px] border border-[#dbeaf2] bg-white p-6 transition-colors hover:border-[#0077b6]"
                    >
                      <span className="text-[13px] font-bold text-[#0077b6]">{v?.question ?? r.question}</span>
                      <span className="text-[18px] font-extrabold leading-snug tracking-[-0.01em] text-[#03045e]">{v?.title ?? r.title}</span>
                      <span className="text-[15px] leading-relaxed text-[#33507a]">{v?.description ?? r.description}</span>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-bold text-[#0077b6]">
                        {c.read} · {r.readingMinutes} min
                        {!v && locale !== DEFAULT_LOCALE && !locale.startsWith("es") ? ` · ${c.inSpanish}` : ""}
                        <ArrowRight className="size-4" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      <section className="mt-14">
        <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-[#03045e]">{c.connectors[0]}</h2>
        <p className="mt-1 text-[15px] text-[#5b7390]">{c.connectors[1]}</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {CONNECTORS.map((x) => (
            <li key={x.slug}>
              <Link href={`/conectores/${x.slug}`} className="flex h-full flex-col gap-2 rounded-[12px] border border-[#dbeaf2] bg-white p-6 hover:border-[#0077b6]">
                <span className="text-[18px] font-extrabold text-[#03045e]">{x.name} + Google Workspace</span>
                <span className="text-[14px] text-[#33507a]">{x.countries}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-[#03045e]">{c.upcoming[0]}</h2>
        <p className="mt-1 text-[15px] text-[#5b7390]">{c.upcoming[1]}</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {UPCOMING_PLATFORMS.map((p) => (
            <li key={p.slug}>
              <Link href={`/plataformas/${p.slug}`} className="flex h-full flex-col gap-2 rounded-[12px] border border-dashed border-[#c9dde8] bg-white p-6 hover:border-[#0077b6]">
                <span className="text-[18px] font-extrabold text-[#03045e]">{p.name}</span>
                <span className="text-[14px] text-[#33507a]">{p.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 grid gap-4 sm:grid-cols-2">
        <Link href="/ayuda" className="rounded-[12px] border border-[#dbeaf2] bg-white p-6 hover:border-[#0077b6]">
          <span className="block text-[18px] font-extrabold text-[#03045e]">{c.help[0]}</span>
          <span className="mt-2 block text-[15px] text-[#33507a]">{c.help[1]}</span>
        </Link>
        <Link href="/calculadora-licencias" className="rounded-[12px] border border-[#dbeaf2] bg-white p-6 hover:border-[#0077b6]">
          <span className="block text-[18px] font-extrabold text-[#03045e]">{c.calc[0]}</span>
          <span className="mt-2 block text-[15px] text-[#33507a]">{c.calc[1]}</span>
        </Link>
      </section>
    </Container>
  );
}
