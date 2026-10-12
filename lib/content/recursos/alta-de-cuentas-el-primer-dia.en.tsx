import Link from "@/components/Link";

export const meta = {
  title: "Setting up the new hire's email account: ready on day one, with no IT ticket",
  seoTitle: "Create a new hire's company email on day one · Mekovault",
  description:
    "How to create a new hire's Google Workspace account with groups, org unit, alias and license on day one, requested from Personas with no IT ticket.",
  question: "How do I create the new hire's account without going through IT?",
};

export const summary =
  "The new hire's email account should exist first thing on day one, with their name spelled right, the groups for their team, the right org unit and the license that matches their role. For that, the data has to come from Personas (or from payroll) before the start date, not from an IT ticket the morning the person shows up.";

export const steps = [
  { name: "Record the hire with a start date", text: "Personas enters the name, personal email, job title, team, manager and start date as soon as the offer letter is signed." },
  { name: "Decide the email address", text: "firstname.lastname on the company domain; if it is already taken, the alias is decided before day one, not on day one." },
  { name: "Assign groups, org unit and license", text: "By team: the email groups, the organizational unit and the license type come from a template, not from memory." },
  { name: "Create the account on the start date", text: "First thing in the morning, with a temporary password sent to the personal email and a forced change at first sign-in." },
  { name: "Record the evidence", text: "Who requested it, when it was created and with what: for the audit, and for the day that person leaves." },
];

export const faq = [
  {
    q: "Do I need someone from IT to create the account?",
    a: "No. The Google admin console lets any administrator create users, and Mekovault does it on its own from the Personas record. What does need a decision is the standard: how email addresses are written, which groups each team has and which license goes with each role.",
  },
  {
    q: "What if the email address already exists?",
    a: "If it is the same person coming back, their old account is reactivated with its groups. If it is a different person with the same name, an alias or a variant is decided before day one. Mekovault detects it when the hire is recorded and asks.",
  },
  {
    q: "What about the other platforms (Slack, Zoom, Figma)?",
    a: "The Google account is the base; with it the person gets into most tools. Seats that are paid per person are assigned by role; Mekovault tells you which ones apply and assigns the ones the platform allows.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "mekovault-vs-consola-de-google",
  "gestion-de-accesos-para-pymes",
];

export function Body() {
  return (
    <>
      <h2>What happens when onboarding is a ticket</h2>
      <p>
        The person arrives at 9:00. Their manager messages IT, or whoever has the admin password. The account gets
        created at 11:30, with the last name misspelled because it was copied from a chat. They are not in their team’s
        group, so the team emails never reach them. The license is whichever one was free, not the one that matches the
        role. That person’s first day was spent waiting. And six months later, when they leave, nobody knows what they
        had.
      </p>

      <h2>The standard you decide once</h2>
      <ul>
        <li><strong>Email format:</strong> firstname.lastname, or first initial and last name. No numbers, no spaces. What happens when it repeats.</li>
        <li><strong>Groups by team:</strong> sales@, operations@, everyone@. Each team has its list and every new hire joins it.</li>
        <li><strong>Organizational unit:</strong> by team or by location; it defines which security policies apply.</li>
        <li><strong>License by role:</strong> who needs Business Standard and who needs Starter; who needs a Slack, Zoom or Figma seat.</li>
        <li><strong>Minimum data:</strong> name, personal email for the temporary password, job title (optional), start date in US format (MM/DD/YYYY).</li>
      </ul>

      <h2>The start date, step by step</h2>
      <ol>
        <li>First thing in the morning, the account is created with the agreed format.</li>
        <li>Groups, org unit and license are assigned from the team’s template.</li>
        <li>The person receives the new address and a temporary password at their personal email; they change it at first sign-in.</li>
        <li>Seats on the platforms that go with the role are assigned (or left as a task for the person in charge).</li>
        <li>It is recorded who requested it, when it was created and with what.</li>
      </ol>

      <h2>How Mekovault does it</h2>
      <p>
        The hire is requested from HR (Personas) with a form that validates name, personal email, job title and date (in
        US format), shows the email address that will be created and lets you edit it, and detects whether it already
        exists. If your payroll system is connected (<Link href="/conectores/buk">Buk</Link> and{" "}
        <Link href="/conectores/talana">Talana</Link> today), the hire arrives on its own with its start date. On the
        start date the account is created by itself with groups, org unit and license by team, seats on the connected
        platforms are assigned, and everything goes into the audit log. If the role has an end date (a contractor or an
        intern, for example), the offboarding is scheduled from the moment of the hire.
      </p>
    </>
  );
}
