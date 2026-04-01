import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Contato = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <div className="pt-28 sm:pt-16">
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contato;