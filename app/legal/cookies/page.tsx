import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Uso de cookies en el sitio y portal de Mekovault.",
};

export default function CookiesPage() {
  return (
    <>
      <h1>Política de Cookies</h1>
      <p className="text-sm text-muted-foreground">Vigencia: 2026</p>

      <h2>Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web almacena en tu
        dispositivo para recordar información entre visitas.
      </p>

      <h2>Cookies que usamos</h2>
      <ul>
        <li>
          <strong>Esenciales</strong>: cookies de sesión para el portal
          (autenticación, refresh tokens HttpOnly). Sin ellas el servicio no
          funciona.
        </li>
        <li>
          <strong>Preferencias</strong>: recordar el tema (claro/oscuro) elegido
          por el usuario. Almacenado en <code>localStorage</code>.
        </li>
      </ul>

      <h2>Lo que NO usamos</h2>
      <p>
        Mekovault no utiliza cookies de tracking publicitario ni analytics de
        terceros en el sitio marketing por defecto. Si un cliente activa
        Cloudflare Insights u otra analítica en su propio portal white-label,
        eso se rige por su propia política.
      </p>

      <h2>Cómo gestionarlas</h2>
      <p>
        Puedes eliminar las cookies desde la configuración de tu navegador. Si
        eliminas las cookies esenciales, tendrás que iniciar sesión de nuevo.
      </p>

      <h2>Contacto</h2>
      <p>
        Escríbenos a{" "}
        <a href="mailto:privacidad@mekovault.com">privacidad@mekovault.com</a>{" "}
        si tienes dudas.
      </p>
    </>
  );
}
