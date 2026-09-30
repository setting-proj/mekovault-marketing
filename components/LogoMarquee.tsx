"use client";

import { useT } from "@/lib/i18n/I18nProvider";

/**
 * Barra que se desplaza con las plataformas que se pagan por persona o asiento.
 * Son marcas de terceros: se muestran como nombre (wordmark tipográfico), no con su logo,
 * para no depender de sus guías de uso. Se detiene al pasar el mouse y respeta
 * prefers-reduced-motion (globals.css deja la animación en un cuadro).
 */
const PLATFORMS = [
  "Google Workspace",
  "Slack",
  "Buk",
  "Adobe",
  "Notion",
  "Zoom",
  "Canva",
  "Figma",
  "Jira",
  "HubSpot",
  "Salesforce",
  "Dropbox",
  "Asana",
  "Zendesk",
  "GitHub",
  "1Password",
  "Miro",
];

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-3 pr-3"
      role={ariaHidden ? undefined : "list"}
    >
      {PLATFORMS.map((name) => (
        <li
          key={name}
          className="flex h-11 shrink-0 items-center gap-2.5 rounded-lg border border-[#dbeaf2] bg-white px-4 text-[15px] font-bold tracking-tight text-[#03045e]"
        >
          <span aria-hidden className="inline-block size-2 rounded-full bg-[#00b4d8]" />
          {name}
        </li>
      ))}
    </ul>
  );
}

export function LogoMarquee() {
  const t = useT();
  return (
    <section aria-label={t("marquee.label")} className="border-y border-[#dbeaf2] bg-[#f7fbfd] py-7">
      <p className="mb-5 text-center text-[13px] font-bold uppercase tracking-[0.08em] text-[#5b7390]">
        {t("marquee.label")}
      </p>
      <div className="marquee overflow-hidden">
        <div className="marquee-track flex w-max">
          <Track />
          <Track ariaHidden />
        </div>
      </div>
    </section>
  );
}
