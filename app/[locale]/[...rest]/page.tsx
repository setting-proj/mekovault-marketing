import { notFound } from "next/navigation";

/** Cualquier ruta desconocida dentro de un idioma muestra el 404 de ese idioma. */
export default function CatchAll() {
  notFound();
}
