import Link from "@/components/Link";

export const summary =
  "Para dar de baja a un empleado en Google Workspace sin perder nada ni pagar de más hay que hacer cinco cosas en orden: bloquear la cuenta el último día, redirigir su correo, traspasar sus archivos de Drive a quien decida su jefatura, liberar o reducir la licencia y eliminar la cuenta después del plazo de gracia. Suspender no basta: una cuenta suspendida se sigue cobrando.";

export const steps = [
  { name: "Bloquear la cuenta el último día", text: "Suspende al usuario en la consola de Google a la hora de salida: cierra sesiones e invalida la contraseña. No elimines todavía." },
  { name: "Redirigir el correo", text: "Activa una respuesta automática y reenvía el correo entrante a quien reemplace a la persona, o convierte el buzón en delegado para su jefatura." },
  { name: "Traspasar Drive y Calendario", text: "Transfiere la propiedad de los archivos de Drive y los eventos a la persona que decida la jefatura. Hazlo antes de eliminar: después no se puede." },
  { name: "Liberar o reducir la licencia", text: "En plan flexible, elimina o archiva la cuenta para dejar de pagar. En plan anual, anota la reducción para la renovación: hasta entonces se cobra igual." },
  { name: "Eliminar después del plazo de gracia", text: "Elimina la cuenta pasados 30 días (o los que fije tu política). Google permite restaurar un usuario eliminado solo durante 20 días." },
];

export const faq = [
  {
    q: "¿Si suspendo la cuenta dejo de pagar la licencia?",
    a: "No. Google cobra las licencias asignadas, y una cuenta suspendida sigue teniendo su licencia asignada. Para dejar de pagar hay que eliminar la cuenta o pasarla a usuario archivado (más barato), y en plan anual la reducción solo rige en la renovación.",
  },
  {
    q: "¿Cuánto tiempo tengo para recuperar una cuenta eliminada?",
    a: "Google permite restaurar un usuario eliminado durante 20 días. Por eso conviene suspender primero y eliminar después de un plazo de gracia, con los archivos ya traspasados.",
  },
  {
    q: "¿Quién decide a quién van los archivos y el correo?",
    a: "La jefatura directa de la persona, no IT. Es quien sabe qué proyectos quedan abiertos. En Mekovault la jefatura recibe un correo con las opciones (traspasar, recuperar información por unos días, desactivar) y decide con un clic.",
  },
  {
    q: "¿Puedo leer el correo del ex empleado?",
    a: "Depende del país y de la política que tengas firmada. En Chile un fallo de 2023 aceptó la revisión del correo corporativo tras la desvinculación cuando la política lo permitía; en España el RGPD exige información previa y proporcionalidad. Lo seguro es redirigir y delegar, no leer en bloque.",
  },
];

export const related = [
  "suspender-eliminar-o-archivar-usuario-google-workspace",
  "correo-del-que-se-va",
  "licencias-que-sigues-pagando",
  "desvinculacion-chile-finiquito-y-cuentas",
];

