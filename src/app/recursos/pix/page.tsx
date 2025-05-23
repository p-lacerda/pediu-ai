import Image from 'next/image';

export default function PixPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-black mb-6 text-gray-900 font-display">
              Pagamentos Instantâneos com Pix
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-body">
              Receba pagamentos na hora com a forma mais prática e segura do mercado. Integração completa com o sistema Pix para agilizar suas transações.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Pagamento Instantâneo</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Receba o dinheiro na hora, sem esperar compensação bancária. Agilize seu fluxo de caixa com pagamentos instantâneos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Máxima Segurança</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Transações protegidas pelo Banco Central, com criptografia avançada e confirmação instantânea.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Gestão Financeira</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Acompanhe todas as transações em tempo real, com relatórios detalhados e conciliação automática.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Configuração Flexível</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Personalize chaves Pix, configure limites e gerencie múltiplas contas de forma simples e intuitiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#7C3AED]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8 text-white font-display">
            Pronto para receber pagamentos instantâneos?
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto font-body">
            Junte-se a milhares de restaurantes que já estão usando o Pediu para aceitar Pix.
          </p>
          <button className="bg-white text-[#7C3AED] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl text-lg">
            Começar Teste Grátis
          </button>
        </div>
      </section>
    </div>
  );
} 