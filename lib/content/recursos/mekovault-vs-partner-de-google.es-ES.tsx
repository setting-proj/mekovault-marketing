import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs contratar un partner de Google Workspace: licencias y soporte no son lo mismo que operar las cuentas",
  seoTitle: "Mekovault vs un partner de Google Workspace",
  description:
    "El partner vende licencias, configura y da soporte; con Mekovault, RRHH pide las altas y bajas y se ejecutan solas con evidencia. Se pueden combinar.",
  question: "¿Me basta con mi partner de Google o necesito Mekovault?",
};

export const summary =
  "Un partner o distribuidor de Google Workspace te vende las licencias, te configura la consola y, si lo contratas, administra las cuentas por ti como servicio. Mekovault no vende licencias ni sustituye al partner: es la herramienta con la que Personas pide las altas y bajas y se ejecutan solas, con decisión de la jefatura y evidencia. Puedes usar los dos: el partner para licencias y soporte técnico, Mekovault para el día a día de las cuentas.";

export const faq = [
  {
    q: "¿Necesito un partner de Google para usar Mekovault?",
    a: "No. Mekovault se conecta a tu Google Workspace con una guía de diez minutos. Si compras las licencias a un partner, sigue igual: Mekovault solo administra las cuentas, no la facturación de Google.",
  },
  {
    q: "¿Qué hace el partner que Mekovault no hace?",
    a: "Vende y factura las licencias de Google (a veces con descuento), migra correos, configura dominios y seguridad, y da soporte técnico de Google. Mekovault no hace nada de eso.",
  },
  {
    q: "Soy partner de Google. ¿Puedo ofrecer Mekovault?",
    a: "Sí, hay un programa de partners con comisión mensual mientras el cliente siga activo, y la opción de poner tu marca. Los detalles están en la página de partners.",
  },
];

export const related = ["mekovault-vs-consola-de-google", "que-es-el-control-de-cuentas-y-licencias", "baja-empleado-google-workspace"];

export function Body() {
  return (
    <>
      <h2>Lo que hace cada uno</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Partner de Google Workspace</th>
            <th>Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Licencias de Google</td>
            <td>Las vende, factura y renueva; a veces con descuento</td>
            <td>No las vende; muestra cuántas compraste, usas y tienes en cuentas bloqueadas</td>
          </tr>
          <tr>
            <td>Configuración inicial</td>
            <td>Dominios, migración de correo, seguridad, dispositivos</td>
            <td>Conexión a tu Workspace ya configurado</td>
          </tr>
          <tr>
            <td>Altas y bajas del día a día</td>
            <td>Como servicio: alguien del partner lo hace cuando le escribes</td>
            <td>Personas lo pide o llega de la nómina; se ejecuta solo en la fecha, sin escribir a nadie</td>
          </tr>
          <tr>
            <td>Quién decide sobre archivos y correo</td>
            <td>Quien pidió la baja, por correo o teléfono</td>
            <td>La jefatura directa, con opciones y recordatorios</td>
          </tr>
          <tr>
            <td>Las demás plataformas</td>
            <td>Fuera de alcance</td>
            <td>Asientos y apps autorizadas, por plataforma</td>
          </tr>
          <tr>
            <td>Evidencia</td>
            <td>Correos y tickets del partner</td>
            <td>Auditoría inmutable 365 días, por empresa</td>
          </tr>
          <tr>
            <td>Precio</td>
            <td>Incluido en las licencias o por hora de soporte</td>
            <td>Un precio por empresa al mes</td>
          </tr>
        </tbody>
      </table>

      <h2>Cuándo basta con el partner</h2>
      <p>
        Si tienes pocas personas, entra y sale alguien cada varios meses, y el partner responde el mismo día. El coste
        es la dependencia: la baja ocurre cuando alguien escribe y cuando el partner la atiende.
      </p>
      <h2>Cuándo sumar Mekovault</h2>
      <p>
        Si entran y salen personas todos los meses, si Personas no quiere depender de un tercero para cada alta, si
        quieres que la jefatura decida y quede evidencia, o si pagas Slack, Zoom o Figma por persona además de Google.
        El partner sigue vendiéndote las licencias; Mekovault opera las cuentas. Qué queda a medias cuando se hace a
        mano, en <Link href="/recursos/mekovault-vs-consola-de-google">Mekovault vs la consola de Google</Link>.
      </p>
    </>
  );
}
