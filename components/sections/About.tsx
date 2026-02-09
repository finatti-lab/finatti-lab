import { Heart, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="bg-white py-12 lg:py-24">
      {/* MOBILE: Layout vertical simples */}
      <div className="lg:hidden px-4">
        <h2 className="text-2xl font-bold text-terracota text-center mb-6">Nossa História</h2>
        
        {/* Texto resumido */}
        <p className="text-sm text-stone-700 mb-6 leading-relaxed">
          A Finatti Medicina Diagnóstica nasceu do sonho de dois profissionais apaixonados pela medicina: Dra. Izabella Finatti Cerci e Dr. Guilherme Cerci. Unidos pela visão de que diagnóstico é cuidado, eles fundaram um laboratório onde cada exame é tratado com a seriedade que uma vida merece.
        </p>
        
        {/* Citação compacta */}
        <blockquote className="border-l-4 border-terracota pl-4 mb-8">
          <p className="text-base italic text-terracota font-medium leading-relaxed">
            "Enxergamos o que outros não veem porque olhamos com propósito."
          </p>
        </blockquote>
        
        {/* Cards empilhados */}
        <div className="space-y-4">
          <div className="bg-areia border-2 border-areia-light p-4 rounded-tl-xl rounded-br-xl">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-terracota finatti-border-alt flex items-center justify-center flex-shrink-0">
                <Heart className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-terracota mb-1">Humanidade</h3>
                <p className="text-sm text-stone-600">Cada exame representa uma vida. Tratamos com o cuidado que você merece.</p>
              </div>
            </div>
          </div>
          <div className="bg-areia border-2 border-areia-light p-4 rounded-tl-xl rounded-br-xl">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-terracota finatti-border-alt flex items-center justify-center flex-shrink-0">
                <Target className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-terracota mb-1">Precisão</h3>
                <p className="text-sm text-stone-600">Tecnologia aliada à expertise médica para diagnósticos assertivos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP: Layout sem imagem */}
      <div className="hidden lg:block max-w-5xl mx-auto px-8">
        <div className="bg-areia p-16 rounded-tl-[3rem] rounded-br-[3rem]">
            <span className="text-terracota font-semibold text-sm uppercase tracking-wider mb-4 block text-center">Nossa História</span>
            <h2 className="font-mefta text-5xl font-bold text-stone-900 mb-6 leading-tight text-center">
              Medicina para servir
            </h2>
            
            <div className="space-y-4 text-stone-700 text-lg leading-relaxed mb-8">
              <p>
                A <strong className="text-terracota">Finatti Medicina Diagnóstica</strong> nasceu do sonho de 
                dois profissionais apaixonados pela medicina: <strong>Dra. Izabella Finatti Cerci</strong> e <strong>Dr. Guilherme Cerci</strong>.
              </p>

              <p>
                Fundada em Cianorte-PR, nossa missão vai além de realizar exames. Acreditamos que 
                <strong className="text-teal"> diagnóstico é cuidado</strong>, e cada resultado que entregamos 
                carrega a responsabilidade de impactar vidas.
              </p>

              <p>
                Guiados pelo compromisso com a excelência e pela ética profissional, 
                construímos um laboratório onde credibilidade, agilidade e humanidade caminham juntas.
              </p>
            </div>
            
            {/* Citação destacada com aspas grandes */}
            <blockquote className="border-l-4 border-terracota pl-6 relative max-w-3xl mx-auto">
              <span className="absolute -left-2 -top-4 text-6xl text-terracota/20 font-serif">"</span>
              <p className="text-2xl italic text-terracota font-medium leading-relaxed">
                Enxergamos o que outros não veem porque olhamos com propósito.
              </p>
            </blockquote>
          </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16 px-8">
          {[
            {
              icon: Heart,
              title: 'Humanidade',
              description: 'Cada exame representa uma vida. Tratamos com o cuidado que você merece.',
            },
            {
              icon: Target,
              title: 'Precisão',
              description: 'Tecnologia aliada à expertise médica para diagnósticos assertivos.',
            },
          ].map((value) => (
            <div key={value.title} className="bg-white border-2 border-areia finatti-border p-8 hover:border-terracota hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-terracota finatti-border-alt flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <value.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-terracota mb-2">
                    {value.title}
                  </h3>
                  <p className="text-base text-stone-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
