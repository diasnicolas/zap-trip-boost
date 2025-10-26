import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, CreditCard, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/551148632797", "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Destinos paradisíacos para agências de turismo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-white font-medium">
              Aceleramos o turismo digital da sua agência
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Transforme Sua Agência com Sites que{" "}
            <span className="text-accent">Vendem</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in">
            Sites institucionais, landing pages de alta conversão e campanhas Google Ads
            que direcionam clientes qualificados direto para o seu WhatsApp. Aumente suas
            vendas com marketing digital especializado em turismo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              size="lg"
              variant="hero"
              onClick={handleWhatsAppClick}
              className="text-lg"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-lg border-white text-accent hover:bg-white hover:text-primary"
            >
              Ver Portfólio
            </Button>
          </div>

          {/* Diferenciais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 animate-fade-in">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="bg-accent/20 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-bold text-white">Entrega Rápida</div>
                <div className="text-sm text-white/80">Em até 7 dias</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="bg-accent/20 p-2 rounded-lg">
                <CreditCard className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-bold text-white">Pagamento na Entrega</div>
                <div className="text-sm text-white/80">Pix ou Cartão</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="bg-accent/20 p-2 rounded-lg">
                <Headphones className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-bold text-white">Suporte Dedicado</div>
                <div className="text-sm text-white/80">Atendimento rápido</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in:nth-child(2) {
          animation-delay: 0.1s;
        }
        .animate-fade-in:nth-child(3) {
          animation-delay: 0.2s;
        }
        .animate-fade-in:nth-child(4) {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
