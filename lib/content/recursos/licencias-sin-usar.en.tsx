import Link from "@/components/Link";

export const meta = {
  title: "Unused software licenses: how to find them on every platform and stop paying before renewal",
  seoTitle: "Unused licenses: how to find and cut them · Mekovault",
  description:
    "Purchased, assigned and on suspended accounts: where unused licenses hide in Google Workspace, Slack, Zoom and the rest, and what to do before you renew.",
  question: "How do I find the licenses we pay for that nobody uses?",
};

export const summary =
  "Unused licenses hide in three places: purchased and never assigned, assigned to suspended accounts of people who left, and assigned to active people who have not signed in for months. Each platform shows them in a different corner of its admin console and has its own rule for stopping the charge: in Google suspending is not enough, in Slack deactivating is, in Zoom you have to remove the license and also lower the quantity on your contract. And on annual plans you can only reduce at renewal, so the work has to happen 30 days before.";

export const steps = [
  {
    name: "Count purchased and assigned on each platform",
    text: "In the billing screen of Google Workspace, Slack, Zoom and the rest: how many licenses you pay for and how many have someone behind them. The gap is the first group of unused licenses.",
  },
  {
    name: "Cross suspended accounts with their licenses",
    text: "List of suspended or deactivated users on each platform. Every one that still holds a license is the second group, the most expensive one, because it looks in use.",
  },
  {
    name: "Check last sign-in on active accounts",
    text: "Anyone who has not signed in for 90 days does not need that license. In Google it is in the user list; in Zoom, in the usage reports. That is the third group.",
  },
  {
    name: "Decide what to do with each one",
    text: "Delete or archive the account, remove the license, reassign it to the next hire or downgrade the plan. With an owner and a date for every decision.",
  },
  {
    name: "Write down the renewal and reduce in time",
    text: "For each annual plan: renewal date and the quantity you want to drop to. Set a reminder 30 days before, because after that date you pay for another full year.",
  },
  {
    name: "Repeat every month in 20 minutes",
    text: "A short routine on the first business day of each month keeps the problem from growing back until the next annual invoice.",
  },
];

export const faq = [
  {
    q: "What is an unused license?",
    a: "A license the company pays for and nobody benefits from. There are three kinds: the one you bought and never assigned to anyone, the one assigned to a suspended account of someone who left, and the one held by an active person who has not signed in for months. All three cost the same as a license in use.",
  },
  {
    q: "Does suspending an account in Google Workspace stop the license charge?",
    a: "No. A suspended account keeps its license and is billed the same as an active one. To stop paying you have to delete the account or move it to an archived user. On a flexible plan the charge drops the next cycle; on an annual plan the quantity only drops at renewal.",
  },
  {
    q: "When do I have to lower the quantity on an annual plan?",
    a: "Before the renewal date. On most annual plans you can raise the quantity whenever you want, but lower it only at renewal. If that date passes, you commit to another year with the licenses you had. That is why the review happens 30 days before, not the day the invoice arrives.",
  },
  {
    q: "Does Mekovault reduce the licenses for me?",
    a: "No. Mekovault shows you how many licenses you pay for, how many are used and how many sit on suspended accounts, tells you the last date you can reduce and the exact steps on each platform, and warns you before renewal. Lowering the quantity on the contract is done by the company in each platform's billing screen, because it is a change to the contract.",
  },
];

export const related = [
  "licencias-que-sigues-pagando",
  "suspender-eliminar-o-archivar-usuario-google-workspace",
  "calendario-de-renovaciones",
];

export const cta = {
  title: "See how many licenses you pay for that nobody uses",
  desc: "Mekovault reads Google Workspace and shows purchased, used and on suspended accounts, with a warning before every renewal. Free up to 20 accounts.",
};

