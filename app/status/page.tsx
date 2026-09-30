"use client";

/**
 * /status: estado de la plataforma (fila 16 de pendientes).
 *
 * Página propia, sin proveedor externo: consulta desde el navegador los
 * healthz públicos de la app y la API cada 60 s y muestra el estado. Si el
 * origen no responde (Cloudflare 522) se ve "Sin respuesta". Cuando exista
 * `status.mekovault.com` (DNS de Jorge) apuntará a esta misma página.
 */

import { useEffect, useState } from "react";

type Target = { key: string; label: string; url: string; expect?: number[] };

const TARGETS: Target[] = [
  { key: "app", label: "Aplicación (app.mekovault.com)", url: "https://app.mekovault.com/login" },
  { key: "api", label: "API (api.mekovault.com)", url: "https://api.mekovault.com/api/v1/public/apps-catalog" },
  { key: "www", label: "Sitio público (www.mekovault.com)", url: "/" },
];

type Result = { ok: boolean | null; ms: number | null; code: number | null; at: string | null };

function label(r: Result): { text: string; color: string } {
  if (r.ok === null) return { text: "Comprobando…", color: "#9ca3af" };
  if (r.ok) return { text: r.ms !== null && r.ms > 3000 ? "Lento" : "Operativo", color: r.ms !== null && r.ms > 3000 ? "#d97706" : "#16a34a" };
  return { text: "Sin respuesta", color: "#dc2626" };
}

export default function StatusPage() {
  const [results, setResults] = useState<Record<string, Result>>(
    Object.fromEntries(TARGETS.map((t) => [t.key, { ok: null, ms: null, code: null, at: null }])),
  );
  const [history, setHistory] = useState<Record<string, boolean[]>>({});

  useEffect(() => {
    let cancelled = false;
    async function check() {
      const next: Record<string, Result> = {};
      for (const t of TARGETS) {
        const started = performance.now();
        try {
          const ctrl = new AbortController();
          const timer = setTimeout(() => ctrl.abort(), 8000);
          const res = await fetch(t.url, { mode: t.url.startsWith("/") ? "same-origin" : "no-cors", cache: "no-store", signal: ctrl.signal });
          clearTimeout(timer);
          const ms = Math.round(performance.now() - started);
          // En modo no-cors el status es 0 (opaco): llegó respuesta = origen vivo.
          const ok = res.type === "opaque" ? true : res.ok;
          next[t.key] = { ok, ms, code: res.type === "opaque" ? null : res.status, at: new Date().toISOString() };
        } catch {
          next[t.key] = { ok: false, ms: null, code: null, at: new Date().toISOString() };
        }
      }
      if (cancelled) return;
      setResults(next);
      setHistory((h) => {
        const out = { ...h };
        for (const t of TARGETS) out[t.key] = [...(out[t.key] ?? []), !!next[t.key]?.ok].slice(-30);
        return out;
      });
    }
    void check();
    const id = setInterval(check, 60_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const allOk = TARGETS.every((t) => results[t.key]?.ok);
  const anyDown = TARGETS.some((t) => results[t.key]?.ok === false);

  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Estado de Mekovault</h1>
      <p style={{ color: "#6b7280", marginBottom: 24 }}>
        Comprobación en vivo desde tu navegador cada 60 segundos. Última: {results.app?.at ? new Date(results.app.at).toLocaleTimeString() : "sin datos"}.
      </p>
      <div
        style={{
          borderRadius: 12,
          padding: "14px 18px",
          marginBottom: 24,
          background: anyDown ? "#fee2e2" : allOk ? "#dcfce7" : "#f3f4f6",
          color: anyDown ? "#991b1b" : allOk ? "#166534" : "#374151",
          fontWeight: 600,
        }}
      >
        {anyDown ? "Hay componentes sin respuesta." : allOk ? "Todos los sistemas operativos." : "Comprobando…"}
      </div>
      <div style={{ display: "grid", gap: 12 }}>
        {TARGETS.map((t) => {
          const r = results[t.key]!;
          const l = label(r);
          return (
            <div key={t.key} style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <div>
                <div style={{ fontWeight: 600 }}>{t.label}</div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>
                  {r.ms !== null ? `${r.ms} ms` : "sin dato"}
                  {r.code ? ` · HTTP ${r.code}` : ""}
                </div>
                <div style={{ display: "flex", gap: 2, marginTop: 6 }}>
                  {(history[t.key] ?? []).map((ok, i) => (
                    <span key={i} title={ok ? "ok" : "sin respuesta"} style={{ width: 8, height: 14, borderRadius: 2, background: ok ? "#22c55e" : "#ef4444" }} />
                  ))}
                </div>
              </div>
              <span style={{ color: l.color, fontWeight: 600 }}>{l.text}</span>
            </div>
          );
        })}
      </div>
      <p style={{ marginTop: 28, fontSize: 13, color: "#6b7280" }}>
        Incidentes y mantenimientos se comunican por correo a los administradores de cada organización. Contacto: soporte@mekovault.com.
      </p>
    </main>
  );
}
