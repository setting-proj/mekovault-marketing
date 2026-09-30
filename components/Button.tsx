import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "navy" | "secondary" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

/**
 * Botones planos: azul sólido para la acción principal, navy para el header
 * y los fondos claros, blanco para fondos navy. Sin sombras ni gradientes.
 */
const variants: Record<Variant, string> = {
  primary: "bg-[#0077b6] text-white hover:bg-[#03045e]",
  navy: "bg-[#03045e] text-white hover:bg-[#0077b6]",
  secondary: "bg-white text-[#03045e] hover:bg-[#eaf6fb]",
  outline: "border border-[#c9dde8] bg-white text-[#03045e] hover:border-[#03045e]",
  ghost: "text-[#1e3a5f] hover:text-[#03045e]",
  white: "border border-white/40 bg-transparent text-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-[18px] text-[15px]",
  lg: "h-[52px] px-[26px] text-[17px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] font-bold whitespace-nowrap transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#0077b6]/50 disabled:opacity-50 [&_svg]:size-[18px]";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external,
  ...rest
}: CommonProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

/** Enlace de texto con flecha, como "Ver cómo funciona" en el hero. */
export function ArrowLink({
  href,
  children,
  className,
  tone = "navy",
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "navy" | "sky" | "blue";
  external?: boolean;
}) {
  const color =
    tone === "sky"
      ? "text-[#90e0ef] hover:text-white"
      : tone === "blue"
        ? "text-[#0077b6] hover:text-[#03045e]"
        : "text-[#03045e] hover:text-[#0077b6]";
  const classes = cn(
    "inline-flex items-center gap-2 font-bold transition-colors [&_svg]:size-[18px]",
    color,
    className,
  );
  const arrow = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}
