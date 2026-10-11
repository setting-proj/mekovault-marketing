export const title = "Política de Uso Aceitável";
export const description =
  "Quais usos são permitidos e proibidos na plataforma Mekovault.";

export default function Body() {
  return (
    <>
      <h1>Política de Uso Aceitável (AUP)</h1>
      <p className="text-sm text-muted-foreground">
        Tradução para referência. A versão em espanhol é a que prevalece.
      </p>
      <p className="text-sm text-muted-foreground">Vigência: 2026</p>

      <p>
        Esta política complementa os Termos e define quais usos NÃO são
        permitidos na plataforma Mekovault. Ao aceitar os Termos, o Cliente
        aceita também esta AUP.
      </p>

      <h2>Usos proibidos</h2>
      <ul>
        <li>Tentar acessar dados de outros tenants.</li>
        <li>Testar a segurança da plataforma sem autorização explícita.</li>
        <li>
          Enviar spam, phishing ou notificações não autorizadas por meio do
          sistema de e-mails.
        </li>
        <li>
          Utilizar os conectores (Google Workspace ou outras plataformas) para
          exfiltrar informações sem justificativa operacional.
        </li>
        <li>
          Automatizar operações em um ritmo que degrade o serviço para outros
          clientes.
        </li>
        <li>
          Compartilhar credenciais de acesso ao portal com terceiros não
          autorizados.
        </li>
      </ul>

      <h2>Cumprimento</h2>
      <p>
        A Mekovault se reserva o direito de investigar e responder a violações
        desta política, incluindo a suspensão imediata da conta se o risco for
        material.
      </p>

      <h2>Denúncia de abusos</h2>
      <p>
        Para denunciar um abuso da plataforma, escreva para{" "}
        <a href="mailto:abuse@mekovault.com">abuse@mekovault.com</a>.
      </p>
    </>
  );
}
