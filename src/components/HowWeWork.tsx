

import { Lightbulb, MessageCircle, Settings, Target, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const HowWeWork = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: processRef, isVisible: processVisible } = useScrollAnimation();

  const processSteps = [
    {
      title: "Entender",
      subtitle: "Diagnóstico financeiro completo.",
      icon: Lightbulb,
      description:
        "Analisamos sua situação atual e objetivos para criar a base do seu planejamento.",
    },
    {
      title: "Definir",
      subtitle: "Plano sólido e previsível para longo prazo.",
      icon: Target,
      description:
        "Estruturamos estratégias personalizadas alinhadas aos seus objetivos e horizonte.",
    },
    {
      title: "Implementar",
      subtitle: "Execução eficiente e sem viés.",
      icon: Settings,
      description:
        "Colocamos o plano em ação com metodologia rigorosa e acompanhamento constante.",
    },
    {
      title: "Acompanhar",
      subtitle: "Ajustes constantes, sempre alinhados aos seus objetivos.",
      icon: Users,
      description:
        "Monitoramos resultados e realizamos ajustes para manter o plano sempre otimizado.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="como-atuamos">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
              headerVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-navy-600 mb-4">
                Como Atuamos
              </h2>
              <div className="absolute bottom-2 left-0 w-16 h-1 bg-gold-500"></div>
            </div>
          </div>

          {/* Processo Estruturado */}
          <div ref={processRef} className="mb-20">
            <h3
              className={`text-3xl md:text-4xl font-playfair font-semibold text-navy-600 text-center mb-6 leading-tight transform transition-all duration-1000 ease-out ${
                processVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Nosso processo é estruturado para garantir que cada decisão patrimonial e
              financeira faça sentido para você.
            </h3>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-1000 ease-out group transform ${
                      processVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                    style={{
                      transitionDelay: processVisible ? `${index * 150}ms` : "0ms",
                    }}
                  >
                    <div className="text-center">
                      {/* Ícone */}
                      <div className="w-16 h-16 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-corporate-500 transition-colors duration-300">
                        <IconComponent size={28} className="text-white" />
                      </div>

                      {/* Título */}
                      <h4 className="text-2xl md:text-3xl font-playfair font-bold text-navy-600 mb-3 leading-tight">
                        {step.title}
                      </h4>

                      {/* Subtítulo */}
                      <p className="text-base font-inter font-medium mb-4 text-gray-700 leading-relaxed">
                        {step.subtitle}
                      </p>

                      {/* Descrição */}
                      <p className="text-sm font-inter text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div
              className={`text-center mt-12 transform transition-all duration-1000 ease-out delay-700 ${
                processVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <Button
                onClick={() => {
                  const message = encodeURIComponent("Olá gostaria de mais informações");
                  window.open(
                    `https://wa.me/5511949566290?text=${message}`,
                    "_blank"
                  );
                }}
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale com um Consultor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HowWeWork };


