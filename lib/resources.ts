/**
 * Registro de guías y recursos (plan de marketing 2026-10-11, sección 4.2).
 * Hoy existen en español de Chile; la canónica de cada guía es la versión
 * chilena aunque se abra bajo /ar, /mx, /en o /pt.
 */

export type ResourceKind = "pilar" | "guia" | "comparativa" | "checklist" | "definicion";

export type Resource = {
  slug: string;
  kind: ResourceKind;
  /** Título de la página (H1). */
  title: string;
  /** Título para la pestaña (≤ 60 caracteres). */
  seoTitle: string;
  /** Descripción para Google (≤ 155 caracteres). */
  description: string;
  /** Pregunta tal como la escribe la gente (va en el índice). */
  question: string;
  /** Fecha de publicación o última revisión (ISO). */
  updated: string;
  readingMinutes: number;
};

export const RESOURCES: Resource[] = [
  {
    slug: "baja-empleado-google-workspace",
    kind: "pilar",
    title: "Cómo dar de baja a un empleado en Google Workspace sin perder archivos ni pagar de más",
    seoTitle: "Dar de baja un empleado en Google Workspace · Mekovault",
    description:
      "Bloquear, redirigir el correo, traspasar Drive, liberar la licencia y eliminar después: los pasos, en qué orden y qué se sigue cobrando si queda a medias.",
    question: "¿Cómo doy de baja a un empleado en Google Workspace sin seguir pagando?",
    updated: "2026-10-11",
    readingMinutes: 9,
  },
  {
    slug: "suspender-eliminar-o-archivar-usuario-google-workspace",
    kind: "guia",
    title: "Suspender, eliminar o archivar un usuario de Google Workspace: cuál se sigue cobrando",
    seoTitle: "Suspender o eliminar usuario de Google Workspace · Mekovault",
    description:
      "Las tres opciones de la consola de Google comparadas: qué conserva cada una, cuánto cuesta, cuándo se puede deshacer y cuál conviene en cada salida.",
    question: "¿Suspender o eliminar al usuario? ¿Cuál deja de cobrar?",
    updated: "2026-10-11",
    readingMinutes: 6,
  },
  {
    slug: "correo-del-que-se-va",
    kind: "guia",
    title: "Qué hacer con el correo de un empleado que se va: ley, opciones y la política que recomendamos",
    seoTitle: "El correo de un empleado que se va: qué hacer · Mekovault",
    description:
      "¿Puede la empresa leer el correo de un ex empleado? Qué dicen la ley chilena, el RGPD y la mexicana, y cómo redirigir, delegar o cerrar el buzón.",
    question: "¿Qué pasa con el correo y los archivos de la persona que se va?",
    updated: "2026-10-11",
    readingMinutes: 8,
  },
  {
    slug: "offboarding-digital",
    kind: "pilar",
    title: "Offboarding digital: la lista de cuentas y accesos que hay que cerrar cuando alguien se va",
    seoTitle: "Offboarding digital: checklist de cuentas · Mekovault",
    description:
      "Checklist de offboarding de cuentas, licencias, apps conectadas, contraseñas compartidas y suscripciones, con quién hace cada cosa y cuándo. Descargable.",
    question: "¿Qué cuentas y accesos hay que cerrar cuando alguien se va?",
    updated: "2026-10-11",
    readingMinutes: 10,
  },
  {
    slug: "desvinculacion-chile-finiquito-y-cuentas",
    kind: "guia",
    title: "Desvinculación en Chile: de la carta de despido al bloqueo de las cuentas el día del finiquito",
    seoTitle: "Desvinculación en Chile: finiquito y cuentas · Mekovault",
    description:
      "Plazos de la carta de despido y del finiquito en Chile, y cómo encajar ahí el cierre del correo, el traspaso de archivos y la liberación de licencias.",
    question: "¿Cómo coordino el finiquito con el cierre de las cuentas?",
    updated: "2026-10-11",
    readingMinutes: 7,
  },
  {
    slug: "licencias-que-sigues-pagando",
    kind: "pilar",
    title: "Las licencias que sigues pagando: cuentas bloqueadas, plan anual y cómo dejar de pagar lo que nadie usa",
    seoTitle: "Licencias de Google Workspace que sigues pagando · Mekovault",
    description:
      "Una cuenta suspendida se factura igual que una activa. Cómo contar las licencias compradas, asignadas y en cuentas bloqueadas, y qué cambiar al renovar.",
    question: "¿Cuántas licencias paga mi empresa y quién las usa?",
    updated: "2026-10-11",
    readingMinutes: 8,
  },
  {
    slug: "aplicaciones-vinculadas",
    kind: "pilar",
    title: "Aplicaciones con acceso a las cuentas de tu empresa: cómo verlas, decidir y revocarlas",
    seoTitle: "Apps con acceso a las cuentas de tu empresa · Mekovault",
    description:
      "Cada persona autoriza apps con su cuenta de Google (Slack, Canva, Apps Script, el celular). Cómo listarlas en toda la empresa, medir el riesgo y revocar.",
    question: "¿Qué aplicaciones tienen acceso a las cuentas de mi empresa?",
    updated: "2026-10-11",
    readingMinutes: 7,
  },
  {
    slug: "alta-de-cuentas-el-primer-dia",
    kind: "guia",
    title: "Alta de correo corporativo para quien entra: lista el primer día, sin ticket a IT",
    seoTitle: "Crear el correo corporativo del nuevo empleado · Mekovault",
    description:
      "Cómo crear la cuenta de Google Workspace de un nuevo ingreso con grupos, unidad, alias y licencia el día que entra, pedido desde Personas, sin IT.",
    question: "¿Cómo creo la cuenta del que entra sin pasar por IT?",
    updated: "2026-10-11",
    readingMinutes: 6,
  },
  {
    slug: "gestion-de-accesos-para-pymes",
    kind: "guia",
    title: "Gestión de accesos para pymes sin IT: qué necesitas de verdad (y alternativas a Okta)",
    seoTitle: "Gestión de accesos para pymes sin IT · Mekovault",
    description:
      "Qué es la gestión de accesos en lenguaje de dueño, qué sobra de Okta, JumpCloud o Rippling para una empresa de 10 a 500 personas, y qué sí necesitas.",
    question: "¿Necesito un sistema de accesos como Okta para una pyme?",
    updated: "2026-10-11",
    readingMinutes: 7,
  },
  {
    slug: "que-es-el-control-de-cuentas-y-licencias",
    kind: "definicion",
    title: "Qué es el control de cuentas, licencias y suscripciones de una empresa (y cómo se llama en cada país)",
    seoTitle: "Qué es el control de cuentas y licencias · Mekovault",
    description:
      "Qué es lo que las IA llaman SaaS Management Platform: qué resuelve, quién lo usa, qué incluye y cómo se dice en Chile, Argentina, México y Brasil.",
    question: "¿Cómo se llama esto que necesito?",
    updated: "2026-10-11",
    readingMinutes: 5,
  },
  {
    slug: "que-preguntar-antes-de-contratar",
    kind: "checklist",
    title: "Las 21 preguntas que hay que hacerle a cualquier proveedor antes de contratar, y qué responde Mekovault",
    seoTitle: "21 preguntas antes de contratar y qué responde Mekovault",
    description:
      "La lista que daría un asesor: descubrir programas, salidas de empleados, facilidad de uso, precio y seguridad. Con la respuesta honesta de Mekovault.",
    question: "¿Qué le pregunto a cualquier proveedor antes de contratar?",
    updated: "2026-10-11",
    readingMinutes: 8,
  },
  {
    slug: "mekovault-vs-factorial",
    kind: "comparativa",
    title: "Mekovault vs Factorial: crear la cuenta no es lo mismo que gobernar el ciclo completo",
    seoTitle: "Mekovault vs Factorial para cuentas y licencias",
    description:
      "Factorial crea y elimina cuentas de Google Workspace desde su suite de RRHH. Mekovault se engancha a la nómina que ya tienes y controla cuentas y apps.",
    question: "¿Me sirve Factorial o necesito Mekovault?",
    updated: "2026-10-11",
    readingMinutes: 6,
  },
  {
    slug: "mekovault-vs-consola-de-google",
    kind: "comparativa",
    title: "Mekovault vs hacerlo a mano en la consola de Google: lo que la consola no hace sola",
    seoTitle: "Mekovault vs la consola de administración de Google",
    description:
      "La consola de Google puede todo, pero no se entera de que alguien se fue. Qué queda a medias cuando lo hace un administrador a mano y qué cambia Mekovault.",
    question: "¿No me basta con la consola de administración de Google?",
    updated: "2026-10-11",
    readingMinutes: 6,
  },
  {
    slug: "mekovault-vs-cledara",
    kind: "comparativa",
    title: "Mekovault vs Cledara: controlar el gasto no es lo mismo que cerrar las cuentas",
    seoTitle: "Mekovault vs Cledara para cuentas y suscripciones",
    description:
      "Cledara controla el gasto en software desde finanzas con tarjetas virtuales; Mekovault, las cuentas y licencias desde Personas. Cuándo conviene cada uno.",
    question: "¿Cledara o Mekovault para las suscripciones de mi empresa?",
    updated: "2026-10-11",
    readingMinutes: 5,
  },
  {
    slug: "mekovault-vs-rippling",
    kind: "comparativa",
    title: "Mekovault vs Rippling: cuentas resueltas sin cambiar de nómina",
    seoTitle: "Mekovault vs Rippling IT para pymes en Chile",
    description:
      "Rippling revoca accesos porque también es tu nómina: exige migrar todo y pagar por empleado. Mekovault se engancha a Buk o Talana y a Google como están.",
    question: "¿Rippling sirve para una pyme en Chile o necesito Mekovault?",
    updated: "2026-10-11",
    readingMinutes: 5,
  },
  {
    slug: "mekovault-vs-zluri",
    kind: "comparativa",
    title: "Mekovault vs Zluri: la plataforma que recomienda ChatGPT, comparada con una hecha para pymes",
    seoTitle: "Mekovault vs Zluri: SaaS management para pymes",
    description:
      "Zluri es una SaaS Management Platform para IT de empresas grandes, en inglés y por usuario. Mekovault hace cuentas y licencias para pymes sin IT.",
    question: "¿Zluri o Mekovault para una empresa de 80 personas?",
    updated: "2026-10-11",
    readingMinutes: 5,
  },
  {
    slug: "mekovault-vs-partner-de-google",
    kind: "comparativa",
    title: "Mekovault vs contratar un partner de Google Workspace: licencias y soporte no son lo mismo que operar las cuentas",
    seoTitle: "Mekovault vs un partner de Google Workspace",
    description:
      "El partner vende licencias, configura y da soporte; Mekovault es con lo que Personas pide las altas y bajas y se ejecutan solas con evidencia. Se combinan.",
    question: "¿Me basta con mi partner de Google o necesito Mekovault?",
    updated: "2026-10-11",
    readingMinutes: 5,
  },
  // Compras y licencias (plan 1.10, demanda en MX, ES y EE. UU.)
  {
    slug: "inventario-de-software",
    kind: "guia",
    title: "Inventario de software: cómo saber qué paga tu empresa, quién lo usa y cuánto cuesta al mes",
    seoTitle: "Inventario de software: cómo armarlo · Mekovault",
    description:
      "Todo lo que la empresa paga por persona, con precio, responsable, renovación y uso real. Cómo armar la lista en una tarde y mantenerla sin planillas.",
    question: "¿Cómo sé qué programas paga mi empresa y quién los usa?",
    updated: "2026-10-11",
    readingMinutes: 7,
  },
  {
    slug: "licencias-sin-usar",
    kind: "guia",
    title: "Licencias sin usar: cómo encontrarlas en cada plataforma y dejar de pagarlas antes de la renovación",
    seoTitle: "Licencias sin usar: encontrarlas y cortarlas · Mekovault",
    description:
      "Compradas, asignadas y en cuentas bloqueadas: dónde se esconden las licencias que nadie usa en Google Workspace, Slack y Zoom, y qué hacer al renovar.",
    question: "¿Cómo encuentro las licencias que pagamos y nadie usa?",
    updated: "2026-10-11",
    readingMinutes: 7,
  },
  {
    slug: "sistema-de-compras-de-software-sin-erp",
    kind: "guia",
    title: "Cómo armar un sistema de compras de software sin comprar un ERP: pedir, aprobar, pagar y renovar en orden",
    seoTitle: "Sistema de compras de software sin ERP · Mekovault",
    description:
      "Quién pide, quién aprueba, quién paga y quién renueva cada herramienta: un flujo simple de compras de software para empresas de 20 a 500 personas, sin ERP.",
    question: "¿Cómo ordeno las compras de software de mi empresa sin un ERP?",
    updated: "2026-10-11",
    readingMinutes: 8,
  },
  {
    slug: "calendario-de-renovaciones",
    kind: "guia",
    title: "Calendario de renovaciones de software: cómo no pagar un año más por lo que nadie usa",
    seoTitle: "Calendario de renovaciones de software · Mekovault",
    description:
      "Cada suscripción tiene una fecha para bajar la cantidad o cancelar. Cómo armar el calendario, qué revisar 30 días antes y qué pasa en los planes anuales.",
    question: "¿Cuándo puedo bajar licencias o cancelar una suscripción sin pagar un año más?",
    updated: "2026-10-11",
    readingMinutes: 7,
  },
];

