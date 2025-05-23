import Image from "next/image";
import Link from "next/link";

export default function About() {
  const stats = [
    { number: "2000+", label: "Restaurantes" },
    { number: "1M+", label: "Pedidos Processados" },
    { number: "98%", label: "Satisfação" },
    { number: "24/7", label: "Suporte" }
  ];

  const values = [
    {
      title: "Inovação",
      description: "Buscamos constantemente novas formas de melhorar a experiência dos restaurantes e seus clientes."
    },
    {
      title: "Excelência",
      description: "Comprometidos com a qualidade em cada aspecto do nosso produto e serviço."
    },
    {
      title: "Parceria",
      description: "Crescemos junto com nossos clientes, celebrando cada conquista como nossa."
    },
    {
      title: "Simplicidade",
      description: "Tornamos a tecnologia acessível e fácil de usar para todos os restaurantes."
    }
  ];

  const team = [
    {
      name: "João Silva",
      role: "CEO & Fundador",
      image: "/images/team/joao.jpg"
    },
    {
      name: "Maria Santos",
      role: "CTO",
      image: "/images/team/maria.jpg"
    },
    {
      name: "Pedro Oliveira",
      role: "Head de Produto",
      image: "/images/team/pedro.jpg"
    },
    {
      name: "Ana Costa",
      role: "Head de Customer Success",
      image: "/images/team/ana.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#FFE41F] to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-black tracking-tight font-display">
            Nossa História
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-black/80 font-medium font-body">
            Transformando o setor de restaurantes com tecnologia e inovação desde 2020
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-2 text-black font-display">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-8 tracking-tight font-display">
              Nossa Jornada
            </h2>
            <div className="prose prose-lg max-w-none font-body">
              <p>
                O Pediu nasceu da necessidade de simplificar a gestão de restaurantes em um momento crucial. 
                Em 2020, quando o delivery se tornou essencial, percebemos que os restaurantes precisavam 
                de uma solução que fosse além do básico.
              </p>
              <p>
                Nossa missão é democratizar o acesso à tecnologia para restaurantes de todos os tamanhos, 
                oferecendo ferramentas poderosas que antes só estavam disponíveis para grandes redes.
              </p>
              <p>
                Hoje, somos orgulhosos em fazer parte da transformação digital de mais de 2.000 restaurantes 
                em todo o Brasil, processando milhões de pedidos e ajudando nossos parceiros a crescerem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16 tracking-tight font-display">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-4 text-black font-display">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed font-body">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16 tracking-tight font-display">
            Nossa Equipe
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">{member.name}</h3>
                <p className="text-gray-600 font-body">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FFE41F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8 tracking-tight text-black font-display">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-black/80 font-medium font-body">
            Junte-se aos milhares de restaurantes que já transformaram seus negócios com o Pediu
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              href="/contato"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-xl text-lg font-display"
            >
              Fale Conosco
            </Link>
            <Link
              href="/planos"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl text-lg font-display"
            >
              Ver Planos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 