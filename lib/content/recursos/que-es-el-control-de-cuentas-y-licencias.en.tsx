import Link from "@/components/Link";

export const meta = {
  title: "What is account, license and subscription management for a company (and what the industry calls it)",
  seoTitle: "What is account and license management · Mekovault",
  description:
    "A plain definition of the category analysts call SaaS Management Platform: what it solves, who uses it, what it includes and what each market calls it.",
  question: "What is this thing I need called?",
};

export const summary =
  "Account, license and subscription management is the practice (and the software) that makes sure every account, license and access exists because a person joined the company, changes when they change roles and is closed when they leave, with a record. Analysts and AI assistants call it a SaaS Management Platform with onboarding and offboarding automation; most business owners do not search for it by that name.";

export const faq = [
  {
    q: "Is it the same as HR software?",
    a: "No. HR software (Gusto, Rippling, BambooHR, ADP) handles contracts, payroll and time off; it is the source of the hire and departure data. Account management takes that data and turns it into accounts created, accounts closed and licenses released in Google Workspace and the other platforms. They complement each other.",
  },
  {
    q: "Is it the same as a password manager?",
    a: "No. A password manager (1Password, Bitwarden) stores passwords. Account management decides which accounts exist and when they are closed. A password manager without account management stores the passwords of people who already left.",
  },
  {
    q: "What do people call it in different markets?",
    a: "In the U.S.: SaaS management, employee offboarding, license management, user lifecycle. In the U.K.: leaver process, joiners, movers and leavers (JML). In Spanish-speaking markets: control de cuentas y licencias, baja de empleado. In Brazil: desligamento, gestão de licenças.",
  },
];

export const related = [
  "gestion-de-accesos-para-pymes",
  "licencias-que-sigues-pagando",
  "que-preguntar-antes-de-contratar",
];

export function Body() {
  return (
    <>
      <h2>What it solves</h2>
      <p>Three problems almost every company with 10 to 500 people has and almost none puts a name to:</p>
      <ul>
        <li><strong>Accounts that stay alive</strong> after someone left: email, Slack, Zoom, Figma, the subscription paid by card.</li>
        <li><strong>Licenses paid for and used by nobody</strong>: purchased and not assigned, or assigned to suspended accounts.</li>
        <li><strong>Nobody knows who has what</strong>: which software the company pays for, who uses it, which apps read Drive, who approved each thing.</li>
      </ul>

      <h2>What it includes (and what it does not)</h2>
      <table>
        <thead>
          <tr>
            <th>Includes</th>
            <th>Does not include (that is another category)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account creation and offboarding with a date, from People or payroll</td>
            <td>Contracts, payroll, time off (HR software)</td>
          </tr>
          <tr>
            <td>The manager’s decision about the email and files of whoever leaves</td>
            <td>Single sign-on and a separate directory (IAM: Okta, Entra)</td>
          </tr>
          <tr>
            <td>Licenses per platform: purchased, assigned, on suspended accounts</td>
            <td>Software contract negotiation (Vendr, Sastrify)</td>
          </tr>
          <tr>
            <td>Apps authorized with company accounts and their risk</td>
            <td>Antivirus, firewall, device management</td>
          </tr>
          <tr>
            <td>Purchases and subscriptions with an owner, expiration date and invoice</td>
            <td>Accounting and bill payment</td>
          </tr>
          <tr>
            <td>A record of who requested, approved and executed, for 365 days</td>
            <td>ISO or SOC 2 certification (the record helps, it does not replace it)</td>
          </tr>
        </tbody>
      </table>

      <h2>What everyone else calls it</h2>
      <p>
        ChatGPT and Gemini answer “SaaS Management Platform (SMP)” and, as a second name, “employee onboarding and
        offboarding automation”. Gartner has a Magic Quadrant for SaaS Management Platforms with companies like Zylo,
        Torii, BetterCloud and 1Password. In security circles it is called identity governance (IGA). All of those
        tools are built for the IT teams of large companies, priced per user. Business owners do not search for the
        category: they search for the problem (“how to shut down a former employee’s email”, “how to know what
        software my company pays for”).
      </p>

      <h2>Who uses it inside the company</h2>
      <ul>
        <li><strong>People / HR:</strong> requests the account creations and offboardings; needs no IT.</li>
        <li><strong>The direct manager:</strong> decides with one click what happens to the files and email, and which apps are allowed.</li>
        <li><strong>Finance / operations:</strong> looks at licenses and subscriptions and what to reduce at renewal.</li>
        <li><strong>The owner or CEO:</strong> sees that everything got done, without chasing five people.</li>
        <li><strong>Support or IT, if there is one:</strong> handles what cannot be automated, with clear tasks.</li>
      </ul>

      <h2>Mekovault, as an example</h2>
      <p>
        Mekovault is account, license and subscription management built for companies with 10 to 500 people on Google
        Workspace: payroll (ADP, Gusto, Rippling, BambooHR) or People is the source, requests run on their own at the
        scheduled time, the manager decides by email, Licenses shows what you are overpaying, authorized apps are
        reviewed every week and everything stays in the audit log for 365 days. One price per company, no per-user fee.
        What to demand from this kind of tool:{" "}
        <Link href="/recursos/que-preguntar-antes-de-contratar">the 21 questions</Link>.
      </p>
    </>
  );
}
