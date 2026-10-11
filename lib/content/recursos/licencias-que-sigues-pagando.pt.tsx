import Link from "@/components/Link";

export const meta = {
  title: "As licenças que você continua pagando: contas bloqueadas, plano anual e como parar de pagar o que ninguém usa",
  seoTitle: "Licenças do Google Workspace que você ainda paga · Mekovault",
  description:
    "Uma conta suspensa é cobrada igual a uma ativa. Como contar as licenças compradas, atribuídas e em contas bloqueadas, e o que mudar antes de renovar.",
  question: "Quantas licenças minha empresa paga e quem as usa?",
};

export const summary =
  "O Google cobra por licença atribuída, não por pessoa que trabalha: uma conta suspensa é faturada igual a uma ativa. Para saber quanto você paga a mais é preciso contar três números (licenças compradas, atribuídas e em contas bloqueadas) e olhar o tipo de plano: no flexível a redução vale no mês seguinte, no anual só na renovação. O mesmo acontece no Slack, no Zoom, no Figma e nos demais.";

export const faq = [
  {
    q: "Como vejo quantas licenças tenho no Google Workspace?",
    a: "No console de administração, em Faturamento, Assinaturas: ali aparecem as licenças compradas e as atribuídas. As que estão em contas suspensas não se distinguem à primeira vista; é preciso cruzar a lista de usuários suspensos com as licenças deles. A Mekovault mostra isso em uma única tela.",
  },
  {
    q: "Qual é a diferença entre plano flexível e plano anual?",
    a: "No plano flexível você paga pelas licenças que tem a cada mês e pode reduzir quando quiser. No plano anual você se compromete com uma quantidade por um ano a um preço menor; pode aumentar, mas não reduzir até a renovação. Por isso um desligamento no plano anual fica 'guardado' para o próximo contratado ou para a data de renovação.",
  },
  {
    q: "Bloquear a conta no Slack ou no Zoom para de cobrar?",
    a: "No Slack, desativar o usuário para de cobrar no ciclo seguinte. No Zoom é preciso remover a licença do usuário e reduzir a quantidade contratada. No Google, suspender não basta. Cada plataforma tem a sua regra; as verificadas estão em Controle de licenças.",
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
      <h2>Os três números que ninguém olha</h2>
      <p>
        Quando você pergunta “quantas licenças pagamos?”, a resposta costuma ser o número da fatura. Mas a pergunta útil
        tem três partes:
      </p>
      <ul>
        <li><strong>Compradas:</strong> o que diz o contrato ou a assinatura. É o que cobram de você.</li>
        <li><strong>Atribuídas:</strong> as que têm um usuário por trás. Compradas menos atribuídas são licenças que você paga e ninguém usa.</li>
        <li>
          <strong>Em contas bloqueadas:</strong> atribuídas a pessoas que já não trabalham na empresa. São as mais
          caras, porque parecem “em uso”.
        </li>
      </ul>
      <p>
        Exemplo real de uma empresa de 120 pessoas: 100 licenças Business Standard compradas, 92 atribuídas, 8 em contas
        suspensas; 20 Business Starter, 12 atribuídas, 1 suspensa. Resultado: 17 licenças pagas sem que ninguém as use,
        cerca de US$ 129 por mês. Não é um drama, mas é todo mês, e só aparece se alguém contar.
      </p>

      <h2>Por que suspender não basta</h2>
      <p>
        O Google fatura por licença atribuída. Uma conta suspensa mantém a licença, então custa o mesmo que uma pessoa
        que trabalha. Para parar de pagar por ela, você precisa excluir a conta ou transformá-la em usuário arquivado
        (uma licença diferente, mais barata, que mantém e-mail e arquivos). E aqui entra o tipo de plano.
      </p>
      <table>
        <thead>
          <tr>
            <th>Plano</th>
            <th>O que acontece ao excluir uma conta</th>
            <th>O que fazer com o desligamento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flexível (mês a mês)</td>
            <td>A licença é liberada e deixa de ser cobrada no ciclo seguinte</td>
            <td>Excluir ou arquivar ao fim do prazo de carência</td>
          </tr>
          <tr>
            <td>Anual</td>
            <td>A licença continua contratada até a renovação</td>
            <td>Reatribuí-la ao próximo contratado; anotar a redução para a data de renovação</td>
          </tr>
        </tbody>
      </table>

      <h2>As outras plataformas: cada uma com a sua regra</h2>
      <p>
        O que vale para o Google não vale para as demais. No Slack, desativar o usuário para de cobrar no ciclo
        seguinte. No Zoom é preciso remover a licença da pessoa e, além disso, reduzir a quantidade contratada. No Figma
        ou na Adobe, o assento continua atribuído até alguém liberá-lo no console. E a pessoa que entrou no Slack ou no
        Salesforce “com o Google” continua contando como usuário ativo lá mesmo com a conta do Google suspensa. As
        regras verificadas por plataforma, com a fonte, estão em{" "}
        <Link href="/license-control">Controle de licenças</Link>.
      </p>

      <h2>Como parar de pagar o que ninguém usa, em quatro passos</h2>
      <ol>
        <li>Conte os três números por plataforma: compradas, atribuídas, em contas bloqueadas.</li>
        <li>Para cada conta bloqueada, decida: excluir, arquivar ou reatribuir a licença ao próximo contratado.</li>
        <li>Anote a data de renovação de cada plano anual e a quantidade para a qual quer reduzir.</li>
        <li>Crie uma regra para que cada desligamento dispare isso de novo, não uma vez por ano quando chega a fatura.</li>
      </ol>

      <h2>Como a Mekovault faz</h2>
      <p>
        Licenças lê cada plataforma conectada e mostra os três números por produto, com o total por moeda. Quando um
        desligamento é executado, a licença fica marcada para liberar e, se o plano for anual, a Mekovault diz o que
        reduzir e lembra você antes da renovação. Para as plataformas que não permitem automatizar, diz exatamente o que
        mudar no console delas e quem é o responsável. E em Compras, cada assinatura tem dono, vencimento e nota fiscal,
        para que nenhuma se renove sozinha. Você pode estimar o seu desperdício com a{" "}
        <Link href="/calculadora-licencias">calculadora</Link>.
      </p>
    </>
  );
}
