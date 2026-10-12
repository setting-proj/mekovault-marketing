import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs fazer à mão no console do Google: o que o console não faz sozinho",
  seoTitle: "Mekovault vs o console de administração do Google",
  description:
    "O console do Google faz tudo, mas não fica sabendo que alguém saiu. O que fica pela metade quando um administrador faz à mão e o que muda com a Mekovault.",
  question: "O console de administração do Google não basta?",
};

export const summary =
  "O console de administração do Google pode fazer tudo o que a Mekovault faz no Google Workspace: criar, suspender, transferir, excluir. O que ele não pode é ficar sabendo que alguém entrou ou saiu, fazer isso no dia e na hora certos sem que um administrador lembre, perguntar ao gestor, olhar as outras plataformas nem deixar um registro legível. A Mekovault não substitui o console: ela o opera por você.";

export const faq = [
  {
    q: "A Mekovault precisa de permissões de superadministrador?",
    a: "Precisa de uma conta de serviço com permissões para administrar usuários, grupos, licenças e aplicativos autorizados. Não lê e-mails nem arquivos. Cada uso dessa credencial fica auditado.",
  },
  {
    q: "E se eu preferir continuar fazendo à mão?",
    a: "Pode. Este guia serve igualmente como checklist. A diferença aparece quando a pessoa que faz à mão está de férias, sai da empresa ou esquece de excluir a conta depois de 30 dias.",
  },
  {
    q: "Posso continuar usando o console depois de conectar a Mekovault?",
    a: "Sim. A Mekovault lê o que você mudar no console na próxima sincronização. O ideal é que admissões e desligamentos passem pela Mekovault para ficarem com data, decisão e registro.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "alta-de-cuentas-el-primer-dia",
  "mekovault-vs-factorial",
];

export function Body() {
  return (
    <>
      <h2>A mesma coisa, feita à mão e feita com a Mekovault</h2>
      <table>
        <thead>
          <tr>
            <th>Situação</th>
            <th>À mão no console</th>
            <th>Com a Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alguém entra na segunda-feira</td>
            <td>Alguém fica sabendo (às vezes na própria segunda), cria a conta, chuta grupos e licença</td>
            <td>O RH ou o seu sistema de folha (Buk e Talana hoje) registra a admissão; a conta é criada na segunda logo cedo com grupos, unidade e licença da área</td>
          </tr>
          <tr>
            <td>Alguém sai na sexta às 18h</td>
            <td>O administrador suspende quando pode; às vezes na segunda</td>
            <td>Bloqueada na sexta às 18h, com e-mail redirecionado e resposta automática</td>
          </tr>
          <tr>
            <td>Para quem vão os arquivos</td>
            <td>O administrador decide, ou ninguém</td>
            <td>O gestor decide por e-mail; dois lembretes se não responder</td>
          </tr>
          <tr>
            <td>A licença</td>
            <td>Continua atribuída à conta suspensa; descobre-se na fatura</td>
            <td>Fica marcada para liberar; aviso antes da renovação com a quantidade a reduzir</td>
          </tr>
          <tr>
            <td>Excluir depois de 30 dias</td>
            <td>Se alguém lembrar</td>
            <td>Programado, com aviso prévio e opção de desfazer</td>
          </tr>
          <tr>
            <td>Slack, Zoom, Figma</td>
            <td>Outro console, outro dia, outra pessoa</td>
            <td>Na mesma solicitação: as conectadas são encerradas e as demais viram tarefa com responsável</td>
          </tr>
          <tr>
            <td>Aplicativos autorizados com a conta</td>
            <td>Usuário por usuário, se alguém souber onde olhar</td>
            <td>Revisão semanal da empresa inteira, risco, decisão do gestor</td>
          </tr>
          <tr>
            <td>A pessoa volta por 5 dias</td>
            <td>Reativar, lembrar de suspender de novo</td>
            <td>Reativação temporária com aprovação do gestor; bloqueia sozinha ao vencer</td>
          </tr>
          <tr>
            <td>O auditor pergunta o que foi feito</td>
            <td>Registro do console, técnico, misturado com tudo</td>
            <td>Auditoria legível: quem pediu, quem aprovou, o que foi feito, quando; 365 dias</td>
          </tr>
          <tr>
            <td>Quem pode fazer</td>
            <td>Quem tiver a senha de administrador</td>
            <td>Os papéis que você definir: o RH pede, o gestor decide, o Suporte resolve</td>
          </tr>
        </tbody>
      </table>

      <h2>O que o console faz melhor</h2>
      <p>
        Tudo o que é excepcional: mudar a configuração de segurança, criar unidades organizacionais novas, migrar
        domínios, definir políticas de dispositivos. A Mekovault não mexe nisso. Ela cuida do repetitivo que acontece
        toda vez que alguém entra, muda ou sai, que é onde se perdem licenças e acessos.
      </p>

      <h2>Como convivem</h2>
      <p>
        Você conecta o Google Workspace com um guia de dez minutos. A partir daí, admissões e desligamentos são pedidos
        na Mekovault (ou chegam do seu sistema de folha, Buk e Talana hoje; se a sua folha é Gupy, Sólides ou TOTVS, o
        RH registra na Mekovault e o resto funciona igual) e o console fica para o excepcional. Se alguém mudar algo à
        mão, a Mekovault vê na próxima sincronização. Como cada conta é governada, em{" "}
        <Link href="/account-governance">Governança de contas</Link>; o que cada plataforma faz, em{" "}
        <Link href="/platforms">Plataformas</Link>.
      </p>
    </>
  );
}
