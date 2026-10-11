import Link from "@/components/Link";

export const meta = {
  title: "Aplicativos com acesso às contas da sua empresa: como ver, decidir e revogar",
  seoTitle: "Apps com acesso às contas da sua empresa · Mekovault",
  description:
    "Cada pessoa autoriza apps com a conta do Google (Slack, Canva, Apps Script, o celular). Como listar os de toda a empresa, classificar o risco e revogar.",
  question: "Quais aplicativos têm acesso às contas da minha empresa?",
};

export const summary =
  "Cada pessoa da sua empresa autoriza aplicativos com a conta do Google: Slack, Canva, Notion, um complemento do Planilhas, o celular. Esses aplicativos leem Drive, Gmail ou Contatos mesmo depois que a pessoa saiu. O console do Google permite listá-los conta por conta e revogá-los; o que ele não faz é olhar todos juntos, classificar o risco nem avisar quando aparece um novo.";

export const faq = [
  {
    q: "Onde vejo os apps que têm acesso a uma conta do Google?",
    a: "A pessoa vê na própria conta, em Segurança, 'Apps de terceiros com acesso à conta'. O administrador vê no console, na ficha de cada usuário, em 'Aplicativos conectados', e pode revogá-los. Não existe uma visão de toda a empresa no console; é preciso percorrer usuário por usuário ou usar a API.",
  },
  {
    q: "O que é shadow IT?",
    a: "As ferramentas que as pessoas usam para trabalhar sem que a empresa tenha aprovado nem saiba que existem. A forma mais comum hoje é um app autorizado com a conta do Google da empresa. Não é má-fé: são pessoas resolvendo o próprio trabalho. O problema é que ninguém decide se esse app pode ler o Drive.",
  },
  {
    q: "Revogar um app quebra alguma coisa?",
    a: "A pessoa deixa de poder usar esse app com a conta do Google até autorizá-lo de novo. Por isso vale a pena avisar antes, dar um prazo e revogar só quando há uma decisão. Se o app é da empresa (o Slack, por exemplo), é marcado como permitido e não se mexe.",
  },
];

export const related = [
  "offboarding-digital",
  "baja-empleado-google-workspace",
  "gestion-de-accesos-para-pymes",
];

export function Body() {
  return (
    <>
      <h2>O que significa “aplicativo com acesso à conta”</h2>
      <p>
        Quando alguém entra em uma ferramenta com “Continuar com o Google” ou instala um complemento, essa ferramenta
        pede permissões: às vezes só para saber quem é a pessoa (e-mail e nome), às vezes para ler a agenda, às vezes
        para ler e escrever em todo o Drive ou em todo o Gmail. A pessoa aceita, e a partir desse momento o aplicativo
        tem uma chave que continua funcionando mesmo que ela saia da sessão, troque de computador ou deixe a empresa,
        até alguém revogá-la.
      </p>
      <p>
        Em uma empresa de 100 pessoas é normal encontrar entre 300 e 600 autorizações ativas. A maioria é inofensiva
        (entrar no Slack, no Notion, no celular). Umas poucas leem o Drive inteiro ou o Gmail, e ninguém na empresa
        decidiu que isso estava certo.
      </p>

      <h2>Os três níveis de risco</h2>
      <table>
        <thead>
          <tr>
            <th>Nível</th>
            <th>Que permissão pediu</th>
            <th>Exemplos</th>
            <th>O que fazer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Baixo</td>
            <td>Só “entrar com o Google” (nome, e-mail)</td>
            <td>Slack, Notion, Canva, Figma, Zoom</td>
            <td>Permitir se é uma ferramenta da empresa; tolerar se é pessoal e não toca em dados</td>
          </tr>
          <tr>
            <td>Médio</td>
            <td>Agenda, Tarefas, Formulários, arquivos próprios do app</td>
            <td>Calendly, complementos do Planilhas, apps de anotações</td>
            <td>Permitir com responsável; revisar a cada ano</td>
          </tr>
          <tr>
            <td>Alto</td>
            <td>Drive completo, Gmail, Contatos, administração</td>
            <td>Assistentes de e-mail, sincronizadores, scripts, apps desconhecidos</td>
            <td>Decidir com o gestor; revogar se não se justifica</td>
          </tr>
        </tbody>
      </table>

      <h2>Como revisar isso no Google, hoje, na mão</h2>
      <ol>
        <li>No console de administração, abra um usuário e veja “Aplicativos conectados”. Repita para cada pessoa (sim, para cada uma).</li>
        <li>Anote os que pedem Drive, Gmail ou Contatos.</li>
        <li>Pergunte ao gestor de cada pessoa se esse app é de trabalho.</li>
        <li>Revogue os que não se justificam e avise a pessoa.</li>
        <li>Faça de novo no mês que vem, porque as pessoas autorizam apps toda semana.</li>
      </ol>
      <p>
        Você também pode bloquear um app para toda a empresa em Segurança, Controles de API, mas essa decisão é tomada
        por um administrador e não deixa rastro do porquê.
      </p>

      <h2>Como a Mekovault faz</h2>
      <p>
        A Mekovault revisa todas as contas da empresa uma vez por semana (sábado de madrugada), guarda o inventário de
        aplicativos por pessoa com o nível de risco e depois só registra as mudanças. Quando aparece um app novo sem
        política, o gestor direto recebe um aviso com prazo de 5 dias úteis para decidir (permitir, tolerar ou
        bloquear); se não decidir, há um lembrete, um aviso final e a revogação ao fim do dia. Se a pessoa vincular de
        novo, é removido de novo e o gestor fica sabendo. E ao desligar uma conta, todos os aplicativos dela são
        revogados no mesmo passo, o Slack primeiro. Tudo com evidência. É a parte “shadow IT” do{" "}
        <Link href="/recursos/offboarding-digital">offboarding digital</Link>, resolvida sem que o RH precise aprender
        o que é um token.
      </p>
    </>
  );
}
