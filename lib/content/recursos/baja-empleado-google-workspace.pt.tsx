export const meta = {
  title: "Como desligar um funcionário do Google Workspace sem perder arquivos nem pagar a mais",
  seoTitle: "Desligar funcionário no Google Workspace · Mekovault",
  description:
    "Bloquear, redirecionar o e-mail, transferir o Drive, liberar a licença e excluir depois: os passos, a ordem e o que segue sendo cobrado se parar no meio.",
  question: "Como desligo um funcionário do Google Workspace sem continuar pagando?",
};

export const summary =
  "Para desligar um funcionário do Google Workspace sem perder nada nem pagar a mais, é preciso fazer cinco coisas em ordem: bloquear a conta no último dia, redirecionar o e-mail, transferir os arquivos do Drive para quem o gestor decidir, liberar ou reduzir a licença e excluir a conta depois do prazo de carência. Suspender não basta: uma conta suspensa continua sendo cobrada.";

export const steps = [
  { name: "Bloquear a conta no último dia", text: "Suspenda o usuário no console de administração do Google na hora da saída: isso encerra as sessões e invalida a senha. Não exclua ainda." },
  { name: "Redirecionar o e-mail", text: "Ative uma resposta automática e encaminhe o e-mail recebido para quem assumir o lugar da pessoa, ou delegue a caixa de entrada ao gestor." },
  { name: "Transferir Drive e Agenda", text: "Transfira a propriedade dos arquivos do Drive e dos eventos para a pessoa que o gestor decidir. Faça isso antes de excluir: depois não dá mais." },
  { name: "Liberar ou reduzir a licença", text: "No plano flexível, exclua ou arquive a conta para parar de pagar. No plano anual, anote a redução para a renovação: até lá a cobrança é a mesma." },
  { name: "Excluir depois do prazo de carência", text: "Exclua a conta passados 30 dias (ou o prazo que a sua política definir). O Google permite restaurar um usuário excluído só por 20 dias." },
];

export const faq = [
  {
    q: "Se eu suspender a conta, paro de pagar a licença?",
    a: "Não. O Google cobra pelas licenças atribuídas, e uma conta suspensa continua com a licença atribuída. Para parar de pagar é preciso excluir a conta ou transformá-la em usuário arquivado (mais barato), e no plano anual a redução só vale na renovação.",
  },
  {
    q: "Quanto tempo tenho para recuperar uma conta excluída?",
    a: "O Google permite restaurar um usuário excluído por 20 dias. Por isso vale a pena suspender primeiro e excluir depois de um prazo de carência, com os arquivos já transferidos.",
  },
  {
    q: "Quem decide para quem vão os arquivos e o e-mail?",
    a: "O gestor direto da pessoa, não a TI. É quem sabe quais projetos ficaram em aberto. Na Mekovault o gestor recebe um e-mail com as opções (transferir, recuperar informações por alguns dias, desativar) e decide com um clique.",
  },
  {
    q: "Posso ler o e-mail do ex-funcionário?",
    a: "Depende da política que a empresa tem assinada e da LGPD. No Brasil, o e-mail corporativo pertence à empresa e a Justiça do Trabalho aceita a revisão quando há política clara e comunicada; a LGPD exige finalidade e proporcionalidade. O seguro é redirecionar e delegar, não ler tudo em bloco.",
  },
];

export const related = [
  "suspender-eliminar-o-archivar-usuario-google-workspace",
  "correo-del-que-se-va",
  "licencias-que-sigues-pagando",
  "desvinculacion-chile-finiquito-y-cuentas",
];

