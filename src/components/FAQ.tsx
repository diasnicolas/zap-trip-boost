import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para meu site ficar pronto?",
      answer:
        "O prazo médio de entrega é de 7 dias úteis após a confirmação do pedido e envio de todos os materiais necessários (textos, fotos, logo). Para projetos mais complexos, o prazo pode ser ajustado conforme a necessidade.",
    },
    {
      question: "Preciso ter conhecimento técnico para gerenciar o site?",
      answer:
        "Não! Desenvolvemos sites intuitivos e fáceis de gerenciar. Além disso, oferecemos suporte técnico completo via WhatsApp para qualquer dúvida ou ajuste que você precisar fazer.",
    },
    {
      question: "O que está incluso na configuração de domínio?",
      answer:
        "A configuração inclui apontamento de DNS, redirecionamentos, configuração de e-mail (se aplicável) e publicação do site no servidor. Você só precisa ter o domínio registrado - cuidamos de toda a parte técnica.",
    },
    {
      question: "Como funciona o pagamento na entrega?",
      answer:
        "Você só realiza o pagamento após a entrega completa do serviço e sua aprovação. Aceitamos Pix (com desconto) e cartão de crédito em até 12x. Isso garante sua total satisfação antes de efetuar o pagamento.",
    },
    {
      question: "As campanhas de Google Ads garantem resultados?",
      answer:
        "Configuramos suas campanhas com as melhores práticas do mercado, segmentação precisa e palavras-chave relevantes para turismo. O investimento mínimo sugerido é R$ 5-10/dia. Os resultados dependem de fatores como concorrência, região e qualidade da oferta, mas nossa experiência mostra ótimas taxas de conversão.",
    },
    {
      question: "Posso solicitar alterações depois da entrega?",
      answer:
        "Sim! Oferecemos suporte técnico contínuo. Pequenos ajustes de texto e imagens podem ser feitos sem custo. Para mudanças maiores de layout ou novas funcionalidades, fazemos um orçamento personalizado com valores acessíveis.",
    },
    {
      question: "O site será responsivo para celular?",
      answer:
        "Sim, todos os nossos sites são 100% responsivos e otimizados para dispositivos móveis. Hoje, mais de 70% dos usuários acessam sites pelo celular, então garantimos uma experiência perfeita em todas as telas.",
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer:
        "Sim! Todo serviço inclui suporte técnico via WhatsApp durante e após a entrega. Estamos sempre disponíveis para tirar dúvidas, fazer pequenos ajustes e ajudar no que você precisar.",
    },
    {
      question: "Como funciona a seleção de múltiplos serviços?",
      answer:
        "Você pode clicar em vários cards de serviços para montar seu pacote personalizado. O sistema calcula automaticamente o valor total e gera uma mensagem no WhatsApp com todos os serviços selecionados para facilitar seu orçamento.",
    },
    {
      question: "Preciso fornecer as fotos e textos do site?",
      answer:
        "Idealmente sim, pois você conhece melhor sua agência e seus diferenciais. Mas se precisar de ajuda, podemos orientar na escolha de imagens de banco de dados e na criação de textos otimizados para SEO com um pequeno custo adicional.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
