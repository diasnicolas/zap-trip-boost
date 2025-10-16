import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Clock, CreditCard, Shield } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const benefits = [
    {
      icon: Clock,
      title: "Entrega em até 7 dias",
      description: "Após confirmação do seu projeto",
    },
    {
      icon: Shield,
      title: "Suporte Técnico",
      description: "Durante e após a entrega via WhatsApp",
    },
    {
      icon: CreditCard,
      title: "Pagamento na Entrega",
      description: "Pix ou Cartão de Crédito - Após aprovação",
    },
    {
      icon: MessageCircle,
      title: "Atendimento Personalizado",
      description: "Tiramos todas as suas dúvidas",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pronto para Crescer no Digital?
            </h2>
            <p className="text-xl text-muted-foreground">
              Entre em contato e receba um orçamento personalizado para sua agência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
            <div className="relative p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <MessageCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-accent">
                  Respondemos rapidamente
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Solicite Seu Orçamento Agora
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Converse com nossos especialistas e descubra como podemos transformar a
                presença digital da sua agência de turismo
              </p>

              <Button
                size="lg"
                variant="gradient"
                onClick={handleWhatsAppClick}
                className="text-lg px-8"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Falar no WhatsApp
              </Button>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Resposta em minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Sem compromisso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  <span>Orçamento gratuito</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
