import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/Container";
import Link from "@/components/Link";
import { EyebrowBadge } from "@/components/Section";
import { detectLocaleServer } from "@/lib/i18n/detectLocale.server";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { CONNECTORS, RESOURCES, type ResourceKind } from "@/lib/resources";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await detectLocaleServer();
  const dict = dictionaries[locale];
  return pageMetadata({
    locale,
    path: "/recursos",
    title: dict["seo.resources.title"],
    description: dict["seo.resources.description"],
    localized: false,
  });
}

const KINDS: Array<{ kind: ResourceKind; title: string; desc: string }> = [
  { kind: "pilar", title: "Las guías largas", desc: "Un problema completo, de principio a fin, con lo que hace Mekovault en cada paso." },
  { kind: "guia", title: "Guías por caso", desc: "Una situación concreta, resuelta." },
  { kind: "comparativa", title: "Comparativas", desc: "Qué cambia con Mekovault frente a lo que ya tienes." },
  { kind: "checklist", title: "Listas de comprobación", desc: "Para imprimir, repartir o llevar a una reunión." },
  { kind: "definicion", title: "Conceptos", desc: "Cómo se llama esto y qué incluye." },
];

export default function ResourcesIndex() {
  return (
    <Container className="py-12 sm:py-16">
      <EyebrowBadge>Guías y recursos</EyebrowBadge>
      <h1 className="mt-4 max-w-[760px] text-balance text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#03045e] sm:text-[44px]">
        Las preguntas que los dueños y gerentes se hacen cuando alguien entra o sale de la empresa
      </h1>
      <p className="mt-5 max-w-[680px] text-pretty text-[17px] leading-[1.6] text-[#33507a]">
        Respondidas completas, en español, con los pasos en Google Workspace, lo que dice la ley y lo que Mekovault hace solo.
        Sin jerga: están escritas para quien dirige la empresa, no para IT.
      </p>

      {KINDS.map((k) => {
        const items = RESOURCES.filter((r) => r.kind === k.kind);
        if (!items.length) return null;
        return (
          <section key={k.kind} className="mt-14">
            <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-[#03045e]">{k.title}</h2>
            <p className="mt-1 text-[15px] text-[#5b7390]">{k.desc}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {items.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/recursos/${r.slug}`}
                    className="flex h-full flex-col gap-3 rounded-[12px] border border-[#dbeaf2] bg-white p-6 transition-colors hover:border-[#0077b6]"
                  >
                    <span className="text-[13px] font-bold text-[#0077b6]">{r.question}</span>
                    <span className="text-[18px] font-extrabold leading-snug tracking-[-0.01em] text-[#03045e]">{r.title}</span>
                    <span className="text-[15px] leading-relaxed text-[#33507a]">{r.description}</span>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-bold text-[#0077b6]">
                      Leer · {r.readingMinutes} min <ArrowRight className="size-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <section className="mt-14">
        <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-[#03045e]">Conectores de nómina</h2>
        <p className="mt-1 text-[15px] text-[#5b7390]">Que las altas y bajas nazcan donde ya nacen.</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {CONNECTORS.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/conectores/${c.slug}`}
                className="flex h-full flex-col gap-2 rounded-[12px] border border-[#dbeaf2] bg-white p-6 hover:border-[#0077b6]"
              >
                <span className="text-[18px] font-extrabold text-[#03045e]">{c.name} + Google Workspace</span>
                <span className="text-[14px] text-[#33507a]">{c.countries}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 grid gap-4 sm:grid-cols-2">
        <Link href="/ayuda" className="rounded-[12px] border border-[#dbeaf2] bg-white p-6 hover:border-[#0077b6]">
          <span className="block text-[18px] font-extrabold text-[#03045e]">Centro de ayuda</span>
          <span className="mt-2 block text-[15px] text-[#33507a]">
            Alias, cuentas genéricas, reactivar un usuario, cambiar de dominio, delegar un buzón, licencias de Zoom y Slack.
          </span>
        </Link>
        <Link href="/calculadora-licencias" className="rounded-[12px] border border-[#dbeaf2] bg-white p-6 hover:border-[#0077b6]">
          <span className="block text-[18px] font-extrabold text-[#03045e]">Calculadora de licencias</span>
          <span className="mt-2 block text-[15px] text-[#33507a]">
            Cuánto se te fuga al año en licencias de gente que ya no está. Tres datos y una estimación honesta.
          </span>
        </Link>
      </section>
    </Container>
  );
}
