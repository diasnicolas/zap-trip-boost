import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Rocket,
  Target,
  Palette,
  FileText,
  Megaphone,
  CheckCircle2,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Página Institucional",
      description:
        "Layout moderno e responsivo com seções essenciais: sobre, serviços, diferenciais, contato e redes sociais.",
      price: "R$ 450,00",
      features: [
        "Design moderno e profissional",
        "100% responsivo",
        "SEO otimizado",
        "Integração com redes sociais",
      ],
    },
    {
      icon: Rocket,
      title: "Landing Page",
      description:
        "Estrutura pensada para vendas com botões de ação, gatilhos de conversão e integração com WhatsApp.",
      price: "R$ 597,00",
      features: [
        "Foco em conversão",
        "Integração WhatsApp",
        "Gatilhos mentais",
        "SEO básico incluso",
      ],
      highlight: true,
    },
    {
      icon: Target,
      title: "Campanha Google Ads",
      description:
        "Configuração completa de campanhas, pesquisa de palavras-chave e segmentação geográfica.",
      price: "R$ 250,00",
      features: [
        "Configuração inicial",
        "Pesquisa de palavras-chave",
        "Anúncios otimizados",
        "Segmentação estratégica",
      ],
    },
    {
      icon: Palette,
      title: "Identidade Visual",
      description:
        "Logotipo e paleta de cores personalizada com versões para diferentes fundos e formato vetorizado.",
      price: "R$ 257,00",
      features: [
        "Logotipo exclusivo",
        "Paleta de cores",
        "Versões variadas",
        "Arquivo vetorizado",
      ],
    },
    {
      icon: FileText,
      title: "Documentos Comerciais",
      description:
        "Modelos editáveis de contratos, orçamentos e termos de autorização personalizados.",
      price: "a partir de R$ 97,00",
      features: [
        "Contratos personalizados",
        "Orçamentos profissionais",
        "Termos de autorização",
        "Totalmente editáveis",
      ],
    },
    {
      icon: Megaphone,
      title: "Materiais Gráficos",
      description:
        "Criação de artes para cartões de visita, panfletos, camisetas, canecas e muito mais.",
      price: "a partir de R$ 40,00",
      features: [
        "Cartões de visita",
        "Panfletos",
        "Camisetas e brindes",
        "Design profissional",
      ],
    },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

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
            return (
              <Card
                key={index}
                className={`p-6 hover:shadow-xl transition-all duration-300 ${
                  service.highlight ? "border-2 border-accent relative" : ""
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
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
                  onClick={handleWhatsAppClick}
                  variant={service.highlight ? "gradient" : "outline"}
                  className="w-full"
                >
                  Contratar Agora
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center bg-card p-8 rounded-2xl border">
          <h3 className="text-2xl font-bold mb-4">Configuração de Domínio</h3>
          <p className="text-muted-foreground mb-4">
            Configuração completa do domínio com apontamento de DNS, redirecionamentos e
            publicação no servidor
          </p>
          <div className="text-3xl font-bold text-primary mb-6">R$ 120,00</div>
          <Button onClick={handleWhatsAppClick} variant="default" size="lg">
            Solicitar Orçamento Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
