import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs Rippling: contas resolvidas sem trocar de folha de pagamento",
  seoTitle: "Mekovault vs Rippling IT para PMEs no Brasil",
  description:
    "O Rippling revoga acessos porque também é a sua folha e o seu RH, pago por funcionário. A Mekovault se conecta à sua folha e ao Google Workspace como são.",
  question: "O Rippling serve para uma PME no Brasil ou preciso da Mekovault?",
};

export const summary =
  "O Rippling resolve as contas dos funcionários porque também é a folha de pagamento, o RH e a gestão de computadores da empresa: ao marcar alguém como desligado, revoga os acessos. Para isso é preciso mover a empresa inteira para o Rippling e pagar por funcionário mais uma plataforma base. A Mekovault faz a parte de contas e licenças se conectando à folha que você já tem (o seu sistema de folha, Buk e Talana hoje) e ao seu Google Workspace, por um preço por empresa.";

export const faq = [
  {
    q: "O Rippling funciona no Brasil?",
    a: "O Rippling vende nos Estados Unidos e em vários países, principalmente em inglês, com folha própria para alguns mercados. Para uma empresa brasileira significa trocar a folha (hoje na Gupy, Sólides ou TOTVS) e pagar em dólares por funcionário mais uma plataforma base.",
  },
  {
    q: "A Mekovault administra computadores e celulares?",
    a: "Não. A Mekovault administra contas, licenças, aplicativos autorizados e assinaturas. A gestão de dispositivos fica no seu console do Google ou na ferramenta que você usa para isso.",
  },
  {
    q: "E se eu já tenho o Rippling?",
    a: "Então o desligamento das contas é feito pelo Rippling. A Mekovault acrescentaria a decisão do gestor sobre arquivos e e-mail, as licenças por plataforma e os aplicativos autorizados, mas o caso típico da Mekovault é a empresa que não quer migrar a folha.",
  },
];

export const related = ["gestion-de-accesos-para-pymes", "mekovault-vs-factorial", "que-preguntar-antes-de-contratar"];

export function Body() {
  return (
    <>
      <h2>O que cada um faz</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Rippling (TI)</th>
            <th>Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>O que é</td>
            <td>Folha, RH, TI e dispositivos em um só sistema</td>
            <td>Controle de contas, licenças e aplicativos, conectado à sua folha e ao Google Workspace</td>
          </tr>
          <tr>
            <td>O que precisa mudar para usar</td>
            <td>Migrar a folha e o cadastro de pessoas para o Rippling</td>
            <td>Nada: conecta-se ao seu sistema de folha (Buk e Talana hoje) e ao Google Workspace como estão</td>
          </tr>
          <tr>
            <td>Quando alguém sai</td>
            <td>Ao marcar o desligamento, revoga acessos nos aplicativos conectados e recupera o computador</td>
            <td>Bloqueio no último dia, na hora marcada, e-mail redirecionado, o gestor decide sobre os arquivos, licença liberada, exclusão programada</td>
          </tr>
          <tr>
            <td>Quem decide sobre arquivos e e-mail</td>
            <td>Regras definidas pela TI</td>
            <td>O gestor direto, por e-mail, com lembretes</td>
          </tr>
          <tr>
            <td>Dispositivos</td>
            <td>Sim (compra, envio, apagamento remoto)</td>
            <td>Não</td>
          </tr>
          <tr>
            <td>Preço</td>
            <td>Por funcionário ao mês, mais plataforma base obrigatória, em dólares</td>
            <td>Um preço por empresa, sem custo por pessoa</td>
          </tr>
          <tr>
            <td>Idioma e suporte</td>
            <td>Principalmente inglês</td>
            <td>Português, inglês e espanhol (Chile, Argentina e México); suporte no horário comercial do Chile</td>
          </tr>
        </tbody>
      </table>

      <h2>Quando escolher o Rippling</h2>
      <p>
        Se você está montando a empresa do zero ou vai trocar de folha de qualquer jeito, quer computadores, RH e
        contas em um único fornecedor, opera em inglês e o preço por funcionário fecha para você.
      </p>
      <h2>Quando escolher a Mekovault</h2>
      <p>
        Se a sua folha já está na Gupy, Sólides ou TOTVS e você não vai trocar; se o seu e-mail é Google Workspace; se
        quer que o gestor decida e fique registro; se prefere um preço por empresa e suporte em português. Mais em{" "}
        <Link href="/recursos/gestion-de-accesos-para-pymes">gestão de acessos para PMEs</Link>.
      </p>
      <p className="text-sm">Dados do Rippling retirados do site público dele em outubro de 2026; se mudarem, avise e corrigimos.</p>
    </>
  );
}
