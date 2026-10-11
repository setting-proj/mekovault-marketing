export const title = "Acceptable Use Policy";
export const description =
  "Which uses are permitted and prohibited on the Mekovault platform.";

export default function Body() {
  return (
    <>
      <h1>Acceptable Use Policy (AUP)</h1>
      <p className="text-sm text-muted-foreground">
        Translation for reference. The Spanish version is the binding one.
      </p>
      <p className="text-sm text-muted-foreground">Effective: 2026</p>

      <p>
        This policy supplements the Terms and defines which uses are NOT
        permitted on the Mekovault platform. By accepting the Terms, the
        Customer also accepts this AUP.
      </p>

      <h2>Prohibited uses</h2>
      <ul>
        <li>Attempting to access data belonging to other tenants.</li>
        <li>Testing the security of the platform without explicit authorization.</li>
        <li>
          Sending spam, phishing or unauthorized notifications through the
          email system.
        </li>
        <li>
          Using the connectors (Google Workspace or other platforms) to
          exfiltrate information without an operational justification.
        </li>
        <li>
          Automating operations at a rate that degrades the service for other
          customers.
        </li>
        <li>
          Sharing portal access credentials with unauthorized third parties.
        </li>
      </ul>

      <h2>Enforcement</h2>
      <p>
        Mekovault reserves the right to investigate and respond to violations
        of this policy, including immediate suspension of the account if the
        risk is material.
      </p>

      <h2>Reporting abuse</h2>
      <p>
        To report abuse of the platform, write to{" "}
        <a href="mailto:abuse@mekovault.com">abuse@mekovault.com</a>.
      </p>
    </>
  );
}
