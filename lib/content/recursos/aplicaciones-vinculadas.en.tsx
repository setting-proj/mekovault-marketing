import Link from "@/components/Link";

export const meta = {
  title: "Apps with access to your company's accounts: how to see them, decide and revoke",
  seoTitle: "Apps with access to your company accounts · Mekovault",
  description:
    "Every employee authorizes apps with their Google account (Slack, Canva, Apps Script, their phone). How to list them company-wide, rate the risk and revoke.",
  question: "Which apps have access to my company's accounts?",
};

export const summary =
  "Every person in your company authorizes apps with their Google account: Slack, Canva, Notion, a Sheets add-on, their phone. Those apps read Drive, Gmail or Contacts even after the person has left. The Google admin console lets you list them account by account and revoke them; what it does not do is show them all together, rate the risk or warn you when a new one appears.";

export const faq = [
  {
    q: "Where do I see the apps that have access to a Google account?",
    a: "The person sees it in their own account, under Security, 'Third-party apps with account access'. The admin sees it in the admin console, on each user's page, under 'Connected applications', and can revoke them. There is no company-wide view in the console; you have to go user by user or use the API.",
  },
  {
    q: "What is shadow IT?",
    a: "The tools people use to get work done without the company having approved them or even knowing they exist. The most common form today is an app authorized with the company Google account. It is not malice: it is people solving their work. The problem is that nobody decides whether that app may read Drive.",
  },
  {
    q: "Does revoking an app break anything?",
    a: "The person can no longer use that app with their Google account until they authorize it again. That is why it is better to warn first, give a deadline and revoke only once there is a decision. If the app belongs to the company (Slack, for example), it is marked as allowed and left alone.",
  },
];

export const related = [
  "offboarding-digital",
  "baja-empleado-google-workspace",
  "gestion-de-accesos-para-pymes",
];

export function Body() {
  return (
    <>
      <h2>What “an app with access to the account” means</h2>
      <p>
        When someone signs in to a tool with “Continue with Google” or installs an add-on, that tool asks for
        permissions: sometimes just to know who they are (email and name), sometimes to read the calendar, sometimes to
        read and write all of Drive or all of Gmail. The person accepts, and from that moment the app holds a key that
        keeps working even if the person signs out, switches computers or leaves the company, until someone revokes it.
      </p>
      <p>
        In a 100-person company it is normal to find between 300 and 600 active authorizations. Most are harmless
        (signing in to Slack, Notion, the phone). A few read all of Drive or Gmail, and nobody in the company ever
        decided that was okay.
      </p>

      <h2>The three risk levels</h2>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>What permission it asked for</th>
            <th>Examples</th>
            <th>What to do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Low</td>
            <td>Only “sign in with Google” (name, email)</td>
            <td>Slack, Notion, Canva, Figma, Zoom</td>
            <td>Allow if it is a company tool; tolerate if it is personal and touches no data</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>Calendar, Tasks, Forms, the app’s own files</td>
            <td>Calendly, Sheets add-ons, note-taking apps</td>
            <td>Allow with an owner; review yearly</td>
          </tr>
          <tr>
            <td>High</td>
            <td>All of Drive, Gmail, Contacts, admin</td>
            <td>Email assistants, sync tools, scripts, unknown apps</td>
            <td>Decide with the manager; revoke if it is not justified</td>
          </tr>
        </tbody>
      </table>

      <h2>How to review it in Google today, by hand</h2>
      <ol>
        <li>In the admin console, open a user and look at “Connected applications”. Repeat for every person (yes, every one).</li>
        <li>Write down the ones that ask for Drive, Gmail or Contacts.</li>
        <li>Ask each person’s manager whether that app is for work.</li>
        <li>Revoke the ones that are not justified and let the person know.</li>
        <li>Do it again next month, because people authorize apps every week.</li>
      </ol>
      <p>
        You can also block an app for the whole company under Security, API controls, but that decision is made by an
        admin and leaves no trace of why.
      </p>

      <h2>How Mekovault does it</h2>
      <p>
        Mekovault reviews every account in the company once a week (early Saturday morning), stores the inventory of
        apps per person with its risk level, and from then on only records changes. When a new app shows up with no
        policy, the direct manager gets a notice with 5 business days to decide (allow, tolerate or block); if they do
        not decide, there is a reminder, a final notice and the revocation at the end of the day. If the person links it
        again, it is removed again and the manager finds out. And when an account is offboarded, all of its apps are
        revoked in the same step, Slack first. Everything with a record. It is the “shadow IT” part of{" "}
        <Link href="/recursos/offboarding-digital">digital offboarding</Link>, solved without HR having to learn what
        a token is.
      </p>
    </>
  );
}
