import Link from "@/components/Link";

export const meta = {
  title: "Offboarding digital: a lista de contas e acessos que precisam ser fechados quando alguém sai",
  seoTitle: "Checklist de offboarding digital · Mekovault",
  description:
    "Checklist de offboarding de contas, licenças, apps conectados, senhas compartilhadas e assinaturas, com quem faz cada item e quando. Para imprimir.",
  question: "Quais contas e acessos precisam ser fechados quando alguém sai?",
};

export const summary =
  "O offboarding digital é a parte do desligamento de um funcionário que ninguém vê: fechar o e-mail corporativo, os acessos a cada plataforma, os apps que ele autorizou com a conta, as senhas compartilhadas que conhecia e as assinaturas que pagava. Esta lista cobre as 18 coisas que precisam ser fechadas, quem faz e quando, e quais podem ser feitas sozinhas.";

export const faq = [
  {
    q: "Qual é a diferença entre offboarding e rescisão?",
    a: "A rescisão é o trâmite trabalhista: aviso prévio, acerto rescisório, devolução de equipamentos. O offboarding é todo o processo de desligamento, e o offboarding digital é a parte de contas, acessos e assinaturas. Na maioria das empresas o trâmite trabalhista é bem feito e a parte digital fica pela metade.",
  },
  {
    q: "Quem deveria ser responsável pelo offboarding digital?",
    a: "Quem sabe que a pessoa vai sair: Pessoas ou RH. A TI executa, se existir; o gestor direto decide o que acontece com os arquivos e o e-mail. O erro é a responsabilidade ficar repartida e ninguém fechar o ciclo.",
  },
  {
    q: "Quanto tempo depois da saída os ex-funcionários ainda têm acesso?",
    a: "Os estudos publicados falam de um terço dos ex-funcionários com acesso a arquivos do empregador anterior, e de acessos que duram semanas ou meses. O dado da sua empresa é o que importa: revise as contas suspensas e os apps autorizados este mês.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "aplicaciones-vinculadas",
  "licencias-que-sigues-pagando",
  "desvinculacion-chile-finiquito-y-cuentas",
];

export function Body() {
  return (
    <>
      <h2>A lista completa</h2>
      <p>
        Marque o que se aplica à sua empresa. “Sozinha” significa que uma ferramenta pode fazer sem que ninguém entre em
        um console; “guiada” significa que alguém precisa fazer, mas pode receber a tarefa com data e evidência.
      </p>
      <h3>No último dia, na hora da saída</h3>
      <ol>
        <li><strong>Bloquear a conta de e-mail</strong> (Google Workspace): encerrar sessões, invalidar a senha. Sozinha.</li>
        <li><strong>Resposta automática e redirecionamento do e-mail</strong> para quem o gestor decidir. Sozinha.</li>
        <li><strong>Revogar os aplicativos autorizados com essa conta</strong> (Slack, Canva, Apps Script, o celular). Sozinha.</li>
        <li><strong>Desativar no Slack, Zoom, Teams</strong> e nas demais plataformas com assento. Sozinha onde a plataforma permite; guiada nas outras.</li>
        <li><strong>Remover de grupos, listas e agendas compartilhadas.</strong> Sozinha.</li>
        <li><strong>Trocar as senhas compartilhadas</strong> que a pessoa conhecia (contas genéricas, redes sociais, fornecedores). Guiada.</li>
        <li><strong>Recuperar ou apagar o equipamento</strong> (notebook, celular): encerrar sessões remotamente. Guiada.</li>
      </ol>
      <h3>Na primeira semana</h3>
      <ol start={8}>
        <li><strong>Transferir a propriedade do Drive</strong> e os eventos da agenda para a pessoa que o gestor decidir. Sozinha.</li>
        <li><strong>Delegar a caixa de entrada</strong> ao gestor se houver conversas em andamento, em vez de compartilhar a senha. Sozinha.</li>
        <li><strong>Reatribuir as contas genéricas</strong> que a pessoa administrava (vendas@, suporte@) a um novo responsável. Guiada.</li>
        <li><strong>Reatribuir as assinaturas pagas com o cartão ou no nome dela</strong> (domínios, ferramentas, SaaS). Guiada.</li>
        <li><strong>Liberar ou reatribuir a licença</strong> de cada plataforma; no plano anual, anotar para a renovação. Sozinha no Google; guiada nas outras.</li>
      </ol>
      <h3>Aos 30 dias</h3>
      <ol start={13}>
        <li><strong>Excluir ou arquivar a conta</strong> de e-mail, com os arquivos já transferidos. Sozinha, com aviso prévio.</li>
        <li><strong>Confirmar que nenhum assento continua atribuído</strong> no Slack, Zoom, Figma, Adobe, Canva. Sozinha onde há leitura; guiada no resto.</li>
        <li><strong>Verificar que os apps autorizados não voltaram</strong> (a pessoa pode vincular de novo com outra conta). Sozinha.</li>
      </ol>
      <h3>Sempre</h3>
      <ol start={16}>
        <li><strong>Deixar evidência</strong>: quem pediu, quem aprovou, o que foi feito e quando, em cada item. Sozinha.</li>
        <li><strong>Avisar quem precisa saber</strong>: gestor, Pessoas, administrativo, e a própria pessoa se houver reativação temporária. Sozinha.</li>
        <li><strong>Revisar a política</strong> uma vez por ano: prazos de redirecionamento, arquivamento e exclusão. Guiada.</li>
      </ol>

      <h2>O que mais se faz errado</h2>
      <ul>
        <li>Fechar o e-mail e achar que fechou tudo. As outras plataformas não ficam sabendo.</li>
        <li>Deixar que a decisão sobre os arquivos seja de quem executa, e não do gestor.</li>
        <li>Suspender “por via das dúvidas” e pagar essa licença por seis meses.</li>
        <li>Não revogar os apps que a pessoa autorizou com a conta: eles continuam lendo Drive ou Gmail depois da saída.</li>
        <li>Não ter onde olhar o que foi feito. Quando o auditor ou o diretor pergunta, é preciso reconstruir a partir de e-mails.</li>
      </ul>

      <h2>Como a Mekovault faz</h2>
      <p>
        Dos 18 itens, a Mekovault faz sozinha os que dizem “sozinha” no Google Workspace e nas plataformas conectadas,
        e transforma os “guiados” em tarefas com responsável, data e evidência. O desligamento é pedido por Pessoas ou
        chega da folha de pagamento (Gupy, Sólides, Feedz, Senior, TOTVS), é agendado para o último dia e executado
        sozinho; o gestor decide por e-mail o que acontece com arquivos e e-mail; os apps autorizados são revogados; a
        exclusão fica agendada para 30 dias com opção de desfazer; e tudo fica na auditoria por 365 dias. Se quiser a
        lista para imprimir, ela está no fim de{" "}
        <Link href="/recursos/que-preguntar-antes-de-contratar">as 21 perguntas antes de contratar</Link>.
      </p>
    </>
  );
}
