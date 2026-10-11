import Link from "@/components/Link";

export const title = "Política de Privacidade";
export const description = "Como a Mekovault trata os dados pessoais.";

export default function Body() {
  return (
    <>
      <h1>Política de Privacidade</h1>
      <p className="text-sm text-muted-foreground">
        Tradução para referência. A versão em espanhol é a que prevalece.
      </p>
      <p className="text-sm text-muted-foreground">Vigência: 2026</p>

      <h2>1. Controladora</h2>
      <p>
        A Mekovault SpA, com sede em Santiago do Chile, é responsável pelo
        tratamento dos dados pessoais dos usuários do site e dos clientes da
        plataforma.
      </p>

      <h2>2. Dados que tratamos</h2>
      <ul>
        <li>Dados de contato: nome, sobrenome, e-mail corporativo.</li>
        <li>Dados da organização: nome, slug, fuso horário, país.</li>
        <li>
          Dados de uso: ações realizadas no portal (para o audit log
          imutável), IPs, user-agent.
        </li>
        <li>
          Dados do diretório conectado: as informações que o Cliente
          administra por meio da Mekovault (usuários, grupos, papéis), na
          condição de operadores de dados (data processors).
        </li>
      </ul>

      <h2>3. Finalidades</h2>
      <ul>
        <li>Prestar o serviço contratado.</li>
        <li>Cumprir obrigações legais e de faturamento.</li>
        <li>Auditoria interna e externa.</li>
        <li>Comunicações transacionais e de serviço.</li>
      </ul>

      <h2>4. Base legal</h2>
      <p>
        A base legal principal é a execução do contrato com o Cliente e o
        cumprimento das obrigações legais aplicáveis.
      </p>

      <h2>5. Compartilhamento com terceiros</h2>
      <p>
        Compartilhamos dados unicamente com os suboperadores necessários para
        operar o serviço. Ver{" "}
        <Link href="/legal/sub-processors">Suboperadores</Link>.
      </p>

      <h2>6. Transferências internacionais</h2>
      <p>
        A infraestrutura da Mekovault está hospedada em data centers
        localizados nas Américas. Os dados do Cliente não são transferidos a
        terceiros países sem cláusulas contratuais equivalentes.
      </p>

      <h2>7. Retenção</h2>
      <ul>
        <li>Audit log do tenant: 18 meses.</li>
        <li>Audit log da plataforma: 5 anos.</li>
        <li>Contas suspensas: 90 dias antes da exclusão completa.</li>
      </ul>

      <h2>8. Direitos do titular</h2>
      <p>
        Em cumprimento à <strong>Ley 21.719 (Chile)</strong> (Proteção de Dados
        Pessoais) e ao <strong>Regulamento Geral de Proteção de Dados
        (RGPD)</strong>, os titulares podem exercer os direitos de:
      </p>
      <ul>
        <li>
          <strong>Acesso</strong>: solicitar cópia dos dados pessoais que
          tratamos.
        </li>
        <li>
          <strong>Retificação</strong>: corrigir dados inexatos ou
          incompletos.
        </li>
        <li>
          <strong>Cancelamento / Eliminação (right to erasure)</strong>: pedir
          a exclusão dos seus dados pessoais dos nossos sistemas e dos nossos
          suboperadores.
        </li>
        <li>
          <strong>Oposição</strong>: opor-se ao tratamento por motivos
          legítimos.
        </li>
        <li>
          <strong>Portabilidade</strong>: receber seus dados em um formato
          estruturado e de uso comum.
        </li>
      </ul>
      <p>
        <strong>Como exercê-los:</strong> escreva para{" "}
        <a href="mailto:privacidad@mekovault.com">privacidad@mekovault.com</a>{" "}
        ou pelo portal da sua organização em{" "}
        <code>app.mekovault.com/&lt;tenant&gt;/privacy</code>. Se você é uma
        pessoa externa (não tem conta na Mekovault), também pode escrever para
        o e-mail indicado.
      </p>
      <p>
        <strong>Prazo de resposta:</strong> conforme a Ley 21.719, atendemos
        toda solicitação em até <strong>25 dias úteis</strong> a partir do
        recebimento. Em casos de complexidade excepcional podemos prorrogar o
        prazo por mais 25 dias, com notificação ao titular.
      </p>
      <p>
        <strong>Exceções documentadas:</strong> alguns dados devem ser
        preservados por obrigações legais (faturamento fiscal, audit logs de
        ações administrativas, backups com object lock para proteção contra
        ransomware). Nesses casos anonimizamos os dados identificadores em até
        90 dias a partir da solicitação e excluímos completamente quando expira
        a retenção mínima legal.
      </p>

      <h2>9. Segurança</h2>
      <p>
        Implementamos criptografia em trânsito (TLS 1.3), isolamento
        multi-tenant com Row-Level Security no PostgreSQL e um vault dedicado
        por tenant (Infisical). Os segredos nunca saem do vault em texto puro.
      </p>

      <h2>10. Contato</h2>
      <p>
        Encarregado de Proteção de Dados:{" "}
        <a href="mailto:privacidad@mekovault.com">privacidad@mekovault.com</a>.
      </p>
    </>
  );
}
