import Link from "@/components/Link";

export const meta = {
  title: "Access management for small businesses without IT: what you really need (and alternatives to Okta)",
  seoTitle: "Access management for SMBs without IT · Mekovault",
  description:
    "What access management means in an owner's words, what you do not need from Okta, JumpCloud or Rippling at 10 to 500 people, and what you actually need.",
  question: "Do I need an access system like Okta for a small business?",
};

export const summary =
  "Access management, in an owner's words, is knowing who has an account on what, having that account created when the person starts and closed when they leave, and being able to prove it. A company of 10 to 500 people with no IT team does not need Okta, JumpCloud or Rippling: it needs its Google Workspace and its platforms governed from People.";

export const faq = [
  {
    q: "What is IAM and do I need one?",
    a: "IAM (identity and access management) is the category of Okta, Microsoft Entra or JumpCloud: a central directory, single sign-on and rules about who gets into what. It is for companies with IT and hundreds of applications. If your directory is Google Workspace and your tools open 'with Google', you already have 80% of an IAM; what is missing is the onboarding and offboarding cycle with evidence.",
  },
  {
    q: "How much do Okta, JumpCloud or Rippling cost?",
    a: "Okta publishes suites from $6 to $17 per user per month with an annual minimum; JumpCloud, bundles from $9 to $13 per user; Rippling charges per employee plus a base platform and requires moving your payroll. For 80 people that is thousands of dollars a year and an IT project. Mekovault charges one price per company, with no per-person fee.",
  },
  {
    q: "What about the platforms that cannot be automated?",
    a: "They exist, and no tool truly automates them without their enterprise plan. The honest thing is to turn them into guided tasks with an owner, a date and evidence. That is what Mekovault does with the platforms marked as 'guided'.",
  },
];

export const related = [
  "que-es-el-control-de-cuentas-y-licencias",
  "aplicaciones-vinculadas",
  "que-preguntar-antes-de-contratar",
];

export function Body() {
  return (
    <>
      <h2>What a company of 10 to 500 people really needs</h2>
      <ol>
        <li><strong>One source:</strong> hires and departures come from HR or from payroll, not from an email to IT.</li>
        <li><strong>One directory in charge:</strong> Google Workspace as the source of truth; the other platforms hang from it.</li>
        <li><strong>Dates:</strong> the account is born on the start date and closed on the last day, at the hour.</li>
        <li><strong>The manager’s decision:</strong> who gets the files and the email of the person leaving.</li>
        <li><strong>A license view:</strong> how many you bought, how many you use, how many sit on suspended accounts.</li>
        <li><strong>Authorized apps under control:</strong> which applications read Drive or Gmail and who decided that.</li>
        <li><strong>Evidence:</strong> who requested, who approved, what was done, when. For an auditor (SOC 2, for example) or for you.</li>
      </ol>
      <p>Notice what is not on the list: single sign-on, its own multi-factor authentication, a parallel directory, password policies. Google Workspace already includes all of that.</p>

      <h2>Okta, JumpCloud, Rippling, Microsoft Entra: who they are for</h2>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Who it is for</th>
            <th>What it demands</th>
            <th>What is overkill for a small business</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Okta</td>
            <td>Companies with IT and hundreds of applications</td>
            <td>Annual minimum, consulting, a dedicated administrator</td>
            <td>A parallel directory, SSO that Google already gives you</td>
          </tr>
          <tr>
            <td>JumpCloud</td>
            <td>IT teams at mid-sized companies and managed service providers</td>
            <td>An agent on every computer, technical setup</td>
            <td>Device management, RADIUS, LDAP</td>
          </tr>
          <tr>
            <td>Rippling</td>
            <td>Companies that want payroll, HR and IT with a single vendor</td>
            <td>Moving your payroll and the mandatory base platform</td>
            <td>Changing your HR system to fix your accounts</td>
          </tr>
          <tr>
            <td>Microsoft Entra ID Governance</td>
            <td>Companies on Microsoft 365 with P1/P2 licenses</td>
            <td>Additional per-user licenses, IT configuration</td>
            <td>Does not apply if your email is Google</td>
          </tr>
          <tr>
            <td>Mekovault</td>
            <td>Companies of 10 to 500 people on Google Workspace with no account administrator</td>
            <td>Connecting Google Workspace with a guide; optionally your payroll system (Buk and Talana today)</td>
            <td>Nothing: one price per company, no per-person fee</td>
          </tr>
        </tbody>
      </table>

      <h2>How to know whether you are ready for “more”</h2>
      <p>
        If you have more than 500 people, several domains, in-house applications that need their own sign-in, or an IT
        team with time on its hands, look at Okta or JumpCloud. If your email is Microsoft 365, Entra. If you have 10 to
        500 people, Google Workspace and someone in HR who today emails IT to ask for accounts, what you are missing is
        governance of the cycle, not an IAM.
      </p>

      <h2>How Mekovault does it</h2>
      <p>
        Mekovault connects to your Google Workspace (and optionally to your payroll system), turns every hire, change
        and departure into a dated request that runs on its own, asks the manager what only they know, shows licenses
        by platform, reviews the authorized apps every week and keeps the evidence for 365 days. For one price per
        company, with no per-person fee and no implementation project. What a platform does not let you automate stays
        as a guided task; we will not tell you yes when the answer is no. More in{" "}
        <Link href="/recursos/que-es-el-control-de-cuentas-y-licencias">what account and license control is</Link>.
      </p>
    </>
  );
}
