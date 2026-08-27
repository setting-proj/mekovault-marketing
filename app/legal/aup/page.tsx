import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Uso Aceptable",
  description:
    "Qué usos están permitidos y prohibidos en la plataforma Mekovault.",
};

export default function AUPPage() {
  return (
    <>
      <h1>Política de Uso Aceptable (AUP)</h1>
      <p className="text-sm text-muted-foreground">Vigencia: 2026</p>

      <p>
        Esta política complementa los Términos y define qué usos NO se permiten
        en la plataforma Mekovault. Al aceptar los Términos, el Cliente acepta
        también esta AUP.
      </p>

      <h2>Usos prohibidos</h2>
      <ul>
        <li>Intentar acceder a datos de otros tenants.</li>
        <li>Probar la seguridad de la plataforma sin autorización explícita.</li>
        <li>
          Enviar spam, phishing o notificaciones no autorizadas a través del
          sistema de emails.
        </li>
        <li>
          Utilizar los conectores (Google Workspace / Microsoft Entra) para
          exfiltrar información sin justificación operativa.
        </li>
        <li>
          Automatizar operaciones a un ritmo que degrade el servicio para otros
          clientes.
        </li>
        <li>
          Compartir credenciales de acceso al portal con terceros no
          autorizados.
        </li>
      </ul>

      <h2>Cumplimiento</h2>
      <p>
        Mekovault se reserva el derecho de investigar y responder a violaciones
        de esta política, incluyendo la suspensión inmediata de la cuenta si el
        riesgo es material.
      </p>

      <h2>Reporte de abusos</h2>
      <p>
        Para reportar un abuso de la plataforma escribe a{" "}
        <a href="mailto:abuse@mekovault.com">abuse@mekovault.com</a>.
      </p>
    </>
  );
}
