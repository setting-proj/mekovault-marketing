export const metadata = { title: "Tickets y automatizaciones · Mekovault" };

export default function TicketsDocs() {
  return (
    <>
      <h1>Tickets y automatizaciones</h1>
      <p>Crear un ticket es un asistente de tres pasos: servicio, datos, revisar y confirmar.</p>

      <h2>Crear cuenta</h2>
      <p>
        Datos de la persona, fecha y hora de ingreso (08:00 por defecto) y jefatura del directorio.
        Al revisar, Mekovault propone el correo <code>nombre.apellido@dominio</code>, verifica si ya
        existe o existió y te deja decidir: si es la misma persona, se reactiva la cuenta y se le
        envían las credenciales; si es otra, se usa una variante con la inicial del apellido
        materno. El día de ingreso, a la hora indicada, la cuenta se crea sola y sale el correo de
        bienvenida con copia a RRHH y a la jefatura.
      </p>

      <h2>Bloquear cuenta</h2>
      <p>
        Fecha y hora obligatorias, jefatura y comentario. Al revisar se listan las otras cuentas de
        la persona. Al confirmar llega un correo con <strong>Cancelar</strong> y{" "}
        <strong>Bloquear ahora</strong> (piden iniciar sesión). Si nadie actúa, el bloqueo se ejecuta
        a la hora programada y se avisa a jefatura y RRHH.
      </p>

      <h2>Reactivar cuenta</h2>
      <p>Se elige entre las cuentas suspendidas del directorio. Soporte la ejecuta desde el ticket.</p>

      <h2>Reactivar cuenta temporal</h2>
      <p>
        Para un Solicitante: elige la cuenta suspendida y a su jefatura. La jefatura recibe un correo
        con Aprobar y Rechazar (enlace personal, de un solo uso, vence a los 7 días, con
        recordatorio a los 2). Si aprueba, la cuenta queda activa 30 días: aviso 3 días antes y
        bloqueo automático al vencer. Soporte puede prorrogar 30 días, máximo dos veces.
      </p>

      <h2>Cuenta genérica, alias y grupos</h2>
      <p>Se valida que el correo no exista. Soporte ejecuta desde el ticket.</p>

      <h2>Restablecer contraseña</h2>
      <p>
        Es un ticket manual: se indica la cuenta y un comentario; Soporte lo atiende y avisa por el
        ticket.
      </p>

      <h2>Quién puede pedir qué</h2>
      <p>
        Depende del rol (ver la guía del administrador). Un administrador puede agregar excepciones
        puntuales en <em>Permisos de tickets</em>.
      </p>
    </>
  );
}
