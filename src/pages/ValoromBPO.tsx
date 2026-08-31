import { useState, useRef, useEffect } from 'react';
import { Navigation } from "@/components/Navigation";

import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { BPOCarousel } from "@/components/BPOCarousel";

import norgieLogo from "@/assets/norgie-logo.png.asset.json";
import rosaDosVentos from "@/assets/rosa-dos-ventos-hero.png.asset.json";
import newsExame from "@/assets/news-exame.jpg";
import newsCartaCapital from "@/assets/news-cartacapital.jpg";
import newsBemParana from "@/assets/news-bemparana.jpg";
import newsBrasilEmFolhas from "@/assets/news-brasilemfolhas.jpg";
import newsValorEconomico from "@/assets/news-valoreconomico.jpg";
import newsSebrae from "@/assets/news-sebrae.jpg";
import newsSerasa from "@/assets/news-serasa.png";

import { 
  ClipboardCheck,
  Search,
  Settings,
  KeyRound,
  GitBranch,
  PlayCircle,
  BarChart3,
  FileText,
  Users,
  Building2,
  TrendingUp,
  Wallet,
  ArrowUpRight,
  Shield,
  Clock,
  LayoutDashboard,
  PieChart,
  Receipt
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BPOContactForm from "@/components/BPOContactForm";


const faqItems = [
  {
    question: "O que exatamente é a terceirização financeira?",
    answer: "A terceirização financeira é a operação financeira da empresa conduzida por especialistas. Inclui organização das contas a pagar e receber, conciliação bancária, controle do fluxo de caixa, relatórios gerenciais e padronização das rotinas. A empresa mantém as decisões, com o financeiro estruturado e acompanhado."
  },
  {
    question: "Minha empresa já tem alguém no financeiro. O BPO ainda faz sentido?",
    answer: "O BPO pode atuar em conjunto com a equipe interna, organizando processos, trazendo método e acompanhando indicadores. Em muitos casos, a equipe existente continua executando tarefas operacionais, enquanto o BPO assume controle, padronização, relatórios e visão estratégica. O resultado é mais eficiência sem necessidade de aumentar estrutura."
  },
  {
    question: "Vale a pena terceirizar se minha empresa é pequena?",
    answer: "Sim. Empresas pequenas também se beneficiam da terceirização financeira. Com a terceirização, as rotinas passam a ter organização, controle e previsibilidade, sem necessidade de montar uma estrutura interna. Isso reduz erros, evita atrasos e permite que a empresa foque no crescimento com o financeiro estruturado desde o início."
  },
  {
    question: "Meus dados financeiros estarão seguros?",
    answer: "Sim. Os dados são tratados com confidencialidade, acessos controlados e processos definidos. Todas as movimentações ficam registradas, garantindo rastreabilidade e transparência. A empresa mantém autonomia e visibilidade sobre as informações financeiras."
  },
  {
    question: "Vocês fazem os pagamentos das minhas contas?",
    answer: "Organizamos, agendamos e controlamos todas as contas a pagar e receber, com alertas e aprovações quando necessário. A liberação dos pagamentos pode ser feita pela própria empresa, mantendo total controle, ou o fluxo pode ser configurado conforme a preferência e política definida."
  },
  {
    question: "Quanto tempo leva para começar?",
    answer: "Após o diagnóstico inicial, iniciamos a organização das rotinas financeiras e a estruturação dos processos. O prazo varia conforme a complexidade da empresa, mas em pouco tempo o financeiro já passa a operar com controle, conciliação e fluxo de caixa atualizado."
  },
  {
    question: "Como começo?",
    answer: "O primeiro passo é um diagnóstico financeiro para entender a estrutura atual, identificar necessidades e definir o escopo de atuação. A partir disso, organizamos os processos, implantamos as rotinas e iniciamos o acompanhamento contínuo do financeiro."
  },
];

// Seção "Nossos Planos" oculta temporariamente — mudar para true para reexibir
const SHOW_PLANOS = false;

const ValoromBPO = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleShowForm = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  useEffect(() => {
    if (window.location.hash === '#contato-bpo') {
      setShowForm(true);
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }, []);

  const servicos = [
    { 
      icon: BarChart3, 
      title: "Contas a Pagar e Receber", 
      description: "Controle completo de obrigações e recebimentos com organização e pontualidade." 
    },
    { 
      icon: FileText, 
      title: "Conciliação Bancária", 
      description: "Conferência diária das movimentações para manter os registros sempre atualizados." 
    },
    { 
      icon: TrendingUp, 
      title: "Fluxo de Caixa", 
      description: "Acompanhamento em tempo real da saúde financeira para decisões mais seguras." 
    },
    { 
      icon: Shield, 
      title: "Relatórios Gerenciais", 
      description: "Informações claras e organizadas para apoiar a tomada de decisão da gestão." 
    },
  ];

  const diferenciais = [
    "Mais tempo para focar no crescimento do negócio",
    "Redução de erros e retrabalho financeiro",
    "Processos padronizados e previsíveis",
    "Relatórios claros para decisões informadas",
    "Controle financeiro com disciplina e eficiência"
  ];

  return (
    <>
      <SEOHead
        title="Norgie Financeiro | Terceirização Financeira"
        description="Terceirização financeira para sua empresa crescer com controle e clareza. Gestão financeira completa com processos definidos e acompanhamento contínuo."
        keywords="terceirização financeira, departamento financeiro terceirizado, gestão financeira, contas a pagar, fluxo de caixa, conciliação bancária"
        canonical="https://valorum.vilsonrauch.com.br"
      />
      
      <div className="min-h-screen bg-background font-inter">
        <Navigation />
        
        
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary/90 to-primary pt-40 sm:pt-28">
          <div className="absolute inset-0 overflow-hidden">
            {/* Rosa dos ventos como marca d'água sutil no fundo azul */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none animate-compass-sweep"
              style={{ 
                maskImage: 'radial-gradient(circle, black 25%, transparent 70%)', 
                WebkitMaskImage: 'radial-gradient(circle, black 25%, transparent 70%)'
              }}
            >
              <img
                src={rosaDosVentos.url}
                alt=""
                aria-hidden="true"
                className="w-[600px] lg:w-[800px] h-auto opacity-[0.03]"
                style={{ filter: 'grayscale(100%) brightness(0.7) sepia(1) hue-rotate(175deg) saturate(2)' }}
              />
            </div>
            {/* Vignette escurecida sobre a área da bussola */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(circle at center, rgba(15,23,42,0.72) 0%, transparent 65%)' }}
            />
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          </div>
          {/* Overlay geral para escurecer o azul do hero */}
          <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="relative grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
              {/* Left - Logo + Text */}
              <div className="text-center md:text-left">
                {/* Logo alinhado à esquerda */}
                <div className="flex flex-col items-center md:items-start mb-8">
                {/* Tag com ponto animado — primeiro elemento visual do hero */}
                  <div className="inline-flex items-center gap-2 mt-10 mb-5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                    <span className="animate-dot-blink inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" aria-hidden="true" />
                    Terceirização Financeira
                  </div>

                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mb-6" />
                  <div className="bg-white rounded-2xl px-6 py-4 inline-flex">
                    <img
                      src={norgieLogo.url}
                      alt="Norgie Financeiro — Terceirização Financeira e BPO Financeiro"
                      className="h-auto w-[260px] md:w-[340px]"
                    />
                  </div>

                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-4">
                  Sua empresa tem muitos desafios.{" "}
                  <br className="hidden md:block" />
                  <span className="text-blue-400 inline-block">O financeiro a gente resolve.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-blue-200/80 font-inter mb-6">
                  A clareza e o controle<br />
                  que as Finanças da sua empresa precisam
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-4">
                  <Button 
                    size="lg"
                    onClick={handleShowForm}
                    className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 border border-blue-300/20"
                  >
                    Fazer diagnóstico com a Norgie
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  Diagnóstico de 30 minutos e gratuito
                </p>

              </div>

              {/* Right - Floating Dashboard Cards */}
              <div className="hidden md:block relative h-[460px] mt-4">
                {/* Card 1 - Faturamento Mensal */}
                <div className="absolute top-[40px] left-0 w-64 bg-[#1a1a2e]/90 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-5 shadow-2xl shadow-blue-500/10 animate-[float-up_4s_ease-in-out_infinite]">
                  <p className="text-[11px] uppercase tracking-widest text-blue-300/60 font-semibold mb-2">Faturamento Mensal</p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-2xl font-bold text-white">R$</span>
                    <span className="text-2xl font-bold text-green-400">↑ 15%</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-12">
                    {[35, 48, 42, 55, 52, 68, 62, 78].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{ height: `${h}%`, background: `linear-gradient(to top, #b8860b, #D4AF37)` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Card 2 - Fluxo de Caixa */}
                <div className="absolute top-[170px] right-4 w-56 bg-[#1a1a2e]/90 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-5 shadow-2xl shadow-blue-500/10 animate-[float-down_3.5s_ease-in-out_infinite]">
                  <p className="text-[11px] uppercase tracking-widest text-blue-300/60 font-semibold mb-2">Fluxo de Caixa</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-white">Positivo</span>
                    <span className="text-green-400 text-xl font-bold">✓</span>
                  </div>
                  <svg viewBox="0 0 120 30" className="w-full h-8">
                    <polyline
                      points="0,22 15,19 30,24 45,16 60,18 75,11 90,13 105,7 120,9"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Card 3 - EBITDA */}
                <div className="absolute top-[330px] right-10 w-48 bg-[#1a1a2e]/90 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-5 shadow-2xl shadow-blue-500/10 animate-[float-up_5s_ease-in-out_0.5s_infinite]">
                  <p className="text-[11px] uppercase tracking-widest text-blue-300/60 font-semibold mb-2">EBITDA</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">31,2%</span>
                    <span className="text-green-400 text-2xl font-bold">↑</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* Parceiro Confiável Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary leading-tight">
                Seu Parceiro Confiável de{" "}
                <span className="italic text-blue-500">Gestão e Operação Financeira</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                O Grupo Valorum une especialização e metodologia para transformar a rotina financeira da sua empresa em resultados previsíveis.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
              {[
                { num: "01.", title: "Serviço Para Todo Porte de Empresa", description: "Desde micro até grandes empresas e operações. A metodologia Norgie do Grupo Valorum se adapta ao seu negócio e cresce junto com você.", highlight: false },
                { num: "02.", title: "Melhores Práticas do Mercado", description: "Metodologias comprovadas de gestão financeira aplicadas com atendimento dedicado e personalizado para cada cliente.", highlight: true },
                { num: "03.", title: "Protegido e Seguro", description: "Dados tratados com confidencialidade, processos auditáveis e controle total para sua tranquilidade. Você e seu contador sempre atualizados.", highlight: false },
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`p-8 rounded-2xl text-center transition-all duration-300 ${
                    item.highlight 
                      ? "bg-primary text-white shadow-xl scale-105" 
                      : "bg-white border border-border/50 hover:shadow-lg"
                  }`}
                >
                  <p className={`text-2xl font-bold mb-3 ${item.highlight ? "text-blue-400" : "text-primary"}`}>
                    {item.num}
                  </p>
                  <h3 className={`text-lg font-bold mb-4 ${item.highlight ? "text-white" : "text-primary"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${item.highlight ? "text-gray-300" : "text-muted-foreground"}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Departamento Financeiro Section */}
        <section id="bpo-servicos" className="py-24 bg-primary scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white leading-tight">
                Seu departamento financeiro.
              </h2>
              <p className="text-xl text-blue-300 mt-4 font-medium">
                Na Controladoria ou na Tesouraria
              </p>
            </div>
            
            <h3 className="text-center text-4xl md:text-5xl font-playfair font-bold text-white mb-16">
              Sem Folha de Pagamento.
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { icon: BarChart3, title: "Contas a Pagar e Receber", description: "Gestão completa do seu fluxo de caixa" },
                { icon: TrendingUp, title: "Dashboards em Tempo Real", description: "Visão 360° das suas finanças" },
                { icon: FileText, title: "Relatórios Estratégicos", description: "Dados que viram decisões de negócio" },
                { icon: Users, title: "Time Dedicado", description: "Especialistas exclusivos para sua empresa" },
                { icon: Clock, title: "Planejamento Financeiro", description: "Projeções e metas com ciência" },
                { icon: Shield, title: "Precificação Inteligente", description: "Margem certa para lucrar mais" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-primary/60 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O que você recebe - Carousel Section */}
        <section className="py-24 bg-gradient-to-b from-muted/30 to-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-2xl md:text-3xl font-bold text-primary/80 mb-3">Além da operação</p>
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-4">
                O que você <span className="italic text-blue-500">recebe</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ferramentas e entregas que transformam dados em decisões estratégicas para o seu negócio.
              </p>
            </div>

            <BPOCarousel />

            <div className="text-center mt-12">
              <Button 
                size="lg"
                onClick={handleShowForm}
                className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 border border-blue-300/20"
              >
                Quero Esse Painel na Minha Empresa
              </Button>
            </div>

          </div>
        </section>


        <section id="bpo-resultados" className="py-24 bg-primary/95 scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-6">
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                Por que resultados falam mais alto
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Veja o que muda quando você entrega seu financeiro para quem realmente entende.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16 mb-12">
              {[
                { title: "Seu tempo e foco de volta", description: "Cada hora que você gasta em planilha é uma hora que deixou de vender, crescer e focar no que você deve fazer.", color: "from-blue-400/60 to-blue-500/20" },
                { title: "Segurança blindada", description: "Contratos com cláusula de sigilo, sistemas criptografados e processos auditáveis. Suas informações estão protegidas.", color: "from-red-400/60 to-red-500/20" },
                { title: "Crescimento previsível", description: "Quando você cresce, só o feeling pode não ser suficiente. Com dados reais e projeções concretas, você sabe exatamente para onde seu negócio vai.", color: "from-purple-400/60 to-purple-500/20" },
                { title: "Zero dor de cabeça com RH", description: "Sem processo seletivo, sem treinamento, sem encargo. O time já está pronto e começa a trabalhar pela sua empresa agora.", color: "from-yellow-400/60 to-yellow-500/20" },
                { title: "Conformidade garantida", description: "Esqueça multas por atraso e obrigações perdidas. A gente acompanha tudo e você nunca mais paga por descuido.", color: "from-green-400/60 to-green-500/20" },
                { title: "Visão estratégica do negócio", description: "Todo mês você recebe um relatório que mostra onde está indo seu dinheiro — e como lucrar mais com o que já tem.", color: "from-cyan-400/60 to-cyan-500/20" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${item.color}`} />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={handleShowForm}
                className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 border border-blue-300/20"
              >
                Quero Esses Resultados
              </Button>
            </div>
          </div>
        </section>

        {/* Comece em 3 passos Section */}
        <section id="bpo-passos" className="py-24 bg-primary scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight">
                Comece em <span className="italic text-blue-400">3 passos simples</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {[
                { icon: Search, num: "01", title: "Diagnóstico gratuito", description: "Em uma reunião rápida, mapeamos a situação financeira da sua empresa e identificamos os maiores gargalos." },
                { icon: FileText, num: "02", title: "Migração assistida", description: "Nossa equipe guia você em todo o processo de transição — sem burocracia, sem estresse e sem parar sua operação." },
                { icon: Clock, num: "03", title: "Foque na gestão", description: "A partir daí, você só acompanha os dashboards e relatórios. Nós cuidamos de todo o resto, com total transparência." },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 relative"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-5xl font-bold text-white/10 font-playfair">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={handleShowForm}
                className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 border border-blue-300/20"
              >
                Quero Começar
              </Button>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                O que entregamos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Gestão financeira completa para sua empresa
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {servicos.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-2xl border border-blue-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-playfair font-bold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planos Section — oculta temporariamente (SHOW_PLANOS) */}
        {SHOW_PLANOS && (
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">

          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-4">
                Nossos <span className="italic text-blue-500">Planos</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Escolha o nível de atuação ideal para o momento da sua empresa.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Plano Start */}
              <div className="p-8 bg-white rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-50 px-3 py-1 rounded-full">Operacional</span>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-primary mb-4">Start</h3>
                <p className="text-sm text-muted-foreground mb-6">Execução e organização da rotina financeira.</p>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <ClipboardCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-primary font-medium">Lançamentos de contas a pagar e receber</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <ClipboardCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-primary font-medium">Emissão de NFs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <ClipboardCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-primary font-medium">Conciliação bancária</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button onClick={handleShowForm} variant="outline" className="w-full border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-5 rounded-xl transition-all duration-300">
                    Agendar Diagnóstico
                  </Button>
                </div>
              </div>

              {/* Plano Flow */}
              <div className="p-8 bg-primary rounded-2xl border-2 border-blue-400/30 hover:shadow-xl transition-all duration-300 flex flex-col scale-105 shadow-xl">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-400/20 px-3 py-1 rounded-full">Operacional+</span>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-4">Flow</h3>
                <p className="text-sm text-blue-200/80 mb-6">Visão completa do caixa para decisões ágeis.</p>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-400/40 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] text-blue-200 font-bold">S</span>
                    </div>
                    <span className="text-sm text-blue-200/70 font-medium italic">Start +</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-white font-semibold">Fluxo de Caixa</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button onClick={handleShowForm} className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-5 rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300">
                    Agendar Diagnóstico
                  </Button>
                </div>
              </div>

              {/* Plano Advisory */}
              <div className="p-8 bg-white rounded-2xl border-2 border-[#D4AF37]/40 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full">Aconselhamento</span>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-primary mb-4">Advisory</h3>
                <p className="text-sm text-muted-foreground mb-6">Apoio estratégico à tomada de decisão.</p>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-400/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] text-blue-400 font-bold">F</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium italic">Flow +</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                      <Wallet className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-primary font-semibold">Agendamento bancário</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                      <PieChart className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-primary font-semibold">Suporte à Tomada de Decisão</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button onClick={handleShowForm} variant="outline" className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white font-semibold py-5 rounded-xl transition-all duration-300">
                    Agendar Diagnóstico
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}


        {/* CTA Intermediário */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-6">
              Sua empresa merece um financeiro
              <br />
              <span className="text-blue-400">que trabalha para você.</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Agende seu diagnóstico gratuito. Sem enrolação — só clareza sobre onde seu dinheiro está indo e como fazer ele trabalhar por você.
            </p>
            <Button 
              size="lg" 
              onClick={handleShowForm}
              className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 border border-blue-300/20"
            >
              Agendar Meu Diagnóstico
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Seus dados estão seguros
            </p>
          </div>
        </section>

        {/* Quem está por trás — Fundador */}
        <section id="bpo-fundador" className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
                {/* Foto do fundador */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-56 h-56 rounded-2xl overflow-hidden border-4 border-blue-400/30 shadow-2xl shadow-blue-500/20 bg-white/5">
                    <img
                      src="/lovable-uploads/vilson-rauch.png"
                      alt="Vilson Rauch — Fundador da Norgie"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        target.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                        const icon = document.createElement('div');
                        icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-300/50"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
                        target.parentElement?.appendChild(icon);
                      }}
                    />
                  </div>
                </div>

                {/* Texto */}
                <div className="text-center md:text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
                    Quem está por trás
                  </p>
                  <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">
                    Vilson Rauch
                  </h2>
                  <p className="text-lg text-blue-300/90 font-medium mb-8">
                    Fundador da Norgie
                  </p>

                  <div className="space-y-5 text-gray-300 leading-relaxed text-base md:text-lg">
                    <p>
                      A <strong className="text-white">Norgie</strong> nasceu de uma percepção na gestão de empresas: faturamento entra, o dinheiro some e ninguém sabe quanto realmente é o caixa do mês.
                    </p>
                    <p>
                      Foi atuando na gestão de empresas que Vilson construiu uma metodologia para organizar e integrar o financeiro. Um método validado na prática, com experiência em gestão, economia de empresas e contabilidade. Nada de teoria <span className="font-playfair italic text-white/90">solta.</span>
                    </p>
                    <p>
                      Processo definido, número conferido e relatório que o dono da empresa entende sem precisar de tradução.
                    </p>
                    <p>
                      Hoje, com o apoio da tecnologia, essa metodologia entrega resultados cada vez mais rápidos e precisos aos clientes.
                    </p>
                    <p className="text-xl md:text-2xl font-playfair italic text-blue-400 pt-2">
                      Precisão nos dados vira vantagem na tomada de decisão.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section id="bpo-diferenciais" className="py-24 bg-white scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                  Por que terceirizar o financeiro?
                </h2>
              </div>
              
              <div className="space-y-4">
                {diferenciais.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-5 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-primary font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Propostas sob medida Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-4">
                Propostas <span className="italic text-blue-400">sob medida</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                As necessidades, o momento e os objetivos do seu negócio são <span className="text-white font-semibold">únicos</span> — por isso não trabalhamos com pacotes prontos.
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mt-3">
                Criamos uma <span className="text-blue-400 font-semibold">proposta personalizada</span> que se adapta à sua realidade.
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mt-2">
                Analisamos a fundo a operação financeira da sua empresa antes de propor qualquer solução — e montamos uma equipe sob medida, com profissionais especializados.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {[
                { icon: Search, title: "Diagnóstico personalizado", description: "Analisamos a fundo a operação financeira da sua empresa antes de propor qualquer solução." },
                { icon: Users, title: "Time dedicado", description: "Montamos uma equipe sob medida, com profissionais especializados." },
                { icon: Settings, title: "Escopo flexível", description: "Você contrata apenas o que precisa — e escala conforme a empresa cresce." },
                { icon: Shield, title: "Sem surpresas", description: "Preço justo, transparente e alinhado ao tamanho e complexidade da sua operação." },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-8 bg-primary/80 rounded-2xl text-center border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={handleShowForm}
                variant="outline"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Solicitar Proposta Personalizada
              </Button>
            </div>
          </div>
        </section>



        {/* FAQ Section */}
        <section id="bpo-faq" className="py-24 bg-white scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Perguntas frequentes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tire suas dúvidas sobre a Terceirização Financeira
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="border border-border/50 rounded-xl px-6 data-[state=open]:border-blue-300 data-[state=open]:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Formulário de Contato — exibido apenas após clique em algum CTA */}
        {showForm && (
          <section ref={formRef} id="contato-bpo" className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-4">
                    Solicite seu{" "}
                    <span className="text-blue-400">diagnóstico gratuito</span>
                  </h2>
                  <p className="text-lg text-gray-300">
                    Nos conte um pouco mais sobre a sua empresa! Em breve entraremos em contato.
                  </p>
                </div>
                <BPOContactForm />
              </div>
            </div>
          </section>
        )}

        <Footer />
        <WhatsAppButton message="Olá! Gostaria de saber como funciona sobre terceirizar o financeiro" />
      </div>
    </>
  );
};

export default ValoromBPO;
