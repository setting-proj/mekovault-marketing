"use client";

import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { useT } from "@/lib/i18n/I18nProvider";

export default function NotFound() {
  const t = useT();
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        404
      </p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.02em] text-[#03045e]">
        {t("notfound.title")}
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">{t("notfound.desc")}</p>
      <div className="mt-8 flex gap-3">
        <LinkButton href="/" variant="outline">
          <ArrowLeft /> {t("notfound.home")}
        </LinkButton>
        <LinkButton href="/products">{t("notfound.product")}</LinkButton>
      </div>
    </Container>
  );
}
