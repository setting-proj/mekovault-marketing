import Link from "@/components/Link";

export const meta = {
  title: "Offboarding digital: la lista de cuentas y accesos que hay que cerrar cuando un trabajador se va",
  seoTitle: "Offboarding digital: lista de cuentas y accesos · Mekovault",
  description:
    "Checklist de offboarding: cuentas, licencias, apps conectadas, contraseñas compartidas y suscripciones, con quién hace cada cosa y cuándo. Descargable.",
  question: "¿Qué cuentas y accesos hay que cerrar cuando un trabajador deja la empresa?",
};

export const summary =
  "El offboarding digital es la parte de la baja de un trabajador que nadie ve: cerrar su correo, sus accesos a cada plataforma, las apps que autorizó con su cuenta, las contraseñas compartidas que conocía y las suscripciones que pagaba. Esta lista cubre las 18 cosas que hay que cerrar, quién lo hace y cuándo, y cuáles se pueden hacer solas.";

export const faq = [
  {
    q: "¿Qué diferencia hay entre offboarding y la baja del trabajador?",
    a: "La baja del trabajador es el trámite laboral: carta de despido o comunicación de la salida, finiquito, baja en la Seguridad Social, devolución de equipos. El offboarding es todo el proceso de salida, y el offboarding digital es la parte de cuentas, accesos y suscripciones. En la mayoría de las empresas el trámite laboral se hace bien y la parte digital se hace a medias.",
  },
  {
    q: "¿Quién debería ser responsable del offboarding digital?",
    a: "Quien sabe que la persona se va: RRHH. IT ejecuta si existe; el responsable directo decide qué pasa con los archivos y el correo. El error es que la responsabilidad quede repartida y nadie cierre el ciclo.",
  },
  {
    q: "¿Cuánto tiempo después de la salida siguen teniendo acceso los ex trabajadores?",
    a: "Los estudios publicados hablan de un tercio de los ex trabajadores con acceso a archivos de su anterior empresa, y de accesos que duran semanas o meses. El dato de tu empresa es el que importa: revisa las cuentas suspendidas y las apps autorizadas este mes.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "aplicaciones-vinculadas",
  "licencias-que-sigues-pagando",
  "desvinculacion-chile-finiquito-y-cuentas",
];

export function Body() {
  return (
    <>
      <h2>La lista completa</h2>
      <p>
        Marca lo que aplica a tu empresa. “Sola” significa que una herramienta puede hacerlo sin que nadie entre en una
        consola; “guiada” significa que alguien tiene que hacerlo, pero puede recibir la tarea con fecha y evidencia.
      </p>
      <h3>El último día, a la hora de salida</h3>
      <ol>
        <li><strong>Bloquear la cuenta de correo</strong> (Google Workspace): cerrar sesiones, invalidar contraseña. Sola.</li>
        <li><strong>Respuesta automática y redirección del correo</strong> a quien decida el responsable directo. Sola.</li>
        <li><strong>Revocar las aplicaciones autorizadas con esa cuenta</strong> (Slack, Canva, Apps Script, el móvil). Sola.</li>
        <li><strong>Desactivar en Slack, Zoom, Teams</strong> y el resto de plataformas con puesto de usuario. Sola donde la plataforma lo permite; guiada en las demás.</li>
        <li><strong>Quitar de grupos, listas y calendarios compartidos.</strong> Sola.</li>
        <li><strong>Cambiar las contraseñas compartidas</strong> que la persona conocía (cuentas genéricas, redes sociales, proveedores). Guiada.</li>
        <li><strong>Recuperar o borrar el equipo</strong> (portátil, móvil): cerrar sesiones remotas. Guiada.</li>
      </ol>
      <h3>La primera semana</h3>
      <ol start={8}>
        <li><strong>Traspasar la propiedad de Drive</strong> y los eventos de calendario a la persona que decida el responsable directo. Sola.</li>
        <li><strong>Delegar el buzón</strong> al responsable directo si hay conversaciones en curso, en vez de compartir la contraseña. Sola.</li>
        <li><strong>Reasignar las cuentas genéricas</strong> que administraba (ventas@, soporte@) a un nuevo responsable. Guiada.</li>
        <li><strong>Reasignar las suscripciones pagadas con su tarjeta o a su nombre</strong> (dominios, herramientas, SaaS). Guiada.</li>
        <li><strong>Liberar o reasignar la licencia</strong> de cada plataforma; en plan anual, anotar para la renovación. Sola en Google; guiada en otras.</li>
      </ol>
      <h3>A los 30 días</h3>
      <ol start={13}>
        <li><strong>Eliminar o archivar la cuenta</strong> de correo, con los archivos ya traspasados. Sola, con aviso previo.</li>
        <li><strong>Confirmar que ningún puesto de usuario sigue asignado</strong> en Slack, Zoom, Figma, Adobe, Canva. Sola donde hay lectura; guiada en el resto.</li>
        <li><strong>Revisar que las apps autorizadas no han vuelto</strong> (la persona puede volver a vincular con otra cuenta). Sola.</li>
      </ol>
      <h3>Siempre</h3>
      <ol start={16}>
        <li><strong>Dejar evidencia</strong>: quién pidió, quién aprobó, qué se hizo y cuándo, por cada punto. Sola.</li>
        <li><strong>Avisar a quien corresponde</strong>: responsable directo, RRHH, administración, y a la persona si hay reactivación temporal. Sola.</li>
        <li><strong>Revisar la política</strong> una vez al año: plazos de redirección, archivo y eliminación. Guiada.</li>
      </ol>

      <h2>Qué se hace mal con más frecuencia</h2>
      <ul>
        <li>Cerrar el correo y creer que se ha cerrado todo. Las demás plataformas no se enteran.</li>
        <li>Que la decisión sobre los archivos la tome quien ejecuta, no el responsable directo.</li>
        <li>Suspender “por si acaso” y pagar esa licencia seis meses.</li>
        <li>No revocar las apps que la persona autorizó con su cuenta: siguen leyendo Drive o Gmail después de la salida.</li>
        <li>No tener dónde mirar qué se hizo. Cuando el auditor o el director pregunta, hay que reconstruirlo a partir de correos.</li>
      </ul>

      <h2>Cómo lo hace Mekovault</h2>
      <p>
        De los 18 puntos, Mekovault hace solos los que dicen “sola” en Google Workspace y en las plataformas conectadas, y
        convierte los “guiados” en tareas con responsable, fecha y evidencia. La baja la pide RRHH o llega desde tu
        sistema de nómina (hoy <Link href="/conectores/buk">Buk</Link> y <Link href="/conectores/talana">Talana</Link>;
        Factorial y Sesame se van sumando), se programa para el último día y se ejecuta sola; el responsable directo
        decide por correo qué pasa con archivos y correo; las apps autorizadas se revocan; la eliminación queda
        programada a 30 días con opción de deshacer; y todo queda en la auditoría 365 días. Si quieres la lista para
        imprimir, está al final de{" "}
        <Link href="/recursos/que-preguntar-antes-de-contratar">las 21 preguntas antes de contratar</Link>.
      </p>
    </>
  );
}
