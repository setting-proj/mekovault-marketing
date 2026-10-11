import Link from "@/components/Link";

export const meta = {
  title: "As 21 perguntas para fazer a qualquer fornecedor antes de contratar, e o que a Mekovault responde",
  seoTitle: "21 perguntas antes de contratar · Mekovault",
  description:
    "A lista que um consultor daria: descobrir softwares, saídas de funcionários, facilidade de uso, preço e segurança. Com a resposta honesta da Mekovault.",
  question: "O que pergunto a qualquer fornecedor antes de contratar?",
};

export const summary =
  "Estas são as 21 perguntas que um consultor faria a qualquer fornecedor de gestão de contas e licenças antes de contratar, agrupadas em cinco blocos: descobrir os softwares, gerir os desligamentos, facilidade de uso, preço e segurança. Ao lado de cada uma, o que a Mekovault responde, incluindo as respostas que são 'ainda não'.";

export const cta = {
  title: "Peça a demonstração com os seus próprios testes",
  desc: "Crie um funcionário de teste, simule o desligamento e veja o que foi fechado, qual licença foi liberada e o que ficou registrado. Grátis por 90 dias, sem cartão.",
};

export const related = [
  "que-es-el-control-de-cuentas-y-licencias",
  "offboarding-digital",
  "mekovault-vs-factorial",
];

type Row = { q: string; a: string; state: "si" | "parcial" | "no" };

const BLOCKS: Array<{ title: string; rows: Row[] }> = [
  {
    title: "1. Descobrir todos os softwares",
    rows: [
      { q: "Detecta softwares que pagamos mesmo que não estejam em um inventário?", a: "Sim para o que entra com a conta do Google da empresa: toda semana lista os aplicativos autorizados por cada pessoa. O que é pago com cartão e não toca no Google é registrado em Compras, com dono e nota fiscal, mas não é descoberto sozinho.", state: "parcial" },
      { q: "Identifica assinaturas pagas com cartões de áreas diferentes?", a: "Só se forem registradas em Compras. Não lemos as faturas do cartão.", state: "parcial" },
      { q: "Mostra o custo mensal e anual de cada software?", a: "Sim, em Licenças para as plataformas conectadas e em Compras para as assinaturas registradas, com total por moeda.", state: "si" },
      { q: "Detecta contas sem uso e licenças que podem ser eliminadas?", a: "Sim: licenças compradas, atribuídas e em contas bloqueadas, por plataforma, e o que mudar na renovação.", state: "si" },
    ],
  },
  {
    title: "2. Gerir os desligamentos de funcionários",
    rows: [
      { q: "Se eu demitir alguém amanhã, uma única ação retira todos os acessos?", a: "Uma solicitação de desligamento: bloqueio no Google na hora da saída, e-mail redirecionado, apps autorizados revogados, licença marcada, exclusão agendada. As plataformas conectadas são fechadas no mesmo passo; as guiadas viram tarefa com responsável.", state: "si" },
      { q: "Suspende ou exclui contas do Google Workspace, Slack, Zoom e Canva?", a: "Google Workspace: sim, hoje. Slack, Zoom e Canva: estão sendo adicionados um a um; enquanto isso são tarefas guiadas com evidência.", state: "parcial" },
      { q: "Cancela a assinatura ou só desativa o usuário?", a: "Desativa o usuário e libera o assento. Nenhuma plataforma deixa um terceiro reduzir o que foi contratado: dizemos exatamente o que reduzir e quando (no plano anual, na renovação).", state: "parcial" },
      { q: "Reatribui licenças e preserva arquivos e e-mails antes de fechar?", a: "Sim: o gestor decide por e-mail para quem vão os arquivos e o e-mail; a licença é liberada ou reatribuída ao próximo contratado.", state: "si" },
      { q: "O que acontece com os aplicativos que não podem ser desconectados automaticamente?", a: "Viram tarefa guiada com responsável, data e evidência. Não dizemos sim quando é não.", state: "si" },
    ],
  },
  {
    title: "3. Facilidade de uso",
    rows: [
      { q: "Consigo usar sem conhecimento técnico?", a: "Sim. O diretor ou alguém do administrativo conecta seguindo um guia, e a partir daí quem usa é Pessoas. Se preferir, conectamos por videochamada sem custo.", state: "si" },
      { q: "Recebo alertas antes das renovações e quando há contas de ex-funcionários?", a: "Sim: aviso antes da renovação com a quantidade a reduzir, e aviso quando um desligamento fica pendente ou precisa de atenção.", state: "si" },
      { q: "O painel e os relatórios estão em português?", a: "Sim: português do Brasil, inglês e espanhol do Chile, da Argentina e do México.", state: "si" },
      { q: "Quanto tempo leva para implantar e quem configura?", a: "Dez minutos para conectar o Google Workspace; a primeira solicitação no mesmo dia. Não existe projeto de implantação.", state: "si" },
    ],
  },
  {
    title: "4. Preço e condições",
    rows: [
      { q: "Cobra por pessoa, por aplicativo ou por quantidade de contas?", a: "Por empresa. Um preço mensal pelos módulos que você usa, sem custo por pessoa.", state: "si" },
      { q: "Há custos adicionais de implantação, conectores ou suporte?", a: "Não.", state: "si" },
      { q: "Posso contratar mês a mês ou exige contrato anual?", a: "Mês a mês. Grátis por 90 dias sem cartão; cancela quando quiser.", state: "si" },
      { q: "Conseguem demonstrar quanto eu economizo e como isso é calculado?", a: "Licenças mostra o que se paga em contas bloqueadas e não atribuídas; a auditoria registra cada licença liberada. A calculadora dá uma estimativa antes de conectar.", state: "si" },
    ],
  },
  {
    title: "5. Segurança e responsabilidade",
    rows: [
      { q: "Quais permissões precisa para acessar meus aplicativos?", a: "As de administrar usuários, grupos, licenças e aplicativos autorizados no Google Workspace. Não lê e-mails nem arquivos e não pede permissão para isso.", state: "si" },
      { q: "Quem pode autorizar um desligamento e como cada ação é registrada?", a: "Os papéis que você definir; cada solicitação diz quais papéis podem pedi-la. Tudo fica em uma auditoria que não pode ser apagada, por 365 dias, com download.", state: "si" },
      { q: "Onde os dados ficam guardados e como são protegidos?", a: "Dados separados por empresa, credenciais criptografadas com auditoria de cada uso, sessões com MFA. Detalhes em Segurança e arquitetura.", state: "si" },
      { q: "O que acontece se a ferramenta falhar ou não conseguir fechar uma conta?", a: "A solicitação fica em 'precisa de atenção' com o motivo e avisa; nada é dado como feito sem confirmação da plataforma. Um bloqueio executado pode ser desfeito em até 60 minutos.", state: "si" },
    ],
  },
];

