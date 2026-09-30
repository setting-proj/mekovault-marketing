"use client";

/**
 * FAQ: bloque de preguntas frecuentes.
 *
 * Aplicando 10k-websites design-package §6: "FAQ answering the real
 * objections found in research, in the buyers' own words".
 *
 * Details/summary nativo, sin JS, con transiciones suaves y foco visible.
 * Reduced motion honored via globals.css.
 */

import { Reveal } from "@/components/Reveal";

export type FAQEntry = {
  q: string;
  a: React.ReactNode;
};

export function FAQ({ items }: { items: FAQEntry[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <Reveal key={i} delay={i * 60}>
          <details className="group rounded-[10px] border border-[#dbeaf2] bg-white open:border-[#c9dde8]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5">
              <span className="text-[17px] font-bold leading-snug text-[#03045e]">{item.q}</span>
              <span
                aria-hidden
                className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-md border border-[#c9dde8] text-[#0077b6] transition-transform group-open:rotate-45"
              >
                <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <div className="border-t border-[#eaf3f8] px-5 pb-5 pt-4 text-[15px] leading-relaxed text-[#33507a]">
              {item.a}
            </div>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
