export const title = "Administrator guide";
export const description =
  "People and roles, products, operations calendar, email senders, access templates and audit in Mekovault.";

export default function Body() {
  return (
    <>
      <h1>Administrator guide</h1>
      <p>
        Everything that can be administered lives on your organization’s site, at{" "}
        <code>app.mekovault.com/&lt;your-company&gt;/settings</code>.
      </p>

      <h2>People and roles</h2>
      <p>A search over the directory. Each role defines what a person can do:</p>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Can</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Administrator</td>
            <td>Everything: products, people, roles, billing.</td>
          </tr>
          <tr>
            <td>Ticket support</td>
            <td>Receive, handle and execute tickets (create, block, reactivate accounts, aliases, groups).</td>
          </tr>
          <tr>
            <td>People and Culture (HR)</td>
            <td>Request onboardings, offboardings and reactivations and track their status. Does not execute.</td>
          </tr>
          <tr>
            <td>Requester</td>
            <td>Request generic or secondary accounts, aliases, groups and temporary reactivations; view their own tickets.</td>
          </tr>
          <tr>
            <td>Auditor</td>
            <td>Read-only access to audit and reports.</td>
          </tr>
        </tbody>
      </table>
      <p>Removing all roles removes access. The last administrator can never be removed.</p>

      <h2>Products</h2>
      <p>
        In <strong>Products</strong> you see what you have contracted, its effective price with
        promotions and its operational status (Operational, With issues, Paused). The available
        tickets depend on the active products.
      </p>

      <h2>Operations calendar</h2>
      <p>
        Everything scheduled (account creations on the start date, blocks, expirations of temporary
        reactivations, reminders) is shown by day. You can cancel or reschedule; every change is
        recorded as a comment on the ticket and in the audit log.
      </p>

      <h2>Senders and templates</h2>
      <p>
        Configure which address emails are sent from per context (onboardings, offboardings,
        passwords, support) and send a test. You can choose to send them through the Mekovault
        relay with your address visible, or directly from your domain through the Gmail API using
        the same delegation you already authorized (requires the <code>gmail.send</code> scope).
        Email templates can be customized per language.
      </p>

      <h2>Access templates</h2>
      <p>
        They combine roles, groups and services that are provisioned together for a new person.
        They are chosen with selectors, without technical identifiers.
      </p>

      <h2>Audit</h2>
      <p>
        Every relevant action (roles, access, executed tickets, cancelled operations) is recorded
        with who, when and what changed. Audit records are immutable.
      </p>

      <h2>Delete the organization</h2>
      <p>
        An administrator can request deletion. It runs as a queued, audited process that revokes
        credentials, deletes secrets, data and email records, and sends an email with the details
        of each step once it completes.
      </p>
    </>
  );
}
