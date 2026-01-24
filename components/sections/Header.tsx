'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, FileText } from 'lucide-react';
import Image from 'next/image';

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
        isScrolled 
          ? 'bg-white shadow-lg py-3 md:py-4' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="relative h-12 md:h-14 w-48 md:w-64">
            {/* Logo Branca (quando header transparente) */}
            <Image
              src="/images/01-branco.png"
              alt="Finatti Medicina Diagnóstica"
              fill
              className={`object-contain transition-opacity duration-300 ${
                isScrolled ? 'opacity-0' : 'opacity-100'
              }`}
              priority
            />
            {/* Logo Laranja (quando header branco) */}
            <Image
              src="/images/01-laranja.png"
              alt="Finatti Medicina Diagnóstica"
              fill
              className={`object-contain transition-opacity duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-0'
              }`}
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium text-sm xl:text-base ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-terracota' 
                    : 'text-white hover:text-areia'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Instagram, Área do Paciente e WhatsApp Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.instagram.com/finattilab/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 transition-colors ${
                isScrolled ? 'text-terracota hover:text-terracota-dark' : 'text-white hover:text-areia'
              }`}
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://finattipatologia.pathoweb.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 finatti-border border-2 transition-all hover:scale-105 text-sm xl:text-base font-medium ${
                isScrolled 
                  ? 'border-terracota text-terracota hover:bg-terracota hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-terracota'
              }`}
            >
              <FileText size={18} />
              <span>Resultados</span>
            </a>
            <a
              href="https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-terracota text-white px-4 xl:px-5 py-2 xl:py-2.5 finatti-border hover:bg-terracota-dark transition-all hover:scale-105 text-sm xl:text-base font-medium shadow-lg"
            >
              <Phone size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-terracota' : 'text-white'
            }`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-white/20 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-colors font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-terracota' 
                    : 'text-white hover:text-areia'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://finattipatologia.pathoweb.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2.5 finatti-border border-2 transition-colors w-fit mt-2 font-medium ${
                isScrolled 
                  ? 'border-terracota text-terracota hover:bg-terracota hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-terracota'
              }`}
            >
              <FileText size={18} />
              <span>Resultados</span>
            </a>
            <a
              href="https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-terracota text-white px-4 py-2.5 finatti-border hover:bg-terracota-dark transition-colors w-fit font-medium"
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
