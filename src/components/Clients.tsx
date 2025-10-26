import { Star } from "lucide-react";
import logoaproveitaai from "@/assets/logo_aproveitaai.webp";
import logotravellstur from "@/assets/logo_travellstur.webp";
import logomildestinos from "@/assets/logo_mildestinos.webp";
import logodvec from "@/assets/logo_dvec.webp";
import logorotaembarque from "@/assets/logo_rotaembarque.webp";
import logoproverbios from "@/assets/logo_proverbios.webp";

const Clients = () => {
  const clients = [
    { name: "Travells Tur", logo:  logotravellstur, url: "https://travellstur.com"},
    { name: "Mil Destinos", logo: logomildestinos, url: "https://mildestinos.net.br" },
    { name: "Aproveita Aí", logo: logoaproveitaai, url: "https://aproveitaai.com.br" },
    { name: "Rota de Embarque", logo: logorotaembarque, url: "https://rotadeembarque.com" },
    { name: "DV&C", logo: logodvec, url: "https://www.dvecturismoeviagens.com.br" },
    { name: "Provérbios Turismo", logo: logoproverbios, url: "https://proverbiosturismo.com.br" },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Agências que Confiam em Nosso Trabalho
          </h2>
          <p className="text-xl text-muted-foreground">
            Parceiros de sucesso que já transformaram sua presença digital conosco
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto cursor-pointer" >
          {clients.map((client, index) => (
            <div onClick={() => window.open(client.url, "_blank")}
              key={index}
              className="aspect-square rounded-2xl bg-card border-2 flex flex-col items-center justify-center p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full  flex items-center justify-center mb-3">
                <img 
          src={client.logo} 
          alt={`${client.name} logo`}
          className="w-full h-full object-cover"
        />
              </div>
              <div className="text-center text-sm font-semibold">{client.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-card p-8 rounded-2xl border">
            <div className="flex-1">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Taxa de Satisfação</div>
            </div>
            <div className="flex-1">
              <div className="text-5xl font-bold text-secondary mb-2">7 dias</div>
              <div className="text-muted-foreground">Prazo Médio de Entrega</div>
            </div>
            <div className="flex-1">
              <div className="text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Projetos Entregues</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
