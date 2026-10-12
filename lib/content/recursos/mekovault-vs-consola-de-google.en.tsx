import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs doing it by hand in the Google Admin console: what the console does not do on its own",
  seoTitle: "Mekovault vs the Google Workspace Admin console",
  description:
    "The Google Admin console can do everything, but it does not know someone left. What an admin leaves half done by hand, and what changes with Mekovault.",
  question: "Isn't the Google Admin console enough?",
};

export const summary =
  "The Google Admin console can do everything Mekovault does in Google Workspace: create, suspend, transfer, delete. What it cannot do is find out that someone joined or left, do it on the right day and at the right time without an administrator remembering, ask the manager, look at the other platforms or leave readable evidence. Mekovault does not replace the console: it operates it for you.";

export const faq = [
  {
    q: "Does Mekovault need super admin permissions?",
    a: "It needs a service account with permissions to manage users, groups, licenses and authorized applications. It does not read email or files. Every use of that credential is audited.",
  },
  {
    q: "What if I prefer to keep doing it by hand?",
    a: "You can. This guide works as a checklist either way. The difference shows up when the person doing it by hand is on vacation, leaves, or forgets to delete the account after 30 days.",
  },
  {
    q: "Can I keep using the console after connecting Mekovault?",
    a: "Yes. Mekovault picks up whatever you change in the console on its next sync. Ideally, hires and departures go through Mekovault so they carry a date, a decision and evidence.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "alta-de-cuentas-el-primer-dia",
  "mekovault-vs-factorial",
];

export function Body() {
  return (
    <>
      <h2>The same thing, done by hand and done with Mekovault</h2>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>By hand in the console</th>
            <th>With Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Someone starts on Monday</td>
            <td>Someone finds out (sometimes that same Monday), creates the account, guesses groups and license</td>
            <td>HR or your payroll system (Buk and Talana today) records the hire; the account is created first thing Monday with the groups, org unit and license of the department</td>
          </tr>
          <tr>
            <td>Someone leaves Friday at 6:00 p.m.</td>
            <td>The admin suspends the account when they can; sometimes on Monday</td>
            <td>Blocked Friday at 6:00 p.m., with email forwarded and an auto-reply</td>
          </tr>
          <tr>
            <td>Where their files go</td>
            <td>The admin decides, or nobody does</td>
            <td>The manager decides by email; two reminders if there is no answer</td>
          </tr>
          <tr>
            <td>The license</td>
            <td>Stays assigned to the suspended account; you find out on the invoice</td>
            <td>Flagged for release; a notice before the renewal with how many to reduce</td>
          </tr>
          <tr>
            <td>Delete after 30 days</td>
            <td>If someone remembers</td>
            <td>Scheduled, with advance notice and the option to undo</td>
          </tr>
          <tr>
            <td>Slack, Zoom, Figma</td>
            <td>Another console, another day, another person</td>
            <td>In the same request: the connected ones are closed and the rest become a task with an owner</td>
          </tr>
          <tr>
            <td>Apps authorized with the account</td>
            <td>User by user, if someone knows where to look</td>
            <td>Weekly review of the whole company, risk, the manager’s decision</td>
          </tr>
          <tr>
            <td>The person comes back for 5 days</td>
            <td>Reactivate, remember to suspend again</td>
            <td>Temporary reactivation with the manager’s approval; it blocks itself when it expires</td>
          </tr>
          <tr>
            <td>The auditor asks what was done</td>
            <td>Console log, technical, mixed in with everything else</td>
            <td>Readable audit: who requested, who approved, what was done, when; 365 days</td>
          </tr>
          <tr>
            <td>Who can do it</td>
            <td>Whoever has the admin password</td>
            <td>The roles you define: HR requests, the manager decides, Support resolves</td>
          </tr>
        </tbody>
      </table>

      <h2>What the console does better</h2>
      <p>
        Everything that is exceptional: changing security settings, creating new organizational units, migrating
        domains, defining device policies. Mekovault does not touch that. It handles the repetitive part that happens
        every time someone joins, changes or leaves, which is where licenses and access get lost.
      </p>

      <h2>How they coexist</h2>
      <p>
        You connect Google Workspace with a ten-minute guide. From then on, hires and departures are requested in
        Mekovault (or arrive from your payroll system, Buk and Talana today; if yours is ADP, Gusto or BambooHR, HR
        records them in Mekovault and the rest runs the same) and the console is kept for the exceptional. If someone
        changes something by hand, Mekovault sees it on the next sync. How each account is governed, in{" "}
        <Link href="/account-governance">Account governance</Link>; what each platform does, in{" "}
        <Link href="/platforms">Platforms</Link>.
      </p>
    </>
  );
}
