import Link from "@/components/Link";

export const meta = {
  title: "What to do with a departing employee's email: the law, the options and the policy we recommend",
  seoTitle: "A departing employee's email: what to do · Mekovault",
  description:
    "Can a company read a former employee's email? What applies in the US, which states require notice, and how to forward, delegate or close the mailbox.",
  question: "What happens to the email and files of the person who leaves?",
};

export const summary =
  "A departing employee's email is neither deleted nor read wholesale: it is forwarded to whoever takes over their work, an auto-reply is turned on and, if ongoing conversations need a look, the mailbox is delegated to the manager. In the US, a company can manage a mailbox on its own systems when there is a written policy the person acknowledged and the review has a business purpose.";

export const faq = [
  {
    q: "Can the company read a former employee's work email?",
    a: "It can manage it, and review it in proportion to a business need, when there is a written email-use policy that the person acknowledged. In the US, work email on company systems is generally treated as company property; courts tend to side with the employer when the policy says there is no expectation of privacy and the review has a legitimate purpose. Some states (New York, Connecticut and Delaware among them) require notice of electronic monitoring. Reading the whole mailbox out of curiosity does not meet any of that.",
  },
  {
    q: "How long do we have to keep the email?",
    a: "There is no single period. It depends on your company's contractual and tax obligations, and on any litigation hold. The reasonable thing is a written policy: for example, forwarding for 90 days, archiving for 2 years when there is an obligation, deletion afterwards.",
  },
  {
    q: "What if the person used the email for personal things?",
    a: "That is why the policy must say that work email belongs to the company and may be managed when the relationship ends. And that is why the recommended practice is to forward and delegate, not to read wholesale: it minimizes what the company sees.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "desvinculacion-chile-finiquito-y-cuentas",
  "suspender-eliminar-o-archivar-usuario-google-workspace",
];

export function Body() {
  return (
    <>
      <h2>What people ask (and what the law answers)</h2>
      <p>
        “Can the company keep and access the email account of a terminated employee?” is one of the most repeated
        questions in HR and legal forums, and the short answer is: yes, with conditions. The account is a company
        resource; what the law protects is the person’s expectation of privacy. That expectation shrinks when there is
        a known, acknowledged use policy that says work email belongs to the company and may be managed when the
        relationship ends.
      </p>
      <ul>
        <li>
          <strong>Federal level.</strong> There is no federal law that stops a company from managing email on its own
          systems. The federal rules on electronic communications make exceptions for the provider of the system (the
          company, for its own accounts), for ordinary business use and for consent, which is where the acknowledged
          policy comes in.
        </li>
        <li>
          <strong>State level.</strong> Some states require employers to give notice of electronic monitoring: New York
          (written notice and acknowledgment at hire), Connecticut and Delaware. Others have broader privacy laws. A
          signed policy that announces monitoring covers most of this.
        </li>
        <li>
          <strong>If you have people abroad.</strong> In the European Union, the GDPR and the data protection
          authorities demand prior information, a legitimate purpose and a proportional review: forwarding and an
          auto-reply are accepted; reading the whole mailbox is not. The same logic is a safe standard everywhere.
        </li>
      </ul>
      <p>This is not legal advice: it is a summary of what public sources say and of what we see working. Your attorney reviews your policy.</p>

      <h2>The three technical options in Google Workspace</h2>
      <ol>
        <li>
          <strong>Auto-reply + forwarding.</strong> The default option. Whoever writes gets a notice with the new contact
          and the message reaches that person. Nobody goes into the mailbox.
        </li>
        <li>
          <strong>Mailbox delegation.</strong> The manager can open the mailbox from their own account, with no
          password, to close ongoing conversations. It is recorded who did it. This is the proportional choice when
          there are customers halfway through something.
        </li>
        <li>
          <strong>Alias or shared account.</strong> If the person covered a function (sales, support), the address
          becomes an alias of their replacement, or a shared account with an owner. That way the email stops belonging
          to one person.
        </li>
      </ol>

      <h2>The policy we recommend (and that you can copy)</h2>
      <ul>
        <li>Work email belongs to the company and is managed when employment ends; the person is informed and acknowledges it at hire.</li>
        <li>On the last day the account is suspended, the auto-reply is turned on and email is forwarded to the person the manager chooses.</li>
        <li>The manager can delegate the mailbox to themselves for 90 days to close what is pending; the password is never shared.</li>
        <li>After 90 days the account is deleted, or archived if there is an obligation to keep it; the files were already transferred.</li>
        <li>Everything is recorded: who requested, who approved, what was done and when.</li>
      </ul>

      <h2>How Mekovault does it</h2>
      <p>
        When an offboarding is scheduled, Mekovault asks the manager (not IT) what to do with the email and the files,
        with three options in one email: transfer to someone, recover information for a few days, or deactivate. It
        runs the auto-reply and the forwarding at the departure time, schedules the deletion and keeps the evidence for
        365 days. If the person asks for a shared account for a function, that account is born with an owner and a
        review date. More detail in{" "}
        <Link href="/recursos/baja-empleado-google-workspace">how to offboard an employee</Link>.
      </p>
    </>
  );
}
