import Link from "next/link";

export const metadata = { title: "Documentación · Mekovault" };

export default function DocsIndex() {
  return (
    <>
      <h1>Documentación</h1>
      <p>
        Guías breves para poner Mekovault en marcha y administrarlo día a día. Están escritas
        para administradores de TI y personas de RRHH, sin jerga técnica salvo donde hace falta.
      </p>
      <ul>
        <li>
          <Link href="/docs/getting-started">Primeros pasos</Link>: crear la organización, conectar
          Google Workspace o Microsoft 365 y dar acceso al equipo.
        </li>
        <li>
          <Link href="/docs/admin-guide">Guía del administrador</Link>: personas y roles, productos,
          remitentes de correo, calendario de operaciones y auditoría.
        </li>
        <li>
          <Link href="/docs/tickets">Tickets y automatizaciones</Link>: qué hace cada tipo de
          ticket, quién lo puede pedir y qué ocurre solo.
        </li>
        <li>
          <Link href="/docs/troubleshooting">Problemas frecuentes</Link>: errores de conexión,
          correos que no llegan, accesos que no aparecen.
        </li>
      </ul>
      <p>
        El detalle técnico (servicios, base de datos, seguridad) está en{" "}
        <Link href="/governance">Arquitectura y gobernanza</Link>. El estado del servicio, en{" "}
        <Link href="/status">/status</Link>.
      </p>
    </>
  );
}
