import Link from "@/components/Link";

export const meta = {
  title: "SaaS renewal calendar: how to avoid paying another year for what nobody uses",
  seoTitle: "SaaS renewal calendar for your company · Mekovault",
  description:
    "Every subscription has a date when you can cut seats or cancel. How to build the calendar, what to check 30 days out and what happens on annual plans.",
  question: "When can I reduce licenses or cancel a subscription without paying for another year?",
};

export const summary =
  "Renewal is the only moment software spend goes down: on an annual plan, the quantity you are billed for can only be reduced on that day, and if nobody reviews it, it auto-renews for another year. A renewal calendar holds three facts per subscription: the date, the notice period and who decides. With that, and a review 30 days out, you can cut seats, switch to monthly or cancel before the card gets charged again.";

export const steps = [
  {
    name: "List every subscription",
    text: "Include the ones paid on someone's personal card that never send an invoice. Sources: the corporate card statement, expense reports and the purchasing spreadsheet, if there is one.",
  },
  {
    name: "Record the date, the notice period and the owner",
    text: "For each one: when it renews, how many days before that you must notify the vendor to reduce seats or cancel, and who decides. No owner, no decision.",
  },
  {
    name: "Set the reminder 30 days out",
    text: "A calendar reminder for the owner and for finance, 30 days before the date (or earlier, if the contract's notice period is longer).",
  },
  {
    name: "Check the four things",
    text: "Seats purchased but unassigned, suspended accounts that still hold a license, people starting next month, and the new price you are about to be charged.",
  },
  {
    name: "Decide and notify the vendor in writing",
    text: "Reduce seats, switch to monthly, cancel or keep. Do it in the platform's billing screen or by email to the vendor, inside the notice period.",
  },
];

export const faq = [
  {
    q: "What is auto-renewal and how do I turn it off?",
    a: "It is the clause under which the subscription bills again at the end of the term unless you cancel first. Almost every business subscription has it. On some platforms you switch it off in the billing screen; on others you have to notify the vendor in writing within a notice period (30 or 60 days is common). What matters is not turning it off, but having the date on the calendar with time to decide.",
  },
  {
    q: "Can I reduce seats on an annual plan mid-year?",
    a: "Usually not. On an annual plan you commit to a quantity for twelve months: you can add seats, but the reduction takes effect at renewal. Google Workspace works that way; Slack and Zoom have different rules. If someone leaves mid-year, the practical move is to reassign their seat to the next hire and note the reduction for the renewal date, which is what a true-up at renewal is for.",
  },
  {
    q: "How often should I review the company's subscriptions?",
    a: "Two rhythms: a short review every month (new charges on the card, people who left) and a full review 30 days before each annual renewal. With 15 or 20 subscriptions, that is an hour a month plus an afternoon per major renewal.",
  },
  {
    q: "What can I negotiate before a software renewal?",
    a: "Three things, in this order: the quantity (pay only for the seats you use), the billing cycle (switch to monthly if the team is about to change) and the price (ask to keep last year's rate or get a volume discount). The vendor knows renewal is the only moment you can walk away, so it is when they listen most.",
  },
];

export const related = ["licencias-sin-usar", "licencias-que-sigues-pagando", "sistema-de-compras-de-software-sin-erp"];

export const cta = {
  title: "No subscription renews on its own",
  desc: "Mekovault sends renewal reminders 30 days out with the unused seats and the exact steps for that platform, and Software purchasing keeps the date, the card and the owner of every subscription. Free up to 20 Google Workspace accounts.",
};

