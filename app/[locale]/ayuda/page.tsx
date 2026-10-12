import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import Link from "@/components/Link";
import { EyebrowBadge } from "@/components/Section";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { pageMetadata } from "@/lib/seo";
import { localeFromParams, type LocaleParams } from "@/lib/i18n/params";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await localeFromParams(params);
  const dict = dictionaries[locale];
  return pageMetadata({
    locale,
    path: "/ayuda",
    title: dict["seo.help.title"],
    description: dict["seo.help.description"],
    localized: false,
  });
}

/** Una pregunta por bloque, respuesta corta, y la solicitud de Mekovault que la resuelve. */
const QA: Array<{ id: string; q: string; a: string; mv: string; link?: string }> = [
  {
    id: "alias",
    q: "¿Cómo creo un alias de correo en Google Workspace?",
    a: "En la consola de administración, abre el usuario, 'Información del usuario', 'Correos electrónicos alternativos' y agrega la dirección. El alias recibe correo en el mismo buzón; no es una cuenta nueva ni paga licencia.",
    mv: "En Mekovault se pide con la solicitud 'Alias': quién lo necesita, qué dirección y hasta cuándo. Se crea solo y queda registrado.",
  },
  {
    id: "generica",
    q: "¿Cómo manejo una cuenta genérica (ventas@, soporte@) sin contraseña compartida?",
    a: "Crea la cuenta como genérica con un responsable, y en vez de compartir la contraseña, delega el buzón a las personas que lo atienden o usa un grupo de Google como bandeja colaborativa. Cuando el responsable se va, se cambia el responsable, no la contraseña a medio equipo.",
    mv: "Las cuentas genéricas en Mekovault nacen con dueño, autorización de la jefatura por correo y fecha de revisión. Al dar de baja al dueño, la solicitud pide un nuevo responsable.",
  },
  {
    id: "reactivar",
    q: "¿Cómo reactivo un usuario suspendido en Google Workspace?",
    a: "Consola, Usuarios, filtra por suspendidos, abre la cuenta y 'Reactivar'. La cuenta vuelve con su correo, archivos y grupos. Si fue eliminada, solo se puede restaurar dentro de 20 días.",
    mv: "En Mekovault, 'Reactivar cuenta' puede ser definitiva o temporal por los días que elijas, con aprobación de la jefatura; al vencer se bloquea sola, con aviso 5 días antes.",
  },
  {
    id: "dominio",
    q: "¿Cómo cambio el dominio del correo de una persona?",
    a: "Si la empresa tiene más de un dominio en Google Workspace, se cambia la dirección principal del usuario y la anterior queda como alias para no perder correo. Conviene hacerlo fuera del horario de trabajo.",
    mv: "La solicitud 'Cambio de dominio' se ejecuta después de las 22:00, deja el dominio antiguo como alias y avisa a Personas y a la persona cuando está hecho.",
  },
  {
    id: "delegar",
    q: "¿Cómo delego el buzón de un ex empleado a su jefatura?",
    a: "Desde la cuenta del ex empleado (o con la delegación de administrador), Configuración de Gmail, 'Cuentas', 'Conceder acceso a tu cuenta'. La jefatura abre ese buzón desde el suyo, sin contraseña, y queda registrado.",
    mv: "Es una de las tres opciones que la jefatura elige por correo al ejecutarse una baja: traspasar, recuperar información por unos días, o desactivar.",
    link: "/recursos/correo-del-que-se-va",
  },
  {
    id: "contrasena",
    q: "¿Cómo restablezco la contraseña de alguien que no puede entrar?",
    a: "Consola, Usuarios, abre la cuenta, 'Restablecer contraseña'. Se genera una temporal que la persona cambia al entrar. Nunca se la mandes por chat; mejor al correo personal o por teléfono.",
    mv: "La solicitud 'Contraseña' puede pedirla otra persona por quien no puede entrar; la confirma un administrador o Soporte, y se avisa a Personas y a la jefatura.",
  },
  {
    id: "zoom",
    q: "¿Cómo libero una licencia de Zoom cuando alguien se va?",
    a: "En el panel de administración de Zoom, Usuarios, cambia el tipo de la persona a 'Básico' o elimínala; la licencia queda libre para reasignar. Para pagar menos hay que reducir además la cantidad contratada, y en planes anuales eso rige en la renovación.",
    mv: "Mekovault muestra el asiento como 'sigue cobrando' en Licencias y te dice qué cambiar en Zoom; cuando el conector de Zoom esté, lo hará solo.",
    link: "/recursos/licencias-que-sigues-pagando",
  },
  {
    id: "slack",
    q: "¿Cómo doy de baja a un usuario de Slack y dejo de pagar su asiento?",
    a: "En Slack, Administración, Gestionar miembros, 'Desactivar cuenta'. Slack deja de cobrar ese asiento en el siguiente ciclo. Si la persona entraba a Slack 'con Google', su cuenta de Google suspendida no basta: hay que desactivarla en Slack.",
    mv: "Al dar de baja una cuenta, Mekovault revoca primero la vinculación con Slack y deja la desactivación como tarea con responsable hasta que el conector lo haga solo.",
    link: "/recursos/offboarding-digital",
  },
];

export default function HelpPage() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es-CL",
    mainEntity: QA.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: `${x.a} ${x.mv}` },
    })),
  };
  return (
    <>
      <JsonLd data={faq} />
      <Container size="narrow" className="py-12 sm:py-16">
        <EyebrowBadge>Centro de ayuda</EyebrowBadge>
        <h1 className="mt-4 text-balance text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#03045e] sm:text-[44px]">
          Las preguntas cortas sobre cuentas, alias y licencias
        </h1>
        <p className="mt-5 text-pretty text-[17px] leading-[1.6] text-[#33507a]">
          Cómo se hace en la consola de Google o en cada plataforma, y cómo lo resuelve Mekovault con una solicitud. Si tu
          pregunta no está, escríbenos a cloud@mekovault.com.
        </p>
        <nav className="mt-8 flex flex-wrap gap-2 text-[13px] font-semibold">
          {QA.map((x) => (
            <a key={x.id} href={`#${x.id}`} className="rounded-md border border-[#dbeaf2] px-3 py-1.5 text-[#1e3a5f] hover:border-[#0077b6]">
              {x.q.replace(/^¿Cómo /, "").replace(/\?$/, "")}
            </a>
          ))}
        </nav>
        <div className="mt-10 space-y-10">
          {QA.map((x) => (
            <section key={x.id} id={x.id} className="scroll-mt-24 border-t border-[#dbeaf2] pt-8">
              <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-[#03045e]">{x.q}</h2>
              <p className="mt-3 text-[16px] leading-[1.7] text-[#33507a]">{x.a}</p>
              <p className="mt-3 rounded-[10px] bg-[#f7fbfd] p-4 text-[15px] leading-relaxed text-[#0a4a73]">
                <strong className="text-[#03045e]">Con Mekovault: </strong>
                {x.mv}
                {x.link && (
                  <>
                    {" "}
                    <Link href={x.link} className="font-bold text-[#0077b6] hover:underline">
                      Ver la guía
                    </Link>
                  </>
                )}
              </p>
            </section>
          ))}
        </div>
        <p className="mt-12 text-[15px] text-[#5b7390]">
          Las guías largas están en <Link href="/recursos" className="font-bold text-[#0077b6]">Guías y recursos</Link>.
        </p>
      </Container>
    </>
  );
}
