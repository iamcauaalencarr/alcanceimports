import { motion } from 'framer-motion';

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
    <section className="bg-gradient-navy py-16 md:py-20">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-primary-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-secondary/80">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
