import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";

const Portfolio = () => {
  const institutionalSites = [
    {
      name: "Travells Tur",
      url: "https://travellstur.com",
      description: "Site institucional completo com design moderno",
      type: "Institucional",
    },
    {
      name: "Mil Destinos",
      url: "https://mildestinos.net.br",
      description: "Portal de turismo com foco em experiências",
      type: "Institucional",
    },
    {
      name: "Aproveita Aí",
      url: "https://aproveitaai.com.br",
      description: "Plataforma de ofertas de viagens",
      type: "Institucional",
    },
  ];

  const landingPages = [
    {
      name: "Gramado - Travells Tur",
      url: "https://travellstur.com/destinos/gramado",
      description: "Landing page focada em pacotes para Gramado",
      type: "Landing Page",
    },
    {
      name: "Rota de Embarque",
      url: "https://rotadeembarque.com/",
      description: "Página de conversão para serviços de turismo",
      type: "Landing Page",
    },
    {
      name: "Ofertas Exclusivas - Aproveita Aí",
      url: "https://www.aproveitaai.com.br/ofertas-exclusivas",
      description: "LP de ofertas com foco em conversão",
      type: "Landing Page",
    },
    {
      name: "Beto Carrero - Aproveita Aí",
      url: "https://www.aproveitaai.com.br/betocarrero",
      description: "Landing page específica para o parque",
      type: "Landing Page",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos que Já Realizamos
          </h2>
          <p className="text-xl text-muted-foreground">
            Conheça alguns dos sites e landing pages que desenvolvemos para agências de
            turismo
          </p>
        </div>

        {/* Sites Institucionais */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold">Sites Institucionais</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {institutionalSites.map((site, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-white/80" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-primary mb-2">
                    {site.type}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{site.name}</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {site.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open(site.url, "_blank")}
                  >
                    Visitar Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Landing Pages */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <ExternalLink className="w-8 h-8 text-secondary" />
            <h3 className="text-3xl font-bold">Landing Pages</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {landingPages.map((page, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-40 bg-gradient-to-br from-secondary to-accent relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ExternalLink className="w-12 h-12 text-white/80" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs font-semibold text-secondary mb-2">
                    {page.type}
                  </div>
                  <h4 className="text-lg font-bold mb-2 line-clamp-2">{page.name}</h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {page.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(page.url, "_blank")}
                  >
                    Ver Página
                    <ExternalLink className="ml-2 w-3 h-3" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
