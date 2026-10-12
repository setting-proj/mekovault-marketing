import Link from "@/components/Link";

export const meta = {
  title: "O que fazer com o e-mail de um funcionário que sai: lei, opções e a política que recomendamos",
  seoTitle: "O e-mail de quem sai da empresa: o que fazer · Mekovault",
  description:
    "A empresa pode ler o e-mail de um ex-funcionário? O que dizem a LGPD e a Justiça do Trabalho, e como redirecionar, delegar ou encerrar a caixa sem risco.",
  question: "O que acontece com o e-mail e os arquivos de quem sai?",
};

export const summary =
  "O e-mail de um funcionário que sai não é apagado nem lido de uma vez: é redirecionado para quem assume os assuntos dele, ativa-se uma resposta automática e, se for preciso revisar conversas em andamento, a caixa é delegada ao gestor. No Brasil, a Justiça do Trabalho aceita que a empresa gerencie esse e-mail quando existe uma política informada, e a LGPD exige que a revisão tenha finalidade clara e seja proporcional.";

export const faq = [
  {
    q: "A empresa pode ler o e-mail corporativo de um ex-funcionário?",
    a: "Pode gerenciá-lo, e revisá-lo de forma proporcional, se existir uma política informada de uso do e-mail. No Brasil, a Justiça do Trabalho tem entendido que o e-mail corporativo é ferramenta de trabalho e que a empresa pode acessá-lo quando a política interna é clara e conhecida; a LGPD soma os princípios de finalidade, necessidade e transparência. Ler toda a caixa por curiosidade não cumpre nenhum dos dois.",
  },
  {
    q: "Por quanto tempo é preciso guardar o e-mail?",
    a: "Não existe um prazo único. Depende das obrigações contratuais, trabalhistas e fiscais da sua empresa. O razoável é uma política escrita: por exemplo, redirecionamento por 90 dias, arquivamento por 2 anos quando houver obrigação, exclusão depois.",
  },
  {
    q: "E se a pessoa usava o e-mail para coisas pessoais?",
    a: "Por isso a política precisa dizer que o e-mail corporativo é da empresa e pode ser gerenciado ao fim da relação de trabalho. E por isso a prática recomendada é redirecionar e delegar, não ler tudo: minimiza o que a empresa vê.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "desvinculacion-chile-finiquito-y-cuentas",
  "suspender-eliminar-o-archivar-usuario-google-workspace",
];

export function Body() {
  return (
    <>
      <h2>O que as pessoas perguntam (e o que a lei responde)</h2>
      <p>
        “A empresa pode manter e acessar a conta de e-mail de um funcionário desligado?” é uma das perguntas mais
        repetidas nos fóruns de RH e jurídicos, e a resposta curta é: sim, com condições. A conta é um recurso da
        empresa; o que a lei protege é a expectativa de privacidade da pessoa. Essa expectativa diminui quando existe uma
        política de uso conhecida e assinada que diz que o e-mail corporativo é da empresa e pode ser gerenciado ao fim da
        relação de trabalho.
      </p>
      <ul>
        <li>
          <strong>Justiça do Trabalho.</strong> O entendimento consolidado é que o e-mail corporativo é uma ferramenta de
          trabalho fornecida pela empresa, e não correspondência pessoal: a empresa pode acessá-lo e gerenciá-lo quando a
          política interna é clara, foi comunicada e o uso do e-mail é profissional.
        </li>
        <li>
          <strong>LGPD.</strong> A Lei Geral de Proteção de Dados exige finalidade clara, necessidade e transparência. O
          que a empresa faz com o e-mail de quem saiu precisa estar informado antes, limitado ao necessário e registrado.
          Redirecionar e ativar uma resposta automática é o aceito; ler a caixa inteira, não.
        </li>
        <li>
          <strong>Se você tem pessoas no exterior.</strong> Na União Europeia, o RGPD e as autoridades de proteção de dados
          exigem informação prévia, finalidade legítima e revisão proporcional. A mesma lógica é um padrão seguro em
          qualquer país.
        </li>
      </ul>
      <p>Isto não é assessoria jurídica: é o resumo do que as fontes públicas dizem e do que vemos funcionar. A sua política, quem revisa é o seu advogado.</p>

      <h2>As três opções técnicas no Google Workspace</h2>
      <ol>
        <li>
          <strong>Resposta automática + redirecionamento.</strong> A opção padrão. Quem escreve recebe um aviso com o novo
          contato e a mensagem chega a essa pessoa. Ninguém entra na caixa.
        </li>
        <li>
          <strong>Delegação da caixa.</strong> O gestor pode abrir a caixa a partir da própria conta, sem senha, para
          fechar conversas em andamento. Fica registrado quem fez. É o proporcional quando há clientes no meio de um
          atendimento.
        </li>
        <li>
          <strong>Alias ou conta genérica.</strong> Se a pessoa cuidava de uma função (vendas, suporte), o endereço vira
          alias de quem a substitui, ou uma conta genérica com responsável. Assim o e-mail deixa de ser de uma pessoa.
        </li>
      </ol>

      <h2>A política que recomendamos (e que você pode copiar)</h2>
      <ul>
        <li>O e-mail corporativo é da empresa e é gerenciado ao fim da relação de trabalho; a pessoa é informada ao assinar o contrato.</li>
        <li>No último dia a conta é bloqueada, a resposta automática é ativada e o e-mail é redirecionado para a pessoa que o gestor decidir.</li>
        <li>O gestor pode delegar a caixa para si por 90 dias para fechar o que está pendente; a senha não é compartilhada.</li>
        <li>Passados 90 dias, a conta é excluída ou arquivada se houver obrigação de guardar; os arquivos já foram transferidos.</li>
        <li>Tudo fica registrado: quem pediu, quem aprovou, o que foi feito e quando.</li>
      </ul>

      <h2>Como a Mekovault faz</h2>
      <p>
        Ao agendar um desligamento, a Mekovault pergunta ao gestor (não à TI) o que fazer com o e-mail e os arquivos,
        com três opções em um e-mail: transferir para alguém, recuperar informações por alguns dias, ou desativar.
        Executa a resposta automática e o redirecionamento na hora da saída, agenda a exclusão e guarda a evidência por
        365 dias. Se a pessoa pedir uma conta genérica para uma função, essa conta nasce com dono e data de revisão. Mais
        detalhes em <Link href="/recursos/baja-empleado-google-workspace">como desligar um funcionário</Link>.
      </p>
    </>
  );
}
