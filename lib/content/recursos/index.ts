import type { ArticleFaq, ArticleStep } from "@/components/Article";

import * as baja from "./baja-empleado-google-workspace";
import * as suspender from "./suspender-eliminar-o-archivar-usuario-google-workspace";
import * as correo from "./correo-del-que-se-va";
import * as offboarding from "./offboarding-digital";
import * as desvinculacion from "./desvinculacion-chile-finiquito-y-cuentas";
import * as licencias from "./licencias-que-sigues-pagando";
import * as apps from "./aplicaciones-vinculadas";
import * as alta from "./alta-de-cuentas-el-primer-dia";
import * as accesos from "./gestion-de-accesos-para-pymes";
import * as queEs from "./que-es-el-control-de-cuentas-y-licencias";
import * as preguntar from "./que-preguntar-antes-de-contratar";
import * as vsFactorial from "./mekovault-vs-factorial";
import * as vsConsola from "./mekovault-vs-consola-de-google";

export type ResourceContent = {
  /** Respuesta directa bajo el H1 (2 o 3 frases). */
  summary: string;
  Body: () => React.JSX.Element;
  faq?: ArticleFaq[];
  steps?: ArticleStep[];
  /** Slugs relacionados. */
  related?: string[];
  cta?: { title: string; desc: string };
};

export const CONTENT: Record<string, ResourceContent> = {
  "baja-empleado-google-workspace": baja,
  "suspender-eliminar-o-archivar-usuario-google-workspace": suspender,
  "correo-del-que-se-va": correo,
  "offboarding-digital": offboarding,
  "desvinculacion-chile-finiquito-y-cuentas": desvinculacion,
  "licencias-que-sigues-pagando": licencias,
  "aplicaciones-vinculadas": apps,
  "alta-de-cuentas-el-primer-dia": alta,
  "gestion-de-accesos-para-pymes": accesos,
  "que-es-el-control-de-cuentas-y-licencias": queEs,
  "que-preguntar-antes-de-contratar": preguntar,
  "mekovault-vs-factorial": vsFactorial,
  "mekovault-vs-consola-de-google": vsConsola,
};
