import Link from "@/components/Link";

export const meta = {
  title: "Suspend, delete or archive a Google Workspace user: which one keeps billing you",
  seoTitle: "Suspend vs delete a Google Workspace user · Mekovault",
  description:
    "The three options in the Google admin console compared: what each one keeps, what it costs, when you can undo it and which one fits each kind of departure.",
  question: "Suspend or delete the user? Which one stops the charge?",
};

export const summary =
  "Suspending keeps everything and is billed the same as an active account. Deleting stops the charge (on a flexible plan) but erases whatever you did not transfer, with 20 days to change your mind. Archiving keeps email and files at a lower cost. For a normal departure: suspend on the last day, transfer, and delete or archive after 30 days.";

export const faq = [
  {
    q: "Does a suspended account still receive email?",
    a: "Yes. Email lands in the mailbox, but nobody reads it and nobody answers. That is why you have to turn on an auto-reply and forwarding, or delegate the mailbox to the manager.",
  },
  {
    q: "What happens to the shared files of a deleted user?",
    a: "If they owned the files and ownership was not transferred, the files disappear for everyone they were shared with. Transfer ownership from the admin console before deleting.",
  },
  {
    q: "Is archiving useful for someone who left?",
    a: "Yes, it is the option for keeping email and files without paying for a full license, for example because of legal obligations or a litigation hold. It requires archived user licenses on your edition and does not replace transferring files to someone who still works there.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "licencias-que-sigues-pagando",
  "correo-del-que-se-va",
];

export function Body() {
  return (
    <>
      <h2>The three options, compared</h2>
      <table>
        <thead>
          <tr>
            <th>What happens to…</th>
            <th>Suspend</th>
            <th>Delete</th>
            <th>Archive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Access</td>
            <td>Cut off: sessions signed out, cannot get in</td>
            <td>Cut off</td>
            <td>Cut off</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>Keeps arriving; nobody reads it</td>
            <td>Bounces; whatever was not exported is lost</td>
            <td>Kept, searchable by the administrator</td>
          </tr>
          <tr>
            <td>Drive and Calendar</td>
            <td>Kept</td>
            <td>Lost if ownership was not transferred</td>
            <td>Kept</td>
          </tr>
          <tr>
            <td>The license</td>
            <td>Still assigned: <strong>billed the same</strong></td>
            <td>Released; on an annual plan it stays under contract until renewal</td>
            <td>Moves to a cheaper archived user license</td>
          </tr>
          <tr>
            <td>Undo</td>
            <td>Reactivate whenever you want</td>
            <td>Restore up to 20 days later</td>
            <td>Unarchive whenever you want</td>
          </tr>
          <tr>
            <td>What it is for</td>
            <td>The last day and the grace period</td>
            <td>Closing for good, after transferring</td>
            <td>Retaining for a legal or contractual obligation</td>
          </tr>
        </tbody>
      </table>

      <h2>Which one fits each departure</h2>
      <ul>
        <li>
          <strong>Resignation or a normal termination:</strong> suspend on the last day, forward the email, transfer
          the files and delete after 30 days. If the plan is annual, reassign the license to the next hire.
        </li>
        <li>
          <strong>Departure with a chance of coming back (leave of absence, internship, project):</strong> suspend and
          write down the review date. Mekovault handles it with a temporary reactivation for the days you choose.
        </li>
        <li>
          <strong>Obligation to retain (contracts, lawsuits, litigation holds, regulation):</strong> archive. It keeps
          the email and the files without paying for a full license.
        </li>
        <li>
          <strong>Shared account (sales@, support@):</strong> it is neither suspended nor deleted: its owner changes.
          In Mekovault every shared account has an owner and a review date.
        </li>
      </ul>

      <h2>The most expensive mistake</h2>
      <p>
        Suspend and forget. It is what happens when someone handles the departure “just in case” and nobody has the
        task of looking again. That account is billed every month, with the same license as a person who actually
        works. In a 100-person company with 20% annual turnover, that is 20 accounts that can end up in that limbo; at
        an average of 6 months and $7 to $25 each, it is money that leaves without anyone seeing it. You can estimate it
        with the <Link href="/calculadora-licencias">calculator</Link>.
      </p>

      <h2>How Mekovault does it</h2>
      <p>
        Mekovault does not choose for you: it suspends on the last day at the exact hour, schedules the deletion 30
        days out (with advance notice and the option to undo), shows in Licenses how many licenses sit on suspended
        accounts and tells you what to change at renewal. If you flag an account to be kept, it does not touch it. And
        all of it with the name of who requested and who approved, kept for 365 days.
      </p>
    </>
  );
}
