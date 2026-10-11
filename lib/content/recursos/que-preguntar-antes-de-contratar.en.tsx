import Link from "@/components/Link";

export const meta = {
  title: "The 21 questions to ask any vendor before you buy, and how Mekovault answers them",
  seoTitle: "21 questions to ask before you buy · Mekovault",
  description:
    "The checklist an advisor would give you: discovering software, employee exits, ease of use, pricing and security. With Mekovault's honest answer to each.",
  question: "What should I ask any vendor before I buy?",
};

export const summary =
  "These are the 21 questions an advisor would ask any account and license management vendor before signing, grouped in five blocks: discovering software, handling exits, ease of use, pricing and security. Next to each one, Mekovault's answer, including the ones that are 'not yet'.";

export const cta = {
  title: "Ask for a demo with your own tests",
  desc: "Create a test employee, simulate their exit and see what got closed, which license was released and what was recorded. Free for 90 days, no credit card.",
};

export const related = [
  "que-es-el-control-de-cuentas-y-licencias",
  "offboarding-digital",
  "mekovault-vs-factorial",
];

type Row = { q: string; a: string; state: "si" | "parcial" | "no" };

const BLOCKS: Array<{ title: string; rows: Row[] }> = [
  {
    title: "1. Discovering all the software",
    rows: [
      { q: "Does it detect software we pay for even if it is not in an inventory?", a: "Yes for anything accessed with the company Google account: every week it lists the apps authorized by each person. Whatever is paid by card and never touches Google is recorded in Purchases, with an owner and an invoice, but it is not discovered on its own.", state: "parcial" },
      { q: "Does it identify subscriptions paid with cards from different departments?", a: "Only if they are recorded in Purchases. We do not read card statements.", state: "parcial" },
      { q: "Does it show the monthly and annual cost of each program?", a: "Yes, in Licenses for the connected platforms and in Purchases for recorded subscriptions, with a total per currency.", state: "si" },
      { q: "Does it detect unused accounts and licenses that can be removed?", a: "Yes: licenses purchased, assigned and on suspended accounts, per platform, and what to change at renewal.", state: "si" },
    ],
  },
  {
    title: "2. Handling employee exits",
    rows: [
      { q: "If I let someone go tomorrow, does a single action remove all their access?", a: "One offboarding request: suspension in Google at the end of the last day, email redirected, authorized apps revoked, license flagged, deletion scheduled. Connected platforms are closed in the same step; guided ones become a task with an owner.", state: "si" },
      { q: "Does it suspend or delete accounts in Google Workspace, Slack, Zoom and Canva?", a: "Google Workspace: yes, today. Slack, Zoom and Canva: being added one by one; in the meantime they are guided tasks with a record.", state: "parcial" },
      { q: "Does it cancel the subscription or only deactivate the user?", a: "It deactivates the user and releases the seat. No platform lets a third party reduce what you have under contract: we tell you exactly what to reduce and when (on an annual plan, at renewal).", state: "parcial" },
      { q: "Does it reassign licenses and keep files and email before closing?", a: "Yes: the manager decides by email where the files and email go; the license is released or reassigned to the next hire.", state: "si" },
      { q: "What happens with apps that cannot be disconnected automatically?", a: "They become a guided task with an owner, a due date and a record. We do not say yes when the answer is no.", state: "si" },
    ],
  },
  {
    title: "3. Ease of use",
    rows: [
      { q: "Can I use it without technical knowledge?", a: "Yes. The owner or someone in operations connects it following a guide, and from then on People uses it. If you prefer, we connect it with you on a video call at no cost.", state: "si" },
      { q: "Do I get alerts before renewals and when former employees still have accounts?", a: "Yes: a notice before renewal with the quantity to reduce, and a notice when an offboarding is pending or needs attention.", state: "si" },
      { q: "Are the dashboard and reports available in my language?", a: "Yes: English, Portuguese, and Spanish for Chile, Argentina and Mexico.", state: "si" },
      { q: "How long does setup take and who configures it?", a: "Ten minutes to connect Google Workspace; the first request the same day. There is no implementation project.", state: "si" },
    ],
  },
  {
    title: "4. Pricing and terms",
    rows: [
      { q: "Is it billed per user, per app or per number of accounts?", a: "Per company. One monthly price for the modules you use, no per-user fee.", state: "si" },
      { q: "Are there extra charges for setup, connectors or support?", a: "No.", state: "si" },
      { q: "Can I pay month to month or does it require an annual contract?", a: "Month to month. Free for 90 days with no credit card; cancel whenever you want.", state: "si" },
      { q: "Can you show how much I save and how it is calculated?", a: "Licenses shows what you pay on suspended and unassigned accounts; the audit log records every license released. The calculator gives an estimate before you connect.", state: "si" },
    ],
  },
  {
    title: "5. Security and accountability",
    rows: [
      { q: "What permissions does it need to access my apps?", a: "The ones to manage users, groups, licenses and authorized apps in Google Workspace. It does not read email or files and does not ask for permission to do so.", state: "si" },
      { q: "Who can approve an offboarding and how is each action recorded?", a: "The roles you define; each request type states which roles may submit it. Everything goes into an audit log that cannot be erased, kept 365 days, downloadable.", state: "si" },
      { q: "Where is the data stored and how is it protected?", a: "Data separated per company, encrypted credentials with a record of every use, sessions with MFA. Details in Security and architecture.", state: "si" },
      { q: "What happens if the tool fails or cannot close an account?", a: "The request is marked 'needs attention' with the reason and sends a notice; nothing is taken as done without confirmation from the platform. A suspension that already ran can be undone within 60 minutes.", state: "si" },
    ],
  },
];

const LABEL = { si: "Yes", parcial: "Partly", no: "Not yet" } as const;

export function Body() {
  return (
    <>
      <p>
        The list comes from what advisors and AI assistants answer when a small business owner asks what to demand. We
        use it against ourselves: where the answer is “partly”, we say so. Copy the questions and ask them of any
        vendor, Mekovault included.
      </p>
      {BLOCKS.map((b) => (
        <section key={b.title}>
          <h2>{b.title}</h2>
          <table>
            <thead>
              <tr>
                <th>Question</th>
                <th>Mekovault</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r) => (
                <tr key={r.q}>
                  <td>{r.q}</td>
                  <td>
                    <strong>{LABEL[r.state]}</strong>
                  </td>
                  <td>{r.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}

      <h2>The five tests you should demand in a demo</h2>
      <ol>
        <li>Create a test employee and assign them email, groups and a license.</li>
        <li>Simulate their exit and check which access is removed on its own and at what time.</li>
        <li>Check that the license is free and what the tool says about renewal.</li>
        <li>Find an app authorized with that account that was not in any inventory.</li>
        <li>Show the audit log: who requested, who approved, what was done, when.</li>
      </ol>
      <p>
        And the question that sums it all up: “if someone leaves tomorrow, can you prove to me that their access was
        closed, their licenses were recovered and whatever we no longer need was canceled, without me having to chase
        five people?”. What Mekovault does on its own, what stays guided and what is not there yet, in{" "}
        <Link href="/platforms">Platforms</Link>.
      </p>
    </>
  );
}
