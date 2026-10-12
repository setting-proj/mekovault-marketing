import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs Cledara: controlar o gasto não é o mesmo que encerrar as contas",
  seoTitle: "Mekovault vs Cledara para contas e assinaturas",
  description:
    "A Cledara controla o gasto com software no financeiro, com cartões virtuais; a Mekovault controla contas e licenças a partir do RH. Quando usar cada uma.",
  question: "Cledara ou Mekovault para as assinaturas da minha empresa?",
};

export const summary =
  "A Cledara controla o gasto com software a partir do financeiro: cartões virtuais por assinatura, notas fiscais e renovações, pensada para equipes financeiras de empresas de 25 a 150 pessoas, em inglês. A Mekovault controla as contas e as licenças a partir do RH: cria e encerra a conta do Google no dia certo, decide com o gestor e libera a licença. Se o seu problema é o gasto, Cledara; se é que as contas continuam abertas, Mekovault; muitas empresas precisam das duas.";

export const faq = [
  {
    q: "A Cledara encerra a conta do Google de um funcionário que sai?",
    a: "Não é o foco dela. A Cledara bloqueia o cartão com que a assinatura era paga e, com o módulo de TI, pode remover acessos em alguns aplicativos. Não substitui o bloqueio da conta do Google com e-mail redirecionado e arquivos transferidos.",
  },
  {
    q: "A Mekovault emite cartões virtuais?",
    a: "Não. A Mekovault registra as assinaturas em Compras com dono, vencimento e nota fiscal, e lembra a renovação, mas o pagamento continua no seu banco ou cartão.",
  },
  {
    q: "Estão disponíveis em português e no Brasil?",
    a: "A Cledara tem escritório em Barcelona e o site está em inglês; cobra por número de aplicativos e em libras ou euros. A Mekovault está em português, inglês e espanhol (Chile, Argentina e México), e cobra um preço por empresa.",
  },
];

export const related = ["mekovault-vs-factorial", "licencias-que-sigues-pagando", "que-es-el-control-de-cuentas-y-licencias"];

export function Body() {
  return (
    <>
      <h2>O que cada uma faz</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Cledara</th>
            <th>Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>De onde se controla</td>
            <td>Financeiro: o que se paga</td>
            <td>RH: quem entra, muda e sai</td>
          </tr>
          <tr>
            <td>Ferramenta principal</td>
            <td>Cartões virtuais por assinatura, conciliação contábil, renovações</td>
            <td>Solicitações com data que criam e encerram contas, licenças por plataforma, aplicativos autorizados</td>
          </tr>
          <tr>
            <td>Quando alguém sai</td>
            <td>O cartão é bloqueado; o acesso é revisado à parte</td>
            <td>A conta é bloqueada no último dia, o e-mail é redirecionado, o gestor decide sobre os arquivos, a licença é liberada</td>
          </tr>
          <tr>
            <td>Descobrir assinaturas</td>
            <td>Sim, pelos pagamentos com os cartões dela</td>
            <td>Pelos aplicativos autorizados com a conta do Google e pelo registro em Compras; não lê cartões</td>
          </tr>
          <tr>
            <td>Folha de pagamento como origem</td>
            <td>Não</td>
            <td>Sim: o seu sistema de folha (Buk e Talana hoje)</td>
          </tr>
          <tr>
            <td>Idioma e moeda</td>
            <td>Inglês; libras e euros; por número de aplicativos</td>
            <td>Português, inglês e espanhol; um preço por empresa</td>
          </tr>
          <tr>
            <td>Para quem</td>
            <td>Financeiro de scaleups de 25 a 150 pessoas</td>
            <td>Donos, gerentes e RH de empresas de 10 a 500 pessoas sem administrador de contas</td>
          </tr>
        </tbody>
      </table>

      <h2>Quando escolher a Cledara</h2>
      <p>
        Se a sua dor principal é o dinheiro: dezenas de assinaturas pagas com cartões de pessoas diferentes, notas
        fiscais que não chegam e renovações surpresa, e você tem alguém no financeiro que vai operar em inglês.
      </p>
      <h2>Quando escolher a Mekovault</h2>
      <p>
        Se a sua dor é que as contas e os acessos continuam abertos depois que alguém saiu, que o gestor não decide a
        tempo o que acontece com os arquivos, que ninguém sabe quais aplicativos leem o Drive, e que tudo isso o RH
        precisa pedir sem ter TI. As assinaturas também são registradas, mas o controle começa na pessoa, não no
        pagamento. Como funciona, em <Link href="/account-governance">Governança de contas</Link>.
      </p>
      <p className="text-sm">Dados da Cledara retirados do site público dela em outubro de 2026; se mudarem, avise e corrigimos.</p>
    </>
  );
}
