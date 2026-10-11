export const title = "Termos e Condições";
export const description = "Termos e condições de uso dos serviços da Mekovault SpA.";

export default function Body() {
  return (
    <>
      <h1>Termos e Condições</h1>
      <p className="text-sm text-muted-foreground">
        Tradução para referência. A versão em espanhol é a que prevalece.
      </p>
      <p className="text-sm text-muted-foreground">
        Vigência: 2026 · Mekovault SpA
      </p>

      <h2>1. Aceitação</h2>
      <p>
        Estes Termos regulam o uso dos serviços da Mekovault SpA
        (“Mekovault”) pelas pessoas ou organizações que se registrem no
        portal (“Cliente”). Ao criar uma conta ou utilizar o serviço, o
        Cliente declara aceitar integralmente estes Termos.
      </p>

      <h2>2. Descrição do serviço</h2>
      <p>
        A Mekovault fornece uma plataforma multi-tenant na nuvem que automatiza
        o ciclo de vida de identidades no Google Workspace e em outras
        plataformas conectadas: admissões, desligamentos, alterações, auditoria
        e notificações.
      </p>

      <h2>3. Conta e responsabilidade</h2>
      <p>
        O Cliente é responsável por manter a confidencialidade de suas
        credenciais e por toda atividade executada em sua conta. Deve informar
        imediatamente qualquer uso não autorizado para{" "}
        <a href="mailto:soporte@mekovault.com">soporte@mekovault.com</a>.
      </p>

      <h2>4. Uso aceitável</h2>
      <p>
        O Cliente se compromete a não utilizar o serviço para atividades
        ilícitas ou contrárias à Política de Uso Aceitável (AUP). A Mekovault
        poderá suspender o serviço diante de infrações flagrantes.
      </p>

      <h2>5. Dados e privacidade</h2>
      <p>
        O tratamento de dados pessoais é regido pela Política de Privacidade.
        A Mekovault atua como operadora de dados (data processor) dos dados que
        o Cliente lhe confiar.
      </p>

      <h2>6. Assinatura e pagamentos</h2>
      <p>
        Os planos são faturados em pesos chilenos (CLP) conforme publicado na
        página de Planos. O pagamento é processado via MercadoPago Chile. A
        inadimplência habilita a Mekovault a suspender o serviço mediante aviso
        prévio.
      </p>

      <h2>7. Nível de serviço (SLA)</h2>
      <p>
        A Mekovault se compromete com um nível de disponibilidade de 99.9%
        mensal para os planos Business e Enterprise, medido conforme a janela
        de cálculo publicada no painel de status.
      </p>

      <h2>8. Limitação de responsabilidade</h2>
      <p>
        A responsabilidade total da Mekovault por qualquer reclamação
        relacionada ao serviço limita-se ao valor pago pelo Cliente nos últimos
        12 meses.
      </p>

      <h2>9. Rescisão</h2>
      <p>
        O Cliente pode cancelar sua assinatura a qualquer momento pelo painel.
        A Mekovault pode rescindir o contrato com justa causa (infração ou
        inadimplência) ou sem justa causa com 30 dias de aviso prévio.
      </p>

      <h2>10. Legislação aplicável</h2>
      <p>
        Estes Termos são regidos pelas leis da República do Chile. Qualquer
        controvérsia será submetida aos tribunais de Santiago.
      </p>

      <p className="mt-8 text-sm text-muted-foreground">
        Contato jurídico: <a href="mailto:cloud@mekovault.com">cloud@mekovault.com</a>.
      </p>
    </>
  );
}
