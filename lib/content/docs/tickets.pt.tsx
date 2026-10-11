export const title = "Tickets e automações";
export const description =
  "O que faz cada tipo de ticket da Mekovault, quem pode solicitá-lo e o que acontece automaticamente.";

export default function Body() {
  return (
    <>
      <h1>Tickets e automações</h1>
      <p>Criar um ticket é um assistente de três etapas: serviço, dados, revisar e confirmar.</p>

      <h2>Criar conta</h2>
      <p>
        Dados da pessoa, data e hora de admissão (08:00 por padrão) e gestor do diretório. Ao
        revisar, a Mekovault propõe o e-mail <code>nome.sobrenome@dominio</code>, verifica se já
        existe ou existiu e deixa você decidir: se for a mesma pessoa, a conta é reativada e as
        credenciais são enviadas; se for outra, usa-se uma variante com a inicial do sobrenome
        materno. No dia da admissão, na hora indicada, a conta é criada sozinha e o e-mail de
        boas-vindas sai com cópia para o RH e para o gestor.
      </p>

      <h2>Bloquear conta</h2>
      <p>
        Data e hora obrigatórias, gestor e comentário. Ao revisar, são listadas as outras contas da
        pessoa. Ao confirmar, chega um e-mail com <strong>Cancelar</strong> e{" "}
        <strong>Bloquear agora</strong> (exigem login). Se ninguém agir, o bloqueio é executado na
        hora programada e o gestor e o RH são avisados.
      </p>

      <h2>Reativar conta</h2>
      <p>Escolhe-se entre as contas suspensas do diretório. O Suporte executa a partir do ticket.</p>

      <h2>Reativar conta temporariamente</h2>
      <p>
        Para um Solicitante: escolha a conta suspensa e o gestor dela. O gestor recebe um e-mail
        com Aprovar e Rejeitar (link pessoal, de uso único, vence em 7 dias, com lembrete aos 2).
        Se aprovar, a conta fica ativa por 30 dias: aviso 3 dias antes e bloqueio automático ao
        vencer. O Suporte pode prorrogar por 30 dias, no máximo duas vezes.
      </p>

      <h2>Conta genérica, aliases e grupos</h2>
      <p>Valida-se que o e-mail não exista. O Suporte executa a partir do ticket.</p>

      <h2>Redefinir senha</h2>
      <p>
        É um ticket manual: indica-se a conta e um comentário; o Suporte atende e avisa pelo
        ticket.
      </p>

      <h2>Quem pode pedir o quê</h2>
      <p>
        Depende do papel (ver o guia do administrador). Um administrador pode adicionar exceções
        pontuais em <em>Permissões de tickets</em>.
      </p>
    </>
  );
}
