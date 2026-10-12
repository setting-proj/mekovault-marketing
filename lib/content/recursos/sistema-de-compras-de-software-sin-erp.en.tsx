import Link from "@/components/Link";

export const meta = {
  title: "How to set up software purchasing without buying an ERP: request, approve, pay and renew in order",
  seoTitle: "Software purchasing without an ERP · Mekovault",
  description:
    "Who requests, approves, pays and renews each tool: a simple software purchasing workflow for companies of 20 to 500 people, with no ERP and no IT team.",
  question: "How do I get my company's software purchases under control without an ERP?",
};

export const summary =
  "Software purchasing does not need an ERP: it needs every tool to have someone who requests it, someone who approves it, someone who pays for it and a date when it gets reviewed. With a catalog of what is already approved, a request that says who it is for and why, one approver per department and a purchase order tied to the payment and the invoice, a company of 20 to 500 people can get its purchases in order in a week. You can start with a spreadsheet and a form; once renewals start slipping past you, you need something more.";

export const steps = [
  {
    name: "Build the catalog of approved tools",
    text: "List the tools the company already pays for: name, plan, price, who administers it and renewal date. Anything on that list can be requested without a debate.",
  },
  {
    name: "Define a request with three facts",
    text: "Who it is for, what it is for and what it costs per month or per year. If the tool is new, add what problem it solves and whether something similar is already in the catalog.",
  },
  {
    name: "Name one approver per department",
    text: "The direct manager approves anything in the catalog. New tools, or anything over a set amount, also go through whoever controls the budget. Set a response deadline: 48 hours.",
  },
  {
    name: "Buy with a purchase order",
    text: "The buyer issues a purchase order with vendor, amount, billing cycle and cost center, and stores the credentials in the agreed place, not in their inbox.",
  },
  {
    name: "Pay and attach the invoice",
    text: "Treasury pays with the corporate card or a bank transfer and attaches the invoice to the purchase order. That way every card charge has a request behind it.",
  },
  {
    name: "Record the renewal and the offboarding",
    text: "Write down the renewal date and who decides whether it continues. When the person using the license leaves, the license is released or reassigned, not kept on the bill.",
  },
];

export const faq = [
  {
    q: "Do I need an ERP for IT procurement?",
    a: "No. An ERP handles supplies, inventory and accounting for large companies. For software, what you need is a workflow with four roles (who requests, who approves, who buys, who pays) and a record where every tool has a request, a purchase order, an invoice and a renewal date. That fits in a spreadsheet at first, and in a module like Mekovault's Software purchasing later.",
  },
  {
    q: "What is a purchase order and why does it matter for software?",
    a: "It is the document where the company states what it is buying, from whom, for how much and how often, before paying. For software it matters because it records the cost center, the renewal date and who authorized it. When the card charge shows up, you know where it came from.",
  },
  {
    q: "How does a purchase approval workflow work when the manager does not reply?",
    a: "With a deadline and a next person. The practical rule is 48 hours: if the manager does not respond, the request moves to the next person defined (for example, budget control or the system administrator). Without that rule, requests sit in email and people end up paying with their own card.",
  },
  {
    q: "How do I control software spend without going through the card statement every month?",
    a: "Make sure no spend exists without a request. If every tool starts with an approved request, a purchase order and a linked invoice, controlling spend means looking at that list, not rebuilding the statement. The charges with no request behind them are the ones to chase.",
  },
];

export const related = ["inventario-de-software", "calendario-de-renovaciones", "que-preguntar-antes-de-contratar"];

export const cta = {
  title: "Get software purchasing in order without an ERP",
  desc: "Mekovault's Software purchasing handles the request, the approval, the purchase order, the payment and the renewal of every tool, with six roles and a reminder 30 days before renewal. Free up to 20 Google Workspace accounts.",
};

