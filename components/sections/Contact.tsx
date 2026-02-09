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
                Av. Espírito Santo, 130<br/>Zona 1 - Cianorte-PR<br/>CEP: 87200-097
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
              <a href="mailto:finattipatologia@gmail.com" className="text-stone-600 text-xs hover:text-terracota">
                finattipatologia@gmail.com
              </a>
            </div>
            <div>
              <span className="font-bold text-terracota block mb-1">Horário</span>
              <span className="text-stone-600 text-xs">Seg-Sex: 8h às 18h<br/>Sábado: 8h às 12h</span>
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
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
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
                    Av. Espírito Santo, 130 - Zona 1<br />Cianorte - PR, CEP: 87200-097
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
                  <a href="mailto:finattipatologia@gmail.com" className="text-white/90 hover:text-white transition-colors">
                    finattipatologia@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-white flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Horário</h4>
                  <p className="text-white/90">Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</p>
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
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ea952] text-white px-8 py-4 finatti-border font-bold hover:scale-105 transition-all shadow-xl text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
