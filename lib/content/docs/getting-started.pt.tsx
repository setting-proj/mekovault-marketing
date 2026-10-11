export const title = "Primeiros passos";
export const description =
  "Crie sua organização, conecte o Google Workspace e dê acesso à sua equipe em cerca de 15 minutos.";

export default function Body() {
  return (
    <>
      <h1>Primeiros passos</h1>
      <p>
        Em cerca de 15 minutos você tem a organização criada, o diretório conectado e as primeiras
        pessoas com acesso.
      </p>

      <h2>1. Crie sua organização</h2>
      <ol>
        <li>Acesse <code>app.mekovault.com</code> com a conta Google da sua empresa.</li>
        <li>
          O assistente cria a organização com o domínio do seu e-mail. Se o seu domínio já
          pertence a uma organização, outra não é criada: peça acesso ao seu administrador.
        </li>
        <li>Quem cria a organização fica como <strong>Administrador</strong>.</li>
      </ol>

      <h2>2. Conecte o Google Workspace</h2>
      <p>
        A Mekovault precisa de uma credencial delegada para ler o diretório e criar, bloquear ou
        reativar contas. O assistente mostra passo a passo o que copiar no console de administração
        (no Google: o identificador do cliente e a lista de escopos separados por vírgula). Ao
        terminar, faz um teste real e informa se falta algo.
      </p>
      <p>Os domínios habilitados no seu console aparecem depois como opções ao criar contas.</p>

      <h2>3. Dê acesso à sua equipe</h2>
      <p>
        Em <strong>Configurações → Pessoas e papéis</strong> você busca alguém do diretório e
        atribui um ou mais papéis: Administrador, Suporte de tickets, Pessoas e Cultura,
        Solicitante ou Auditor. Se essa pessoa nunca entrou na Mekovault, o acesso fica pronto para
        o primeiro login. Sem um papel atribuído, ninguém entra.
      </p>

      <h2>4. Configure os e-mails</h2>
      <p>
        Em <strong>Configurações → Remetentes</strong> você define de qual endereço saem os avisos
        e testa o envio com um clique. Em <strong>Configurações → Empresa</strong> você indica a
        caixa de e-mail do RH que recebe cópia das criações de conta.
      </p>

      <h2>5. Teste com um ticket</h2>
      <p>
        No site da sua organização, <strong>Tickets → Novo ticket</strong>. Escolha o serviço,
        preencha os dados e revise o resumo antes de confirmar. O primeiro caso recomendado é{" "}
        <em>Criar conta</em> com data de admissão: você verá como a conta é criada sozinha nesse
        dia.
      </p>
    </>
  );
}
