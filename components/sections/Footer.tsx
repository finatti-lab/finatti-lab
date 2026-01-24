'use client';

import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1e3a3a] text-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none hidden lg:block">
        <Image src="/images/05b.png" alt="" fill className="object-contain" />
      </div>
      
      {/* MOBILE: Layout simplificado */}
      <div className="lg:hidden py-12 px-4 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-10 h-10 bg-terracota finatti-border-alt flex items-center justify-center text-white font-bold text-lg">
              F
            </div>
            <div className="text-left">
              <h3 className="text-base font-bold">Finatti</h3>
              <p className="text-xs text-gray-400">Medicina Diagnóstica</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Seus olhos em cada exame</p>
        </div>
        
        {/* Links em 2 colunas */}
        <div className="grid grid-cols-2 gap-4 text-sm mb-8">
          <a href="#sobre" className="text-gray-400 hover:text-terracota transition-colors">Sobre Nós</a>
          <a href="#servicos" className="text-gray-400 hover:text-terracota transition-colors">Serviços</a>
          <a href="#equipe" className="text-gray-400 hover:text-terracota transition-colors">Equipe</a>
          <a href="#contato" className="text-gray-400 hover:text-terracota transition-colors">Contato</a>
        </div>
        
        {/* Redes sociais */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/finattilab/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-terracota transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.me/5544991272027"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors"
          >
            <Phone size={20} />
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-xs text-white/50">
          © 2026 Finatti Medicina Diagnóstica. Todos os direitos reservados.
        </p>
      </div>

      {/* DESKTOP: Layout original */}
      <div className="hidden lg:block max-w-7xl mx-auto px-8 py-12 relative z-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-terracota finatti-border-alt flex items-center justify-center text-white font-bold text-lg">
                F
              </div>
              <div>
                <h3 className="text-lg font-bold">Finatti</h3>
                <p className="text-xs text-gray-400">Medicina Diagnóstica</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Seus olhos em cada exame. Diagnóstico preciso com propósito e humanidade.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-base">Navegação</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre Nós', 'Diferenciais', 'Serviços'].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${['hero', 'sobre', 'diferenciais', 'servicos'][index]}`}
                    className="text-sm text-gray-400 hover:text-terracota transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-base">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="#equipe" className="text-sm md:text-base text-gray-400 hover:text-terracota transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm md:text-base text-gray-400 hover:text-terracota transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-gray-400 hover:text-terracota transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-base">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm md:text-base">
                <MapPin size={16} className="text-terracota flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/CCvbrU1Ys1J7odEFh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracota transition-colors"
                >
                  Av. Espírito Santo, 130 - Zona 1<br />Cianorte - PR, 87200-000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-terracota flex-shrink-0" />
                <a href="tel:+5544991272027" className="text-sm md:text-base text-gray-400 hover:text-terracota transition-colors">
                  (44) 99127-2027
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-terracota flex-shrink-0 mt-0.5" />
                <a href="mailto:contato@finatti.com.br" className="text-sm md:text-base text-gray-400 hover:text-terracota transition-colors break-all">
                  contato@finatti.com.br
                </a>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="flex items-center gap-4 mt-4 md:mt-6">
              <a 
                href="https://www.instagram.com/finattilab/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-terracota transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-terracota transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-terracota transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2026 Finatti Medicina Diagnóstica. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
            <a href="#" className="text-gray-400 hover:text-terracota transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-terracota transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
