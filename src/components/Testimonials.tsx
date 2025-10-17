import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  agency: string;
  photo: string;
  text: string;
}

const Testimonials = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maria Silva",
      agency: "Viagens dos Sonhos",
      photo: "/placeholder.svg",
      text: "A ZapTurize transformou completamente nossa presença digital. Em apenas 3 dias tínhamos um site profissional funcionando perfeitamente. As vendas online aumentaram 150% no primeiro mês. A equipe é extremamente atenciosa e entende as necessidades do mercado de turismo. Recomendo muito!"
    },
    {
      id: 2,
      name: "João Pedro Santos",
      agency: "Destinos Incríveis",
      photo: "/placeholder.svg",
      text: "Profissionalismo e agilidade definem o trabalho da ZapTurize. Nossa landing page ficou linda e está convertendo muito bem. O suporte é excelente e sempre que precisamos de ajustes, somos atendidos rapidamente. Investimento que valeu cada centavo!"
    },
    {
      id: 3,
      name: "Ana Carolina Oliveira",
      agency: "Turismo Premium",
      photo: "/placeholder.svg",
      text: "Estava precisando urgentemente de um site para minha agência e a ZapTurize entregou além das expectativas. O design ficou moderno, responsivo e totalmente alinhado com nossa identidade visual. Nossos clientes adoraram a facilidade de navegação e já estamos recebendo mais consultas."
    },
    {
      id: 4,
      name: "Carlos Eduardo Lima",
      agency: "Explore Mais Viagens",
      photo: "/placeholder.svg",
      text: "A melhor decisão que tomamos foi contratar a ZapTurize. O site institucional ficou impecável e muito profissional. A configuração de domínio foi toda feita por eles, não precisamos nos preocupar com nada técnico. Agora temos uma presença digital de verdade!"
    },
    {
      id: 5,
      name: "Juliana Mendes",
      agency: "Mundo Azul Turismo",
      photo: "/placeholder.svg",
      text: "Excelente custo-benefício! A ZapTurize entregou um trabalho de qualidade superior. Nossa landing page está gerando leads qualificados diariamente. A equipe é muito criativa e sempre traz sugestões que agregam valor ao projeto. Super satisfeita com o resultado!"
    },
    {
      id: 6,
      name: "Roberto Ferreira",
      agency: "Aventuras & Cia",
      photo: "/placeholder.svg",
      text: "Rapidez e qualidade juntas! Em poucos dias minha agência estava com um site completo e funcionando perfeitamente. O atendimento é personalizado e eles realmente entendem do negócio de turismo. As fotos e textos ficaram incríveis. Recomendo de olhos fechados!"
    }
  ];

  const toggleExpand = (id: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agências de turismo que já aceleraram sua presença digital com a ZapTurize
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => {
            const isExpanded = expandedCards.has(testimonial.id);
            const shouldShowReadMore = testimonial.text.length > 200;

            return (
              <Card key={testimonial.id} className="hover:shadow-lg transition-all duration-300 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-16 w-16 border-2 border-primary/20">
                      <AvatarImage src={testimonial.photo} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.agency}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className={`text-sm text-muted-foreground leading-relaxed ${!isExpanded && shouldShowReadMore ? 'line-clamp-4' : ''}`}>
                    {testimonial.text}
                  </p>

                  {shouldShowReadMore && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpand(testimonial.id)}
                      className="mt-2 text-primary hover:text-primary/80 p-0 h-auto font-medium"
                    >
                      {isExpanded ? 'Ler menos' : 'Ler mais'}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
