/**
 * ¿Bloquear una cuenta deja de cobrarla? Hechos por plataforma.
 *
 * REGLA: aquí entra SOLO lo verificado en la documentación pública del proveedor
 * (investigación del 2026-09-20; detalle y enlaces en MEKOVAULT_EXPANSION_SAAS.md §3,
 * en el workspace de Jorge). Lo que quedó "sin verificar" NO se publica: mejor una
 * tabla más corta que una afirmación falsa sobre el cobro de un tercero.
 * Al agregar o cambiar una fila, agrega su fuente.
 *
 * `effect`:
 *   auto        → al desactivar o quitar a la persona, el cobro baja solo.
 *   next_cycle  → hay que liberar el asiento Y reducir la cantidad contratada; rige desde el
 *                 próximo ciclo de cobro (en planes anuales, en la renovación).
 *   renewal     → lo mismo, pero la reducción solo rige en la renovación del contrato.
 *   google      → suspender no basta: eliminar o archivar (plan flexible) o esperar la renovación.
 */

export type BillingEffect = "auto" | "next_cycle" | "renewal" | "google";

export interface BillingFact {
  platform: string;
  /** Aclaración traducible: "monthly" → "plan mensual". */
  qualifier?: "monthly";
  /** ¿Bloquear o suspender la cuenta, por sí solo, deja de cobrarla? */
  blockStopsBilling: boolean;
  effect: BillingEffect;
  source: string;
}

export const BILLING_FACTS: BillingFact[] = [
  {
    platform: "Google Workspace",
    blockStopsBilling: false,
    effect: "google",
    source: "https://knowledge.workspace.google.com/admin/users/suspend-a-user-temporarily",
  },
  {
    platform: "Slack",
    blockStopsBilling: true,
    effect: "auto",
    source: "https://slack.com/help/articles/218915077-Slacks-Fair-Billing-Policy",
  },
  {
    platform: "Jira · Confluence",
    qualifier: "monthly",
    blockStopsBilling: true,
    effect: "auto",
    source: "https://support.atlassian.com/user-management/docs/deactivate-a-managed-account/",
  },
  {
    platform: "1Password",
    blockStopsBilling: true,
    effect: "auto",
    source: "https://support.1password.com/membership-billing-policy/",
  },
  {
    platform: "Zoom",
    blockStopsBilling: false,
    effect: "next_cycle",
    source: "https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0057881",
  },
  {
    platform: "GitHub Team",
    blockStopsBilling: false,
    effect: "next_cycle",
    source: "https://docs.github.com/en/billing/concepts/impact-of-plan-changes",
  },
  {
    platform: "HubSpot",
    blockStopsBilling: false,
    effect: "next_cycle",
    source: "https://knowledge.hubspot.com/account-management/manage-seats",
  },
  {
    platform: "Pipedrive",
    blockStopsBilling: false,
    effect: "next_cycle",
    source: "https://support.pipedrive.com/en/article/what-happens-to-my-billing-when-i-deactivate-a-user-in-pipedrive",
  },
  {
    platform: "Zendesk",
    blockStopsBilling: false,
    effect: "next_cycle",
    source: "https://support.zendesk.com/hc/en-us/articles/4408888690842",
  },
  {
    platform: "Dropbox Business",
    blockStopsBilling: false,
    effect: "renewal",
    source: "https://help.dropbox.com/plans/add-licenses-or-space",
  },
  {
    platform: "Salesforce",
    blockStopsBilling: false,
    effect: "renewal",
    source: "https://help.salesforce.com/s/articleView?id=sf.users_your_account_manage_renewals.htm&type=5",
  },
  {
    platform: "Adobe Creative Cloud Teams",
    blockStopsBilling: false,
    effect: "renewal",
    source:
      "https://helpx.adobe.com/business/teams/setup-and-onboarding/manage-your-account/manage-teams-licenses-during-the-renewal-window.html",
  },
];
