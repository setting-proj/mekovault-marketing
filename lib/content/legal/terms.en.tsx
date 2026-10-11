export const title = "Terms and Conditions";
export const description = "Terms and conditions of use for the services of Mekovault SpA.";

export default function Body() {
  return (
    <>
      <h1>Terms and Conditions</h1>
      <p className="text-sm text-muted-foreground">
        Translation for reference. The Spanish version is the binding one.
      </p>
      <p className="text-sm text-muted-foreground">
        Effective: 2026 · Mekovault SpA
      </p>

      <h2>1. Acceptance</h2>
      <p>
        These Terms govern the use of the services of Mekovault SpA
        (“Mekovault”) by the persons or organizations that register on the
        portal (“Customer”). By creating an account or using the service, the
        Customer declares full acceptance of these Terms.
      </p>

      <h2>2. Description of the service</h2>
      <p>
        Mekovault provides a multi-tenant cloud platform that automates the
        identity lifecycle in Google Workspace and other connected platforms:
        onboarding, offboarding, changes, auditing and notifications.
      </p>

      <h2>3. Account and responsibility</h2>
      <p>
        The Customer is responsible for keeping its credentials confidential
        and for all activity performed under its account. Any unauthorized use
        must be reported immediately to{" "}
        <a href="mailto:soporte@mekovault.com">soporte@mekovault.com</a>.
      </p>

      <h2>4. Acceptable use</h2>
      <p>
        The Customer agrees not to use the service for unlawful activities or
        activities contrary to the Acceptable Use Policy (AUP). Mekovault may
        suspend the service in the event of flagrant violations.
      </p>

      <h2>5. Data and privacy</h2>
      <p>
        The processing of personal data is governed by the Privacy Policy.
        Mekovault acts as data processor for the data the Customer entrusts to
        it.
      </p>

      <h2>6. Subscription and payments</h2>
      <p>
        Plans are billed in Chilean pesos (CLP) as published on the Pricing
        page. Payment is processed through MercadoPago Chile. Non-payment
        entitles Mekovault to suspend the service with prior notice.
      </p>

      <h2>7. Service level (SLA)</h2>
      <p>
        Mekovault commits to a monthly availability level of 99.9% for the
        Business and Enterprise plans, measured according to the calculation
        window published on the status page.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        Mekovault’s total liability for any claim related to the service is
        limited to the amount paid by the Customer in the last 12 months.
      </p>

      <h2>9. Termination</h2>
      <p>
        The Customer may cancel its subscription at any time from the panel.
        Mekovault may terminate the agreement for cause (violation or
        non-payment) or without cause with 30 days’ notice.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms are governed by the laws of the Republic of Chile. Any
        dispute shall be submitted to the courts of Santiago.
      </p>

      <p className="mt-8 text-sm text-muted-foreground">
        Legal contact: <a href="mailto:cloud@mekovault.com">cloud@mekovault.com</a>.
      </p>
    </>
  );
}
