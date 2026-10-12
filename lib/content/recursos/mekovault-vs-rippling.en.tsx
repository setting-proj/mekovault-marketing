import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs Rippling: accounts handled without changing your payroll",
  seoTitle: "Mekovault vs Rippling IT for small businesses",
  description:
    "Rippling revokes access because it is also your payroll and HR, paid per employee. Mekovault hooks into your payroll and Google Workspace as they are.",
  question: "Is Rippling right for a small business, or do I need Mekovault?",
};

export const summary =
  "Rippling handles employee accounts because it is also the company's payroll, HR and computer management: when you mark someone as terminated, it revokes their access. For that you have to move the whole company to Rippling and pay per employee plus a base platform fee. Mekovault does the accounts and licenses part by hooking into the payroll you already have (your payroll system, Buk and Talana today) and your Google Workspace, for one price per company.";

export const faq = [
  {
    q: "Does Rippling work for a small business?",
    a: "Rippling sells in the United States and several other countries, mostly in English, with its own payroll for some markets. For a small business it means moving payroll (ADP, Gusto or BambooHR today) and the employee records to Rippling, and paying per employee plus a base platform fee.",
  },
  {
    q: "Does Mekovault manage laptops and phones?",
    a: "No. Mekovault manages accounts, licenses, authorized apps and subscriptions. Device management stays in your Google console or in whatever tool you use for that.",
  },
  {
    q: "What if I already have Rippling?",
    a: "Then Rippling handles the account offboarding. Mekovault would add the manager's decision on files and email, licenses per platform and authorized apps, but the typical Mekovault case is the company that does not want to migrate its payroll.",
  },
];

export const related = ["gestion-de-accesos-para-pymes", "mekovault-vs-factorial", "que-preguntar-antes-de-contratar"];

export function Body() {
  return (
    <>
      <h2>What each one does</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Rippling (IT)</th>
            <th>Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>What it is</td>
            <td>Payroll, HR, IT and devices in a single system</td>
            <td>Control of accounts, licenses and apps, connected to your payroll and to Google Workspace</td>
          </tr>
          <tr>
            <td>What you have to change to use it</td>
            <td>Migrate payroll and employee records to Rippling</td>
            <td>Nothing: it connects to your payroll system (Buk and Talana today) and to Google Workspace as they are</td>
          </tr>
          <tr>
            <td>When someone leaves</td>
            <td>On termination, it revokes access in the connected apps and recovers the laptop</td>
            <td>Block on the last day at a set time, email forwarded, the manager decides on the files, license released, scheduled deletion</td>
          </tr>
          <tr>
            <td>Who decides on files and email</td>
            <td>Rules defined by IT</td>
            <td>The direct manager, by email, with reminders</td>
          </tr>
          <tr>
            <td>Devices</td>
            <td>Yes (purchase, shipping, remote wipe)</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>Per employee per month, plus a mandatory base platform fee, in dollars</td>
            <td>One price per company, with no cost per person</td>
          </tr>
          <tr>
            <td>Language and support</td>
            <td>Mostly English</td>
            <td>English, Spanish (Chile, Argentina and Mexico) and Portuguese; support during Chile business hours</td>
          </tr>
        </tbody>
      </table>

      <h2>When to choose Rippling</h2>
      <p>
        If you are building the company from scratch or you are going to change payroll anyway, you want laptops, HR
        and accounts from a single vendor, and the per-employee price works for you.
      </p>
      <h2>When to choose Mekovault</h2>
      <p>
        If your payroll is already in ADP, Gusto or BambooHR and you are not going to move it; if your email is Google
        Workspace; if you want the manager to decide and evidence to be kept; if you prefer one price per company
        instead of per employee. More in{" "}
        <Link href="/recursos/gestion-de-accesos-para-pymes">access management for small businesses</Link>.
      </p>
      <p className="text-sm">Rippling data taken from its public site in October 2026; if it changes, let us know and we will correct it.</p>
    </>
  );
}
