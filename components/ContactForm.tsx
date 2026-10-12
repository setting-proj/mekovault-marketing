"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/Button";
import { useI18n } from "@/lib/i18n/I18nProvider";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.mekovault.com";
const TO = "cloud@mekovault.com";

/**
 * Formulario de contacto. Envía a `POST /api/v1/public/contact-messages`
 * (svc-tenancy) y muestra confirmación. Si el API no responde (o el endpoint
 * aún no está desplegado), ofrece mandar el mismo texto por correo con un
 * enlace mailto ya armado: nunca se pierde el mensaje.
 */
export function ContactForm() {
  const { t, locale } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", website: "" });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const mailto = () => {
    const subject = encodeURIComponent(`Contacto desde mekovault.com: ${form.company || form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.company}\n${form.email}`);
    return `mailto:${TO}?subject=${subject}&body=${body}`;
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Campo trampa para robots: una persona nunca lo ve ni lo llena.
    if (form.website) {
      setState("sent");
      return;
    }
    setState("sending");
    try {
      const res = await fetch(`${API_BASE}/api/v1/public/contact-messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim() || null,
          message: form.message.trim(),
          locale,
          page: typeof window !== "undefined" ? window.location.pathname : null,
        }),
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState("sent");
    } catch {
      setState("failed");
    }
  }

  const inputCls =
    "h-10 w-full rounded-lg border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25";

  if (state === "sent") {
    return (
      <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-emerald-300 bg-emerald-50/50 p-8 text-center">
        <div className="mx-auto mb-4 inline-flex text-[#166534]">
          <Check className="size-6" />
        </div>
        <h3 className="text-xl font-extrabold tracking-[-0.02em] text-[#03045e]">{t("contact.form.sent.title")}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{t("contact.form.sent.desc")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-lg space-y-4" noValidate={false}>
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          {t("contact.form.name")}
        </label>
        <input id="name" name="name" required maxLength={200} value={form.name} onChange={set("name")} className={inputCls} />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          {t("contact.form.email")}
        </label>
        <input id="email" name="email" type="email" required maxLength={320} value={form.email} onChange={set("email")} className={inputCls} />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="company" className="text-sm font-medium">
          {t("contact.form.company")}
        </label>
        <input id="company" name="company" maxLength={200} value={form.company} onChange={set("company")} className={inputCls} />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          {t("contact.form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={4000}
          value={form.message}
          onChange={set("message")}
          className="w-full rounded-lg border bg-card px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
        />
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={state === "sending"}>
        {state === "sending" ? t("contact.form.sending") : t("contact.form.send")}
      </Button>
      {state === "failed" && (
        <p className="rounded-lg border border-amber-300 bg-amber-50 p-3 text-center text-sm text-[#9a3412]">
          {t("contact.form.failed")}{" "}
          <a href={mailto()} className="font-bold underline">
            {t("contact.form.failed.cta")}
          </a>
        </p>
      )}
      <p className="text-center text-xs text-muted-foreground">
        {t("contact.form.also")}{" "}
        <a href={`mailto:${TO}`} className="font-medium text-primary hover:underline">
          {TO}
        </a>
        .
      </p>
    </form>
  );
}
