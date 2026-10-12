import Link from "@/components/Link";

export const meta = {
  title: "Software inventory: how to find out what your company pays for, who uses it and what it costs per month",
  seoTitle: "Software inventory: how to build yours · Mekovault",
  description:
    "Everything the company pays for per person, with price, owner, renewal and real usage. How to build it in an afternoon and keep it without spreadsheets.",
  question: "How do I know what software my company pays for and who uses it?",
};

export const summary =
  "A software inventory is a list of everything the company pays for per person: each tool with its price, who pays for it, who is responsible, how many licenses were bought and how many are used, and when it renews. In a 60-person company you can build it in an afternoon from three sources: the credit card statement, the Google Workspace admin console and the receipt emails. The hard part is not building it; it is keeping it alive after the first month.";

export const steps = [
  {
    name: "Pull the statement for every card",
    text: "The last 12 months of the company card and of any personal card that gets reimbursed. Every charge from a software vendor is a row.",
  },
  {
    name: "Check the Google Workspace admin console",
    text: "Billing shows what you pay Google. Third-party apps with access to accounts show what people use even if nobody is paying for it yet.",
  },
  {
    name: "Search email for receipts",
    text: "Search 'your receipt', 'invoice' and 'payment confirmation' in the admin, finance and manager mailboxes. That is where subscriptions that bypass the company card show up.",
  },
  {
    name: "Fill in the six fields for each row",
    text: "Name, price and billing period, who pays, owner, licenses bought and used, renewal date. If a field is missing, write 'unknown' and ask.",
  },
  {
    name: "Decide what to do with each finding",
    text: "Licenses on suspended accounts get released, duplicates get merged, trials nobody canceled get cut. Every decision with an owner and a date.",
  },
  {
    name: "Pick where the list will live",
    text: "A spreadsheet works for the first afternoon. To stay current it needs every purchase, every departure and every renewal to update it without someone remembering to.",
  },
];

export const faq = [
  {
    q: "What is a software inventory?",
    a: "The list of every tool the company pays for, with price, billing period, who pays, who owns it, how many licenses were bought and how many are used, and the renewal date. It is the basis for controlling software spend: without the list you do not know what you spend or what you can cut.",
  },
  {
    q: "How do I find out which subscriptions my company pays for if nobody wrote them down?",
    a: "From three sources: the statement for each card (company and reimbursed personal cards), the Billing section of the Google Workspace admin console, and an email search for receipts. Between the three, almost everything shows up; what is left comes from asking each manager what their team pays for.",
  },
  {
    q: "How long does it take to build the SaaS inventory of a 60-person company?",
    a: "An afternoon for the first version, if you have access to the cards and the Google console. What takes longer is confirming who owns each tool and how many licenses are really used, because that means asking people. Keeping it current is what fails afterwards, not building it.",
  },
  {
    q: "Do I need a tool for the app inventory, or is a spreadsheet enough?",
    a: "To start, the spreadsheet is enough. It fails when nobody updates it: a new purchase, a person leaving or a renewal never touch it. Mekovault reads Google Workspace licenses, records the rest in Software purchases with price and renewal date, and imports your spreadsheet so you do not start from zero.",
  },
];

export const related = ["licencias-que-sigues-pagando", "aplicaciones-vinculadas", "licencias-sin-usar"];

export const cta = {
  title: "Import your spreadsheet and let it keep itself current",
  desc: "Mekovault reads Google Workspace licenses, records the rest in Software purchases and warns you before every renewal. Free up to 20 accounts.",
};

