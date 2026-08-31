import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";


const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const handleFaleConsultorClick = () => {
    const message = encodeURIComponent("Olá gostaria de mais informações");
    const whatsappUrl = `https://wa.me/5511959586722?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-28 sm:pt-16">
      <div ref={elementRef} className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Brand wordmark */}
          <div className={`mb-6 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="sr-only">Norgie Financeiro — Terceirização Financeira</h1>
            <img
              src={norgieWordmark.url}
              alt="Norgie Financeiro — Terceirização Financeira"
              className="w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto h-auto"
            />
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
              </div>
              
              {/* Sub-brand descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-3xl mx-auto">
                <Link to="/bpo" className="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500 hover:shadow-md transition-all duration-300 group">
                  <h3 className="font-bold text-blue-600 mb-0.5 text-base">Terceirização Financeira</h3>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide block mb-2">Grupo Valorum BPO</span>
                  <p className="text-sm text-gray-600 mb-3">Gestão financeira completa para sua empresa com controle, organização e previsibilidade.</p>
                  <span className="text-xs font-bold text-blue-600 group-hover:underline">Conhecer solução →</span>
                </Link>
                <Link to="/cfo" className="p-4 rounded-lg bg-lime-50 border-l-4 border-lime-500 hover:shadow-md transition-all duration-300 group">
                  <h3 className="font-bold text-lime-600 mb-0.5 text-base">Direção Financeira</h3>
                  <span className="text-xs font-semibold text-lime-500 uppercase tracking-wide block mb-2">Grupo Valorum CFO</span>
                  <p className="text-sm text-gray-600 mb-3">Direcionamento financeiro competente e atualizado. Apoio para as decisões financeiras e estratégicas.</p>
                  <span className="text-xs font-bold text-lime-600 group-hover:underline">Conhecer solução →</span>
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