const LABEL = { si: "Sim", parcial: "Em parte", no: "Ainda não" } as const;

export function Body() {
  return (
    <>
      <p>
        A lista vem do que consultores e IAs respondem quando o dono de uma PME pergunta o que exigir. Nós a usamos
        contra nós mesmos: onde a resposta é “em parte”, dizemos isso. Copie as perguntas e faça-as a qualquer
        fornecedor, inclusive à Mekovault.
      </p>
      {BLOCKS.map((b) => (
        <section key={b.title}>
          <h2>{b.title}</h2>
          <table>
            <thead>
              <tr>
                <th>Pergunta</th>
                <th>Mekovault</th>
                <th>Detalhe</th>
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r) => (
                <tr key={r.q}>
                  <td>{r.q}</td>
                  <td>
                    <strong>{LABEL[r.state]}</strong>
                  </td>
                  <td>{r.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}

      <h2>Os cinco testes que você deveria exigir em uma demonstração</h2>
      <ol>
        <li>Criar um funcionário de teste e atribuir a ele e-mail, grupos e licença.</li>
        <li>Simular o desligamento e verificar quais acessos são retirados sozinhos e a que horas.</li>
        <li>Verificar que a licença fica livre e o que a ferramenta diz sobre a renovação.</li>
        <li>Encontrar um aplicativo autorizado com essa conta que não estava em nenhum inventário.</li>
        <li>Mostrar a auditoria: quem pediu, quem aprovou, o que foi feito, quando.</li>
      </ol>
      <p>
        E a pergunta que resume tudo: “se amanhã uma pessoa sair, vocês conseguem me provar que os acessos dela foram
        fechados, as licenças foram recuperadas e o que já não precisamos foi cancelado, sem que eu tenha que correr
        atrás de cinco pessoas?”. O que a Mekovault faz sozinha, o que fica guiado e o que ainda não existe, em{" "}
        <Link href="/platforms">Plataformas</Link>.
      </p>
    </>
  );
}
