import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { MacbookAnimation } from './MacbookAnimation';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms with spring for smoothness
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const gradientBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(800px circle at ${(x as number * 50) + 50}% ${(y as number * 50) + 50}%, hsl(var(--secondary) / 0.15) 0%, transparent 60%)`
  );

  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 150]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), springConfig);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero bg-pattern overflow-hidden"
    >
      {/* Interactive Gradient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dynamic Gradient Blob */}
        <motion.div
          className="absolute inset-0 opacity-100 mix-blend-multiply"
          style={{
            background: gradientBackground
          }}
        />

        <motion.div
          style={{
            y: y3,
            x: mousePosition.x * 50,
          }}
          className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] bg-secondary/30 rounded-full blur-[120px] animate-pulse-glow"
        />
        <motion.div
          style={{
            y: y2,
            x: mousePosition.x * -30,
          }}
          className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-primary/10 rounded-full blur-[100px] animate-pulse-glow delay-1000"
        />
        <motion.div
          style={{
            y: y1,
            x: mousePosition.x * 60,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] bg-secondary/15 rounded-full blur-[140px] animate-float-slow"
        />

        {/* Geometric Elements */}
        <motion.div
          style={{
            rotate: useTransform(scrollYProgress, [0, 1], [0, 45]),
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
          className="absolute top-20 right-[20%] w-32 h-32 border border-primary/10 rounded-3xl animate-float"
        />
        <motion.div
          style={{
            rotate: useTransform(scrollYProgress, [0, 1], [0, -30]),
            x: mousePosition.x * -40,
            y: mousePosition.y * -40,
          }}
          className="absolute bottom-32 left-[15%] w-24 h-24 border border-secondary/30 rounded-full animate-float-slow delay-500"
        />
        <motion.div
          style={{
            x: mousePosition.x * 60,
            y: mousePosition.y * 60,
          }}
          className="absolute top-1/3 left-[10%] w-16 h-16 bg-primary/5 rounded-2xl animate-float delay-300"
        />
      </div>

      <motion.div
        style={{ scale }}
        className="container-wide relative z-10 pt-40 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-caption text-foreground/70 font-medium">
              Importação Segura • Sem Estoque • Contrato Jurídico
            </span>
          </motion.div>

          {/* Main Title with Parallax */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-display text-primary mb-6"
            >
              Alcance seu iPhone
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="italic font-light bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text"
              >
                dos sonhos
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
            className="text-subheading text-muted-foreground max-w-2xl mx-auto mb-10 px-4"
          >
            Importação de produtos Apple com total segurança jurídica.
            <br className="hidden sm:block" />
            Sem estoque, sem riscos. Alcançamos o Brasil inteiro.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6"
          >
            <motion.a
              href="#comecar"
              className="btn-hero w-full sm:w-auto text-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Começar Agora
            </motion.a>
            <motion.a
              href="#como-funciona"
              className="btn-hero-secondary w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Como Funciona
            </motion.a>
          </motion.div>
        </div>

        {/* Floating Macbook Animation with Scroll control */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.15], [0, 1]),
            y: useTransform(scrollYProgress, [0, 0.15], [50, 0])
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 flex justify-center perspective-1000"
        >
          <div className="relative w-full max-w-5xl">
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-secondary/50 rounded-3xl blur-3xl transform scale-125 -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1.2, 1.3, 1.2],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <MacbookAnimation progress={scrollYProgress} />

            {/* Floating Elements around product */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-secondary/60 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center"
            >
              <span className="text-xl md:text-2xl">✨</span>
            </motion.div>

            <motion.div
              animate={{
                y: [10, -10, 10],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 w-10 h-10 md:w-14 md:h-14 bg-primary/10 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center"
            >
              <span className="text-lg md:text-xl">🔒</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-caption">Role para descobrir</span>

          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
