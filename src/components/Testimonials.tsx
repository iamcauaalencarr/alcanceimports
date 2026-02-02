import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    quote: 'Recebi meu iPhone 15 Pro em perfeitas condições. O processo foi transparente do início ao fim.',
    author: 'Maria Silva',
    location: 'São Paulo',
  },
  {
    quote: 'Impressionado com a segurança jurídica. Contrato detalhado e suporte excepcional.',
    author: 'João Santos',
    location: 'Rio de Janeiro',
  },
  {
    quote: 'Alcance Imports tornou possível meu sonho de ter um MacBook. Recomendo!',
    author: 'Ana Costa',
    location: 'Brasília',
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="sobre"
      ref={containerRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
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
            Depoimentos
          </motion.span>
          <h2 className="text-heading text-primary mb-4 font-display">
            O que nossos clientes dizem
          </h2>
          <p className="text-subheading text-muted-foreground">
            Milhares de sonhos realizados com segurança
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative"
            >
              <motion.div
                className="bg-muted rounded-2xl p-8 lg:p-10 h-full relative overflow-hidden"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
              >
                {/* Hover Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
                />



                {/* Content */}
                <div className="relative z-10">
                  <p className="text-lg text-foreground leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-lg font-semibold text-primary font-display">
                        {testimonial.author.charAt(0)}
                      </span>
                    </motion.div>
                    <div>
                      <p className="font-semibold text-foreground font-display">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-secondary to-transparent pointer-events-none" />
    </section>
  );
}
