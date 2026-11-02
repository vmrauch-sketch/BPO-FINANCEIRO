import { z } from "zod";

export const BPO_CONTACT_ENDPOINT = "https://painel.vmrauch.com.br/webhook/painel-api";

export const bpoContactSchema = z.object({
  nome: z.string().trim().min(1, "Informe seu nome.").max(100, "Use até 100 caracteres no nome."),
  telefone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Informe o WhatsApp com DDD: (00) 00000-0000."),
  email: z.union([z.literal(""), z.string().email("Informe um e-mail válido.").max(255)]).transform(value => value.trim()),
  mensagem: z.string().trim().max(1000, "Use até 1.000 caracteres na mensagem."),
  website: z.string().max(200),
  consentimento: z.boolean().refine(value => value, "Autorize o contato para enviar."),
});

export type BPOContactData = z.infer<typeof bpoContactSchema>;

export function maskWhatsApp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (!digits) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function contactPayload(data: BPOContactData) {
  const { consentimento, ...fields } = bpoContactSchema.parse(data);
  return { acao: "lead_site", form: "bpo", ...fields };
}

const responseSchema = z.object({ ok: z.boolean(), erro: z.string().max(2000).optional() });

export function parseContactResponse(json: unknown) {
  return responseSchema.parse(Array.isArray(json) ? json[0] : json);
}