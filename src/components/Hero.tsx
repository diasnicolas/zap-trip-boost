import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
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
              Especialistas em Turismo Digital
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Transforme Sua Agência com Sites que{" "}
            <span className="text-accent">Vendem</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in">
            Desenvolvemos sites, landing pages e campanhas Google Ads para agências de
            viagens. Capte mais clientes e aumente suas vendas com presença digital
            profissional.
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
              className="text-lg border-white text-white hover:bg-white hover:text-primary"
            >
              Ver Portfólio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">10+</div>
              <div className="text-sm text-white/80">Sites Desenvolvidos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-white/80">Satisfação</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">7 dias</div>
              <div className="text-sm text-white/80">Prazo Médio</div>
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