/** Plataformas en preparación: una página honesta por cada una (nunca "disponible hoy"). */
export const UPCOMING_PLATFORMS = [
  {
    slug: "microsoft-365",
    name: "Microsoft 365",
    title: "Microsoft 365, Outlook y Teams en Mekovault: qué va a hacer el conector y qué pasa hoy",
    seoTitle: "Microsoft 365 y Outlook en Mekovault (en preparación)",
    description:
      "Qué hará el conector de Microsoft 365: bloquear al salir, buzón compartido, OneDrive al reemplazo, licencias sin usar. Todavía no está; así se maneja hoy.",
    summary:
      "Mekovault hoy se conecta a Google Workspace. El conector de Microsoft 365 (Entra ID, Exchange Online, OneDrive y Teams) está en preparación y no se anuncia como disponible. Esta página dice qué va a hacer, en qué orden, y cómo se administra Microsoft 365 con Mekovault mientras tanto: como tarea guiada con responsable, fecha y evidencia.",
    willDo: [
      "Alta el día de ingreso: usuario en Entra ID con licencia Business Basic, Standard o Premium según el área, grupos y buzón.",
      "Baja el último día: bloqueo del inicio de sesión y cierre de sesiones, buzón convertido en compartido o delegado a la jefatura, reenvío y respuesta automática.",
      "OneDrive al reemplazo que decida la jefatura, antes de quitar la licencia (quitarla antes afecta la retención del buzón).",
      "Licencias: cuántas compraste, cuántas están asignadas y cuántas quedaron en cuentas bloqueadas; qué reducir antes de la renovación.",
      "Aplicaciones autorizadas con la cuenta de Microsoft (consentimientos de Entra ID), con riesgo y decisión de la jefatura.",
    ],
    today:
      "Si tu empresa usa Microsoft 365, Mekovault puede llevar las solicitudes (alta, baja, reactivación) con fecha, jefatura y evidencia, y dejar cada paso de Microsoft como tarea guiada para quien administre el Admin Center: te dice qué hacer, en qué orden y lo registra. Las licencias se pueden registrar en Compras para que ninguna se renueve sola.",
    why:
      "Microsoft 365 es la plataforma más buscada por las empresas de Chile, Argentina, México y España, y la salida de un empleado en Outlook tiene los mismos huecos que en Google: el buzón sigue vivo, OneDrive se pierde si no se traspasa y la licencia se sigue pagando. Por eso es el primer conector después de Google Workspace.",
    faq: [
      { q: "¿Cuándo estará el conector de Microsoft 365?", a: "No damos fecha hasta que esté probado con una empresa real. Si nos escribes, te avisamos cuando esté en producción y puedes probarlo antes." },
      { q: "¿Mekovault leerá mis correos de Outlook?", a: "No. Igual que con Google, solo pedirá permisos de administración de usuarios, grupos, licencias y buzones; nunca el contenido de los correos ni de los archivos." },
      { q: "¿Qué pasa con una empresa que usa Google y Microsoft a la vez?", a: "Google Workspace se administra hoy; Microsoft queda como tarea guiada hasta que exista el conector. Las solicitudes y la evidencia son las mismas." },
    ],
    related: [
      { href: "/recursos/baja-empleado-google-workspace", label: "Cómo dar de baja a un empleado en Google Workspace" },
      { href: "/recursos/licencias-que-sigues-pagando", label: "Las licencias que sigues pagando" },
    ],
  },
  {
    slug: "slack",
    name: "Slack",
    title: "Slack en Mekovault: desactivar al que se va y liberar el asiento",
    seoTitle: "Slack en Mekovault: asientos y bajas (en preparación)",
    description:
      "Qué hará el conector de Slack: desactivar al usuario cuando sale, liberar el asiento y mostrar cuántos pagas. Todavía no está; hoy es tarea guiada.",
    summary:
      "Slack cobra por asiento activo y deja de cobrar en el siguiente ciclo cuando desactivas al usuario; si la persona entraba con Google, su cuenta de Google suspendida no basta. El conector de Slack está en preparación; mientras tanto Mekovault revoca la vinculación con Google en la baja y deja la desactivación en Slack como tarea con responsable, fecha y evidencia.",
    willDo: [
      "Desactivar al usuario en Slack en la misma baja que bloquea Google, y reactivarlo si la persona vuelve.",
      "Asientos: cuántos pagas, cuántos están activos y cuántos quedaron en cuentas bloqueadas.",
      "Invitar al que entra el día de ingreso a los canales de su área.",
      "Cuentas de bots e integraciones con responsable y fecha de revisión.",
    ],
    today:
      "Al ejecutarse una baja, Mekovault revoca primero la vinculación de Slack con la cuenta de Google y crea la tarea de desactivar al usuario en Slack para el encargado, con evidencia. En Licencias, el asiento aparece como 'sigue cobrando' hasta que se desactiva.",
    why: "Slack es la segunda plataforma más común entre nuestros clientes después de Google y la que más asientos deja asignados a personas que ya no están.",
    faq: [
      { q: "¿Desactivar en Slack deja de cobrar?", a: "Sí, en el siguiente ciclo de facturación. En planes anuales con asientos comprometidos, la reducción rige en la renovación." },
      { q: "¿Qué pasa si la persona entraba a Slack con Google?", a: "Suspender la cuenta de Google impide entrar con ese método, pero el usuario sigue activo y cobrado en Slack hasta que se desactiva allá. Por eso la tarea sigue existiendo." },
    ],
    related: [
      { href: "/recursos/offboarding-digital", label: "Offboarding digital: checklist de cuentas y accesos" },
      { href: "/ayuda", label: "Centro de ayuda" },
    ],
  },
  {
    slug: "zoom",
    name: "Zoom",
    title: "Zoom en Mekovault: liberar la licencia cuando alguien se va",
    seoTitle: "Zoom en Mekovault: licencias y bajas (en preparación)",
    description:
      "Qué hará el conector de Zoom: pasar al usuario a Básico o eliminarlo, liberar la licencia y mostrar cuántas pagas. Todavía no está; hoy es tarea guiada.",
    summary:
      "En Zoom, bloquear la cuenta de correo no libera nada: hay que pasar al usuario a Básico o eliminarlo, y reducir la cantidad contratada para pagar menos. El conector de Zoom está en preparación; mientras tanto, Mekovault deja la tarea con responsable, fecha y evidencia, y muestra el asiento como 'sigue cobrando' en Licencias.",
    willDo: [
      "Pasar al usuario a Básico o eliminarlo en la misma baja que bloquea Google.",
      "Licencias: cuántas compraste, cuántas están asignadas y cuántas quedaron en cuentas bloqueadas; qué reducir en la renovación.",
      "Asignar la licencia al que entra según su cargo.",
    ],
    today:
      "Al ejecutarse una baja, Mekovault crea la tarea de liberar la licencia de Zoom para el encargado, con los pasos exactos, y registra cuándo se hizo. La licencia liberada queda disponible para el próximo ingreso.",
    why: "Zoom es de las plataformas donde más licencias quedan asignadas a cuentas bloqueadas, porque nadie entra al panel de Zoom cuando alguien se va.",
    faq: [
      { q: "¿Quitar la licencia de Zoom deja de cobrar?", a: "Libera la licencia para reasignarla. Para pagar menos hay que reducir además la cantidad contratada; en planes anuales, en la renovación." },
    ],
    related: [
      { href: "/recursos/licencias-que-sigues-pagando", label: "Las licencias que sigues pagando" },
      { href: "/ayuda", label: "Centro de ayuda" },
    ],
  },
] as const;

export const RESOURCE_SLUGS = RESOURCES.map((r) => r.slug);

export function findResource(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}

export const CONNECTORS = [
  {
    slug: "buk",
    name: "BUK",
    seoTitle: "Integración BUK + Google Workspace · Mekovault",
    description:
      "Las altas y bajas de BUK crean y cierran las cuentas de Google Workspace solas: ingreso, cambio de cargo y último día, con jefatura y evidencia.",
    countries: "Chile, Perú, Colombia y México",
  },
  {
    slug: "talana",
    name: "Talana",
    seoTitle: "Integración Talana + Google Workspace · Mekovault",
    description:
      "Las altas y bajas de Talana crean y cierran las cuentas de Google Workspace solas: ingreso, cambio de cargo y último día, con jefatura y evidencia.",
    countries: "Chile",
  },
  {
    slug: "rankmi",
    name: "Rankmi",
    seoTitle: "Integración Rankmi + Google Workspace · Mekovault",
    description:
      "Las altas y bajas de Rankmi crean y cierran las cuentas de Google Workspace solas: ingreso, cambio de cargo y último día, con jefatura y evidencia.",
    countries: "Chile y Perú",
  },
] as const;
