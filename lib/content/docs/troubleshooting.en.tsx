import Link from "@/components/Link";

export const title = "Common problems";
export const description =
  "Connection errors with Google, emails that do not arrive, tickets that do not show up and scheduled operations that did not run.";

export default function Body() {
  return (
    <>
      <h1>Common problems</h1>

      <h2>“Validation failed: unauthorized_client” when connecting Google</h2>
      <p>
        Domain-wide delegation is not authorized for that client or scopes are missing. In the
        Google admin console, under <em>Security → API controls → Domain-wide delegation</em>, add
        the client ID shown by the assistant with the complete comma-separated list of scopes. Then
        test the connection again.
      </p>

      <h2>I signed in with my account and it asks me to create an organization</h2>
      <p>
        Your email has no assigned access. Ask an administrator to add you in People and roles. If
        your domain already belongs to an organization, another one cannot be created. If you use
        several Google accounts, check which one you signed in with (“Sign in with another account”
        button).
      </p>

      <h2>A ticket type does not show up for me</h2>
      <p>
        Either your role does not allow it, or the product that enables it is not contracted. The
        administrator can check this in Products and in Ticket permissions.
      </p>

      <h2>The approval or welcome email does not arrive</h2>
      <p>
        Check spam and the HR mailbox configured in Company. An administrator can send a test
        email from Senders. If the test delivery fails, the configured sender is not validated.
      </p>

      <h2>Emails are sent from Mekovault and not from my domain</h2>
      <p>
        In Senders you chose “Gmail API with your Workspace delegation”, but the delegation does
        not include the <code>gmail.send</code> scope or the address is not a real mailbox in your
        Google Workspace. Add the scope in the Google console (Domain-wide delegation, same row as
        the Mekovault client) and send a test again. In the meantime, emails are sent through
        Mekovault with your address visible and the reason is recorded in the log.
      </p>

      <h2>A scheduled operation did not happen</h2>
      <p>
        Check the Operations calendar: every account creation, block or expiration appears with its
        status (scheduled, executed, retrying, failed, cancelled). If it failed, the ticket has the
        reason and Support can retry.
      </p>

      <h2>The site does not load</h2>
      <p>
        Check <Link href="/status">/status</Link>. If everything is operational and the problem
        persists, write to soporte@mekovault.com indicating the time and the organization.
      </p>
    </>
  );
}
