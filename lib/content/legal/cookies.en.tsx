export const title = "Cookie Policy";
export const description = "Use of cookies on the Mekovault website and portal.";

export default function Body() {
  return (
    <>
      <h1>Cookie Policy</h1>
      <p className="text-sm text-muted-foreground">
        Translation for reference. The Spanish version is the binding one.
      </p>
      <p className="text-sm text-muted-foreground">Effective: 2026</p>

      <h2>What cookies are</h2>
      <p>
        Cookies are small files that a website stores on your device to
        remember information between visits.
      </p>

      <h2>Cookies we use</h2>
      <ul>
        <li>
          <strong>Essential</strong>: session cookies for the portal
          (authentication, HttpOnly refresh tokens). Without them the service
          does not work.
        </li>
        <li>
          <strong>Preferences</strong>: remembering the theme (light/dark)
          chosen by the user. Stored in <code>localStorage</code>.
        </li>
      </ul>

      <h2>What we do NOT use</h2>
      <p>
        Mekovault does not use advertising tracking cookies or third-party
        analytics on the marketing site by default. If a customer enables
        Cloudflare Insights or other analytics on its own white-label portal,
        that is governed by its own policy.
      </p>

      <h2>How to manage them</h2>
      <p>
        You can delete cookies from your browser settings. If you delete the
        essential cookies, you will have to sign in again.
      </p>

      <h2>Contact</h2>
      <p>
        Write to us at{" "}
        <a href="mailto:privacidad@mekovault.com">privacidad@mekovault.com</a>{" "}
        if you have any questions.
      </p>
    </>
  );
}
