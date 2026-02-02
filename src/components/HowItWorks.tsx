import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Escolha seu produto',
    description: 'Navegue pelo catálogo de produtos Apple',
  },
  {
    number: '02',
    title: 'Faça seu pedido',
    description: 'Contrato jurídico assinado digitalmente',
  },
  {
    number: '03',
    title: 'Importação segura',
    description: 'Acompanhe o processo em tempo real',
  },
  {
    number: '04',
    title: 'Receba em casa',
    description: 'Entrega em todo Brasil',
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      id="como-funciona" 
      ref={containerRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </motion.div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-caption font-semibold text-primary/60 uppercase tracking-wider mb-4"
          >
            Processo simplificado
          </motion.span>
          <h2 className="text-heading text-primary mb-4 font-display">Como funciona</h2>
          <p className="text-subheading text-muted-foreground">
            Simples, seguro e transparente
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative group"
            >
              <motion.div 
                className="bg-card border border-border rounded-2xl p-8 lg:p-10 h-full relative overflow-hidden"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
              >
                {/* Hover Gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Big Number */}
                <motion.span 
                  className="absolute top-6 right-6 text-8xl font-bold text-muted/30 select-none pointer-events-none font-display"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 0.3, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                >
                  {step.number}
                </motion.span>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.span 
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary font-semibold text-lg mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.number}
                  </motion.span>
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-display">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-border" />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted to-transparent pointer-events-none" />
    </section>
  );
}
