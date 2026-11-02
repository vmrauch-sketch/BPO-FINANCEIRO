import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { BPO_CONTACT_ENDPOINT, maskWhatsApp, mergeExtrasIntoMensagem, painelLeadPayload, parseContactResponse } from "@/lib/bpo-contact";

const revenueRanges = [
  "Até R$ 8 mil/mês",
  "R$ 8 mil – R$ 50 mil/mês",
  "R$ 50 mil – R$ 500 mil/mês",
  "R$ 500 mil – R$ 1 milhão/mês",
  "Acima de R$ 1 milhão/mês",
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  revenue_range: "",
  message: "",
  website: "",
  consentimento: false,
};

const CFOContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [panelError, setPanelError] = useState("");
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setPanelError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e email.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.phone)) {
      toast({
        title: "WhatsApp obrigatório",
        description: "Informe o WhatsApp com DDD: (00) 00000-0000.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.consentimento) {
      toast({
        title: "Autorização necessária",
        description: "Autorize o contato pelo WhatsApp e e-mail para enviar.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setPanelError("");

    try {
      const id = crypto.randomUUID();
      const { error } = await supabase.from("contact_submissions").insert({
        id,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        company: formData.company.trim() || null,
        revenue_range: formData.revenue_range || null,
        message: formData.message.trim() || null,
      });

      if (error) throw error;

      // Send email notification to atendimento@cfvalorum.com.br
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "bpo-contact-notification",
          recipientEmail: "atendimento@cfvalorum.com.br",
          idempotencyKey: `bpo-contact-${id}`,
          templateData: {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim() || undefined,
            company: formData.company.trim() || undefined,
            revenue_range: formData.revenue_range || undefined,
            message: formData.message.trim() || undefined,
          },
        },
      });

      // Também envia os dados ao painel de atendimento
      const mensagem = mergeExtrasIntoMensagem(formData.message, {
        Empresa: formData.company,
        Faturamento: formData.revenue_range,
      });
      const response = await fetch(BPO_CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(painelLeadPayload({
          form: "cfo",
          nome: formData.name,
          telefone: formData.phone,
          email: formData.email,
          mensagem,
          website: formData.website,
        })),
        signal: AbortSignal.timeout(30000),
        credentials: "omit",
      });
      const result = parseContactResponse(await response.json());
      if (!result.ok) {
        setPanelError(result.erro || "Não foi possível enviar seu contato. Tente novamente.");
        return;
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData(initialFormData);
      }, 8000);
    } catch (err) {
      console.error("Form submission error:", err);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16" role="status" aria-live="polite">
        <CheckCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
        <h3 className="text-2xl font-playfair font-bold text-white mb-3">
          Recebemos seu contato!
        </h3>
        <p className="text-gray-400 max-w-md mx-auto">
          Em instantes você recebe uma mensagem nossa no WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white text-sm font-semibold">
            Nome *
          </Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400 h-12"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white text-sm font-semibold">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400 h-12"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white text-sm font-semibold">
            WhatsApp com DDD *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="(00) 00000-0000"
            maxLength={15}
            value={formData.phone}
            onChange={(e) => handleChange("phone", maskWhatsApp(e.target.value))}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400 h-12"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="text-white text-sm font-semibold">
            Empresa
          </Label>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Nome da empresa"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400 h-12"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-white text-sm font-semibold">
          Faturamento mensal
        </Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {revenueRanges.map((range) => (
            <button
              type="button"
              key={range}
              onClick={() => handleChange("revenue_range", range)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border ${
                formData.revenue_range === range
                  ? "bg-blue-400 text-white border-blue-400"
                  : "bg-white/5 text-gray-300 border-white/20 hover:border-blue-400/50 hover:bg-white/10"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <Label htmlFor="cfo-website">Website</Label>
        <Input
          id="cfo-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          maxLength={200}
          value={formData.website}
          onChange={(e) => handleChange("website", e.target.value)}
        />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="cfo-consentimento"
          name="consentimento"
          required
          checked={formData.consentimento}
          onCheckedChange={(value) => handleChange("consentimento", value === true)}
          className="mt-1 shrink-0 border-white/40 data-[state=checked]:bg-blue-400 data-[state=checked]:border-blue-400"
        />
        <Label htmlFor="cfo-consentimento" className="text-sm leading-relaxed cursor-pointer text-gray-300">
          Autorizo o contato pelo WhatsApp e e-mail para este atendimento. *
        </Label>
      </div>

      {panelError && (
        <p role="alert" className="text-sm leading-relaxed text-red-400">{panelError}</p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-6 text-lg uppercase tracking-wider"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Agende seu Diagnóstico Gratuito
          </>
        )}
      </Button>

      <p className="text-center text-sm text-gray-500">
        Seus dados estão seguros
      </p>
    </form>
  );
};

export default CFOContactForm;
