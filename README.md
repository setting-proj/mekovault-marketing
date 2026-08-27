# Mekovault Marketing Site

Sitio web público de **mekovault.com** — landing, producto, planes, empresa, contacto y páginas legales. Estáticamente renderizado con Next.js 15 + Tailwind 4, listo para deploy en Vercel.

Este repo **no incluye el portal**. El portal vive en `apps/web/` del monorepo, y desde este sitio los CTAs redirigen a `https://app.mekovault.com`.

## Stack

- **Next.js 15** (App Router) + React 19
- **Tailwind CSS 4** (CSS-first, sin config file — todo en `app/globals.css`)
- **@tailwindcss/typography** para las páginas legales (`prose`)
- **lucide-react** para íconos
- TypeScript estricto

## Estructura

```
app/
  layout.tsx                # Header + Footer + Inter font
  page.tsx                  # Landing (hero, features, servicios, CTA)
  products/page.tsx         # 10 servicios (7 available, 2 roadmap)
  pricing/page.tsx          # 4 planes destacados + FAQ
  about/page.tsx            # Historia, misión, enfoque
  contact/page.tsx          # Contacto + form vía mailto
  legal/
    layout.tsx              # Sidebar de navegación legal
    terms/page.tsx
    privacy/page.tsx
    aup/page.tsx
    cookies/page.tsx
    sub-processors/page.tsx
  sitemap.ts                # Sitemap.xml dinámico
  robots.ts                 # robots.txt
  not-found.tsx             # 404 propia
  icon.svg                  # Favicon como App Icon
  globals.css               # Design tokens (paleta oceánica) + utilities

components/
  Header.tsx                # Nav fijo + CTAs
  Footer.tsx                # 4 columnas + copyright
  Logo.tsx                  # Isotipo + wordmark
  Container.tsx             # Wrapper de ancho
  Button.tsx                # Button + LinkButton (variants)
  Section.tsx               # Section + SectionHeading + EyebrowBadge

public/
  favicon.svg
```

## Paleta de diseño

Consistente con el portal (`apps/web`) del monorepo:

| Token       | Hex       | Uso                             |
| ----------- | --------- | ------------------------------- |
| brand-navy  | `#03045e` | Fondo dark, texto en light      |
| brand-deep  | `#0077b6` | Primary en light                |
| brand-cyan  | `#00b4d8` | Accent / primary en dark        |
| brand-sky   | `#90e0ef` | Surfaces suaves                 |
| brand-mist  | `#caf0f8` | Backgrounds muy suaves          |

## Correr local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build
```

## Deploy en Vercel

**Opción 1 — CLI (más rápido):**

```bash
npm install -g vercel
vercel                     # primera vez: linkea el proyecto
vercel --prod              # deploy productivo
```

**Opción 2 — Dashboard:**

1. Sube el proyecto a GitHub.
2. En [vercel.com/new](https://vercel.com/new) → "Import Project" → seleccioná el repo.
3. Framework preset: **Next.js** (autodetecta).
4. Root directory: `/` (o `mekovault-marketing/` si está en subcarpeta).
5. Build command: `next build` (default). Install: `npm install`.
6. Environment vars: **ninguna** — el sitio es 100% estático.
7. Click **Deploy**.

**Dominio custom:** en Settings → Domains → agregá `mekovault.com`. Vercel te da los DNS records para actualizar en Cloudflare.

## Redirecciones

Configuradas en [`vercel.json`](./vercel.json):

- `/app`, `/login`, `/signup` → `https://app.mekovault.com/...`
- Otros redirects se agregan ahí.

## Consistencia con el portal

El sitio comparte:

- Paleta de colores idéntica (variables CSS).
- Tipografía Inter para todo.
- Isotipo Mekovault (escudo con checkmark).
- Componentes visuales (feature cards, CTA gradient, mock dashboard).

## Editor de contenido

Todo el contenido vive **en las páginas TSX**. Para textos legales largos, escribí en `<p>` normales dentro del layout `legal/layout.tsx` — el `prose` de tailwind typography aplica los estilos.
