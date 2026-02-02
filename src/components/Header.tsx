import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/assets/logo.svg';

const navItems = [
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Segurança', href: '#seguranca' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/80 backdrop-blur-xl shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={Logo}
              alt="Alcance Imports"
              className="h-8 w-auto transition-transform duration-500 group-hover:rotate-[5deg]"
            />
            <span className="font-display text-lg font-semibold text-primary hidden sm:block">
              Alcance Imports
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 link-underline pb-1"
                whileHover={{ y: -1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#comecar"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Começar
              <span className="text-base">→</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground relative z-50 w-10 h-10 flex items-center justify-center focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={false}
                animate={isMobileMenuOpen ? { d: "M6 18L18 6" } : { d: "M4 7H20" }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={false}
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1, d: "M4 12H20" }}
                transition={{ duration: 0.2 }}
              />
              <motion.path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={false}
                animate={isMobileMenuOpen ? { d: "M6 6L18 18" } : { d: "M4 17H20" }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="container-wide py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-foreground py-2"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#comecar"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-primary text-primary-foreground px-6 py-3 rounded-full text-base font-medium mt-6"
              >
                Começar →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
