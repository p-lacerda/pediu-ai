import Image from "next/image";
import NavDropdown from "./components/NavDropdown";
import WhatsAppWidget from "./components/WhatsAppWidget";
import FeatureCarousel from "./components/FeatureCarousel";
import MobileHeader from "./components/MobileHeader";
import Link from "next/link";

export default function Home() {
  const navItems = [
    {
      label: "Recursos",
      href: "#features",
      subItems: [
        { label: "Agendamento", href: "/recursos/agendamento" },
        { label: "Cupons", href: "/recursos/cupons" },
        { label: "Pesquisas", href: "/recursos/pesquisas" },
        { label: "Pix", href: "/recursos/pix" },
        { label: "Fidelidade", href: "/recursos/fidelidade" },
        { label: "PDV", href: "/recursos/pdv" },
        { label: "Relatórios", href: "/recursos/relatorios" },
      ],
    },
    {
      label: "Integrações",
      href: "#integrations",
      subItems: [
        { label: "WhatsApp", href: "#whatsapp" },
        { label: "Instagram", href: "#instagram" },
      ],
    },
    { label: "Como funciona", href: "/como-funciona" },
    { label: "Planos", href: "/planos" },
    { label: "Sobre nós", href: "/sobre" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <MobileHeader items={navItems} />

      {/* Desktop Header */}
      <header className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 bg-black/95 backdrop-blur-md rounded-2xl shadow-2xl z-50 w-[95%] max-w-7xl">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Pediu Logo"
              width={280}
              height={100}
              className="h-16 w-auto"
              priority
            />
          </div>
          <div className="flex items-center gap-4">
            <NavDropdown items={navItems} />
            <button className="bg-[#FFE41F] text-black px-6 py-2.5 rounded-full font-semibold hover:bg-[#FFE41F]/90 transition-all transform hover:scale-105 shadow-lg">
              Começar Agora
            </button>
          </div>
        </div>
      </header>

      <main className="h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-purple-300">
        {/* Hero Section with Parallax */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[#FFE41F] transform -skew-y-23"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-black tracking-tight leading-tight font-display">
              Transforme seu Restaurante com IA
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-black/90 font-medium leading-relaxed font-body">
              Pediu.aí ajuda restaurantes a otimizar operações e melhorar a experiência do cliente com automação inteligente
            </p>
            <div className="flex gap-6 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-xl text-lg font-display">
                Iniciar Teste Grátis
              </button>
              <button className="border-2 border-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all transform hover:scale-105 text-lg font-display">
                Ver Demonstração
              </button>
            </div>
          </div>
          <div className="w-full mt-12">
            <FeatureCarousel />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-black text-center mb-20 tracking-tight font-display">Recursos Poderosos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Agendamento de pedidos",
                  description: "Com o agendamento de entregas seu restaurante pode receber pedidos a qualquer hora do dia, de forma totalmente automatizada."
                },
                {
                  title: "Cupom de desconto",
                  description: "Promova o seu restaurante através de cupons promocionais versáteis, usando estratégias como cupons de primeira compra, parcerias e muito mais."
                },
                {
                  title: "Pesquisa de satisfação",
                  description: "Crie pesquisas de satisfação de acordo com necessidades do seu negócio, personalizando as perguntas e periodicidade do envio, e extraia as métricas relevantes para melhorar ainda mais o seu atendimento."
                },
                {
                  title: "Pix",
                  description: "Ofereça a opção de pagamento instantâneo mais prática do mercado, trazendo mais segurança e rapidez para o seu negócio."
                },
                {
                  title: "Plano de fidelidade",
                  description: "Crie metas e premiações para os seus clientes"
                },
                {
                  title: "Ponto de vendas (PDV)",
                  description: "Centralize seus pedidos locais e por telefone em uma única ferramenta, facilitando a rotina de trabalho do seu restaurante."
                },
                {
                  title: "Recuperador de vendas",
                  description: "Recupere clientes e receba mais pedidos no seu restaurante com a ajuda do Recuperador de Vendas."
                },
                {
                  title: "Relatórios",
                  description: "Veja o desempenho do seu restaurante através de dados concretos, garantindo tomadas de decisões assertivas que te levam sempre adiante!"
                },
                {
                  title: "Suporte",
                  description: "Nosso suporte está à disposição diariamente para te ajudar com qualquer problema ou dificuldade, oferecendo um atendimento sem igual, mesmo em fins de semana e feriados."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-4 text-black font-display">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-body">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp Widget */}
        <WhatsAppWidget />

        {/* How it Works Section */}
        <section id="how-it-works" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-black text-center mb-20 tracking-tight font-display">Como o Pediu Funciona</h2>
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { step: "1", title: "Cadastro", description: "Crie o perfil do seu restaurante" },
                { step: "2", title: "Configuração", description: "Configure seu cardápio e preferências" },
                { step: "3", title: "Integração", description: "Conecte com seus sistemas existentes" },
                { step: "4", title: "Lançamento", description: "Comece a usar os recursos de IA" }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-[#FFE41F] rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all shadow-lg">
                    <span className="text-3xl font-black font-display">{step.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black font-display">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-body">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#FFE41F]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-black mb-8 tracking-tight text-black font-display">Pronto para Transformar seu Restaurante?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-black/90 font-medium font-body">
              Junte-se a milhares de restaurantes que já estão usando o Pediu para otimizar suas operações
            </p>
            <button className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-xl text-lg font-display">
              Comece Agora
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12">
              <div>
                <Image
                  src="/logo.png"
                  alt="Pediu Logo"
                  width={280}
                  height={100}
                  className="h-16 w-auto mb-6"
                />
                <p className="text-gray-400 leading-relaxed font-body">Transformando restaurantes com IA</p>
                <div className="flex gap-4 mt-6">
                  <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/google-play-badge.png"
                      alt="Disponível no Google Play"
                      width={160}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </Link>
                  <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/app-store-badge.png"
                      alt="Baixar na App Store"
                      width={160}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-lg font-display">Produto</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Recursos</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Preços</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Casos de Sucesso</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-lg font-display">Empresa</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Sobre</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Carreiras</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-lg font-display">Contato</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Suporte</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Vendas</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Parceiros</a></li>
                </ul>
              </div>
            </div>


            <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
              <p className="font-body">&copy; 2024 Pediu. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
