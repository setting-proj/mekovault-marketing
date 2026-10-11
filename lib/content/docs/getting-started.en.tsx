export const title = "Getting started";
export const description =
  "Create your organization, connect Google Workspace and give your team access in about 15 minutes.";

export default function Body() {
  return (
    <>
      <h1>Getting started</h1>
      <p>
        In about 15 minutes you will have the organization created, the directory connected and the
        first people with access.
      </p>

      <h2>1. Create your organization</h2>
      <ol>
        <li>Go to <code>app.mekovault.com</code> with your company Google account.</li>
        <li>
          The assistant creates the organization using your email domain. If your domain already
          belongs to an organization, another one is not created: ask your administrator for
          access.
        </li>
        <li>Whoever creates the organization becomes the <strong>Administrator</strong>.</li>
      </ol>

      <h2>2. Connect Google Workspace</h2>
      <p>
        Mekovault needs a delegated credential to read the directory and to create, block or
        reactivate accounts. The assistant shows step by step what to copy into the admin console
        (in Google: the client ID and the comma-separated list of scopes). When you finish, it
        runs a real test and tells you if anything is missing.
      </p>
      <p>The domains enabled in your console then appear as options when creating accounts.</p>

      <h2>3. Give your team access</h2>
      <p>
        In <strong>Settings → People and roles</strong> you search for someone in the directory and
        assign them one or more roles: Administrator, Ticket support, People and Culture, Requester
        or Auditor. If that person has never signed in to Mekovault, the access is ready for their
        first sign-in. Without an assigned role, nobody gets in.
      </p>

      <h2>4. Configure email</h2>
      <p>
        In <strong>Settings → Senders</strong> you define which address notifications are sent from
        and test delivery with one click. In <strong>Settings → Company</strong> you set the HR
        mailbox that receives a copy of account creations.
      </p>

      <h2>5. Try it with a ticket</h2>
      <p>
        From your organization’s site, <strong>Tickets → New ticket</strong>. Choose the service,
        fill in the details and review the summary before confirming. The recommended first case is{" "}
        <em>Create account</em> with a start date: you will see how the account is created on its
        own that day.
      </p>
    </>
  );
}
