'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Button from '../ui/Button';

const navItems = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Equipe', href: '#equipe' },
  { name: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-terracota rounded-lg flex items-center justify-center">
              <span className="text-white font-display text-2xl">F</span>
            </div>
            <div className="hidden md:block">
              <h1 className={`font-display text-xl ${isScrolled ? 'text-terracota' : 'text-white'}`}>
                Finatti
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-dark/60' : 'text-white/80'}`}>
                Medicina Diagnóstica
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`font-medium transition-colors hover:text-terracota ${
                  isScrolled ? 'text-dark' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="primary" 
              size="sm"
              href="https://wa.me/5544999999999"
            >
              <Phone size={18} />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-areia"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col py-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="py-3 px-4 text-dark font-medium hover:bg-areia rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 px-4">
                <Button 
                  variant="primary" 
                  size="md"
                  href="https://wa.me/5544999999999"
                  className="w-full"
                >
                  <Phone size={18} />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
