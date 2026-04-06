import { useEffect, useState, useCallback } from "react";

const slides = [
  {
    title: "Dashboard Financeiro",
    description: (
      <>
        Dashboard com visão completa do <strong className="text-primary">REALIZADO</strong> e do que está <strong className="text-primary">PREVISTO</strong>. Chega de sustos.
      </>
    ),
    content: (
      <div className="bg-primary/5 rounded-2xl p-6 border border-border/50">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: "A Receber", value: "R$ 333.617", color: "from-green-400 to-green-500" },
            { label: "A Pagar", value: "R$ 89.250", color: "from-red-400 to-red-500" },
            { label: "Saldo Projetado", value: "R$ 244.367", color: "from-blue-400 to-blue-500" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-3 text-center shadow-sm border border-border/30">
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-border/30">
          <p className="text-[10px] text-muted-foreground mb-1">Projeção para os próximos 15 dias</p>
          <div className="h-28 relative">
            <svg viewBox="0 0 300 80" className="w-full h-full" preserveAspectRatio="none">
              {[0, 20, 40, 60].map((y) => (
                <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4 2" />
              ))}
              <polygon
                points="0,70 20,68 40,65 60,64 80,60 100,58 120,55 140,50 160,48 180,35 200,30 220,28 240,22 260,18 280,15 300,12 300,80 0,80"
                fill="url(#areaGradientCarousel)"
                className="animate-[fade-in_1.5s_ease-out_forwards]"
              />
              <polyline
                points="0,70 20,68 40,65 60,64 80,60 100,58 120,55 140,50 160,48 180,35 200,30 220,28 240,22 260,18 280,15 300,12"
                fill="none"
                stroke="hsl(200, 90%, 55%)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="500"
                strokeDashoffset="500"
                className="animate-[line-draw_3s_ease-in-out_infinite]"
              />
              <defs>
                <linearGradient id="areaGradientCarousel" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(200, 90%, 55%)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(200, 90%, 55%)" stopOpacity="0.02" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-md">
              R$ 244.367
            </div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[9px] text-muted-foreground">Hoje</span>
            <span className="text-[9px] text-muted-foreground">+15 dias</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Visão Financeira e Econômica",
    description: (
      <>
        Análise do <strong className="text-primary">LUCRO</strong> do seu negócio através da Demonstração de Resultados do Exercício (DRE) e a <strong className="text-primary">GERAÇÃO DE CAIXA</strong> através do Fluxo de Caixa.
      </>
    ),
    content: (
      <div className="bg-primary/5 rounded-2xl p-6 border border-border/50">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-border/30 text-center animate-[float-up_3s_ease-in-out_infinite]">
            <p className="text-xs text-muted-foreground mb-3">DRE — Resultado</p>
            <div className="relative w-20 h-20 mx-auto">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="hsl(var(--border))" strokeWidth="3" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="hsl(210, 100%, 60%)" strokeWidth="3" strokeDasharray="72, 100" className="animate-[dash-loop_3s_ease-in-out_infinite]" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary">72%</span>
            </div>
            <p className="text-xs text-green-600 font-semibold mt-2">Margem Líquida</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-border/30 text-center animate-[float-down_3s_ease-in-out_infinite]">
            <p className="text-xs text-muted-foreground mb-3">Fluxo de Caixa</p>
            <div className="relative w-20 h-20 mx-auto">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="hsl(var(--border))" strokeWidth="3" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="hsl(160, 80%, 45%)" strokeWidth="3" strokeDasharray="85, 100" className="animate-[dash-loop_3s_ease-in-out_0.5s_infinite]" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary">85%</span>
            </div>
            <p className="text-xs text-blue-600 font-semibold mt-2">Geração de Caixa</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-border/30 text-center animate-[float-up_3.5s_ease-in-out_0.5s_infinite]">
            <p className="text-xs text-muted-foreground mb-2">Receita vs Despesa</p>
            <table className="w-full text-[10px]">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left p-1 text-muted-foreground font-medium">Mês</th>
                  <th className="text-right p-1 text-green-600 font-medium">Receita</th>
                  <th className="text-right p-1 text-red-500 font-medium">Despesa</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { m: "Jan", r: "18.500", d: "12.300" },
                  { m: "Fev", r: "21.200", d: "14.100" },
                  { m: "Mar", r: "19.800", d: "13.500" },
                  { m: "Abr", r: "24.600", d: "15.200" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/10">
                    <td className="text-left p-1 text-foreground">{row.m}</td>
                    <td className="text-right p-1 text-green-600 font-semibold">{row.r}</td>
                    <td className="text-right p-1 text-red-500 font-semibold">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-border/30 text-center animate-[float-down_3.5s_ease-in-out_0.5s_infinite]">
            <p className="text-xs text-muted-foreground mb-3">Evolução Mensal</p>
            <div className="h-20 flex items-end">
              <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
                <polyline
                  points="5,40 20,30 35,35 50,20 65,25 80,15 95,10"
                  fill="none"
                  stroke="hsl(210, 100%, 50%)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="200"
                  strokeDashoffset="200"
                  className="animate-[line-draw_3s_ease-in-out_infinite]"
                />
              </svg>
            </div>
            <p className="text-xs text-primary font-semibold mt-2">Tendência de Crescimento</p>
          </div>
        </div>
      </div>
    ),
  },
];

const BPOCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [current, goToSlide]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Slide content */}
      <div className="relative min-h-[500px] md:min-h-[420px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === current
                ? "opacity-100 translate-x-0 z-10"
                : index < current
                ? "opacity-0 -translate-x-8 z-0"
                : "opacity-0 translate-x-8 z-0"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-10 items-center h-full">
              <div className={index === 1 ? "order-2 md:order-2" : ""}>
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-4">
                  {slide.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {slide.description}
                </p>
              </div>
              <div className={index === 1 ? "order-1 md:order-1" : ""}>
                {slide.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-500 ${
              index === current
                ? "w-10 bg-primary"
                : "w-3 bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export { BPOCarousel };
