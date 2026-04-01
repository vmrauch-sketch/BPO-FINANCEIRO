import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, BarChart3, Shield, ClipboardCheck, Target } from "lucide-react";

const TrabalheConosco = () => {
  const [isVisible, setIsVisible] = useState(false);
  const wealthRef = useRef<HTMLDivElement>(null);
  const bpoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCandidaturaClick = () => {
    const message = encodeURIComponent("Olá, tenho interesse em me tornar um Wealth Planner da Valorum");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290`);
      });
    } else {
      window.open(url, '_blank');
    }
  };

  const handleBpoCandidaturaClick = () => {
    const message = encodeURIComponent("Olá, tenho interesse em me tornar um Especialista BPO da Valorum");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290`);
      });
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <>
      <SEOHead 
        title="Trabalhe Conosco | Valorum"
        description="Faça parte da Valorum como Wealth Planner ou Especialista BPO. Revolucione o mercado financeiro com transparência, metodologia e independência."
      />
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main className="pt-32 sm:pt-24">
          {/* Hero com dois caminhos */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-6xl mx-auto">
                <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
                    Faça parte da Valorum
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                    Escolha o caminho que combina com você e venha construir resultados reais.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Card Wealth Planner */}
                    <button
                      onClick={() => scrollTo(wealthRef)}
                      className="p-8 rounded-2xl border-2 border-corporate-500/30 bg-gradient-to-br from-corporate-50 to-white hover:border-corporate-500 hover:shadow-xl transition-all duration-300 text-left group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-corporate-500 to-corporate-600 rounded-xl flex items-center justify-center mb-6">
                        <TrendingUp className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-playfair font-bold text-primary mb-3">
                        Wealth Planner
                      </h2>
                      <p className="text-muted-foreground">
                        Assessoria financeira independente com visão 360°, transparência e foco no cliente.
                      </p>
                      <span className="inline-block mt-4 text-corporate-500 font-semibold group-hover:translate-x-1 transition-transform">
                        Saiba mais →
                      </span>
                    </button>

                    {/* Card Especialista BPO */}
                    <button
                      onClick={() => scrollTo(bpoRef)}
                      className="p-8 rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-50 to-white hover:border-blue-500 hover:shadow-xl transition-all duration-300 text-left group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                        <BarChart3 className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-playfair font-bold text-primary mb-3">
                        Especialista BPO
                      </h2>
                      <p className="text-muted-foreground">
                        Atenda empresas com metodologia comprovada em terceirização financeira.
                      </p>
                      <span className="inline-block mt-4 text-blue-500 font-semibold group-hover:translate-x-1 transition-transform">
                        Saiba mais →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seção Wealth Planner */}
          <section ref={wealthRef} className="py-20 scroll-mt-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-6xl mx-auto">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 md:p-12 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-corporate-500 font-semibold mb-4">Wealth Planner</p>
                      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary leading-tight">
                        O Wealth Planning é indiscutivelmente o melhor modelo de assessoria financeira para o cliente final.
                      </h2>
                      <p className="text-lg text-muted-foreground mt-6 font-medium">
                        Pilares da nossa filosofia de atuação:
                      </p>
                    </div>

                    <div className="space-y-6">
                      {[
                        { num: "01", title: "TRANSPARÊNCIA", desc: "Se o cliente não sabe quanto paga, não há relação de confiança plena;" },
                        { num: "02", title: "VISÃO 360°", desc: "O processo de assessoria financeira precisa ser holístico e hiperpersonalizado;" },
                        { num: "03", title: "COERÊNCIA COMPORTAMENTAL", desc: "Precisa funcionar na vida real." },
                        { num: "04", title: "INDEPENDÊNCIA", desc: "Representar uma única instituição, significa ser incapaz de oferecer o melhor para o cliente." },
                      ].map((item) => (
                        <div key={item.num} className="flex items-start">
                          <div className="flex-shrink-0 w-12 h-12 bg-corporate-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                            {item.num}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <button 
                      onClick={handleCandidaturaClick}
                      className="bg-corporate-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-corporate-600 transition-colors shadow-lg hover:scale-105 transition-transform duration-200"
                    >
                      QUERO ME TORNAR UM WEALTH PLANNER
                    </button>
                  </div>
                </div>

                {/* Por que ser Wealth Planner */}
                <div className="mt-16">
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary text-center mb-12">
                    Por que ser um Wealth Planner da Valorum?
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { title: "Ambiente de Excelência", desc: "Trabalhe com os melhores profissionais do mercado em um ambiente que valoriza qualidade e resultados." },
                      { title: "Crescimento Profissional", desc: "Desenvolvimento contínuo com treinamentos, certificações e oportunidades de crescimento na carreira." },
                      { title: "Propósito e Impacto", desc: "Faça a diferença transformando a relação dos clientes com suas finanças através de consultoria independente." },
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-border/50">
                        <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seção Especialista BPO */}
          <section ref={bpoRef} className="py-20 bg-primary scroll-mt-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-4">Especialista BPO</p>
                  <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-6">
                    Seja um Especialista em BPO{" "}
                    <br className="hidden md:block" />
                    <span className="text-blue-400">da Valorum</span>
                  </h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Atenda empresas com metodologia comprovada em terceirização financeira. Transforme a gestão financeira dos nossos clientes com processos, controle e resultados reais.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {[
                    { icon: ClipboardCheck, title: "Metodologia estruturada", desc: "Trabalhe com processos definidos, fluxos organizados e entregas claras para cada cliente." },
                    { icon: Users, title: "Carteira de clientes", desc: "Atenda empresas de diferentes segmentos com suporte da equipe e da estrutura Valorum." },
                    { icon: BarChart3, title: "Ferramentas e tecnologia", desc: "Acesso a dashboards, sistemas de gestão financeira e relatórios automatizados." },
                    { icon: Target, title: "Treinamento contínuo", desc: "Capacitação constante em controladoria, fluxo de caixa, conciliação e análise financeira." },
                    { icon: Shield, title: "Suporte e retaguarda", desc: "Você não está sozinho. Conte com uma equipe de apoio para questões técnicas e operacionais." },
                    { icon: TrendingUp, title: "Crescimento real", desc: "Plano de carreira claro com possibilidade de crescimento baseado em resultados e desempenho." },
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="p-8 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center mb-6">
                        <item.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button 
                    onClick={handleBpoCandidaturaClick}
                    className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200 uppercase tracking-wider"
                  >
                    Quero ser Especialista BPO
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default TrabalheConosco;