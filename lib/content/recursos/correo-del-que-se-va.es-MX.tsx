import Link from "@/components/Link";

export const meta = {
  title: "Qué hacer con el correo de un colaborador que se va: ley, opciones y la política que recomendamos",
  seoTitle: "El correo de un colaborador que se va: qué hacer · Mekovault",
  description:
    "¿Puede la empresa leer el correo de un ex empleado? Qué dice la LFPDPPP, qué debe decir el aviso de privacidad y cómo redirigir, delegar o cerrar el buzón.",
  question: "¿Qué pasa con el correo y los archivos del colaborador que se va?",
};

export const summary =
  "El correo de un colaborador que se va no se borra ni se lee en bloque: se redirige a quien toma sus temas, se activa una respuesta automática y, si hace falta revisar conversaciones en curso, se delega el buzón a la jefatura. En México la LFPDPPP permite a la empresa gestionar ese buzón cuando el aviso de privacidad lo informó y la revisión es proporcional a esa finalidad.";

export const faq = [
  {
    q: "¿Puede la empresa leer el correo corporativo de un ex empleado?",
    a: "Puede gestionarlo, y revisarlo de forma proporcional si existe una política informada de uso del correo. En México aplica la LFPDPPP: el aviso de privacidad que recibe el colaborador debe informar que el correo corporativo es de la empresa, que puede ser gestionado al terminar la relación y con qué finalidad; el acceso debe limitarse a esa finalidad. Leer todo el buzón por curiosidad no cumple ninguna de las dos condiciones.",
  },
  {
    q: "¿Cuánto tiempo hay que conservar el correo?",
    a: "No hay un plazo único. Depende de las obligaciones contractuales y fiscales de tu empresa. Lo razonable es una política escrita: por ejemplo, redirección 90 días, archivo 2 años cuando exista obligación, eliminación después.",
  },
  {
    q: "¿Y si el colaborador usaba el correo para cosas personales?",
    a: "Por eso el aviso de privacidad y la política deben decir que el correo corporativo es de la empresa y puede ser gestionado al terminar la relación. Y por eso la práctica recomendada es redirigir y delegar, no leer en bloque: minimiza lo que la empresa ve.",
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
        “¿Puede la empresa conservar y acceder a la cuenta de correo de un trabajador despedido?” es la pregunta más
        repetida en los foros legales en español, y la respuesta corta es: sí, con condiciones. La cuenta es un recurso
        de la empresa; lo que la ley protege es la expectativa de privacidad de la persona. Esa expectativa se reduce
        cuando hay un aviso de privacidad y una política de uso conocidos y firmados que dicen que el correo corporativo
        es de la empresa y que puede ser gestionado al terminar la relación.
      </p>
      <ul>
        <li>
          <strong>México.</strong> Aplica la LFPDPPP (Ley Federal de Protección de Datos Personales en Posesión de los
          Particulares). La empresa es responsable de los datos personales que quedan en el buzón y en los archivos del
          colaborador, y debe tratarlos según los principios de información, finalidad y proporcionalidad: un aviso de
          privacidad que diga qué se hace con el correo corporativo al terminar la relación, y un uso limitado a esa
          finalidad. Redirigir y delegar cumple; leer el buzón completo sin motivo informado, no.
        </li>
        <li>
          <strong>España.</strong> La AEPD y el Tribunal Supremo exigen información previa al trabajador, una finalidad
          legítima y una revisión proporcional. Redirigir el correo y activar una respuesta automática es lo aceptado; leer
          el buzón completo, no.
        </li>
        <li>
          <strong>Chile y Argentina.</strong> Van en la misma dirección: política informada, finalidad y
          proporcionalidad. Las leyes cambian de nombre, el criterio no.
        </li>
      </ul>
      <p>Esto no es asesoría legal: es el resumen de lo que publican las fuentes y de lo que vemos funcionar. Tu aviso de privacidad y tu política los revisa tu abogado.</p>

      <h2>Las tres opciones técnicas en Google Workspace</h2>
      <ol>
        <li>
          <strong>Respuesta automática + redirección.</strong> La opción por defecto. Quien escriba recibe un aviso con el
          nuevo contacto y el mensaje llega a esa persona. Nadie entra al buzón.
        </li>
        <li>
          <strong>Delegación del buzón.</strong> La jefatura puede abrir el buzón desde su propia cuenta, sin contraseña,
          para cerrar conversaciones en curso. Queda registrado quién lo hizo. Es lo proporcional cuando hay clientes a
          medio atender.
        </li>
        <li>
          <strong>Alias o cuenta genérica.</strong> Si el colaborador atendía una función (ventas, soporte), la dirección
          se convierte en alias de quien lo reemplaza, o en una cuenta genérica con responsable. Así el correo deja de ser
          de una persona.
        </li>
      </ol>

      <h2>La política que recomendamos (y que puedes copiar)</h2>
      <ul>
        <li>El correo corporativo es de la empresa y se gestiona al terminar la relación laboral; se informa en el aviso de privacidad al firmar el contrato.</li>
        <li>El último día se bloquea la cuenta, se activa la respuesta automática y se redirige el correo a la persona que decida la jefatura.</li>
        <li>La jefatura puede delegarse el buzón durante 90 días para cerrar lo pendiente; no se comparte la contraseña.</li>
        <li>Pasados 90 días, la cuenta se elimina o se archiva si hay obligación de conservar; los archivos ya fueron traspasados.</li>
        <li>Todo queda registrado: quién pidió, quién aprobó, qué se hizo y cuándo.</li>
      </ul>

      <h2>Cómo lo hace Mekovault</h2>
      <p>
        Al programar una baja, Mekovault le pregunta a la jefatura (no a IT) qué hacer con el correo y los archivos, con
        tres opciones en un correo: traspasar a alguien, recuperar información por unos días, o desactivar. Ejecuta la
        respuesta automática y la redirección a la hora de salida, programa la eliminación y guarda la evidencia 365
        días. Si alguien pide una cuenta genérica para una función, esa cuenta nace con dueño y fecha de revisión. Más
        detalle en <Link href="/recursos/baja-empleado-google-workspace">cómo dar de baja a un empleado</Link>.
      </p>
    </>
  );
}
