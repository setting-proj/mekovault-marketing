import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Cómo tratamos los datos personales en Mekovault.",
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Política de Privacidad</h1>
      <p className="text-sm text-muted-foreground">Vigencia: 2026</p>

      <h2>1. Responsable</h2>
      <p>
        Mekovault SpA, con domicilio en Santiago de Chile, es responsable del
        tratamiento de los datos personales de usuarios del sitio y clientes de
        la plataforma.
      </p>

      <h2>2. Datos que tratamos</h2>
      <ul>
        <li>Datos de contacto: nombre, apellido, email corporativo.</li>
        <li>Datos de la organización: nombre, slug, zona horaria, país.</li>
        <li>
          Datos de uso: acciones realizadas en el portal (para audit log
          inmutable), IPs, user-agent.
        </li>
        <li>
          Datos del directorio conectado: la información que el Cliente
          administre a través de Mekovault (usuarios, grupos, roles), como
          encargados de tratamiento (data processors).
        </li>
      </ul>

      <h2>3. Finalidades</h2>
      <ul>
        <li>Proveer el servicio contratado.</li>
        <li>Cumplir obligaciones legales y de facturación.</li>
        <li>Auditoría interna y externa.</li>
        <li>Comunicaciones transaccionales y de servicio.</li>
      </ul>

      <h2>4. Base de legitimación</h2>
      <p>
        La base legítima principal es la ejecución del contrato con el Cliente y
        el cumplimiento de obligaciones legales aplicables.
      </p>

      <h2>5. Comunicación a terceros</h2>
      <p>
        Compartimos datos únicamente con nuestros sub-procesadores necesarios
        para operar el servicio. Ver{" "}
        <a href="/legal/sub-processors">Sub-procesadores</a>.
      </p>

      <h2>6. Transferencias internacionales</h2>
      <p>
        La infraestructura de Mekovault se aloja en centros de datos ubicados en
        América. Los datos del Cliente no son transferidos a terceros países sin
        cláusulas contractuales equivalentes.
      </p>

      <h2>7. Retención</h2>
      <ul>
        <li>Audit log tenant: 18 meses.</li>
        <li>Audit log platform: 5 años.</li>
        <li>Cuentas suspendidas: 90 días antes de purga completa.</li>
      </ul>

      <h2>8. Derechos del titular</h2>
      <p>
        Los titulares pueden ejercer los derechos de acceso, rectificación,
        cancelación y oposición escribiendo a{" "}
        <a href="mailto:privacidad@mekovault.com">privacidad@mekovault.com</a>.
      </p>

      <h2>9. Seguridad</h2>
      <p>
        Implementamos cifrado en tránsito (TLS 1.3), aislamiento multi-tenant
        con Row-Level Security en PostgreSQL, y un vault dedicado por tenant
        (Infisical). Los secretos nunca abandonan el vault en texto plano.
      </p>

      <h2>10. Contacto</h2>
      <p>
        Delegado de Protección de Datos:{" "}
        <a href="mailto:privacidad@mekovault.com">privacidad@mekovault.com</a>.
      </p>
    </>
  );
}
