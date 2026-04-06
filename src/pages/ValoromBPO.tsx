import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { BPOCarousel } from "@/components/BPOCarousel";

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
    question: "O que exatamente é BPO Financeiro?",
    answer: "BPO Financeiro é a terceirização da operação financeira da empresa. Inclui organização das contas a pagar e receber, conciliação bancária, controle do fluxo de caixa, relatórios gerenciais e padronização das rotinas. A empresa mantém as decisões, com o financeiro estruturado e acompanhado."
  },
  {
    question: "Minha empresa já tem alguém no financeiro. O BPO ainda faz sentido?",
    answer: "O BPO pode atuar em conjunto com a equipe interna, organizando processos, trazendo método e acompanhando indicadores. Em muitos casos, a equipe existente continua executando tarefas operacionais, enquanto o BPO assume controle, padronização, relatórios e visão estratégica. O resultado é mais eficiência sem necessidade de aumentar estrutura."
  },
  {
    question: "Vale a pena terceirizar se minha empresa é pequena?",
    answer: "Sim. Empresas pequenas também se beneficiam da terceirização financeira. Com o BPO, as rotinas passam a ter organização, controle e previsibilidade, sem necessidade de montar uma estrutura interna. Isso reduz erros, evita atrasos e permite que a empresa foque no crescimento com o financeiro estruturado desde o início."
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

const ValoromBPO = () => {
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
        title="Valorum BPO | Terceirização Financeira"
        description="Terceirização financeira para sua empresa crescer com controle e clareza. Gestão financeira completa com processos definidos e acompanhamento contínuo."
        keywords="BPO financeiro, terceirização financeira, gestão financeira, contas a pagar, fluxo de caixa, conciliação bancária"
        canonical="https://valorum.vilsonrauch.com.br"
      />
      
      <div className="min-h-screen bg-background font-inter">
        <Navigation />
        
        
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary pt-28 sm:pt-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto mb-8" />
              
              <div className="flex flex-col items-center mb-6">
                <span className="text-5xl md:text-6xl font-playfair font-bold text-blue-400 tracking-tight">Conflux</span>
                <div className="w-16 h-0.5 bg-blue-400/50 my-2" />
                <p className="text-base uppercase tracking-widest text-blue-400 font-semibold font-playfair">
                  BPO Financeiro
                </p>
                <p className="text-sm text-blue-300/70 mt-1 font-playfair italic">da Valorum</p>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight mb-4">
                Sua empresa cresce,{" "}
                <br className="hidden md:block" />
                mas o financeiro não acompanha.
                <br />
                <span className="text-blue-400">A gente resolve.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-200/80 font-inter mb-6 max-w-3xl mx-auto">
                A Clareza e o Controle que as Finanças da Sua Empresa Precisam
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <a href="#contato-bpo">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 border border-blue-300/20"
                  >
                    Quero um Diagnóstico Gratuito
                  </Button>
                </a>
              </div>
              <p className="text-sm text-gray-500">
                Resposta em até 2 horas em dias úteis
              </p>
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
                A Valorum une especialização e metodologia para transformar a rotina financeira da sua empresa em resultados previsíveis.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
              {[
                { num: "01.", title: "Serviço Para Todo Porte de Empresa", description: "Desde micro até grandes empresas e operações. A metodologia Conflux da Valorum se adapta ao seu negócio e cresce junto com você.", highlight: false },
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
                Seu departamento financeiro.{" "}
                <span className="italic text-blue-400">Finance as a Service.</span>
              </h2>
              <p className="text-xl text-blue-300 mt-4 font-medium">
                Na Controladoria ou na Tesouraria
              </p>
            </div>
            
            <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
              Cuidamos de toda a rotina financeira da sua empresa, do operacional ao estratégico, com tecnologia de ponta e um custo até <strong className="text-white">5x menor</strong> que um time interno.
            </p>
            
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
                { title: "Seu tempo de volta", description: "Cada hora que você gasta em planilha é uma hora que deixou de vender. Cuide do negócio — a gente cuida do dinheiro.", color: "from-blue-400/60 to-blue-500/20" },
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
              <a href="#contato-bpo">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 border border-blue-300/20"
                >
                  Quero Esses Resultados Agora
                </Button>
              </a>
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
              <a href="#contato-bpo">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 border border-blue-300/20"
                >
                  Quero Começar Agora
                </Button>
              </a>
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

        {/* CTA Intermediário */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-6">
              Sua empresa merece um financeiro
              <br />
              <span className="text-blue-400">que trabalha para você.</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Agende seu diagnóstico gratuito. Sem compromisso, sem enrolação — só clareza sobre onde seu dinheiro está indo e como fazer ele trabalhar por você.
            </p>
            <a href="#contato-bpo">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 border border-blue-300/20"
              >
                Agendar Meu Diagnóstico
              </Button>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Resposta em até 2 horas em dias úteis · Sem compromisso
            </p>
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
              <a href="#contato-bpo">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Solicitar Proposta Personalizada
                </Button>
              </a>
            </div>
          </div>
        </section>


        {/* Objection Cards Section */}
        <section className="py-24 bg-muted/30 scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Ainda tem <span className="text-blue-600">dúvidas</span>? Vamos esclarecer
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  myth: "\"É muito caro para minha empresa\"",
                  answer: "Na verdade, você economiza até 60% comparado a ter uma equipe interna. Sem encargos, férias, 13º salário ou treinamentos."
                },
                {
                  myth: "\"Vou perder o controle das finanças\"",
                  answer: "Pelo contrário! Você terá mais controle com relatórios detalhados, dashboards atualizados e total transparência."
                },
                {
                  myth: "\"Minha empresa é muito pequena\"",
                  answer: "Atendemos desde MEIs até grandes empresas. Nosso serviço se adapta ao seu tamanho e cresce junto com você."
                }
              ].map((item, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                      <span className="text-red-500 font-bold text-sm">✕</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">{item.myth}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                Tire suas dúvidas sobre o BPO Financeiro
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

        {/* Formulário de Contato */}
        <section id="contato-bpo" className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-4">
                  Solicite seu{" "}
                  <span className="text-blue-400">diagnóstico gratuito</span>
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
        <WhatsAppButton message="Olá! Gostaria de saber como funciona sobre terceirizar o financeiro" />
      </div>
    </>
  );
};

export default ValoromBPO;
