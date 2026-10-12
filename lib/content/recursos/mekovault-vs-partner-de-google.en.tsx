import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs hiring a Google Workspace partner: licenses and support are not the same as running the accounts",
  seoTitle: "Mekovault vs a Google Workspace partner",
  description:
    "The partner sells licenses, sets up and supports; Mekovault is the tool HR uses to request hires and departures that run on their own, with evidence.",
  question: "Is my Google partner enough, or do I need Mekovault?",
};

export const summary =
  "A Google Workspace partner or reseller sells you the licenses, sets up the console and, if you hire them for it, manages the accounts for you as a service. Mekovault does not sell licenses and does not replace the partner: it is the tool HR uses to request hires and departures, which then run on their own, with the manager's decision and evidence. You can use both: the partner for licenses and technical support, Mekovault for the day-to-day of the accounts.";

export const faq = [
  {
    q: "Do I need a Google partner to use Mekovault?",
    a: "No. Mekovault connects to your Google Workspace with a ten-minute guide. If you buy the licenses from a partner, nothing changes: Mekovault only manages the accounts, not Google's billing.",
  },
  {
    q: "What does the partner do that Mekovault does not?",
    a: "It sells and invoices Google licenses (sometimes at a discount), migrates email, sets up domains and security, and provides Google technical support. Mekovault does none of that.",
  },
  {
    q: "I am a Google partner. Can I offer Mekovault?",
    a: "Yes, there is a partner program with a monthly commission for as long as the customer stays active, and the option to use your own brand. Details are on the partners page.",
  },
];

export const related = ["mekovault-vs-consola-de-google", "que-es-el-control-de-cuentas-y-licencias", "baja-empleado-google-workspace"];

export function Body() {
  return (
    <>
      <h2>What each one does</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Google Workspace partner</th>
            <th>Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google licenses</td>
            <td>Sells, invoices and renews them; sometimes at a discount</td>
            <td>Does not sell them; shows how many you bought, use and have on blocked accounts</td>
          </tr>
          <tr>
            <td>Initial setup</td>
            <td>Domains, email migration, security, devices</td>
            <td>Connection to your already configured Workspace</td>
          </tr>
          <tr>
            <td>Day-to-day hires and departures</td>
            <td>As a service: someone at the partner does it when you write to them</td>
            <td>HR requests it or it comes from your payroll system (Buk and Talana today); it runs on its own on the date, without writing to anyone</td>
          </tr>
          <tr>
            <td>Who decides on files and email</td>
            <td>Whoever requested the departure, by email or phone</td>
            <td>The direct manager, with options and reminders</td>
          </tr>
          <tr>
            <td>The other platforms</td>
            <td>Out of scope</td>
            <td>Seats and authorized apps, per platform</td>
          </tr>
          <tr>
            <td>Evidence</td>
            <td>Emails and tickets with the partner</td>
            <td>Immutable 365-day audit, per company</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>Included in the licenses or per hour of support</td>
            <td>One price per company per month</td>
          </tr>
        </tbody>
      </table>

      <h2>When the partner is enough</h2>
      <p>
        If you have few people, someone joins or leaves every few months, and the partner answers the same day. The
        cost is the dependency: the departure happens when someone writes and when the partner picks it up.
      </p>
      <h2>When to add Mekovault</h2>
      <p>
        If people join and leave every month, if HR does not want to depend on a third party for every hire, if you
        want the manager to decide and evidence to be kept, or if you pay for Slack, Zoom or Figma per person on top of
        Google. If your payroll is ADP, Gusto or BambooHR, HR records the hire or departure in Mekovault and it runs
        the same way. The partner keeps selling you the licenses; Mekovault runs the accounts. What gets left half done
        when it is done by hand, in{" "}
        <Link href="/recursos/mekovault-vs-consola-de-google">Mekovault vs the Google console</Link>.
      </p>
    </>
  );
}
