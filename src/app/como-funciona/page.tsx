import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      title: "Cadastro Simples",
      description: "Crie sua conta em menos de 5 minutos com nosso processo simplificado de cadastro. Você só precisa fornecer informações básicas do seu restaurante.",
      icon: "📝"
    },
    {
      title: "Configuração do Cardápio",
      description: "Importe seu cardápio existente ou crie um novo usando nossa interface intuitiva. Organize categorias, preços e opcionais facilmente.",
      icon: "🍽️"
    },
    {
      title: "Integração de Sistemas",
      description: "Conecte o Pediu com suas ferramentas existentes como WhatsApp, Instagram e sistema de PDV. Nossa equipe oferece suporte completo nesta etapa.",
      icon: "🔄"
    },
    {
      title: "Treinamento da IA",
      description: "Nossa IA aprende com o perfil do seu restaurante para oferecer atendimento personalizado. O sistema se adapta ao seu modo de trabalho.",
      icon: "🤖"
    },
    {
      title: "Testes e Ajustes",
      description: "Período de testes para garantir que tudo funcione perfeitamente. Faça ajustes finos nas configurações com apoio da nossa equipe.",
      icon: "🎯"
    },
    {
      title: "Lançamento",
      description: "Seu restaurante está pronto para começar a usar todos os recursos do Pediu. Acompanhe os resultados em tempo real pelo dashboard.",
      icon: "🚀"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#FFE41F] to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-black tracking-tight font-display">
            Como o Pediu Funciona
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-black/80 font-medium font-body">
            Descubra como transformar seu restaurante em poucos passos com nossa plataforma de gestão inteligente
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-black font-display">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed font-body">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16 tracking-tight font-display">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "Quanto tempo leva para implementar o Pediu?",
                answer: "O processo completo de implementação geralmente leva de 1 a 3 dias, dependendo da complexidade do seu cardápio e integrações necessárias."
              },
              {
                question: "Preciso ter conhecimento técnico?",
                answer: "Não! Nossa plataforma foi desenvolvida para ser intuitiva e fácil de usar. Além disso, oferecemos suporte completo durante todo o processo."
              },
              {
                question: "Posso integrar com meu sistema atual?",
                answer: "Sim! O Pediu oferece integrações com os principais sistemas de PDV e plataformas de delivery do mercado."
              },
              {
                question: "Como funciona o suporte?",
                answer: "Oferecemos suporte 7 dias por semana via chat, email e WhatsApp. Nossa equipe está sempre pronta para ajudar com qualquer questão."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-black font-display">{faq.question}</h3>
                <p className="text-gray-600 font-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FFE41F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8 tracking-tight text-black font-display">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-black/80 font-medium font-body">
            Agende uma demonstração gratuita e veja como o Pediu pode transformar seu restaurante
          </p>
          <div className="flex gap-6 justify-center">
            <Link href="/contato" className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-xl text-lg font-display">
              Agendar Demo
            </Link>
            <Link href="/planos" className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl text-lg font-display">
              Ver Planos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 