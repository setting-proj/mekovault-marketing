import Link from "@/components/Link";

export const meta = {
  title: "Inventário de software: como saber o que a sua empresa paga, quem usa e quanto custa por mês",
  seoTitle: "Inventário de software da empresa: como montar · Mekovault",
  description:
    "Tudo o que a empresa paga por pessoa, com preço, responsável, renovação e uso real. Como montar a lista em uma tarde e mantê-la sem planilhas.",
  question: "Como sei quais programas minha empresa paga e quem usa?",
};

export const summary =
  "Um inventário de software é uma lista de tudo o que a empresa paga por pessoa: cada ferramenta com o preço, quem paga, quem responde por ela, quantas licenças foram compradas e quantas são usadas, e quando renova. Em uma empresa de 60 pessoas você monta em uma tarde com três fontes: a fatura do cartão, o console do Google Workspace e os e-mails de recibo. O difícil não é montar, é a lista continuar viva depois do primeiro mês.";

export const steps = [
  {
    name: "Pedir a fatura de cada cartão",
    text: "Os últimos 12 meses do cartão da empresa e de qualquer cartão pessoal que seja reembolsado. Cada cobrança de um fornecedor de software é uma linha.",
  },
  {
    name: "Revisar o console do Google Workspace",
    text: "Faturamento mostra o que se paga ao Google. Os aplicativos de terceiros com acesso às contas mostram o que as pessoas usam mesmo que ninguém pague ainda.",
  },
  {
    name: "Buscar os recibos no e-mail",
    text: "Busque 'your receipt', 'seu recibo', 'invoice' e 'nota fiscal' nas caixas do administrativo, do financeiro e dos gerentes. Ali aparecem as assinaturas que não passam pelo cartão da empresa.",
  },
  {
    name: "Preencher os seis dados de cada linha",
    text: "Nome, preço e periodicidade, quem paga, responsável, licenças compradas e usadas, data de renovação. Se um dado faltar, anote 'não sei' e pergunte.",
  },
  {
    name: "Decidir o que fazer com cada achado",
    text: "Licenças em contas bloqueadas são liberadas, duplicadas são unificadas, testes que ninguém cancelou são cortados. Cada decisão com um responsável e uma data.",
  },
  {
    name: "Escolher onde a lista vai morar",
    text: "Uma planilha serve para a primeira tarde. Para continuar em dia, cada compra, cada desligamento e cada renovação precisam atualizá-la sem que alguém lembre.",
  },
];

export const faq = [
  {
    q: "O que é um inventário de software?",
    a: "A lista de todas as ferramentas que a empresa paga, com preço, periodicidade, quem paga, quem é responsável, quantas licenças foram compradas e quantas são usadas, e a data de renovação. É a base do controle de gastos com software: sem a lista você não sabe quanto gasta nem o que pode cortar.",
  },
  {
    q: "Como descubro quais assinaturas minha empresa paga se ninguém anotou?",
    a: "Com três fontes: a fatura de cada cartão (da empresa e os pessoais reembolsados), a seção Faturamento do console do Google Workspace e uma busca de recibos no e-mail. Entre as três aparece quase tudo; o que falta sai perguntando a cada gestor o que a área dele paga.",
  },
  {
    q: "Quanto tempo leva montar o inventário de aplicativos de uma empresa de 60 pessoas?",
    a: "Uma tarde para a primeira versão, se você tem acesso aos cartões e ao console do Google. O que demora mais é confirmar quem é responsável por cada ferramenta e quantas licenças são usadas de verdade, porque isso exige perguntar. Manter em dia é o que falha depois, não montar.",
  },
  {
    q: "Preciso de um programa para o inventário ou basta uma planilha?",
    a: "Para começar, a planilha basta. Ela falha quando ninguém atualiza: uma compra nova, uma pessoa que sai ou uma renovação não mexem nela. A Mekovault lê as licenças do Google Workspace, registra o resto em Compras de software com preço e data de renovação e importa a sua planilha para não partir do zero.",
  },
];

export const related = ["licencias-que-sigues-pagando", "aplicaciones-vinculadas", "licencias-sin-usar"];

export const cta = {
  title: "Importe a sua planilha e deixe que ela se mantenha sozinha",
  desc: "A Mekovault lê as licenças do Google Workspace, registra o resto em Compras de software e avisa antes de cada renovação. Grátis até 20 contas.",
};

