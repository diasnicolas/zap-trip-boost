import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";
import siteaproveitaai from "@/assets/site_aproveitaai.webp";
import sitemildestinos from "@/assets/site_mildestinos.webp";
import sitetravellstur from "@/assets/site_travellstur.webp";
import siterotaembarque from "@/assets/site_rotaembarque.webp";
import sitedvec from "@/assets/site_dvec.webp";
import sitegramadotravellstur from "@/assets/site_gramadotravellstur.webp";

const Portfolio = () => {
  const institutionalSites = [
    {
      name: "Mil Destinos",
      url: "https://mildestinos.net.br",
      description: "Site Institucional da agência com integração com a OnerTravel, e também criação da identidade visual e logotipo",
      type: "Site Institucional/Logotipo",
      image: sitemildestinos
    },
    {
      name: "Aproveita Aí",
      url: "https://aproveitaai.com.br",
      description: "Site Institucional da agência e também criação da identidade visual e logotipo",
      type: "Site Institucional/Logotipo",
      image: siteaproveitaai
    },
    {
      name: "Rota de Embarque",
      url: "https://rotadeembarque.com.br",
      description: "Fizemos um projeto diferenciado de página institucional + Landing page focada em pacotes para o Nordeste. Tudo em uma única página.",
      type: "Site Institucional+Landing Page",
      image: siterotaembarque
    },
    {
      name: "DV&C",
      url: "https://www.dvecturismoeviagens.com.br",
      description: "Site Institucional da agência com integração com a OnerTravel",
      type: "Institucional",
      image: sitedvec
    },
    {
      name: "Travells Tur",
      url: "https://travellstur.com",
      description: "Site Institucional da agência com integração com a OnerTravel",
      type: "Institucional",
      image: sitetravellstur
    },
    {
      name: "Gramado - Travells Tur",
      url: "https://travellstur.com/destinos/gramado",
      description: "Landing page focada em pacotes para Gramado",
      type: "Landing Page",
      image: sitegramadotravellstur
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
            Conheça alguns dos sites e landing pages que desenvolvemos para agências de viagens e
            turismo
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold">Sites Intitucionais/Landing pages</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {institutionalSites.map((site, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
          <img 
            src={site.image} 
            alt={site.name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
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
      </div>
    </section>
  );
};

export default Portfolio;
