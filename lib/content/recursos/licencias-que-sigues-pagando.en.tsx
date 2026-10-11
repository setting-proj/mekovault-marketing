import Link from "@/components/Link";

export const meta = {
  title: "The licenses you are still paying for: suspended accounts, annual plans and how to stop paying for what nobody uses",
  seoTitle: "Google Workspace licenses you still pay for · Mekovault",
  description:
    "A suspended account is billed like an active one. How to count purchased, assigned and suspended-account licenses, and what to change before you renew.",
  question: "How many licenses does my company pay for, and who uses them?",
};

export const summary =
  "Google bills per assigned license, not per person who works there: a suspended account is billed the same as an active one. To know how much you are overpaying you need three numbers (licenses purchased, assigned, and sitting on suspended accounts) and your plan type: on a flexible plan the bill drops the next month, on an annual plan only at renewal. The same goes for Slack, Zoom, Figma and the rest.";

export const faq = [
  {
    q: "How do I see how many licenses I have in Google Workspace?",
    a: "In the admin console, under Billing, Subscriptions: that shows licenses purchased and assigned. The ones sitting on suspended accounts are not obvious; you have to cross the list of suspended users with their licenses. Mekovault shows it on one screen.",
  },
  {
    q: "What is the difference between a flexible plan and an annual plan?",
    a: "On the flexible plan you pay for the licenses you have each month and can reduce whenever you want. On the annual plan you commit to a quantity for a year at a lower price; you can add, but not reduce until renewal. That is why a departure on an annual plan is 'saved' for the next hire or for the renewal date.",
  },
  {
    q: "Does deactivating the account in Slack or Zoom stop the charge?",
    a: "In Slack, deactivating the user stops the charge from the next billing cycle. In Zoom you have to remove the license from the user and also reduce the quantity on your contract. In Google, suspending is not enough. Every platform has its own rule; the verified ones are in License control.",
  },
];

export const related = [
  "suspender-eliminar-o-archivar-usuario-google-workspace",
  "baja-empleado-google-workspace",
  "que-preguntar-antes-de-contratar",
];

export function Body() {
  return (
    <>
      <h2>The three numbers nobody looks at</h2>
      <p>
        When you ask “how many licenses are we paying for?”, the answer is usually the number on the invoice. But the
        useful question has three parts:
      </p>
      <ul>
        <li><strong>Purchased:</strong> what the contract or subscription says. This is what you are billed for.</li>
        <li><strong>Assigned:</strong> the ones with a user behind them. Purchased minus assigned is licenses you pay for and nobody uses.</li>
        <li>
          <strong>On suspended accounts:</strong> assigned to people who no longer work there. These are the most
          expensive, because they look “in use”.
        </li>
      </ul>
      <p>
        A real example from a 120-person company: 100 Business Standard licenses purchased, 92 assigned, 8 on suspended
        accounts; 20 Business Starter, 12 assigned, 1 suspended. Result: 17 licenses paid for with nobody using them,
        about $129 a month. Not a disaster, but it is every month, and it only shows up if somebody counts.
      </p>

      <h2>Why suspending is not enough</h2>
      <p>
        Google bills per assigned license. A suspended account keeps its license, so it costs the same as a person who
        is working. To stop paying for it you have to delete the account or move it to an archived user (a different,
        cheaper license that keeps email and files). And this is where the plan type comes in.
      </p>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>What happens when you delete an account</th>
            <th>What to do with the departure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flexible (month to month)</td>
            <td>The license is released and stops being billed from the next cycle</td>
            <td>Delete or archive at the end of the grace period</td>
          </tr>
          <tr>
            <td>Annual</td>
            <td>The license stays under contract until renewal</td>
            <td>Reassign it to the next hire; note the reduction for the renewal date</td>
          </tr>
        </tbody>
      </table>

      <h2>The other platforms: each with its own rule</h2>
      <p>
        What applies to Google does not apply to the others. In Slack, deactivating the user stops the charge from the
        next cycle. In Zoom you have to remove the license from the person and also reduce the quantity on your
        contract. In Figma or Adobe, the seat stays assigned until somebody releases it in the console. And the person
        who signed in to Slack or Salesforce “with Google” still counts as an active user there even if their Google
        account is suspended. The verified rules per platform, with sources, are in{" "}
        <Link href="/license-control">License control</Link>.
      </p>

      <h2>How to stop paying for what nobody uses, in four steps</h2>
      <ol>
        <li>Count the three figures per platform: purchased, assigned, on suspended accounts.</li>
        <li>For each suspended account, decide: delete, archive, or reassign the license to the next hire.</li>
        <li>Write down the renewal date of each annual plan and the quantity you want to drop to.</li>
        <li>Set a rule so every departure triggers this again, not once a year when the invoice arrives.</li>
      </ol>

      <h2>How Mekovault does it</h2>
      <p>
        Licenses reads every connected platform and shows the three figures per product, with the total per currency.
        When an offboarding runs, the license is flagged for release and, if the plan is annual, Mekovault tells you
        what to reduce and reminds you before renewal. For platforms that cannot be automated, it tells you exactly what
        to change in their console and who is responsible. And in Purchases, every subscription has an owner, an
        expiration date and an invoice, so none of them renews on its own. You can estimate your leak with the{" "}
        <Link href="/calculadora-licencias">calculator</Link>.
      </p>
    </>
  );
}
