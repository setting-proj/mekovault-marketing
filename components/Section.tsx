import { cn } from "@/lib/cn";

/**
 * Sección de página. Fondos planos: blanco, #f7fbfd o navy.
 * Las secciones alternan texto + pantalla del producto; nada va centrado
 * salvo el llamado final.
 */
export function Section({
  id,
  className,
  children,
  compact = false,
  tone = "white",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  compact?: boolean;
  tone?: "white" | "panel" | "navy";
}) {
  return (
    <section
      id={id}
      className={cn(
        compact ? "py-14 sm:py-16" : "py-20 sm:py-24",
        tone === "panel" && "bg-[#f7fbfd]",
        tone === "navy" && "bg-[#03045e] text-white",
        className,
      )}
    >
      {children}
    </section>
  );
}

/** Etiqueta corta sobre un título: texto plano en azul, sin pastilla. */
export function EyebrowBadge({
  children,
  tone = "blue",
  className,
}: {
  children: React.ReactNode;
  tone?: "blue" | "cyan";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "block text-sm font-bold tracking-[0.02em]",
        tone === "cyan" ? "text-[#00b4d8]" : "text-[#0077b6]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  center = false,
  className,
  tone = "light",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  center?: boolean;
  className?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "flex max-w-[640px] flex-col gap-5",
        center && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && <EyebrowBadge tone={dark ? "cyan" : "blue"}>{eyebrow}</EyebrowBadge>}
      <h2
        className={cn(
          "text-balance text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] sm:text-[44px]",
          dark ? "text-white" : "text-[#03045e]",
        )}
      >
        {title}
      </h2>
      {desc && (
        <p className={cn("text-pretty text-[17px] leading-[1.6]", dark ? "text-[#b9d7e6]" : "text-[#33507a]")}>
          {desc}
        </p>
      )}
    </div>
  );
}
