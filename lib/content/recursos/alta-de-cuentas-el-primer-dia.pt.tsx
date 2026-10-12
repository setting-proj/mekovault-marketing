import Link from "@/components/Link";

export const meta = {
  title: "Criação do e-mail corporativo de quem entra: pronto no primeiro dia, sem chamado para a TI",
  seoTitle: "Criar o e-mail corporativo do novo funcionário · Mekovault",
  description:
    "Como criar a conta do Google Workspace de quem entra com grupos, unidade, alias e licença no dia da admissão, pedida em Pessoas e sem passar pela TI.",
  question: "Como crio a conta de quem entra sem passar pela TI?",
};

export const summary =
  "A conta de e-mail de quem entra deveria existir no primeiro dia, logo cedo, com o nome escrito certo, os grupos da área, a unidade correta e a licença que corresponde ao cargo. Para isso, o dado precisa sair de Pessoas (ou da folha de pagamento) antes da admissão, e não de um chamado para a TI na manhã em que a pessoa chega.";

export const steps = [
  { name: "Registrar a admissão com data", text: "Pessoas cadastra nome, e-mail pessoal, cargo, área, gestor e data de admissão assim que o contrato é assinado." },
  { name: "Definir o e-mail", text: "nome.sobrenome no domínio da empresa; se já existir, o alias é decidido antes do primeiro dia, não no próprio dia." },
  { name: "Atribuir grupos, unidade e licença", text: "Por área: os grupos de e-mail, a unidade organizacional e o tipo de licença saem de um modelo, não da memória." },
  { name: "Criar a conta no dia da admissão", text: "Logo cedo, com senha temporária enviada ao e-mail pessoal e troca obrigatória no primeiro acesso." },
  { name: "Registrar a evidência", text: "Quem pediu, quando foi criada e com o quê: para a auditoria e para o dia em que essa pessoa sair." },
];

export const faq = [
  {
    q: "Preciso de alguém da TI para criar a conta?",
    a: "Não. O console do Google permite que qualquer administrador crie usuários, e a Mekovault faz isso sozinha a partir do cadastro em Pessoas. O que precisa de decisão é o padrão: como os e-mails são escritos, quais grupos cada área tem e qual licença corresponde a cada cargo.",
  },
  {
    q: "O que acontece se o e-mail já existir?",
    a: "Se for a mesma pessoa voltando, a conta anterior é reativada com os grupos dela. Se for outra pessoa com o mesmo nome, define-se um alias ou uma variante antes do primeiro dia. A Mekovault detecta isso ao registrar a admissão e pergunta.",
  },
  {
    q: "E as outras plataformas (Slack, Zoom, Figma)?",
    a: "A conta do Google é a base; com ela a pessoa entra na maioria das ferramentas. Os assentos pagos por pessoa são atribuídos conforme o cargo; a Mekovault diz quais correspondem e atribui os que a plataforma permite.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "mekovault-vs-consola-de-google",
  "gestion-de-accesos-para-pymes",
];

export function Body() {
  return (
    <>
      <h2>O que acontece quando a admissão é um chamado</h2>
      <p>
        A pessoa chega às 9h. O gestor escreve para a TI ou para quem tem a senha de administrador. A conta é criada às
        11h30, com o sobrenome errado porque foi copiado de um chat. Ela não está no grupo da área, então os e-mails da
        equipe não chegam. A licença é a que estava sobrando, não a que corresponde ao cargo. O primeiro dia dessa pessoa
        foi esperar. E seis meses depois, quando ela sai, ninguém sabe o que ela tinha.
      </p>

      <h2>O padrão que se decide uma única vez</h2>
      <ul>
        <li><strong>Formato do e-mail:</strong> nome.sobrenome, ou inicial e sobrenome. Sem números nem espaços. O que fazer quando repete.</li>
        <li><strong>Grupos por área:</strong> vendas@, operacoes@, todos@. Cada área tem a sua lista e cada admissão entra nela.</li>
        <li><strong>Unidade organizacional:</strong> por área ou por unidade física; define quais políticas de segurança se aplicam.</li>
        <li><strong>Licença por cargo:</strong> quem precisa de Business Standard e quem precisa de Starter; quem precisa de assento no Slack, no Zoom ou no Figma.</li>
        <li><strong>Dados mínimos:</strong> nome, e-mail pessoal para a senha temporária, cargo (opcional), data de admissão no formato do Brasil (DD/MM/AAAA).</li>
      </ul>

      <h2>O dia da admissão, passo a passo</h2>
      <ol>
        <li>Logo cedo, a conta é criada com o formato combinado.</li>
        <li>Grupos, unidade e licença são atribuídos conforme o modelo da área.</li>
        <li>A pessoa recebe no e-mail pessoal o novo endereço e uma senha temporária; no primeiro acesso ela troca.</li>
        <li>Os assentos das plataformas que correspondem ao cargo são atribuídos (ou ficam como tarefa para o responsável).</li>
        <li>Fica registrado quem pediu, quando foi criada e com o quê.</li>
      </ol>

      <h2>Como a Mekovault faz</h2>
      <p>
        A admissão é pedida a partir do RH com um formulário que valida nome, e-mail pessoal, cargo e data (no
        formato do Brasil), mostra o e-mail que será criado e permite editá-lo, e detecta se já existe. Se o seu sistema
        de folha de pagamento estiver conectado (<Link href="/conectores/buk">Buk</Link> e{" "}
        <Link href="/conectores/talana">Talana</Link> hoje), a admissão chega sozinha com a data. No dia da admissão a
        conta é criada sozinha com grupos, unidade e licença por área, os assentos das plataformas conectadas são
        atribuídos, e tudo fica na auditoria. Se o contrato tiver data de término (temporário ou estágio, por exemplo), o
        desligamento fica agendado desde a admissão.
      </p>
    </>
  );
}
