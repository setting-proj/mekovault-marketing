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
        { href: "/platforms", label: t("footer.link.platforms") },
        { href: "/license-control", label: t("footer.link.license_control") },
        { href: "/pricing", label: t("footer.link.pricing") },
        { href: "/governance", label: t("footer.link.governance") },
        { href: "/status", label: t("footer.link.status") },
        { href: "/docs", label: t("footer.link.docs") },
        { href: "https://app.mekovault.com", label: t("footer.link.portal") },
      ],
    },
    {
      title: t("footer.col.company"),
      links: [
        { href: "/about", label: t("footer.link.about") },
        { href: "/contact", label: t("footer.link.contact") },
        { href: "/partners", label: t("footer.link.partners") },
        { href: "mailto:cloud@mekovault.com", label: "cloud@mekovault.com" },
      ],
    },
    {
      title: t("footer.col.legal"),
      links: [
        { href: "/legal/terms", label: t("footer.link.terms") },
        { href: "/legal/privacy", label: t("footer.link.privacy") },
        { href: "/legal/security", label: t("footer.link.security") },
        { href: "/legal/dpa", label: t("footer.link.dpa") },
        { href: "/legal/aup", label: t("footer.link.aup") },
        { href: "/legal/cookies", label: t("footer.link.cookies") },
        { href: "/legal/sub-processors", label: t("footer.link.subprocessors") },
      ],
    },
  ];

  return (
    <footer className="border-t border-[#dbeaf2] bg-[#f7fbfd]">
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-[#33507a]">
              {t("footer.tagline")}
            </p>
            <p className="mt-6 text-xs leading-relaxed text-[#5b7390]">
              {t("footer.note")}
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-extrabold text-[#03045e]">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-semibold text-[#33507a] transition-colors hover:text-[#03045e]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-[#dbeaf2] pt-6">
          <ComplianceBadges />
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs font-semibold text-[#5b7390] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {t("footer.copyright")}</p>
          <p>mekovault.com</p>
        </div>
      </div>
    </footer>
  );
}
