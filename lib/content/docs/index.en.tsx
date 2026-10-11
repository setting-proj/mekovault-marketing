import Link from "@/components/Link";

export const title = "Documentation";
export const description =
  "Short guides to set up Mekovault and manage it day to day, for IT administrators and HR.";

export default function Body() {
  return (
    <>
      <h1>Documentation</h1>
      <p>
        Short guides to get Mekovault up and running and manage it day to day. They are written
        for IT administrators and HR people, without technical jargon except where it is needed.
      </p>
      <ul>
        <li>
          <Link href="/docs/getting-started">Getting started</Link>: create the organization,
          connect Google Workspace and give your team access.
        </li>
        <li>
          <Link href="/docs/admin-guide">Administrator guide</Link>: people and roles, products,
          email senders, operations calendar and audit.
        </li>
        <li>
          <Link href="/docs/tickets">Tickets and automations</Link>: what each ticket type does,
          who can request it and what happens automatically.
        </li>
        <li>
          <Link href="/docs/troubleshooting">Common problems</Link>: connection errors, emails
          that do not arrive, access that does not show up.
        </li>
      </ul>
      <p>
        The technical details (services, database, security) are in{" "}
        <Link href="/governance">Architecture and governance</Link>. The service status is at{" "}
        <Link href="/status">/status</Link>.
      </p>
    </>
  );
}
