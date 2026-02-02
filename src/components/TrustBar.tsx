import { motion } from 'framer-motion';
import AppleLogo from '@/assets/partner-apple.png';
import RMALogo from '@/assets/partner-rma.png';
import InfinitePayLogo from '@/assets/partner-infinitepay.png';
import AlcanceLogo from '@/assets/partner-alcance-var.png';
import GorillaLogo from '@/assets/partner-gorillashield.png';

const partners = [
  { name: 'Apple', logo: AppleLogo },
  { name: 'Gorilla Shield', logo: GorillaLogo },
  { name: 'InfinitePay', logo: InfinitePayLogo },
  { name: 'RMA', logo: RMALogo },
  { name: 'Alcance Imports', logo: AlcanceLogo },
];

const trustItems = [
  {
    title: '100% Seguro',
    description: 'Garantia total em todas compras',
  },
  {
    title: 'Contrato Jurídico',
    description: 'Total transparência e proteção legal',
  },
  {
    title: 'Importação Direta',
    description: 'Produtos originais da fonte',
  },
  {
    title: 'Todo Brasil',
    description: 'Entregamos em qualquer estado',
  },
];

export function TrustBar() {
  return (
    <section className="bg-background border-y border-border/40 overflow-hidden py-12 md:py-16">
      <div className="container-wide mb-16">
        {/* Infinite Logo Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Double the items for seamless loop */}
            {[...partners, ...partners, ...partners].map((partner, idx) => (
              <div key={`${partner.name}-${idx}`} className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 md:h-14 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-12 border-t border-border/40">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center sm:text-left"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
