import Link from "next/link";
import { Container } from "@/components/Container";
import { LegalLangNotice } from "@/components/LegalLangNotice";

const LEGAL_NAV = [
  { href: "/legal/terms", label: "Términos" },
  { href: "/legal/privacy", label: "Privacidad" },
  { href: "/legal/security", label: "Seguridad" },
  { href: "/legal/dpa", label: "Tratamiento de datos" },
  { href: "/legal/aup", label: "Uso aceptable" },
  { href: "/legal/cookies", label: "Cookies" },
  { href: "/legal/sub-processors", label: "Proveedores" },
];

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container className="py-14">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Legal
          </p>
          <nav className="flex flex-col gap-0.5">
            {LEGAL_NAV.map((item) => (
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
          <LegalLangNotice />
          {children}
        </article>
      </div>
    </Container>
  );
}
