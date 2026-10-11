import Link from "@/components/Link";

export const title = "Políticas de Segurança · Mekovault";
export const description =
  "Como a Mekovault protege as credenciais do diretório, isola tenants e audita cada uso da Service Account do Google Workspace.";

export default function Body() {
  return (
    <>
      <h1>Políticas de Segurança</h1>
      <p className="text-sm text-muted-foreground">
        Tradução para referência. A versão em espanhol é a que prevalece.
      </p>
      <p className="text-sm text-muted-foreground">
        Vigência: 2026 · Última revisão: 31 de agosto de 2026
      </p>

      <p>
        A Mekovault gerencia o ciclo de vida de identidades no Google Workspace
        e em outras plataformas que venham a ser conectadas no futuro. Para
        funcionar, recebe credenciais muito sensíveis (Service Accounts com
        permissões de administração). Este documento descreve como as
        armazenamos, como as usamos e como o Cliente pode auditar cada uso.
      </p>

      <p>
        Foi redigido como referência para equipes de segurança, auditores e
        compradores enterprise. Complementa, não substitui, a{" "}
        <Link href="/legal/privacy">Política de Privacidade</Link>, os{" "}
        <Link href="/legal/terms">Termos</Link> e o{" "}
        <Link href="/legal/dpa">DPA</Link>.
      </p>

      <h2>1. Escopo</h2>
      <p>
        Estas políticas se aplicam a toda credencial que o Cliente entrega à
        Mekovault para operar sobre seu diretório corporativo, incluindo, mas
        não limitado a:
      </p>
      <ul>
        <li>
          <strong>Google Workspace:</strong> arquivo JSON de Service Account
          com Domain-Wide Delegation.
        </li>
        <li>
          Qualquer outra credencial de integração com outras plataformas,
          sistemas de pessoas ou diretórios que a Mekovault venha a suportar no
          futuro.
        </li>
      </ul>

      <h2>2. Arquitetura de armazenamento</h2>

      <h3>2.1 Separação física de segredos e metadados</h3>
      <p>
        Nenhuma credencial é armazenada no banco de dados relacional da
        Mekovault. A arquitetura separa dois planos:
      </p>
      <ul>
        <li>
          <strong>Plano de metadados (PostgreSQL, host <code>mekovault-data</code>):</strong>{" "}
          guarda apenas um ponteiro para o segredo (nome da chave dentro do
          vault), o provedor, o domínio primário, timestamps e os resultados
          do último <em>health check</em>. Row-Level Security por{" "}
          <code>company_id</code>.
        </li>
        <li>
          <strong>Plano de segredos (Infisical, host <code>mekovault-vault</code>):</strong>{" "}
          instância auto-hospedada do{" "}
          <a href="https://infisical.com/" target="_blank" rel="noopener noreferrer">
            Infisical
          </a>{" "}
          em rede privada Tailscale, não exposta à Internet pública. Contém os
          valores reais (por exemplo, o JSON completo da Service Account).
        </li>
      </ul>
      <p>
        Um bug ou comprometimento do serviço de metadados não expõe
        credenciais: os segredos exigem autenticação separada no Infisical por
        meio de uma identidade de máquina distinta.
      </p>

      <h3>2.2 Isolamento por tenant (multi-tenancy rígido)</h3>
      <p>
        Cada tenant recebe <strong>um projeto Infisical dedicado</strong>{" "}
        (exemplo: <code>setting-cl-415514</code>,{" "}
        <code>mmglatam-com-872039</code>). Os segredos nunca são
        compartilhados. Consequência:
      </p>
      <ul>
        <li>
          O raio de impacto de qualquer falha no código da Mekovault que
          construa incorretamente a referência ao projeto fica limitado ao
          mesmo tenant: não é possível ler, listar ou tocar segredos de outros
          clientes.
        </li>
        <li>
          As políticas de acesso do Infisical rejeitam solicitações a projetos
          para os quais a identidade de máquina da Mekovault não tem
          permissão, ainda que os conheça pelo nome.
        </li>
      </ul>

      <h3>2.3 Criptografia</h3>
      <ul>
        <li>
          <strong>Em trânsito:</strong> TLS 1.2+ obrigatório em todas as
          conexões (HTTPS do portal, PostgreSQL com SSL, canal Mekovault →
          Infisical, canal Mekovault → Google). Não aceitamos conexões não
          criptografadas.
        </li>
        <li>
          <strong>Em repouso:</strong> os segredos são criptografados no
          Infisical com a chave mestra do vault (AES-256-GCM); o volume do
          vault é criptografado em nível de disco (LUKS / EBS encryption). O
          PostgreSQL roda com criptografia de disco.
        </li>
        <li>
          <strong>Rotação de chaves de serviço:</strong> as chaves de
          assinatura de JWT e as credenciais da identidade de máquina do
          Infisical são rotacionadas pelo menos a cada 12 meses e diante de
          qualquer evento de comprometimento suspeito.
        </li>
      </ul>

      <h3>2.4 Rede e perímetro</h3>
      <ul>
        <li>
          Todas as máquinas do backend (<code>mekovault-app</code>,{" "}
          <code>mekovault-data</code>, <code>mekovault-obs</code>,{" "}
          <code>mekovault-vault</code>) estão conectadas por Tailscale sobre
          WireGuard.
        </li>
        <li>
          <strong><code>mekovault-vault</code> não tem IP público nem porta
          aberta para a Internet.</strong> Escuta apenas na interface privada
          Tailscale. Nem mesmo a partir do frontend público (Vercel) é possível
          alcançá-lo diretamente.
        </li>
        <li>
          O acesso administrativo pela equipe da Mekovault exige Tailscale com
          MFA + chave SSH gerenciada. Sem credenciais SSH root pessoais em
          nenhum host.
        </li>
      </ul>

      <h2>3. Uso das credenciais</h2>

      <h3>3.1 Princípio do mínimo privilégio na solicitação</h3>
      <p>
        Ao conectar o diretório, a Mekovault solicita exatamente os escopos de
        que precisa, nem um a mais. Publicamos a lista completa no guia do
        Assistente de conexão e a reproduzimos aqui:
      </p>

      <h4>Google Workspace: Domain-Wide Delegation</h4>
      <ul>
        <li>
          <code>admin.directory.user</code>: criar, suspender, reativar e
          modificar usuários.
        </li>
        <li>
          <code>admin.directory.user.security</code>: redefinição de senha e
          encerramento de sessões ativas (SSO revocation).
        </li>
        <li>
          <code>admin.directory.orgunit</code>: mover usuários entre OUs
          durante onboarding/offboarding.
        </li>
        <li>
          <code>admin.directory.group</code>: criar/excluir grupos e listas de
          distribuição.
        </li>
        <li>
          <code>admin.directory.group.member</code>: adicionar/remover membros
          de grupos.
        </li>
        <li>
          <code>admin.directory.domain.readonly</code>: somente leitura da
          lista de domínios (para validar que a SA opera sobre o domínio
          correto).
        </li>
        <li>
          <code>admin.directory.customer.readonly</code>: somente leitura dos
          dados da conta de cliente Google (para relatórios agregados).
        </li>
      </ul>
      <p>
        <strong>Não solicitamos:</strong> acesso ao Gmail (Mail scopes),
        Drive, Calendar, Chat, nem qualquer dado de conteúdo do usuário. A
        Mekovault não lê e-mails nem arquivos.
      </p>

      <h4>Outras plataformas</h4>
      <p>
        Quando uma nova plataforma for conectada, publicaremos nesta mesma
        seção a lista exata de permissões que ela solicita antes de ficar
        disponível para os Clientes. O critério é o mesmo: apenas permissões de
        administração de contas, nunca acesso ao conteúdo das pessoas.
      </p>

      <h3>3.2 Nunca em logs, nunca fora do processo</h3>
      <ul>
        <li>
          Os adaptadores carregam o segredo em memória logo antes de chamar o
          provedor externo e o descartam ao terminar a requisição.
        </li>
        <li>
          O logger estruturado filtra automaticamente qualquer campo cujo nome
          contenha <code>password</code>, <code>secret</code>,{" "}
          <code>token</code>, <code>key</code> ou <code>credential</code>. As
          entradas de log mostram o hash truncado do <em>request-id</em>, mas
          nunca o conteúdo do segredo.
        </li>
        <li>
          Não há backups do vault em armazenamento externo não criptografado.
          Os snapshots são criptografados com a mesma chave mestra do vault.
        </li>
      </ul>

      <h2>4. Auditoria de cada uso</h2>

      <h3>4.1 Log imutável <code>credential_usage_log</code></h3>
      <p>
        Cada vez que a Mekovault executa uma operação sobre o diretório do
        Cliente com as credenciais armazenadas, um registro é persistido na
        tabela <code>credential_usage_log</code> com:
      </p>
      <ul>
        <li>
          <strong>Quem:</strong> ID e e-mail do usuário Mekovault (ou
          identificador do worker/scheduler) que originou a operação.
        </li>
        <li>
          <strong>Por quê:</strong> propósito humano obrigatório (exemplo:{" "}
          <em>“Onboarding user@empresa.cl via ticket #4213”</em>,{" "}
          <em>“Health check noturno”</em>,{" "}
          <em>“Bulk deprovision batch #123”</em>).
        </li>
        <li>
          <strong>O quê:</strong> operação exata (<code>create_user</code>,{" "}
          <code>suspend_user</code>, <code>reset_password</code>,{" "}
          <code>add_group_member</code>, etc.).
        </li>
        <li>
          <strong>Quais escopos:</strong> lista de escopos OAuth / Application
          permissions consumidos.
        </li>
        <li>
          <strong>Sobre qual recurso:</strong> e-mail do usuário, grupo, OU ou
          outro identificador (sem dados sensíveis de conteúdo).
        </li>
        <li>
          <strong>Resultado:</strong> success / failure / partial,{" "}
          <code>error_code</code>, <code>error_message</code>,{" "}
          <code>duration_ms</code>, <code>request_id</code> para correlacionar
          com o nginx.
        </li>
        <li>
          <strong>Quando:</strong> timestamp em UTC com precisão de
          milissegundos.
        </li>
      </ul>

      <h3>4.2 Imutabilidade</h3>
      <p>
        A tabela tem <em>triggers</em> PostgreSQL que rejeitam qualquer{" "}
        <code>UPDATE</code> e <code>DELETE</code>. Nem a equipe da Mekovault
        com acesso root pode modificar um registro individual. A única forma de
        expurgar é o <em>retention worker</em> com regras explícitas publicadas
        (retenção mínima de 24 meses, configurável por Cliente até 84, ou até
        a exclusão do tenant, o que ocorrer primeiro), que roda com{" "}
        <code>SECURITY DEFINER</code> e deixa registro do lote expurgado.
      </p>

      <h3>4.3 Visibilidade para o Cliente</h3>
      <p>
        Cada admin do tenant pode consultar o log em:
      </p>
      <ul>
        <li>
          <code>https://app.mekovault.com/&lt;seu-slug&gt;/admin/credential-usage</code>
        </li>
      </ul>
      <p>
        Filtros por provedor, resultado, operação, intervalo de datas e ator.
        A consulta usa Row-Level Security por <code>company_id</code>: cada
        tenant vê exclusivamente seus próprios registros.
      </p>
      <p>
        Exportação programada CSV/JSON assinada para auditores externos no
        Marco 7. Enquanto isso, pode ser solicitada sob demanda escrevendo
        para <a href="mailto:soporte@mekovault.com">soporte@mekovault.com</a>.
      </p>

      <h3>4.4 Correlação com o sistema de auditoria</h3>
      <p>
        <code>credential_usage_log</code> é específico para chamadas ao
        diretório externo. Existe uma segunda tabela,{" "}
        <code>audit_events</code>, que registra ações humanas dentro do portal
        (login, aprovação de ticket, criação de papel, etc.). Ambas
        compartilham <code>request_id</code> para reconstruir uma cadeia
        completa: <em>“admin X aprovou o ticket Y, que disparou a operação Z
        sobre o usuário W no Google, com escopo A, resultado B”</em>.
      </p>

      <h2>5. Controle de acessos internos (equipe Mekovault)</h2>
      <ul>
        <li>
          O acesso administrativo aos hosts exige Tailscale com MFA e chave
          SSH pessoal. Não há contas compartilhadas.
        </li>
        <li>
          Nenhum membro da equipe da Mekovault precisa, nem tem por padrão, a
          capacidade de descriptografar segredos individuais de um Cliente para
          operar a plataforma.
        </li>
        <li>
          Acesso ao vault Infisical restrito aos membros da equipe de
          plataforma. As alterações de política ficam no audit interno do
          Infisical.
        </li>
        <li>
          O acesso ao banco de dados de produção é feito por contas nominais
          com RLS ativo. A conta <code>mekovault_superadmin</code>{" "}
          (BYPASSRLS) tem uso restrito e deixa registros em{" "}
          <code>audit_events</code>.
        </li>
      </ul>

      <h2>6. Resposta a incidentes</h2>
      <ul>
        <li>
          Notificação ao Cliente afetado em até <strong>72 horas</strong>{" "}
          após a confirmação de um incidente que envolva seus dados pessoais ou
          suas credenciais (RGPD art. 33, Ley 21.719 Chile art. 33).
        </li>
        <li>
          Rotação forçada de todas as credenciais do tenant afetado e
          revogação da conexão: o Cliente deve reconectar o diretório com uma
          Service Account nova (não reutilizamos a comprometida).
        </li>
        <li>
          Relatório post-mortem ao Cliente com a linha do tempo, escopo,
          contramedidas e aprendizados.
        </li>
        <li>
          Canal de divulgação responsável de vulnerabilidades:{" "}
          <a href="mailto:security@mekovault.com">security@mekovault.com</a>.
          Respondemos em ≤ 48h úteis.
        </li>
      </ul>

      <h2>7. Exercício de direitos e portabilidade</h2>
      <p>
        Se o Cliente rescindir o serviço ou solicitar a exclusão total de seus
        dados:
      </p>
      <ul>
        <li>
          Exclusão do projeto Infisical (elimina atomicamente todos os segredos
          do tenant).
        </li>
        <li>
          Exclusão em cascata das linhas do tenant no PostgreSQL, incluindo a
          conexão e o catálogo de identidades.
        </li>
        <li>
          O <code>credential_usage_log</code> do tenant é conservado até a
          exclusão do tenant ou por 24 meses, o que ocorrer primeiro (Ley
          21.719 art. 12, RGPD art. 30). Ao excluir o tenant, ele é apagado
          junto com o restante dos seus dados; a Mekovault conserva apenas um
          registro próprio com contadores e sem dados pessoais. O Cliente pode
          solicitar antes o seu hash pseudônimo se a política interna dele
          exigir.
        </li>
      </ul>

      <h2>8. Marcos de referência</h2>
      <p>
        Alinhamos as práticas descritas com:
      </p>
      <ul>
        <li>
          <strong>SOC 2 Type II</strong>: controles CC6 (acessos), CC7
          (monitoramento), CC8 (change management). Sem certificação planejada
          por ora: usamos o marco como guia de controles, não como promessa de
          auditoria.
        </li>
        <li>
          <strong>ISO/IEC 27001</strong>: controles A.5 (informação), A.8
          (ativos), A.9 (acessos), A.12 (operações), A.16 (incidentes).
        </li>
        <li>
          <strong>GDPR / RGPD (UE 2016/679)</strong>: arts. 25 (privacy by
          design), 30 (registro de atividades), 32 (segurança do tratamento),
          33 (notificação).
        </li>
        <li>
          <strong>Ley 21.719 (Chile)</strong>: arts. 12 (registro de
          atividades), 33 (notificação de violações), 34 (medidas de
          segurança).
        </li>
        <li>
          <strong>Google Workspace</strong>: condições de uso da{" "}
          <em>Admin SDK Directory API</em> e do programa do Marketplace.
        </li>
      </ul>

      <h2>9. Dúvidas e contato</h2>
      <p>
        As equipes de segurança de Clientes atuais ou potenciais podem
        solicitar:
      </p>
      <ul>
        <li>
          Cópia do nosso <em>DPA</em> assinável (Data Processing Agreement).
        </li>
        <li>
          Questionário de segurança (CAIQ, VSA, SIG Lite): respondemos em ≤ 5
          dias úteis.
        </li>
        <li>
          Evidências de auditorias internas e relatórios de pen-testing (sob
          NDA).
        </li>
      </ul>
      <p>
        Escreva para{" "}
        <a href="mailto:security@mekovault.com">security@mekovault.com</a> ou
        fale conosco pelo{" "}
        <Link href="/contact">formulário de contato</Link>.
      </p>

      <h2>10. Alterações nesta política</h2>
      <p>
        Publicamos a data da última revisão no cabeçalho. Alterações materiais
        (por exemplo, novos escopos solicitados, mudanças no modelo de
        retenção) são comunicadas com 30 dias de antecedência por e-mail aos
        administradores do tenant e ficam refletidas no histórico público do
        site.
      </p>

      <p className="text-xs text-muted-foreground">
        Este documento descreve controles operacionais e não constitui
        certificação formal. Para certificações vigentes ou em andamento,
        consulte o Trust Center (em breve em{" "}
        <code>trust.mekovault.com</code>) ou solicite por{" "}
        <a href="mailto:security@mekovault.com">security@mekovault.com</a>.
      </p>
    </>
  );
}
