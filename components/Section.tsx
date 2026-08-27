import { cn } from "@/lib/cn";

export function Section({
  id,
  className,
  children,
  compact = false,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        compact ? "py-14" : "py-20 sm:py-28",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function EyebrowBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  center = true,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "space-y-4",
        center && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {eyebrow && <EyebrowBadge>{eyebrow}</EyebrowBadge>}
      <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {desc && (
        <p className="text-pretty text-lg text-muted-foreground">{desc}</p>
      )}
    </div>
  );
}
