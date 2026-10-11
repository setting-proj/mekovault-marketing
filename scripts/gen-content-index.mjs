#!/usr/bin/env node
/**
 * Genera lib/content/recursos/index.generated.ts a partir de los archivos
 * lib/content/recursos/<slug>[.<locale>].tsx. Cada guía puede tener variantes
 * por idioma (es-AR, es-MX, es-ES, en, pt); la base es español de Chile.
 *
 * Uso: node scripts/gen-content-index.mjs  (se corre antes de `next build`).
 */
import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIR = join(process.cwd(), "lib", "content", "recursos");
const LOCALE_SUFFIX = { "es-AR": "es-AR", "es-MX": "es-MX", "es-ES": "es-ES", "en-US": "en", "pt-BR": "pt" };

const files = readdirSync(DIR).filter((f) => f.endsWith(".tsx"));
const entries = new Map(); // slug -> { "es-CL": file, "en-US": file, ... }
for (const f of files) {
  const base = f.replace(/\.tsx$/, "");
  const m = base.match(/^(.*?)\.(es-AR|es-MX|es-ES|en|pt)$/);
  const slug = m ? m[1] : base;
  const locale = m ? Object.keys(LOCALE_SUFFIX).find((k) => LOCALE_SUFFIX[k] === m[2]) : "es-CL";
  if (!entries.has(slug)) entries.set(slug, {});
  entries.get(slug)[locale] = base;
}

let imports = "";
let body = "export const CONTENT_BY_LOCALE: Record<string, Partial<Record<Locale, ResourceContent>>> = {\n";
let i = 0;
for (const [slug, byLocale] of [...entries.entries()].sort()) {
  body += `  ${JSON.stringify(slug)}: {\n`;
  for (const [locale, file] of Object.entries(byLocale)) {
    const id = `m${i++}`;
    imports += `import * as ${id} from "./${file}";\n`;
    body += `    ${JSON.stringify(locale)}: ${id} as unknown as ResourceContent,\n`;
  }
  body += "  },\n";
}
body += "};\n";

const out = `// Archivo generado por scripts/gen-content-index.mjs. No editar a mano.
import type { Locale } from "@/lib/i18n/routing";
import type { ResourceContent } from "./types";

${imports}
${body}`;
writeFileSync(join(DIR, "index.generated.ts"), out);
console.log(`content index: ${entries.size} guías, ${files.length} archivos`);
