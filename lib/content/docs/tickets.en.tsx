export const title = "Tickets and automations";
export const description =
  "What each Mekovault ticket type does, who can request it and what happens automatically.";

export default function Body() {
  return (
    <>
      <h1>Tickets and automations</h1>
      <p>Creating a ticket is a three-step assistant: service, details, review and confirm.</p>

      <h2>Create account</h2>
      <p>
        The person’s details, start date and time (08:00 by default) and their manager from the
        directory. On review, Mekovault proposes the email{" "}
        <code>firstname.lastname@domain</code>, checks whether it already exists or existed and
        lets you decide: if it is the same person, the account is reactivated and the credentials
        are sent; if it is someone else, a variant with the initial of the second surname is used.
        On the start date, at the indicated time, the account is created on its own and the welcome
        email goes out with a copy to HR and the manager.
      </p>

      <h2>Block account</h2>
      <p>
        Date and time are required, plus manager and comment. On review, the person’s other
        accounts are listed. On confirmation, an email arrives with <strong>Cancel</strong> and{" "}
        <strong>Block now</strong> (both require signing in). If nobody acts, the block runs at the
        scheduled time and the manager and HR are notified.
      </p>

      <h2>Reactivate account</h2>
      <p>Choose from the suspended accounts in the directory. Support executes it from the ticket.</p>

      <h2>Temporary account reactivation</h2>
      <p>
        For a Requester: choose the suspended account and its manager. The manager receives an
        email with Approve and Reject (personal, single-use link, expires after 7 days, with a
        reminder at 2 days). If approved, the account stays active for 30 days: a notice 3 days
        before and automatic block upon expiration. Support can extend by 30 days, at most twice.
      </p>

      <h2>Generic account, aliases and groups</h2>
      <p>The email is checked to make sure it does not exist. Support executes from the ticket.</p>

      <h2>Reset password</h2>
      <p>
        This is a manual ticket: you indicate the account and a comment; Support handles it and
        replies through the ticket.
      </p>

      <h2>Who can request what</h2>
      <p>
        It depends on the role (see the administrator guide). An administrator can add specific
        exceptions in <em>Ticket permissions</em>.
      </p>
    </>
  );
}
