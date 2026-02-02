import { motion, useScroll, useTransform } from 'framer-motion';

import { useRef } from 'react';

const features = [
  'Contrato jurídico registrado',
  'Rastreamento em tempo real',
  'Garantia de 90 dias',
  'Produtos 100% originais',
  'Suporte dedicado',
];

export function Security() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="seguranca"
      ref={containerRef}
      className="section-padding-lg bg-gradient-navy relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]" />
      </motion.div>

      {/* Geometric Decorations */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]) }}
        className="absolute top-20 left-10 w-20 h-20 border border-secondary/20 rounded-2xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
        className="absolute bottom-40 right-20 w-32 h-32 border border-secondary/10 rounded-full"
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-caption font-semibold text-secondary/60 uppercase tracking-wider mb-4"
            >
              Proteção garantida
            </motion.span>
            <h2 className="text-heading text-primary-foreground mb-6 font-display">
              Segurança em primeiro lugar
            </h2>
            <p className="text-lg text-secondary/90 leading-relaxed mb-10">
              Nossa missão é democratizar o acesso a produtos Apple premium
              através de um modelo 100% seguro e transparente.
            </p>

            <ul className="space-y-5">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  <span className="text-lg text-primary-foreground group-hover:text-secondary transition-colors duration-300">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: imageY }}
            className="relative"
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
                alt="Segurança Jurídica"
                className="w-full h-auto"
              />

              {/* Overlay Badge */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-2xl p-6 z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-4">

                  <div>
                    <p className="font-semibold text-foreground font-display">Contrato Verificado</p>
                    <p className="text-sm text-muted-foreground">Proteção jurídica garantida</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 w-16 h-16 bg-secondary/30 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center"
            >
              <span className="text-2xl">🛡️</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
