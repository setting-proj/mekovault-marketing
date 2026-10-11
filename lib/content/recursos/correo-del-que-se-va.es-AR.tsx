import Link from "@/components/Link";

export const meta = {
  title: "Qué hacer con el mail de un empleado que se va: ley, opciones y la política que recomendamos",
  seoTitle: "El mail de un empleado que se va: qué hacer · Mekovault",
  description:
    "¿Puede la empresa leer el mail de un ex empleado? Qué dicen la Ley 25.326 y los tribunales laborales, y cómo redirigir, delegar o cerrar la casilla.",
  question: "¿Qué pasa con el mail y los archivos de la persona que se va?",
};

export const summary =
  "El mail de un empleado que se va no se borra ni se lee en bloque: se redirige a quien toma sus temas, se activa una respuesta automática y, si hace falta revisar conversaciones en curso, se delega la casilla a la jefatura. En Argentina la Ley 25.326 y la jurisprudencia laboral permiten a la empresa gestionar esa casilla cuando existe una política informada y la revisión es proporcional.";

export const faq = [
  {
    q: "¿Puede la empresa leer el correo corporativo de un ex empleado?",
    a: "Puede gestionarlo, y revisarlo de forma proporcional si existe una política informada de uso del correo. En Argentina la Ley 25.326 exige finalidad y proporcionalidad en el tratamiento de datos, y los tribunales laborales han aceptado el control del correo corporativo cuando el empleado fue informado por escrito de que la herramienta es de la empresa y de que puede ser revisada. Leer toda la casilla por curiosidad no cumple ninguna de las dos condiciones.",
  },
  {
    q: "¿Cuánto tiempo hay que conservar el mail?",
    a: "No hay un plazo único. Depende de las obligaciones contractuales e impositivas de tu empresa. Lo razonable es una política escrita: por ejemplo, redirección 90 días, archivo 2 años cuando exista obligación, eliminación después.",
  },
  {
    q: "¿Y si la persona usaba el mail para cosas personales?",
    a: "Por eso la política debe decir que el correo corporativo es de la empresa y puede ser gestionado al terminar la relación. Y por eso la práctica recomendada es redirigir y delegar, no leer en bloque: minimiza lo que la empresa ve.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "desvinculacion-chile-finiquito-y-cuentas",
  "suspender-eliminar-o-archivar-usuario-google-workspace",
];

export function Body() {
  return (
    <>
      <h2>Qué pregunta la gente (y qué responde la ley)</h2>
      <p>
        “¿Puede la empresa conservar y acceder a la casilla de mail de un trabajador despedido?” es la pregunta más
        repetida en los foros legales en español, y la respuesta corta es: sí, con condiciones. La cuenta es un recurso
        de la empresa; lo que la ley protege es la expectativa de privacidad de la persona. Esa expectativa se reduce
        cuando hay una política de uso conocida y firmada que dice que el correo corporativo es de la empresa y que puede
        ser gestionado al terminar la relación.
      </p>
      <ul>
        <li>
          <strong>Argentina.</strong> La Ley 25.326 de Protección de los Datos Personales pide que el tratamiento de los
          datos del trabajador (incluido lo que queda en su casilla) tenga una finalidad informada y sea proporcional.
          La jurisprudencia laboral viene aceptando que la empresa controle y acceda al correo corporativo cuando existe
          una política escrita y conocida, el uso de la herramienta es laboral y la revisión se limita a lo necesario;
          y rechaza el acceso cuando no hubo aviso previo o se revisó más de lo que la finalidad justificaba.
        </li>
        <li>
          <strong>España.</strong> La AEPD y el Tribunal Supremo exigen información previa al trabajador, una finalidad
          legítima y una revisión proporcional. Redirigir el mail y activar una respuesta automática es lo aceptado; leer
          la casilla completa, no.
        </li>
        <li>
          <strong>Chile y México.</strong> Van en la misma dirección: política informada, finalidad y proporcionalidad.
          Las leyes cambian de nombre, el criterio no.
        </li>
      </ul>
      <p>Esto no es asesoramiento legal: es el resumen de lo que publican las fuentes y de lo que vemos funcionar. Tu política la revisa tu abogado.</p>

      <h2>Las tres opciones técnicas en Google Workspace</h2>
      <ol>
        <li>
          <strong>Respuesta automática + redirección.</strong> La opción por defecto. Quien escriba recibe un aviso con el
          nuevo contacto y el mensaje llega a esa persona. Nadie entra a la casilla.
        </li>
        <li>
          <strong>Delegación de la casilla.</strong> La jefatura puede abrir la casilla desde su propia cuenta, sin
          contraseña, para cerrar conversaciones en curso. Queda registrado quién lo hizo. Es lo proporcional cuando hay
          clientes a medio atender.
        </li>
        <li>
          <strong>Alias o cuenta genérica.</strong> Si la persona atendía una función (ventas, soporte), la dirección se
          convierte en alias de quien la reemplaza, o en una cuenta genérica con responsable. Así el mail deja de ser de
          una persona.
        </li>
      </ol>

      <h2>La política que recomendamos (y que podés copiar)</h2>
      <ul>
        <li>El correo corporativo es de la empresa y se gestiona al terminar la relación laboral; se informa por escrito al firmar el contrato.</li>
        <li>El último día se bloquea la cuenta, se activa la respuesta automática y se redirige el mail a la persona que decida la jefatura.</li>
        <li>La jefatura puede delegarse la casilla durante 90 días para cerrar lo pendiente; no se comparte la contraseña.</li>
        <li>Pasados 90 días, la cuenta se elimina o se archiva si hay obligación de conservar; los archivos ya fueron traspasados.</li>
        <li>Todo queda registrado: quién pidió, quién aprobó, qué se hizo y cuándo.</li>
      </ul>

      <h2>Cómo lo hace Mekovault</h2>
      <p>
        Al programar una baja, Mekovault le pregunta a la jefatura (no a IT) qué hacer con el mail y los archivos, con
        tres opciones en un correo: traspasar a alguien, recuperar información por unos días, o desactivar. Ejecuta la
        respuesta automática y la redirección a la hora de salida, programa la eliminación y guarda la evidencia 365
        días. Si alguien pide una cuenta genérica para una función, esa cuenta nace con dueño y fecha de revisión. Más
        detalle en <Link href="/recursos/baja-empleado-google-workspace">cómo dar de baja a un empleado</Link>.
      </p>
    </>
  );
}
