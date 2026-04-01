
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HowWeWork } from "@/components/HowWeWork";
import { SEOHead } from "@/components/SEOHead";
import { SEOData, StructuredData } from "@/data/seoData";

const Index = () => {
  return (
    <>
      <SEOHead
        title={SEOData.valorum.title}
        description={SEOData.valorum.description}
        keywords={SEOData.valorum.keywords}
        canonical="https://valorum.vilsonrauch.com.br"
        structuredData={StructuredData.organization}
      />
      
      <div className="min-h-screen bg-white font-inter">
        <Navigation />
        <Hero />
        <HowWeWork />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
