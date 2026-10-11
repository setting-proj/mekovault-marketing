export const title = "Suboperadores";
export const description =
  "Lista de fornecedores que a Mekovault utiliza para operar a plataforma.";

const SUBS = [
  {
    name: "Amazon Web Services (Lightsail)",
    role: "Infraestrutura de computação e armazenamento",
    location: "us-east-1 (N. Virgínia)",
  },
  {
    name: "Cloudflare",
    role: "CDN, WAF, DNS gerenciado, proteção contra DDoS",
    location: "Global (proxy com edge na América Latina)",
  },
  {
    name: "Backblaze B2",
    role: "Backups criptografados com object lock",
    location: "US-West (Sacramento)",
  },
  {
    name: "Tailscale",
    role: "Rede privada administrativa entre VMs e CI",
    location: "EUA · SOC2 Type II",
  },
  {
    name: "Brevo (Sendinblue)",
    role: "SMTP transacional para e-mails",
    location: "UE",
  },
  {
    name: "MercadoPago",
    role: "Processamento de pagamentos no Chile",
    location: "Chile",
  },
  {
    name: "Frankfurter (ECB)",
    role: "Feed de taxas de câmbio USD→CLP",
    location: "UE · Dados públicos",
  },
];

export default function Body() {
  return (
    <>
      <h1>Suboperadores</h1>
      <p className="text-sm text-muted-foreground">
        Tradução para referência. A versão em espanhol é a que prevalece.
      </p>
      <p className="text-sm text-muted-foreground">Última atualização: 2026</p>

      <p>
        Os seguintes fornecedores processam dados por conta da Mekovault para
        operar o serviço. Cada um está contratualmente obrigado a níveis de
        segurança equivalentes aos nossos.
      </p>

      <h2>Exclusão de dados ao encerrar uma conta</h2>
      <p>
        Quando um cliente exclui sua organização, a Mekovault executa um
        processo de exclusão enfileirado e auditado: as credenciais delegadas
        são revogadas e são excluídos o projeto de segredos (Infisical), os
        dados do banco de dados e o registro de e-mails enviados. O Brevo
        processa apenas o envio transacional e não conserva contatos nem
        conteúdo por nossa conta. Os registros operacionais (Loki/Grafana)
        contêm identificadores técnicos, não dados de negócio, e são excluídos
        pela retenção limitada do sistema de observabilidade. O administrador
        recebe um e-mail com o detalhe de cada etapa ao ser concluído.
      </p>

      <div className="not-prose mt-8 overflow-hidden rounded-2xl border bg-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/40 text-left">
              <th className="px-4 py-3 font-semibold">Fornecedor</th>
              <th className="px-4 py-3 font-semibold">Função</th>
              <th className="px-4 py-3 font-semibold">Região</th>
            </tr>
          </thead>
          <tbody>
            {SUBS.map((s) => (
              <tr key={s.name} className="border-b last:border-b-0">
                <td className="px-4 py-3 font-medium">{s.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{s.role}</td>
                <td className="px-4 py-3 text-muted-foreground">{s.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10">Alterações</h2>
      <p>
        Notificamos nossos clientes com pelo menos 30 dias de antecedência
        antes de adicionar um novo suboperador com acesso a dados do Cliente.
      </p>

      <p>
        Dúvidas:{" "}
        <a href="mailto:cloud@mekovault.com">cloud@mekovault.com</a>.
      </p>
    </>
  );
}
