import { ogFor, OG_SIZE } from "@/lib/og";
import { localeFromParams, type LocaleParams } from "@/lib/i18n/params";

export const alt = "Mekovault";
export const size = OG_SIZE;
export const contentType = "image/png";

const render = ogFor("nav.apps", "pf.title.pre", "pf.title.hl");

export default async function Image({ params }: { params: LocaleParams }) {
  return render(await localeFromParams(params));
}
