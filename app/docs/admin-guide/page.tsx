export const metadata = { title: "Guía del administrador · Mekovault" };

export default function AdminGuide() {
  return (
    <>
      <h1>Guía del administrador</h1>
      <p>
        Todo lo administrable vive en el sitio de tu organización, en{" "}
        <code>app.mekovault.com/&lt;tu-empresa&gt;/settings</code>.
      </p>

      <h2>Personas y roles</h2>
      <p>Buscador sobre el directorio. Cada rol define qué puede hacer una persona:</p>
      <table>
        <thead>
          <tr>
            <th>Rol</th>
            <th>Puede</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Administrador</td>
            <td>Todo: productos, personas, roles, facturación.</td>
          </tr>
          <tr>
            <td>Soporte de tickets</td>
            <td>Recibir, atender y ejecutar tickets (crear, bloquear, reactivar cuentas, alias, grupos).</td>
          </tr>
          <tr>
            <td>Personas y Cultura (RRHH)</td>
            <td>Solicitar altas, bajas y reactivaciones y seguir su estado. No ejecuta.</td>
          </tr>
          <tr>
            <td>Solicitante</td>
            <td>Pedir cuentas genéricas o secundarias, alias, grupos y reactivaciones temporales; ver sus tickets.</td>
          </tr>
          <tr>
            <td>Auditor</td>
            <td>Solo lectura de auditoría y reportes.</td>
          </tr>
        </tbody>
      </table>
      <p>Quitar todos los roles quita el acceso. Nunca se puede quitar al último administrador.</p>

      <h2>Productos</h2>
      <p>
        En <strong>Productos</strong> ves qué tienes contratado, su precio efectivo con promociones y
        su estado operativo (Operativo, Con problemas, Pausado). Los tickets disponibles dependen de
        los productos activos.
      </p>

      <h2>Calendario de operaciones</h2>
      <p>
        Todo lo programado (altas al día de ingreso, bloqueos, vencimientos de reactivaciones
        temporales, recordatorios) se ve por día. Puedes cancelar o reprogramar; cada cambio queda
        como comentario en el ticket y en la auditoría.
      </p>

      <h2>Remitentes y plantillas</h2>
      <p>
        Configura desde qué dirección salen los correos por contexto (altas, bajas, contraseñas,
        soporte) y envía una prueba. Puedes elegir que salgan por el relay de Mekovault con tu
        dirección visible, o directamente desde tu dominio por Gmail API usando la misma
        delegación que ya autorizaste (requiere el ámbito <code>gmail.send</code>). Las
        plantillas de correo se personalizan por idioma.
      </p>

      <h2>Plantillas de acceso</h2>
      <p>
        Combinan roles, grupos y servicios que se aprovisionan juntos a una persona nueva. Se eligen
        con selectores, sin identificadores técnicos.
      </p>

      <h2>Auditoría</h2>
      <p>
        Cada acción relevante (roles, accesos, tickets ejecutados, operaciones canceladas) queda
        registrada con quién, cuándo y qué cambió. Los registros de auditoría son inmutables.
      </p>

      <h2>Eliminar la organización</h2>
      <p>
        Un administrador puede solicitar la eliminación. Se ejecuta como un proceso encolado y
        auditado que revoca credenciales, borra secretos, datos y registros de correo, y envía un
        correo con el detalle de cada paso al completarse.
      </p>
    </>
  );
}
