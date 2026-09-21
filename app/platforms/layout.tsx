import type { Metadata } from "next";

import { dictionaries } from "@/lib/i18n/dictionaries";
import { detectLocaleServer } from "@/lib/i18n/detectLocale.server";

export async function generateMetadata(): Promise<Metadata> {
  const dict = dictionaries[await detectLocaleServer()];
  return { title: dict["pf.eyebrow"], description: dict["pf.subtitle"] };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
