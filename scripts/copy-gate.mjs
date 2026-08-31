#!/usr/bin/env node
/**
 * Copy gate — auditor de tell-tales de mal copy en el sitio.
 *
 * Basado en la lección de 10k-websites (design-package.md §9):
 *   "zero em dashes, zero stock words, plus the body-copy sweep for AI tells"
 *
 * Sale con exit 1 si encuentra hits — pensado para pre-commit / CI.
 * Uso: `node scripts/copy-gate.mjs` (o `npm run copy:gate`).
 */

import { readFileSync } from "node:fs";
import { globSync } from "node:fs";
import { relative } from "node:path";

// ============================================================================
// Rules
// ============================================================================
const RULES = [
  {
    id: "em-dash",
    label: "Em dash (—)",
    hint: "Usar coma o punto en su lugar. Ejemplo: 'rápido, seguro y auditado'.",
    // El em dash Unicode U+2014
    pattern: /—/g,
  },
  {
    id: "stock-word",
    label: "Stock word (jerga de marketing vacía)",
    hint: "Reemplazar con un verbo concreto o borrar. Vacío contra vacío no gana.",
    pattern: new RegExp(
      "\\b(" +
        [
          // Overused en tech marketing
          "seamless(?:ly)?",
          "robust",
          "empower(?:ing|ed)?",
          "revolutionary",
          "cutting[- ]edge",
          "next[- ]gen(?:eration)?",
          "state[- ]of[- ]the[- ]art",
          "world[- ]class",
          "best[- ]in[- ]class",
          "game[- ]chang(?:er|ing)",
          "synerg(?:y|ies|istic)",
          "leverage(?!s? the [a-z]+ api\\b)", // permite "leverage the X API" (técnico)
          "unlock",
          "unleash",
          "supercharge",
          "turbo[- ]charge",
          "one[- ]stop[- ]shop",
          "solution(?:s)? provider",
          "mission[- ]critical",
          // ES equivalentes
          "sin[ -]?fisuras",
          "de[ -]clase[ -]mundial",
          "innovador(?:a|es)?",
          "rompedor(?:a|es)?",
          "vanguardia",
          "único\\s+en\\s+su\\s+clase",
        ].join("|") +
        ")\\b",
      "gi"
    ),
  },
  {
    id: "ai-tell",
    label: "AI tell (frase que huele a LLM)",
    hint: "Reescribir con voz propia. Estas frases son marca registrada de asistente.",
    pattern: new RegExp(
      "\\b(" +
        [
          "delve\\s+into",
          "dive\\s+deep(?:er)?",
          "tapestry\\s+of",
          "in\\s+today'?s\\s+(?:fast[- ]paced|ever[- ]evolving|dynamic)\\s+world",
          "embark\\s+on\\s+(?:a|this|your)\\s+journey",
          "at\\s+the\\s+forefront\\s+of",
          "it'?s\\s+important\\s+to\\s+note",
          "in\\s+the\\s+realm\\s+of",
          "the\\s+world\\s+of\\s+identity",
          "navigate\\s+the\\s+complex(?:ities)?\\s+of",
          "landscape\\s+of\\s+(?:modern|today'?s)",
          "harness\\s+the\\s+power",
          "unleash\\s+the\\s+power",
          "revolutionize\\s+the\\s+way",
          // ES tells
          "sumergirse\\s+en",
          "sumergirte\\s+en",
          "en\\s+el\\s+mundo\\s+actual",
          "en\\s+la\\s+era\\s+digital",
          "en\\s+el\\s+panorama\\s+actual",
          "en\\s+un\\s+mundo\\s+cada\\s+vez\\s+más",
        ].join("|") +
        ")\\b",
      "gi"
    ),
  },
];

// ============================================================================
// Files to audit
// ============================================================================
const GLOBS = [
  "app/**/*.{tsx,ts,mdx,md}",
  "components/**/*.{tsx,ts}",
  "lib/i18n/**/*.{ts,json}",
];

const EXCLUDES = [
  /node_modules/,
  /\.next\//,
  /out\//,
  /copy-gate\.mjs$/, // este mismo archivo
];

function collectFiles() {
  const seen = new Set();
  for (const pat of GLOBS) {
    for (const f of globSync(pat, { cwd: process.cwd() })) {
      if (EXCLUDES.some((rx) => rx.test(f))) continue;
      seen.add(f);
    }
  }
  return [...seen].sort();
}

// ============================================================================
// Audit
// ============================================================================
function auditFile(path) {
  const source = readFileSync(path, "utf8");
  const hits = [];
  const lines = source.split(/\r?\n/);
  for (const rule of RULES) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const matches = [...line.matchAll(rule.pattern)];
      for (const m of matches) {
        hits.push({
          rule: rule.id,
          label: rule.label,
          hint: rule.hint,
          line: i + 1,
          col: (m.index ?? 0) + 1,
          match: m[0],
          snippet: line.trim().slice(0, 160),
        });
      }
    }
  }
  return hits;
}

// ============================================================================
// Run
// ============================================================================
const files = collectFiles();
let totalHits = 0;
const hitsByRule = new Map();

for (const f of files) {
  const hits = auditFile(f);
  if (hits.length === 0) continue;
  for (const h of hits) {
    totalHits++;
    hitsByRule.set(h.rule, (hitsByRule.get(h.rule) ?? 0) + 1);
    console.log(
      `${relative(process.cwd(), f)}:${h.line}:${h.col}  [${h.rule}]  ${h.match}\n    ${h.snippet}`
    );
  }
}

console.log("\n" + "=".repeat(60));
if (totalHits === 0) {
  console.log("copy-gate: ✅ 0 hits. Copy limpio.");
  process.exit(0);
}
console.log(`copy-gate: ❌ ${totalHits} hit(s) en ${files.length} archivos.`);
for (const [rule, n] of hitsByRule) {
  console.log(`  · ${rule}: ${n}`);
}
console.log(
  "Reglas basadas en la lección 10k-websites (design-package.md §9)."
);
process.exit(1);
