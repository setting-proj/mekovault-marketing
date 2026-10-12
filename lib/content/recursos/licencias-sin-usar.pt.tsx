import Link from "@/components/Link";

export const meta = {
  title: "Licenças sem uso: como encontrá-las em cada plataforma e parar de pagar antes da renovação",
  seoTitle: "Licenças sem uso: como encontrar e cortar · Mekovault",
  description:
    "Compradas, atribuídas e em contas bloqueadas: onde se escondem as licenças sem uso no Google Workspace, Slack e Zoom, e o que fazer antes de renovar.",
  question: "Como encontro as licenças que pagamos e ninguém usa?",
};

export const summary =
  "As licenças sem uso se escondem em três lugares: compradas e nunca atribuídas, atribuídas a contas bloqueadas de gente que já saiu, e atribuídas a pessoas ativas que não entram há meses. Cada plataforma mostra isso em um canto diferente do console e tem a própria regra para parar de cobrar: no Google suspender não basta, no Slack desativar resolve, no Zoom é preciso remover a licença e ainda reduzir a quantidade contratada. E nos planos anuais só dá para reduzir na renovação, então o trabalho precisa ser feito 30 dias antes.";

export const steps = [
  {
    name: "Contar compradas e atribuídas em cada plataforma",
    text: "Na tela de faturamento do Google Workspace, do Slack, do Zoom e dos demais: quantas licenças você paga e quantas têm alguém por trás. A diferença é o primeiro grupo de licenças sem uso.",
  },
  {
    name: "Cruzar as contas bloqueadas com as licenças",
    text: "Lista de usuários suspensos ou desativados em cada plataforma. Cada um que ainda tiver licença é o segundo grupo, o mais caro, porque parece em uso.",
  },
  {
    name: "Olhar o último acesso das contas ativas",
    text: "Quem não entra há 90 dias não precisa daquela licença. No Google aparece na lista de usuários; no Zoom, nos relatórios de uso. Esse é o terceiro grupo.",
  },
  {
    name: "Decidir o que fazer com cada uma",
    text: "Excluir ou arquivar a conta, remover a licença, reatribuí-la ao próximo contratado ou baixar o plano. Com um responsável e uma data para cada decisão.",
  },
  {
    name: "Anotar a renovação e reduzir a tempo",
    text: "Para cada plano anual: data de renovação e quantidade para a qual quer reduzir. Agende um aviso 30 dias antes, porque depois dessa data você paga mais um ano inteiro.",
  },
  {
    name: "Repetir todo mês em 20 minutos",
    text: "Uma rotina curta no primeiro dia útil de cada mês evita que o problema volte a crescer até a próxima fatura anual.",
  },
];

export const faq = [
  {
    q: "O que é uma licença sem uso?",
    a: "Uma licença que a empresa paga e ninguém aproveita. Há três tipos: a que você comprou e nunca atribuiu a ninguém, a que está atribuída a uma conta bloqueada de alguém que já saiu, e a que está com uma pessoa ativa que não entra há meses. As três custam o mesmo que uma licença em uso.",
  },
  {
    q: "Suspender a conta no Google Workspace para de cobrar a licença?",
    a: "Não. Uma conta suspensa mantém a licença e é faturada igual a uma ativa. Para parar de pagar, você precisa excluir a conta ou transformá-la em usuário arquivado. No plano flexível a cobrança cai no ciclo seguinte; no plano anual a quantidade só diminui na renovação.",
  },
  {
    q: "Quando preciso reduzir a quantidade em um plano anual?",
    a: "Antes da data de renovação. Na maioria dos planos anuais você pode aumentar a quantidade quando quiser, mas reduzir só na renovação. Se essa data passar, você se compromete por mais um ano com as licenças que tinha. Por isso a revisão é feita 30 dias antes, não no dia em que chega a fatura.",
  },
  {
    q: "A Mekovault reduz as licenças por mim?",
    a: "Não. A Mekovault mostra quantas licenças você paga, quantas são usadas e quantas estão em contas bloqueadas, diz até que data você pode reduzir e os passos exatos em cada plataforma, e avisa antes da renovação. Reduzir a quantidade contratada é a empresa que faz, na tela de pagamentos de cada plataforma, porque é uma mudança no contrato.",
  },
];

export const related = [
  "licencias-que-sigues-pagando",
  "suspender-eliminar-o-archivar-usuario-google-workspace",
  "calendario-de-renovaciones",
];

export const cta = {
  title: "Veja quantas licenças você paga sem que ninguém use",
  desc: "A Mekovault lê o Google Workspace e mostra compradas, usadas e em contas bloqueadas, com aviso antes de cada renovação. Grátis até 20 contas.",
};

