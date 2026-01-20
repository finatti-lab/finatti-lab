'use client';

import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacao: [
      { name: 'Início', href: '#hero' },
      { name: 'Sobre Nós', href: '#sobre' },
      { name: 'Diferenciais', href: '#diferenciais' },
      { name: 'Serviços', href: '#servicos' },
    ],
    contato: [
      { name: 'Equipe', href: '#equipe' },
      { name: 'Contato', href: '#contato' },
      { name: 'WhatsApp', href: 'https://wa.me/5544999999999' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-dark to-teal-dark text-white w-full">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-terracota rounded-lg flex items-center justify-center">
                <span className="text-white font-display text-2xl">F</span>
              </div>
              <div className="text-left">
                <h3 className="font-display text-xl">Finatti</h3>
                <p className="text-sm text-white/70">Medicina Diagnóstica</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              Seus olhos em cada exame. Diagnóstico preciso com propósito e humanidade.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Heart size={16} className="text-terracota" />
              <span>Feito com valores cristãos</span>
            </div>
          </motion.div>

          {/* Navegação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg mb-4 text-areia">Navegação</h4>
            <ul className="space-y-2">
              {footerLinks.navegacao.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-terracota transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links Úteis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg mb-4 text-areia">Links Úteis</h4>
            <ul className="space-y-2">
              {footerLinks.contato.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/70 hover:text-terracota transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-lg mb-4 text-areia">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin size={18} className="text-terracota flex-shrink-0 mt-1" />
                <span className="text-sm">Cianorte - PR</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Phone size={18} className="text-terracota flex-shrink-0 mt-1" />
                <a href="tel:+5544999999999" className="text-sm hover:text-terracota transition-colors">
                  (44) 9999-9999
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Mail size={18} className="text-terracota flex-shrink-0 mt-1" />
                <a href="mailto:contato@finatti.com.br" className="text-sm hover:text-terracota transition-colors">
                  contato@finatti.com.br
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-terracota rounded-lg flex items-center justify-center transition-colors group"
                >
                  <social.icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>
              © {currentYear} Finatti Medicina Diagnóstica. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-terracota transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-terracota transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
