import Link from "@/components/Link";

export const meta = {
  title: "Gestão de acessos para PMEs sem TI: o que você precisa de verdade (e alternativas ao Okta)",
  seoTitle: "Gestão de acessos para PMEs sem TI · Mekovault",
  description:
    "O que é gestão de acessos na linguagem do dono, o que sobra do Okta, JumpCloud ou Rippling para uma empresa de 10 a 500 pessoas, e o que você precisa.",
  question: "Preciso de um sistema de acessos como o Okta para uma PME?",
};

export const summary =
  "Gestão de acessos, na linguagem do dono, é saber quem tem conta em quê, garantir que essa conta seja criada quando a pessoa entra e encerrada quando ela sai, e poder provar isso. Uma empresa de 10 a 500 pessoas sem equipe de TI não precisa de Okta, JumpCloud nem Rippling: precisa que o seu Google Workspace e as suas plataformas sejam governados a partir de Personas.";

export const faq = [
  {
    q: "O que é IAM e eu preciso de um?",
    a: "IAM (gestão de identidades e acessos) é a categoria do Okta, do Microsoft Entra ou do JumpCloud: um diretório central, login único e regras de quem acessa o quê. É para empresas com TI e centenas de aplicações. Se o seu diretório é o Google Workspace e as suas ferramentas abrem 'com o Google', você já tem 80% de um IAM; o que falta é o ciclo de admissões e desligamentos com evidência.",
  },
  {
    q: "Quanto custam Okta, JumpCloud ou Rippling?",
    a: "A Okta publica pacotes de 6 a 17 dólares por usuário ao mês com mínimo anual; a JumpCloud, pacotes de 9 a 13 dólares por usuário; a Rippling cobra por funcionário mais uma plataforma base e exige migrar a folha de pagamento. Para 80 pessoas são milhares de dólares por ano e um projeto de TI. A Mekovault cobra um preço por empresa, sem custo por pessoa.",
  },
  {
    q: "E as plataformas que não permitem automatizar?",
    a: "Elas existem, e nenhuma ferramenta as automatiza de verdade sem o plano corporativo delas. O honesto é transformá-las em tarefas guiadas com responsável, data e evidência. É o que a Mekovault faz com as plataformas marcadas como 'guiadas'.",
  },
];

export const related = [
  "que-es-el-control-de-cuentas-y-licencias",
  "aplicaciones-vinculadas",
  "que-preguntar-antes-de-contratar",
];

export function Body() {
  return (
    <>
      <h2>O que uma empresa de 10 a 500 pessoas precisa de verdade</h2>
      <ol>
        <li><strong>Uma origem:</strong> as admissões e os desligamentos saem do RH (Personas) ou da folha de pagamento, não de um e-mail para a TI.</li>
        <li><strong>Um diretório que manda:</strong> o Google Workspace como fonte da verdade; as outras plataformas se penduram nele.</li>
        <li><strong>Datas:</strong> a conta nasce no dia da admissão e é encerrada no último dia, na hora.</li>
        <li><strong>Decisão do gestor:</strong> para quem vão os arquivos e o e-mail de quem sai.</li>
        <li><strong>Visão de licenças:</strong> quantas você comprou, quantas usa, quantas ficaram em contas bloqueadas.</li>
        <li><strong>Apps autorizados sob controle:</strong> quais aplicações leem o Drive ou o Gmail e quem decidiu isso.</li>
        <li><strong>Evidência:</strong> quem pediu, quem aprovou, o que foi feito, quando. Para um auditor ou para você.</li>
      </ol>
      <p>Repare no que não está na lista: login único, autenticação em dois fatores própria, diretório paralelo, políticas de senha. O Google Workspace já traz tudo isso.</p>

      <h2>Okta, JumpCloud, Rippling, Microsoft Entra: para quem são</h2>
      <table>
        <thead>
          <tr>
            <th>Ferramenta</th>
            <th>Para quem</th>
            <th>O que exige</th>
            <th>O que sobra em uma PME</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Okta</td>
            <td>Empresas com TI e centenas de aplicações</td>
            <td>Mínimo anual, consultoria, um administrador dedicado</td>
            <td>Diretório paralelo, SSO que o Google já oferece</td>
          </tr>
          <tr>
            <td>JumpCloud</td>
            <td>TI de empresas médias e prestadores de serviços</td>
            <td>Agente em cada computador, configuração técnica</td>
            <td>Gestão de dispositivos, RADIUS, LDAP</td>
          </tr>
          <tr>
            <td>Rippling</td>
            <td>Empresas que querem levar folha, RH e TI para um único fornecedor</td>
            <td>Migrar a folha de pagamento e a plataforma base obrigatória</td>
            <td>Trocar de sistema de pessoas para resolver as contas</td>
          </tr>
          <tr>
            <td>Microsoft Entra ID Governance</td>
            <td>Empresas com Microsoft 365 e licenças P1/P2</td>
            <td>Licenças adicionais por usuário, configuração de TI</td>
            <td>Não se aplica se o seu e-mail é Google</td>
          </tr>
          <tr>
            <td>Mekovault</td>
            <td>Empresas de 10 a 500 pessoas com Google Workspace e sem administrador de contas</td>
            <td>Conectar o Google Workspace com um guia; opcionalmente o seu sistema de folha (Buk e Talana hoje)</td>
            <td>Nada: um preço por empresa, sem custo por pessoa</td>
          </tr>
        </tbody>
      </table>

      <h2>Como saber se você está pronto para “mais”</h2>
      <p>
        Se você tem mais de 500 pessoas, vários domínios, aplicações feitas em casa que precisam de login próprio, ou uma
        equipe de TI com tempo, olhe o Okta ou o JumpCloud. Se o seu e-mail é Microsoft 365, o Entra. Se você tem 10 a
        500 pessoas, Google Workspace e alguém do RH que hoje manda e-mail para a TI pedindo contas, o que falta é
        governança do ciclo, não um IAM.
      </p>

      <h2>Como a Mekovault faz</h2>
      <p>
        A Mekovault se conecta ao seu Google Workspace (e opcionalmente ao seu sistema de folha), transforma cada
        admissão, mudança e saída em uma solicitação com data que é executada sozinha, pergunta ao gestor o que só ele
        sabe, mostra as licenças por plataforma, revisa os apps autorizados toda semana e guarda a evidência por 365
        dias. Por um preço por empresa, sem custo por pessoa e sem projeto de implantação. O que uma plataforma não
        permite automatizar fica como tarefa guiada; não vamos dizer que sim quando é não. Mais em{" "}
        <Link href="/recursos/que-es-el-control-de-cuentas-y-licencias">o que é o controle de contas e licenças</Link>.
      </p>
    </>
  );
}
