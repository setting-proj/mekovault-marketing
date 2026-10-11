import Link from "@/components/Link";

export const title = "Security Policies · Mekovault";
export const description =
  "How Mekovault protects directory credentials, isolates tenants and audits every use of the Google Workspace Service Account.";

export default function Body() {
  return (
    <>
      <h1>Security Policies</h1>
      <p className="text-sm text-muted-foreground">
        Translation for reference. The Spanish version is the binding one.
      </p>
      <p className="text-sm text-muted-foreground">
        Effective: 2026 · Last review: August 31, 2026
      </p>

      <p>
        Mekovault manages the identity lifecycle in Google Workspace and in
        other platforms that may be connected in the future. To work, it
        receives highly sensitive credentials (Service Accounts with
        administration permissions). This document describes how we store
        them, how we use them, and how the Customer can audit every use.
      </p>

      <p>
        It is written as a reference for security teams, auditors and
        enterprise buyers. It supplements, and does not replace, the{" "}
        <Link href="/legal/privacy">Privacy Policy</Link>, the{" "}
        <Link href="/legal/terms">Terms</Link> and the{" "}
        <Link href="/legal/dpa">DPA</Link>.
      </p>

      <h2>1. Scope</h2>
      <p>
        These policies apply to every credential the Customer provides to
        Mekovault to operate on its corporate directory, including but not
        limited to:
      </p>
      <ul>
        <li>
          <strong>Google Workspace:</strong> Service Account JSON file with
          Domain-Wide Delegation.
        </li>
        <li>
          Any other integration credential for other platforms, people systems
          or directories that Mekovault may support in the future.
        </li>
      </ul>

      <h2>2. Storage architecture</h2>

      <h3>2.1 Physical separation of secrets and metadata</h3>
      <p>
        No credential is stored in Mekovault’s relational database. The
        architecture separates two planes:
      </p>
      <ul>
        <li>
          <strong>Metadata plane (PostgreSQL, host <code>mekovault-data</code>):</strong>{" "}
          stores only a pointer to the secret (the key name inside the vault),
          the provider, the primary domain, timestamps and the results of the
          last <em>health check</em>. Row-Level Security by{" "}
          <code>company_id</code>.
        </li>
        <li>
          <strong>Secrets plane (Infisical, host <code>mekovault-vault</code>):</strong>{" "}
          self-hosted instance of{" "}
          <a href="https://infisical.com/" target="_blank" rel="noopener noreferrer">
            Infisical
          </a>{" "}
          on a private Tailscale network, not exposed to the public Internet.
          It contains the actual values (for example, the complete Service
          Account JSON).
        </li>
      </ul>
      <p>
        A bug or compromise of the metadata service does not expose
        credentials: the secrets require separate authentication against
        Infisical through a distinct machine identity.
      </p>

      <h3>2.2 Per-tenant isolation (hard multi-tenancy)</h3>
      <p>
        Each tenant receives <strong>a dedicated Infisical project</strong>{" "}
        (example: <code>setting-cl-415514</code>,{" "}
        <code>mmglatam-com-872039</code>). Secrets are never shared.
        Consequence:
      </p>
      <ul>
        <li>
          The blast radius of any failure in Mekovault’s code that builds the
          project reference incorrectly is limited to the same tenant: it
          cannot read, list or touch secrets of other customers.
        </li>
        <li>
          Infisical’s access policies reject requests to projects for which
          Mekovault’s machine identity has no permission, even if it knows
          them by name.
        </li>
      </ul>

      <h3>2.3 Encryption</h3>
      <ul>
        <li>
          <strong>In transit:</strong> TLS 1.2+ mandatory on all connections
          (portal HTTPS, PostgreSQL with SSL, Mekovault → Infisical channel,
          Mekovault → Google channel). We do not accept unencrypted
          connections.
        </li>
        <li>
          <strong>At rest:</strong> secrets are encrypted in Infisical with the
          vault’s master key (AES-256-GCM); the vault volume is encrypted at
          disk level (LUKS / EBS encryption). PostgreSQL runs with disk
          encryption.
        </li>
        <li>
          <strong>Service key rotation:</strong> JWT signing keys and the
          credentials of the Infisical machine identity are rotated at least
          every 12 months and upon any suspected compromise event.
        </li>
      </ul>

      <h3>2.4 Network and perimeter</h3>
      <ul>
        <li>
          All backend machines (<code>mekovault-app</code>,{" "}
          <code>mekovault-data</code>, <code>mekovault-obs</code>,{" "}
          <code>mekovault-vault</code>) are connected through Tailscale over
          WireGuard.
        </li>
        <li>
          <strong><code>mekovault-vault</code> has no public IP and no port
          open to the Internet.</strong> It only listens on the private
          Tailscale interface. It cannot be reached directly even from the
          public frontend (Vercel).
        </li>
        <li>
          Administrative access by the Mekovault team requires Tailscale with
          MFA plus a managed SSH key. No personal root SSH credentials on any
          host.
        </li>
      </ul>

      <h2>3. Use of credentials</h2>

      <h3>3.1 Least privilege in the request</h3>
      <p>
        When connecting the directory, Mekovault requests exactly the scopes
        it needs, not one more. We publish the full list in the connection
        Wizard guide and reproduce it here:
      </p>

      <h4>Google Workspace: Domain-Wide Delegation</h4>
      <ul>
        <li>
          <code>admin.directory.user</code>: create, suspend, reactivate and
          modify users.
        </li>
        <li>
          <code>admin.directory.user.security</code>: password reset and
          termination of active sessions (SSO revocation).
        </li>
        <li>
          <code>admin.directory.orgunit</code>: move users between OUs during
          onboarding/offboarding.
        </li>
        <li>
          <code>admin.directory.group</code>: create/delete groups and
          distribution lists.
        </li>
        <li>
          <code>admin.directory.group.member</code>: add/remove group members.
        </li>
        <li>
          <code>admin.directory.domain.readonly</code>: read-only access to
          the list of domains (to validate that the SA operates on the correct
          domain).
        </li>
        <li>
          <code>admin.directory.customer.readonly</code>: read-only access to
          the Google customer account data (for aggregated reports).
        </li>
      </ul>
      <p>
        <strong>We do not request:</strong> access to Gmail (Mail scopes),
        Drive, Calendar, Chat, or any user content data. Mekovault does not
        read emails or files.
      </p>

      <h4>Other platforms</h4>
      <p>
        When a new platform is connected, we will publish in this same section
        the exact list of permissions it requests before it becomes available
        to Customers. The criterion is the same: only account administration
        permissions, never access to people’s content.
      </p>

      <h3>3.2 Never in logs, never outside the process</h3>
      <ul>
        <li>
          The adapters load the secret into memory right before calling the
          external provider and discard it when the request ends.
        </li>
        <li>
          The structured logger automatically filters any field whose name
          contains <code>password</code>, <code>secret</code>,{" "}
          <code>token</code>, <code>key</code> or <code>credential</code>. Log
          entries show the truncated hash of the <em>request-id</em> but never
          the content of the secret.
        </li>
        <li>
          There are no vault backups in unencrypted external storage.
          Snapshots are encrypted with the same vault master key.
        </li>
      </ul>

      <h2>4. Auditing of every use</h2>

      <h3>4.1 Immutable log <code>credential_usage_log</code></h3>
      <p>
        Every time Mekovault performs an operation on the Customer’s directory
        with the stored credentials, a record is persisted in the{" "}
        <code>credential_usage_log</code> table with:
      </p>
      <ul>
        <li>
          <strong>Who:</strong> ID and email of the Mekovault user (or
          worker/scheduler identifier) that originated the operation.
        </li>
        <li>
          <strong>Why:</strong> mandatory human-readable purpose (example:{" "}
          <em>“Onboarding user@empresa.cl via ticket #4213”</em>,{" "}
          <em>“Nightly health check”</em>,{" "}
          <em>“Bulk deprovision batch #123”</em>).
        </li>
        <li>
          <strong>What:</strong> exact operation (<code>create_user</code>,{" "}
          <code>suspend_user</code>, <code>reset_password</code>,{" "}
          <code>add_group_member</code>, etc.).
        </li>
        <li>
          <strong>Which scopes:</strong> list of OAuth scopes / Application
          permissions consumed.
        </li>
        <li>
          <strong>On which resource:</strong> user email, group, OU, or other
          identifier (without sensitive content data).
        </li>
        <li>
          <strong>Result:</strong> success / failure / partial,{" "}
          <code>error_code</code>, <code>error_message</code>,{" "}
          <code>duration_ms</code>, <code>request_id</code> to correlate with
          nginx.
        </li>
        <li>
          <strong>When:</strong> UTC timestamp with millisecond precision.
        </li>
      </ul>

      <h3>4.2 Immutability</h3>
      <p>
        The table has PostgreSQL <em>triggers</em> that reject any{" "}
        <code>UPDATE</code> and <code>DELETE</code>. Not even the Mekovault
        team with root access can modify an individual record. The only way to
        purge is the <em>retention worker</em> with explicit published rules
        (minimum retention of 24 months, configurable per Customer up to 84,
        or until the tenant is deleted, whichever comes first), which runs
        with <code>SECURITY DEFINER</code> and records the purged batch.
      </p>

      <h3>4.3 Visibility for the Customer</h3>
      <p>
        Every tenant admin can view the log at:
      </p>
      <ul>
        <li>
          <code>https://app.mekovault.com/&lt;your-slug&gt;/admin/credential-usage</code>
        </li>
      </ul>
      <p>
        Filters by provider, result, operation, date range and actor. The
        query uses Row-Level Security by <code>company_id</code>: each tenant
        sees exclusively its own records.
      </p>
      <p>
        Scheduled signed CSV/JSON export for external auditors is planned for
        Milestone 7. In the meantime, it can be requested on demand by writing
        to <a href="mailto:soporte@mekovault.com">soporte@mekovault.com</a>.
      </p>

      <h3>4.4 Correlation with the audit system</h3>
      <p>
        <code>credential_usage_log</code> is specific to calls to the external
        directory. There is a second table,{" "}
        <code>audit_events</code>, which records human actions inside the
        portal (login, ticket approval, role creation, etc.). Both share{" "}
        <code>request_id</code> to reconstruct a complete chain: <em>“admin X
        approved ticket Y, which triggered operation Z on user W in Google,
        with scope A, result B”</em>.
      </p>

      <h2>5. Internal access control (Mekovault staff)</h2>
      <ul>
        <li>
          Administrative access to the hosts requires Tailscale with MFA and a
          personal SSH key. There are no shared accounts.
        </li>
        <li>
          No member of the Mekovault team needs, or has by default, the ability
          to decrypt a Customer’s individual secrets in order to operate the
          platform.
        </li>
        <li>
          Access to the Infisical vault is restricted to members of the
          platform team. Policy changes are recorded in Infisical’s internal
          audit.
        </li>
        <li>
          Access to the production database is done through named accounts
          with RLS enabled. The <code>mekovault_superadmin</code> account
          (BYPASSRLS) has restricted use and leaves records in{" "}
          <code>audit_events</code>.
        </li>
      </ul>

      <h2>6. Incident response</h2>
      <ul>
        <li>
          Notification to the affected Customer within <strong>72 hours</strong>{" "}
          of confirming an incident involving its personal data or its
          credentials (GDPR art. 33, Ley 21.719 Chile art. 33).
        </li>
        <li>
          Forced rotation of all credentials of the affected tenant and
          revocation of the connection: the Customer must reconnect the
          directory with a new Service Account (we do not reuse the
          compromised one).
        </li>
        <li>
          Post-mortem report to the Customer with the timeline, scope,
          countermeasures and lessons learned.
        </li>
        <li>
          Responsible vulnerability disclosure channel:{" "}
          <a href="mailto:security@mekovault.com">security@mekovault.com</a>.
          We respond within ≤ 48 business hours.
        </li>
      </ul>

      <h2>7. Exercise of rights and portability</h2>
      <p>
        If the Customer terminates the service or requests complete deletion
        of its data:
      </p>
      <ul>
        <li>
          Deletion of the Infisical project (atomically deletes all of the
          tenant’s secrets).
        </li>
        <li>
          Cascading deletion of the tenant’s rows in PostgreSQL, including the
          connection and the identity catalog.
        </li>
        <li>
          The tenant’s <code>credential_usage_log</code> is kept until the
          tenant is deleted or for 24 months, whichever comes first (Ley
          21.719 art. 12, GDPR art. 30). When the tenant is deleted, it is
          removed together with the rest of its data; Mekovault keeps only its
          own record with counters and no personal data. The Customer may
          request its pseudonymous hash beforehand if its internal policy
          requires it.
        </li>
      </ul>

      <h2>8. Reference frameworks</h2>
      <p>
        We align the practices described above with:
      </p>
      <ul>
        <li>
          <strong>SOC 2 Type II</strong>: controls CC6 (access), CC7
          (monitoring), CC8 (change management). No certification planned for
          now: we use the framework as a guide for controls, not as a promise
          of audit.
        </li>
        <li>
          <strong>ISO/IEC 27001</strong>: controls A.5 (information), A.8
          (assets), A.9 (access), A.12 (operations), A.16 (incidents).
        </li>
        <li>
          <strong>GDPR (EU 2016/679)</strong>: arts. 25 (privacy by design),
          30 (records of processing activities), 32 (security of processing),
          33 (notification).
        </li>
        <li>
          <strong>Ley 21.719 (Chile)</strong>: arts. 12 (records of
          activities), 33 (breach notification), 34 (security measures).
        </li>
        <li>
          <strong>Google Workspace</strong>: terms of use of the{" "}
          <em>Admin SDK Directory API</em> and of the Marketplace program.
        </li>
      </ul>

      <h2>9. Questions and contact</h2>
      <p>
        Security teams of current or prospective Customers may request:
      </p>
      <ul>
        <li>
          A copy of our signable <em>DPA</em> (Data Processing Agreement).
        </li>
        <li>
          Security questionnaire (CAIQ, VSA, SIG Lite): we answer within ≤ 5
          business days.
        </li>
        <li>
          Evidence of internal audits and pen-testing reports (under NDA).
        </li>
      </ul>
      <p>
        Write to us at{" "}
        <a href="mailto:security@mekovault.com">security@mekovault.com</a> or
        contact us through{" "}
        <Link href="/contact">the contact form</Link>.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We publish the date of the last review in the header. Material changes
        (for example, new requested scopes, changes to the retention model)
        are communicated 30 days in advance by email to the tenant
        administrators and are reflected in the site’s public history.
      </p>

      <p className="text-xs text-muted-foreground">
        This document describes operational controls and does not constitute
        formal certification. For current or in-progress certifications, see
        the Trust Center (coming soon at{" "}
        <code>trust.mekovault.com</code>) or request it through{" "}
        <a href="mailto:security@mekovault.com">security@mekovault.com</a>.
      </p>
    </>
  );
}