export function Body() {
  return (
    <>
      <h2>Why renewal is the only moment spend goes down</h2>
      <p>
        During the year, software spend only goes up. Someone joins, a seat gets added. A department needs a new
        feature, the plan gets upgraded. Nobody notices because each increase is small. Going down, on the other hand,
        has a date: on an annual plan, the quantity under contract is reduced only at renewal. If someone left in
        March and the plan renews in November, their seat is billed until November, and if nobody removes it in
        November, until the following November.
      </p>
      <p>
        A monthly plan costs more per seat but lets you reduce every month. An annual plan is cheaper but locks the
        quantity. And almost all of them, monthly and annual, auto-renew: if you do nothing, they bill again. That is
        why a renewal calendar is not an administrative detail: it is the only tool a company without an IT team has
        for bringing software spend down.
      </p>

      <h2>The three facts in the calendar</h2>
      <p>Every company subscription needs three facts. With fewer, the calendar does not work.</p>
      <ul>
        <li>
          <strong>The renewal date:</strong> the day the next term is billed. On annual plans it is usually the
          contract anniversary; on monthly plans, the same day each month.
        </li>
        <li>
          <strong>The notice period:</strong> how many days before that date you must request the reduction or
          cancellation for it to count. On some platforms, changing it in the billing screen the day before is
          enough; vendor contracts commonly require 30 or 60 days in writing.
        </li>
        <li>
          <strong>Who decides:</strong> the person who knows whether the tool is still needed and how many seats are
          required. Usually the manager of the department that uses it, not finance.
        </li>
      </ul>
      <p>
        The rules differ by platform. These three are verified against each vendor’s own documentation; for the rest,
        check your contract or billing page before assuming anything.
      </p>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>When the charge goes down</th>
            <th>What you have to do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Workspace</td>
            <td>Flexible plan: the following month. Annual plan: only at renewal</td>
            <td>Suspending is not enough: delete or archive the account (flexible) or note the reduction for renewal (annual)</td>
          </tr>
          <tr>
            <td>Slack</td>
            <td>From the next billing cycle</td>
            <td>Deactivate the user; the charge drops on its own</td>
          </tr>
          <tr>
            <td>Zoom</td>
            <td>From the next billing cycle</td>
            <td>Remove the license from the person and also reduce the quantity on your contract</td>
          </tr>
          <tr>
            <td>Others (Adobe, Notion, Canva, your CRM, etc.)</td>
            <td>Depends on the contract</td>
            <td>Check the notice period and whether the reduction applies next month or at renewal</td>
          </tr>
        </tbody>
      </table>

      <h2>The 30-day review</h2>
      <p>
        Thirty days before each renewal, the owner and finance sit down for half an hour and check four things.
        Thirty days because it is enough time to decide, notify the vendor within the notice period and, if needed,
        negotiate.
      </p>
      <ol>
        <li>
          <strong>Unused seats:</strong> purchased and assigned to nobody. The easiest reduction: nobody will miss
          them.
        </li>
        <li>
          <strong>Suspended accounts with a license:</strong> people who no longer work there, whose account is
          suspended but still holds a seat. They are billed like active ones. Delete, archive or reassign the seat
          before renewal.
        </li>
        <li>
          <strong>People starting next month:</strong> if there are confirmed hires, keep seats for them instead of
          reducing and adding again. The HR calendar and the renewal calendar have to be read together.
        </li>
        <li>
          <strong>The new price:</strong> many vendors raise prices at renewal and announce it in an email nobody
          reads. Compare last year’s per-seat price with what you are about to be charged.
        </li>
      </ol>
      <p>
        With those four numbers, the decision is simple: keep the same quantity, reduce, switch to monthly or
        cancel. What does not work is finding out when the charge lands.
      </p>

      <h2>A routine and a template</h2>
      <p>
        Renewal management runs on two rhythms. Once a month, someone in finance looks at the corporate card
        statement and the expense reports: any software charge that is not on the calendar gets added. And 30 days
        before each annual renewal, the review above. For a company with 15 or 20 subscriptions, that is an hour a
        month.
      </p>
      <p>The template is a spreadsheet with one row per subscription and these columns:</p>
      <ul>
        <li><strong>Tool and plan:</strong> for example, Google Workspace Business Standard.</li>
        <li><strong>Seats purchased and seats in use:</strong> the difference is what you are overpaying.</li>
        <li><strong>Price per seat and total per month or per year.</strong></li>
        <li><strong>Billing cycle:</strong> monthly or annual.</li>
        <li><strong>Renewal date.</strong></li>
        <li><strong>Notice period:</strong> in days, and how to give notice (billing screen or email to the vendor).</li>
        <li><strong>Payment method:</strong> which card or account, and whose.</li>
        <li><strong>Owner:</strong> who decides whether it continues.</li>
        <li><strong>Decision and date:</strong> keep, reduce to how many, switch to monthly, cancel.</li>
      </ul>
      <p>
        Before renewing, negotiate. The vendor knows renewal is the only moment you can walk away, so it is when they
        listen most. Ask, in this order: fewer seats (only the ones you use), monthly billing if the team is going to
        change in the coming months, and price (keep last year’s rate or a volume discount). If they say no to all
        three, at least you have the date written down for next year.
      </p>

      <h2>What Mekovault does</h2>
      <p>
        The Licenses screen shows, per platform, how many seats you have purchased, how many are in use and how many
        sit on suspended accounts, what they cost per month and the date until which they can be reduced. Thirty days
        before each renewal, Mekovault sends you a reminder with the unused seats and the exact steps for that
        platform to reduce the quantity. Reducing the quantity under contract is something the company does in each
        platform’s billing screen; Mekovault tells you how many, when and how, and keeps the record. The verified
        rules per platform are in <Link href="/license-control">License control</Link>.
      </p>
      <p>
        <Link href="/compras-de-software">Software purchasing</Link> keeps, for every subscription, the renewal date,
        the card or account it is paid with and the owner who decides. That includes tools with no connector, such as
        Canva, Notion or Adobe: they are entered by hand with price, date and owner, or imported from your spreadsheet
        in one go. When a person leaves, the seat they held is flagged for removal instead of running until the next
        renewal. To estimate how much you are losing today, use the{" "}
        <Link href="/calculadora-licencias">license calculator</Link>.
      </p>
    </>
  );
}
