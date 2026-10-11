export const meta = {
  title: "How to offboard an employee in Google Workspace without losing files or overpaying",
  seoTitle: "Offboard an employee in Google Workspace · Mekovault",
  description:
    "Suspend, redirect email, transfer Drive, free the license and delete later: the steps, the order, and what you keep paying for if you stop halfway.",
  question: "How do I offboard an employee in Google Workspace without still paying for them?",
};

export const summary =
  "To offboard an employee in Google Workspace without losing anything or overpaying, do five things in order: suspend the account on their last day, redirect their email, transfer their Drive files to whoever their manager picks, free up or reduce the license, and delete the account after a grace period. Suspending alone is not enough: a suspended account is still billed.";

export const steps = [
  { name: "Suspend the account on the last day", text: "Suspend the user in the Google Workspace admin console at the end of their last day: this signs out every session and invalidates the password. Do not delete yet." },
  { name: "Redirect the email", text: "Turn on an auto-reply and forward incoming mail to whoever takes over, or delegate the mailbox to the former employee's manager." },
  { name: "Transfer Drive and Calendar", text: "Transfer ownership of Drive files and calendar events to the person the manager picks. Do it before deleting: afterwards it cannot be done." },
  { name: "Free up or reduce the license", text: "On a flexible plan, delete or archive the account to stop paying. On an annual plan, note the reduction for renewal: until then you are billed the same." },
  { name: "Delete after the grace period", text: "Delete the account after 30 days (or whatever your policy says). Google lets you restore a deleted user for only 20 days." },
];

export const faq = [
  {
    q: "If I suspend the account, do I stop paying for the license?",
    a: "No. Google bills for assigned licenses, and a suspended account still has its license assigned. To stop paying you have to delete the account or move it to an archived user (cheaper), and on an annual plan the reduction only takes effect at renewal.",
  },
  {
    q: "How long do I have to recover a deleted account?",
    a: "Google lets you restore a deleted user for 20 days. That is why it is better to suspend first and delete after a grace period, with the files already transferred.",
  },
  {
    q: "Who decides where the files and email go?",
    a: "The former employee's direct manager, not IT. They are the one who knows which projects are still open. In Mekovault the manager gets an email with the options (transfer, recover information for a few days, deactivate) and decides with one click.",
  },
  {
    q: "Can I read a former employee's email?",
    a: "It depends on your local privacy law and on the policy your employees signed. In the U.S., email on a company-owned account can usually be reviewed when a written policy says so, and some states require notice to employees. The safe route is to redirect and delegate, not to read in bulk.",
  },
];

export const related = [
  "suspender-eliminar-o-archivar-usuario-google-workspace",
  "correo-del-que-se-va",
  "licencias-que-sigues-pagando",
  "desvinculacion-chile-finiquito-y-cuentas",
];

export function Body() {
  return (
    <>
      <h2>Why “just delete the user” is the worst way to do it</h2>
      <p>
        When someone leaves, the most common move is for the admin to open the Google Workspace admin console the next
        day and delete the user. That solves access, but it creates three problems: the Drive files that were never
        transferred disappear with the account, incoming email bounces (and the customers who wrote to that person find
        out they are gone before you do), and nobody checked which other platforms are still billing: Slack, Zoom,
        Figma, Adobe, Canva or the subscription that person was paying for with the company card.
      </p>
      <p>
        The other extreme is just as common: suspend the account “just in case” and never look at it again. A suspended
        account keeps its license, and Google bills per assigned license. That account is paid for month after month
        until somebody closes it, on average about six months based on what we see in companies with 50 to 500 people.
      </p>

      <h2>The five steps, in order</h2>
      <h3>1. Suspend on the last day, at the end of the day</h3>
      <p>
        In the admin console: Users, pick the person, “Suspend user”. This signs out open sessions, invalidates the
        password and leaves the mailbox receiving messages that nobody reads. The date matters: not before (the person
        is still working) and not three days later (the person no longer works there and can still sign in). The right
        moment is the last day, at the end of the shift, with a record of who requested it.
      </p>
      <h3>2. Redirect the email and let people know</h3>
      <p>
        Turn on an auto-reply (“this person no longer works here; please write to…”) and forward incoming mail to
        whoever takes over their work. If the manager needs to review ongoing conversations, delegate the mailbox
        instead of sharing the password. This way customers and vendors never go unanswered.
      </p>
      <h3>3. Transfer Drive and Calendar before deleting</h3>
      <p>
        From the console you can transfer ownership of every Drive file to another account, and the calendar events
        too. Do it while the account is suspended, before deleting it: once deleted, whatever was not transferred is
        gone. To whom? That is not an IT decision: the direct manager decides, because they are the only one who knows
        which projects are still open.
      </p>
      <h3>4. Free up or reduce the license</h3>
      <p>
        This is where the money is. On a flexible plan (you pay month to month), deleting or archiving the account
        stops the charge from the next billing cycle. On an annual plan, the license stays under contract until renewal
        even if you delete the account; what you can do is reassign it to the next hire and note the reduction for the
        renewal date. The “archived user” option keeps the data at a lower cost than a full license.
      </p>
      <h3>5. Delete after the grace period</h3>
      <p>
        After 30 days (or whatever your policy says), delete the account. Google lets you restore a deleted user for 20
        days; after that, it is gone. With the files transferred and the email redirected, deleting no longer breaks
        anything.
      </p>

      <h2>What the Google admin console does not do for you</h2>
      <ul>
        <li>It does not know the person left. Somebody has to log in on the right day at the right time.</li>
        <li>It does not ask the manager where the files should go; whoever runs the steps decides.</li>
        <li>It does not touch the other platforms: Slack, Zoom, Figma and the rest keep their seat assigned.</li>
        <li>It does not remind you to delete after 30 days or to reduce at renewal.</li>
        <li>It leaves no record of who requested, who approved and what was done, for an auditor or for you.</li>
      </ul>

      <h2>How Mekovault does it</h2>
      <p>
        In Mekovault the offboarding is a request that People submits (or that arrives on its own from payroll, with
        ADP, Gusto, Rippling or BambooHR). It is scheduled for the last day at the end of the shift and runs by itself:
        suspension with sign-out, auto-reply and email forwarding, license flagged for release, and deletion scheduled
        30 days out with the option to undo. The manager gets an email with the options for the files (transfer to
        someone, recover information for a few days, deactivate) and decides with one click; if they do not answer,
        they get two reminders. Everything stays in the audit log for 365 days. And if the person comes back or it was
        a mistake, the account is reactivated with its groups and its org unit, temporarily or for good.
      </p>
      <p>
        If your company also uses Slack, Zoom or Figma, Mekovault shows you which seats are still assigned to a
        suspended account and what you have to change in each console; the platforms that allow automation are being
        added one by one.
      </p>
    </>
  );
}
