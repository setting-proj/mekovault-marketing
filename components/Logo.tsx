import Link from "next/link";
import { cn } from "@/lib/cn";

/** Marca: cuadrado navy con el escudo en cyan claro. Sin gradiente ni sombra. */
export function LogoMark({
  size = 28,
  className,
  inverted = false,
}: {
  size?: number;
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-lg",
        inverted ? "bg-white text-[#03045e]" : "bg-[#03045e] text-[#90e0ef]",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: Math.round(size * 0.57), height: Math.round(size * 0.57) }}
      >
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    </span>
  );
}

export function Logo({
  href = "/",
  size = 28,
  showWord = true,
  className,
  inverted = false,
}: {
  href?: string;
  size?: number;
  showWord?: boolean;
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="Mekovault"
    >
      <LogoMark size={size} inverted={inverted} />
      {showWord && (
        <span
          className={cn(
            "text-[19px] font-extrabold leading-none tracking-[-0.01em]",
            inverted ? "text-white" : "text-[#03045e]",
          )}
        >
          Mekovault
        </span>
      )}
    </Link>
  );
}
