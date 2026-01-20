'use client';

import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-terracota rounded-lg flex items-center justify-center text-white font-bold text-xl">
                F
              </div>
              <div>
                <h3 className="text-xl font-bold">Finatti</h3>
                <p className="text-sm text-gray-400">Medicina Diagnóstica</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Seus olhos em cada exame. Diagnóstico preciso com propósito e humanidade.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Heart size={16} className="text-terracota" />
              <span>Feito com valores cristãos</span>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre Nós', 'Diferenciais', 'Serviços'].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${['hero', 'sobre', 'diferenciais', 'servicos'][index]}`}
                    className="text-gray-400 hover:text-terracota transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="#equipe" className="text-gray-400 hover:text-terracota transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-terracota transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="https://wa.me/5544999999999" className="text-gray-400 hover:text-terracota transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} className="text-terracota" />
                <span>Cianorte - PR</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-terracota" />
                <a href="tel:+5544999999999" className="text-gray-400 hover:text-terracota transition-colors">
                  (44) 9999-9999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-terracota" />
                <a href="mailto:contato@finatti.com.br" className="text-gray-400 hover:text-terracota transition-colors">
                  contato@finatti.com.br
                </a>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-terracota transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-terracota transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-terracota transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Finatti Medicina Diagnóstica. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm">
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
