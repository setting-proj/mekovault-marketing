import Link from "@/components/Link";

export const title = "Privacy Policy";
export const description = "How Mekovault processes personal data.";

export default function Body() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="text-sm text-muted-foreground">
        Translation for reference. The Spanish version is the binding one.
      </p>
      <p className="text-sm text-muted-foreground">Effective: 2026</p>

      <h2>1. Controller</h2>
      <p>
        Mekovault SpA, domiciled in Santiago, Chile, is responsible for the
        processing of personal data of website users and platform customers.
      </p>

      <h2>2. Data we process</h2>
      <ul>
        <li>Contact data: first name, last name, corporate email.</li>
        <li>Organization data: name, slug, time zone, country.</li>
        <li>
          Usage data: actions performed on the portal (for the immutable audit
          log), IP addresses, user-agent.
        </li>
        <li>
          Connected directory data: the information the Customer manages
          through Mekovault (users, groups, roles), where we act as data
          processors.
        </li>
      </ul>

      <h2>3. Purposes</h2>
      <ul>
        <li>Providing the contracted service.</li>
        <li>Complying with legal and billing obligations.</li>
        <li>Internal and external auditing.</li>
        <li>Transactional and service communications.</li>
      </ul>

      <h2>4. Legal basis</h2>
      <p>
        The main legal basis is the performance of the agreement with the
        Customer and compliance with applicable legal obligations.
      </p>

      <h2>5. Disclosure to third parties</h2>
      <p>
        We share data only with the sub-processors required to operate the
        service. See{" "}
        <Link href="/legal/sub-processors">Sub-processors</Link>.
      </p>

      <h2>6. International transfers</h2>
      <p>
        Mekovault’s infrastructure is hosted in data centers located in the
        Americas. Customer data is not transferred to third countries without
        equivalent contractual clauses.
      </p>

      <h2>7. Retention</h2>
      <ul>
        <li>Tenant audit log: 18 months.</li>
        <li>Platform audit log: 5 years.</li>
        <li>Suspended accounts: 90 days before complete purge.</li>
      </ul>

      <h2>8. Data subject rights</h2>
      <p>
        In compliance with <strong>Ley 21.719 (Chile)</strong> (Personal Data
        Protection) and the <strong>General Data Protection Regulation
        (GDPR)</strong>, data subjects may exercise the following rights:
      </p>
      <ul>
        <li>
          <strong>Access</strong>: request a copy of the personal data we
          process.
        </li>
        <li>
          <strong>Rectification</strong>: correct inaccurate or incomplete
          data.
        </li>
        <li>
          <strong>Cancellation / Erasure (right to erasure)</strong>: request
          the deletion of your personal data from our systems and from our
          sub-processors.
        </li>
        <li>
          <strong>Objection</strong>: object to the processing on legitimate
          grounds.
        </li>
        <li>
          <strong>Portability</strong>: receive your data in a structured,
          commonly used format.
        </li>
      </ul>
      <p>
        <strong>How to exercise them:</strong> write to{" "}
        <a href="mailto:privacidad@mekovault.com">privacidad@mekovault.com</a>{" "}
        or use your organization’s portal at{" "}
        <code>app.mekovault.com/&lt;tenant&gt;/privacy</code>. If you are an
        external person (you do not have a Mekovault account) you may also
        write to the email address above.
      </p>
      <p>
        <strong>Response time:</strong> in accordance with Ley 21.719, we
        handle every request within <strong>25 business days</strong> of
        receipt. In cases of exceptional complexity we may extend the period by
        another 25 days, notifying the data subject.
      </p>
      <p>
        <strong>Documented exceptions:</strong> some data must be preserved due
        to legal obligations (tax invoicing, audit logs of administrative
        actions, backups with object lock for ransomware protection). In those
        cases we anonymize identifying data within 90 days of the request and
        delete it completely once the minimum legal retention period expires.
      </p>

      <h2>9. Security</h2>
      <p>
        We implement encryption in transit (TLS 1.3), multi-tenant isolation
        with Row-Level Security in PostgreSQL, and a dedicated vault per tenant
        (Infisical). Secrets never leave the vault in plain text.
      </p>

      <h2>10. Contact</h2>
      <p>
        Data Protection Officer:{" "}
        <a href="mailto:privacidad@mekovault.com">privacidad@mekovault.com</a>.
      </p>
    </>
  );
}
