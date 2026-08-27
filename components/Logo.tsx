import Link from "next/link";
import { cn } from "@/lib/cn";

export function LogoMark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-brand-gradient text-white",
        className,
      )}
      style={{
        width: size,
        height: size,
        boxShadow: "var(--shadow-glow)",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-1/2"
      >
        <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    </span>
  );
}

export function Logo({
  href = "/",
  size = 28,
  showWord = true,
  className,
}: {
  href?: string;
  size?: number;
  showWord?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center gap-2", className)}
      aria-label="Mekovault"
    >
      <LogoMark size={size} />
      {showWord && (
        <span className="font-heading text-[15px] font-semibold leading-none tracking-tight">
          Mekovault
        </span>
      )}
    </Link>
  );
}
