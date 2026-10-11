import Link from "@/components/Link";

export const meta = {
  title: "Las licencias que seguís pagando: cuentas bloqueadas, plan anual y cómo dejar de pagar lo que nadie usa",
  seoTitle: "Licencias de Google Workspace que seguís pagando · Mekovault",
  description:
    "Una cuenta suspendida se factura igual que una activa. Cómo contar las licencias compradas, asignadas y en cuentas bloqueadas, y qué reducir al renovar.",
  question: "¿Cuántas licencias paga mi empresa y quién las usa?",
};

export const summary =
  "Google cobra por licencia asignada, no por persona que trabaja: una cuenta suspendida se factura igual que una activa. Para saber cuánto pagás de más hay que contar tres números (licencias compradas, asignadas y en cuentas bloqueadas) y mirar el tipo de plan: en flexible se reduce al mes siguiente, en anual solo en la renovación. Lo mismo pasa en Slack, Zoom, Figma y el resto.";

export const faq = [
  {
    q: "¿Cómo veo cuántas licencias tengo en Google Workspace?",
    a: "En la consola de administración, Facturación, Suscripciones: ahí aparecen las licencias compradas y las asignadas. Las que están en cuentas suspendidas no se distinguen a simple vista; hay que cruzar la lista de usuarios suspendidos con sus licencias. Mekovault lo muestra en una sola pantalla.",
  },
  {
    q: "¿Qué diferencia hay entre plan flexible y plan anual?",
    a: "En el plan flexible pagás por las licencias que tenés cada mes y podés bajar cuando quieras. En el plan anual te comprometés a una cantidad por un año a un precio menor; podés subir, pero no bajar hasta la renovación. Por eso una baja en plan anual se 'guarda' para el próximo ingreso o para la fecha de renovación.",
  },
  {
    q: "¿Bloquear la cuenta en Slack o Zoom deja de cobrar?",
    a: "En Slack, desactivar al usuario deja de cobrar en el siguiente ciclo. En Zoom hay que quitarle la licencia al usuario y reducir la cantidad contratada. En Google, suspender no alcanza. Cada plataforma tiene su regla; las verificadas están en Control de licencias.",
  },
];

export const related = [
  "suspender-eliminar-o-archivar-usuario-google-workspace",
  "baja-empleado-google-workspace",
  "que-preguntar-antes-de-contratar",
];

export function Body() {
  return (
    <>
      <h2>Los tres números que nadie mira</h2>
      <p>
        Cuando preguntás “¿cuántas licencias pagamos?”, la respuesta suele ser el número de la factura. Pero la pregunta
        útil tiene tres partes:
      </p>
      <ul>
        <li><strong>Compradas:</strong> lo que dice el contrato o la suscripción. Es lo que te cobran.</li>
        <li><strong>Asignadas:</strong> las que tienen un usuario detrás. Compradas menos asignadas son licencias que pagás y nadie usa.</li>
        <li>
          <strong>En cuentas bloqueadas:</strong> asignadas a personas que ya no trabajan. Son las más caras, porque
          parecen “en uso”.
        </li>
      </ul>
      <p>
        Ejemplo real de una empresa de 120 personas: 100 licencias Business Standard compradas, 92 asignadas, 8 en
        cuentas suspendidas; 20 Business Starter, 12 asignadas, 1 suspendida. Resultado: 17 licencias que se pagan sin
        que nadie las use, unos 129 dólares al mes. No es un drama, pero es todos los meses, y se descubre solo si
        alguien lo cuenta.
      </p>

      <h2>Por qué suspender no alcanza</h2>
      <p>
        Google factura por licencia asignada. Una cuenta suspendida conserva la licencia, así que cuesta lo mismo que una
        persona que trabaja. Para dejar de pagarla tenés que eliminar la cuenta o pasarla a usuario archivado (una
        licencia distinta, más barata, que conserva mail y archivos). Y acá entra el tipo de plan.
      </p>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Qué pasa al eliminar una cuenta</th>
            <th>Qué hacer con la baja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flexible (mes a mes)</td>
            <td>La licencia se libera y deja de cobrarse en el siguiente ciclo</td>
            <td>Eliminar o archivar al terminar el plazo de gracia</td>
          </tr>
          <tr>
            <td>Anual</td>
            <td>La licencia sigue contratada hasta la renovación</td>
            <td>Reasignarla al próximo ingreso; anotar la reducción para la fecha de renovación</td>
          </tr>
        </tbody>
      </table>

      <h2>Las otras plataformas: cada una con su regla</h2>
      <p>
        Lo que vale para Google no vale para las demás. En Slack, desactivar al usuario deja de cobrar en el siguiente
        ciclo. En Zoom hay que quitarle la licencia a la persona y además reducir la cantidad contratada. En Figma o
        Adobe, el asiento sigue asignado hasta que alguien lo libera en la consola. Y la persona que entró a Slack o a
        Salesforce “con Google” sigue contando como usuario activo allá aunque su cuenta de Google esté suspendida. Las
        reglas verificadas por plataforma, con su fuente, están en{" "}
        <Link href="/license-control">Control de licencias</Link>.
      </p>

      <h2>Cómo dejar de pagar lo que nadie usa, en cuatro pasos</h2>
      <ol>
        <li>Contá las tres cifras por plataforma: compradas, asignadas, en cuentas bloqueadas.</li>
        <li>Para cada cuenta bloqueada, decidí: eliminar, archivar o reasignar la licencia al próximo ingreso.</li>
        <li>Anotá la fecha de renovación de cada plan anual y la cantidad a la que querés bajar.</li>
        <li>Poné una regla para que cada baja vuelva a disparar esto, no una vez al año cuando llega la factura.</li>
      </ol>

      <h2>Cómo lo hace Mekovault</h2>
      <p>
        Licencias lee cada plataforma conectada y muestra las tres cifras por producto, con el total por moneda. Cuando
        se ejecuta una baja, la licencia queda marcada para liberar y, si el plan es anual, Mekovault te dice qué
        reducir y te lo recuerda antes de la renovación. Para las plataformas que no permiten automatizar, te dice
        exactamente qué cambiar en su consola y quién es el encargado. Y en Compras, cada suscripción tiene dueño,
        vencimiento y factura, para que ninguna se renueve sola. Podés estimar tu fuga de plata con la{" "}
        <Link href="/calculadora-licencias">calculadora</Link>.
      </p>
    </>
  );
}
