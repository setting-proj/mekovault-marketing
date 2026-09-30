"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Logo } from "./Logo";
import { LinkButton } from "./Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useT } from "@/lib/i18n/I18nProvider";
import { cn } from "@/lib/cn";

/** Header plano: fondo blanco, borde inferior de 1 px, botón navy. */
export function Header() {
  const t = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const NAV = [
    { href: "/products", label: t("nav.product") },
    { href: "/platforms", label: t("nav.platforms") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/governance", label: t("nav.governance_short") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dbeaf2] bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center gap-6 px-4 sm:px-6 lg:px-10">
        <Logo />

        <nav className="ml-2 hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-md px-3 py-2 text-[15px] font-semibold transition-colors hover:text-[#03045e]",
                  active ? "text-[#03045e]" : "text-[#1e3a5f]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="https://app.mekovault.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[15px] font-semibold text-[#1e3a5f] transition-colors hover:text-[#03045e] sm:inline"
          >
            {t("nav.login")}
          </a>
          <span className="hidden sm:inline-flex">
            <LinkButton href="https://app.mekovault.com/signup" external variant="navy" size="md">
              {t("nav.signup")}
            </LinkButton>
          </span>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-[#dbeaf2] text-[#03045e] lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#dbeaf2] bg-white lg:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col px-4 py-3 sm:px-6">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-[15px] font-semibold text-[#1e3a5f] hover:bg-[#f7fbfd] hover:text-[#03045e]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-[#dbeaf2] px-3 pt-4 sm:hidden">
              <LinkButton href="https://app.mekovault.com/signup" external variant="navy">
                {t("nav.signup")}
              </LinkButton>
              <LinkButton href="https://app.mekovault.com/login" external variant="outline">
                {t("nav.login")}
              </LinkButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
