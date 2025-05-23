import Image from "next/image";

export default function Blog() {
  const featuredPosts = [
    {
      title: "Como Aumentar suas Vendas no Delivery em 30%",
      excerpt: "Descubra as estratégias comprovadas que ajudaram nossos parceiros a aumentar significativamente suas vendas no delivery.",
      image: "/images/blog/delivery-sales.jpg",
      category: "Vendas",
      readTime: "5 min",
      date: "22 Mar 2024"
    },
    {
      title: "Guia Completo de Marketing Digital para Restaurantes",
      excerpt: "Aprenda a criar uma presença digital forte e atrair mais clientes usando as principais ferramentas de marketing.",
      image: "/images/blog/digital-marketing.jpg",
      category: "Marketing",
      readTime: "8 min",
      date: "20 Mar 2024"
    },
    {
      title: "5 Tendências de Tecnologia para Restaurantes em 2024",
      excerpt: "Fique por dentro das principais inovações tecnológicas que estão transformando o setor de restaurantes.",
      image: "/images/blog/tech-trends.jpg",
      category: "Tecnologia",
      readTime: "6 min",
      date: "18 Mar 2024"
    }
  ];

  const recentPosts = [
    {
      title: "Como Melhorar a Experiência do Cliente com IA",
      category: "Atendimento",
      date: "15 Mar 2024"
    },
    {
      title: "Gestão Financeira: Dicas para Restaurantes",
      category: "Finanças",
      date: "12 Mar 2024"
    },
    {
      title: "Cardápio Digital: Por Que Implementar?",
      category: "Tecnologia",
      date: "10 Mar 2024"
    },
    {
      title: "Como Criar Promoções Efetivas",
      category: "Marketing",
      date: "8 Mar 2024"
    }
  ];

  const categories = [
    { name: "Tecnologia", count: 15 },
    { name: "Marketing", count: 12 },
    { name: "Vendas", count: 10 },
    { name: "Atendimento", count: 8 },
    { name: "Finanças", count: 6 },
    { name: "Gestão", count: 5 }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#FFE41F] to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-black tracking-tight font-display">
            Blog Pediu
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-black/80 font-medium font-body">
            Dicas, insights e novidades para o sucesso do seu restaurante
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-16 tracking-tight font-display">
            Destaques
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {featuredPosts.map((post, index) => (
              <article key={index} className="group">
                <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-purple-600 font-body">{post.category}</span>
                  <span className="text-sm text-gray-500 font-body">{post.readTime}</span>
                  <span className="text-sm text-gray-500 font-body">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors font-display">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-body">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts and Sidebar */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Recent Posts */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-black mb-12 tracking-tight font-display">
                Posts Recentes
              </h2>
              <div className="space-y-8">
                {recentPosts.map((post, index) => (
                  <article key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-purple-600 font-body">{post.category}</span>
                      <span className="text-sm text-gray-500 font-body">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold hover:text-purple-600 transition-colors font-display">
                      {post.title}
                    </h3>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 font-display">Categorias</h3>
                <ul className="space-y-4">
                  {categories.map((category, index) => (
                    <li key={index} className="flex items-center justify-between font-body">
                      <span className="text-gray-600 hover:text-purple-600 transition-colors">
                        {category.name}
                      </span>
                      <span className="text-gray-400">{category.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[#FFE41F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8 tracking-tight text-black font-display">
            Fique por Dentro
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-black/80 font-medium font-body">
            Receba as últimas novidades e dicas para o seu restaurante
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-6 py-4 rounded-full border-2 border-black focus:outline-none focus:ring-2 focus:ring-purple-600 font-body"
              />
              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-xl text-lg font-display"
              >
                Inscrever
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
} 