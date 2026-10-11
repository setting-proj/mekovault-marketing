export const title = "Guia do administrador";
export const description =
  "Pessoas e papéis, produtos, calendário de operações, remetentes de e-mail, modelos de acesso e auditoria na Mekovault.";

export default function Body() {
  return (
    <>
      <h1>Guia do administrador</h1>
      <p>
        Tudo o que é administrável fica no site da sua organização, em{" "}
        <code>app.mekovault.com/&lt;sua-empresa&gt;/settings</code>.
      </p>

      <h2>Pessoas e papéis</h2>
      <p>Busca sobre o diretório. Cada papel define o que uma pessoa pode fazer:</p>
      <table>
        <thead>
          <tr>
            <th>Papel</th>
            <th>Pode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Administrador</td>
            <td>Tudo: produtos, pessoas, papéis, faturamento.</td>
          </tr>
          <tr>
            <td>Suporte de tickets</td>
            <td>Receber, atender e executar tickets (criar, bloquear, reativar contas, aliases, grupos).</td>
          </tr>
          <tr>
            <td>Pessoas e Cultura (RH)</td>
            <td>Solicitar admissões, desligamentos e reativações e acompanhar seu status. Não executa.</td>
          </tr>
          <tr>
            <td>Solicitante</td>
            <td>Pedir contas genéricas ou secundárias, aliases, grupos e reativações temporárias; ver seus tickets.</td>
          </tr>
          <tr>
            <td>Auditor</td>
            <td>Somente leitura de auditoria e relatórios.</td>
          </tr>
        </tbody>
      </table>
      <p>Remover todos os papéis remove o acesso. Nunca é possível remover o último administrador.</p>

      <h2>Produtos</h2>
      <p>
        Em <strong>Produtos</strong> você vê o que tem contratado, seu preço efetivo com promoções
        e seu status operacional (Operacional, Com problemas, Pausado). Os tickets disponíveis
        dependem dos produtos ativos.
      </p>

      <h2>Calendário de operações</h2>
      <p>
        Tudo o que está programado (criações de conta no dia da admissão, bloqueios, vencimentos
        de reativações temporárias, lembretes) é exibido por dia. Você pode cancelar ou reprogramar;
        cada alteração fica como comentário no ticket e na auditoria.
      </p>

      <h2>Remetentes e modelos</h2>
      <p>
        Configure de qual endereço saem os e-mails por contexto (admissões, desligamentos, senhas,
        suporte) e envie um teste. Você pode escolher que saiam pelo relay da Mekovault com o seu
        endereço visível, ou diretamente do seu domínio pela Gmail API usando a mesma delegação que
        você já autorizou (requer o escopo <code>gmail.send</code>). Os modelos de e-mail podem ser
        personalizados por idioma.
      </p>

      <h2>Modelos de acesso</h2>
      <p>
        Combinam papéis, grupos e serviços que são provisionados juntos para uma pessoa nova. São
        escolhidos com seletores, sem identificadores técnicos.
      </p>

      <h2>Auditoria</h2>
      <p>
        Cada ação relevante (papéis, acessos, tickets executados, operações canceladas) fica
        registrada com quem, quando e o que mudou. Os registros de auditoria são imutáveis.
      </p>

      <h2>Excluir a organização</h2>
      <p>
        Um administrador pode solicitar a exclusão. Ela é executada como um processo enfileirado e
        auditado que revoga credenciais, apaga segredos, dados e registros de e-mail, e envia um
        e-mail com o detalhe de cada etapa ao ser concluída.
      </p>
    </>
  );
}
