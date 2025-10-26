import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import donoaproveitaai from "@/assets/dono_aproveitaai.webp";
import donotravellstur from "@/assets/dono_travellstur.webp";
import donomildestinos from "@/assets/dono_mildestinos.webp";
import donodvec from "@/assets/dono_dvec.webp";
import donorotaembarque from "@/assets/dono_rotaembarque.webp";
import donoproverbios from "@/assets/dono_proverbios.webp";

interface Testimonial {
  id: number;
  name: string;
  agency: string;
  photo: string;
  url: string;
  text: string;
}

const Testimonials = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Leandro Schneider",
      agency: "Travells Tur",
      photo: donotravellstur,
      url: "https://travellstur.com",
      text: "Quero deixar meu agradecimento à ZapTurize, pelo excelente trabalho no desenvolvimento do meu site e da minha landing page. Desde o primeiro contato, foi extremamente profissional, atento aos detalhes e comprometido em transformar as ideias do papel em algo visualmente incrível e funcional. O resultado superou minhas expectativas, ficou moderno, intuitivo e exatamente o que eu buscava. Recomendo de coração!"
    },
    {
      id: 2,
      name: "Ariane Alvarenga",
      agency: "Aproveita Aí - Viagens & Turismo",
      photo: donoaproveitaai,
      url: "https://aproveitaai.com.br",
      text: "Profissionalismo e agilidade definem o trabalho da ZapTurize. Nosso site ficou lindo e está convertendo muito bem. O suporte é excelente e sempre que precisamos de ajustes, somos atendidos rapidamente. Investimento que valeu cada centavo!"
    },
    {
      id: 3,
      name: "Rafael Marcos",
      agency: "1000 Destinos",
      photo: donomildestinos,
      url: "https://mildestinos.net.br",
      text: "A ZapTurize desenvolveu o site institucional e o logotipo da nossa agência de viagens, 1000 Destinos, com excelência e total atenção aos detalhes. O resultado superou nossas expectativas,um layout moderno, funcional e totalmente alinhado à identidade visual da marca. A equipe demonstrou profissionalismo, criatividade e comprometimento em cada etapa do processo. Recomendo a ZapTurize a todas as empresas que buscam presença digital com qualidade e impacto."
    },
    {
      id: 4,
      name: "Danyele Vieira Caetano",
      agency: "DV&C Turismo",
      photo: donodvec,
      url: "https://www.dvecturismoeviagens.com.br",
      text: "Queria agradecer a ZapTurize pelo excelente trabalho no desenvolvimento do site institucional da minha agência. Fiquei muito satisfeita com o resultado! Seu atendimento foi impecável – sempre muito atencioso, paciente com cada dúvida e aberto às minhas sugestões. Você conseguiu transformar minhas ideias em algo profissional e funcional, exatamente como eu imaginava. Obrigada mesmo pela dedicação e cuidado em cada etapa. Com certeza vou recomendar sempre que tiver oportunidade! 👏🏻☺️"
    },
    {
      id: 5,
      name: "Jéssica de Melo",
      agency: "Rota de Embarque",
      photo: donorotaembarque,
      url: "https://rotadeembarque.com",
      text: "ZapTurize gostaria de deixar aqui meu agradecimento, por ter desenvolvido com muita atenção e profissionalismo a landing page da minha agência Rota de Embarque (rotadeembarque.com). O resultado ficou incrível! ✈️ Obrigada por entender direitinho o que eu precisava e transformar minhas ideias em algo tão bonito e funcional. 🙏🏽❤️"
    },
    {
      id: 6,
      name: "Marli Cassiano",
      agency: "Provérbios Turismo",
      photo: donoproverbios,
      url: "https://proverbiosturismo.com.br",
      text: "Passando para agradecer pelo excelente trabalho, parabéns pela paciência e profissionalismo. Estou muito satisfeita com o resultado e com o perfeito atendimento que recebemos. ⭐️⭐️⭐️⭐️⭐️"
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
    <section id="depoimentos" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
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
                      <a href={testimonial.url} target="_blank" className="text-sm text-muted-foreground no-underline hover:underline">{testimonial.agency}</a>
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
