import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const revenueRanges = [
  "Até R$ 8 mil/mês",
  "R$ 8 mil – R$ 50 mil/mês",
  "R$ 50 mil – R$ 500 mil/mês",
  "R$ 500 mil – R$ 1 milhão/mês",
  "Acima de R$ 1 milhão/mês",
];

const BPOContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    revenue_range: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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

    setIsSubmitting(true);

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

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", company: "", revenue_range: "", message: "" });
      }, 8000);
      toast({
        title: "Enviado com sucesso!",
        description: "Entraremos em contato em breve.",
      });
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
      <div className="text-center py-16">
        <CheckCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
        <h3 className="text-2xl font-playfair font-bold text-white mb-3">
          Recebemos sua mensagem!
        </h3>
        <p className="text-gray-400 max-w-md mx-auto">
          Nossa equipe entrará em contato em breve para agendar seu diagnóstico gratuito.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white text-sm font-semibold">
            Nome completo *
          </Label>
          <Input
            id="name"
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
            type="email"
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
            Telefone / WhatsApp
          </Label>
          <Input
            id="phone"
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400 h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="text-white text-sm font-semibold">
            Empresa
          </Label>
          <Input
            id="company"
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



      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-6 text-lg uppercase tracking-wider"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Solicitar Diagnóstico Gratuito
          </>
        )}
      </Button>

      <p className="text-center text-sm text-gray-500">
        Sem compromisso · Seus dados estão seguros
      </p>
    </form>
  );
};

export default BPOContactForm;
