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
      "Bloquear, redirigir el correo, traspasar Drive, liberar la licencia y eliminar después: los pasos, en qué orden y qué se sigue cobrando si lo haces a medias.",
    question: "¿Cómo doy de baja a un empleado en Google Workspace sin seguir pagando?",
    updated: "2026-10-11",
    readingMinutes: 9,
  },
  {
    slug: "suspender-eliminar-o-archivar-usuario-google-workspace",
    kind: "guia",
    title: "Suspender, eliminar o archivar un usuario de Google Workspace: cuál se sigue cobrando",
    seoTitle: "Suspender vs eliminar usuario de Google Workspace · Mekovault",
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
      "¿Puede la empresa leer el correo de un ex empleado? Qué dicen la ley chilena, el RGPD y la ley mexicana, y cómo redirigir, delegar o cerrar el buzón sin riesgo.",
    question: "¿Qué pasa con el correo y los archivos de la persona que se va?",
    updated: "2026-10-11",
    readingMinutes: 8,
  },
  {
    slug: "offboarding-digital",
    kind: "pilar",
    title: "Offboarding digital: la lista de cuentas y accesos que hay que cerrar cuando alguien se va",
    seoTitle: "Offboarding digital: checklist de cuentas y accesos · Mekovault",
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
    seoTitle: "Desvinculación en Chile: finiquito y cierre de cuentas · Mekovault",
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
      "Una cuenta suspendida se factura igual que una activa. Cómo contar las licencias compradas, asignadas y en cuentas bloqueadas, y qué cambiar antes de renovar.",
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
      "Cada persona autoriza apps con su cuenta de Google (Slack, Canva, Apps Script, el celular). Cómo listar las de toda la empresa, clasificar el riesgo y revocar.",
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
      "Cómo crear la cuenta de Google Workspace de un nuevo ingreso con grupos, unidad, alias y licencia el día que entra, pedido desde Personas y sin pasar por IT.",
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
      "Definición simple de la categoría que las IA llaman SaaS Management Platform: qué resuelve, quién la usa, qué incluye y cómo se dice en Chile, Argentina, México y Brasil.",
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
      "La lista de comprobación que daría un asesor: descubrir programas, salidas de empleados, facilidad de uso, precio y seguridad. Con la respuesta honesta de Mekovault.",
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
      "Factorial crea y elimina cuentas de Google Workspace desde su suite de RRHH. Mekovault se engancha a la nómina que ya tienes y gobierna cuentas, licencias y apps.",
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
      "La consola de Google puede todo, pero no se entera de que alguien se fue. Qué queda a medias cuando lo hace un administrador a mano y qué cambia con Mekovault.",
    question: "¿No me basta con la consola de administración de Google?",
    updated: "2026-10-11",
    readingMinutes: 6,
  },
];

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
