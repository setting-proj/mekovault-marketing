import Link from "next/link";
import { Container } from "@/components/Container";

const DOCS_NAV = [
  { href: "/docs", label: "Inicio" },
  { href: "/docs/getting-started", label: "Primeros pasos" },
  { href: "/docs/admin-guide", label: "Guía del administrador" },
  { href: "/docs/tickets", label: "Tickets y automatizaciones" },
  { href: "/docs/troubleshooting", label: "Problemas frecuentes" },
  { href: "/governance", label: "Arquitectura y gobernanza" },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="py-14">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <p className="mb-3 text-sm font-bold text-[#0077b6]">
            Documentación
          </p>
          <nav className="flex flex-col gap-0.5">
            {DOCS_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <article
          lang="es"
          className="prose prose-neutral max-w-none dark:prose-invert prose-h1:font-heading prose-h1:tracking-tight prose-h2:font-heading prose-h2:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
        >
          {children}
        </article>
      </div>
    </Container>
  );
}
