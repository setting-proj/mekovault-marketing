/**
 * Diccionario de la página técnica /governance.
 *
 * Es independiente de `dictionaries.ts` a propósito: el contenido es largo,
 * estructurado (tablas, listas, diagrama) y cambia con el roadmap técnico,
 * no con el copy de marketing. Locales propios: es-CL, es-AR, es-MX, en-US,
 * pt-BR. `resolveGovernanceLocale()` traduce cualquier locale que entregue
 * el provider del sitio (es-419, en, pt-BR, es-CL, etc.) a uno de estos,
 * con fallback seguro a es-CL.
 *
 * Reglas de copy (scripts/copy-gate.mjs): sin em dashes, sin stock words.
 */

export const GOVERNANCE_LOCALES = [
  "es-CL",
  "es-AR",
  "es-MX",
  "en-US",
  "pt-BR",
] as const;
export type GovernanceLocale = (typeof GOVERNANCE_LOCALES)[number];

export const DEFAULT_GOVERNANCE_LOCALE: GovernanceLocale = "es-CL";

export function resolveGovernanceLocale(raw: unknown): GovernanceLocale {
  if (typeof raw !== "string" || raw.trim() === "") {
    return DEFAULT_GOVERNANCE_LOCALE;
  }
  const lower = raw.trim().toLowerCase();
  const exact = GOVERNANCE_LOCALES.find((l) => l.toLowerCase() === lower);
  if (exact) return exact;
  const lang = lower.split(/[-_]/)[0] ?? "";
  if (lang === "pt") return "pt-BR";
  if (lang === "en") return "en-US";
  // es-419, es, es-ES, es-CO, etc.
  return DEFAULT_GOVERNANCE_LOCALE;
}

// ---------------------------------------------------------------------------
// Tipos del contenido
// ---------------------------------------------------------------------------

export type GovTable = {
  caption?: string;
  head: string[];
  rows: string[][];
};

export type GovBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; table: GovTable }
  | { type: "callout"; title: string; text: string }
  | { type: "diagram" };

export type GovSection = {
  id: string;
  title: string;
  blocks: GovBlock[];
};

export type GovDiagramLabels = {
  internet: string;
  cloudflare: string;
  app: string;
  appSub: string;
  data: string;
  dataSub: string;
  vault: string;
  vaultSub: string;
  obs: string;
  obsSub: string;
  privateNet: string;
  tailscale: string;
  tailscaleSub: string;
  publicEdge: string;
  caption: string;
};

export type GovernanceContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    reviewed: string;
    disclaimer: string;
  };
  glance: {
    title: string;
    rows: [string, string][];
  };
  toc: { title: string };
  diagram: GovDiagramLabels;
  sections: GovSection[];
  faq: {
    title: string;
    intro: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    desc: string;
    button: string;
    secondary: string;
    secondaryHref: string;
  };
};

// ---------------------------------------------------------------------------
// es-CL (base del español)
// ---------------------------------------------------------------------------

