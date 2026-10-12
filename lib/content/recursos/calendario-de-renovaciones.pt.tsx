import Link from "@/components/Link";

export const meta = {
  title: "Calendário de renovação de assinaturas de software: como não pagar mais um ano pelo que ninguém usa",
  seoTitle: "Calendário de renovação de assinaturas · Mekovault",
  description:
    "Toda assinatura tem uma data para reduzir a quantidade ou cancelar. Como montar o calendário, o que revisar 30 dias antes e o que muda nos planos anuais.",
  question: "Quando posso reduzir licenças ou cancelar uma assinatura sem pagar mais um ano?",
};

export const summary =
  "A renovação é o único momento em que o gasto com software diminui: em um plano anual, a quantidade contratada só é reduzida nesse dia, e se ninguém revisa, ela se renova sozinha por mais um ano. Um calendário de renovações tem três dados por assinatura: a data, o prazo de aviso e quem decide. Com isso, e uma revisão 30 dias antes, dá para reduzir licenças, passar para mensal ou cancelar antes que o cartão pague de novo.";

export const steps = [
  {
    name: "Liste todas as assinaturas",
    text: "Inclua as que são pagas no cartão de alguém e não mandam nota fiscal. Fontes: a fatura do cartão corporativo, os reembolsos e a planilha de compras, se existir.",
  },
  {
    name: "Anote data, prazo de aviso e responsável",
    text: "Para cada uma: quando renova, quantos dias antes é preciso avisar o fornecedor para reduzir a quantidade ou cancelar, e quem decide. Sem responsável, não há decisão.",
  },
  {
    name: "Coloque o alerta 30 dias antes",
    text: "Um lembrete na agenda do responsável e do financeiro, 30 dias antes da data (ou antes, se o prazo de aviso do contrato for maior).",
  },
  {
    name: "Revise as quatro coisas",
    text: "Licenças compradas e não atribuídas, contas bloqueadas que ainda têm licença, pessoas que entram no mês que vem e o preço novo que vão cobrar de você.",
  },
  {
    name: "Decida e avise o fornecedor por escrito",
    text: "Reduzir a quantidade, passar para mensal, cancelar ou continuar. Faça isso na tela de pagamentos da plataforma ou por e-mail ao fornecedor, dentro do prazo de aviso.",
  },
];

export const faq = [
  {
    q: "O que é renovação automática e como desativo?",
    a: "É a cláusula pela qual a assinatura é cobrada de novo ao fim do período se você não cancelar antes. Quase todas as assinaturas da empresa têm. Em algumas plataformas ela é desativada na tela de pagamentos; em outras é preciso avisar o fornecedor por escrito com um prazo (30 ou 60 dias é comum). O que importa não é desativá-la, mas ter a data no calendário com tempo para decidir.",
  },
  {
    q: "Posso reduzir licenças em um plano anual no meio do ano?",
    a: "Normalmente não. No plano anual você se compromete com uma quantidade por doze meses: pode aumentar, mas a redução só vale na renovação. No Google Workspace é assim; no Slack e no Zoom a regra é diferente. Se alguém sai no meio do ano, o prático é reatribuir a licença ao próximo contratado e anotar a redução para a data de renovação.",
  },
  {
    q: "De quanto em quanto tempo vale revisar as assinaturas da empresa?",
    a: "Dois ritmos: uma revisão curta todo mês (lançamentos novos no cartão, pessoas que saíram) e uma revisão completa 30 dias antes de cada renovação anual. Com 15 ou 20 assinaturas, isso é uma hora por mês e uma tarde por renovação grande.",
  },
  {
    q: "O que posso negociar antes de renovar as licenças?",
    a: "Três coisas, nesta ordem: a quantidade (pagar só as licenças que usa), a periodicidade (passar para mensal se a equipe vai mudar) e o preço (pedir para manter o valor do ano anterior ou um desconto por volume). O fornecedor sabe que a renovação é o único momento em que você pode ir embora, então é quando ele mais escuta.",
  },
];

export const related = ["licencias-sin-usar", "licencias-que-sigues-pagando", "sistema-de-compras-de-software-sin-erp"];

