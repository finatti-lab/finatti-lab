'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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

  const navLinks = [
    { href: '#hero', label: 'Início' },
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#equipe', label: 'Equipe' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-terracota rounded-lg flex items-center justify-center text-white font-bold text-xl">
              F
            </div>
            <div>
              <h1 className="text-xl font-bold text-terracota">Finatti</h1>
              <p className="text-xs text-gray-600">Medicina Diagnóstica</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-terracota transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/5544999999999"
            className="hidden md:flex items-center gap-2 bg-terracota text-white px-4 py-2 rounded-lg hover:bg-terracota-dark transition-colors"
          >
            <Phone size={18} />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-terracota"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-terracota transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5544999999999"
              className="flex items-center gap-2 bg-terracota text-white px-4 py-2 rounded-lg hover:bg-terracota-dark transition-colors w-fit"
            >
              <Phone size={18} />
              <span>WhatsApp</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