export function Body() {
  return (
    <>
      <h2>Por qué “borrar el usuario” es la peor forma de hacerlo</h2>
      <p>
        Cuando alguien se va, lo más común es que el administrador entre a la consola de Google el día después y elimine
        al usuario. Eso resuelve el acceso, pero crea tres problemas: los archivos de Drive que no se traspasaron se
        pierden con la cuenta, el correo entrante rebota (y los clientes que escribían a esa persona se enteran de que ya
        no está antes que tú), y nadie revisó qué otras plataformas seguían cobrando: Slack, Zoom, Figma, Adobe, Canva o
        la suscripción que esa persona pagaba con la tarjeta de la empresa.
      </p>
      <p>
        El otro extremo también es frecuente: suspender la cuenta “por si acaso” y no volver a mirarla. Una cuenta
        suspendida conserva su licencia, y Google cobra por licencia asignada. Esa cuenta se paga mes a mes hasta que
        alguien la cierra, en promedio unos seis meses según lo que vemos en empresas de 50 a 500 personas.
      </p>

      <h2>Los cinco pasos, en orden</h2>
      <h3>1. Bloquear el último día, a la hora de salida</h3>
      <p>
        En la consola de administración: Usuarios, elegir la persona, “Suspender usuario”. Esto cierra las sesiones
        abiertas, invalida la contraseña y deja el correo recibiendo mensajes sin que nadie los lea. La fecha importa: ni
        antes (la persona todavía trabaja) ni tres días después (la persona ya no trabaja y sigue entrando). Lo correcto
        es el último día, a la hora de término, y que quede registrado quién lo pidió.
      </p>
      <h3>2. Redirigir el correo y avisar</h3>
      <p>
        Activa una respuesta automática (“esta persona ya no trabaja en la empresa; escribe a…”) y un reenvío del correo
        entrante a quien tome sus temas. Si la jefatura necesita revisar conversaciones en curso, delega el buzón en vez
        de compartir la contraseña. Con esto los clientes y proveedores no se quedan sin respuesta.
      </p>
      <h3>3. Traspasar Drive y Calendario antes de eliminar</h3>
      <p>
        Desde la consola puedes transferir la propiedad de todos los archivos de Drive a otra cuenta, y los eventos del
        calendario también. Hazlo con la cuenta suspendida, antes de eliminarla: una vez eliminada, lo que no se traspasó
        se pierde. ¿A quién? No lo decide IT: lo decide la jefatura directa, que es la única que sabe qué proyectos
        quedaron abiertos.
      </p>
      <h3>4. Liberar o reducir la licencia</h3>
      <p>
        Aquí está la plata. Si tienes plan flexible (pagas mes a mes), al eliminar o archivar la cuenta dejas de pagar
        desde el siguiente ciclo. Si tienes plan anual, la licencia sigue contratada hasta la renovación aunque elimines
        la cuenta; lo que puedes hacer es reasignarla al próximo ingreso y anotar la reducción para la fecha de
        renovación. La opción “usuario archivado” conserva los datos a un costo menor que una licencia completa.
      </p>
      <h3>5. Eliminar después del plazo de gracia</h3>
      <p>
        Pasados 30 días (o el plazo que fije tu política), elimina la cuenta. Google permite restaurar un usuario
        eliminado durante 20 días; después, no. Con los archivos traspasados y el correo redirigido, eliminar ya no
        rompe nada.
      </p>

      <h2>Lo que la consola de Google no hace por ti</h2>
      <ul>
        <li>No sabe que la persona se fue. Alguien tiene que entrar el día correcto y a la hora correcta.</li>
        <li>No le pregunta a la jefatura a quién van los archivos; lo decide quien ejecuta.</li>
        <li>No toca las demás plataformas: Slack, Zoom, Figma y el resto siguen con su asiento asignado.</li>
        <li>No te recuerda eliminar a los 30 días ni reducir en la renovación.</li>
        <li>No deja evidencia de quién pidió, quién aprobó y qué se hizo, para un auditor o para ti.</li>
      </ul>

      <h2>Cómo lo hace Mekovault</h2>
      <p>
        En Mekovault la baja es una solicitud que pide Personas (o que llega sola desde la nómina, con{" "}
        <Link href="/conectores/buk">BUK</Link> o <Link href="/conectores/talana">Talana</Link>). Se programa para el
        último día a la hora de salida y se ejecuta sola: bloqueo con cierre de sesiones, respuesta automática y
        redirección del correo, licencia marcada para liberar, y la eliminación programada a 30 días con la opción de
        deshacer. La jefatura recibe un correo con las opciones para los archivos (traspasar a alguien, recuperar
        información por unos días, desactivar) y decide con un clic; si no responde, recibe dos recordatorios. Todo queda
        en la auditoría por 365 días. Y si la persona vuelve o hubo un error, la cuenta se reactiva con sus grupos y su
        unidad, de forma temporal o definitiva.
      </p>
      <p>
        Si tu empresa usa además Slack, Zoom o Figma, Mekovault te muestra qué asientos quedaron asignados a una cuenta
        bloqueada y qué tienes que cambiar en cada consola; las plataformas que permiten automatizarlo se van sumando una
        por una.
      </p>
    </>
  );
}