export function Body() {
  return (
    <>
      <h2>Por que ninguém tem a lista de assinaturas da empresa</h2>
      <p>
        Se você perguntar ao gerente financeiro quanto a empresa gasta com software por mês, ele vai olhar o cartão. Se
        perguntar a quem cuida de sistemas, vai olhar o console do Google. Se perguntar ao marketing, vai citar o Canva
        e duas ferramentas que o resto não conhece. Ninguém tem a lista completa, e não é descuido.
      </p>
      <p>
        Software se compra aos poucos. Alguém começa um teste grátis no próprio cartão e a empresa reembolsa. Um
        gerente contrata o Zoom para a equipe dele com o cartão da área. A pessoa que criou a conta do Notion saiu há um
        ano e a cobrança continua caindo em um cartão que ninguém confere linha por linha. Cada compra fez sentido na
        hora; o que nunca existiu foi um lugar para anotar todas.
      </p>
      <p>
        O resultado é conhecido: quando chega a renovação anual do Google Workspace, ninguém sabe quantas licenças
        são necessárias de verdade. E quando alguém sai, ninguém sabe em quais ferramentas ela tinha um assento pago.
      </p>

      <h2>Os seis dados de cada linha do inventário de software</h2>
      <p>Um inventário de aplicativos não precisa de trinta colunas. Precisa de seis, completas para cada ferramenta:</p>
      <ul>
        <li>
          <strong>Nome e plano:</strong> não “Google”, mas “Google Workspace Business Standard”. O plano muda o preço
          e as regras para reduzir licenças.
        </li>
        <li>
          <strong>Preço e periodicidade:</strong> quanto custa cada licença e se é paga por mês ou por ano. Uma
          cobrança anual que cai em março é esquecida em abril.
        </li>
        <li>
          <strong>Quem paga:</strong> o cartão da empresa, o cartão de uma área, um cartão pessoal reembolsado, ou um
          boleto contra nota fiscal.
        </li>
        <li>
          <strong>Responsável:</strong> a pessoa que decide se a ferramenta continua, quantas licenças precisa e quem
          entra. Se não há nome, a ferramenta não tem dono e ninguém vai cortá-la.
        </li>
        <li>
          <strong>Licenças compradas e usadas:</strong> as que se pagam e as que têm alguém por trás que entra de
          verdade. A diferença é dinheiro que vai embora todo mês.
        </li>
        <li>
          <strong>Data de renovação:</strong> o dia em que o fornecedor cobra o ano inteiro de novo. Na maioria dos
          planos anuais é a única data em que dá para reduzir a quantidade.
        </li>
      </ul>

      <h2>De onde tirar os dados em uma tarde</h2>
      <p>Não precisa entrevistar a empresa inteira. Três fontes cobrem quase tudo:</p>
      <ol>
        <li>
          <strong>A fatura do cartão.</strong> Peça os últimos 12 meses do cartão da empresa e filtre as cobranças em
          dólar ou com nomes de fornecedores de software. Doze meses, porque as cobranças anuais aparecem uma vez só.
          Repita com os cartões pessoais que são reembolsados: é ali que moram os testes que nunca foram cancelados.
        </li>
        <li>
          <strong>O console do Google Workspace.</strong> Em Faturamento você vê cada assinatura do Google, o plano,
          quantas licenças comprou e quantas atribuiu. No perfil de cada usuário, os aplicativos de terceiros com
          acesso à conta mostram quais ferramentas as pessoas usam com o e-mail da empresa: Slack, Canva, Notion,
          Figma. Nem todas são pagas, mas todas são candidatas a entrar na lista.
        </li>
        <li>
          <strong>Os e-mails de recibo.</strong> Busque “your receipt”, “seu recibo”, “invoice” e “nota fiscal” nas
          caixas do administrativo, do financeiro e de cada gerente. Os fornecedores mandam um e-mail a cada cobrança,
          e esse e-mail traz o plano, o valor e a data. É a fonte mais completa para as assinaturas que não passam pelo
          cartão da empresa.
        </li>
      </ol>
      <p>
        Com isso você tem nome, preço, periodicidade e quem paga. O que falta, responsável e licenças usadas, se
        pergunta a cada gestor com uma lista curta: “estas são as ferramentas da sua área, quem usa?”.
      </p>

      <h2>A planilha mínima: exemplo de uma empresa de 60 pessoas</h2>
      <p>
        É assim que fica um inventário de software recém-montado, com valores de exemplo arredondados. As linhas
        incompletas não são erro: são a lista de perguntas pendentes.
      </p>
      <table>
        <thead>
          <tr>
            <th>Ferramenta</th>
            <th>Preço e periodicidade</th>
            <th>Quem paga</th>
            <th>Responsável</th>
            <th>Compradas / usadas</th>
            <th>Renovação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Workspace Business Standard</td>
            <td>R$ 75 por licença ao mês, plano anual</td>
            <td>Cartão da empresa</td>
            <td>Gerente de operações</td>
            <td>64 / 58 (3 em contas suspensas)</td>
            <td>15 de março</td>
          </tr>
          <tr>
            <td>Slack Pro</td>
            <td>R$ 50 por pessoa ao mês, mensal</td>
            <td>Cartão da empresa</td>
            <td>Gerente de operações</td>
            <td>60 / 55</td>
            <td>Mês a mês</td>
          </tr>
          <tr>
            <td>Zoom Workplace Pro</td>
            <td>R$ 80 por licença ao mês, plano anual</td>
            <td>Cartão do gerente comercial</td>
            <td>Vendas</td>
            <td>10 / 4</td>
            <td>1 de julho</td>
          </tr>
          <tr>
            <td>Canva para equipes</td>
            <td>R$ 55 por pessoa ao mês, plano anual</td>
            <td>Cartão pessoal, reembolso</td>
            <td>Marketing</td>
            <td>5 / 5</td>
            <td>20 de novembro</td>
          </tr>
          <tr>
            <td>Notion Plus</td>
            <td>R$ 55 por pessoa ao mês, mensal</td>
            <td>Cartão pessoal de alguém que já não trabalha</td>
            <td>Ninguém definido</td>
            <td>12 / 7</td>
            <td>Desconhecida</td>
          </tr>
        </tbody>
      </table>
      <p>
        Essa empresa paga cerca de R$ 7.000 por mês por essas cinco ferramentas. Com a tabela à vista, aparecem na
        hora três coisas que ninguém tinha visto: o Zoom tem 6 licenças sem uso que renovam em julho, o Notion é pago
        por alguém que já saiu e o Google tem 3 licenças em contas suspensas cobradas igual às ativas.
      </p>
      <p>
        <strong>O que fazer com o que aparece.</strong> O normal é encontrar três tipos de achado:
      </p>
      <ul>
        <li>
          <strong>Licenças em contas bloqueadas:</strong> pessoas que saíram e ainda têm um assento pago. No Google,
          suspender não basta; é preciso excluir ou arquivar a conta. Como fazer em cada plataforma está em{" "}
          <Link href="/recursos/licencias-sin-usar">licenças sem uso</Link>.
        </li>
        <li>
          <strong>Duplicadas:</strong> duas áreas pagando o Zoom separadamente, ou Canva e Figma para a mesma coisa.
          Escolhe-se uma e junta-se todo mundo em um único plano.
        </li>
        <li>
          <strong>Testes que nunca foram cancelados:</strong> cobranças mensais pequenas em cartões pessoais, com um ou
          dois usuários. Pergunta-se, e se ninguém responder em uma semana, cancela-se.
        </li>
      </ul>

      <h2>Controle de gastos com software sem voltar para a planilha</h2>
      <p>
        A planilha que você montou hoje está desatualizada no mês que vem: entra uma pessoa, sai outra, alguém contrata
        uma ferramenta nova, o Zoom renova. Ninguém abre de novo porque manter é um trabalho sem dono. Para o
        inventário continuar vivo, cada movimento precisa atualizá-lo sozinho.
      </p>
      <p>
        A Mekovault começa por aí. A tela de Licenças lê o Google Workspace e mostra, por plataforma, as licenças
        compradas, as usadas e as que estão em contas bloqueadas, com quanto custam por mês e até que data podem ser
        reduzidas. As assinaturas que não têm conector (Canva, Notion, Adobe e o resto) são registradas em{" "}
        <Link href="/compras-de-software">Compras de software</Link> com preço, data de renovação e responsável, e
        entram no mesmo controle. E para não partir do zero, você importa a planilha que montou nesta tarde: cada linha
        fica com dono, vencimento e aviso 30 dias antes da renovação.
      </p>
      <p>
        A partir daí, quando alguém sai, o assento dela em cada ferramenta fica marcado para liberar. Quando alguém
        pede algo novo, passa por aprovação e entra na lista desde o primeiro dia. O inventário deixa de ser uma tarefa
        e vira o registro do que já acontece. Se quiser ver quanto paga hoje por licenças que ninguém usa, experimente
        a <Link href="/calculadora-licencias">calculadora</Link>.
      </p>
    </>
  );
}
