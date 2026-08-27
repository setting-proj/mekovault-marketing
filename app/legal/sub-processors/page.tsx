import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sub-procesadores",
  description:
    "Lista de proveedores que Mekovault utiliza para operar la plataforma.",
};

const SUBS = [
  {
    name: "Amazon Web Services (Lightsail)",
    role: "Infraestructura de cómputo y storage",
    location: "us-east-1 (N. Virginia)",
  },
  {
    name: "Cloudflare",
    role: "CDN, WAF, DNS gestionado, protección DDoS",
    location: "Global (proxy con edge en LATAM)",
  },
  {
    name: "Backblaze B2",
    role: "Backups cifrados con object lock",
    location: "US-West (Sacramento)",
  },
  {
    name: "Tailscale",
    role: "Red privada administrativa entre VMs y CI",
    location: "US · SOC2 Type II",
  },
  {
    name: "Brevo (Sendinblue)",
    role: "SMTP transaccional para emails",
    location: "UE",
  },
  {
    name: "MercadoPago",
    role: "Procesamiento de pagos en Chile",
    location: "Chile",
  },
  {
    name: "Frankfurter (ECB)",
    role: "Feed de tipos de cambio USD→CLP",
    location: "UE · Datos públicos",
  },
];

export default function SubProcessorsPage() {
  return (
    <>
      <h1>Sub-procesadores</h1>
      <p className="text-sm text-muted-foreground">Última actualización: 2026</p>

      <p>
        Los siguientes proveedores procesan datos por cuenta de Mekovault para
        operar el servicio. Cada uno está contractualmente obligado a niveles de
        seguridad equivalentes a los nuestros.
      </p>

      <div className="not-prose mt-8 overflow-hidden rounded-2xl border bg-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/40 text-left">
              <th className="px-4 py-3 font-semibold">Proveedor</th>
              <th className="px-4 py-3 font-semibold">Rol</th>
              <th className="px-4 py-3 font-semibold">Región</th>
            </tr>
          </thead>
          <tbody>
            {SUBS.map((s) => (
              <tr key={s.name} className="border-b last:border-b-0">
                <td className="px-4 py-3 font-medium">{s.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{s.role}</td>
                <td className="px-4 py-3 text-muted-foreground">{s.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10">Cambios</h2>
      <p>
        Notificamos a nuestros clientes con al menos 30 días de anticipación
        antes de agregar un sub-procesador nuevo con acceso a datos del Cliente.
      </p>

      <p>
        Preguntas:{" "}
        <a href="mailto:cloud@mekovault.com">cloud@mekovault.com</a>.
      </p>
    </>
  );
}
