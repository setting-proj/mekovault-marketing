import { cn } from "@/lib/cn";

/**
 * Piezas comunes de las pantallas del producto dibujadas en HTML.
 * Todo son colores planos y bordes de 1 px; nada de imágenes.
 */

export function WindowFrame({
  url,
  children,
  className,
  cut = false,
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
  /** Sin borde inferior ni radio abajo: la ventana se corta con la sección (hero). */
  cut?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden border border-[#c9dde8] bg-white shadow-window",
        cut ? "rounded-t-[14px] border-b-0" : "rounded-[14px]",
        className,
      )}
    >
      <div className="flex h-11 items-center gap-2 border-b border-[#dbeaf2] bg-[#f2f8fb] px-4">
        <span className="size-2.5 rounded-full bg-[#d9e6ee]" />
        <span className="size-2.5 rounded-full bg-[#d9e6ee]" />
        <span className="size-2.5 rounded-full bg-[#d9e6ee]" />
        <span className="ml-3 truncate rounded-md border border-[#dbeaf2] bg-white px-2.5 py-1 text-xs font-semibold text-[#5b7390]">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

export type PillTone = "green" | "blue" | "orange" | "gray";

const PILL: Record<PillTone, string> = {
  green: "bg-[#dcfce7] text-[#166534]",
  blue: "bg-[#e0f2fe] text-[#075985]",
  orange: "bg-[#ffedd5] text-[#9a3412]",
  gray: "bg-[#eaf6fb] text-[#33507a]",
};

export function StatusPill({ tone, children, className }: { tone: PillTone; children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold", PILL[tone], className)}>
      {children}
    </span>
  );
}

export function StatCard({
  label,
  value,
  tone = "white",
}: {
  label: string;
  value: string;
  tone?: "white" | "orange" | "navy";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 rounded-[10px] border p-3.5",
        tone === "white" && "border-[#dbeaf2] bg-white",
        tone === "orange" && "border-[#fed7aa] bg-[#fff7ed]",
        tone === "navy" && "border-[#03045e] bg-[#03045e] text-white",
      )}
    >
      <div className={cn("text-xs font-semibold", tone === "orange" ? "text-[#9a3412]" : tone === "navy" ? "text-[#90e0ef]" : "text-[#5b7390]")}>
        {label}
      </div>
      <div className={cn("whitespace-nowrap text-2xl font-extrabold tabular-nums", tone === "orange" ? "text-[#9a3412]" : tone === "navy" ? "text-white" : "text-[#03045e]")}>
        {value}
      </div>
    </div>
  );
}

export function PanelCaption({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <div className={cn("pl-1 text-xs font-semibold", tone === "dark" ? "text-[#6f97b3]" : "text-[#5b7390]")}>{children}</div>
  );
}

export function TableHead({ cols, children }: { cols: string; children: React.ReactNode }) {
  return (
    <div
      className="grid gap-3 bg-[#f2f8fb] px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[0.06em] text-[#5b7390]"
      style={{ gridTemplateColumns: cols }}
    >
      {children}
    </div>
  );
}

export function TableRow({
  cols,
  children,
  highlight = false,
}: {
  cols: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn("grid items-center gap-3 border-t border-[#eaf3f8] px-3.5 py-3", highlight && "bg-[#fffbf5]")}
      style={{ gridTemplateColumns: cols }}
    >
      {children}
    </div>
  );
}
