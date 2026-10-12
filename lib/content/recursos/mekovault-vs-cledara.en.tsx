import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs Cledara: controlling spend is not the same as closing the accounts",
  seoTitle: "Mekovault vs Cledara for accounts and subscriptions",
  description:
    "Cledara controls software spend from finance with virtual cards; Mekovault controls accounts and licenses from HR. When each fits and when you need both.",
  question: "Cledara or Mekovault for my company's subscriptions?",
};

export const summary =
  "Cledara controls software spend from the finance side: a virtual card per subscription, invoices and renewals, built for finance teams at companies of 25 to 150 people, in English. Mekovault controls accounts and licenses from the HR side: it creates and closes the Google account on the right day, decides with the manager and releases the license. If your problem is spend, Cledara; if it is accounts that stay open, Mekovault; many companies need both.";

export const faq = [
  {
    q: "Does Cledara close the Google account of an employee who leaves?",
    a: "That is not its focus. Cledara blocks the card that paid for the subscription and, with its IT module, can remove access in some applications. It does not replace blocking the Google account with email forwarded and files handed over.",
  },
  {
    q: "Does Mekovault issue virtual cards?",
    a: "No. Mekovault records subscriptions in Purchases with an owner, a renewal date and an invoice, and reminds you before the renewal, but the payment stays with your bank or card.",
  },
  {
    q: "Where is each one sold, and in what currency?",
    a: "Cledara has an office in Barcelona and its site is in English; it charges by number of applications, in pounds or euros. Mekovault is available in English, Spanish (Chile, Argentina and Mexico) and Portuguese, and charges one price per company.",
  },
];

export const related = ["mekovault-vs-factorial", "licencias-que-sigues-pagando", "que-es-el-control-de-cuentas-y-licencias"];

export function Body() {
  return (
    <>
      <h2>What each one does</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Cledara</th>
            <th>Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Where control starts</td>
            <td>Finance: what gets paid</td>
            <td>HR: who joins, changes and leaves</td>
          </tr>
          <tr>
            <td>Main tool</td>
            <td>Virtual cards per subscription, accounting reconciliation, renewals</td>
            <td>Dated requests that create and close accounts, licenses per platform, authorized apps</td>
          </tr>
          <tr>
            <td>When someone leaves</td>
            <td>The card is blocked; access is reviewed separately</td>
            <td>The account is blocked on the last day, email is forwarded, the manager decides on the files, the license is released</td>
          </tr>
          <tr>
            <td>Discovering subscriptions</td>
            <td>Yes, through payments on its cards</td>
            <td>Through the apps authorized with the Google account and the Purchases record; it does not read cards</td>
          </tr>
          <tr>
            <td>Payroll as the source</td>
            <td>No</td>
            <td>Yes: your payroll system (Buk and Talana today)</td>
          </tr>
          <tr>
            <td>Language and currency</td>
            <td>English; pounds and euros; by number of applications</td>
            <td>English, Spanish and Portuguese; one price per company</td>
          </tr>
          <tr>
            <td>Who it is for</td>
            <td>Finance at scaleups of 25 to 150 people</td>
            <td>Owners, managers and HR at companies of 10 to 500 people with no account administrator</td>
          </tr>
        </tbody>
      </table>

      <h2>When to choose Cledara</h2>
      <p>
        If your main pain is the money: dozens of subscriptions paid with different people’s cards, invoices that never
        arrive and surprise renewals, and you have someone in finance who will run it.
      </p>
      <h2>When to choose Mekovault</h2>
      <p>
        If your pain is accounts and access that stay open after someone left, managers who do not decide in time what
        happens to the files, nobody knowing which apps read Drive, and HR having to ask for all of it without an IT
        team. Subscriptions get recorded too, but control starts with the person, not with the payment. How it works,
        in <Link href="/account-governance">Account governance</Link>.
      </p>
      <p className="text-sm">Cledara data taken from its public site in October 2026; if it changes, let us know and we will correct it.</p>
    </>
  );
}
