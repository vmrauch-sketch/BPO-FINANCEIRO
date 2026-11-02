/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import { bpoContactSchema, contactPayload, maskWhatsApp, mergeExtrasIntoMensagem, painelLeadPayload, parseContactResponse } from "./bpo-contact";

const valid = { nome: "Teste", telefone: "(11) 95958-6722", email: "", mensagem: "", website: "", consentimento: true };

describe("Contato BPO", () => {
  test("nome obrigatório", () => expect(bpoContactSchema.safeParse({ ...valid, nome: "  " }).success).toBe(false));
  test("WhatsApp com DDD obrigatório", () => expect(bpoContactSchema.safeParse({ ...valid, telefone: "959586722" }).success).toBe(false));
  test("máscara de onze dígitos", () => expect(maskWhatsApp("11959586722")).toBe("(11) 95958-6722"));
  test("e-mail e mensagem opcionais", () => expect(bpoContactSchema.safeParse(valid).success).toBe(true));
  test("e-mail preenchido deve ser válido", () => expect(bpoContactSchema.safeParse({ ...valid, email: "inválido" }).success).toBe(false));
  test("autorização obrigatória", () => expect(bpoContactSchema.safeParse({ ...valid, consentimento: false }).success).toBe(false));
  test("corpo exato do painel", () => expect(contactPayload(valid)).toEqual({ acao: "lead_site", form: "bpo", nome: "Teste", telefone: "(11) 95958-6722", email: "", mensagem: "", website: "" }));
  test("website preservado para proteção no destino", () => expect(contactPayload({ ...valid, website: "spam" }).website).toBe("spam"));
  test("resposta em lista usa primeiro item", () => expect(parseContactResponse([{ ok: true }, { ok: false }]).ok).toBe(true));
  test("erro do painel preservado", () => expect(parseContactResponse({ ok: false, erro: "Contato recusado" })).toEqual({ ok: false, erro: "Contato recusado" }));
  test("sucesso exige booleano true", () => expect(() => parseContactResponse({ ok: "true" })).toThrow());
});