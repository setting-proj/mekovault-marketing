"use client";

import { ArrowRight, Building2, Compass, Mountain } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Timeline } from "@/components/Timeline";
import { useT } from "@/lib/i18n/I18nProvider";

export default function AboutPage() {
  const t = useT();
  return (
    <>
      <Section compact>
        <Container size="narrow">
          <SectionHeading
            eyebrow={t("about.eyebrow")}
            title={
              <>
                {t("about.title.pre")}{" "}
                <span className="text-brand-gradient">
                  {t("about.title.hl")}
                </span>{" "}
                {t("about.title.post")}
              </>
            }
            desc={t("about.subtitle")}
          />
        </Container>
      </Section>

      <Section className="border-t">
        <Container size="wide">
          <div className="grid gap-8 lg:grid-cols-3">
            <Pillar
              icon={<Compass />}
              title={t("about.pillar.mission.title")}
              desc={t("about.pillar.mission.desc")}
            />
            <Pillar
              icon={<Building2 />}
              title={t("about.pillar.focus.title")}
              desc={t("about.pillar.focus.desc")}
            />
            <Pillar
              icon={<Mountain />}
              title={t("about.pillar.ambition.title")}
              desc={t("about.pillar.ambition.desc")}
            />
          </div>
        </Container>
      </Section>

      <Section className="border-t bg-muted/30">
        <Container size="narrow">
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <h2 className="font-heading text-3xl italic tracking-tight">
              {t("about.why.title")}
            </h2>
            <p className="mt-4 text-muted-foreground">{t("about.why.p1")}</p>
            <p className="mt-4 text-muted-foreground">{t("about.why.p2")}</p>
            <p className="mt-4 text-muted-foreground">{t("about.why.p3")}</p>
          </div>
        </Container>
      </Section>

      {/* Timeline interactivo: hitos del proyecto con detalles reales.
          Interactive moment de /about (10k-websites §6). */}
      <Section className="border-t">
        <Container size="wide">
          <SectionHeading
            eyebrow={t("about.timeline.eyebrow")}
            title={t("about.timeline.title")}
            desc={t("about.timeline.subtitle")}
          />
          <Reveal>
            <div className="mx-auto mt-4 max-w-4xl">
              <Timeline
                milestones={[
                  {
                    date: t("timeline.m1.date"),
                    title: t("timeline.m1.title"),
                    detail: t("timeline.m1.detail"),
                    metric: t("timeline.m1.metric"),
                  },
                  {
                    date: t("timeline.m2.date"),
                    title: t("timeline.m2.title"),
                    detail: t("timeline.m2.detail"),
                    metric: t("timeline.m2.metric"),
                  },
                  {
                    date: t("timeline.m3.date"),
                    title: t("timeline.m3.title"),
                    detail: t("timeline.m3.detail"),
                    metric: t("timeline.m3.metric"),
                  },
                  {
                    date: t("timeline.m4.date"),
                    title: t("timeline.m4.title"),
                    detail: t("timeline.m4.detail"),
                    metric: t("timeline.m4.metric"),
                  },
                  {
                    date: t("timeline.m5.date"),
                    title: t("timeline.m5.title"),
                    detail: t("timeline.m5.detail"),
                    metric: t("timeline.m5.metric"),
                  },
                ]}
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t">
        <Container size="narrow" className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            {t("about.cta.title")}
          </h2>
          <p className="mt-3 text-muted-foreground">{t("about.cta.desc")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LinkButton href="/contact" size="lg">
              {t("about.cta.contact")} <ArrowRight />
            </LinkButton>
            <LinkButton
              href="https://app.mekovault.com/signup"
              external
              size="lg"
              variant="outline"
            >
              {t("about.cta.signup")}
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Pillar({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:size-5">
        {icon}
      </div>
      <h3 className="font-heading text-lg font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
