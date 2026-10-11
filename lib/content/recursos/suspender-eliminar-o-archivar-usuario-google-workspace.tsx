import Link from "@/components/Link";

export const summary =
  "Suspender conserva todo y se sigue cobrando igual que una cuenta activa. Eliminar deja de cobrar (en plan flexible) pero borra lo que no traspasaste, con 20 días para arrepentirte. Archivar conserva correo y archivos a un costo menor. Para una salida normal: suspender el último día, traspasar, y eliminar o archivar a los 30 días.";

export const faq = [
  {
    q: "¿La cuenta suspendida sigue recibiendo correo?",
    a: "Sí. El correo entra al buzón, pero nadie lo lee y nadie contesta. Por eso hay que activar una respuesta automática y un reenvío, o delegar el buzón a la jefatura.",
  },
  {
    q: "¿Qué pasa con los archivos compartidos de un usuario eliminado?",
    a: "Si eran de su propiedad y no se transfirieron, desaparecen para todos los que los tenían compartidos. Transfiere la propiedad desde la consola antes de eliminar.",
  },
  {
    q: "¿Archivar sirve para una persona que se fue?",
    a: "Sí, es la opción para conservar correo y archivos sin pagar una licencia completa, por ejemplo por obligaciones legales. Requiere licencias de usuario archivado en tu edición y no sustituye el traspaso de archivos a quien sigue trabajando.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "licencias-que-sigues-pagando",
  "correo-del-que-se-va",
];

export function Body() {
  return (
    <>
      <h2>Las tres opciones, comparadas</h2>
      <table>
        <thead>
          <tr>
            <th>Qué pasa con…</th>
            <th>Suspender</th>
            <th>Eliminar</th>
            <th>Archivar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>El acceso</td>
            <td>Se corta: sesiones cerradas, no puede entrar</td>
            <td>Se corta</td>
            <td>Se corta</td>
          </tr>
          <tr>
            <td>El correo</td>
            <td>Sigue llegando; nadie lo lee</td>
            <td>Rebota; se pierde lo no exportado</td>
            <td>Se conserva, consultable por el administrador</td>
          </tr>
          <tr>
            <td>Drive y Calendario</td>
            <td>Se conservan</td>
            <td>Se pierden si no se transfirió la propiedad</td>
            <td>Se conservan</td>
          </tr>
          <tr>
            <td>La licencia</td>
            <td>Sigue asignada: <strong>se cobra igual</strong></td>
            <td>Queda libre; en plan anual sigue contratada hasta renovar</td>
            <td>Pasa a licencia de usuario archivado, más barata</td>
          </tr>
          <tr>
            <td>Deshacer</td>
            <td>Reactivar cuando quieras</td>
            <td>Restaurar hasta 20 días después</td>
            <td>Desarchivar cuando quieras</td>
          </tr>
          <tr>
            <td>Para qué sirve</td>
            <td>El último día y el plazo de gracia</td>
            <td>Cerrar de verdad, después de traspasar</td>
            <td>Retener por obligación legal o contractual</td>
          </tr>
        </tbody>
      </table>

      <h2>Cuál conviene en cada salida</h2>
      <ul>
        <li>
          <strong>Renuncia o despido normal:</strong> suspender el último día, redirigir el correo, traspasar archivos
          y eliminar a los 30 días. Si el plan es anual, reasignar la licencia al próximo ingreso.
        </li>
        <li>
          <strong>Salida con posibilidad de volver (licencia, práctica, proyecto):</strong> suspender y dejar la fecha
          de revisión anotada. Mekovault lo resuelve con una reactivación temporal por los días que elijas.
        </li>
        <li>
          <strong>Obligación de conservar (contratos, juicios, normativa):</strong> archivar. Conserva el correo y los
          archivos sin pagar una licencia completa.
        </li>
        <li>
          <strong>Cuenta genérica (ventas@, soporte@):</strong> no se suspende ni se elimina: se le cambia el
          responsable. En Mekovault cada cuenta genérica tiene un dueño y una fecha de revisión.
        </li>
      </ul>

      <h2>El error más caro</h2>
      <p>
        Suspender y olvidar. Es lo que pasa cuando la baja la hace alguien “por si acaso” y nadie tiene la tarea de volver
        a mirar. Esa cuenta se cobra todos los meses, con la misma licencia que una persona que sí trabaja. En una
        empresa de 100 personas con 20 % de rotación al año, son 20 cuentas que pueden quedar en ese limbo; a 6 meses
        promedio y 7 a 25 dólares cada una, es plata que se va sin que nadie la vea. Puedes estimarlo con la{" "}
        <Link href="/calculadora-licencias">calculadora</Link>.
      </p>

      <h2>Cómo lo hace Mekovault</h2>
      <p>
        Mekovault no elige por ti: suspende el último día a la hora exacta, programa la eliminación a 30 días (con
        aviso previo y opción de deshacer), muestra en Licencias cuántas quedaron en cuentas bloqueadas y te dice qué
        cambiar en la renovación. Si marcas una cuenta para conservar, no la toca. Y todo con el nombre de quien pidió y
        quien aprobó, guardado 365 días.
      </p>
    </>
  );
}
