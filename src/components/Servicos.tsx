import { useEffect, useRef } from 'react';

const Servicos = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, index * 200);
            });
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

  const servicos = [
    {
      title: 'Terapia Individual',
      description: 'Atendimento personalizado focado nas suas necessidades específicas, proporcionando um espaço seguro para autoconhecimento e crescimento pessoal.',
      image: '/individual.webp',
    },
    {
      title: 'Terapia de Casal',
      description: 'Trabalho conjunto para fortalecer relacionamentos, melhorar comunicação e resolver conflitos de forma construtiva.',
      image: '/casal.webp',
    },
    {
      title: 'Atendimento Online',
      description: 'Sessões de terapia pela internet, com a mesma qualidade e profissionalismo, no conforto da sua casa.',
      image: '/cindy3.avif',
    },
    {
      title: 'Atendimento Presencial',
      description: 'Consultas presenciais em ambiente acolhedor e seguro, em São Gonçalo, RJ.',
      image: '/cindy2.avif',
    },
  ];

  const especialidades = [
    'Ansiedade',
    'Bipolaridade',
    'Borderline',
    'TOC',
    'Compulsões',
    'Abuso de álcool e drogas',
  ];

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="py-20 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Serviços
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Ofereço diferentes modalidades de atendimento para melhor atender suas necessidades
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="service-card bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 opacity-0 overflow-hidden"
            >
              <img
                src={servico.image}
                alt={servico.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {servico.title}
                </h3>
                <p className="text-gray-600">{servico.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-purple-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Especialidades
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {especialidades.map((especialidade, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center font-semibold text-purple-700 shadow-md"
              >
                {especialidade}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5521986908094?text=Olá! Gostaria de saber mais sobre os serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Fale comigo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Servicos;