export function Body() {
  return (
    <>
      <h2>Por que “apagar o usuário” é o pior jeito de fazer isso</h2>
      <p>
        Quando alguém sai, o mais comum é o administrador entrar no console do Google no dia seguinte e excluir o
        usuário. Isso resolve o acesso, mas cria três problemas: os arquivos do Drive que não foram transferidos somem
        junto com a conta, o e-mail recebido volta (e os clientes que escreviam para essa pessoa descobrem que ela saiu
        antes de você), e ninguém verificou quais outras plataformas continuavam cobrando: Slack, Zoom, Figma, Adobe,
        Canva ou a assinatura que essa pessoa pagava com o cartão da empresa.
      </p>
      <p>
        O outro extremo também é frequente: suspender a conta “por via das dúvidas” e nunca mais olhar para ela. Uma
        conta suspensa mantém a licença, e o Google cobra por licença atribuída. Essa conta é paga mês a mês até alguém
        fechá-la, em média uns seis meses pelo que vemos em empresas de 50 a 500 pessoas.
      </p>

      <h2>Os cinco passos, em ordem</h2>
      <h3>1. Bloquear no último dia, na hora da saída</h3>
      <p>
        No console de administração: Usuários, escolher a pessoa, “Suspender usuário”. Isso encerra as sessões abertas,
        invalida a senha e deixa o e-mail recebendo mensagens sem que ninguém as leia. A data importa: nem antes (a pessoa
        ainda está trabalhando) nem três dias depois (a pessoa já não trabalha e continua entrando). O certo é no último
        dia, na hora do encerramento, e com registro de quem pediu.
      </p>
      <h3>2. Redirecionar o e-mail e avisar</h3>
      <p>
        Ative uma resposta automática (“esta pessoa não trabalha mais na empresa; escreva para…”) e um encaminhamento
        do e-mail recebido para quem assumir os assuntos dela. Se o gestor precisar revisar conversas em andamento,
        delegue a caixa de entrada em vez de compartilhar a senha. Assim clientes e fornecedores não ficam sem resposta.
      </p>
      <h3>3. Transferir Drive e Agenda antes de excluir</h3>
      <p>
        Pelo console você pode transferir a propriedade de todos os arquivos do Drive para outra conta, e os eventos da
        agenda também. Faça isso com a conta suspensa, antes de excluí-la: uma vez excluída, o que não foi transferido
        se perde. Para quem? Não é a TI que decide: é o gestor direto, o único que sabe quais projetos ficaram em
        aberto.
      </p>
      <h3>4. Liberar ou reduzir a licença</h3>
      <p>
        Aqui está o dinheiro. Se você tem plano flexível (paga mês a mês), ao excluir ou arquivar a conta deixa de pagar
        a partir do ciclo seguinte. Se tem plano anual, a licença continua contratada até a renovação mesmo que exclua a
        conta; o que dá para fazer é reatribuí-la ao próximo contratado e anotar a redução para a data de renovação. A
        opção “usuário arquivado” mantém os dados a um custo menor do que uma licença completa.
      </p>
      <h3>5. Excluir depois do prazo de carência</h3>
      <p>
        Passados 30 dias (ou o prazo que a sua política definir), exclua a conta. O Google permite restaurar um usuário
        excluído por 20 dias; depois disso, não. Com os arquivos transferidos e o e-mail redirecionado, excluir não
        quebra mais nada.
      </p>

      <h2>O que o console do Google não faz por você</h2>
      <ul>
        <li>Não sabe que a pessoa saiu. Alguém precisa entrar no dia certo e na hora certa.</li>
        <li>Não pergunta ao gestor para quem vão os arquivos; quem executa é quem decide.</li>
        <li>Não mexe nas outras plataformas: Slack, Zoom, Figma e o resto continuam com o assento atribuído.</li>
        <li>Não lembra você de excluir aos 30 dias nem de reduzir na renovação.</li>
        <li>Não deixa evidência de quem pediu, quem aprovou e o que foi feito, para um auditor ou para você.</li>
      </ul>

      <h2>Como a Mekovault faz</h2>
      <p>
        Na Mekovault o desligamento é uma solicitação que Pessoas pede (ou que chega sozinha da folha de pagamento, com
        Gupy, Sólides, Feedz, Senior ou TOTVS). É agendada para o último dia na hora da saída e executada sozinha:
        bloqueio com encerramento de sessões, resposta automática e redirecionamento do e-mail, licença marcada para
        liberar, e a exclusão agendada para 30 dias com a opção de desfazer. O gestor recebe um e-mail com as opções
        para os arquivos (transferir para alguém, recuperar informações por alguns dias, desativar) e decide com um
        clique; se não responder, recebe dois lembretes. Tudo fica na auditoria por 365 dias. E se a pessoa voltar ou
        houver um erro, a conta é reativada com os grupos e a unidade organizacional, de forma temporária ou
        definitiva.
      </p>
      <p>
        Se a sua empresa usa também Slack, Zoom ou Figma, a Mekovault mostra quais assentos ficaram atribuídos a uma
        conta bloqueada e o que você precisa mudar em cada console; as plataformas que permitem automatizar vão sendo
        adicionadas uma a uma.
      </p>
    </>
  );
}
