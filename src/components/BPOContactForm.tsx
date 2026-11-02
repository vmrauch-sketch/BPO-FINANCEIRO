import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { BPO_CONTACT_ENDPOINT, bpoContactSchema, contactPayload, maskWhatsApp, parseContactResponse, type BPOContactData } from "@/lib/bpo-contact";

const initialData: BPOContactData = { nome: "", telefone: "", email: "", mensagem: "", website: "", consentimento: false };

const BPOContactForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const sending = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = <K extends keyof BPOContactData>(field: K, value: BPOContactData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setFieldErrors(prev => ({ ...prev, [field]: "" }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending.current) return;
    const parsed = bpoContactSchema.safeParse({ ...formData, email: formData.email.trim() });
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const field = String(issue.path[0]);
        if (!errors[field]) errors[field] = issue.message;
      }
      setFieldErrors(errors);
      formRef.current?.querySelector<HTMLElement>(`[name="${parsed.error.issues[0]?.path[0]}"]`)?.focus();
      return;
    }
    sending.current = true;
    setIsSubmitting(true);
    setError("");
    setFieldErrors({});
    try {
      const response = await fetch(BPO_CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactPayload(parsed.data)),
        signal: AbortSignal.timeout(30000),
        credentials: "omit",
      });
      const result = parseContactResponse(await response.json());
      if (!result.ok) {
        setError(result.erro || "Não foi possível enviar seu contato. Tente novamente.");
      } else if (!response.ok) {
        setError("Não foi possível confirmar o envio. Tente novamente.");
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setError("Não foi possível enviar seu contato. Confira sua conexão e tente novamente.");
    } finally {
      sending.current = false;
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div role="status" aria-live="polite" className="text-center py-12">
        <CheckCircle className="w-14 h-14 bpo-contact-accent mx-auto mb-6" aria-hidden="true" />
        <p className="text-xl md:text-2xl leading-relaxed max-w-xl mx-auto">
          Recebemos seu contato! Em instantes você recebe uma mensagem nossa no WhatsApp.
        </p>
      </div>
    );
  }

  const fieldError = (field: string) => fieldErrors[field] ? <p id={`bpo-${field}-error`} className="text-sm bpo-contact-error">{fieldErrors[field]}</p> : null;
  const inputClass = "bpo-contact-input h-12 rounded-lg";

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6 font-inter" aria-busy={isSubmitting}>
      <fieldset disabled={isSubmitting} className="space-y-6 min-w-0">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="bpo-nome" className="font-semibold">Nome *</Label>
            <Input id="bpo-nome" name="nome" autoComplete="name" placeholder="Seu nome" maxLength={100} required value={formData.nome} onChange={e => handleChange("nome", e.target.value)} className={inputClass} aria-invalid={!!fieldErrors.nome} aria-describedby={fieldErrors.nome ? "bpo-nome-error" : undefined} />
            {fieldError("nome")}
          </div>
          <div className="space-y-2">
            <Label htmlFor="bpo-telefone" className="font-semibold">WhatsApp com DDD *</Label>
            <Input id="bpo-telefone" name="telefone" type="tel" inputMode="tel" autoComplete="tel-national" placeholder="(00) 00000-0000" maxLength={15} required value={formData.telefone} onChange={e => handleChange("telefone", maskWhatsApp(e.target.value))} className={inputClass} aria-invalid={!!fieldErrors.telefone} aria-describedby={fieldErrors.telefone ? "bpo-telefone-error" : undefined} />
            {fieldError("telefone")}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="bpo-email" className="font-semibold">E-mail <span className="bpo-contact-muted font-normal">(opcional)</span></Label>
          <Input id="bpo-email" name="email" type="email" autoComplete="email" placeholder="seu@email.com" maxLength={255} value={formData.email} onChange={e => handleChange("email", e.target.value)} className={inputClass} aria-invalid={!!fieldErrors.email} aria-describedby={fieldErrors.email ? "bpo-email-error" : undefined} />
          {fieldError("email")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="bpo-mensagem" className="font-semibold">Como podemos ajudar? <span className="bpo-contact-muted font-normal">(opcional)</span></Label>
          <Textarea id="bpo-mensagem" name="mensagem" rows={3} maxLength={1000} placeholder="Conte um pouco sobre o financeiro da sua empresa" value={formData.mensagem} onChange={e => handleChange("mensagem", e.target.value)} className="bpo-contact-input rounded-lg resize-y" aria-invalid={!!fieldErrors.mensagem} aria-describedby={fieldErrors.mensagem ? "bpo-mensagem-error" : undefined} />
          {fieldError("mensagem")}
        </div>
        <div className="hidden" aria-hidden="true">
          <Label htmlFor="bpo-website">Website</Label>
          <Input id="bpo-website" name="website" type="text" tabIndex={-1} autoComplete="off" maxLength={200} value={formData.website} onChange={e => handleChange("website", e.target.value)} />
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <Checkbox id="bpo-consentimento" name="consentimento" required checked={formData.consentimento} onCheckedChange={value => handleChange("consentimento", value === true)} className="bpo-contact-checkbox mt-1 shrink-0" aria-invalid={!!fieldErrors.consentimento} aria-describedby={fieldErrors.consentimento ? "bpo-consentimento-error" : undefined} />
            <Label htmlFor="bpo-consentimento" className="text-sm leading-relaxed cursor-pointer bpo-contact-muted">Autorizo o contato pelo WhatsApp e e-mail para este atendimento.</Label>
          </div>
          {fieldError("consentimento")}
        </div>
      </fieldset>
      {error && <p role="alert" className="bpo-contact-error text-sm leading-relaxed">{error}</p>}
      <Button type="submit" disabled={isSubmitting} size="lg" className="bpo-contact-submit w-full rounded-xl min-h-14 h-auto px-6 py-4 text-base md:text-lg font-semibold whitespace-normal">
        {isSubmitting ? <Loader2 className="w-5 h-5 shrink-0 animate-spin motion-reduce:animate-none" aria-hidden="true" /> : <Send className="w-5 h-5 shrink-0" aria-hidden="true" />}
        {isSubmitting ? "Enviando…" : "Enviar contato"}
      </Button>
      <p className="text-center text-sm bpo-contact-muted">Seus dados estão seguros</p>
    </form>
  );
};

export default BPOContactForm;
