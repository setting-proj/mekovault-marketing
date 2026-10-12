import Link from "@/components/Link";

export const meta = {
  title: "Qué hacer con el correo de un trabajador que se va: RGPD, opciones y la política que recomendamos",
  seoTitle: "El correo del trabajador que se va: qué hacer · Mekovault",
  description:
    "¿Puede la empresa leer el correo de un extrabajador? Qué exigen el RGPD, la AEPD y los tribunales, y cómo redirigir, delegar o cerrar el buzón sin riesgo.",
  question: "¿Qué pasa con el correo y los archivos del trabajador que se va?",
};

export const summary =
  "El correo de un trabajador que se va no se borra ni se lee en bloque: se redirige a quien asume sus temas, se activa una respuesta automática y, si hace falta revisar conversaciones en curso, se delega el buzón a la jefatura. En España el RGPD, la ley de protección de datos y los tribunales permiten a la empresa gestionar ese buzón cuando existe una política de uso informada y la revisión es proporcional.";

export const faq = [
  {
    q: "¿Puede la empresa leer el correo corporativo de un extrabajador?",
    a: "Puede gestionarlo, y revisarlo de forma proporcional si existe una política informada de uso del correo. En España el RGPD y la ley de protección de datos exigen que la empresa fije por escrito los criterios de uso de los medios digitales y los comunique a la plantilla; la AEPD y los tribunales añaden finalidad legítima, proporcionalidad y que no haya una vía menos invasiva. Leer todo el buzón por curiosidad no cumple ninguna de esas condiciones.",
  },
  {
    q: "¿Cuánto tiempo hay que conservar el correo?",
    a: "No hay un plazo único. Depende de las obligaciones contractuales, mercantiles y fiscales de tu empresa, que en España fijan plazos de varios años para cierta documentación. Lo razonable es una política escrita: por ejemplo, redirección 90 días, archivo mientras exista obligación de conservar, eliminación después.",
  },
  {
    q: "¿Y si la persona usaba el correo para cosas personales?",
    a: "Por eso la política debe decir que el correo corporativo es de la empresa, si se admite o no el uso personal, y que puede ser gestionado al terminar la relación. Y por eso la práctica recomendada es redirigir y delegar, no leer en bloque: minimiza lo que la empresa ve.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "offboarding-digital",
  "suspender-eliminar-o-archivar-usuario-google-workspace",
];

export function Body() {
  return (
    <>
      <h2>Qué pregunta la gente (y qué responde la ley)</h2>
      <p>
        “¿Puede la empresa conservar y acceder a la cuenta de correo de un trabajador despedido?” es la pregunta más
        repetida en los foros legales en español, y la respuesta corta es: sí, con condiciones. La cuenta es un recurso
        de la empresa; lo que la ley protege es la expectativa de intimidad y el secreto de las comunicaciones de la
        persona. Esa expectativa se reduce cuando hay una política de uso conocida y firmada que dice que el correo
        corporativo es de la empresa, qué uso se admite y que puede ser gestionado al terminar la relación.
      </p>
      <ul>
        <li>
          <strong>RGPD y ley española de protección de datos.</strong> La empresa es responsable de los datos personales
          que quedan en el buzón y debe tratarlos con una finalidad concreta, de forma proporcional y guardando solo lo
          necesario. La ley española de protección de datos y garantía de los derechos digitales exige además que la
          empresa fije por escrito los criterios de uso de los dispositivos y del correo, y que los comunique a la
          plantilla; si hay representación de los trabajadores, participa en esa definición.
        </li>
        <li>
          <strong>AEPD.</strong> Sus guías sobre el control de los medios digitales en el trabajo van en la misma línea:
          información previa, finalidad legítima y revisión limitada a lo imprescindible. Redirigir el correo y activar
          una respuesta automática es lo aceptado; leer el buzón completo sin un motivo informado, no.
        </li>
        <li>
          <strong>Tribunales.</strong> El Tribunal Supremo, el Tribunal Constitucional y el Tribunal Europeo de Derechos
          Humanos han aceptado que la empresa acceda al correo corporativo cuando existía una política conocida que
          limitaba el uso personal, el acceso tenía una justificación y no había una alternativa menos invasiva. Cuando
          falta la política o el acceso es indiscriminado, lo han rechazado, y el despido basado en esa prueba se ha
          caído.
        </li>
      </ul>
      <p>Esto no es asesoría legal: es el resumen de lo que publican las fuentes y de lo que vemos funcionar. Tu política la revisa tu abogado.</p>

      <h2>Las tres opciones técnicas en Google Workspace</h2>
      <ol>
        <li>
          <strong>Respuesta automática + redirección.</strong> La opción por defecto. Quien escriba recibe un aviso con el
          nuevo contacto y el mensaje llega a esa persona. Nadie entra en el buzón.
        </li>
        <li>
          <strong>Delegación del buzón.</strong> La jefatura puede abrir el buzón desde su propia cuenta, sin contraseña,
          para cerrar conversaciones en curso. Queda registrado quién lo hizo. Es lo proporcional cuando hay clientes a
          medio atender.
        </li>
        <li>
          <strong>Alias o cuenta genérica.</strong> Si la persona atendía una función (ventas, soporte), la dirección se
          convierte en alias de quien la sustituye, o en una cuenta genérica con responsable. Así el correo deja de ser
          de una persona.
        </li>
      </ol>

      <h2>La política que recomendamos (y que puedes copiar)</h2>
      <ul>
        <li>El correo corporativo es de la empresa y se gestiona al terminar la relación laboral; se informa al firmar el contrato, junto con los criterios de uso de los medios digitales.</li>
        <li>El último día se bloquea la cuenta, se activa la respuesta automática y se redirige el correo a la persona que decida la jefatura.</li>
        <li>La jefatura puede delegarse el buzón durante 90 días para cerrar lo pendiente; no se comparte la contraseña.</li>
        <li>Pasados 90 días, la cuenta se elimina o se archiva si hay obligación de conservar; los archivos ya fueron traspasados.</li>
        <li>Todo queda registrado: quién pidió, quién aprobó, qué se hizo y cuándo.</li>
      </ul>

      <h2>Cómo lo hace Mekovault</h2>
      <p>
        Al programar una baja, Mekovault pregunta a la jefatura (no a IT) qué hacer con el correo y los archivos, con
        tres opciones en un correo: traspasar a alguien, recuperar información por unos días, o desactivar. Ejecuta la
        respuesta automática y la redirección a la hora de salida, programa la eliminación y guarda la evidencia 365
        días. Si alguien pide una cuenta genérica para una función, esa cuenta nace con responsable y fecha de revisión.
        Más detalle en <Link href="/recursos/baja-empleado-google-workspace">cómo dar de baja a un trabajador</Link>.
      </p>
    </>
  );
}
