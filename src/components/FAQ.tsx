import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Como funciona o contrato jurídico?',
    answer: 'Nosso contrato jurídico é elaborado por advogados especializados em direito do consumidor e comércio internacional. Ele garante seus direitos em todas as etapas da compra, desde o pedido até a entrega do produto.',
  },
  {
    question: 'Quanto tempo leva a importação?',
    answer: 'O prazo médio de entrega é de 15 a 30 dias úteis, dependendo do produto e da localização. Você recebe atualizações em tempo real sobre o status do seu pedido.',
  },
  {
    question: 'Há garantia nos produtos?',
    answer: 'Sim! Todos os produtos possuem garantia de 90 dias contra defeitos de fabricação, além da garantia internacional Apple de 1 ano.',
  },
  {
    question: 'Quais formas de pagamento aceitam?',
    answer: 'Aceitamos cartão de crédito (parcelado em até 12x), PIX, boleto bancário e transferência bancária. Todas as transações são seguras e criptografadas.',
  },
  {
    question: 'Posso parcelar minha compra?',
    answer: 'Sim! Oferecemos parcelamento em até 12x no cartão de crédito, com taxas competitivas do mercado. Consulte as condições para cada produto.',
  },
  {
    question: 'Como faço o rastreamento do pedido?',
    answer: 'Após a confirmação do pagamento, você receberá um código de rastreamento por e-mail e WhatsApp. Nosso sistema permite acompanhar cada etapa da importação em tempo real.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-primary mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-subheading text-muted-foreground">
            Tudo que você precisa saber
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-muted rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
