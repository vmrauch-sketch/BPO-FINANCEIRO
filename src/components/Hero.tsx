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
      {/* Background Compass Rose */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 600 600"
          className="w-[120vw] h-[120vw] md:w-[80vh] md:h-[80vh] max-w-[900px] max-h-[900px] opacity-[0.07] text-navy-600 animate-spin-slow"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer ring */}
          <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="250" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" />
          <circle cx="300" cy="300" r="160" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="60" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Cardinal cross */}
          <line x1="300" y1="20" x2="300" y2="580" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="300" x2="580" y2="300" stroke="currentColor" strokeWidth="0.5" />
          
          {/* Diagonal cross */}
          <line x1="90" y1="90" x2="510" y2="510" stroke="currentColor" strokeWidth="0.5" />
          <line x1="510" y1="90" x2="90" y2="510" stroke="currentColor" strokeWidth="0.5" />
          
          {/* North petal */}
          <path d="M300 20 L285 220 L300 260 L315 220 Z" fill="currentColor" />
          {/* East petal */}
          <path d="M580 300 L380 285 L340 300 L380 315 Z" fill="currentColor" />
          {/* South petal */}
          <path d="M300 580 L315 380 L300 340 L285 380 Z" fill="currentColor" />
          {/* West petal */}
          <path d="M20 300 L220 315 L260 300 L220 285 Z" fill="currentColor" />
          
          {/* Intercardinal small petals */}
          <path d="M90 90 L180 200 L200 180 Z" fill="currentColor" opacity="0.6" />
          <path d="M510 90 L420 200 L400 180 Z" fill="currentColor" opacity="0.6" />
          <path d="M510 510 L420 400 L400 420 Z" fill="currentColor" opacity="0.6" />
          <path d="M90 510 L180 400 L200 420 Z" fill="currentColor" opacity="0.6" />
          
          {/* Center jewel */}
          <circle cx="300" cy="300" r="20" fill="currentColor" />
          <circle cx="300" cy="300" r="8" className="text-gold-500" fill="currentColor" />
        </svg>
      </div>

      <div ref={elementRef} className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand Image */}
          <div className={`mb-8 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mx-auto">
              <img 
                src="/lovable-uploads/aee87d30-fa30-44ea-bc48-89ef4d0f7e2c.png" 
                alt="Grupo Valorum Logo" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Brand Name */}
          <div className={`mb-4 transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-navy-600 tracking-wide">
              NORGIE FINANCEIRO
            </h1>
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
