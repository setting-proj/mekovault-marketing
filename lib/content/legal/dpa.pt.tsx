import Link from "@/components/Link";

export const title = "Acordo de Tratamento de Dados (DPA)";
export const description =
  "Modelo de Data Processing Agreement: atende ao RGPD Art. 28 e à Ley 21.719 (Chile).";

export default function Body() {
  return (
    <>
      <h1>Acordo de Tratamento de Dados (DPA)</h1>
      <p className="text-sm text-muted-foreground">
        Tradução para referência. A versão em espanhol é a que prevalece.
      </p>
      <p className="text-sm text-muted-foreground">
        Versão 1.0 · Vigência: 2026 · Este documento é um <strong>modelo</strong>{" "}
        de referência. Para operar com um cliente, nós o assinamos como anexo ao contrato de serviço.
      </p>

      <h2>1. Partes</h2>
      <ul>
        <li>
          <strong>Operadora</strong> (Data Processor): Mekovault SpA, Santiago
          do Chile.
        </li>
        <li>
          <strong>Controladora</strong> (Data Controller): o Cliente que
          contrata os serviços da Mekovault.
        </li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        Este DPA regula o tratamento de dados pessoais que a Mekovault realiza{" "}
        <em>por conta e em nome do Cliente</em> em decorrência da prestação de
        serviços (gestão de identidades corporativas no Google Workspace e em
        outras plataformas).
      </p>

      <h2>3. Categorias de dados tratados</h2>
      <ul>
        <li>
          <strong>Funcionários do Cliente</strong>: nome, sobrenome, e-mail
          corporativo, cargo, departamento, gestor, permissões atribuídas, IP e
          user-agent das sessões.
        </li>
        <li>
          <strong>Solicitantes externos</strong> (formulário público): e-mail,
          nome, motivo da solicitação.
        </li>
        <li>
          <strong>Registros de atividade</strong>: audit log imutável de todas
          as ações administrativas realizadas sobre as identidades do Cliente.
        </li>
      </ul>

      <h2>4. Duração</h2>
      <p>
        Enquanto durar o contrato de serviços. Ao término, a Mekovault executa
        a exclusão dos dados do Cliente em um prazo máximo de 30 dias corridos,
        salvo obrigações legais de conservação (faturamento fiscal, audit logs
        da plataforma).
      </p>

      <h2>5. Obrigações da Mekovault (Operadora)</h2>
      <ul>
        <li>
          Tratar os dados unicamente conforme as instruções documentadas do
          Cliente.
        </li>
        <li>
          Aplicar medidas técnicas e organizacionais apropriadas: criptografia
          em trânsito TLS 1.3, isolamento multi-tenant com Row-Level Security
          no PostgreSQL, vault dedicado por Cliente no Infisical, backups
          criptografados AES-256 no Backblaze B2 com object lock.
        </li>
        <li>
          Garantir que seu pessoal se comprometa a manter a confidencialidade.
        </li>
        <li>
          Notificar o Cliente sem demora indevida (em até 72 horas) diante de
          qualquer violação de segurança que afete dados pessoais.
        </li>
        <li>
          Auxiliar o Cliente no cumprimento de suas obrigações frente a
          solicitações de titulares (direitos ARCO / GDPR Art. 15-22).
        </li>
        <li>
          Auxiliar o Cliente na realização de avaliações de impacto (DPIA)
          quando forem exigidas.
        </li>
      </ul>

      <h2>6. Suboperadores</h2>
      <p>
        A Mekovault contrata suboperadores para prestar o serviço. A lista
        atualizada está publicada em{" "}
        <Link href="/legal/sub-processors">/legal/sub-processors</Link>.
        Notificamos com 30 dias de antecedência qualquer alteração.
      </p>

      <h2>7. Transferências internacionais</h2>
      <p>
        Os dados do Cliente são processados principalmente nos{" "}
        <strong>Estados Unidos (AWS us-east-1)</strong> com backup no
        Backblaze B2 US-West. Ambos os fornecedores aderem ao{" "}
        <em>EU-US Data Privacy Framework</em> (para dados de residentes da UE).
      </p>

      <h2>8. Direitos de auditoria</h2>
      <p>
        O Cliente pode auditar o cumprimento deste DPA com 15 dias de aviso
        prévio. Alternativamente, a Mekovault entrega evidências documentais
        (relatórios SOC 2, políticas internas) quando solicitado.
      </p>

      <h2>9. Devolução ou exclusão de dados</h2>
      <p>
        A pedido do Cliente e a qualquer momento:
      </p>
      <ul>
        <li>
          <strong>Exportação</strong>: a Mekovault entrega os dados do Cliente
          em formato estruturado (JSON/CSV) em um prazo de 15 dias.
        </li>
        <li>
          <strong>Exclusão</strong>: a eliminação completa (DB + suboperadores)
          é executada em um prazo de 30 dias. Exceções: audit log da plataforma
          (5 anos) e backups com object lock (até expirar a retenção).
        </li>
      </ul>

      <h2>10. Responsabilidade</h2>
      <p>
        Cada Parte responde pelos danos causados pelo seu descumprimento deste
        DPA ou da legislação aplicável de proteção de dados, até o limite
        estabelecido no contrato de serviços.
      </p>

      <h2>11. Legislação aplicável</h2>
      <p>
        Este DPA é regido pelas leis da República do Chile, em particular a{" "}
        <strong>Ley 21.719</strong>. Para clientes com titulares na União
        Europeia, aplica-se adicionalmente o <strong>Regulamento (UE)
        2016/679 (RGPD)</strong>.
      </p>

      <p className="mt-10 text-sm text-muted-foreground">
        Para solicitar a versão assinável do DPA, escreva para{" "}
        <a href="mailto:legal@mekovault.com">legal@mekovault.com</a> ou
        diretamente para <a href="mailto:cloud@mekovault.com">cloud@mekovault.com</a>.
      </p>
    </>
  );
}
