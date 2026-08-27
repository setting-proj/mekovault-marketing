import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Logo } from "./Logo";
import { LinkButton } from "./Button";

const NAV = [
  { href: "/products", label: "Producto" },
  { href: "/pricing", label: "Planes" },
  { href: "/about", label: "Nosotros" },
  { href: "/contact", label: "Contacto" },
];

export function Header() {
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
          <LinkButton
            href="https://app.mekovault.com/login"
            external
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Iniciar sesión
          </LinkButton>
          <LinkButton
            href="https://app.mekovault.com/signup"
            external
            size="sm"
          >
            Empezar gratis <ArrowRight />
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
