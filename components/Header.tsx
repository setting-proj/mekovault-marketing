"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Logo } from "./Logo";
import { LinkButton } from "./Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useT } from "@/lib/i18n/I18nProvider";

export function Header() {
  const t = useT();
  const NAV = [
    { href: "/products", label: t("nav.product") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <LinkButton
            href="https://app.mekovault.com/login"
            external
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {t("nav.login")}
          </LinkButton>
          <LinkButton
            href="https://app.mekovault.com/signup"
            external
            size="sm"
          >
            {t("nav.signup")} <ArrowRight />
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
