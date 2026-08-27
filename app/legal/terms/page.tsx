import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso de Mekovault SpA.",
};

export default function TermsPage() {
  return (
    <>
      <h1>Términos y Condiciones</h1>
      <p className="text-sm text-muted-foreground">
        Vigencia: 2026 · Mekovault SpA
      </p>

      <h2>1. Aceptación</h2>
      <p>
        Estos Términos regulan el uso de los servicios de Mekovault SpA
        (&quot;Mekovault&quot;) por parte de las personas u organizaciones que
        se registren en el portal (&quot;Cliente&quot;). Al crear una cuenta o
        utilizar el servicio, el Cliente declara aceptar íntegramente estos
        Términos.
      </p>

      <h2>2. Descripción del servicio</h2>
      <p>
        Mekovault provee una plataforma multi-tenant en la nube que automatiza
        el lifecycle de identidades en Google Workspace, Microsoft Entra y otros
        directorios: altas, bajas, cambios, auditoría y notificaciones.
      </p>

      <h2>3. Cuenta y responsabilidad</h2>
      <p>
        El Cliente es responsable de mantener la confidencialidad de sus
        credenciales y de toda actividad ejecutada bajo su cuenta. Debe informar
        de inmediato cualquier uso no autorizado a{" "}
        <a href="mailto:soporte@mekovault.com">soporte@mekovault.com</a>.
      </p>

      <h2>4. Uso aceptable</h2>
      <p>
        El Cliente se compromete a no utilizar el servicio para actividades
        ilícitas ni contrarias a la Política de Uso Aceptable (AUP). Mekovault
        podrá suspender el servicio ante infracciones flagrantes.
      </p>

      <h2>5. Datos y privacidad</h2>
      <p>
        El tratamiento de datos personales se rige por la Política de
        Privacidad. Mekovault actúa como encargado de tratamiento (data
        processor) de los datos que el Cliente le encomiende.
      </p>

      <h2>6. Suscripción y pagos</h2>
      <p>
        Los planes se facturan en pesos chilenos (CLP) según lo publicado en la
        página de Planes. El pago se procesa vía MercadoPago Chile. El impago
        habilita a Mekovault a suspender el servicio previo aviso.
      </p>

      <h2>7. Nivel de servicio (SLA)</h2>
      <p>
        Mekovault se compromete a un nivel de disponibilidad del 99.9% mensual
        para los planes Business y Enterprise, medido según la ventana de
        cálculo publicada en el panel de estado.
      </p>

      <h2>8. Limitación de responsabilidad</h2>
      <p>
        La responsabilidad total de Mekovault por cualquier reclamo relacionado
        con el servicio se limita al monto pagado por el Cliente en los últimos
        12 meses.
      </p>

      <h2>9. Terminación</h2>
      <p>
        El Cliente puede cancelar su suscripción en cualquier momento desde el
        panel. Mekovault puede terminar el contrato con causa (infracción o
        impago) o sin causa con 30 días de aviso.
      </p>

      <h2>10. Legislación aplicable</h2>
      <p>
        Estos Términos se rigen por las leyes de la República de Chile.
        Cualquier controversia se someterá a los tribunales de Santiago.
      </p>

      <p className="mt-8 text-sm text-muted-foreground">
        Contacto legal: <a href="mailto:cloud@mekovault.com">cloud@mekovault.com</a>.
      </p>
    </>
  );
}
