import { useEffect, useRef } from 'react';

const Contato = () => {
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
      id="contato"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Estou aqui para ajudar você. Entre em contato e vamos conversar sobre como posso te ajudar.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
              <p className="mb-6 opacity-90">
                A forma mais rápida de entrar em contato
              </p>
              <a
                href="https://wa.me/5521986908094?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105"
              >
                Abrir WhatsApp
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-4">Localização</h3>
              <p className="mb-2 opacity-90">São Gonçalo, RJ</p>
              <p className="opacity-90">Atendimento presencial e online</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Horários de Atendimento</h3>
            <p className="opacity-90 mb-4">
              Entre em contato para agendar seu horário preferido
            </p>
            <a
              href="https://wa.me/5521986908094?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Agendar Consulta Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;

