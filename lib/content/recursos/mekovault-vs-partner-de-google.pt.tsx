import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs contratar um parceiro do Google Workspace: licenças e suporte não são o mesmo que operar as contas",
  seoTitle: "Mekovault vs um parceiro do Google Workspace",
  description:
    "O parceiro vende licenças, configura e dá suporte; a Mekovault é a ferramenta com que o RH pede admissões e desligamentos que rodam sozinhos, com registro.",
  question: "O meu parceiro do Google basta ou preciso da Mekovault?",
};

export const summary =
  "Um parceiro ou revendedor do Google Workspace vende as licenças, configura o console e, se você contratar, administra as contas por você como serviço. A Mekovault não vende licenças nem substitui o parceiro: é a ferramenta com que o RH pede as admissões e os desligamentos, que são executados sozinhos, com decisão do gestor e registro. Dá para usar os dois: o parceiro para licenças e suporte técnico, a Mekovault para o dia a dia das contas.";

export const faq = [
  {
    q: "Preciso de um parceiro do Google para usar a Mekovault?",
    a: "Não. A Mekovault se conecta ao seu Google Workspace com um guia de dez minutos. Se você compra as licenças de um parceiro, continua igual: a Mekovault só administra as contas, não o faturamento do Google.",
  },
  {
    q: "O que o parceiro faz que a Mekovault não faz?",
    a: "Vende e fatura as licenças do Google (às vezes com desconto), migra e-mails, configura domínios e segurança, e dá suporte técnico do Google. A Mekovault não faz nada disso.",
  },
  {
    q: "Sou parceiro do Google. Posso oferecer a Mekovault?",
    a: "Sim, existe um programa de parceiros com comissão mensal enquanto o cliente continuar ativo, e a opção de usar a sua marca. Os detalhes estão na página de parceiros.",
  },
];

export const related = ["mekovault-vs-consola-de-google", "que-es-el-control-de-cuentas-y-licencias", "baja-empleado-google-workspace"];

export function Body() {
  return (
    <>
      <h2>O que cada um faz</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Parceiro do Google Workspace</th>
            <th>Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Licenças do Google</td>
            <td>Vende, fatura e renova; às vezes com desconto</td>
            <td>Não vende; mostra quantas você comprou, usa e tem em contas bloqueadas</td>
          </tr>
          <tr>
            <td>Configuração inicial</td>
            <td>Domínios, migração de e-mail, segurança, dispositivos</td>
            <td>Conexão ao seu Workspace já configurado</td>
          </tr>
          <tr>
            <td>Admissões e desligamentos do dia a dia</td>
            <td>Como serviço: alguém do parceiro faz quando você escreve</td>
            <td>O RH pede ou vem do seu sistema de folha (Buk e Talana hoje); executa sozinho na data, sem escrever para ninguém</td>
          </tr>
          <tr>
            <td>Quem decide sobre arquivos e e-mail</td>
            <td>Quem pediu o desligamento, por e-mail ou telefone</td>
            <td>O gestor direto, com opções e lembretes</td>
          </tr>
          <tr>
            <td>As outras plataformas</td>
            <td>Fora do escopo</td>
            <td>Assentos e aplicativos autorizados, por plataforma</td>
          </tr>
          <tr>
            <td>Registro</td>
            <td>E-mails e tickets do parceiro</td>
            <td>Auditoria imutável de 365 dias, por empresa</td>
          </tr>
          <tr>
            <td>Preço</td>
            <td>Incluído nas licenças ou por hora de suporte</td>
            <td>Um preço por empresa ao mês</td>
          </tr>
        </tbody>
      </table>

      <h2>Quando o parceiro basta</h2>
      <p>
        Se você tem poucas pessoas, alguém entra ou sai a cada vários meses, e o parceiro responde no mesmo dia. O
        custo é a dependência: o desligamento acontece quando alguém escreve e quando o parceiro pega o chamado.
      </p>
      <h2>Quando somar a Mekovault</h2>
      <p>
        Se entram e saem pessoas todo mês, se o RH não quer depender de um terceiro para cada admissão, se você quer
        que o gestor decida e fique registro, ou se paga Slack, Zoom ou Figma por pessoa além do Google. Se a sua folha
        é Gupy, Sólides ou TOTVS, o RH registra a admissão ou o desligamento na Mekovault e o resto roda igual. O
        parceiro continua vendendo as licenças; a Mekovault opera as contas. O que fica pela metade quando é feito à
        mão, em <Link href="/recursos/mekovault-vs-consola-de-google">Mekovault vs o console do Google</Link>.
      </p>
    </>
  );
}
