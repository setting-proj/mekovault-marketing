/**
 * Plataformas que Mekovault administra o va a administrar.
 *
 * REGLA DE HONESTIDAD (plan del producto, D12): una plataforma pasa a "today"
 * solo cuando su conector está en producción y probado con una cuenta real.
 * Mientras tanto es "soon". "guided" = la plataforma no permite automatizar
 * la baja (o solo en su plan más caro): Mekovault organiza la tarea con un
 * responsable y evidencia.
 *
 * Cuando exista el catálogo de conectores en la API
 * (`apps_connector_catalog`, fase F0 del plan), esta lista se reemplaza por
 * ese origen con este archivo como respaldo, igual que `lib/catalog.ts`.
 */

export type PlatformStatus = "today" | "soon" | "guided";

export interface Platform {
  name: string;
  status: PlatformStatus;
}

export const PLATFORMS: Platform[] = [
  { name: "Google Workspace", status: "today" },
  { name: "Microsoft 365", status: "today" },

  { name: "Jira y Confluence", status: "soon" },
  { name: "Slack", status: "soon" },
  { name: "Zoom", status: "soon" },
  { name: "GitHub", status: "soon" },
  { name: "HubSpot", status: "soon" },
  { name: "Pipedrive", status: "soon" },
  { name: "Salesforce", status: "soon" },
  { name: "Zendesk", status: "soon" },
  { name: "monday.com", status: "soon" },
  { name: "Asana", status: "soon" },
  { name: "Dropbox", status: "soon" },
  { name: "DocuSign", status: "soon" },
  { name: "Zoho", status: "soon" },
  { name: "1Password", status: "soon" },
  { name: "Webdox", status: "soon" },

  { name: "Notion", status: "guided" },
  { name: "Figma", status: "guided" },
  { name: "Canva", status: "guided" },
  { name: "Adobe Creative Cloud", status: "guided" },
  { name: "ChatGPT", status: "guided" },
  { name: "Defontana", status: "guided" },
  { name: "Nubox", status: "guided" },
  { name: "Softland", status: "guided" },
];

/** Sistemas de personas: no se administran, avisan ingresos y salidas. */
export const HR_SOURCES: Platform[] = [
  { name: "Buk", status: "soon" },
  { name: "Talana", status: "soon" },
  { name: "GeoVictoria", status: "soon" },
];
