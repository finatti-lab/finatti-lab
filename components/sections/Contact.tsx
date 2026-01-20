'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle 
} from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aqui você pode adicionar a lógica de envio do formulário
    // Por exemplo, enviar para uma API ou serviço de email
    
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Cianorte - PR',
      link: 'https://maps.google.com',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(44) 9999-9999',
      link: 'tel:+5544999999999',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@finatti.com.br',
      link: 'mailto:contato@finatti.com.br',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg-Sex: 8h às 18h',
      link: null,
    },
  ];

  return (
    <Section id="contato" background="white">
      <SectionTitle
        title="Entre em Contato"
        subtitle="Estamos prontos para atender você com excelência e humanidade"
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-areia/30 rounded-2xl p-8 border border-areia">
            <h3 className="text-2xl font-display text-terracota mb-6">
              Envie sua Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-dark font-medium mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-areia-dark focus:border-terracota focus:ring-2 focus:ring-terracota/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-dark font-medium mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-areia-dark focus:border-terracota focus:ring-2 focus:ring-terracota/20 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-dark font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-areia-dark focus:border-terracota focus:ring-2 focus:ring-terracota/20 outline-none transition-all"
                  placeholder="(44) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-dark font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-areia-dark focus:border-terracota focus:ring-2 focus:ring-terracota/20 outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                <Send size={20} />
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-areia"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-terracota to-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark/70 hover:text-terracota transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-dark/70">{info.content}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            className="bg-gradient-to-br from-teal to-teal-dark rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MessageCircle size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-display mb-3">
              Atendimento Rápido
            </h3>
            <p className="mb-6 text-white/90">
              Prefere falar conosco pelo WhatsApp? Clique abaixo para iniciar uma conversa.
            </p>
            <Button
              variant="outline"
              size="lg"
              href="https://wa.me/5544999999999"
              className="bg-white text-teal hover:bg-areia border-white"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </Button>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            className="mt-6 bg-areia/30 rounded-2xl h-64 flex items-center justify-center border border-areia"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center text-dark/60">
              <MapPin size={48} className="mx-auto mb-2 text-terracota" />
              <p>Mapa será adicionado aqui</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
