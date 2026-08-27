import Link from "next/link";
import { Logo } from "./Logo";

const COLS = [
  {
    title: "Producto",
    links: [
      { href: "/products", label: "Servicios" },
      { href: "/pricing", label: "Planes" },
      { href: "https://app.mekovault.com", label: "Portal (app)" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/about", label: "Nosotros" },
      { href: "/contact", label: "Contacto" },
      { href: "mailto:cloud@mekovault.com", label: "cloud@mekovault.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/terms", label: "Términos" },
      { href: "/legal/privacy", label: "Privacidad" },
      { href: "/legal/aup", label: "AUP" },
      { href: "/legal/cookies", label: "Cookies" },
      { href: "/legal/sub-processors", label: "Sub-procesadores" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Automatiza el lifecycle de identidades corporativas en Google
              Workspace, Microsoft Entra y otros directorios. Portal
              self-service, aprobaciones, workers async y auditoría inmutable.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              Datos alojados en LATAM. Infraestructura AWS con red privada +
              Tailscale.
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

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Mekovault SpA — Santiago, Chile</p>
          <p className="font-mono">v1.0 · mekovault.com</p>
        </div>
      </div>
    </footer>
  );
}
