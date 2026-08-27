"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { ComplianceBadges } from "./ComplianceBadges";
import { useT } from "@/lib/i18n/I18nProvider";

export function Footer() {
  const t = useT();

  const COLS = [
    {
      title: t("footer.col.product"),
      links: [
        { href: "/products", label: t("footer.link.services") },
        { href: "/pricing", label: t("footer.link.pricing") },
        { href: "https://app.mekovault.com", label: t("footer.link.portal") },
      ],
    },
    {
      title: t("footer.col.company"),
      links: [
        { href: "/about", label: t("footer.link.about") },
        { href: "/contact", label: t("footer.link.contact") },
        { href: "mailto:cloud@mekovault.com", label: "cloud@mekovault.com" },
      ],
    },
    {
      title: t("footer.col.legal"),
      links: [
        { href: "/legal/terms", label: t("footer.link.terms") },
        { href: "/legal/privacy", label: t("footer.link.privacy") },
        { href: "/legal/dpa", label: t("footer.link.dpa") },
        { href: "/legal/aup", label: t("footer.link.aup") },
        { href: "/legal/cookies", label: t("footer.link.cookies") },
        { href: "/legal/sub-processors", label: t("footer.link.subprocessors") },
      ],
    },
  ];

  return (
    <footer className="mt-24 border-t bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              {t("footer.dataResidency")}
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t pt-6">
          <ComplianceBadges />
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {t("footer.copyright")}</p>
          <p className="font-mono">v1.0 · mekovault.com</p>
        </div>
      </div>
    </footer>
  );
}
