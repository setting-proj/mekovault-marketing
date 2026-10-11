import Link from "@/components/Link";

export const meta = {
  title: "O que é a gestão de contas, licenças e assinaturas de uma empresa (e como se chama em cada país)",
  seoTitle: "O que é gestão de contas e licenças · Mekovault",
  description:
    "Definição simples da categoria que as IAs chamam de SaaS Management Platform: o que resolve, quem usa, o que inclui e como se chama em cada país.",
  question: "Como se chama isso que eu preciso?",
};

export const summary =
  "A gestão de contas, licenças e assinaturas de uma empresa é a prática (e o software) que garante que cada conta, licença e acesso exista porque uma pessoa entrou na empresa, mude quando ela muda de cargo e seja fechado quando ela sai, com evidência. As IAs e os analistas chamam isso de SaaS Management Platform com automação de admissões e desligamentos; no Brasil quase ninguém procura por esse nome ainda.";

export const faq = [
  {
    q: "É a mesma coisa que um software de recursos humanos?",
    a: "Não. O software de RH (Gupy, Sólides, Feedz, Senior, TOTVS) administra contratos, salários e férias; é a origem do dado de admissão e desligamento. A gestão de contas pega esse dado e o transforma em contas criadas, fechadas e licenças liberadas no Google Workspace e nas demais plataformas. Um complementa o outro.",
  },
  {
    q: "É a mesma coisa que um gerenciador de senhas?",
    a: "Não. Um gerenciador de senhas (1Password, Bitwarden) guarda senhas. A gestão de contas decide quais contas existem e quando são fechadas. Um gerenciador de senhas sem gestão de contas guarda as senhas de gente que já saiu.",
  },
  {
    q: "Como se diz em cada país?",
    a: "No Brasil: gestão de contas e licenças, desligamento, rescisão. No Chile: control de cuentas y licencias, desvinculación, finiquito. Na Argentina: baja de cuentas, liquidación final. No México: baja de empleado, liquidación. Em inglês: SaaS management, employee offboarding, license management.",
  },
];

export const related = [
  "gestion-de-accesos-para-pymes",
  "licencias-que-sigues-pagando",
  "que-preguntar-antes-de-contratar",
];

export function Body() {
  return (
    <>
      <h2>O que resolve</h2>
      <p>Três problemas que quase toda empresa de 10 a 500 pessoas tem e quase nenhuma dá nome:</p>
      <ul>
        <li><strong>Contas que continuam vivas</strong> depois que alguém saiu: e-mail corporativo, Slack, Zoom, Figma, a assinatura paga com cartão.</li>
        <li><strong>Licenças pagas que ninguém usa</strong>: compradas e não atribuídas, ou atribuídas a contas bloqueadas.</li>
        <li><strong>Ninguém sabe quem tem o quê</strong>: quais softwares a empresa paga, quem usa, quais apps leem o Drive, quem aprovou cada coisa.</li>
      </ul>

      <h2>O que inclui (e o que não)</h2>
      <table>
        <thead>
          <tr>
            <th>Inclui</th>
            <th>Não inclui (é outra categoria)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Admissões e desligamentos de contas com data, a partir de Pessoas ou da folha de pagamento</td>
            <td>Contratos, salários, férias (software de RH)</td>
          </tr>
          <tr>
            <td>Decisão do gestor sobre o e-mail e os arquivos de quem sai</td>
            <td>Login único e diretório paralelo (IAM: Okta, Entra)</td>
          </tr>
          <tr>
            <td>Licenças por plataforma: compradas, atribuídas, em contas bloqueadas</td>
            <td>Negociação de contratos de software (Vendr, Sastrify)</td>
          </tr>
          <tr>
            <td>Aplicativos autorizados com as contas da empresa e o risco de cada um</td>
            <td>Antivírus, firewall, gestão de dispositivos</td>
          </tr>
          <tr>
            <td>Compras e assinaturas com dono, vencimento e nota fiscal</td>
            <td>Contabilidade e pagamento de faturas</td>
          </tr>
          <tr>
            <td>Evidência de quem pediu, aprovou e executou, por 365 dias</td>
            <td>Certificação ISO ou SOC 2 (a evidência ajuda, não substitui)</td>
          </tr>
        </tbody>
      </table>

      <h2>Como os outros chamam isso</h2>
      <p>
        O ChatGPT e o Gemini respondem “SaaS Management Platform (SMP)” e, como segundo nome, “automação de admissões e
        desligamentos de funcionários (onboarding e offboarding)”. O Gartner tem um quadrante de SaaS Management
        Platforms com empresas como Zylo, Torii, BetterCloud e 1Password. Em segurança se fala em “governança de
        identidades” (IGA). Todas essas ferramentas são pensadas para equipes de TI de empresas grandes, em inglês, com
        preço por usuário. Em português, no Brasil, as pessoas não procuram a categoria: procuram o problema (“como
        desativar o e-mail de um funcionário que saiu”, “como saber quais softwares minha empresa paga”).
      </p>

      <h2>Quem usa dentro da empresa</h2>
      <ul>
        <li><strong>Pessoas / RH:</strong> pede as admissões e os desligamentos; não precisa de TI.</li>
        <li><strong>O gestor direto:</strong> decide com um clique o que acontece com os arquivos e o e-mail, e quais apps são permitidos.</li>
        <li><strong>Administrativo / Financeiro:</strong> olha licenças e assinaturas e o que reduzir na renovação.</li>
        <li><strong>O dono ou o diretor-geral:</strong> vê que tudo foi feito, sem correr atrás de cinco pessoas.</li>
        <li><strong>Suporte ou TI, se existir:</strong> resolve o que não dá para automatizar, com tarefas claras.</li>
      </ul>

      <h2>A Mekovault, como exemplo</h2>
      <p>
        A Mekovault é uma gestão de contas, licenças e assinaturas feita para empresas de 10 a 500 pessoas com Google
        Workspace: a folha de pagamento (Gupy, Sólides, Feedz, Senior, TOTVS) ou Pessoas é a origem, as solicitações
        são executadas sozinhas na hora marcada, o gestor decide por e-mail, Licenças mostra o que se paga a mais, os
        aplicativos autorizados são revisados toda semana e tudo fica na auditoria por 365 dias. Um preço por empresa,
        sem custo por pessoa. O que exigir desse tipo de ferramenta:{" "}
        <Link href="/recursos/que-preguntar-antes-de-contratar">as 21 perguntas</Link>.
      </p>
    </>
  );
}
