import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import BPOContactForm from "@/components/BPOContactForm";
import { SEOData, StructuredData } from "@/data/seoData";

import { 
  TrendingUp,
  Target,
  BarChart3,
  PieChart,
  Wallet,
  LineChart,
  FileSearch,
  Users,
  Calculator,
  Building2,
  ClipboardCheck,
  Lightbulb,
  Shield,
  ArrowUpRight,
  Search,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const faqItems = [
  {
    question: "O que faz um CFO terceirizado?",
    answer: "O CFO terceirizado assume a direção financeira da empresa, cuidando de planejamento, análise de resultados, fluxo de caixa, controladoria e estratégia. A diferença é que você conta com essa expertise sem precisar contratar um executivo em tempo integral."
  },
  {
    question: "Minha empresa já tem um financeiro. Ainda preciso de um CFO?",
    answer: "Sim. O financeiro operacional cuida das rotinas do dia a dia, que serão otimizadas pela experiência do CFO. Além de melhorar a operação do financeiro, o CFO traz visão estratégica: analisa indicadores, identifica oportunidades, estrutura o crescimento e orienta decisões diretamente com os gestores. São papéis complementares."
  },
  {
    question: "Qual o tamanho mínimo de empresa para ter um CFO terceirizado?",
    answer: "Não existe um tamanho mínimo. Empresas a partir de R$ 1 milhão de faturamento anual já se beneficiam de uma direção financeira estruturada. O escopo é adaptado à realidade e ao momento de cada negócio."
  },
  {
    question: "Como funciona na prática?",
    answer: "Começamos com um diagnóstico financeiro completo. A partir dele, definimos o plano de ação, as entregas e a frequência de acompanhamento. O CFO participa de reuniões, analisa resultados, orienta decisões e acompanha a execução da estratégia."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Nos primeiros 30 dias já entregamos o diagnóstico e as primeiras análises. Em 60 a 90 dias, os processos financeiros estão estruturados e os indicadores começam a mostrar evolução. O impacto estratégico cresce conforme o trabalho avança."
  },
  {
    question: "O CFO terceirizado substitui meu contador?",
    answer: "Não. O contador cuida das obrigações fiscais e contábeis. O CFO cuida da estratégia financeira, análise de resultados, planejamento e tomada de decisão. Os dois trabalham juntos, cada um no seu papel."
  },
  {
    question: "Como começo?",
    answer: "O primeiro passo é agendar uma conversa para entendermos o momento da sua empresa. A partir disso, fazemos o diagnóstico e apresentamos uma proposta sob medida."
  },
];

const ValoromCFO = () => {
  const servicos = [
    { 
      icon: Target, 
      title: "Ação Estratégica", 
      description: "Formulação e execução de estratégias financeiras para alocação eficiente de recursos e crescimento sustentável." 
    },
    { 
      icon: FileSearch, 
      title: "Análise de Viabilidade", 
      description: "Avaliação detalhada de investimentos, expansão ou reestruturação para decisões informadas." 
    },
    { 
      icon: BarChart3, 
      title: "Controladoria", 
      description: "Construção e análise do DRE, precificação, estudos de rentabilidade e planejamento orçamentário." 
    },
    { 
      icon: LineChart, 
      title: "Gestão de Fluxo de Caixa", 
      description: "Construção e análise de Fluxo de Caixa e Ciclo Financeiro, suporte na captação de recursos." 
    },
    { 
      icon: PieChart, 
      title: "Avaliação de Desempenho", 
      description: "Estudo de métricas como lucratividade, fluxo de caixa e eficiência operacional." 
    },
    { 
      icon: Calculator, 
      title: "Planejamento Orçamentário", 
      description: "Alinhamento orçamentário, metas financeiras compatíveis e alocação eficiente de recursos." 
    },
  ];

  const beneficios = [
    { 
      icon: Lightbulb, 
      title: "Visão Estratégica", 
      description: "Um CFO dedicado que traz a visão estratégica que você precisa para impulsionar seus resultados. Do operacional ao estratégico, nenhuma ponta fica solta." 
    },
    { 
      icon: Users, 
      title: "Direcionamento da Equipe", 
      description: "Relacionamento com o mercado financeiro e direcionamento da equipe interna." 
    },
    { 
      icon: ClipboardCheck, 
      title: "Análise Tributária", 
      description: "Análise de oportunidades fiscais e melhoria na estrutura dos demonstrativos contábeis." 
    },
    { 
      icon: Shield, 
      title: "Reestruturação de Passivos", 
      description: "Suporte na reestruturação financeira e captação de recursos para crescimento." 
    },
  ];

  const diferenciais = [
    "Mais tempo para o CEO focar na estratégia e sair do operacional",
    "Flexibilidade e expertise financeira sob demanda",
    "Decisões informadas com base em análises detalhadas",
    "Processo de transição seguro e profissional",
    "Performance financeira otimizada"
  ];

  return (
    <>
      <SEOHead
        title={SEOData.valorumCFO.title}
        description={SEOData.valorumCFO.description}
        keywords={SEOData.valorumCFO.keywords}
        canonical="https://valorum.vilsonrauch.com.br/cfo"
        structuredData={StructuredData.cfoService}
      />
      
      <div className="min-h-screen bg-background font-inter">
        <Navigation />
        
        
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary pt-28 sm:pt-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-1 bg-gradient-to-r from-lime-400 to-lime-500 mx-auto mb-8" />
              
              <p className="text-sm uppercase tracking-widest text-lime-400 font-semibold mb-6">
                Valorum CFO
              </p>
              
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight mb-6">
                Sua empresa cresce,{" "}
                <br className="hidden md:block" />
                mas falta direção financeira.
                <br />
                <span className="text-lime-400">A gente resolve.</span>
              </h1>
              
              {/* Visual service pillars */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-6">
                {[
                  { icon: <Target className="w-6 h-6" />, label: "Planejamento Estratégico" },
                  { icon: <BarChart3 className="w-6 h-6" />, label: "Controladoria" },
                  { icon: <Wallet className="w-6 h-6" />, label: "Fluxo de Caixa" },
                  { icon: <LineChart className="w-6 h-6" />, label: "Análise de Resultados" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-xl py-4 px-3 backdrop-blur-sm">
                    <div className="text-lime-400">{item.icon}</div>
                    <span className="text-sm text-gray-200 font-medium text-center leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-3 leading-relaxed">
                Mais que uma consultoria, entregamos um <span className="text-lime-400 font-semibold">gestor financeiro focado em otimizar a operação</span> e capacitar o seu time para entregas de alta performance.
              </p>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-3 leading-relaxed">
                Tenha a visão que falta ao seu negócio para escalar com segurança e a estrutura de um <span className="text-lime-400 font-semibold">CFO dedicado</span> à sua estratégia.
              </p>
              <p className="text-base md:text-lg text-white font-semibold max-w-3xl mx-auto mb-8">
                +de 20 anos de otimização de operações entregues por uma metodologia que funciona.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <a href="#contato-cfo">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-primary font-semibold px-10 py-7 text-lg rounded-xl shadow-lg shadow-lime-500/30 hover:shadow-xl hover:shadow-lime-500/40 transition-all duration-300 border border-lime-300/20"
                  >
                    Quero um Diagnóstico Gratuito
                  </Button>
                </a>
              </div>
              <p className="text-sm text-gray-500">
                Resposta em até 2 horas em dias úteis · Sem compromisso
              </p>
            </div>
          </div>
        </section>

        {/* O que você recebe Section */}
        <section id="cfo-servicos" className="py-24 bg-white scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                O que você recebe
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Serviços completos de direção financeira para transformar a gestão da sua empresa
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {servicos.map((item, index) => (
                <div 
                  key={index}
                  className="group p-8 bg-primary rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-lime-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-400/30 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-lime-400" />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-lime-400 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios Section */}
        <section id="cfo-metodologia" className="py-24 bg-gradient-to-b from-lime-50 to-white scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Nossa Metodologia
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Uma abordagem integrada para transformar sua gestão financeira
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {beneficios.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-2xl border border-lime-200 hover:shadow-lg hover:border-lime-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center flex-shrink-0">
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

        {/* Diferenciais Section */}
        <section id="cfo-diferenciais" className="py-24 bg-white scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                  Por que terceirizar seu CFO?
                </h2>
              </div>
              
              <div className="space-y-4">
                {diferenciais.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-5 bg-gradient-to-r from-lime-50 to-white rounded-xl border border-lime-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
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
        <section id="cfo-propostas" className="py-24 bg-primary scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-4">
                Propostas <span className="italic text-lime-400">sob medida</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                As necessidades, o momento e os objetivos do seu negócio são <span className="text-white font-semibold">únicos</span> — por isso não trabalhamos com pacotes prontos.
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mt-3">
                Criamos uma <span className="text-lime-400 font-semibold">proposta personalizada</span> que se adapta à sua realidade.
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mt-2">
                Analisamos a fundo a gestão financeira da sua empresa antes de propor qualquer solução — e dedicamos um profissional sênior focado no seu negócio.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {[
                { icon: Search, title: "Diagnóstico personalizado", description: "Analisamos a fundo a gestão financeira da sua empresa antes de propor qualquer solução." },
                { icon: Users, title: "CFO dedicado", description: "Um profissional sênior focado no seu negócio." },
                { icon: Settings, title: "Escopo flexível", description: "Você contrata apenas o que precisa — e escala conforme a empresa cresce." },
                { icon: Shield, title: "Sem surpresas", description: "Preço justo, transparente e alinhado ao tamanho e complexidade da sua operação." },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-8 bg-primary/80 rounded-2xl text-center border border-lime-400/20 hover:border-lime-400/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center mx-auto mb-5">
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
              <a href="#contato-cfo">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-primary font-semibold px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Solicitar Proposta Personalizada
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="cfo-publico" className="py-24 bg-gradient-to-b from-muted/30 to-background scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="w-12 h-1 bg-gradient-to-r from-lime-400 to-lime-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                Expertise que atende o seu segmento
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Nossa metodologia já foi aplicada com sucesso em diversos setores.
              </p>
              <p className="text-lg text-primary font-semibold mt-2">
                Ela guia e te dá direção.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
                {[
                  { icon: Building2, title: "Indústrias" },
                  { icon: Users, title: "Clínicas Médicas" },
                  { icon: Users, title: "Clínicas Odontológicas" },
                  { icon: Users, title: "Empresas Familiares" },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group p-6 bg-white rounded-2xl text-center border border-border/40 hover:shadow-xl hover:border-lime-300 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-lime-200/50">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-primary text-sm md:text-base">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
                {[
                  { icon: Building2, title: "PMEs em crescimento" },
                  { icon: TrendingUp, title: "Startups em expansão" },
                  { icon: Wallet, title: "Negócios em reestruturação" },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group p-6 bg-white rounded-2xl text-center border border-border/40 hover:shadow-xl hover:border-lime-300 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-lime-200/50">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-primary text-sm md:text-base">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="cfo-faq" className="py-24 bg-white scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Perguntas frequentes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tire suas dúvidas sobre o CFO Terceirizado
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-lime-200 rounded-xl px-6 data-[state=open]:border-lime-400 transition-colors duration-300"
                  >
                    <AccordionTrigger className="text-left text-primary font-semibold hover:text-lime-600 hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cfo-cta" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary scroll-mt-28">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Sua empresa merece uma direção financeira estratégica.
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Agende uma sessão gratuita. Sem compromisso, sem enrolação — só clareza sobre como estruturar o financeiro para o seu negócio crescer com segurança.
            </p>
            <a href="#contato-cfo">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-primary font-semibold px-10 py-7 text-lg rounded-xl shadow-lg shadow-lime-500/30 hover:shadow-xl hover:shadow-lime-500/40 transition-all duration-300 border border-lime-300/20"
              >
                Agendar Minha Sessão Gratuita
              </Button>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Resposta em até 2 horas em dias úteis · Sem compromisso
            </p>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section id="contato-cfo" className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-4">
                  Solicite seu{" "}
                  <span className="text-lime-400">diagnóstico gratuito</span>
                </h2>
                <p className="text-lg text-gray-300">
                  Preencha o formulário e nossa equipe entrará em contato para entender sua empresa e apresentar uma proposta sob medida.
                </p>
              </div>
              <BPOContactForm />
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton message="Olá! Gostaria de saber como funciona sobre gestão financeira" />
      </div>
    </>
  );
};

export default ValoromCFO;