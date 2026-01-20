'use client';

import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function Contact() {
  return (
    <Section id="contato" background="white">
      <SectionTitle
        title="Entre em Contato"
        subtitle="Estamos prontos para atender você com excelência e humanidade"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* Formulário */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-terracota mb-4 md:mb-6">Envie sua Mensagem</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Nome Completo *</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracota focus:border-transparent text-sm md:text-base"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">E-mail *</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracota focus:border-transparent text-sm md:text-base"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Telefone</label>
              <input
                type="tel"
                placeholder="(44) 99999-9999"
                className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracota focus:border-transparent text-sm md:text-base"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Mensagem *</label>
              <textarea
                rows={4}
                placeholder="Como podemos ajudar?"
                className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracota focus:border-transparent text-sm md:text-base"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-terracota text-white py-2.5 md:py-3 rounded-lg font-medium hover:bg-terracota-dark transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Enviar Mensagem
              <Send size={18} />
            </button>
          </form>
        </div>

        {/* Informações */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-areia p-5 md:p-6 rounded-xl">
              <MapPin className="text-terracota mb-3" size={24} />
              <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Endereço</h4>
              <a href="https://maps.google.com" className="text-gray-600 hover:text-terracota text-sm md:text-base">
                Cianorte - PR
              </a>
            </div>

            <div className="bg-areia p-5 md:p-6 rounded-xl">
              <Phone className="text-terracota mb-3" size={24} />
              <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Telefone</h4>
              <a href="tel:+5544999999999" className="text-gray-600 hover:text-terracota text-sm md:text-base">
                (44) 9999-9999
              </a>
            </div>

            <div className="bg-areia p-5 md:p-6 rounded-xl">
              <Mail className="text-terracota mb-3" size={24} />
              <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">E-mail</h4>
              <a href="mailto:contato@finatti.com.br" className="text-gray-600 hover:text-terracota text-sm md:text-base break-all">
                contato@finatti.com.br
              </a>
            </div>

            <div className="bg-areia p-5 md:p-6 rounded-xl">
              <Clock className="text-terracota mb-3" size={24} />
              <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Horário</h4>
              <p className="text-gray-600 text-sm md:text-base">Seg-Sex: 8h às 18h</p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-teal text-white p-5 md:p-6 rounded-xl">
            <MessageCircle className="mb-3" size={28} />
            <h3 className="text-lg md:text-xl font-bold mb-2">Atendimento Rápido</h3>
            <p className="mb-4 text-sm md:text-base">
              Prefere falar conosco pelo WhatsApp? Clique abaixo para iniciar uma conversa.
            </p>
            <a
              href="https://wa.me/5544999999999"
              className="inline-flex items-center gap-2 bg-white text-teal px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-medium hover:bg-areia transition-colors text-sm md:text-base"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>
          </div>

          {/* Mapa Placeholder */}
          <div className="bg-gray-200 rounded-xl h-48 md:h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-gray-400 mx-auto mb-2" size={40} />
              <p className="text-gray-500 text-sm md:text-base">Mapa será adicionado aqui</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
