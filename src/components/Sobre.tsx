import { useEffect, useRef } from 'react';

const Sobre = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Sobre Mim
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Olá! Sou <strong className="text-purple-600">Cindy Magalhães</strong>, 
                psicoterapeuta clínica com formação em Psicologia pela UNESA e especialização 
                em Terapia Cognitivo-Comportamental (TCC) desde 2015.
              </p>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Em 2022, completei minha formação em DBT (Terapia Comportamental Dialética) 
                e também sou Coach certificada pelo SLAC. Minha abordagem é humanizada, 
                acolhedora e baseada em evidências científicas.
              </p>

              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Minha Missão
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oferecer um espaço seguro e acolhedor para que você possa trabalhar suas 
                  questões emocionais, desenvolver autoconhecimento e alcançar uma vida mais 
                  equilibrada e feliz. Acredito que cada pessoa é única e merece um 
                  atendimento personalizado e respeitoso.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Formação
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Psicologia - UNESA</li>
                    <li>• TCC - 2015</li>
                    <li>• DBT - 2022</li>
                    <li>• Coach SLAC</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Localização
                  </h4>
                  <p className="text-gray-700">
                    Atendo presencialmente em <strong>Rio de Janeiro, RJ</strong> e também 
                    ofereço atendimento online para sua comodidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;