export function Body() {
  return (
    <>
      <h2>Why nobody has the list of company subscriptions</h2>
      <p>
        Ask your finance lead how much the company spends on software each month and they will look at the credit card.
        Ask whoever handles IT and they will look at the Google console. Ask marketing and they will name Canva and two
        tools nobody else has heard of. None of them has the full list, and it is not carelessness.
      </p>
      <p>
        Software gets bought a little at a time. Someone starts a free trial on their own card and the company
        reimburses it. A sales manager signs up for Zoom for his team on the department card. The person who created the
        Notion account left a year ago and the charge keeps landing on a card nobody reviews line by line. Every purchase
        made sense at the time; what never existed was one place to write them all down.
      </p>
      <p>
        The result is familiar: when the Google Workspace annual renewal comes around, nobody knows how many licenses
        are really needed. And when someone leaves, nobody knows which tools they had a paid seat in.
      </p>

      <h2>The six fields in every row of a software inventory</h2>
      <p>An app inventory does not need thirty columns. It needs six, filled in for every tool:</p>
      <ul>
        <li>
          <strong>Name and plan:</strong> not “Google”, but “Google Workspace Business Standard”. The plan changes the
          price and the rules for reducing licenses.
        </li>
        <li>
          <strong>Price and billing period:</strong> what each license costs and whether it is billed monthly or
          yearly. An annual charge that lands in March is forgotten by April.
        </li>
        <li>
          <strong>Who pays:</strong> the company card, a department card, a personal card that gets reimbursed, or a
          wire transfer against an invoice.
        </li>
        <li>
          <strong>Owner:</strong> the person who decides whether the tool stays, how many licenses it needs and who gets
          in. If there is no name, the tool has no owner and nobody will ever cut it.
        </li>
        <li>
          <strong>Licenses bought and used:</strong> the ones you pay for and the ones with someone behind them who
          actually signs in. The difference is money that leaves every month.
        </li>
        <li>
          <strong>Renewal date:</strong> the day the vendor charges the full year again. On most annual plans it is the
          only date when you can lower the quantity.
        </li>
      </ul>

      <h2>Where to get the data in one afternoon</h2>
      <p>You do not need to interview the whole company. Three sources cover almost everything:</p>
      <ol>
        <li>
          <strong>The credit card statement.</strong> Pull the last 12 months of the company card and filter for
          software vendors. Twelve months, because annual charges show up only once. Repeat with the personal cards
          that get reimbursed: that is where the trials nobody canceled live.
        </li>
        <li>
          <strong>The Google Workspace admin console.</strong> Under Billing you see every Google subscription, its
          plan, how many licenses you bought and how many are assigned. In each user’s profile, the third-party apps
          with access to the account show which tools people use with their work email: Slack, Canva, Notion, Figma.
          Not all of them are paid, but all of them are candidates for the list.
        </li>
        <li>
          <strong>Receipt emails.</strong> Search “your receipt”, “invoice” and “payment confirmation” in the admin,
          finance and manager mailboxes. Vendors send an email for every charge, and that email carries the plan, the
          amount and the date. It is the most complete source for subscriptions that never touch the company card.
        </li>
      </ol>
      <p>
        That gives you name, price, billing period and who pays. What is missing, owner and licenses used, you get by
        asking each manager with a short list: “these are your team’s tools, who uses them?”.
      </p>

      <h2>The minimum spreadsheet: a 60-person company example</h2>
      <p>
        This is what a freshly built software inventory looks like, with rounded example prices. The incomplete rows
        are not a mistake: they are the list of open questions.
      </p>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Price and billing period</th>
            <th>Who pays</th>
            <th>Owner</th>
            <th>Bought / used</th>
            <th>Renewal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Workspace Business Standard</td>
            <td>$14 per license per month, annual plan</td>
            <td>Company card</td>
            <td>Head of operations</td>
            <td>64 / 58 (3 on suspended accounts)</td>
            <td>March 15</td>
          </tr>
          <tr>
            <td>Slack Pro</td>
            <td>$9 per user per month, monthly</td>
            <td>Company card</td>
            <td>Head of operations</td>
            <td>60 / 55</td>
            <td>Month to month</td>
          </tr>
          <tr>
            <td>Zoom Workplace Pro</td>
            <td>$15 per license per month, annual plan</td>
            <td>Sales manager’s card</td>
            <td>Sales</td>
            <td>10 / 4</td>
            <td>July 1</td>
          </tr>
          <tr>
            <td>Canva for Teams</td>
            <td>$10 per user per month, annual plan</td>
            <td>Personal card, reimbursed</td>
            <td>Marketing</td>
            <td>5 / 5</td>
            <td>November 20</td>
          </tr>
          <tr>
            <td>Notion Plus</td>
            <td>$10 per user per month, monthly</td>
            <td>Personal card of someone who no longer works here</td>
            <td>Nobody assigned</td>
            <td>12 / 7</td>
            <td>Unknown</td>
          </tr>
        </tbody>
      </table>
      <p>
        This company pays about $1,300 a month for these five tools. With the table in front of you, three things nobody
        had seen jump out: Zoom has 6 unused licenses renewing in July, Notion is paid by someone who is gone, and
        Google has 3 licenses on suspended accounts billed exactly like active ones.
      </p>
      <p>
        <strong>What to do with what shows up.</strong> You will usually find three kinds of findings:
      </p>
      <ul>
        <li>
          <strong>Licenses on suspended accounts:</strong> people who left and still hold a paid seat. In Google,
          suspending is not enough; you have to delete or archive the account. How to do it on each platform is in{" "}
          <Link href="/recursos/licencias-sin-usar">unused licenses</Link>.
        </li>
        <li>
          <strong>Duplicates:</strong> two departments paying for Zoom separately, or Canva and Figma for the same job.
          Pick one and move everyone onto a single plan.
        </li>
        <li>
          <strong>Trials nobody canceled:</strong> small monthly charges on personal cards, with one or two users. Ask
          around, and if nobody answers within a week, cancel them.
        </li>
      </ul>

      <h2>Controlling software spend without going back to the spreadsheet</h2>
      <p>
        The spreadsheet you built today is out of date next month: someone joins, someone leaves, someone signs up for
        a new tool, Zoom renews. Nobody opens it again because maintaining it is a job with no owner. For the inventory
        to stay alive, every change has to update it on its own.
      </p>
      <p>
        That is where Mekovault starts. The Licenses screen reads Google Workspace and shows, per platform, licenses
        bought, used and sitting on suspended accounts, with what they cost per month and the last date you can reduce
        them. Subscriptions with no connector (Canva, Notion, Adobe and the rest) are recorded in{" "}
        <Link href="/compras-de-software">Software purchases</Link> with price, renewal date and owner, and go into the
        same control. And so you do not start from zero, you import the spreadsheet you built this afternoon: every row
        gets an owner, an expiration date and a warning 30 days before renewal.
      </p>
      <p>
        From there, when someone leaves, their seat in every tool is flagged for release. When someone asks for
        something new, it goes through approval and is on the list from day one. The inventory stops being a chore and
        becomes the record of what is already happening. If you want to see what you pay today for licenses nobody
        uses, try the <Link href="/calculadora-licencias">calculator</Link>.
      </p>
    </>
  );
}
