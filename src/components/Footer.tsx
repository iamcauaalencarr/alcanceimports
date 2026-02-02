import { motion } from 'framer-motion';

import Logo from '@/assets/logo.svg';


const companyLinks = [
  { label: 'Sobre nós', href: '/#sobre' },
  { label: 'Como funciona', href: '/#como-funciona' },
  { label: 'Segurança', href: '/#seguranca' },
  { label: 'FAQ', href: '/#faq' },
];

export function Footer() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container-wide py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Column 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <img
                src={Logo}
                alt="Alcance Imports"
                className="h-8 w-auto invert"
              />
              <span className="font-display text-lg font-semibold">
                Alcance Imports
              </span>
            </div>
            <p className="text-secondary/80 text-base leading-relaxed mb-4">
              Alcançar o Brasil inteiro!
            </p>
            <p className="text-secondary/60 text-sm leading-relaxed">
              Importação segura de produtos Apple com total transparência.
            </p>
          </motion.div>



          {/* Column 3 - Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, idx) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-secondary/70 hover:text-secondary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <a
                  href="mailto:contato@alcanceimports.com.br"
                  className="text-secondary/70 hover:text-secondary transition-colors duration-200 text-sm"
                >
                  contato@alcanceimports.com.br
                </a>
              </li>
              <li>
                <a
                  href="tel:+5568999027454"
                  className="text-secondary/70 hover:text-secondary transition-colors duration-200 text-sm"
                >
                  (68) 99902-7454
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div>
              <p className="font-medium mb-4">Redes Sociais</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/alcance.imports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary/70 hover:text-secondary transition-colors duration-200 text-sm"
                >
                  Instagram
                </a>
                <a
                  href="https://wa.me/5568999027454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary/70 hover:text-secondary transition-colors duration-200 text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary/50">
            <p>© 2026 Alcance Imports. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <a href="/politica-de-privacidade" className="hover:text-secondary transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-de-uso" className="hover:text-secondary transition-colors">
                Termos de Uso
              </a>
              <a href="/lgpd" className="hover:text-secondary transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
