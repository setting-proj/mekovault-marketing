import Link from "@/components/Link";

export const title = "Data Processing Agreement (DPA)";
export const description =
  "Data Processing Agreement template: complies with GDPR Art. 28 and Ley 21.719 (Chile).";

export default function Body() {
  return (
    <>
      <h1>Data Processing Agreement (DPA)</h1>
      <p className="text-sm text-muted-foreground">
        Translation for reference. The Spanish version is the binding one.
      </p>
      <p className="text-sm text-muted-foreground">
        Version 1.0 · Effective: 2026 · This document is a reference{" "}
        <strong>template</strong>. To operate with a customer, we sign it as an
        annex to the service agreement.
      </p>

      <h2>1. Parties</h2>
      <ul>
        <li>
          <strong>Data Processor</strong>: Mekovault SpA, Santiago, Chile.
        </li>
        <li>
          <strong>Data Controller</strong>: the Customer that contracts
          Mekovault’s services.
        </li>
      </ul>

      <h2>2. Subject matter</h2>
      <p>
        This DPA governs the processing of personal data that Mekovault
        performs <em>on behalf of and in the name of the Customer</em> as a
        result of providing the services (management of corporate identities
        in Google Workspace and other platforms).
      </p>

      <h2>3. Categories of data processed</h2>
      <ul>
        <li>
          <strong>Customer employees</strong>: first name, last name, corporate
          email, job title, department, manager, assigned permissions, session
          IP and user-agent.
        </li>
        <li>
          <strong>External requesters</strong> (public form): email, name,
          reason for the request.
        </li>
        <li>
          <strong>Activity records</strong>: immutable audit log of all
          administrative actions performed on the Customer’s identities.
        </li>
      </ul>

      <h2>4. Duration</h2>
      <p>
        For the duration of the service agreement. Upon termination, Mekovault
        deletes the Customer’s data within a maximum of 30 calendar days,
        except where legal retention obligations apply (tax invoicing, platform
        audit logs).
      </p>

      <h2>5. Obligations of Mekovault (Processor)</h2>
      <ul>
        <li>
          Process the data only in accordance with the Customer’s documented
          instructions.
        </li>
        <li>
          Apply appropriate technical and organizational measures: TLS 1.3
          encryption in transit, multi-tenant isolation with Row-Level Security
          in PostgreSQL, a dedicated vault per Customer in Infisical, AES-256
          encrypted backups in Backblaze B2 with object lock.
        </li>
        <li>
          Ensure that its personnel is committed to maintaining
          confidentiality.
        </li>
        <li>
          Notify the Customer without undue delay (within 72 hours) of any
          security breach affecting personal data.
        </li>
        <li>
          Assist the Customer in fulfilling its obligations regarding data
          subject requests (ARCO rights / GDPR Art. 15-22).
        </li>
        <li>
          Assist the Customer in carrying out impact assessments (DPIA) when
          required.
        </li>
      </ul>

      <h2>6. Sub-processors</h2>
      <p>
        Mekovault engages sub-processors to provide the service. The updated
        list is published at{" "}
        <Link href="/legal/sub-processors">/legal/sub-processors</Link>. We
        give 30 days’ notice of any change.
      </p>

      <h2>7. International transfers</h2>
      <p>
        Customer data is processed mainly in the{" "}
        <strong>United States (AWS us-east-1)</strong> with backup in Backblaze
        B2 US-West. Both providers adhere to the{" "}
        <em>EU-US Data Privacy Framework</em> (for data of EU residents).
      </p>

      <h2>8. Audit rights</h2>
      <p>
        The Customer may audit compliance with this DPA with 15 days’ prior
        notice. Alternatively, Mekovault provides documentary evidence (SOC 2
        reports, internal policies) upon request.
      </p>

      <h2>9. Return or deletion of data</h2>
      <p>
        At the Customer’s request and at any time:
      </p>
      <ul>
        <li>
          <strong>Export</strong>: Mekovault delivers the Customer’s data in a
          structured format (JSON/CSV) within 15 days.
        </li>
        <li>
          <strong>Deletion</strong>: complete deletion (DB + sub-processors) is
          carried out within 30 days. Exceptions: platform audit log (5 years)
          and backups with object lock (until the retention period expires).
        </li>
      </ul>

      <h2>10. Liability</h2>
      <p>
        Each Party is liable for damages caused by its breach of this DPA or
        of applicable data protection regulations, up to the limit established
        in the service agreement.
      </p>

      <h2>11. Governing law</h2>
      <p>
        This DPA is governed by the laws of the Republic of Chile, in
        particular <strong>Ley 21.719</strong>. For customers with data
        subjects in the European Union, <strong>Regulation (EU) 2016/679
        (GDPR)</strong> additionally applies.
      </p>

      <p className="mt-10 text-sm text-muted-foreground">
        To request the signable version of the DPA, write to{" "}
        <a href="mailto:legal@mekovault.com">legal@mekovault.com</a> or
        directly to <a href="mailto:cloud@mekovault.com">cloud@mekovault.com</a>.
      </p>
    </>
  );
}
