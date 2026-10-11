/** Datos estructurados (schema.org) en JSON-LD. Se usa desde componentes de servidor. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify escapa lo necesario; `<` se neutraliza para que no cierre el script.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
