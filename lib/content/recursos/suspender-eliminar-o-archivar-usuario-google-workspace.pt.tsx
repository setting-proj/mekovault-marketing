import Link from "@/components/Link";

export const meta = {
  title: "Suspender, excluir ou arquivar um usuário do Google Workspace: qual continua sendo cobrado",
  seoTitle: "Suspender ou excluir usuário do Google Workspace · Mekovault",
  description:
    "As três opções do console do Google comparadas: o que cada uma mantém, quanto custa, quando dá para desfazer e qual convém em cada tipo de desligamento.",
  question: "Suspender ou excluir o usuário? Qual para de cobrar?",
};

export const summary =
  "Suspender mantém tudo e continua sendo cobrado igual a uma conta ativa. Excluir para de cobrar (no plano flexível), mas apaga o que você não transferiu, com 20 dias para se arrepender. Arquivar mantém e-mail e arquivos a um custo menor. Para uma saída normal: suspender no último dia, transferir, e excluir ou arquivar depois de 30 dias.";

export const faq = [
  {
    q: "A conta suspensa continua recebendo e-mail?",
    a: "Sim. O e-mail entra na caixa, mas ninguém lê e ninguém responde. Por isso é preciso ativar uma resposta automática e um encaminhamento, ou delegar a caixa ao gestor.",
  },
  {
    q: "O que acontece com os arquivos compartilhados de um usuário excluído?",
    a: "Se eram de propriedade dele e não foram transferidos, desaparecem para todos com quem estavam compartilhados. Transfira a propriedade no console antes de excluir.",
  },
  {
    q: "Arquivar serve para uma pessoa que saiu?",
    a: "Sim, é a opção para manter e-mail e arquivos sem pagar uma licença completa, por exemplo por obrigações legais ou trabalhistas. Exige licenças de usuário arquivado na sua edição e não substitui a transferência dos arquivos para quem continua trabalhando.",
  },
];

export const related = [
  "baja-empleado-google-workspace",
  "licencias-que-sigues-pagando",
  "correo-del-que-se-va",
];

export function Body() {
  return (
    <>
      <h2>As três opções, comparadas</h2>
      <table>
        <thead>
          <tr>
            <th>O que acontece com…</th>
            <th>Suspender</th>
            <th>Excluir</th>
            <th>Arquivar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>O acesso</td>
            <td>É cortado: sessões encerradas, não consegue entrar</td>
            <td>É cortado</td>
            <td>É cortado</td>
          </tr>
          <tr>
            <td>O e-mail</td>
            <td>Continua chegando; ninguém lê</td>
            <td>Volta para quem enviou; o que não foi exportado se perde</td>
            <td>É mantido, consultável pelo administrador</td>
          </tr>
          <tr>
            <td>Drive e Agenda</td>
            <td>São mantidos</td>
            <td>Se perdem se a propriedade não foi transferida</td>
            <td>São mantidos</td>
          </tr>
          <tr>
            <td>A licença</td>
            <td>Continua atribuída: <strong>é cobrada igual</strong></td>
            <td>Fica livre; no plano anual continua contratada até a renovação</td>
            <td>Passa a licença de usuário arquivado, mais barata</td>
          </tr>
          <tr>
            <td>Desfazer</td>
            <td>Reativar quando quiser</td>
            <td>Restaurar até 20 dias depois</td>
            <td>Desarquivar quando quiser</td>
          </tr>
          <tr>
            <td>Para que serve</td>
            <td>O último dia e o prazo de carência</td>
            <td>Encerrar de verdade, depois de transferir</td>
            <td>Guardar por obrigação legal ou contratual</td>
          </tr>
        </tbody>
      </table>

      <h2>Qual convém em cada saída</h2>
      <ul>
        <li>
          <strong>Pedido de demissão ou desligamento normal:</strong> suspender no último dia, redirecionar o e-mail,
          transferir os arquivos e excluir depois de 30 dias. Se o plano for anual, reatribuir a licença ao próximo
          contratado.
        </li>
        <li>
          <strong>Saída com possibilidade de voltar (licença, estágio, projeto):</strong> suspender e deixar a data de
          revisão anotada. A Mekovault resolve isso com uma reativação temporária pelos dias que você escolher.
        </li>
        <li>
          <strong>Obrigação de guardar (contratos, processos trabalhistas, normas):</strong> arquivar. Mantém o e-mail
          e os arquivos sem pagar uma licença completa.
        </li>
        <li>
          <strong>Conta genérica (vendas@, suporte@):</strong> não se suspende nem se exclui: troca-se o responsável. Na
          Mekovault cada conta genérica tem um dono e uma data de revisão.
        </li>
      </ul>

      <h2>O erro mais caro</h2>
      <p>
        Suspender e esquecer. É o que acontece quando o desligamento é feito por alguém “por via das dúvidas” e ninguém
        tem a tarefa de olhar de novo. Essa conta é cobrada todo mês, com a mesma licença de uma pessoa que trabalha de
        verdade. Em uma empresa de 100 pessoas com 20% de rotatividade ao ano, são 20 contas que podem ficar nesse limbo;
        a 6 meses em média e 7 a 25 dólares cada, é dinheiro que vai embora sem ninguém ver. Você pode estimar com a{" "}
        <Link href="/calculadora-licencias">calculadora</Link>.
      </p>

      <h2>Como a Mekovault faz</h2>
      <p>
        A Mekovault não escolhe por você: suspende no último dia na hora exata, agenda a exclusão para 30 dias (com aviso
        prévio e opção de desfazer), mostra em Licenças quantas ficaram em contas bloqueadas e diz o que mudar na
        renovação. Se você marcar uma conta para guardar, ela não é tocada. E tudo com o nome de quem pediu e de quem
        aprovou, guardado por 365 dias.
      </p>
    </>
  );
}