export function Body() {
  return (
    <>
      <h2>The three places where unused licenses hide</h2>
      <p>
        When the software invoice arrives, one number gets looked at: how many licenses you pay for. But unused
        software licenses do not show up on the invoice. You have to go looking, and they sit in three different
        places:
      </p>
      <ul>
        <li>
          <strong>Purchased and never assigned.</strong> You signed up for 70 licenses “just in case” and assigned 62.
          The other 8 have no name on them and are billed all the same. This is the easiest group to see: every
          platform shows it under billing.
        </li>
        <li>
          <strong>Assigned to suspended accounts.</strong> The person left, someone suspended the account, and there it
          stayed. The license is still assigned and billed as if they were working. This is the most expensive group
          because it looks in use, and in a company that has gone three years without a review it can be 10 percent of
          the bill.
        </li>
        <li>
          <strong>Assigned to active people who never sign in.</strong> The sales rep with a licensed Zoom seat who
          runs every meeting on Meet. The designer who stopped opening Figma in March. They work at the company, but
          that particular license has gone unused for months.
        </li>
      </ul>
      <p>
        A vendor would call the three groups together a “license optimization opportunity”. For you it is simpler:
        money that leaves every month and that nobody decided to spend.
      </p>

      <h2>How to see them in Google Workspace, Slack and Zoom</h2>
      <p>
        <strong>Google Workspace.</strong> In the admin console, under Billing, Subscriptions: for each plan you see
        how many licenses you bought and how many are assigned. For the second group, go to Users and filter by status
        “Suspended”: every name there that still has a license assigned is a license paid for nobody. For the third
        group, in the same user list add the last sign-in column and sort by date: anyone who has not signed in for 90
        days is a candidate for a cheaper plan or for archiving.
      </p>
      <p>
        <strong>Slack.</strong> Under Administration, Manage members, you see active and deactivated members. Slack
        only bills for active ones, so the second group here is solved by deactivating. Under Billing you see how many
        members are being charged in the current cycle; if that number is higher than the people who work at the
        company, someone is still active who should not be.
      </p>
      <p>
        <strong>Zoom.</strong> Under User Management you see which accounts are licensed and which are basic (free).
        Under Reports, Usage, you see how many meetings each person hosted in the period. A licensed account with zero
        meetings in two months is the most common unused license in Zoom, and besides removing it you have to lower the
        quantity on your contract, or you keep paying.
      </p>

      <h2>What you have to do on each platform to stop paying</h2>
      <p>
        This is the confusing part: blocking a person does not mean the same thing everywhere. The table sums up what
        is verified in each vendor’s documentation. The full rules, with sources, are in{" "}
        <Link href="/license-control">License control</Link>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Does blocking stop the charge?</th>
            <th>What you have to do</th>
            <th>When it takes effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Workspace</td>
            <td>No</td>
            <td>Delete the account or move it to an archived user</td>
            <td>Flexible plan: next cycle. Annual plan: at renewal</td>
          </tr>
          <tr>
            <td>Slack</td>
            <td>Yes</td>
            <td>Deactivate the member</td>
            <td>The charge drops on its own from the next cycle</td>
          </tr>
          <tr>
            <td>Jira and Confluence (monthly plan)</td>
            <td>Yes</td>
            <td>Deactivate the account</td>
            <td>The charge drops on its own</td>
          </tr>
          <tr>
            <td>1Password</td>
            <td>Yes</td>
            <td>Suspend or remove the person</td>
            <td>The charge drops on its own</td>
          </tr>
          <tr>
            <td>Zoom</td>
            <td>No</td>
            <td>Remove the license from the user and lower the quantity on the contract</td>
            <td>Next billing cycle</td>
          </tr>
          <tr>
            <td>GitHub Team</td>
            <td>No</td>
            <td>Remove the seat and lower the quantity on the contract</td>
            <td>Next billing cycle</td>
          </tr>
          <tr>
            <td>HubSpot</td>
            <td>No</td>
            <td>Release the seat and lower the quantity on the contract</td>
            <td>Next billing cycle</td>
          </tr>
          <tr>
            <td>Dropbox Business</td>
            <td>No</td>
            <td>Remove the license and lower the quantity on the contract</td>
            <td>Only at renewal</td>
          </tr>
          <tr>
            <td>Salesforce</td>
            <td>No</td>
            <td>Deactivate the user and lower the quantity on the contract</td>
            <td>Only at renewal</td>
          </tr>
          <tr>
            <td>Adobe Creative Cloud for teams</td>
            <td>No</td>
            <td>Remove the license and lower the quantity on the contract</td>
            <td>Only in the renewal window</td>
          </tr>
        </tbody>
      </table>
      <p>
        Look at the last column. On half the platforms, removing the license from the person does not change the bill:
        there is a second step, lowering the quantity on the contract, done in the billing screen, that nobody does
        because nobody knows it exists.
      </p>

      <h2>The calendar: flexible plan, annual plan and the 30 days before</h2>
      <p>
        On a flexible (month-to-month) plan the rule is simple: what you release this month stops being billed next
        month. The cost of forgetting is one month of one license.
      </p>
      <p>
        On an annual plan the cost of forgetting is a year. You committed to a quantity; you can raise it whenever you
        want, but lower it only on the renewal date. If that date passes with nobody reducing, the 8 unassigned
        licenses and the 5 on suspended accounts get paid for another 12 months. That is why the review does not happen
        when the invoice arrives, but 30 days before renewal: enough time to count, decide and change the quantity in
        the console.
      </p>
      <p>
        <strong>A 20-minute monthly routine.</strong> On the first business day of each month, one person in
        operations or finance does this:
      </p>
      <ol>
        <li>Opens Google Workspace billing and writes down purchased and assigned (3 minutes).</li>
        <li>Reviews the suspended user list and flags the ones that still hold a license (5 minutes).</li>
        <li>Checks in Slack and Zoom how many are being charged and compares with the headcount (5 minutes).</li>
        <li>Reviews which annual plans renew in the next 45 days and what quantity is right (4 minutes).</li>
        <li>Sends each manager the list of their unused licenses with one question: cut or keep? (3 minutes).</li>
      </ol>
      <p>
        Twenty minutes a month does not sound like much, and it is not. The problem is that, with nobody assigned, it
        never happens.
      </p>

      <h2>What Mekovault does</h2>
      <p>
        The Licenses screen reads Google Workspace and shows, per platform, licenses purchased, used and sitting on
        suspended accounts, with what they cost per month. For each plan it tells you the last date you can reduce and
        the exact steps on that platform, with the verified rule: delete or archive in Google, deactivate in Slack,
        remove the license and lower the quantity in Zoom.
      </p>
      <p>
        When an offboarding runs, that person’s license is flagged for release. And before every renewal you get a
        warning with the quantity you can drop to and where to do it. What Mekovault does not do is lower the quantity
        on the contract: the company does that step in each platform’s billing screen, because it is a change to the
        contract and the person who pays should be the one to sign off. For platforms that cannot be automated,
        Mekovault assigns an owner, records the seat and keeps the evidence that it was done.
      </p>
      <p>
        If you want a number before you start, the <Link href="/calculadora-licencias">calculator</Link> estimates
        what you pay each month for licenses nobody uses from your company’s three numbers. And if you do not yet know
        which tools the company pays for, start with the{" "}
        <Link href="/recursos/inventario-de-software">software inventory</Link>.
      </p>
    </>
  );
}
