import Link from "@/components/Link";

export const meta = {
  title: "Como montar um sistema de compras de software sem comprar um ERP: pedir, aprovar, pagar e renovar em ordem",
  seoTitle: "Sistema de compras de software sem ERP · Mekovault",
  description:
    "Quem pede, aprova, paga e renova cada ferramenta: um fluxo simples de compras de software para empresas de 20 a 500 pessoas, sem ERP e sem TI.",
  question: "Como organizo as compras de software da minha empresa sem um ERP?",
};

export const summary =
  "Um sistema de compras de software não precisa de um ERP: precisa que cada ferramenta tenha alguém que pede, alguém que aprova, alguém que paga e uma data em que ela é revisada. Com um catálogo do que já foi aprovado, uma solicitação que diga para quem e por quê, um aprovador por área e o pedido de compra ligado ao pagamento e à nota fiscal, uma empresa de 20 a 500 pessoas organiza as compras em uma semana. Você pode começar com uma planilha e um formulário; quando as renovações começam a passar despercebidas, é preciso algo mais.";

export const steps = [
  {
    name: "Monte o catálogo do que já foi aprovado",
    text: "Liste as ferramentas que a empresa já paga: nome, plano, preço, quem administra e data de renovação. Tudo o que está ali pode ser pedido sem discussão.",
  },
  {
    name: "Defina uma solicitação com três dados",
    text: "Para quem é, para que serve e quanto custa por mês ou por ano. Se a ferramenta for nova, acrescente que problema resolve e se já existe algo parecido no catálogo.",
  },
  {
    name: "Nomeie um aprovador por área",
    text: "O gestor direto aprova o que está no catálogo. O que é novo ou passa de um valor também passa por quem controla o orçamento. Fixe um prazo de resposta: 48 horas.",
  },
  {
    name: "Compre com pedido de compra",
    text: "Quem compra emite um pedido de compra com fornecedor, valor, periodicidade e centro de custo, e guarda as credenciais no lugar combinado, não no e-mail.",
  },
  {
    name: "Pague e vincule a nota fiscal",
    text: "A tesouraria paga com cartão corporativo ou transferência e anexa a nota fiscal ao pedido. Assim cada lançamento do cartão tem uma solicitação por trás.",
  },
  {
    name: "Anote a renovação e o desligamento",
    text: "Registre a data de renovação e quem decide se continua. Quando a pessoa que usava a licença sai, a licença é liberada ou reatribuída, não continua sendo paga.",
  },
];

export const faq = [
  {
    q: "Preciso de um ERP para ter um sistema de compras?",
    a: "Não. Um ERP organiza compras de insumos, estoque e contabilidade de empresas grandes. Para software, o que você precisa é de um fluxo com quatro papéis (quem pede, quem aprova, quem compra, quem paga) e de um registro em que cada ferramenta tenha solicitação, pedido de compra, nota fiscal e data de renovação. Isso cabe em uma planilha no início e em um módulo como Compras de software da Mekovault depois.",
  },
  {
    q: "O que é um pedido de compra e por que serve para software?",
    a: "É o documento em que a empresa diz o que compra, de quem, por quanto e com que periodicidade, antes de pagar. Para software serve porque deixa escrito o centro de custo, a data de renovação e quem autorizou. Quando o lançamento aparece na fatura do cartão, você sabe de onde veio.",
  },
  {
    q: "Como funciona a aprovação de compras se o gestor não responde?",
    a: "Com um prazo e um próximo. A regra prática é 48 horas: se o gestor não responder, a solicitação passa para a próxima pessoa definida (por exemplo, Controle ou o administrador do sistema). Sem essa regra, as solicitações ficam paradas no e-mail e as pessoas acabam pagando com o próprio cartão.",
  },
  {
    q: "Como faço o controle de gastos com software sem revisar a fatura do cartão todo mês?",
    a: "Faça com que nenhum gasto exista sem solicitação. Se cada ferramenta nasce com uma solicitação aprovada, um pedido de compra e uma nota fiscal vinculada, o controle de gastos é olhar essa lista, não reconstruir a fatura. Os lançamentos sem solicitação por trás são os que precisam ser investigados.",
  },
];

export const related = ["inventario-de-software", "calendario-de-renovaciones", "que-preguntar-antes-de-contratar"];

