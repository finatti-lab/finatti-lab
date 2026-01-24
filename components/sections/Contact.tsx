'use client';

import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden py-12 lg:py-0">
      {/* MOBILE: Layout vertical simples */}
      <div className="lg:hidden px-4">
        <h2 className="text-2xl font-bold text-terracota text-center mb-8">Entre em Contato</h2>
        
        {/* Formulário */}
        <form className="space-y-4 mb-8">
          <input 
            type="text" 
            placeholder="Nome" 
            className="w-full p-3 border-2 border-stone-200 rounded-tl-lg rounded-br-lg text-sm focus:border-terracota focus:outline-none"
          />
          <input 
            type="email" 
            placeholder="E-mail" 
            className="w-full p-3 border-2 border-stone-200 rounded-tl-lg rounded-br-lg text-sm focus:border-terracota focus:outline-none"
          />
          <input 
            type="tel" 
            placeholder="Telefone" 
            className="w-full p-3 border-2 border-stone-200 rounded-tl-lg rounded-br-lg text-sm focus:border-terracota focus:outline-none"
          />
          <textarea 
            placeholder="Mensagem" 
            rows={4}
            className="w-full p-3 border-2 border-stone-200 rounded-tl-lg rounded-br-lg text-sm focus:border-terracota focus:outline-none resize-none"
          />
          <button 
            type="submit"
            className="w-full py-3 bg-terracota text-white font-bold rounded-tl-xl rounded-br-xl hover:bg-terracota-dark transition-colors flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Enviar Mensagem
          </button>
        </form>
        
        {/* Informações compactas */}
        <div className="bg-areia p-4 rounded-tl-xl rounded-br-xl mb-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-bold text-terracota block mb-1">Endereço</span>
              <a 
                href="https://maps.app.goo.gl/CCvbrU1Ys1J7odEFh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 text-xs hover:text-terracota"
              >
                Av. Espírito Santo, 130<br/>Zona 1 - Cianorte-PR
              </a>
            </div>
            <div>
              <span className="font-bold text-terracota block mb-1">Telefone</span>
              <a href="tel:+5544991272027" className="text-stone-600 text-xs hover:text-terracota">
                (44) 99127-2027
              </a>
            </div>
            <div>
              <span className="font-bold text-terracota block mb-1">E-mail</span>
              <a href="mailto:contato@finatti.com.br" className="text-stone-600 text-xs hover:text-terracota">
                contato@finatti.com.br
              </a>
            </div>
            <div>
              <span className="font-bold text-terracota block mb-1">Horário</span>
              <span className="text-stone-600 text-xs">Seg-Sex: 8h às 18h</span>
            </div>
          </div>
        </div>
        
        {/* WhatsApp destaque */}
        <a 
          href="https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-bold rounded-tl-xl rounded-br-xl hover:bg-[#1ea952] transition-colors"
        >
          <MessageCircle size={20} />
          Chamar no WhatsApp
        </a>
      </div>

      {/* DESKTOP: Split layout original */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-0">
        <div className="bg-white p-16 flex flex-col justify-center">
          <span className="text-terracota font-semibold text-sm uppercase tracking-wider mb-2">Contato</span>
          <h2 className="text-4xl font-bold text-stone-900 mb-3">Entre em Contato</h2>
          <p className="text-base text-stone-600 mb-8">Estamos prontos para atender você com excelência e humanidade</p>
          
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

        <div className="bg-terracota text-white p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
            <Image src="/images/05b.png" alt="" fill className="object-contain" />
          </div>

          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-8">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-white/20">
                <MapPin className="text-white flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Endereço</h4>
                  <a 
                    href="https://maps.app.goo.gl/CCvbrU1Ys1J7odEFh" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    Av. Espírito Santo, 130 - Zona 1<br />Cianorte - PR, 87200-000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-white/20">
                <Phone className="text-white flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Telefone</h4>
                  <a href="tel:+5544991272027" className="text-white/90 hover:text-white transition-colors text-lg">
                    (44) 99127-2027
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-white/20">
                <Mail className="text-white flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">E-mail</h4>
                  <a href="mailto:contato@finatti.com.br" className="text-white/90 hover:text-white transition-colors">
                    contato@finatti.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-white flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Horário</h4>
                  <p className="text-white/90">Segunda a Sexta<br />8h às 18h</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle size={32} />
                <h4 className="text-2xl font-bold">Atendimento Rápido</h4>
              </div>
              <p className="mb-6 text-white/90 text-lg">
                Prefere falar conosco pelo WhatsApp? Clique abaixo para iniciar uma conversa.
              </p>
              <a
                href="https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-terracota px-8 py-4 finatti-border font-bold hover:bg-areia hover:scale-105 transition-all shadow-xl text-lg"
              >
                <MessageCircle size={24} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
