import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { SEOData, StructuredData } from "@/data/seoData";

import { 
  Calculator, 
  FileText, 
  Building2, 
  Users, 
  Heart, 
  Home,
  Store,
  Utensils,
  GraduationCap,
  Pill,
  PawPrint,
  Factory,
  Fuel,
  ShoppingBag,
  Briefcase,
  Network,
  TrendingUp,
  RefreshCw,
  Shield,
  KeyRound
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


const ValoromContabil = () => {
  const especialidades = [
    { icon: Home, title: "Holding Patrimonial e Familiar", description: "Sabemos que proteger seu patrimônio e garantir a tranquilidade da sua família é prioridade." },
    { icon: Heart, title: "Profissionais da Saúde", description: "Sabemos que seu foco é cuidar de vidas. Cuidamos da sua contabilidade." },
    { icon: Factory, title: "Indústria", description: "Sabemos que custos de produção e tributação industrial são complexos." },
    { icon: ShoppingBag, title: "Comércios", description: "Sabemos que concorrência e custos tributários impactam seu resultado." },
    { icon: Briefcase, title: "Prestadores de Serviços", description: "Sabemos que você quer focar no cliente, não na burocracia." },
    { icon: Pill, title: "Farmácias e Drogarias", description: "Sabemos que estoque, tributos e margens precisam de atenção especial." },
    { icon: GraduationCap, title: "Escolas e Instituições", description: "Sabemos que educar já é complexo. A contabilidade não precisa ser." },
    { icon: Network, title: "Franqueadoras", description: "Sabemos que padronizar e crescer a rede exige gestão financeira sólida." },
    { icon: Store, title: "Lojas de Shopping", description: "Sabemos que manter a lucratividade em shopping é um desafio constante." },
    { icon: Utensils, title: "Restaurantes e Bares", description: "Sabemos que margem apertada e alta rotatividade exigem controle preciso." },
    { icon: PawPrint, title: "Pet Shops e Clínicas Veterinárias", description: "Sabemos que o mercado pet cresce, mas a gestão precisa acompanhar." },
    { icon: Fuel, title: "Postos de Combustíveis", description: "Sabemos que fiscalização intensa e margens pequenas exigem precisão." },
  ];

  return (
    <>
      <SEOHead
        title={SEOData.valorumContabil.title}
        description={SEOData.valorumContabil.description}
        keywords={SEOData.valorumContabil.keywords}
        canonical="https://cfvalorum.com.br/"
        structuredData={StructuredData.contabilService}
      />
      
      <div className="min-h-screen bg-background font-inter">
        <Navigation />
        
        
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary pt-28 sm:pt-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-8" />
              
              <p className="text-xl text-emerald-400 font-medium mb-4">
                Resultados que surpreendem
              </p>
              
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight mb-6">
                Valorum <span className="text-emerald-400">Contábil</span>
              </h1>
              
              <p className="text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
                Serviços contábeis, fiscais e societários para estruturar ou melhorar o seu negócio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/abra-sua-empresa">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg"
                  >
                    Abra Sua Empresa
                  </Button>
                </Link>
                <Link to="/troque-de-contador">
                  <Button 
                    size="lg"
                    className="border-2 border-emerald-400 bg-emerald-500/10 text-white hover:bg-emerald-500 hover:text-white font-semibold px-8 py-6 text-lg"
                  >
                    Troque de Contador
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Destaques Principais */}
        <section id="contabil-destaques" className="py-24 bg-white scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
                {/* Título à esquerda */}
                <div>
                  <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary leading-tight">
                    Somos um escritório de contabilidade{" "}
                    <span className="text-emerald-500">especializado em:</span>
                  </h2>
                </div>

                {/* Cards das duas principais especializações */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group p-8 bg-white rounded-2xl border border-emerald-100 shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-5">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-emerald-600 mb-4">
                        Área da Saúde
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Oferecemos uma análise tributária estratégica para profissionais da saúde. Nosso método identifica o regime mais adequado para sua realidade. Assim, você reduz custos, mantém sua regularidade fiscal e ganha mais segurança na gestão do seu consultório ou clínica.
                      </p>
                    </div>
                    <Link to="/contato">
                      <Button className="mt-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-6">
                        Saiba Mais
                      </Button>
                    </Link>
                  </div>

                  <div className="group p-8 bg-white rounded-2xl border border-emerald-100 shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-5">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-emerald-600 mb-4">
                        Investidores
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Tenha ao seu lado um parceiro que compreende as particularidades tributárias de quem investe e empreende. Estruturamos sua contabilidade para garantir conformidade fiscal, organização patrimonial e tranquilidade perante o fisco.
                      </p>
                    </div>
                    <Link to="/contato">
                      <Button className="mt-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-6">
                        Saiba Mais
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vantagens Section */}
        <section id="contabil-vantagens" className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary relative overflow-hidden scroll-mt-28">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">
                Vantagens em contratar a
              </h2>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-emerald-400 mb-10">
                Valorum Contábil
              </h2>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
                {[
                  "Contabilidade moderna e alinhada às melhores práticas de gestão.",
                  "Serviços especializados para apoiar o crescimento do seu negócio.",
                  "Experiência e conhecimento para orientar decisões com segurança.",
                  "Atendimento próximo, personalizado e focado nas necessidades do cliente.",
                  "Equipe preparada para estruturar e fortalecer sua empresa.",
                  "Integração da contabilidade com a realidade do seu negócio.",
                  "Consultoria estratégica para apoiar sua gestão financeira e tributária.",
                  "Valorização e organização do patrimônio empresarial.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-200 text-xl">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">✔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-5">
                <div className="flex items-start gap-3 text-gray-200 text-xl">
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0">✔</span>
                  <span>Mais eficiência para que você economize tempo e recursos.</span>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://wa.me/5511949566290?text=Ol%C3%A1!%20Gostaria%20de%20saber%20como%20funciona%20sobre%20contabilidade"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg"
                  >
                    Falar com um Contador
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="contabil-servicos" className="py-24 bg-muted/30 scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Nossos Serviços
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Calculator, title: "Contabilidade Consultiva", description: "Acompanhamento contábil estratégico para apoiar decisões e fortalecer a gestão da empresa.", link: "" },
                { icon: FileText, title: "Planejamento Tributário", description: "Estruturação fiscal para reduzir custos tributários dentro da legalidade.", link: "" },
                { icon: Building2, title: "Abertura de Empresas", description: "Formalização rápida e segura para iniciar seu negócio sem burocracia.", link: "/abra-sua-empresa" },
                { icon: RefreshCw, title: "Migração de Contabilidade", description: "Transfira sua empresa para uma contabilidade mais eficiente e organizada.", link: "/troque-de-contador" },
                { icon: Users, title: "BPO Financeiro", description: "Terceirização da gestão financeira para maior controle e eficiência.", link: "" },
                { icon: TrendingUp, title: "Consultoria Financeira", description: "Análise e orientação para melhorar resultados e organização financeira.", link: "" },
                { icon: KeyRound, title: "Certificado Digital", description: "Emissão de certificado para garantir segurança e agilidade em processos digitais.", link: "" },
                { icon: Shield, title: "Recuperação Tributária", description: "Identificação e recuperação de créditos tributários pagos indevidamente.", link: "" },
              ].map((item, index) => {
                const CardContent = (
                  <>
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-primary text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </>
                );
                
                const className = "p-6 bg-white rounded-2xl text-center border border-border/50 hover:shadow-lg transition-all duration-300";
                
                return item.link ? (
                  <Link key={index} to={item.link} className={className}>
                    {CardContent}
                  </Link>
                ) : (
                  <div key={index} className={className}>
                    {CardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contabil-cta" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary scroll-mt-28">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Não encontrou seu segmento?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Entre em contato e descubra como podemos ajudar o seu negócio com soluções contábeis personalizadas.
            </p>
            <Link to="/contato">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg"
              >
                Fale Conosco
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
        <WhatsAppButton message="Olá! Gostaria de saber como funciona sobre contabilidade" />
      </div>
    </>
  );
};

export default ValoromContabil;
