'use client';

import { MessageSquare, Mail } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function Ouvidoria() {
  return (
    <section id="ouvidoria" className="py-12 lg:py-16 bg-areia">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="bg-white rounded-tl-3xl rounded-br-3xl p-8 md:p-12 shadow-sm">
          <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8 text-teal" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-teal mb-4">
            Canal de Ouvidoria
          </h2>

          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Sua opinião é fundamental para continuarmos melhorando.
            Envie sugestões, elogios ou reclamações. Estamos sempre prontos para ouvir você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:finattipatologia@gmail.com?subject=Ouvidoria%20Finatti"
              className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white px-6 py-3 rounded-tl-xl rounded-br-xl font-medium transition-colors"
            >
              <Mail className="w-5 h-5" />
              Enviar E-mail
            </a>

            <a
              href="https://wa.me/5544991272027?text=Ol%C3%A1!%20Gostaria%20de%20enviar%20uma%20sugest%C3%A3o%20para%20a%20Ouvidoria%20da%20Finatti."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ea952] text-white px-6 py-3 rounded-tl-xl rounded-br-xl font-medium transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
