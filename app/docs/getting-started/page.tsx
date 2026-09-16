export const metadata = { title: "Primeros pasos · Mekovault" };

export default function GettingStarted() {
  return (
    <>
      <h1>Primeros pasos</h1>
      <p>
        En unos 15 minutos tienes la organización creada, el directorio conectado y las primeras
        personas con acceso.
      </p>

      <h2>1. Crea tu organización</h2>
      <ol>
        <li>Entra en <code>app.mekovault.com</code> con tu cuenta de Google o Microsoft de la empresa.</li>
        <li>
          El asistente crea la organización con el dominio de tu correo. Si tu dominio ya pertenece
          a una organización, no se crea otra: pide acceso a tu administrador.
        </li>
        <li>Quien crea la organización queda como <strong>Administrador</strong>.</li>
      </ol>

      <h2>2. Conecta Google Workspace o Microsoft 365</h2>
      <p>
        Mekovault necesita una credencial delegada para leer el directorio y crear, bloquear o
        reactivar cuentas. El asistente muestra paso a paso qué copiar en la consola de
        administración (en Google: el identificador del cliente y la lista de ámbitos separados por
        coma). Al terminar hace una prueba real y te dice si falta algo.
      </p>
      <p>Los dominios habilitados en tu consola aparecen luego como opciones al crear cuentas.</p>

      <h2>3. Da acceso a tu equipo</h2>
      <p>
        En <strong>Configuración → Personas y roles</strong> buscas a alguien del directorio y le
        asignas uno o varios roles: Administrador, Soporte de tickets, Personas y Cultura,
        Solicitante o Auditor. Si esa persona nunca entró a Mekovault, el acceso queda listo para su
        primer inicio de sesión. Sin un rol asignado nadie entra.
      </p>

      <h2>4. Configura los correos</h2>
      <p>
        En <strong>Configuración → Remitentes</strong> defines desde qué dirección salen los avisos
        y pruebas el envío con un clic. En <strong>Configuración → Empresa</strong> indicas el buzón
        de RRHH que recibe copia de las altas de cuenta.
      </p>

      <h2>5. Prueba con un ticket</h2>
      <p>
        Desde el sitio de tu organización, <strong>Tickets → Nuevo ticket</strong>. Elige el
        servicio, completa los datos y revisa el resumen antes de confirmar. El primer caso
        recomendado es <em>Crear cuenta</em> con fecha de ingreso: verás cómo la cuenta se crea sola
        ese día.
      </p>
    </>
  );
}