export function Body() {
  return (
    <>
      <h2>How software gets bought today at a 50-person company</h2>
      <p>
        Someone in marketing needs Canva. They message their manager on Slack, the manager says “sure”, and the person
        pays with their own card and files an expense report. Sales signed up for a CRM two years ago on the sales
        director’s card; it bills every month and nobody remembers how many users it has. Design pays for Adobe with
        a card that expires next month. Finance finds out about all of it when the statement arrives.
      </p>
      <p>
        This is not carelessness: it happens because nobody defined who requests, who approves, who pays and who
        reviews. At a company of 20 to 500 people with no IT department, software gets bought the way coffee gets
        bought: when it is needed, with whatever is at hand. The problem shows up later, when there are three tools
        for the same job, a subscription belonging to someone who left, and an annual renewal that charged itself.
      </p>

      <h2>What a software purchasing system really needs</h2>
      <p>
        An ERP solves purchasing of supplies, warehousing and accounting for large companies. For software, IT
        procurement needs far less. These are the pieces:
      </p>
      <ul>
        <li>
          <strong>A catalog of approved tools:</strong> the list of tools the company already pays for and accepts.
          Anything in the catalog can be requested without reopening the discussion.
        </li>
        <li>
          <strong>A request that says who and why:</strong> the person’s name, what they will do with the tool and
          what it costs. Without this, approval is a “sure” on Slack.
        </li>
        <li>
          <strong>One approver per department:</strong> the direct manager. If every purchase goes through the CEO,
          it stalls; if it goes through nobody, it falls apart.
        </li>
        <li>
          <strong>Budget control and cost center:</strong> which department it is charged to and whether there is
          money for it this year. It matters when the tool is new or expensive.
        </li>
        <li>
          <strong>Purchase order:</strong> the document that says what is bought, from whom, for how much and how
          often.
        </li>
        <li>
          <strong>Payment and invoice linked:</strong> every corporate card charge or bank transfer points to a
          purchase order and an invoice.
        </li>
        <li>
          <strong>Renewal date:</strong> the day the company can reduce the quantity or cancel. It is the fact that
          saves the most money and the one least often written down.
        </li>
      </ul>

      <h2>The purchasing workflow in five steps</h2>
      <p>
        The workflow does not change with company size; what changes is who holds each role. At a 30-person company,
        the same person may buy and pay. At 300 people, those are separate departments.
      </p>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Who</th>
            <th>What gets recorded</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Request</td>
            <td>The person who needs the tool</td>
            <td>Who it is for, what for, what it costs, whether it is in the catalog or new</td>
          </tr>
          <tr>
            <td>2. Approve</td>
            <td>The direct manager; if new or over the threshold, also budget control</td>
            <td>Who approved, when, against which budget and cost center</td>
          </tr>
          <tr>
            <td>3. Buy</td>
            <td>The buyer (procurement or office administration)</td>
            <td>Purchase order, vendor, plan purchased, credentials stored</td>
          </tr>
          <tr>
            <td>4. Pay</td>
            <td>Treasury or finance</td>
            <td>Payment method, billing cycle, invoice attached</td>
          </tr>
          <tr>
            <td>5. Renew or cancel</td>
            <td>Whoever administers the tool, with the manager</td>
            <td>Renewal date, decision to keep, reduce or cancel; license released when someone leaves</td>
          </tr>
        </tbody>
      </table>
      <p>
        What matters about the record is not the format: it is that each step leaves a fact the next step uses. The
        purchase order comes from the approved request; the invoice is tied to the order; the renewal is reviewed
        against the date on the order.
      </p>
      <p>
        A purchasing system fails for one of two reasons: it is so heavy that people skip it, or so light that it does
        nothing. These rules keep it in the middle:
      </p>
      <ol>
        <li>
          <strong>Catalog first.</strong> If the tool is in the catalog, purchase approval is one click from the
          manager. Only new tools go through budget control.
        </li>
        <li>
          <strong>Amount threshold.</strong> Below a certain annual amount (say, the cost of one license per year),
          the manager approves alone. Above it, budget control signs off too.
        </li>
        <li>
          <strong>48 hours to respond.</strong> If the approver does not answer within two business days, the request
          moves to the next person. Nobody should pay with their own card because an approval sat in an inbox.
        </li>
        <li>
          <strong>No purchase order, no payment.</strong> Treasury does not pay or reimburse anything without an
          approved request and a purchase order.
        </li>
        <li>
          <strong>Every subscription has an owner and a date.</strong> Including the ones paid by card that never send
          an invoice. If nobody owns it, nobody cancels it.
        </li>
      </ol>

      <h2>How to start with a spreadsheet, and when it stops being enough</h2>
      <p>
        You do not need procurement software for small business to get started. You need a form and a spreadsheet.
        The form collects the request: name, department, tool, what for, cost, billing cycle. The spreadsheet has one
        row per tool with these columns: tool, plan, price, billing cycle, owner, cost center, payment method, renewal
        date, status. The approver replies to the form’s email; the buyer adds the row; the payer records the invoice.
      </p>
      <p>
        That works until one of these happens: the spreadsheet passes 30 rows and nobody updates it; an annual renewal
        slips by because the date was written down but nobody looked; someone left the company and their Figma
        license kept billing for six months; or the CEO asks “how much do we spend on software?” and the answer takes
        a week. At that point, the purchasing system needs to send the reminders itself, not wait for someone to open
        the spreadsheet.
      </p>

      <h2>What Mekovault’s Software purchasing does</h2>
      <p>
        <Link href="/compras-de-software">Software purchasing</Link> is the five-step workflow in this guide, with
        six roles: Requester, Manager, Control, Purchasing, Treasury and Administrator. Someone requests a tool from
        the catalog or a new one. The manager approves with one click if it is in the catalog; if it is new, it goes
        through Control with budget and cost center, then through Purchasing. Purchasing issues the purchase order as
        a PDF, records the vendor and stores the credentials. Treasury pays by corporate card or bank transfer, records
        the billing cycle and gets the invoice reminder. If nobody responds within 48 hours, the next person is
        notified.
      </p>
      <p>
        Every subscription keeps its renewal date, and 30 days before it the reminder arrives to decide whether to
        keep it, reduce the quantity or cancel. When a person leaves, the license they had is released or reassigned
        instead of staying on the bill. Tools with no connector (Canva, Notion, Adobe and the rest) are entered by
        hand with price, renewal date and owner, and they join{" "}
        <Link href="/license-control">License control</Link> alongside Google Workspace. If you already have a
        spreadsheet, it imports in one go. Before deciding, you can estimate how much you are losing on licenses with
        the <Link href="/calculadora-licencias">calculator</Link>.
      </p>
    </>
  );
}
