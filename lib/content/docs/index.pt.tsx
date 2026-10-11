import Link from "@/components/Link";

export const title = "Documentação";
export const description =
  "Guias curtos para colocar a Mekovault em funcionamento e administrá-la no dia a dia, para administradores de TI e RH.";

export default function Body() {
  return (
    <>
      <h1>Documentação</h1>
      <p>
        Guias curtos para colocar a Mekovault em funcionamento e administrá-la no dia a dia. Foram
        escritos para administradores de TI e pessoas de RH, sem jargão técnico, exceto onde é
        necessário.
      </p>
      <ul>
        <li>
          <Link href="/docs/getting-started">Primeiros passos</Link>: criar a organização, conectar
          o Google Workspace e dar acesso à equipe.
        </li>
        <li>
          <Link href="/docs/admin-guide">Guia do administrador</Link>: pessoas e papéis, produtos,
          remetentes de e-mail, calendário de operações e auditoria.
        </li>
        <li>
          <Link href="/docs/tickets">Tickets e automações</Link>: o que faz cada tipo de ticket,
          quem pode solicitá-lo e o que acontece sozinho.
        </li>
        <li>
          <Link href="/docs/troubleshooting">Problemas frequentes</Link>: erros de conexão,
          e-mails que não chegam, acessos que não aparecem.
        </li>
      </ul>
      <p>
        O detalhe técnico (serviços, banco de dados, segurança) está em{" "}
        <Link href="/governance">Arquitetura e governança</Link>. O status do serviço, em{" "}
        <Link href="/status">/status</Link>.
      </p>
    </>
  );
}
