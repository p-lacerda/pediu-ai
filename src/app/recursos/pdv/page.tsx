export default function PDVPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-black mb-6 text-gray-900 font-display">
              PDV Completo e Intuitivo
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-body">
              Gerencie suas vendas com um PDV moderno e fácil de usar. Controle estoque, emita notas fiscais e acompanhe seu negócio em tempo real.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Interface Intuitiva</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Interface moderna e fácil de usar, com atalhos personalizáveis e fluxo de trabalho otimizado para agilizar o atendimento.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Gestão de Pedidos</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Controle completo de pedidos, com status em tempo real, histórico detalhado e integração com delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Controle de Estoque</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Gestão automática de estoque, com alertas de níveis baixos e relatórios de movimentação de produtos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Gestão Financeira</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Controle de caixa, relatórios financeiros e integração com sistemas de pagamento e emissão de notas fiscais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#7C3AED]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8 text-white font-display">
            Pronto para modernizar seu PDV?
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto font-body">
            Junte-se a milhares de restaurantes que já estão usando o Pediu para gerenciar suas vendas de forma eficiente.
          </p>
          <button className="bg-white text-[#7C3AED] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl text-lg">
            Começar Teste Grátis
          </button>
        </div>
      </section>
    </div>
  );
} 