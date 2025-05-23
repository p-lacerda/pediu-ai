import Link from "next/link";

export default function Contact() {
  const contactInfo = [
    {
      icon: <p>A</p>,
      title: "Telefone",
      content: "(11) 3456-7890",
      href: "tel:+551134567890"
    },
    {
      icon: <p>A</p>,
      title: "WhatsApp",
      content: "(11) 98765-4321",
      href: "https://wa.me/5511987654321"
    },
    {
      icon: <p>A</p>,
      title: "E-mail",
      content: "contato@pediu.ai",
      href: "mailto:contato@pediu.ai"
    },
    {
      icon: <p>A</p>,
      title: "Endereço",
      content: "Av. Paulista, 1000 - São Paulo",
      href: "https://maps.google.com"
    }
  ];

  const faqItems = [
    {
      question: "Quanto tempo leva para começar a usar o Pediu?",
      answer: "O processo de implementação é rápido e pode ser concluído em 1-3 dias, dependendo da complexidade do seu negócio."
    },
    {
      question: "Vocês oferecem suporte técnico?",
      answer: "Sim! Oferecemos suporte técnico 7 dias por semana via chat, e-mail e WhatsApp."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, nossos planos são flexíveis e você pode cancelar quando quiser, sem multa ou burocracia."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#FFE41F] to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-black tracking-tight font-display">
            Fale Conosco
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-black/80 font-medium font-body">
            Estamos aqui para ajudar seu restaurante a crescer
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-black mb-8 tracking-tight font-display">
                Envie sua Mensagem
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700 font-body">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 font-body"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700 font-body">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 font-body"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium text-gray-700 font-body">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 font-body"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="sales">Vendas</option>
                    <option value="support">Suporte</option>
                    <option value="partnership">Parcerias</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700 font-body">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 font-body"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-xl text-lg font-display"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-black mb-8 tracking-tight font-display">
                Informações de Contato
              </h2>
              <div className="grid gap-8">
                {contactInfo.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                  >
                    {/* <item.icon className="w-8 h-8 text-purple-600" /> */}
                    <div>
                      <h3 className="font-bold text-lg mb-1 font-display">{item.title}</h3>
                      <p className="text-gray-600 font-body">{item.content}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
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
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 font-display">{item.question}</h3>
                <p className="text-gray-600 font-body">{item.answer}</p>
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
            Experimente o Pediu gratuitamente por 14 dias e transforme seu restaurante
          </p>
          <Link
            href="/planos"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-xl text-lg font-display"
          >
            Começar Teste Grátis
          </Link>
        </div>
      </section>
    </main>
  );
} 