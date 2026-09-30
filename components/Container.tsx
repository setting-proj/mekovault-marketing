import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-10",
        size === "narrow" && "max-w-3xl",
        size === "default" && "max-w-[1280px]",
        size === "wide" && "max-w-[1440px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
