import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
