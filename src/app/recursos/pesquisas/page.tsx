import Image from 'next/image';

export default function PesquisasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-black mb-6 text-gray-900 font-display">
              Pesquisas de Satisfação Inteligentes
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-body">
              Colete feedback valioso dos seus clientes e tome decisões baseadas em dados reais. Melhore continuamente seu serviço com insights precisos.
            </p>
            <button className="bg-[#7C3AED] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6D28D9] transition-all transform hover:scale-105 shadow-xl text-lg">
              Começar Agora
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Pesquisas Personalizadas</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Crie pesquisas customizadas com diferentes tipos de perguntas e escalas de avaliação adaptadas ao seu negócio.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Automação de Envio</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Configure o envio automático de pesquisas após pedidos, com intervalos e condições personalizáveis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Análise de Resultados</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Visualize relatórios detalhados com gráficos e métricas para identificar pontos fortes e oportunidades de melhoria.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Ação Imediata</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Receba alertas em tempo real para avaliações negativas e tome ações corretivas rapidamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#7C3AED]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8 text-white font-display">
            Pronto para conhecer melhor seus clientes?
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto font-body">
            Junte-se a milhares de restaurantes que já estão usando o Pediu para coletar feedback valioso.
          </p>
          <button className="bg-white text-[#7C3AED] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl text-lg">
            Começar Teste Grátis
          </button>
        </div>
      </section>
    </div>
  );
} 