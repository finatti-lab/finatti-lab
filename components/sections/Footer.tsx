'use client';

import { Phone, Instagram, Star } from 'lucide-react';
import Image from 'next/image';

// TODO(cliente): quando o ID do Google Meu Negócio estiver disponível, trocar por
// 'https://search.google.com/local/writereview?placeid=<PLACE_ID>' para abrir
// direto o formulário de avaliação. Até lá, o link leva à ficha no Google Maps.
const GOOGLE_REVIEW_URL = 'https://maps.app.goo.gl/CCvbrU1Ys1J7odEFh';

export default function Footer() {
  return (
    <footer className="bg-[#1e3a3a] text-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none hidden lg:block">
        <Image src="/images/05b.png" alt="" fill className="object-contain" />
      </div>
      
      {/* MOBILE: Layout simplificado */}
      <div className="lg:hidden py-12 px-4 text-center relative z-10">
        {/* Logo + Slogan */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Image 
              src="/images/05b.png"
              alt="Finatti"
              width={40}
              height={40}
            />
            <div className="text-left">
              <h3 className="text-lg font-bold">Finatti</h3>
              <p className="text-xs text-gray-400">Medicina Diagnóstica</p>
            </div>
          </div>
          <p className="text-sm text-white/80 italic">
            A resposta que você precisa no tempo que você merece
          </p>
        </div>
        
        {/* Links em 2 colunas */}
        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
          <a href="#sobre" className="text-gray-400 hover:text-terracota transition-colors">Sobre Nós</a>
          <a href="#servicos" className="text-gray-400 hover:text-terracota transition-colors">Serviços</a>
          <a href="#equipe" className="text-gray-400 hover:text-terracota transition-colors">Equipe</a>
          <a href="#contato" className="text-gray-400 hover:text-terracota transition-colors">Contato</a>
        </div>

        {/* Contato mobile */}
        <div className="text-center mb-6 text-sm text-gray-400">
          <p>Av. Espírito Santo, 130 - Cianorte-PR</p>
          <p>CEP: 87200-097</p>
          <a href="mailto:finattipatologia@gmail.com" className="text-terracota hover:text-white transition-colors block mt-2">
            finattipatologia@gmail.com
          </a>
          <p className="mt-2">Seg-Sex: 8h às 18h | Sáb: 8h às 12h</p>
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
        
        {/* Avaliação no Google */}
        <div className="mb-8 pt-8 border-t border-white/20">
          <p className="text-white/70 text-sm mb-3">
            Gostou do nosso atendimento? Deixe sua avaliação!
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-tl-lg rounded-br-lg transition-colors text-sm"
          >
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Avaliar no Google
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/50">
          © 2026 Finatti Medicina Diagnóstica. Todos os direitos reservados.
        </p>
      </div>

      {/* DESKTOP: Layout original */}
      <div className="hidden lg:block max-w-7xl mx-auto px-8 py-12 relative z-10">
        {/* Logo + Slogan no topo */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Image 
              src="/images/05b.png"
              alt="Finatti"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold text-white">Finatti</span>
            <span className="text-white/70 text-sm">Medicina Diagnóstica</span>
          </div>
          <p className="text-white/80 italic">
            A resposta que você precisa no tempo que você merece
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {/* Navegação */}
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

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-3 text-base">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Av. Espírito Santo, 130</li>
              <li>Cianorte - PR, 87200-097</li>
              <li>
                <a href="tel:+5544991272027" className="hover:text-terracota transition-colors">
                  (44) 99127-2027
                </a>
              </li>
              <li>
                <a href="mailto:finattipatologia@gmail.com" className="hover:text-terracota transition-colors">
                  finattipatologia@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4 className="font-bold mb-3 text-base">Horário</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Seg-Sex: 8h às 18h</li>
              <li>Sábado: 8h às 12h</li>
            </ul>
          </div>

          {/* Ouvidoria */}
          <div>
            <h4 className="font-bold mb-3 text-base">Ouvidoria</h4>
            <p className="text-sm text-gray-400 mb-2">
              Sua opinião é importante para nós. Entre em contato para sugestões, elogios ou reclamações.
            </p>
            <a 
              href="mailto:finattipatologia@gmail.com" 
              className="text-terracota hover:text-white transition-colors text-sm"
            >
              finattipatologia@gmail.com
            </a>
          </div>
        </div>

        {/* Avaliação no Google */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">
              Gostou do nosso atendimento? Deixe sua avaliação!
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-tl-lg rounded-br-lg transition-colors text-sm"
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              Avaliar no Google
            </a>
          </div>
        </div>

        {/* Redes Sociais Desktop */}
        <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400">
            © 2026 Finatti Medicina Diagnóstica. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
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
        </div>
      </div>
    </footer>
  );
}
