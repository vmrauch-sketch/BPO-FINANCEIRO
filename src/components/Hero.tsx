import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const handleFaleConsultorClick = () => {
    const message = encodeURIComponent("Olá gostaria de mais informações");
    const whatsappUrl = `https://wa.me/5511949566290?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-28 sm:pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-navy-600/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-navy-600/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-navy-600/20 rounded-full"></div>
      </div>

      <div ref={elementRef} className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand Image */}
          <div className={`mb-8 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mx-auto">
              <img 
                src="/lovable-uploads/aee87d30-fa30-44ea-bc48-89ef4d0f7e2c.png" 
                alt="Valorum Logo" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Slogan */}
          <div className={`mb-6 transform transition-all duration-1000 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <p className="text-2xl md:text-3xl font-playfair font-semibold italic text-gold-600">
              "Financeiro não se improvisa"
            </p>
          </div>

          {/* Impact Phrase */}
          <div className={`text-xl md:text-2xl font-inter mx-auto mb-8 text-navy-600 transform transition-all duration-1000 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="block text-center">
              <span className="text-xl md:text-2xl text-navy-600 font-inter mb-2 block">
                Soluções Financeiras para sua Empresa!
              </span>
              <span className="text-xl md:text-2xl text-navy-600 font-inter mb-4 block">
                Seu financeiro rodando do jeito certo.
              </span>
              
              {/* Sub-brand buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-8 overflow-hidden">
                <Link to="/bpo">
                  <Button variant="outline" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-none font-medium px-4 py-2 text-sm">
                    BPO
                  </Button>
                </Link>
                <Link to="/cfo">
                  <Button variant="outline" className="bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-primary border-none font-medium px-4 py-2 text-sm">
                    CFO
                  </Button>
                </Link>
                <Link to="/contabil">
                  <Button variant="outline" className="bg-gradient-to-r from-navy-500 to-navy-600 hover:from-navy-600 hover:to-navy-700 text-white border-none font-medium px-4 py-2 text-sm">
                    Contábil
                  </Button>
                </Link>
              </div>
              
              {/* Sub-brand descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left max-w-4xl mx-auto">
                <Link to="/bpo" className="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500 hover:shadow-md transition-all duration-300 group">
                  <h3 className="font-bold text-blue-600 mb-0.5 text-base">Terceirização Financeira</h3>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide block mb-2">Valorum BPO</span>
                  <p className="text-sm text-gray-600 mb-3">Gestão financeira completa para sua empresa com controle, organização e previsibilidade.</p>
                  <span className="text-xs font-bold text-blue-600 group-hover:underline">Conhecer solução →</span>
                </Link>
                <Link to="/cfo" className="p-4 rounded-lg bg-lime-50 border-l-4 border-lime-500 hover:shadow-md transition-all duration-300 group">
                  <h3 className="font-bold text-lime-600 mb-0.5 text-base">Direção Financeira</h3>
                  <span className="text-xs font-semibold text-lime-500 uppercase tracking-wide block mb-2">Valorum CFO</span>
                  <p className="text-sm text-gray-600 mb-3">Direcionamento financeiro competente e atualizado. Apoio para as decisões financeiras e estratégicas.</p>
                  <span className="text-xs font-bold text-lime-600 group-hover:underline">Conhecer solução →</span>
                </Link>
                <Link to="/contabil" className="p-4 rounded-lg bg-navy-50 border-l-4 border-navy-500 hover:shadow-md transition-all duration-300 group">
                  <h3 className="font-bold text-navy-600 mb-0.5 text-base">Contabilidade Consultiva</h3>
                  <span className="text-xs font-semibold text-navy-400 uppercase tracking-wide block mb-2">Valorum Contábil</span>
                  <p className="text-sm text-gray-600 mb-3">Contabilidade consultiva. Especialistas para cada especialidade de negócios.</p>
                  <span className="text-xs font-bold text-navy-600 group-hover:underline">Conhecer solução →</span>
                </Link>
              </div>
              
              <span className="text-xl md:text-2xl text-navy-600 font-inter mb-4 block">
                Gestão financeira, contabilidade e direção estratégica para sua empresa.
              </span>
              <span className="text-xl md:text-2xl text-navy-600 font-inter mb-6 block leading-relaxed">
                Clareza para decidir. Segurança para crescer.
              </span>
            </span>
          </div>

          {/* CTA Button */}
          <div className={`transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Button 
              onClick={handleFaleConsultorClick}
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar diagnóstico
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