export function Body() {
  return (
    <>
      <h2>Os três lugares onde as licenças sem uso se escondem</h2>
      <p>
        Quando a fatura de software chega, o número que se olha é um só: quantas licenças são pagas. Mas as licenças
        não utilizadas não aparecem na fatura. É preciso ir atrás, e elas estão em três lugares diferentes:
      </p>
      <ul>
        <li>
          <strong>Compradas e nunca atribuídas.</strong> Contrataram-se 70 licenças “por via das dúvidas” e
          atribuíram-se 62. As outras 8 não têm nome e são pagas do mesmo jeito. É o grupo mais fácil de ver: o console
          de cada plataforma mostra em faturamento.
        </li>
        <li>
          <strong>Atribuídas a contas bloqueadas.</strong> A pessoa saiu, alguém suspendeu a conta e ela ficou ali. A
          licença continua atribuída e é cobrada como se a pessoa trabalhasse. É o grupo mais caro porque parece em
          uso, e em uma empresa que passou três anos sem revisar pode ser 10 por cento da fatura.
        </li>
        <li>
          <strong>Atribuídas a gente ativa que não entra.</strong> O vendedor que tem Zoom com licença e faz as
          reuniões pelo Meet. O designer que parou de abrir o Figma em março. Trabalham na empresa, mas aquela licença
          em particular não é usada há meses.
        </li>
      </ul>
      <p>
        Os três grupos juntos são o que um fornecedor chamaria de “oportunidade de otimização de licenças”. Para
        você é mais simples: dinheiro que sai todo mês e que ninguém decidiu gastar.
      </p>

      <h2>Como ver no Google Workspace, no Slack e no Zoom</h2>
      <p>
        <strong>Google Workspace.</strong> No console de administração, em Faturamento, Assinaturas: ali você vê, por
        plano, quantas licenças comprou e quantas estão atribuídas. Para o segundo grupo, vá em Usuários e filtre pelo
        status “Suspenso”: cada nome ali que ainda tiver licença atribuída é uma licença paga por ninguém. Para o
        terceiro grupo, na mesma lista de usuários adicione a coluna de último login e ordene por data: quem não entra
        há 90 dias é candidato a um plano mais barato ou a ser arquivado.
      </p>
      <p>
        <strong>Slack.</strong> Em Administração, Gerenciar membros, você vê os membros ativos e os desativados. O
        Slack só cobra pelos ativos, então o segundo grupo aqui se resolve desativando. Em Faturamento você vê quantos
        membros estão sendo cobrados no ciclo atual; se esse número for maior que a quantidade de gente que trabalha
        na empresa, alguém continua ativo e não deveria.
      </p>
      <p>
        <strong>Zoom.</strong> Em Gerenciamento de usuários você vê quais contas têm licença e quais são básicas
        (grátis). Em Relatórios, Uso, você vê quantas reuniões cada pessoa fez no período. Uma conta com licença e zero
        reuniões em dois meses é o caso mais comum de licença sem uso no Zoom, e além de removê-la é preciso reduzir a
        quantidade contratada, senão continua pagando.
      </p>

      <h2>O que fazer em cada plataforma para parar de pagar</h2>
      <p>
        Esta é a parte que confunde: bloquear a pessoa não significa a mesma coisa em todo lugar. A tabela resume o
        que foi verificado na documentação de cada fornecedor. As regras completas, com a fonte, estão em{" "}
        <Link href="/license-control">Controle de licenças</Link>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Plataforma</th>
            <th>Bloquear para de cobrar?</th>
            <th>O que é preciso fazer</th>
            <th>A partir de quando vale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Workspace</td>
            <td>Não</td>
            <td>Excluir a conta ou transformá-la em usuário arquivado</td>
            <td>Plano flexível: ciclo seguinte. Plano anual: na renovação</td>
          </tr>
          <tr>
            <td>Slack</td>
            <td>Sim</td>
            <td>Desativar o membro</td>
            <td>A cobrança cai sozinha a partir do ciclo seguinte</td>
          </tr>
          <tr>
            <td>Jira e Confluence (plano mensal)</td>
            <td>Sim</td>
            <td>Desativar a conta</td>
            <td>A cobrança cai sozinha</td>
          </tr>
          <tr>
            <td>1Password</td>
            <td>Sim</td>
            <td>Suspender ou remover a pessoa</td>
            <td>A cobrança cai sozinha</td>
          </tr>
          <tr>
            <td>Zoom</td>
            <td>Não</td>
            <td>Remover a licença do usuário e reduzir a quantidade contratada</td>
            <td>Ciclo de cobrança seguinte</td>
          </tr>
          <tr>
            <td>GitHub Team</td>
            <td>Não</td>
            <td>Remover o assento e reduzir a quantidade contratada</td>
            <td>Ciclo de cobrança seguinte</td>
          </tr>
          <tr>
            <td>HubSpot</td>
            <td>Não</td>
            <td>Liberar o assento e reduzir a quantidade contratada</td>
            <td>Ciclo de cobrança seguinte</td>
          </tr>
          <tr>
            <td>Dropbox Business</td>
            <td>Não</td>
            <td>Remover a licença e reduzir a quantidade contratada</td>
            <td>Só na renovação</td>
          </tr>
          <tr>
            <td>Salesforce</td>
            <td>Não</td>
            <td>Desativar o usuário e reduzir a quantidade contratada</td>
            <td>Só na renovação</td>
          </tr>
          <tr>
            <td>Adobe Creative Cloud para equipes</td>
            <td>Não</td>
            <td>Remover a licença e reduzir a quantidade contratada</td>
            <td>Só na janela de renovação</td>
          </tr>
        </tbody>
      </table>
      <p>
        Repare na última coluna. Em metade das plataformas, remover a licença da pessoa não muda a fatura: existe um
        segundo passo, reduzir a quantidade contratada, que é feito na tela de pagamentos e que ninguém faz porque
        ninguém sabe que existe.
      </p>

      <h2>O calendário: plano flexível, plano anual e os 30 dias antes</h2>
      <p>
        Em um plano flexível (mês a mês) a regra é simples: o que você libera neste mês deixa de ser cobrado no mês que
        vem. O custo de esquecer é um mês de uma licença.
      </p>
      <p>
        Em um plano anual o custo de esquecer é um ano. Você se comprometeu com uma quantidade; pode aumentá-la quando
        quiser, mas reduzi-la só na data de renovação. Se essa data passar sem que ninguém tenha reduzido, as 8 licenças
        sem atribuição e as 5 em contas suspensas são pagas por mais 12 meses. Por isso a revisão não é feita quando
        chega a fatura, e sim 30 dias antes da renovação de licenças: tempo suficiente para contar, decidir e mudar a
        quantidade no console.
      </p>
      <p>
        <strong>Uma rotina mensal de 20 minutos.</strong> No primeiro dia útil de cada mês, uma pessoa do
        administrativo ou do financeiro faz o seguinte:
      </p>
      <ol>
        <li>Abre o faturamento do Google Workspace e anota compradas e atribuídas (3 minutos).</li>
        <li>Revisa a lista de usuários suspensos e marca os que ainda têm licença (5 minutos).</li>
        <li>Olha no Slack e no Zoom quantos estão sendo cobrados e compara com a quantidade de gente que trabalha (5 minutos).</li>
        <li>Revisa quais planos anuais renovam nos próximos 45 dias e qual quantidade é a certa (4 minutos).</li>
        <li>Manda a cada gestor a lista das licenças sem uso da área dele com uma pergunta: corta ou fica? (3 minutos).</li>
      </ol>
      <p>
        Vinte minutos por mês não parece muito, e não é. O problema é que, sem alguém designado, nunca acontece.
      </p>

      <h2>O que a Mekovault faz</h2>
      <p>
        A tela de Licenças lê o Google Workspace e mostra, por plataforma, as licenças compradas, as usadas e as que
        estão em contas bloqueadas, com quanto custam por mês. Para cada plano, diz até que data você pode reduzir e os
        passos exatos daquela plataforma, com a regra verificada: excluir ou arquivar no Google, desativar no Slack,
        remover a licença e reduzir a quantidade no Zoom.
      </p>
      <p>
        Quando um desligamento é executado, a licença daquela pessoa fica marcada para liberar. E antes de cada
        renovação chega um aviso com a quantidade para a qual você pode reduzir e onde fazer isso. O que a Mekovault
        não faz é reduzir a quantidade contratada: esse passo a empresa faz na tela de pagamentos de cada plataforma,
        porque é uma mudança no contrato e convém que quem paga seja quem assina. Para as plataformas que não permitem
        automatizar, a Mekovault designa um responsável, registra o assento e guarda a evidência de que foi feito.
      </p>
      <p>
        Se quiser um número antes de começar, a <Link href="/calculadora-licencias">calculadora</Link> estima quanto
        você paga por mês por licenças que ninguém usa a partir dos três números da sua empresa. E se ainda não sabe
        quais ferramentas a empresa paga, comece pelo{" "}
        <Link href="/recursos/inventario-de-software">inventário de software</Link>.
      </p>
    </>
  );
}
