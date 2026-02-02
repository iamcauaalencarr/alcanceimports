import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function CTA() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <section
      id="comecar"
      ref={containerRef}
      className="section-padding-lg bg-gradient-navy relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/30 rounded-full blur-[200px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/15 rounded-full blur-[80px]" />
      </motion.div>

      {/* Geometric Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-10 w-32 h-32 border border-secondary/10 rounded-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-10 w-24 h-24 border border-secondary/20 rounded-full"
      />

      <div className="container-wide relative z-10">
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-caption font-semibold text-secondary/60 uppercase tracking-wider mb-6"
          >
            Comece sua jornada
          </motion.span>

          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Pronto para alcançar seu
            <br />
            <motion.span
              className="italic"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              produto Apple?
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-secondary/90 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comece agora mesmo. Processo 100% online e seguro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-light inline-flex items-center gap-3 group"
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              whileTap={{ scale: 0.98 }}
            >
              Começar minha importação

            </motion.a>
          </motion.div>

          <motion.p
            className="mt-8 text-sm text-secondary/50 flex items-center justify-center gap-3 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-secondary/40 rounded-full" />
              Sem taxas escondidas
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-secondary/40 rounded-full" />
              Contrato digital
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-secondary/40 rounded-full" />
              Suporte dedicado
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
