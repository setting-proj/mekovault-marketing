export const title = "Política de Cookies";
export const description = "Uso de cookies no site e no portal da Mekovault.";

export default function Body() {
  return (
    <>
      <h1>Política de Cookies</h1>
      <p className="text-sm text-muted-foreground">
        Tradução para referência. A versão em espanhol é a que prevalece.
      </p>
      <p className="text-sm text-muted-foreground">Vigência: 2026</p>

      <h2>O que são cookies</h2>
      <p>
        Cookies são pequenos arquivos que um site armazena no seu dispositivo
        para lembrar informações entre visitas.
      </p>

      <h2>Cookies que usamos</h2>
      <ul>
        <li>
          <strong>Essenciais</strong>: cookies de sessão para o portal
          (autenticação, refresh tokens HttpOnly). Sem eles o serviço não
          funciona.
        </li>
        <li>
          <strong>Preferências</strong>: lembrar o tema (claro/escuro)
          escolhido pelo usuário. Armazenado em <code>localStorage</code>.
        </li>
      </ul>

      <h2>O que NÃO usamos</h2>
      <p>
        A Mekovault não utiliza cookies de rastreamento publicitário nem
        analytics de terceiros no site de marketing por padrão. Se um cliente
        ativar o Cloudflare Insights ou outra ferramenta de análise no seu
        próprio portal white-label, isso é regido pela política dele.
      </p>

      <h2>Como gerenciá-los</h2>
      <p>
        Você pode excluir os cookies nas configurações do seu navegador. Se
        excluir os cookies essenciais, terá que fazer login novamente.
      </p>

      <h2>Contato</h2>
      <p>
        Escreva para{" "}
        <a href="mailto:privacidad@mekovault.com">privacidad@mekovault.com</a>{" "}
        se tiver dúvidas.
      </p>
    </>
  );
}