const es_CL: GovernanceContent = {
  hero: {
    eyebrow: "Gobernanza técnica",
    title: "Cómo está construido y operado Mekovault",
    subtitle:
      "Referencia para equipos de TI, seguridad, compliance y auditoría que evalúan Mekovault antes de firmar. Describe la infraestructura, el modelo de identidad, el aislamiento entre clientes, el tratamiento de credenciales de directorio y lo que todavía está en curso.",
    reviewed: "Última revisión: 9 de septiembre de 2026",
    disclaimer:
      "Documento descriptivo de controles operativos vigentes. No constituye certificación formal.",
  },
  glance: {
    title: "De un vistazo",
    rows: [
      ["Región", "AWS Lightsail, us-east-1 (Virginia del Norte)"],
      ["Topología", "4 máquinas en red privada; una sola expuesta a Internet"],
      ["Secretos de clientes", "Infisical self-hosted, un project por tenant"],
      ["Base de datos", "PostgreSQL 16 con Row-Level Security por company_id"],
      ["Sesión", "JWT RS256 de 15 min + refresh de 30 días en cookie HttpOnly"],
      ["MFA", "TOTP, exigido en operaciones sensibles"],
      ["Uso de credenciales", "Registro inmutable por operación, exportable y firmado"],
      ["Acceso administrativo", "Solo por Tailscale; sin SSH público"],
    ],
  },
  toc: { title: "Contenido" },
  diagram: {
    internet: "Internet",
    cloudflare: "Cloudflare (80/443)",
    app: "mekovault-app",
    appSub: "nginx · web · svc-* · addons",
    data: "mekovault-data",
    dataSub: "PostgreSQL 16 · Redis ×2 · RabbitMQ",
    vault: "mekovault-vault",
    vaultSub: "Infisical · 1 project / tenant",
    obs: "mekovault-obs",
    obsSub: "Grafana · Loki · Prometheus · Tempo · OTel",
    privateNet: "Red privada (sin IP pública)",
    tailscale: "Tailscale",
    tailscaleSub: "administración",
    publicEdge: "único punto expuesto",
    caption:
      "Topología de producción. Solo mekovault-app recibe tráfico de Internet, a través de Cloudflare. El resto de las máquinas no tiene IP pública y se administra por Tailscale.",
  },
  sections: [
    {
      id: "infraestructura",
      title: "Infraestructura",
      blocks: [
        {
          type: "p",
          text: "Mekovault corre en AWS Lightsail, región us-east-1, sobre cuatro máquinas conectadas por red privada. Solo una de ellas recibe tráfico de Internet.",
        },
        {
          type: "table",
          table: {
            caption: "Máquinas de producción",
            head: ["Host", "Rol", "Servicios", "Exposición"],
            rows: [
              [
                "`mekovault-app`",
                "Aplicación",
                "nginx, Next.js, servicios FastAPI, addons",
                "Única expuesta: puertos 80/443 detrás de Cloudflare",
              ],
              [
                "`mekovault-data`",
                "Datos",
                "PostgreSQL 16, Redis (2 instancias), RabbitMQ",
                "Solo red privada",
              ],
              [
                "`mekovault-vault`",
                "Secretos",
                "Infisical self-hosted, un project por tenant",
                "Solo red privada",
              ],
              [
                "`mekovault-obs`",
                "Observabilidad",
                "Grafana, Loki, Prometheus, Tempo, OpenTelemetry Collector",
                "Solo red privada",
              ],
            ],
          },
        },
        { type: "diagram" },
        {
          type: "ul",
          items: [
            "Administración exclusivamente por Tailscale (WireGuard). No hay SSH abierto a Internet en ningún host.",
            "Firewall `ufw` activo en cada máquina con política de denegar por defecto.",
            "Los servicios internos (PostgreSQL, Redis, RabbitMQ, Infisical, Grafana y los procesos FastAPI) escuchan en loopback o en la interfaz privada. nginx es el único proceso que atiende tráfico público.",
            "Cloudflare termina TLS y filtra tráfico antes de que llegue a nginx.",
          ],
        },
      ],
    },
    {
      id: "arquitectura",
      title: "Arquitectura de servicios",
      blocks: [
        {
          type: "p",
          text: "La interfaz web es una aplicación Next.js 16. El backend está compuesto por servicios FastAPI sobre Python 3.12 con SQLAlchemy asíncrono, cada uno con una responsabilidad acotada.",
        },
        {
          type: "table",
          table: {
            caption: "Servicios del backend",
            head: ["Servicio", "Responsabilidad"],
            rows: [
              ["`svc-auth`", "Autenticación, sesiones, MFA y reset de contraseña"],
              [
                "`svc-tenancy`",
                "Empresas, membresías, roles, resellers y eliminación de tenants",
              ],
              [
                "`svc-requests`",
                "Solicitudes de alta, baja y cambio; flujo de aprobaciones",
              ],
              ["`svc-tickets`", "Tickets de soporte y su seguimiento"],
              ["`svc-billing`", "Planes, suscripciones y facturación"],
              ["`svc-notifications`", "Correo y notificaciones a usuarios"],
              [
                "addons",
                "Módulos conectores. Ejemplo: `super-workspace`, que opera sobre Google Workspace y Microsoft 365",
              ],
            ],
          },
        },
        { type: "h3", text: "Eventos y trabajos en segundo plano" },
        {
          type: "ul",
          items: [
            "Los servicios se comunican por eventos a través de RabbitMQ, en el exchange de tipo topic `mekovault.events`.",
            "Los trabajos pesados (provisioning, eliminaciones, exportaciones) se registran en un libro mayor de jobs en PostgreSQL y los ejecuta un worker único.",
            "Cada job reintenta con backoff exponencial. Sus pasos son idempotentes: volver a ejecutar un paso ya completado no produce efectos duplicados sobre el directorio.",
            "Cuando un job agota sus reintentos, se genera una alerta y el job queda visible con su último error para intervención manual.",
          ],
        },
      ],
    },
    {
      id: "identidad",
      title: "Identidad y sesión",
      blocks: [
        {
          type: "p",
          text: "Los usuarios de Mekovault (administradores de TI, aprobadores, resellers) se autentican con OAuth de Google o Microsoft, o con email y contraseña. La sesión está diseñada para que un token robado sirva poco tiempo y sea revocable.",
        },
        {
          type: "table",
          table: {
            caption: "Parámetros de sesión",
            head: ["Mecanismo", "Detalle"],
            rows: [
              [
                "Métodos de acceso",
                "OAuth con Google o Microsoft, o email y contraseña",
              ],
              [
                "Token de acceso",
                "JWT firmado con RS256, vigencia de 15 minutos, con claims de rol y de estado MFA",
              ],
              [
                "Refresh token",
                "Vigencia de 30 días. Vive solo en una cookie HttpOnly (inaccesible desde JavaScript). Se rota en cada uso y es revocable individualmente por `jti` en Redis. Hereda el estado MFA de la sesión y revalida la membresía del usuario en la empresa en cada renovación.",
              ],
              [
                "MFA",
                "TOTP (apps de autenticación estándar). Límite de 5 intentos por minuto; bloqueo de 15 minutos tras 10 fallos consecutivos.",
              ],
              [
                "Operaciones sensibles",
                "Exigen que la sesión tenga MFA verificado, aunque el usuario ya esté autenticado.",
              ],
              [
                "Reset de contraseña",
                "Token de un solo uso con vigencia de 30 minutos.",
              ],
            ],
          },
        },
        {
          type: "p",
          text: "Consecuencia práctica: un access token filtrado caduca en 15 minutos como máximo; el refresh no es exportable desde el navegador; y revocar el `jti` en Redis corta la sesión de inmediato, sin esperar a que expire nada.",
        },
      ],
    },
    {
      id: "aislamiento",
      title: "Aislamiento multi-tenant",
      blocks: [
        {
          type: "p",
          text: "Mekovault es multi-tenant: varios clientes comparten la misma infraestructura. El aislamiento entre ellos se impone en capas independientes, de modo que un error en una no exponga datos de otro cliente.",
        },
        {
          type: "table",
          table: {
            caption: "Capas de aislamiento",
            head: ["Capa", "Control"],
            rows: [
              [
                "Modelo de datos",
                "Toda fila con datos de cliente lleva `company_id`.",
              ],
              [
                "Aplicación",
                "Toda consulta filtra por la empresa que viene en el token de sesión. Nunca por un parámetro enviado por el cliente.",
              ],
              [
                "Base de datos",
                "Row-Level Security de PostgreSQL como barrera adicional: aunque una consulta olvidara el filtro, la base de datos no devuelve filas de otra empresa.",
              ],
              [
                "Superadmin",
                "Rol de plataforma separado de los roles de cliente. Sus acciones requieren confirmación por código y MFA verificado.",
              ],
              [
                "Resellers",
                "Un reseller ve y opera solo sobre los tenants que administra.",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "credenciales",
      title: "Credenciales de proveedores y auditoría de uso",
      blocks: [
        {
          type: "p",
          text: "Para operar sobre su directorio, Mekovault recibe credenciales con permisos de administración: el JSON de una Service Account de Google con delegación a nivel de dominio, o los datos de una App Registration de Microsoft Entra ID (client id, tenant id y client secret). Son el activo más sensible que manejamos.",
        },
        {
          type: "ul",
          items: [
            "Se almacenan cifradas en Infisical (self-hosted, en `mekovault-vault`), en un project dedicado por tenant.",
            "Nunca se escriben en la base de datos, en logs ni en respuestas de API. La base de datos guarda solo una referencia al secreto.",
            "Se cargan en memoria en el momento de llamar al proveedor y se descartan al terminar la operación.",
          ],
        },
        { type: "h3", text: "Registro inmutable de cada uso" },
        {
          type: "p",
          text: "Cada llamada a Google o Microsoft con las credenciales del cliente deja una fila en la tabla `credential_usage_log`.",
        },
        {
          type: "table",
          table: {
            caption: "Campos de credential_usage_log",
            head: ["Campo", "Contenido"],
            rows: [
              ["Tenant", "`company_id` del cliente dueño de la credencial"],
              ["Proveedor", "Google Workspace o Microsoft Entra ID"],
              [
                "Operación",
                "Acción ejecutada, por ejemplo `create_user`, `suspend_user`, `add_group_member`",
              ],
              ["Scopes", "Scopes o permisos consumidos por esa operación"],
              [
                "Quién",
                "Usuario que originó la acción, o el proceso automático (worker, timer) que la ejecutó",
              ],
              [
                "Motivo",
                "Referencia a la solicitud, ticket o tarea que justificó la llamada",
              ],
              ["Resultado", "Éxito o fallo, con código de error si aplica"],
              ["Latencia", "Duración de la llamada al proveedor en milisegundos"],
            ],
          },
        },
        {
          type: "ul",
          items: [
            "La tabla tiene triggers de PostgreSQL que rechazan cualquier `UPDATE` o `DELETE`. Ni el equipo de Mekovault puede editar o borrar una fila individual.",
            "Cada fila tiene un id determinista derivado de la operación. Un reintento del mismo trabajo no genera una segunda fila, así el registro no se infla ni se contradice.",
            "Una ráfaga de fallos sobre las credenciales de un tenant dispara una alerta al equipo de operación.",
          ],
        },
        { type: "h3", text: "Retención" },
        {
          type: "table",
          table: {
            caption: "Retención del registro de uso",
            head: ["Parámetro", "Valor"],
            rows: [
              ["Mínimo", "24 meses"],
              ["Máximo", "84 meses"],
              ["Configuración", "Por tenant, dentro de ese rango"],
              ["Eliminación del tenant", "Se borra junto con el tenant, o a los 24 meses, lo que ocurra primero"],
              [
                "Purga",
                "Semanal, solo de filas fuera del período configurado. Cada batch purgado deja constancia en la auditoría.",
              ],
            ],
          },
        },
        { type: "h3", text: "Exportación para auditores" },
        {
          type: "p",
          text: "El registro se exporta en CSV o JSON. Cada archivo va firmado con HMAC-SHA256 e incluye el identificador de la clave usada, de modo que un auditor puede verificar que el archivo no fue alterado después de generarse.",
        },
      ],
    },
    {
      id: "permisos",
      title: "Permisos que Mekovault solicita",
      blocks: [
        {
          type: "p",
          text: "Mekovault pide únicamente los permisos que necesita para gestionar usuarios, grupos y unidades organizativas. No solicita acceso a correo, archivos, calendario ni contenido de ningún usuario.",
        },
        {
          type: "table",
          table: {
            caption: "Google Workspace (Admin SDK Directory API)",
            head: ["Scope", "Para qué se usa"],
            rows: [
              [
                "`admin.directory.user`",
                "Crear, suspender, reactivar y modificar cuentas de usuario; asignar contraseña inicial y forzar su cambio.",
              ],
              [
                "`admin.directory.group`",
                "Crear grupos y listas, y agregar o quitar miembros durante altas, cambios y bajas.",
              ],
              [
                "`admin.directory.orgunit`",
                "Leer y mover usuarios entre unidades organizativas según el flujo de onboarding u offboarding.",
              ],
            ],
          },
        },
        {
          type: "p",
          text: "Las llamadas se hacen con la Service Account impersonando al administrador delegado que el cliente designa al conectar el dominio. Ese administrador queda registrado en cada fila de `credential_usage_log`.",
        },
        {
          type: "table",
          table: {
            caption: "Microsoft Entra ID (Microsoft Graph, permisos de aplicación)",
            head: ["Permiso", "Para qué se usa"],
            rows: [
              [
                "`User.ReadWrite.All`",
                "Crear, actualizar, deshabilitar y eliminar usuarios; asignar contraseña inicial.",
              ],
              [
                "`Group.ReadWrite.All`",
                "Crear grupos y gestionar su membresía.",
              ],
              [
                "`Directory.ReadWrite.All`",
                "Operaciones de directorio que los dos permisos anteriores no cubren, por ejemplo lecturas de estructura necesarias para validar una alta.",
              ],
            ],
          },
        },
        {
          type: "p",
          text: "En Microsoft se usa el flujo de client credentials: la aplicación actúa con sus propios permisos, sin sesión de un usuario. Los permisos son de tipo Application y requieren consentimiento de un administrador global del cliente al conectar.",
        },
      ],
    },
    {
      id: "contrasenas",
      title: "Contraseñas iniciales y reset",
      blocks: [
        {
          type: "ul",
          items: [
            "Cuando Mekovault crea una cuenta o resetea una contraseña, la contraseña temporal queda visible para el administrador que ejecutó la acción durante 15 minutos.",
            "Pasado ese plazo se purga del sistema. No se puede recuperar: si se perdió, se genera una nueva.",
            "Las contraseñas nunca se escriben en logs, eventos ni en el registro de uso de credenciales.",
          ],
        },
      ],
    },
    {
      id: "eliminacion",
      title: "Eliminación de un tenant",
      blocks: [
        {
          type: "p",
          text: "Un cliente puede pedir la eliminación completa de su tenant (derecho de supresión, RGPD art. 17 y Ley 21.719 de Chile). El proceso está diseñado para que las credenciales desaparezcan antes que cualquier otro dato.",
        },
        {
          type: "ol",
          items: [
            "Un administrador del tenant solicita la eliminación. La solicitud se encola como job.",
            "El tenant queda inaccesible de inmediato: se rechazan sus sesiones y nuevos inicios de sesión.",
            "El job revoca los secretos del tenant y elimina su project en Infisical. Desde este punto Mekovault ya no puede llamar al directorio del cliente.",
            "Solo después se borran en cascada los datos del tenant en PostgreSQL: usuarios, solicitudes, tickets, configuración.",
            "La eliminación queda registrada en la auditoría de plataforma.",
            "Los administradores reciben un correo de confirmación con el detalle de lo eliminado.",
          ],
        },
        {
          type: "callout",
          title: "Sub-encargados restantes",
          text: "Después de la eliminación pueden quedar datos residuales por un tiempo acotado en sub-encargados como el proveedor de correo transaccional o el almacenamiento de logs. Están documentados, con sus plazos, en la lista de sub-encargados del sitio.",
        },
      ],
    },
    {
      id: "addons",
      title: "Addons: módulos con límites",
      blocks: [
        {
          type: "p",
          text: "Los conectores a proveedores y otras extensiones se empaquetan como addons. Un addon con un defecto no debe poder degradar la plataforma completa, y el registro de addons impone esa regla.",
        },
        {
          type: "table",
          table: {
            caption: "Ciclo de vida de un addon",
            head: ["Etapa", "Control"],
            rows: [
              [
                "Declaración",
                "Cada módulo se describe en un manifiesto con sus puertos, rutas, tablas, migraciones y chequeo de salud.",
              ],
              [
                "Validación",
                "Automática antes de activarlo: esquema del manifiesto, colisiones de puertos, rutas y tablas con otros módulos, migraciones aplicables y respuesta del chequeo de salud.",
              ],
              [
                "Ejecución",
                "Corre con límites de memoria y CPU. Un módulo que se desborda se reinicia sin afectar a los demás.",
              ],
              [
                "Supervisión",
                "Chequeo de salud cada 60 segundos, con resultado visible en el panel de operación.",
              ],
              [
                "Kill switch",
                "Cualquier módulo puede desactivarse sin despliegue: en 15 segundos o menos sus rutas responden 503 y el resto de la plataforma sigue operando.",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "perimetro",
      title: "Perímetro y navegador",
      blocks: [
        {
          type: "table",
          table: {
            caption: "Cabeceras y políticas del portal",
            head: ["Control", "Efecto"],
            rows: [
              [
                "HSTS",
                "El navegador solo se conecta por HTTPS al dominio, incluso si el usuario escribe http.",
              ],
              [
                "Content-Security-Policy",
                "Restringe los orígenes desde los que el portal puede cargar scripts, estilos y conexiones.",
              ],
              [
                "X-Content-Type-Options: nosniff",
                "Impide que el navegador reinterprete el tipo de un archivo.",
              ],
              [
                "frame-ancestors 'none'",
                "El portal no puede embeberse en un iframe de otro sitio (clickjacking).",
              ],
              [
                "CORS restringido",
                "Solo los orígenes de Mekovault pueden llamar a la API desde un navegador.",
              ],
              [
                "Sin source maps en producción",
                "No se publica el código fuente del frontend.",
              ],
              [
                "Sin documentación pública de API",
                "Los esquemas OpenAPI de los servicios no están expuestos en producción.",
              ],
              [
                "Errores sin trazas",
                "Las respuestas de error no incluyen stack traces ni detalles internos.",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "operacion",
      title: "Operación y observabilidad",
      blocks: [
        {
          type: "table",
          table: {
            caption: "Señales de operación",
            head: ["Señal", "Destino"],
            rows: [
              ["Logs estructurados (JSON)", "Loki, consultados desde Grafana"],
              ["Métricas", "Prometheus"],
              ["Trazas distribuidas", "OpenTelemetry hacia Tempo"],
            ],
          },
        },
        {
          type: "ul",
          items: [
            "Antes de cada despliegue se toma un backup de la base de datos.",
            "Los servicios se despliegan de forma controlada; un despliegue fallido se revierte al backup previo.",
          ],
        },
        { type: "h3", text: "Timers de higiene" },
        {
          type: "table",
          table: {
            caption: "Tareas programadas",
            head: ["Tarea", "Qué hace"],
            rows: [
              [
                "Purga de PII",
                "Elimina datos personales que ya cumplieron su período de retención.",
              ],
              [
                "Cierre de tickets",
                "Cierra tickets resueltos sin actividad después del plazo configurado.",
              ],
              [
                "Expiración de secretos",
                "Avisa a los administradores 30, 7 y 0 días antes de que caduque una credencial de proveedor (por ejemplo, un client secret de Entra ID).",
              ],
              [
                "Purga del registro de uso",
                "Semanal; elimina solo filas fuera de la retención configurada y deja constancia del batch.",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "capas",
      title: "Resumen de capas de seguridad",
      blocks: [
        {
          type: "table",
          table: {
            caption: "Controles por capa",
            head: ["Capa", "Controles"],
            rows: [
              ["Perímetro", "Cloudflare, nginx como único proceso público, `ufw`"],
              ["Red", "Red privada de Lightsail, Tailscale para administración, servicios en loopback"],
              [
                "Identidad",
                "JWT RS256 de 15 min, refresh HttpOnly rotado y revocable, MFA TOTP con rate limit",
              ],
              ["Aplicación", "Filtro por `company_id` del token en toda consulta"],
              ["Datos", "Row-Level Security en PostgreSQL 16"],
              ["Secretos", "Infisical self-hosted, un project por tenant, nunca en DB ni logs"],
              [
                "Auditoría",
                "`credential_usage_log` inmutable, exportación firmada con HMAC-SHA256",
              ],
              ["Módulos", "Manifiesto validado, límites de recursos, supervisión cada 60 s, kill switch"],
              ["Operación", "Backups previos al despliegue, timers de higiene, logs, métricas y trazas"],
            ],
          },
        },
      ],
    },
    {
      id: "roadmap",
      title: "Lo que está en curso",
      blocks: [
        {
          type: "p",
          text: "Preferimos decir qué falta antes de que lo pregunte un cuestionario. Estos puntos están en trabajo y no deben asumirse como vigentes hasta que esta página los mueva a la sección correspondiente.",
        },
        {
          type: "table",
          table: {
            caption: "Roadmap técnico",
            head: ["Ítem", "Estado"],
            rows: [
              [
                "`ENVIRONMENT=production` en todos los servicios (hoy algunos corren con la configuración de desarrollo endurecida)",
                "En curso",
              ],
              ["Alertas de operación hacia Slack", "En curso"],
              [
                "Rol de PostgreSQL dedicado por addon, para que cada módulo acceda solo a sus tablas",
                "En curso",
              ],
              ["SOC 2", "En curso, sin fecha comprometida"],
            ],
          },
        },
      ],
    },
  ],
  faq: {
    title: "Preguntas de auditoría frecuentes",
    intro:
      "Respuestas directas a lo que suelen preguntar los equipos de seguridad y los auditores.",
    items: [
      {
        q: "¿Dónde viven mis credenciales?",
        a: "En Infisical, una instancia self-hosted en la máquina `mekovault-vault`, dentro de la red privada de AWS Lightsail en us-east-1. Cada tenant tiene su propio project. La base de datos guarda solo una referencia al secreto, nunca su valor.",
      },
      {
        q: "¿Quién puede verlas?",
        a: "Ninguna persona las ve en operación normal. Los servicios las cargan en memoria en el momento de llamar al proveedor y las descartan al terminar. El acceso a la máquina del vault exige Tailscale, y ese acceso está restringido al equipo de plataforma. Las contraseñas temporales que Mekovault genera son visibles al administrador del cliente durante 15 minutos y luego se purgan.",
      },
      {
        q: "¿Qué pasa si dejo Mekovault?",
        a: "Un administrador solicita la eliminación del tenant. El acceso se corta de inmediato; luego se revocan los secretos y se borra el project de Infisical; solo después se borran en cascada los datos en PostgreSQL. Queda registro en la auditoría de plataforma y los administradores reciben un correo con el detalle. Los sub-encargados con datos residuales están listados en la página de sub-encargados.",
      },
      {
        q: "¿Cómo pruebo que no usaron mis permisos para otra cosa?",
        a: "Con `credential_usage_log`: cada llamada a Google o Microsoft con sus credenciales queda registrada con operación, scopes, quién la originó, motivo, resultado y latencia. La tabla no admite UPDATE ni DELETE. Puede exportarla en CSV o JSON firmado con HMAC-SHA256 y verificar la firma con el id de clave incluido.",
      },
      {
        q: "¿Un token de sesión robado sirve para algo?",
        a: "El access token caduca en 15 minutos. El refresh token vive solo en una cookie HttpOnly, se rota en cada uso y se puede revocar por `jti` en Redis. Las operaciones sensibles exigen además MFA verificado en esa sesión.",
      },
      {
        q: "¿Un módulo con fallas puede tumbar la plataforma?",
        a: "No está diseñado para poder hacerlo. Cada addon corre con límites de memoria y CPU, se supervisa cada 60 segundos y tiene un kill switch que lo desactiva en 15 segundos o menos sin despliegue. El resto de servicios sigue operando.",
      },
    ],
  },
  cta: {
    title: "Solicitar el paquete de seguridad",
    desc: "Incluye este documento en PDF, la lista de sub-encargados, el DPA firmable y las respuestas a cuestionarios estándar (CAIQ, SIG Lite). Respondemos en 5 días hábiles.",
    button: "Solicitar el paquete de seguridad",
    secondary: "Ver políticas de seguridad",
    secondaryHref: "/legal/security",
  },
};

// ---------------------------------------------------------------------------
// es-AR (voseo en llamadas a la acción; contenido técnico compartido)
// ---------------------------------------------------------------------------

const es_AR: GovernanceContent = {
  ...es_CL,
  cta: {
    ...es_CL.cta,
    title: "Solicitá el paquete de seguridad",
    desc: "Incluye este documento en PDF, la lista de sub-encargados, el DPA firmable y las respuestas a cuestionarios estándar (CAIQ, SIG Lite). Te respondemos en 5 días hábiles.",
    button: "Solicitá el paquete de seguridad",
  },
};

// ---------------------------------------------------------------------------
// es-MX (tuteo; contenido técnico compartido)
// ---------------------------------------------------------------------------

const es_MX: GovernanceContent = {
  ...es_CL,
  cta: {
    ...es_CL.cta,
    desc: "Incluye este documento en PDF, la lista de sub-encargados, el DPA firmable y las respuestas a cuestionarios estándar (CAIQ, SIG Lite). Te respondemos en 5 días hábiles.",
  },
};

// ---------------------------------------------------------------------------
// en-US
// ---------------------------------------------------------------------------

const en_US: GovernanceContent = {
  hero: {
    eyebrow: "Technical governance",
    title: "How Mekovault is built and operated",
    subtitle:
      "Reference for IT, security, compliance and audit teams evaluating Mekovault before signing. It covers infrastructure, the identity model, tenant isolation, how directory credentials are handled, and what is still in progress.",
    reviewed: "Last reviewed: September 9, 2026",
    disclaimer:
      "Descriptive document of current operational controls. It is not a formal certification.",
  },
  glance: {
    title: "At a glance",
    rows: [
      ["Region", "AWS Lightsail, us-east-1 (Northern Virginia)"],
      ["Topology", "4 machines on a private network; only one exposed to the Internet"],
      ["Customer secrets", "Self-hosted Infisical, one project per tenant"],
      ["Database", "PostgreSQL 16 with Row-Level Security by company_id"],
      ["Session", "15-minute RS256 JWT + 30-day refresh in an HttpOnly cookie"],
      ["MFA", "TOTP, required for sensitive operations"],
      ["Credential usage", "Immutable per-operation log, exportable and signed"],
      ["Administrative access", "Tailscale only; no public SSH"],
    ],
  },
  toc: { title: "Contents" },
  diagram: {
    internet: "Internet",
    cloudflare: "Cloudflare (80/443)",
    app: "mekovault-app",
    appSub: "nginx · web · svc-* · addons",
    data: "mekovault-data",
    dataSub: "PostgreSQL 16 · Redis ×2 · RabbitMQ",
    vault: "mekovault-vault",
    vaultSub: "Infisical · 1 project / tenant",
    obs: "mekovault-obs",
    obsSub: "Grafana · Loki · Prometheus · Tempo · OTel",
    privateNet: "Private network (no public IP)",
    tailscale: "Tailscale",
    tailscaleSub: "administration",
    publicEdge: "only exposed point",
    caption:
      "Production topology. Only mekovault-app receives Internet traffic, through Cloudflare. The other machines have no public IP and are administered over Tailscale.",
  },
  sections: [
    {
      id: "infraestructura",
      title: "Infrastructure",
      blocks: [
        {
          type: "p",
          text: "Mekovault runs on AWS Lightsail in us-east-1, on four machines connected by a private network. Only one of them receives Internet traffic.",
        },
        {
          type: "table",
          table: {
            caption: "Production machines",
            head: ["Host", "Role", "Services", "Exposure"],
            rows: [
              [
                "`mekovault-app`",
                "Application",
                "nginx, Next.js, FastAPI services, addons",
                "Only exposed host: ports 80/443 behind Cloudflare",
              ],
              [
                "`mekovault-data`",
                "Data",
                "PostgreSQL 16, Redis (2 instances), RabbitMQ",
                "Private network only",
              ],
              [
                "`mekovault-vault`",
                "Secrets",
                "Self-hosted Infisical, one project per tenant",
                "Private network only",
              ],
              [
                "`mekovault-obs`",
                "Observability",
                "Grafana, Loki, Prometheus, Tempo, OpenTelemetry Collector",
                "Private network only",
              ],
            ],
          },
        },
        { type: "diagram" },
        {
          type: "ul",
          items: [
            "Administration exclusively over Tailscale (WireGuard). No host has SSH open to the Internet.",
            "`ufw` firewall active on every machine with a default-deny policy.",
            "Internal services (PostgreSQL, Redis, RabbitMQ, Infisical, Grafana and the FastAPI processes) listen on loopback or the private interface. nginx is the only process serving public traffic.",
            "Cloudflare terminates TLS and filters traffic before it reaches nginx.",
          ],
        },
      ],
    },
    {
      id: "arquitectura",
      title: "Service architecture",
      blocks: [
        {
          type: "p",
          text: "The web interface is a Next.js 16 application. The backend is a set of FastAPI services on Python 3.12 with async SQLAlchemy, each with a narrow responsibility.",
        },
        {
          type: "table",
          table: {
            caption: "Backend services",
            head: ["Service", "Responsibility"],
            rows: [
              ["`svc-auth`", "Authentication, sessions, MFA and password reset"],
              [
                "`svc-tenancy`",
                "Companies, memberships, roles, resellers and tenant deletion",
              ],
              [
                "`svc-requests`",
                "Joiner, mover and leaver requests; approval flow",
              ],
              ["`svc-tickets`", "Support tickets and their follow-up"],
              ["`svc-billing`", "Plans, subscriptions and invoicing"],
              ["`svc-notifications`", "Email and user notifications"],
              [
                "addons",
                "Connector modules. Example: `super-workspace`, which operates on Google Workspace and Microsoft 365",
              ],
            ],
          },
        },
        { type: "h3", text: "Events and background jobs" },
        {
          type: "ul",
          items: [
            "Services communicate through events on RabbitMQ, using the topic exchange `mekovault.events`.",
            "Heavy work (provisioning, deletions, exports) is recorded in a job ledger in PostgreSQL and executed by a single worker.",
            "Each job retries with exponential backoff. Its steps are idempotent: re-running a completed step does not produce duplicate effects on the directory.",
            "When a job exhausts its retries an alert is raised and the job stays visible with its last error for manual intervention.",
          ],
        },
      ],
    },
    {
      id: "identidad",
      title: "Identity and session",
      blocks: [
        {
          type: "p",
          text: "Mekovault users (IT administrators, approvers, resellers) authenticate with Google or Microsoft OAuth, or with email and password. The session is designed so that a stolen token is short-lived and revocable.",
        },
        {
          type: "table",
          table: {
            caption: "Session parameters",
            head: ["Mechanism", "Detail"],
            rows: [
              ["Sign-in methods", "OAuth with Google or Microsoft, or email and password"],
              [
                "Access token",
                "JWT signed with RS256, 15-minute lifetime, with role and MFA-state claims",
              ],
              [
                "Refresh token",
                "30-day lifetime. Lives only in an HttpOnly cookie (unreachable from JavaScript). Rotated on every use and individually revocable by `jti` in Redis. Inherits the session's MFA state and re-validates the user's company membership on every renewal.",
              ],
              [
                "MFA",
                "TOTP (standard authenticator apps). Limit of 5 attempts per minute; 15-minute lockout after 10 consecutive failures.",
              ],
              [
                "Sensitive operations",
                "Require a session with verified MFA, even if the user is already authenticated.",
              ],
              ["Password reset", "Single-use token with a 30-minute lifetime."],
            ],
          },
        },
        {
          type: "p",
          text: "Practical consequence: a leaked access token expires within 15 minutes at most; the refresh token cannot be exported from the browser; and revoking the `jti` in Redis ends the session immediately, without waiting for anything to expire.",
        },
      ],
    },
    {
      id: "aislamiento",
      title: "Multi-tenant isolation",
      blocks: [
        {
          type: "p",
          text: "Mekovault is multi-tenant: several customers share the same infrastructure. Isolation between them is enforced in independent layers, so a defect in one layer does not expose another customer's data.",
        },
        {
          type: "table",
          table: {
            caption: "Isolation layers",
            head: ["Layer", "Control"],
            rows: [
              ["Data model", "Every row holding customer data carries `company_id`."],
              [
                "Application",
                "Every query filters by the company carried in the session token. Never by a parameter sent by the client.",
              ],
              [
                "Database",
                "PostgreSQL Row-Level Security as an additional barrier: even if a query forgot the filter, the database returns no rows from another company.",
              ],
              [
                "Superadmin",
                "Platform role separate from customer roles. Its actions require code confirmation and verified MFA.",
              ],
              ["Resellers", "A reseller sees and operates only on the tenants it manages."],
            ],
          },
        },
      ],
    },
    {
      id: "credenciales",
      title: "Provider credentials and usage audit",
      blocks: [
        {
          type: "p",
          text: "To operate on your directory, Mekovault receives credentials with administrative permissions: the JSON of a Google Service Account with domain-wide delegation, or the details of a Microsoft Entra ID App Registration (client id, tenant id and client secret). They are the most sensitive asset we handle.",
        },
        {
          type: "ul",
          items: [
            "Stored encrypted in Infisical (self-hosted, on `mekovault-vault`), in a dedicated project per tenant.",
            "Never written to the database, logs or API responses. The database stores only a reference to the secret.",
            "Loaded into memory at the moment of calling the provider and discarded when the operation ends.",
          ],
        },
        { type: "h3", text: "Immutable record of every use" },
        {
          type: "p",
          text: "Every call to Google or Microsoft with a customer's credentials writes a row to the `credential_usage_log` table.",
        },
        {
          type: "table",
          table: {
            caption: "credential_usage_log fields",
            head: ["Field", "Content"],
            rows: [
              ["Tenant", "`company_id` of the customer owning the credential"],
              ["Provider", "Google Workspace or Microsoft Entra ID"],
              [
                "Operation",
                "Action executed, for example `create_user`, `suspend_user`, `add_group_member`",
              ],
              ["Scopes", "Scopes or permissions consumed by that operation"],
              [
                "Who",
                "User who originated the action, or the automated process (worker, timer) that executed it",
              ],
              ["Reason", "Reference to the request, ticket or task that justified the call"],
              ["Result", "Success or failure, with error code where applicable"],
              ["Latency", "Duration of the provider call in milliseconds"],
            ],
          },
        },
        {
          type: "ul",
          items: [
            "The table has PostgreSQL triggers that reject any `UPDATE` or `DELETE`. Not even the Mekovault team can edit or remove an individual row.",
            "Each row has a deterministic id derived from the operation. A retry of the same job does not produce a second row, so the log neither inflates nor contradicts itself.",
            "A burst of failures against a tenant's credentials raises an alert to the operations team.",
          ],
        },
        { type: "h3", text: "Retention" },
        {
          type: "table",
          table: {
            caption: "Usage log retention",
            head: ["Parameter", "Value"],
            rows: [
              ["Minimum", "24 months"],
              ["Maximum", "84 months"],
              ["Configuration", "Per tenant, within that range"],
              ["Tenant deletion", "Deleted with the tenant, or after 24 months, whichever comes first"],
              [
                "Purge",
                "Weekly, only of rows outside the configured period. Every purged batch is recorded in the audit trail.",
              ],
            ],
          },
        },
        { type: "h3", text: "Export for auditors" },
        {
          type: "p",
          text: "The log exports as CSV or JSON. Each file is signed with HMAC-SHA256 and includes the identifier of the key used, so an auditor can verify the file was not altered after it was generated.",
        },
      ],
    },
    {
      id: "permisos",
      title: "Permissions Mekovault requests",
      blocks: [
        {
          type: "p",
          text: "Mekovault asks only for the permissions it needs to manage users, groups and organizational units. It does not request access to mail, files, calendar or any user content.",
        },
        {
          type: "table",
          table: {
            caption: "Google Workspace (Admin SDK Directory API)",
            head: ["Scope", "What it is used for"],
            rows: [
              [
                "`admin.directory.user`",
                "Create, suspend, reactivate and modify user accounts; set an initial password and force its change.",
              ],
              [
                "`admin.directory.group`",
                "Create groups and lists, and add or remove members during joiner, mover and leaver flows.",
              ],
              [
                "`admin.directory.orgunit`",
                "Read and move users between organizational units according to the onboarding or offboarding flow.",
              ],
            ],
          },
        },
        {
          type: "p",
          text: "Calls are made with the Service Account impersonating the delegated administrator the customer designates when connecting the domain. That administrator is recorded in every `credential_usage_log` row.",
        },
        {
          type: "table",
          table: {
            caption: "Microsoft Entra ID (Microsoft Graph, application permissions)",
            head: ["Permission", "What it is used for"],
            rows: [
              [
                "`User.ReadWrite.All`",
                "Create, update, disable and delete users; set an initial password.",
              ],
              ["`Group.ReadWrite.All`", "Create groups and manage their membership."],
              [
                "`Directory.ReadWrite.All`",
                "Directory operations not covered by the two permissions above, for example structural reads needed to validate a new account.",
              ],
            ],
          },
        },
        {
          type: "p",
          text: "Microsoft is accessed with the client credentials flow: the application acts with its own permissions, without a user session. The permissions are of type Application and require consent from a global administrator of the customer when connecting.",
        },
      ],
    },
    {
      id: "contrasenas",
      title: "Initial passwords and resets",
      blocks: [
        {
          type: "ul",
          items: [
            "When Mekovault creates an account or resets a password, the temporary password is visible to the administrator who executed the action for 15 minutes.",
            "After that it is purged from the system. It cannot be recovered: if lost, a new one is generated.",
            "Passwords are never written to logs, events or the credential usage log.",
          ],
        },
      ],
    },
    {
      id: "eliminacion",
      title: "Tenant deletion",
      blocks: [
        {
          type: "p",
          text: "A customer can request full deletion of its tenant (right to erasure, GDPR art. 17 and Chilean Law 21.719). The process is designed so credentials disappear before any other data.",
        },
        {
          type: "ol",
          items: [
            "A tenant administrator requests deletion. The request is queued as a job.",
            "The tenant becomes inaccessible immediately: its sessions and new sign-ins are rejected.",
            "The job revokes the tenant's secrets and deletes its Infisical project. From this point Mekovault can no longer call the customer's directory.",
            "Only then is the tenant's data deleted in cascade from PostgreSQL: users, requests, tickets, configuration.",
            "The deletion is recorded in the platform audit trail.",
            "Administrators receive a confirmation email detailing what was deleted.",
          ],
        },
        {
          type: "callout",
          title: "Remaining sub-processors",
          text: "After deletion, residual data may remain for a bounded period at sub-processors such as the transactional email provider or log storage. They are documented, with their retention periods, in the site's sub-processor list.",
        },
      ],
    },
    {
      id: "addons",
      title: "Addons: modules with limits",
      blocks: [
        {
          type: "p",
          text: "Provider connectors and other extensions are packaged as addons. A defective addon must not be able to degrade the whole platform, and the addon registry enforces that rule.",
        },
        {
          type: "table",
          table: {
            caption: "Addon lifecycle",
            head: ["Stage", "Control"],
            rows: [
              [
                "Declaration",
                "Each module is described in a manifest with its ports, routes, tables, migrations and health check.",
              ],
              [
                "Validation",
                "Automatic before activation: manifest schema, port, route and table collisions with other modules, applicable migrations and health check response.",
              ],
              [
                "Execution",
                "Runs with memory and CPU limits. A module that overflows is restarted without affecting the others.",
              ],
              [
                "Supervision",
                "Health check every 60 seconds, with the result visible in the operations panel.",
              ],
              [
                "Kill switch",
                "Any module can be disabled without a deploy: within 15 seconds or less its routes return 503 and the rest of the platform keeps operating.",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "perimetro",
      title: "Perimeter and browser",
      blocks: [
        {
          type: "table",
          table: {
            caption: "Portal headers and policies",
            head: ["Control", "Effect"],
            rows: [
              [
                "HSTS",
                "The browser connects to the domain only over HTTPS, even if the user types http.",
              ],
              [
                "Content-Security-Policy",
                "Restricts the origins from which the portal may load scripts, styles and connections.",
              ],
              [
                "X-Content-Type-Options: nosniff",
                "Prevents the browser from reinterpreting a file's type.",
              ],
              [
                "frame-ancestors 'none'",
                "The portal cannot be embedded in an iframe on another site (clickjacking).",
              ],
              ["Restricted CORS", "Only Mekovault origins may call the API from a browser."],
              ["No source maps in production", "Frontend source code is not published."],
              [
                "No public API documentation",
                "The services' OpenAPI schemas are not exposed in production.",
              ],
              [
                "Errors without traces",
                "Error responses include no stack traces or internal details.",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "operacion",
      title: "Operations and observability",
      blocks: [
        {
          type: "table",
          table: {
            caption: "Operational signals",
            head: ["Signal", "Destination"],
            rows: [
              ["Structured logs (JSON)", "Loki, queried from Grafana"],
              ["Metrics", "Prometheus"],
              ["Distributed traces", "OpenTelemetry into Tempo"],
            ],
          },
        },
        {
          type: "ul",
          items: [
            "A database backup is taken before every deploy.",
            "Services are deployed in a controlled way; a failed deploy is rolled back to the previous backup.",
          ],
        },
        { type: "h3", text: "Hygiene timers" },
        {
          type: "table",
          table: {
            caption: "Scheduled tasks",
            head: ["Task", "What it does"],
            rows: [
              ["PII purge", "Deletes personal data that has completed its retention period."],
              [
                "Ticket closure",
                "Closes resolved tickets with no activity after the configured period.",
              ],
              [
                "Secret expiration",
                "Warns administrators 30, 7 and 0 days before a provider credential expires (for example, an Entra ID client secret).",
              ],
              [
                "Usage log purge",
                "Weekly; deletes only rows outside the configured retention and records the batch.",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "capas",
      title: "Security layers summary",
      blocks: [
        {
          type: "table",
          table: {
            caption: "Controls per layer",
            head: ["Layer", "Controls"],
            rows: [
              ["Perimeter", "Cloudflare, nginx as the only public process, `ufw`"],
              ["Network", "Lightsail private network, Tailscale for administration, services on loopback"],
              [
                "Identity",
                "15-minute RS256 JWT, rotated and revocable HttpOnly refresh, TOTP MFA with rate limit",
              ],
              ["Application", "Filter by the token's `company_id` in every query"],
              ["Data", "Row-Level Security in PostgreSQL 16"],
              ["Secrets", "Self-hosted Infisical, one project per tenant, never in DB or logs"],
              [
                "Audit",
                "Immutable `credential_usage_log`, export signed with HMAC-SHA256",
              ],
              ["Modules", "Validated manifest, resource limits, supervision every 60 s, kill switch"],
              ["Operations", "Pre-deploy backups, hygiene timers, logs, metrics and traces"],
            ],
          },
        },
      ],
    },
    {
      id: "roadmap",
      title: "What is in progress",
      blocks: [
        {
          type: "p",
          text: "We prefer to say what is missing before a questionnaire asks. These items are being worked on and should not be assumed to be in place until this page moves them to the relevant section.",
        },
        {
          type: "table",
          table: {
            caption: "Technical roadmap",
            head: ["Item", "Status"],
            rows: [
              [
                "`ENVIRONMENT=production` on every service (today some run with hardened development configuration)",
                "In progress",
              ],
              ["Operational alerts to Slack", "In progress"],
              [
                "Dedicated PostgreSQL role per addon, so each module reaches only its own tables",
                "In progress",
              ],
              ["SOC 2", "In progress, no committed date"],
            ],
          },
        },
      ],
    },
  ],
  faq: {
    title: "Frequent audit questions",
    intro: "Direct answers to what security teams and auditors usually ask.",
    items: [
      {
        q: "Where do my credentials live?",
        a: "In Infisical, a self-hosted instance on the `mekovault-vault` machine, inside the AWS Lightsail private network in us-east-1. Each tenant has its own project. The database stores only a reference to the secret, never its value.",
      },
      {
        q: "Who can see them?",
        a: "No person sees them in normal operation. Services load them into memory when calling the provider and discard them afterwards. Access to the vault machine requires Tailscale and is restricted to the platform team. Temporary passwords generated by Mekovault are visible to the customer's administrator for 15 minutes and then purged.",
      },
      {
        q: "What happens if I leave Mekovault?",
        a: "An administrator requests tenant deletion. Access is cut immediately; then secrets are revoked and the Infisical project is deleted; only after that is the data deleted in cascade from PostgreSQL. The event is recorded in the platform audit trail and administrators receive an email with the details. Sub-processors holding residual data are listed on the sub-processors page.",
      },
      {
        q: "How do I prove my permissions were not used for something else?",
        a: "With `credential_usage_log`: every call to Google or Microsoft with your credentials is recorded with operation, scopes, originator, reason, result and latency. The table accepts neither UPDATE nor DELETE. You can export it as CSV or JSON signed with HMAC-SHA256 and verify the signature with the included key id.",
      },
      {
        q: "Is a stolen session token useful for anything?",
        a: "The access token expires in 15 minutes. The refresh token lives only in an HttpOnly cookie, is rotated on every use and can be revoked by `jti` in Redis. Sensitive operations additionally require verified MFA in that session.",
      },
      {
        q: "Can a faulty module take down the platform?",
        a: "It is not designed to be able to. Each addon runs with memory and CPU limits, is supervised every 60 seconds and has a kill switch that disables it within 15 seconds or less without a deploy. The remaining services keep operating.",
      },
    ],
  },
  cta: {
    title: "Request the security package",
    desc: "Includes this document as PDF, the sub-processor list, the signable DPA and answers to standard questionnaires (CAIQ, SIG Lite). We reply within 5 business days.",
    button: "Request the security package",
    secondary: "Read the security policies",
    secondaryHref: "/legal/security",
  },
};

// ---------------------------------------------------------------------------
// pt-BR
// ---------------------------------------------------------------------------

const pt_BR: GovernanceContent = {
  hero: {
    eyebrow: "Governança técnica",
    title: "Como o Mekovault é construído e operado",
    subtitle:
      "Referência para equipes de TI, segurança, compliance e auditoria que avaliam o Mekovault antes de assinar. Descreve a infraestrutura, o modelo de identidade, o isolamento entre clientes, o tratamento de credenciais de diretório e o que ainda está em andamento.",
    reviewed: "Última revisão: 9 de setembro de 2026",
    disclaimer:
      "Documento descritivo dos controles operacionais vigentes. Não constitui certificação formal.",
  },
  glance: {
    title: "Em resumo",
    rows: [
      ["Região", "AWS Lightsail, us-east-1 (Virgínia do Norte)"],
      ["Topologia", "4 máquinas em rede privada; apenas uma exposta à Internet"],
      ["Segredos de clientes", "Infisical self-hosted, um project por tenant"],
      ["Banco de dados", "PostgreSQL 16 com Row-Level Security por company_id"],
      ["Sessão", "JWT RS256 de 15 min + refresh de 30 dias em cookie HttpOnly"],
      ["MFA", "TOTP, exigido em operações sensíveis"],
      ["Uso de credenciais", "Registro imutável por operação, exportável e assinado"],
      ["Acesso administrativo", "Somente via Tailscale; sem SSH público"],
    ],
  },
  toc: { title: "Conteúdo" },
  diagram: {
    internet: "Internet",
    cloudflare: "Cloudflare (80/443)",
    app: "mekovault-app",
    appSub: "nginx · web · svc-* · addons",
    data: "mekovault-data",
    dataSub: "PostgreSQL 16 · Redis ×2 · RabbitMQ",
    vault: "mekovault-vault",
    vaultSub: "Infisical · 1 project / tenant",
    obs: "mekovault-obs",
    obsSub: "Grafana · Loki · Prometheus · Tempo · OTel",
    privateNet: "Rede privada (sem IP público)",
    tailscale: "Tailscale",
    tailscaleSub: "administração",
    publicEdge: "único ponto exposto",
    caption:
      "Topologia de produção. Apenas mekovault-app recebe tráfego da Internet, por meio do Cloudflare. As demais máquinas não têm IP público e são administradas via Tailscale.",
  },
  sections: [
    {
      id: "infraestructura",
      title: "Infraestrutura",
      blocks: [
        {
          type: "p",
          text: "O Mekovault roda na AWS Lightsail, região us-east-1, em quatro máquinas conectadas por rede privada. Apenas uma delas recebe tráfego da Internet.",
        },
        {
          type: "table",
          table: {
            caption: "Máquinas de produção",
            head: ["Host", "Função", "Serviços", "Exposição"],
            rows: [
              [
                "`mekovault-app`",
                "Aplicação",
                "nginx, Next.js, serviços FastAPI, addons",
                "Única exposta: portas 80/443 atrás do Cloudflare",
              ],
              [
                "`mekovault-data`",
                "Dados",
                "PostgreSQL 16, Redis (2 instâncias), RabbitMQ",
                "Somente rede privada",
              ],
              [
                "`mekovault-vault`",
                "Segredos",
                "Infisical self-hosted, um project por tenant",
                "Somente rede privada",
              ],
              [
                "`mekovault-obs`",
                "Observabilidade",
                "Grafana, Loki, Prometheus, Tempo, OpenTelemetry Collector",
                "Somente rede privada",
              ],
            ],
          },
        },
        { type: "diagram" },
        {
          type: "ul",
          items: [
            "Administração exclusivamente via Tailscale (WireGuard). Nenhum host tem SSH aberto à Internet.",
            "Firewall `ufw` ativo em cada máquina com política de negar por padrão.",
            "Os serviços internos (PostgreSQL, Redis, RabbitMQ, Infisical, Grafana e os processos FastAPI) escutam em loopback ou na interface privada. O nginx é o único processo que atende tráfego público.",
            "O Cloudflare termina o TLS e filtra o tráfego antes que chegue ao nginx.",
          ],
        },
      ],
    },
    {
      id: "arquitectura",
      title: "Arquitetura de serviços",
      blocks: [
        {
          type: "p",
          text: "A interface web é uma aplicação Next.js 16. O backend é composto por serviços FastAPI em Python 3.12 com SQLAlchemy assíncrono, cada um com uma responsabilidade delimitada.",
        },
        {
          type: "table",
          table: {
            caption: "Serviços do backend",
            head: ["Serviço", "Responsabilidade"],
            rows: [
              ["`svc-auth`", "Autenticação, sessões, MFA e redefinição de senha"],
              [
                "`svc-tenancy`",
                "Empresas, associações, papéis, revendedores e exclusão de tenants",
              ],
              [
                "`svc-requests`",
                "Solicitações de admissão, mudança e desligamento; fluxo de aprovações",
              ],
              ["`svc-tickets`", "Tickets de suporte e seu acompanhamento"],
              ["`svc-billing`", "Planos, assinaturas e faturamento"],
              ["`svc-notifications`", "E-mail e notificações aos usuários"],
              [
                "addons",
                "Módulos conectores. Exemplo: `super-workspace`, que opera sobre Google Workspace e Microsoft 365",
              ],
            ],
          },
        },
        { type: "h3", text: "Eventos e trabalhos em segundo plano" },
        {
          type: "ul",
          items: [
            "Os serviços se comunicam por eventos via RabbitMQ, no exchange de tipo topic `mekovault.events`.",
            "Os trabalhos pesados (provisionamento, exclusões, exportações) são registrados em um livro-razão de jobs no PostgreSQL e executados por um worker único.",
            "Cada job tenta novamente com backoff exponencial. Seus passos são idempotentes: reexecutar um passo já concluído não produz efeitos duplicados no diretório.",
            "Quando um job esgota as tentativas, um alerta é gerado e o job permanece visível com o último erro para intervenção manual.",
          ],
        },
      ],
    },
    {
      id: "identidad",
      title: "Identidade e sessão",
      blocks: [
        {
          type: "p",
          text: "Os usuários do Mekovault (administradores de TI, aprovadores, revendedores) se autenticam com OAuth do Google ou da Microsoft, ou com e-mail e senha. A sessão foi desenhada para que um token roubado sirva por pouco tempo e seja revogável.",
        },
        {
          type: "table",
          table: {
            caption: "Parâmetros de sessão",
            head: ["Mecanismo", "Detalhe"],
            rows: [
              ["Métodos de acesso", "OAuth com Google ou Microsoft, ou e-mail e senha"],
              [
                "Token de acesso",
                "JWT assinado com RS256, validade de 15 minutos, com claims de papel e de estado do MFA",
              ],
              [
                "Refresh token",
                "Validade de 30 dias. Vive apenas em um cookie HttpOnly (inacessível via JavaScript). É rotacionado a cada uso e revogável individualmente por `jti` no Redis. Herda o estado do MFA da sessão e revalida a associação do usuário à empresa a cada renovação.",
              ],
              [
                "MFA",
                "TOTP (apps autenticadores padrão). Limite de 5 tentativas por minuto; bloqueio de 15 minutos após 10 falhas consecutivas.",
              ],
              [
                "Operações sensíveis",
                "Exigem que a sessão tenha MFA verificado, mesmo que o usuário já esteja autenticado.",
              ],
              ["Redefinição de senha", "Token de uso único com validade de 30 minutos."],
            ],
          },
        },
        {
          type: "p",
          text: "Consequência prática: um access token vazado expira em no máximo 15 minutos; o refresh não pode ser exportado do navegador; e revogar o `jti` no Redis encerra a sessão imediatamente, sem esperar que nada expire.",
        },
      ],
    },
    {
      id: "aislamiento",
      title: "Isolamento multi-tenant",
      blocks: [
        {
          type: "p",
          text: "O Mekovault é multi-tenant: vários clientes compartilham a mesma infraestrutura. O isolamento entre eles é imposto em camadas independentes, de modo que um defeito em uma delas não exponha dados de outro cliente.",
        },
        {
          type: "table",
          table: {
            caption: "Camadas de isolamento",
            head: ["Camada", "Controle"],
            rows: [
              ["Modelo de dados", "Toda linha com dados de cliente carrega `company_id`."],
              [
                "Aplicação",
                "Toda consulta filtra pela empresa que vem no token de sessão. Nunca por um parâmetro enviado pelo cliente.",
              ],
              [
                "Banco de dados",
                "Row-Level Security do PostgreSQL como barreira adicional: mesmo que uma consulta esquecesse o filtro, o banco não retorna linhas de outra empresa.",
              ],
              [
                "Superadmin",
                "Papel de plataforma separado dos papéis de cliente. Suas ações exigem confirmação por código e MFA verificado.",
              ],
              ["Revendedores", "Um revendedor vê e opera apenas sobre os tenants que administra."],
            ],
          },
        },
      ],
    },
    {
      id: "credenciales",
      title: "Credenciais de provedores e auditoria de uso",
      blocks: [
        {
          type: "p",
          text: "Para operar no seu diretório, o Mekovault recebe credenciais com permissões de administração: o JSON de uma Service Account do Google com delegação em todo o domínio, ou os dados de um App Registration do Microsoft Entra ID (client id, tenant id e client secret). São o ativo mais sensível que manipulamos.",
        },
        {
          type: "ul",
          items: [
            "Armazenadas criptografadas no Infisical (self-hosted, em `mekovault-vault`), em um project dedicado por tenant.",
            "Nunca são gravadas no banco de dados, em logs ou em respostas de API. O banco guarda apenas uma referência ao segredo.",
            "São carregadas em memória no momento de chamar o provedor e descartadas ao fim da operação.",
          ],
        },
        { type: "h3", text: "Registro imutável de cada uso" },
        {
          type: "p",
          text: "Cada chamada ao Google ou à Microsoft com as credenciais do cliente grava uma linha na tabela `credential_usage_log`.",
        },
        {
          type: "table",
          table: {
            caption: "Campos de credential_usage_log",
            head: ["Campo", "Conteúdo"],
            rows: [
              ["Tenant", "`company_id` do cliente dono da credencial"],
              ["Provedor", "Google Workspace ou Microsoft Entra ID"],
              [
                "Operação",
                "Ação executada, por exemplo `create_user`, `suspend_user`, `add_group_member`",
              ],
              ["Scopes", "Scopes ou permissões consumidos por essa operação"],
              [
                "Quem",
                "Usuário que originou a ação, ou o processo automático (worker, timer) que a executou",
              ],
              ["Motivo", "Referência à solicitação, ticket ou tarefa que justificou a chamada"],
              ["Resultado", "Sucesso ou falha, com código de erro quando aplicável"],
              ["Latência", "Duração da chamada ao provedor em milissegundos"],
            ],
          },
        },
        {
          type: "ul",
          items: [
            "A tabela tem triggers do PostgreSQL que rejeitam qualquer `UPDATE` ou `DELETE`. Nem a equipe do Mekovault consegue editar ou apagar uma linha individual.",
            "Cada linha tem um id determinístico derivado da operação. Uma nova tentativa do mesmo job não gera uma segunda linha, então o registro não infla nem se contradiz.",
            "Uma rajada de falhas sobre as credenciais de um tenant dispara um alerta para a equipe de operação.",
          ],
        },
        { type: "h3", text: "Retenção" },
        {
          type: "table",
          table: {
            caption: "Retenção do registro de uso",
            head: ["Parâmetro", "Valor"],
            rows: [
              ["Mínimo", "24 meses"],
              ["Máximo", "84 meses"],
              ["Configuração", "Por tenant, dentro dessa faixa"],
              ["Exclusão do tenant", "Apagado junto com o tenant, ou após 24 meses, o que ocorrer primeiro"],
              [
                "Expurgo",
                "Semanal, apenas de linhas fora do período configurado. Cada lote expurgado fica registrado na auditoria.",
              ],
            ],
          },
        },
        { type: "h3", text: "Exportação para auditores" },
        {
          type: "p",
          text: "O registro é exportado em CSV ou JSON. Cada arquivo é assinado com HMAC-SHA256 e inclui o identificador da chave usada, de modo que um auditor pode verificar que o arquivo não foi alterado depois de gerado.",
        },
      ],
    },
    {
      id: "permisos",
      title: "Permissões que o Mekovault solicita",
      blocks: [
        {
          type: "p",
          text: "O Mekovault pede apenas as permissões necessárias para gerenciar usuários, grupos e unidades organizacionais. Não solicita acesso a e-mail, arquivos, calendário nem conteúdo de nenhum usuário.",
        },
        {
          type: "table",
          table: {
            caption: "Google Workspace (Admin SDK Directory API)",
            head: ["Scope", "Para que é usado"],
            rows: [
              [
                "`admin.directory.user`",
                "Criar, suspender, reativar e modificar contas de usuário; definir senha inicial e forçar sua troca.",
              ],
              [
                "`admin.directory.group`",
                "Criar grupos e listas, e adicionar ou remover membros durante admissões, mudanças e desligamentos.",
              ],
              [
                "`admin.directory.orgunit`",
                "Ler e mover usuários entre unidades organizacionais conforme o fluxo de onboarding ou offboarding.",
              ],
            ],
          },
        },
        {
          type: "p",
          text: "As chamadas são feitas com a Service Account personificando o administrador delegado que o cliente designa ao conectar o domínio. Esse administrador fica registrado em cada linha de `credential_usage_log`.",
        },
        {
          type: "table",
          table: {
            caption: "Microsoft Entra ID (Microsoft Graph, permissões de aplicação)",
            head: ["Permissão", "Para que é usada"],
            rows: [
              [
                "`User.ReadWrite.All`",
                "Criar, atualizar, desabilitar e excluir usuários; definir senha inicial.",
              ],
              ["`Group.ReadWrite.All`", "Criar grupos e gerenciar sua composição."],
              [
                "`Directory.ReadWrite.All`",
                "Operações de diretório não cobertas pelas duas permissões anteriores, por exemplo leituras de estrutura necessárias para validar uma admissão.",
              ],
            ],
          },
        },
        {
          type: "p",
          text: "Na Microsoft usa-se o fluxo de client credentials: a aplicação atua com suas próprias permissões, sem sessão de usuário. As permissões são do tipo Application e exigem consentimento de um administrador global do cliente ao conectar.",
        },
      ],
    },
    {
      id: "contrasenas",
      title: "Senhas iniciais e redefinição",
      blocks: [
        {
          type: "ul",
          items: [
            "Quando o Mekovault cria uma conta ou redefine uma senha, a senha temporária fica visível para o administrador que executou a ação por 15 minutos.",
            "Depois desse prazo ela é expurgada do sistema. Não pode ser recuperada: se foi perdida, gera-se uma nova.",
            "Senhas nunca são gravadas em logs, eventos nem no registro de uso de credenciais.",
          ],
        },
      ],
    },
    {
      id: "eliminacion",
      title: "Exclusão de um tenant",
      blocks: [
        {
          type: "p",
          text: "Um cliente pode pedir a exclusão completa do seu tenant (direito ao esquecimento, GDPR art. 17 e Lei 21.719 do Chile). O processo foi desenhado para que as credenciais desapareçam antes de qualquer outro dado.",
        },
        {
          type: "ol",
          items: [
            "Um administrador do tenant solicita a exclusão. A solicitação é enfileirada como job.",
            "O tenant fica inacessível imediatamente: suas sessões e novos logins são rejeitados.",
            "O job revoga os segredos do tenant e exclui seu project no Infisical. A partir desse ponto o Mekovault não consegue mais chamar o diretório do cliente.",
            "Só então os dados do tenant são excluídos em cascata do PostgreSQL: usuários, solicitações, tickets, configuração.",
            "A exclusão fica registrada na auditoria da plataforma.",
            "Os administradores recebem um e-mail de confirmação com o detalhe do que foi excluído.",
          ],
        },
        {
          type: "callout",
          title: "Suboperadores remanescentes",
          text: "Após a exclusão podem restar dados residuais por um período limitado em suboperadores como o provedor de e-mail transacional ou o armazenamento de logs. Estão documentados, com seus prazos, na lista de suboperadores do site.",
        },
      ],
    },
    {
      id: "addons",
      title: "Addons: módulos com limites",
      blocks: [
        {
          type: "p",
          text: "Os conectores a provedores e outras extensões são empacotados como addons. Um addon com defeito não deve conseguir degradar a plataforma inteira, e o registro de addons impõe essa regra.",
        },
        {
          type: "table",
          table: {
            caption: "Ciclo de vida de um addon",
            head: ["Etapa", "Controle"],
            rows: [
              [
                "Declaração",
                "Cada módulo é descrito em um manifesto com suas portas, rotas, tabelas, migrações e verificação de saúde.",
              ],
              [
                "Validação",
                "Automática antes da ativação: esquema do manifesto, colisões de portas, rotas e tabelas com outros módulos, migrações aplicáveis e resposta da verificação de saúde.",
              ],
              [
                "Execução",
                "Roda com limites de memória e CPU. Um módulo que estoura é reiniciado sem afetar os demais.",
              ],
              [
                "Supervisão",
                "Verificação de saúde a cada 60 segundos, com resultado visível no painel de operação.",
              ],
              [
                "Kill switch",
                "Qualquer módulo pode ser desativado sem deploy: em 15 segundos ou menos suas rotas respondem 503 e o restante da plataforma segue operando.",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "perimetro",
      title: "Perímetro e navegador",
      blocks: [
        {
          type: "table",
          table: {
            caption: "Cabeçalhos e políticas do portal",
            head: ["Controle", "Efeito"],
            rows: [
              [
                "HSTS",
                "O navegador só se conecta ao domínio por HTTPS, mesmo que o usuário digite http.",
              ],
              [
                "Content-Security-Policy",
                "Restringe as origens das quais o portal pode carregar scripts, estilos e conexões.",
              ],
              [
                "X-Content-Type-Options: nosniff",
                "Impede que o navegador reinterprete o tipo de um arquivo.",
              ],
              [
                "frame-ancestors 'none'",
                "O portal não pode ser embutido em um iframe de outro site (clickjacking).",
              ],
              ["CORS restrito", "Apenas as origens do Mekovault podem chamar a API a partir de um navegador."],
              ["Sem source maps em produção", "O código-fonte do frontend não é publicado."],
              [
                "Sem documentação pública de API",
                "Os esquemas OpenAPI dos serviços não ficam expostos em produção.",
              ],
              [
                "Erros sem rastros",
                "As respostas de erro não incluem stack traces nem detalhes internos.",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "operacion",
      title: "Operação e observabilidade",
      blocks: [
        {
          type: "table",
          table: {
            caption: "Sinais de operação",
            head: ["Sinal", "Destino"],
            rows: [
              ["Logs estruturados (JSON)", "Loki, consultados pelo Grafana"],
              ["Métricas", "Prometheus"],
              ["Rastros distribuídos", "OpenTelemetry para o Tempo"],
            ],
          },
        },
        {
          type: "ul",
          items: [
            "Antes de cada deploy é feito um backup do banco de dados.",
            "Os serviços são implantados de forma controlada; um deploy com falha é revertido ao backup anterior.",
          ],
        },
        { type: "h3", text: "Timers de higiene" },
        {
          type: "table",
          table: {
            caption: "Tarefas agendadas",
            head: ["Tarefa", "O que faz"],
            rows: [
              ["Expurgo de PII", "Exclui dados pessoais que já cumpriram seu período de retenção."],
              [
                "Fechamento de tickets",
                "Fecha tickets resolvidos sem atividade após o prazo configurado.",
              ],
              [
                "Expiração de segredos",
                "Avisa os administradores 30, 7 e 0 dias antes de uma credencial de provedor expirar (por exemplo, um client secret do Entra ID).",
              ],
              [
                "Expurgo do registro de uso",
                "Semanal; exclui apenas linhas fora da retenção configurada e registra o lote.",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "capas",
      title: "Resumo das camadas de segurança",
      blocks: [
        {
          type: "table",
          table: {
            caption: "Controles por camada",
            head: ["Camada", "Controles"],
            rows: [
              ["Perímetro", "Cloudflare, nginx como único processo público, `ufw`"],
              ["Rede", "Rede privada do Lightsail, Tailscale para administração, serviços em loopback"],
              [
                "Identidade",
                "JWT RS256 de 15 min, refresh HttpOnly rotacionado e revogável, MFA TOTP com rate limit",
              ],
              ["Aplicação", "Filtro pelo `company_id` do token em toda consulta"],
              ["Dados", "Row-Level Security no PostgreSQL 16"],
              ["Segredos", "Infisical self-hosted, um project por tenant, nunca em banco nem logs"],
              [
                "Auditoria",
                "`credential_usage_log` imutável, exportação assinada com HMAC-SHA256",
              ],
              ["Módulos", "Manifesto validado, limites de recursos, supervisão a cada 60 s, kill switch"],
              ["Operação", "Backups antes do deploy, timers de higiene, logs, métricas e rastros"],
            ],
          },
        },
      ],
    },
    {
      id: "roadmap",
      title: "O que está em andamento",
      blocks: [
        {
          type: "p",
          text: "Preferimos dizer o que falta antes que um questionário pergunte. Estes itens estão em trabalho e não devem ser considerados vigentes até que esta página os mova para a seção correspondente.",
        },
        {
          type: "table",
          table: {
            caption: "Roadmap técnico",
            head: ["Item", "Status"],
            rows: [
              [
                "`ENVIRONMENT=production` em todos os serviços (hoje alguns rodam com a configuração de desenvolvimento endurecida)",
                "Em andamento",
              ],
              ["Alertas de operação para o Slack", "Em andamento"],
              [
                "Papel do PostgreSQL dedicado por addon, para que cada módulo acesse apenas suas tabelas",
                "Em andamento",
              ],
              ["SOC 2", "Em andamento, sem data comprometida"],
            ],
          },
        },
      ],
    },
  ],
  faq: {
    title: "Perguntas frequentes de auditoria",
    intro: "Respostas diretas ao que equipes de segurança e auditores costumam perguntar.",
    items: [
      {
        q: "Onde ficam minhas credenciais?",
        a: "No Infisical, uma instância self-hosted na máquina `mekovault-vault`, dentro da rede privada da AWS Lightsail em us-east-1. Cada tenant tem seu próprio project. O banco de dados guarda apenas uma referência ao segredo, nunca seu valor.",
      },
      {
        q: "Quem pode vê-las?",
        a: "Nenhuma pessoa as vê em operação normal. Os serviços as carregam em memória no momento de chamar o provedor e as descartam ao terminar. O acesso à máquina do vault exige Tailscale e é restrito à equipe de plataforma. As senhas temporárias geradas pelo Mekovault ficam visíveis ao administrador do cliente por 15 minutos e depois são expurgadas.",
      },
      {
        q: "O que acontece se eu deixar o Mekovault?",
        a: "Um administrador solicita a exclusão do tenant. O acesso é cortado imediatamente; depois os segredos são revogados e o project do Infisical é excluído; só então os dados são excluídos em cascata do PostgreSQL. Fica registro na auditoria da plataforma e os administradores recebem um e-mail com o detalhe. Os suboperadores com dados residuais estão listados na página de suboperadores.",
      },
      {
        q: "Como provo que minhas permissões não foram usadas para outra coisa?",
        a: "Com `credential_usage_log`: cada chamada ao Google ou à Microsoft com suas credenciais fica registrada com operação, scopes, quem originou, motivo, resultado e latência. A tabela não aceita UPDATE nem DELETE. Você pode exportá-la em CSV ou JSON assinado com HMAC-SHA256 e verificar a assinatura com o id de chave incluído.",
      },
      {
        q: "Um token de sessão roubado serve para algo?",
        a: "O access token expira em 15 minutos. O refresh token vive apenas em um cookie HttpOnly, é rotacionado a cada uso e pode ser revogado por `jti` no Redis. Operações sensíveis exigem ainda MFA verificado nessa sessão.",
      },
      {
        q: "Um módulo com falhas pode derrubar a plataforma?",
        a: "Não foi desenhado para conseguir. Cada addon roda com limites de memória e CPU, é supervisionado a cada 60 segundos e tem um kill switch que o desativa em 15 segundos ou menos sem deploy. Os demais serviços seguem operando.",
      },
    ],
  },
  cta: {
    title: "Solicitar o pacote de segurança",
    desc: "Inclui este documento em PDF, a lista de suboperadores, o DPA assinável e as respostas a questionários padrão (CAIQ, SIG Lite). Respondemos em 5 dias úteis.",
    button: "Solicitar o pacote de segurança",
    secondary: "Ver políticas de segurança",
    secondaryHref: "/legal/security",
  },
};

export const GOVERNANCE: Record<GovernanceLocale, GovernanceContent> = {
  "es-CL": es_CL,
  "es-AR": es_AR,
  "es-MX": es_MX,
  "en-US": en_US,
  "pt-BR": pt_BR,
};

export function getGovernanceContent(raw: unknown): GovernanceContent {
  return GOVERNANCE[resolveGovernanceLocale(raw)] ?? GOVERNANCE[DEFAULT_GOVERNANCE_LOCALE];
}