export const cta = {
  title: "Organize as compras de software sem ERP",
  desc: "Compras de software da Mekovault cuida da solicitação, da aprovação, do pedido de compra, do pagamento e da renovação de cada ferramenta, com seis papéis e aviso 30 dias antes de renovar. Grátis até 20 contas do Google Workspace.",
};

export function Body() {
  return (
    <>
      <h2>Como o software é comprado hoje em uma empresa de 50 pessoas</h2>
      <p>
        Alguém do marketing precisa do Canva. Manda mensagem no WhatsApp para o gestor, o gestor responde “pode
        pegar”, e a pessoa paga com o próprio cartão e pede reembolso. Vendas contratou um CRM há dois anos no cartão
        do diretor comercial; é cobrado todo mês e ninguém lembra quantos usuários tem. Design paga a Adobe com um
        cartão que vence no mês que vem. O financeiro fica sabendo de tudo quando chega a fatura.
      </p>
      <p>
        Isso não acontece por desleixo: acontece porque ninguém definiu quem pede, quem aprova, quem paga e quem
        revisa. Em uma empresa de 20 a 500 pessoas sem área de TI, software se compra como se compra café: quando
        falta, com o que está à mão. O problema aparece depois, quando há três ferramentas para a mesma coisa, uma
        assinatura de alguém que já saiu e uma renovação anual que foi cobrada sozinha.
      </p>

      <h2>O que um sistema de compras precisa de verdade</h2>
      <p>
        Um ERP resolve compras de insumos, estoque e contabilidade para empresas grandes. Para software, a gestão de
        compras precisa de bem menos. Estas são as peças:
      </p>
      <ul>
        <li>
          <strong>Catálogo do que já foi aprovado:</strong> a lista de ferramentas que a empresa já paga e aceita. O
          que está no catálogo se pede sem voltar a discutir.
        </li>
        <li>
          <strong>Uma solicitação com para quem e por quê:</strong> nome da pessoa, o que ela vai fazer com a
          ferramenta e quanto custa. Sem isso, a aprovação é um “pode pegar” no WhatsApp.
        </li>
        <li>
          <strong>Um aprovador por área:</strong> o gestor direto. Se toda compra passa pelo diretor-geral, trava; se
          não passa por ninguém, vira bagunça.
        </li>
        <li>
          <strong>Controle de orçamento e centro de custo:</strong> em que área o gasto é lançado e se há verba para
          isso este ano. Importa quando a ferramenta é nova ou cara.
        </li>
        <li>
          <strong>Pedido de compra:</strong> o documento que diz o que se compra, de quem, por quanto e com que
          frequência.
        </li>
        <li>
          <strong>Pagamento e nota fiscal vinculados:</strong> cada lançamento do cartão corporativo ou cada
          transferência aponta para um pedido de compra e uma nota fiscal.
        </li>
        <li>
          <strong>Data de renovação:</strong> o dia em que a empresa pode reduzir a quantidade ou cancelar. É o dado
          que mais economiza dinheiro e o que menos se anota.
        </li>
      </ul>

      <h2>O fluxo de compras em cinco passos</h2>
      <p>
        O fluxo não muda com o tamanho da empresa; muda quem ocupa cada papel. Em uma empresa de 30 pessoas, a mesma
        pessoa pode comprar e pagar. Em uma de 300, são áreas diferentes.
      </p>
      <table>
        <thead>
          <tr>
            <th>Passo</th>
            <th>Quem</th>
            <th>O que fica registrado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Pedir</td>
            <td>A pessoa que precisa da ferramenta</td>
            <td>Para quem, para quê, quanto custa, se está no catálogo ou é nova</td>
          </tr>
          <tr>
            <td>2. Aprovar</td>
            <td>O gestor direto; se for nova ou passar do valor, também quem controla o orçamento</td>
            <td>Quem aprovou, quando, com que orçamento e centro de custo</td>
          </tr>
          <tr>
            <td>3. Comprar</td>
            <td>Quem compra (Compras ou administrativo)</td>
            <td>Pedido de compra, fornecedor, plano contratado, credenciais guardadas</td>
          </tr>
          <tr>
            <td>4. Pagar</td>
            <td>Tesouraria ou financeiro</td>
            <td>Meio de pagamento, periodicidade, nota fiscal anexada</td>
          </tr>
          <tr>
            <td>5. Renovar ou cancelar</td>
            <td>Quem administra a ferramenta, com o gestor</td>
            <td>Data de renovação, decisão de continuar, reduzir ou cancelar; licença liberada quando alguém sai</td>
          </tr>
        </tbody>
      </table>
      <p>
        O importante no registro não é o formato: é que cada passo deixe um dado que o passo seguinte usa. O pedido de
        compra sai da solicitação aprovada; a nota fiscal se vincula ao pedido; a renovação é revisada com a data que
        ficou no pedido.
      </p>
      <p>
        Um sistema de compras falha por dois motivos: é tão pesado que as pessoas pulam, ou tão leve que não serve
        para nada. Estas regras o mantêm no meio:
      </p>
      <ol>
        <li>
          <strong>Catálogo primeiro.</strong> Se a ferramenta está no catálogo, a aprovação de compras é um clique do
          gestor. Só o que é novo passa pelo controle de orçamento.
        </li>
        <li>
          <strong>Limite de valor.</strong> Abaixo de certo valor anual (por exemplo, o que custa uma licença por
          ano), o gestor aprova sozinho. Acima dele, o Controle também.
        </li>
        <li>
          <strong>48 horas para responder.</strong> Se o aprovador não responder em dois dias úteis, a solicitação
          passa para o próximo. Ninguém deveria pagar com o próprio cartão porque uma aprovação ficou parada no e-mail.
        </li>
        <li>
          <strong>Sem pedido, não há pagamento.</strong> A tesouraria não paga nem reembolsa nada que não tenha
          solicitação aprovada e pedido de compra.
        </li>
        <li>
          <strong>Toda assinatura tem responsável e data.</strong> Inclusive as que são pagas no cartão e não mandam
          nota fiscal. Se ninguém é responsável, ninguém cancela.
        </li>
      </ol>

      <h2>Como começar com uma planilha, e quando ela deixa de bastar</h2>
      <p>
        Você não precisa de um software de compras para começar. Precisa de um formulário e de uma planilha. O
        formulário recolhe a solicitação: nome, área, ferramenta, para quê, custo, periodicidade. A planilha tem uma
        linha por ferramenta com estas colunas: ferramenta, plano, preço, periodicidade, responsável, centro de custo,
        meio de pagamento, data de renovação, status. Quem aprova responde ao e-mail do formulário; quem compra
        acrescenta a linha; quem paga anota a nota fiscal.
      </p>
      <p>
        Isso basta até acontecer uma destas coisas: a planilha passa de 30 linhas e ninguém atualiza; uma renovação
        anual passa porque a data estava anotada mas ninguém olhou; alguém saiu da empresa e a licença do Figma
        continuou sendo paga por seis meses; ou o diretor pergunta “quanto gastamos com software?” e a resposta leva
        uma semana. Nesse ponto, o sistema de compras precisa avisar sozinho, não esperar que alguém abra a planilha.
      </p>

      <h2>O que faz Compras de software da Mekovault</h2>
      <p>
        <Link href="/compras-de-software">Compras de software</Link> é o fluxo de cinco passos desta guia, com seis
        papéis: Solicitante, Gestor, Controle, Compras, Tesouraria e Administrador. Alguém pede uma ferramenta do
        catálogo ou uma nova. O gestor aprova com um clique se está no catálogo; se é nova, passa pelo Controle com
        orçamento e centro de custo, e depois por Compras. Compras emite o pedido de compra em PDF, registra o
        fornecedor e guarda as credenciais. A Tesouraria paga com cartão corporativo ou transferência, anota a
        periodicidade e recebe o aviso de nota fiscal. Se ninguém responde em 48 horas, o próximo é avisado.
      </p>
      <p>
        Cada assinatura fica com data de renovação, e 30 dias antes chega o aviso para decidir se continua, reduz a
        quantidade ou cancela. Quando uma pessoa sai, a licença que ela tinha é cancelada ou reatribuída, em vez de
        continuar sendo paga. As ferramentas sem conector (Canva, Notion, Adobe e as demais) são registradas à mão com
        preço, data de renovação e responsável, e entram no{" "}
        <Link href="/license-control">controle de licenças</Link> junto com o Google Workspace. Se você já tem uma
        planilha, ela é importada inteira de uma vez. Antes de decidir, você pode estimar quanto está perdendo em
        licenças com a <Link href="/calculadora-licencias">calculadora</Link>.
      </p>
    </>
  );
}