export const cta = {
  title: "Nenhuma assinatura se renova sozinha",
  desc: "A Mekovault avisa 30 dias antes de cada renovação com as licenças sem uso e os passos exatos daquela plataforma, e Compras de software guarda data, cartão e responsável de cada assinatura. Grátis até 20 contas do Google Workspace.",
};

export function Body() {
  return (
    <>
      <h2>Por que a renovação é o único momento em que o gasto diminui</h2>
      <p>
        Durante o ano, o gasto com software só sobe. Entra uma pessoa, acrescenta-se uma licença. Uma área precisa de
        uma função nova, sobe-se de plano. Ninguém repara porque cada aumento é pequeno. Diminuir, por outro lado, tem
        data: em um plano anual, a quantidade contratada só é reduzida na renovação. Se alguém saiu em março e o plano
        renova em novembro, a licença dessa pessoa é paga até novembro, e se em novembro ninguém a tira, até o
        novembro seguinte.
      </p>
      <p>
        O plano mensal é mais caro por licença, mas deixa reduzir todo mês. O plano anual é mais barato, mas amarra a
        quantidade. E quase todos, mensais e anuais, têm renovação automática: se você não faz nada, são cobrados de
        novo. Por isso o calendário de renovações não é um detalhe administrativo: é a única ferramenta com que uma
        empresa sem TI reduz o gasto com software.
      </p>

      <h2>Os três dados do calendário</h2>
      <p>Cada assinatura da empresa precisa de três dados. Com menos, o calendário não funciona.</p>
      <ul>
        <li>
          <strong>A data de renovação:</strong> o dia em que o próximo período é cobrado. Em planos anuais costuma ser
          o aniversário do contrato; em mensais, o mesmo dia de cada mês.
        </li>
        <li>
          <strong>O prazo de aviso:</strong> quantos dias antes dessa data é preciso pedir a redução ou o cancelamento
          para que valha. Em algumas plataformas basta mudar na tela de pagamentos no dia anterior; em contratos com
          fornecedor, é comum pedirem 30 ou 60 dias por escrito.
        </li>
        <li>
          <strong>Quem decide:</strong> a pessoa que sabe se a ferramenta continua sendo necessária e quantas licenças
          são precisas. Normalmente o gestor da área que a usa, não o financeiro.
        </li>
      </ul>
      <p>
        As regras mudam por plataforma. Estas três estão verificadas na documentação de cada fornecedor; para as
        demais, revise o seu contrato ou a página de cobrança antes de dar algo como certo.
      </p>
      <table>
        <thead>
          <tr>
            <th>Plataforma</th>
            <th>Quando a cobrança diminui</th>
            <th>O que é preciso fazer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Workspace</td>
            <td>Plano flexível: no mês seguinte. Plano anual: só na renovação</td>
            <td>Suspender não basta: excluir ou arquivar a conta (flexível) ou anotar a redução para a renovação (anual)</td>
          </tr>
          <tr>
            <td>Slack</td>
            <td>A partir do próximo ciclo de cobrança</td>
            <td>Desativar o usuário; a cobrança diminui sozinha</td>
          </tr>
          <tr>
            <td>Zoom</td>
            <td>A partir do próximo ciclo de cobrança</td>
            <td>Remover a licença da pessoa e, além disso, reduzir a quantidade contratada</td>
          </tr>
          <tr>
            <td>Outras (Adobe, Notion, Canva, CRM etc.)</td>
            <td>Depende do contrato</td>
            <td>Revise o prazo de aviso e se a redução vale no mês seguinte ou na renovação</td>
          </tr>
        </tbody>
      </table>

      <h2>A revisão de 30 dias antes</h2>
      <p>
        Trinta dias antes de cada renovação, o responsável e o financeiro se reúnem por meia hora e revisam quatro
        coisas. Trinta dias porque dá tempo de decidir, avisar o fornecedor dentro do prazo e, se for preciso,
        negociar.
      </p>
      <ol>
        <li>
          <strong>Licenças sem uso:</strong> compradas e não atribuídas a ninguém. É a redução mais fácil: ninguém
          vai sentir falta.
        </li>
        <li>
          <strong>Contas bloqueadas com licença:</strong> pessoas que já não trabalham na empresa, cuja conta está
          suspensa mas mantém a licença. São pagas igual a uma ativa. É preciso excluí-las, arquivá-las ou reatribuir
          a licença antes da renovação.
        </li>
        <li>
          <strong>Gente que entra no mês que vem:</strong> se há contratações confirmadas, vale guardar licença para
          elas em vez de reduzir e aumentar de novo. O calendário do RH e o de renovações precisam ser olhados juntos.
        </li>
        <li>
          <strong>O preço novo:</strong> muitos fornecedores sobem o preço na renovação e avisam em um e-mail que
          ninguém lê. Compare o preço por licença do ano anterior com o que vão cobrar.
        </li>
      </ol>
      <p>
        Com esses quatro números, a decisão é simples: continuar com a mesma quantidade, reduzir, passar para mensal ou
        cancelar. O que não serve é descobrir quando chega o lançamento no cartão.
      </p>

      <h2>Uma rotina e um modelo</h2>
      <p>
        A gestão de assinaturas tem dois ritmos. Uma vez por mês, alguém do financeiro olha a fatura do cartão
        corporativo e os reembolsos: cada lançamento de software que não está no calendário é acrescentado. E 30 dias
        antes de cada renovação anual, a revisão acima. Para uma empresa com 15 ou 20 assinaturas, é uma hora por mês.
      </p>
      <p>O modelo é uma planilha com uma linha por assinatura e estas colunas:</p>
      <ul>
        <li><strong>Ferramenta e plano:</strong> por exemplo, Google Workspace Business Standard.</li>
        <li><strong>Quantidade contratada e quantidade em uso:</strong> a diferença é o que sobra.</li>
        <li><strong>Preço por licença e total por mês ou por ano.</strong></li>
        <li><strong>Periodicidade:</strong> mensal ou anual.</li>
        <li><strong>Data de renovação.</strong></li>
        <li><strong>Prazo de aviso:</strong> em dias, e como se avisa (tela de pagamentos ou e-mail ao fornecedor).</li>
        <li><strong>Meio de pagamento:</strong> qual cartão ou conta, e de quem.</li>
        <li><strong>Responsável:</strong> quem decide se continua.</li>
        <li><strong>Decisão e data:</strong> continuar, reduzir para quanto, passar para mensal, cancelar.</li>
      </ul>
      <p>
        Antes de renovar, negocie. O fornecedor sabe que a renovação é o único momento em que você pode ir embora,
        então é quando ele mais escuta. Peça, nesta ordem: menos quantidade (só as licenças que usa), periodicidade
        mensal se a equipe vai mudar nos próximos meses, e preço (manter o do ano anterior ou um desconto por volume).
        Se disserem não às três, pelo menos você tem a data anotada para o ano que vem.
      </p>

      <h2>O que a Mekovault faz</h2>
      <p>
        A tela de Licenças mostra, por plataforma, quantas licenças você tem compradas, quantas em uso e quantas estão
        em contas bloqueadas, quanto custam por mês e até que data podem ser reduzidas. Trinta dias antes de cada
        renovação, a Mekovault avisa você com as licenças sem uso e os passos exatos daquela plataforma para reduzir a
        quantidade. Reduzir a quantidade contratada é a empresa que faz, na tela de pagamentos de cada plataforma; a
        Mekovault diz quantas, quando e como, e guarda a evidência. As regras verificadas por plataforma estão em{" "}
        <Link href="/license-control">Controle de licenças</Link>.
      </p>
      <p>
        <Link href="/compras-de-software">Compras de software</Link> guarda, para cada assinatura, a data de
        renovação, o cartão ou a conta com que é paga e o responsável que decide. Também as que não têm conector, como
        Canva, Notion ou Adobe: são registradas à mão com preço, data e responsável, ou importadas da sua planilha de
        uma vez. Quando uma pessoa sai, a licença que ela tinha fica marcada para cancelar em vez de continuar até a
        próxima renovação. Para estimar quanto você está perdendo hoje, use a{" "}
        <Link href="/calculadora-licencias">calculadora de licenças</Link>.
      </p>
    </>
  );
}
