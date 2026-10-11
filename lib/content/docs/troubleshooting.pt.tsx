import Link from "@/components/Link";

export const title = "Problemas frequentes";
export const description =
  "Erros de conexão com o Google, e-mails que não chegam, tickets que não aparecem e operações programadas que não ocorreram.";

export default function Body() {
  return (
    <>
      <h1>Problemas frequentes</h1>

      <h2>“Validação falhou: unauthorized_client” ao conectar o Google</h2>
      <p>
        A delegação em todo o domínio não está autorizada para esse cliente ou faltam escopos. No
        console de administração do Google, em <em>Segurança → Controles de API → Delegação em
        todo o domínio</em>, adicione o identificador do cliente mostrado pelo assistente com a
        lista completa de escopos separada por vírgula. Depois teste a conexão novamente.
      </p>

      <h2>Entrei com minha conta e ele pede para criar uma organização</h2>
      <p>
        Seu e-mail não tem acesso atribuído. Peça a um administrador que adicione você em Pessoas e
        papéis. Se o seu domínio já pertence a uma organização, não é possível criar outra. Se você
        usa várias contas Google, verifique com qual entrou (botão “Entrar com outra conta”).
      </p>

      <h2>Um tipo de ticket não aparece para mim</h2>
      <p>
        Ou o seu papel não permite, ou o produto que o habilita não está contratado. O
        administrador vê isso em Produtos e em Permissões de tickets.
      </p>

      <h2>O e-mail de aprovação ou de boas-vindas não chega</h2>
      <p>
        Verifique o spam e a caixa de e-mail do RH configurada em Empresa. Um administrador pode
        enviar um e-mail de teste em Remetentes. Se o envio de teste falhar, o remetente
        configurado não está validado.
      </p>

      <h2>Os e-mails saem da Mekovault e não do meu domínio</h2>
      <p>
        Em Remetentes você escolheu “Gmail API com a delegação do seu Workspace”, mas a delegação
        não inclui o escopo <code>gmail.send</code> ou o endereço não é uma caixa de e-mail real do
        seu Google Workspace. Adicione o escopo no console do Google (Delegação em todo o domínio,
        mesma linha do cliente da Mekovault) e envie um teste novamente. Enquanto isso, os e-mails
        saem pela Mekovault com o seu endereço visível e o motivo fica no registro.
      </p>

      <h2>Uma operação programada não ocorreu</h2>
      <p>
        Veja o Calendário de operações: cada criação de conta, bloqueio ou vencimento aparece com
        seu status (programada, executada, tentando novamente, falhou, cancelada). Se falhou, o
        ticket tem o motivo e o Suporte pode tentar novamente.
      </p>

      <h2>O site não carrega</h2>
      <p>
        Consulte <Link href="/status">/status</Link>. Se tudo estiver operacional e o problema
        persistir, escreva para soporte@mekovault.com indicando a hora e a organização.
      </p>
    </>
  );
}
