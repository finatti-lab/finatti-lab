'use client';

import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden">
      {/* Split Layout - Stack no mobile */}
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Lado Esquerdo - Formulário em fundo branco */}
        <div className="bg-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <span className="text-terracota font-semibold text-xs md:text-sm uppercase tracking-wider mb-2">Contato</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-2 md:mb-3">Entre em Contato</h2>
          <p className="text-sm md:text-base text-stone-600 mb-6 md:mb-8">Estamos prontos para atender você com excelência e humanidade</p>
          
          <form className="space-y-5">
            <div>
              <label className="block text-stone-700 font-medium mb-2">Nome Completo *</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-3 border-2 border-stone-200 finatti-border focus:ring-2 focus:ring-terracota focus:border-terracota transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-stone-700 font-medium mb-2">E-mail *</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-3 border-2 border-stone-200 finatti-border focus:ring-2 focus:ring-terracota focus:border-terracota transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-stone-700 font-medium mb-2">Telefone</label>
              <input
                type="tel"
                placeholder="(44) 99127-2027"
                className="w-full px-4 py-3 border-2 border-stone-200 finatti-border focus:ring-2 focus:ring-terracota focus:border-terracota transition-all"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-medium mb-2">Mensagem *</label>
              <textarea
                rows={4}
                placeholder="Como podemos ajudar?"
                className="w-full px-4 py-3 border-2 border-stone-200 finatti-border focus:ring-2 focus:ring-terracota focus:border-terracota transition-all resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-terracota text-white py-4 finatti-border font-semibold hover:bg-terracota-dark hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl text-lg"
            >
              Enviar Mensagem
              <Send size={20} />
            </button>
          </form>
        </div>

        {/* Lado Direito - Informações em fundo terracota */}
        <div className="bg-terracota text-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          {/* Isotipo decorativo branco */}
          <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 opacity-10 pointer-events-none hidden sm:block">
            <Image 
              src="/images/05b.png" 
              alt="" 
              fill 
              className="object-contain"
            />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">Informações de Contato</h3>
            
            <div className="space-y-5 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4 pb-5 md:pb-6 border-b border-white/20">
                <MapPin className="text-white flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-2 text-base md:text-lg">Endereço</h4>
                  <a 
                    href="https://maps.app.goo.gl/CCvbrU1Ys1J7odEFh" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white transition-colors text-sm md:text-base"
                  >
                    Av. Espírito Santo, 130 - Zona 1<br />Cianorte - PR, 87200-000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 pb-5 md:pb-6 border-b border-white/20">
                <Phone className="text-white flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-2 text-base md:text-lg">Telefone</h4>
                  <a href="tel:+5544991272027" className="text-white/90 hover:text-white transition-colors text-base md:text-lg">
                    (44) 99127-2027
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 pb-5 md:pb-6 border-b border-white/20">
                <Mail className="text-white flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-2 text-base md:text-lg">E-mail</h4>
                  <a href="mailto:contato@finatti.com.br" className="text-white/90 hover:text-white transition-colors text-sm md:text-base">
                    contato@finatti.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Clock className="text-white flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-2 text-base md:text-lg">Horário</h4>
                  <p className="text-white/90 text-sm md:text-base">Segunda a Sexta<br />8h às 18h</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <MessageCircle size={28} />
                <h4 className="text-xl md:text-2xl font-bold">Atendimento Rápido</h4>
              </div>
              <p className="mb-5 md:mb-6 text-white/90 text-sm md:text-base lg:text-lg">
                Prefere falar conosco pelo WhatsApp? Clique abaixo para iniciar uma conversa.
              </p>
              <a
                href="https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 md:gap-3 bg-white text-terracota px-6 md:px-8 py-3 md:py-4 finatti-border font-bold hover:bg-areia hover:scale-105 transition-all shadow-xl text-base md:text-lg"
              >
                <MessageCircle size={20} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
