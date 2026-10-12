import Link from "@/components/Link";

export const meta = {
  title: "Mekovault vs Zluri: a plataforma que o ChatGPT recomenda, comparada com uma feita para PMEs",
  seoTitle: "Mekovault vs Zluri: SaaS management para PMEs",
  description:
    "O Zluri é uma SaaS Management Platform para TI e segurança de grandes empresas, por usuário. A Mekovault faz o ciclo de contas e licenças para PMEs sem TI.",
  question: "Zluri ou Mekovault para uma empresa de 80 pessoas?",
};

export const summary =
  "O Zluri é a plataforma que o ChatGPT recomenda primeiro: descobre aplicativos, controla gastos, automatiza admissões e desligamentos e governa identidades, com centenas de integrações, para equipes de TI e segurança de grandes empresas, em inglês e com preço por usuário. A Mekovault faz o ciclo de contas e licenças para empresas de 10 a 500 pessoas sem TI, em português, com o gestor decidindo e um preço por empresa.";

export const faq = [
  {
    q: "O Zluri serve para uma empresa de 80 pessoas?",
    a: "Pode, mas foi pensado e precificado para empresas maiores: preços por usuário estimados por terceiros em 4 a 8 dólares ao mês, implantação com a equipe deles e configuração pela TI. Para 80 pessoas são milhares de dólares por ano e um projeto.",
  },
  {
    q: "A Mekovault tem tantas integrações quanto o Zluri?",
    a: "Não. A Mekovault se conecta hoje ao Google Workspace e à folha de pagamento (o seu sistema de folha, Buk e Talana hoje); as demais plataformas entram uma a uma e, enquanto isso, ficam como tarefas guiadas com registro. O Zluri publica centenas de conectores; essa é a força dele.",
  },
  {
    q: "Qual atende melhor a auditorias?",
    a: "O Zluri cobre estruturas enterprise (SOX, SOC 2, segregação de funções). A Mekovault guarda o registro de quem pediu, aprovou e executou cada mudança por 365 dias, pensado para ISO 27001 em PMEs, auditorias internas e a LGPD.",
  },
];

export const related = ["que-es-el-control-de-cuentas-y-licencias", "gestion-de-accesos-para-pymes", "que-preguntar-antes-de-contratar"];

export function Body() {
  return (
    <>
      <h2>O que cada um faz</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Zluri</th>
            <th>Mekovault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Categoria</td>
            <td>SaaS Management Platform e governança de identidades (IGA)</td>
            <td>Controle de contas, licenças e assinaturas para PMEs</td>
          </tr>
          <tr>
            <td>Para quem</td>
            <td>TI e segurança de empresas médias e grandes</td>
            <td>Donos, gerentes e RH de empresas de 10 a 500 pessoas sem administrador de contas</td>
          </tr>
          <tr>
            <td>Descoberta de aplicativos</td>
            <td>Extensão de navegador, financeiro, SSO, centenas de conectores</td>
            <td>Aplicativos autorizados com a conta do Google de cada pessoa, revisados toda semana</td>
          </tr>
          <tr>
            <td>Admissões e desligamentos</td>
            <td>Fluxos configuráveis pela TI em muitos aplicativos</td>
            <td>Solicitações com data a partir do RH ou da folha; Google hoje, as demais guiadas</td>
          </tr>
          <tr>
            <td>Decisão do gestor</td>
            <td>Revisões de acesso por campanhas</td>
            <td>Um e-mail com opções para arquivos e e-mail, com lembretes</td>
          </tr>
          <tr>
            <td>Preço</td>
            <td>Por usuário ao mês, sob cotação</td>
            <td>Um preço por empresa, não por usuário; grátis até 20 contas do Google Workspace</td>
          </tr>
          <tr>
            <td>Idioma</td>
            <td>Inglês</td>
            <td>Português, inglês e espanhol</td>
          </tr>
        </tbody>
      </table>

      <h2>Quando escolher o Zluri</h2>
      <p>
        Se você tem mais de 500 pessoas, dezenas de aplicativos críticos com login próprio, uma equipe de TI e
        segurança, e precisa cumprir SOX ou SOC 2 com revisões de acesso formais.
      </p>
      <h2>Quando escolher a Mekovault</h2>
      <p>
        Se você tem entre 10 e 500 pessoas, o seu e-mail é Google Workspace, quem pede as contas é o RH, quer que o
        gestor decida e prefere um preço por empresa em português. O que exigir de qualquer um dos dois, em{" "}
        <Link href="/recursos/que-preguntar-antes-de-contratar">as 21 perguntas antes de contratar</Link>.
      </p>
      <p className="text-sm">Dados do Zluri retirados do site público dele e de estimativas de terceiros em outubro de 2026; se mudarem, avise e corrigimos.</p>
    </>
  );
}
