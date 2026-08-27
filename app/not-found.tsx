import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        404
      </p>
      <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight">
        Página no encontrada
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        La URL que buscas no existe. Puede que la hayamos movido o esté
        pendiente de publicación.
      </p>
      <div className="mt-8 flex gap-3">
        <LinkButton href="/" variant="outline">
          <ArrowLeft /> Volver al inicio
        </LinkButton>
        <LinkButton href="/products">Ver producto</LinkButton>
      </div>
    </Container>
  );
}
