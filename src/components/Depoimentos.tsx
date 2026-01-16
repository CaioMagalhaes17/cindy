import { useEffect, useRef } from 'react';

const Depoimentos = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            const cards = entry.target.querySelectorAll('.testimonial-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, index * 150);
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

  const depoimentos = [
    {
      nome: 'Maria Silva',
      texto: 'A terapia com a Cindy transformou minha vida. Ela é muito acolhedora e profissional. Consegui superar minha ansiedade e hoje me sinto muito mais confiante.',
      rating: 5,
    },
    {
      nome: 'João Santos',
      texto: 'Excelente profissional! A abordagem dela me ajudou muito a entender e lidar melhor com minhas emoções. Recomendo de coração.',
      rating: 5,
    },
    {
      nome: 'Ana Costa',
      texto: 'Fiz terapia de casal com a Cindy e foi fundamental para melhorar nosso relacionamento. Ela tem uma escuta muito atenta e nos ajudou a nos comunicarmos melhor.',
      rating: 5,
    },
    {
      nome: 'Pedro Oliveira',
      texto: 'Atendimento online super prático e eficaz. A Cindy é muito dedicada e sempre me faz sentir acolhido. Estou muito satisfeito com os resultados.',
      rating: 5,
    },
    {
      nome: 'Juliana Ferreira',
      texto: 'Profissional excepcional! Me ajudou a trabalhar questões que carregava há anos. A terapia com ela foi um divisor de águas na minha vida.',
      rating: 5,
    },
    {
      nome: 'Carlos Mendes',
      texto: 'A Cindy tem uma forma única de trabalhar. Consegui desenvolver ferramentas importantes para lidar com o estresse e a ansiedade. Muito grato!',
      rating: 5,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Depoimentos
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Veja o que nossos clientes têm a dizer sobre o atendimento
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="testimonial-card bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 opacity-0"
            >
              <div className="flex items-center mb-4">
                {[...Array(depoimento.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "{depoimento.texto}"
              </p>
              <p className="text-purple-600 font-semibold">— {depoimento.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;

