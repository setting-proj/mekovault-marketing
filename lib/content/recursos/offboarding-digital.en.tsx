import Link from "@/components/Link";

export const meta = {
  title: "Digital offboarding: the checklist of accounts and access to close when someone leaves",
  seoTitle: "Digital offboarding checklist · Mekovault",
  description:
    "Offboarding checklist for accounts, licenses, connected apps, shared passwords and subscriptions, with who does each item and when. Printable.",
  question: "Which accounts and access do I need to close when someone leaves?",
};

export const summary =
  "Digital offboarding is the part of an employee's exit that nobody sees: closing their email, their access to every platform, the apps they authorized with their account, the shared passwords they knew and the subscriptions they paid for. This list covers the 18 things to close, who does each one and when, and which ones can run on their own.";

export const faq = [
  {
    q: "What is the difference between offboarding and termination?",
    a: "Termination is the HR and legal side: the notice, the final paycheck, returning equipment. Offboarding is the whole exit process, and digital offboarding is the part about accounts, access and subscriptions. In most companies the HR side gets done right and the digital side gets done halfway.",
  },
  {
    q: "Who should own digital offboarding?",
    a: "Whoever knows the person is leaving: People or HR. IT runs it if there is an IT team; the direct manager decides what happens to the files and email. The mistake is spreading the responsibility around so that nobody closes the loop.",
  },
  {
    q: "How long after leaving do former employees still have access?",
    a: "Published studies report that about a third of former employees still have access to files from a previous employer, and that access lasts weeks or months. The number that matters is your company's: check your suspended accounts and authorized apps this month.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "aplicaciones-vinculadas",
  "licencias-que-sigues-pagando",
  "desvinculacion-chile-finiquito-y-cuentas",
];

export function Body() {
  return (
    <>
      <h2>The full list</h2>
      <p>
        Check what applies to your company. “Automatic” means a tool can do it without anyone opening a console;
        “guided” means someone has to do it, but they can receive the task with a due date and a record of completion.
      </p>
      <h3>The last day, at the end of the shift</h3>
      <ol>
        <li><strong>Suspend the email account</strong> (Google Workspace): sign out sessions, invalidate the password. Automatic.</li>
        <li><strong>Auto-reply and email forwarding</strong> to whoever the manager picks. Automatic.</li>
        <li><strong>Revoke the apps authorized with that account</strong> (Slack, Canva, Apps Script, the phone). Automatic.</li>
        <li><strong>Deactivate in Slack, Zoom, Teams</strong> and every other platform with a seat. Automatic where the platform allows it; guided elsewhere.</li>
        <li><strong>Remove from groups, lists and shared calendars.</strong> Automatic.</li>
        <li><strong>Change the shared passwords</strong> the person knew (generic accounts, social media, vendors). Guided.</li>
        <li><strong>Recover or wipe the device</strong> (laptop, phone): sign out remotely. Guided.</li>
      </ol>
      <h3>The first week</h3>
      <ol start={8}>
        <li><strong>Transfer Drive ownership</strong> and calendar events to the person the manager picks. Automatic.</li>
        <li><strong>Delegate the mailbox</strong> to the manager if there are ongoing conversations, instead of sharing the password. Automatic.</li>
        <li><strong>Reassign the generic accounts</strong> the person managed (sales@, support@) to a new owner. Guided.</li>
        <li><strong>Reassign the subscriptions paid with their card or in their name</strong> (domains, tools, SaaS). Guided.</li>
        <li><strong>Release or reassign the license</strong> on each platform; on an annual plan, note it for renewal. Automatic in Google; guided elsewhere.</li>
      </ol>
      <h3>At 30 days</h3>
      <ol start={13}>
        <li><strong>Delete or archive the email account</strong>, with the files already transferred. Automatic, with advance notice.</li>
        <li><strong>Confirm that no seat is still assigned</strong> in Slack, Zoom, Figma, Adobe, Canva. Automatic where there is read access; guided elsewhere.</li>
        <li><strong>Check that the authorized apps did not come back</strong> (the person can link them again from another account). Automatic.</li>
      </ol>
      <h3>Always</h3>
      <ol start={16}>
        <li><strong>Keep a record</strong>: who requested, who approved, what was done and when, for every item. Automatic.</li>
        <li><strong>Notify the right people</strong>: the manager, People, finance, and the person if there is a temporary reactivation. Automatic.</li>
        <li><strong>Review the policy</strong> once a year: forwarding, archiving and deletion periods. Guided.</li>
      </ol>

      <h2>What goes wrong most often</h2>
      <ul>
        <li>Closing the email and assuming everything is closed. The other platforms never find out.</li>
        <li>Letting whoever runs the steps decide about the files, instead of the manager.</li>
        <li>Suspending “just in case” and paying for that license for six months.</li>
        <li>Not revoking the apps the person authorized with their account: they keep reading Drive or Gmail after the exit.</li>
        <li>Having nowhere to look up what was done. When the auditor or the owner asks, it has to be pieced together from emails.</li>
      </ul>

      <h2>How Mekovault does it</h2>
      <p>
        Of the 18 items, Mekovault runs the “automatic” ones on its own in Google Workspace and the connected platforms,
        and turns the “guided” ones into tasks with an owner, a due date and a record. The offboarding is requested by
        People or arrives from payroll (ADP, Gusto, Rippling, BambooHR), is scheduled for the last day and runs by
        itself; the manager decides by email what happens to files and mail; authorized apps are revoked; deletion is
        scheduled 30 days out with the option to undo; and everything stays in the audit log for 365 days. If you want
        the printable list, it is at the end of{" "}
        <Link href="/recursos/que-preguntar-antes-de-contratar">the 21 questions to ask before you buy</Link>.
      </p>
    </>
  );
}
