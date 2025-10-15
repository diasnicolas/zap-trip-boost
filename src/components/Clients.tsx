import { Star } from "lucide-react";

const Clients = () => {
  const clients = [
    { name: "Travells Tur", logo: "TT" },
    { name: "Mil Destinos", logo: "MD" },
    { name: "Aproveita Aí", logo: "AA" },
    { name: "Rota de Embarque", logo: "RE" },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="aspect-square rounded-2xl bg-card border-2 flex flex-col items-center justify-center p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-white">{client.logo}</span>
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
