export const metadata = { title: "Problemas frecuentes · Mekovault" };

export default function Troubleshooting() {
  return (
    <>
      <h1>Problemas frecuentes</h1>

      <h2>&quot;Validación falló: unauthorized_client&quot; al conectar Google</h2>
      <p>
        La delegación a nivel de dominio no está autorizada para ese cliente o faltan ámbitos. En la
        consola de administración de Google, en <em>Seguridad → Controles de API → Delegación de
        todo el dominio</em>, agrega el identificador del cliente que muestra el asistente con la
        lista de ámbitos completa separada por coma. Luego vuelve a probar la conexión.
      </p>

      <h2>Entré con mi cuenta y me pide crear una organización</h2>
      <p>
        Tu correo no tiene acceso asignado. Pide a un administrador que te agregue en Personas y
        roles. Si tu dominio ya pertenece a una organización, no se puede crear otra. Si usas varias
        cuentas de Google, revisa con cuál entraste (botón &quot;Entrar con otra cuenta&quot;).
      </p>

      <h2>No me aparece un tipo de ticket</h2>
      <p>
        O tu rol no lo permite, o el producto que lo habilita no está contratado. El administrador
        lo ve en Productos y en Permisos de tickets.
      </p>

      <h2>El correo de aprobación o de bienvenida no llega</h2>
      <p>
        Revisa spam y el buzón de RRHH configurado en Empresa. Un administrador puede enviar un
        correo de prueba desde Remitentes. Si el envío de prueba falla, el remitente configurado no
        está validado.
      </p>

      <h2>Los correos salen desde Mekovault y no desde mi dominio</h2>
      <p>
        En Remitentes elegiste "Gmail API con la delegación de tu Workspace", pero la delegación
        no incluye el ámbito <code>gmail.send</code> o la dirección no es un buzón real de tu
        Google Workspace. Agrega el ámbito en la consola de Google (Delegación de todo el dominio,
        misma fila del cliente de Mekovault) y vuelve a enviar una prueba. Mientras tanto los
        correos salen por Mekovault con tu dirección visible y el motivo queda en el registro.
      </p>

      <h2>Una operación programada no ocurrió</h2>
      <p>
        Mira el Calendario de operaciones: cada alta, bloqueo o vencimiento aparece con su estado
        (programada, ejecutada, reintentando, falló, cancelada). Si falló, el ticket tiene el motivo
        y Soporte puede reintentar.
      </p>

      <h2>El sitio no carga</h2>
      <p>
        Consulta <a href="/status">/status</a>. Si todo está operativo y el problema persiste,
        escribe a soporte@mekovault.com indicando la hora y la organización.
      </p>
    </>
  );
}
