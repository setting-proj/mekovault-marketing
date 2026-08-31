"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import { useI18n } from "@/lib/i18n/I18nProvider";
import { cn } from "@/lib/cn";

/**
 * Badges de compliance en el footer:
 * - RGPD siempre visible (regulación UE aplicable a cualquier cliente con
 *   users en UE).
 * - Ley 21.719 (Chile) con banderita chilena, solo cuando locale=es-419
 *   (audiencia relevante).
 */
export function ComplianceBadges({ className }: { className?: string }) {
  const { locale, t } = useI18n();
  const showChile = locale === "es-419";

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2 text-xs",
        className,
      )}
    >
      <Link
        href="/legal/privacy"
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-muted-foreground transition-colors hover:text-foreground"
        title={t("compliance.gdpr")}
      >
        <ShieldCheck className="size-3 text-primary" />
        {t("compliance.gdpr")}
      </Link>

      {showChile && (
        <Link
          href="/legal/privacy"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-muted-foreground transition-colors hover:text-foreground"
          title={t("compliance.chile")}
        >
          <ChileFlag />
          {t("compliance.chile")}
        </Link>
      )}
    </div>
  );
}

function ChileFlag() {
  return (
    <svg viewBox="0 0 900 600" className="h-3 w-4 shrink-0 rounded-sm" aria-hidden="true">
      <rect width="900" height="600" fill="#D52B1E" />
      <rect width="450" height="300" fill="#fff" />
      <rect width="300" height="300" fill="#0039A6" />
      <polygon
        fill="#fff"
        points="150,90 173.5,161.4 249.9,161.4 187.2,205 210.7,276.4 150,232.5 89.3,276.4 112.8,205 50.1,161.4 126.5,161.4"
      />
    </svg>
  );
}
