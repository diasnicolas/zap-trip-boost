import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Rocket,
  Target,
  Palette,
  FileText,
  Megaphone,
  CheckCircle2,
  ShoppingCart,
  X,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Service {
  id: string;
  icon: typeof Globe;
  title: string;
  description: string;
  price: string;
  priceValue?: number;
  features: string[];
  highlight?: boolean;
}

const Services = () => {
  const { toast } = useToast();
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const services: Service[] = [
    {
      id: "institucional",
      icon: Globe,
      title: "Página Institucional",
      description:
        "Layout moderno e responsivo com seções essenciais: sobre, serviços, diferenciais, contato e redes sociais.",
      price: "R$ 570,00",
      priceValue: 570,
      features: [
        "Design moderno e profissional",
        "100% responsivo",
        "SEO otimizado",
        "Integração com redes sociais",
        "✨ Configuração de domínio inclusa (+R$ 120)",
      ],
    },
    {
      id: "landing",
      icon: Rocket,
      title: "Landing Page",
      description:
        "Estrutura pensada para vendas com botões de ação, gatilhos de conversão e integração com WhatsApp.",
      price: "R$ 717,00",
      priceValue: 717,
      features: [
        "Foco em conversão",
        "Integração WhatsApp",
        "Gatilhos mentais",
        "SEO otimizado",
        "✨ Configuração de domínio inclusa (+R$ 120)",
      ],
      highlight: true,
    },
    {
      id: "google-ads",
      icon: Target,
      title: "Campanha Google Ads",
      description:
        "Configuração completa de campanhas, pesquisa de palavras-chave e segmentação geográfica.",
      price: "R$ 250,00",
      priceValue: 250,
      features: [
        "Configuração inicial",
        "Pesquisa de palavras-chave",
        "Anúncios otimizados",
        "Segmentação estratégica",
      ],
    },
    {
      id: "identidade",
      icon: Palette,
      title: "Identidade Visual",
      description:
        "Logotipo e paleta de cores personalizada com versões para diferentes fundos e formato vetorizado.",
      price: "R$ 257,00",
      priceValue: 257,
      features: [
        "Logotipo exclusivo",
        "Paleta de cores",
        "Versões variadas",
        "Arquivo vetorizado",
      ],
    },
    {
      id: "documentos",
      icon: FileText,
      title: "Documentos Comerciais",
      description:
        "Modelos editáveis de contratos, orçamentos, termos de autorização personalizados e muito mais.",
      price: "a partir de R$ 97,00",
      priceValue: 97,
      features: [
        "Contratos personalizados",
        "Orçamentos profissionais",
        "Termos de autorização",
        "Totalmente editáveis",
      ],
    },
    {
      id: "graficos",
      icon: Megaphone,
      title: "Materiais Gráficos",
      description:
        "Criação de artes para cartões de visita, panfletos, camisetas, canecas e muito mais.",
      price: "a partir de R$ 40,00",
      priceValue: 40,
      features: [
        "Cartões de visita",
        "Panfletos",
        "Camisetas e brindes",
        "Design profissional",
      ],
    },
  ];

  const toggleService = (service: Service) => {
    const isSelected = selectedServices.find((s) => s.id === service.id);
    
    if (isSelected) {
      setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
      toast({
        title: "Serviço removido",
        description: `${service.title} foi removido da sua seleção`,
      });
    } else {
      setSelectedServices([...selectedServices, service]);
      toast({
        title: "Serviço adicionado",
        description: `${service.title} foi adicionado à sua seleção`,
      });
    }
  };

  const handleWhatsAppClick = () => {
    if (selectedServices.length === 0) {
      toast({
        title: "Nenhum serviço selecionado",
        description: "Por favor, selecione ao menos um serviço",
        variant: "destructive",
      });
      return;
    }

    const servicesText = selectedServices
      .map((service) => `• ${service.title} - ${service.price}`)
      .join("\n");

    const message = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento para os seguintes serviços:\n\n${servicesText}\n\nAguardo retorno!`
    );

    window.open(`https://wa.me/551148632797?text=${message}`, "_blank");
  };

  const clearSelection = () => {
    setSelectedServices([]);
    toast({
      title: "Seleção limpa",
      description: "Todos os serviços foram removidos",
    });
  };

  const totalValue = selectedServices.reduce(
    (acc, service) => acc + (service.priceValue || 0),
    0
  );

  const hasInstitucionalAndLanding = 
    selectedServices.some(s => s.id === "institucional") && 
    selectedServices.some(s => s.id === "landing");

  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Soluções Completas para Sua Agência
          </h2>
          <p className="text-xl text-muted-foreground">
            Do site à captação de clientes: tudo que você precisa para crescer no digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isSelected = selectedServices.find((s) => s.id === service.id);

            return (
              <Card
                key={index}
                className={`p-6 hover:shadow-xl transition-all duration-300 cursor-pointer relative ${
                  service.highlight ? "border-2 border-accent" : ""
                } ${isSelected ? "ring-2 ring-primary shadow-lg" : ""}`}
                onClick={() => toggleService(service)}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                {isSelected && (
                  <div className="absolute -top-3 right-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                )}
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="text-3xl font-bold text-primary mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={isSelected ? "default" : "outline"}
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleService(service);
                  }}
                >
                  {isSelected ? "Selecionado" : "Selecionar Serviço"}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Selected Services Cart */}
        {selectedServices.length > 0 && (
          <Card className="p-6 mb-8 bg-primary/5 border-2 border-primary">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold">
                  Serviços Selecionados ({selectedServices.length})
                </h3>
              </div>
              <Button variant="ghost" size="sm" onClick={clearSelection}>
                <X className="w-4 h-4 mr-1" />
                Limpar
              </Button>
            </div>

            {hasInstitucionalAndLanding && (
              <div className="mb-4 p-4 bg-accent/10 border-2 border-accent rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs font-bold">
                    BRINDE
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-accent mb-1">
                      🎁 Parabéns! Você vai ganhar um brinde!
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ao contratar Site Institucional + Landing Page, você ganha o design de um material gráfico de sua escolha (cartão de visita, panfleto, etc.)
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2 mb-4">
              {selectedServices.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between p-3 bg-background rounded-lg"
                >
                  <span className="font-medium">{service.title}</span>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{service.price}</Badge>
                    <button
                      onClick={() => toggleService(service)}
                      className="text-destructive hover:text-destructive/80"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {totalValue > 0 && (
              <div className="flex items-center justify-between p-4 bg-background rounded-lg mb-4">
                <span className="font-bold text-lg">Valor estimado:</span>
                <span className="font-bold text-2xl text-primary">
                  R$ {totalValue.toFixed(2)}
                </span>
              </div>
            )}

            <Button
              onClick={handleWhatsAppClick}
              variant="gradient"
              size="lg"
              className="w-full"
            >
              Solicitar Orçamento no WhatsApp
              <ShoppingCart className="ml-2 w-5 h-5" />
            </Button>
          </Card>
        )}

        {/* Floating WhatsApp Button */}
        {selectedServices.length > 0 && (
          <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
            aria-label="Solicitar orçamento no WhatsApp"
          >
            <div className="relative">
              <MessageCircle className="w-8 h-8" />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                {selectedServices.length}
              </div>
            </div>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {selectedServices.length} {selectedServices.length === 1 ? 'serviço selecionado' : 'serviços selecionados'}
            </span>
          </button>
        )}
      </div>
    </section>
  );
};

export default Services;
