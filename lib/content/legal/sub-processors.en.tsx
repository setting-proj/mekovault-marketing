export const title = "Sub-processors";
export const description =
  "List of providers Mekovault uses to operate the platform.";

const SUBS = [
  {
    name: "Amazon Web Services (Lightsail)",
    role: "Compute and storage infrastructure",
    location: "us-east-1 (N. Virginia)",
  },
  {
    name: "Cloudflare",
    role: "CDN, WAF, managed DNS, DDoS protection",
    location: "Global (proxy with edge in LATAM)",
  },
  {
    name: "Backblaze B2",
    role: "Encrypted backups with object lock",
    location: "US-West (Sacramento)",
  },
  {
    name: "Tailscale",
    role: "Private administrative network between VMs and CI",
    location: "US · SOC2 Type II",
  },
  {
    name: "Brevo (Sendinblue)",
    role: "Transactional SMTP for emails",
    location: "EU",
  },
  {
    name: "MercadoPago",
    role: "Payment processing in Chile",
    location: "Chile",
  },
  {
    name: "Frankfurter (ECB)",
    role: "USD→CLP exchange rate feed",
    location: "EU · Public data",
  },
];

export default function Body() {
  return (
    <>
      <h1>Sub-processors</h1>
      <p className="text-sm text-muted-foreground">
        Translation for reference. The Spanish version is the binding one.
      </p>
      <p className="text-sm text-muted-foreground">Last updated: 2026</p>

      <p>
        The following providers process data on behalf of Mekovault to operate
        the service. Each one is contractually bound to security levels
        equivalent to ours.
      </p>

      <h2>Data deletion when an account is closed</h2>
      <p>
        When a customer deletes its organization, Mekovault runs a queued and
        audited deletion process: delegated credentials are revoked, and the
        secrets project (Infisical), the database data and the record of sent
        emails are deleted. Brevo only processes transactional delivery and does
        not keep contacts or content on our behalf. Operational logs
        (Loki/Grafana) contain technical identifiers, not business data, and
        are removed by the limited retention of the observability system. The
        administrator receives an email with the details of each step once the
        process completes.
      </p>

      <div className="not-prose mt-8 overflow-hidden rounded-2xl border bg-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/40 text-left">
              <th className="px-4 py-3 font-semibold">Provider</th>
              <th className="px-4 py-3 font-semibold">Role</th>
              <th className="px-4 py-3 font-semibold">Region</th>
            </tr>
          </thead>
          <tbody>
            {SUBS.map((s) => (
              <tr key={s.name} className="border-b last:border-b-0">
                <td className="px-4 py-3 font-medium">{s.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{s.role}</td>
                <td className="px-4 py-3 text-muted-foreground">{s.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10">Changes</h2>
      <p>
        We notify our customers at least 30 days in advance before adding a new
        sub-processor with access to Customer data.
      </p>

      <p>
        Questions:{" "}
        <a href="mailto:cloud@mekovault.com">cloud@mekovault.com</a>.
      </p>
    </>
  );
}
