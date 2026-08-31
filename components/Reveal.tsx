"use client";

/**
 * Reveal: wrapper que anima entrada on-scroll con IntersectionObserver.
 *
 * Aplicando "Whole-site animated standard" de 10k-websites: los cards y
 * headings entran suavemente cuando el visitante los alcanza, no aparecen
 * de golpe. Reduced motion → aparece instantáneamente (sin transform).
 *
 * Uso:
 *   <Reveal>              // default 0ms
 *   <Reveal delay={80}>   // stagger de children
 *   <Reveal as="li">      // custom tag
 */

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  delay?: number; // ms
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  /** Threshold IO (0..1). Default 0.15 = 15% visible. */
  threshold?: number;
};

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    // Reduced motion → skip observer, mostrar directo.
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  // Cast necesario para permitir `as` polimórfico con ref.
  const T = Tag as unknown as React.ElementType;
  return (
    <T
      ref={ref as React.Ref<HTMLElement>}
      className={cn(
        "will-change-transform",
        visible ? "animate-reveal-up" : "opacity-0",
        className,
      )}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </T>
  );
}

/**
 * RevealStagger: hijos animan en secuencia con stagger fijo entre ellos.
 * Útil para grids de cards que entran una después de otra.
 */
export function RevealStagger({
  children,
  step = 80,
  className,
}: {
  children: React.ReactNode;
  step?: number;
  className?: string;
}) {
  const arr = Array.isArray(children) ? children : [children];
  return (
    <div className={className}>
      {arr.map((child, i) => (
        <Reveal key={i} delay={i * step}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
