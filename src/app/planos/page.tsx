// import { Check } from "@phosphor-icons/react";
import Link from "next/link";

export default function PlanosPage() {
  const plans = [
    {
      name: "Básico",
      price: "R$ 149",
      description: "Ideal para restaurantes iniciando no delivery",
      features: [
        "Cardápio Digital",
        "Pedidos via WhatsApp",
        "Gestão de Pedidos",
        "Relatórios Básicos",
        "Suporte por Email"
      ]
    },
    {
      name: "Profissional",
      price: "R$ 299",
      description: "Para restaurantes que querem crescer",
      features: [
        "Tudo do Básico",
        "Integração Instagram",
        "Sistema de Cupons",
        "Pesquisas de Satisfação",
        "Relatórios Avançados",
        "Suporte Prioritário",
        "Múltiplos Atendentes"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Consulte",
      description: "Para redes e restaurantes de alto volume",
      features: [
        "Tudo do Profissional",
        "API Personalizada",
        "Integrações Customizadas",
        "Suporte 24/7",
        "Gerente de Conta Dedicado",
        "SLA Garantido",
        "Treinamento da Equipe"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#FFE41F] to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-black tracking-tight font-display">
            Planos e Preços
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-black/80 font-medium font-body">
            Escolha o plano ideal para o seu restaurante e comece a transformar seu negócio hoje
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 ${
                  plan.highlighted
                    ? "bg-black text-white transform scale-105 shadow-2xl"
                    : "bg-white text-black border border-gray-200 shadow-xl"
                }`}
              >
                <h3 className="text-2xl font-bold mb-4 font-display">{plan.name}</h3>
                <div className="mb-6">
                  <div className="text-4xl font-black mb-2 font-display">{plan.price}</div>
                  <div className={`text-sm ${plan.highlighted ? "text-gray-400" : "text-gray-600"} font-body`}>
                    por mês
                  </div>
                </div>
                <p className={`mb-8 ${plan.highlighted ? "text-gray-400" : "text-gray-600"} font-body`}>
                  {plan.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 font-body">
                      {/* <Check weight="bold" className={`w-5 h-5 ${plan.highlighted ? "text-[#FFE41F]" : "text-green-500"}`} /> */}
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contato"
                  className={`block text-center py-4 px-6 rounded-full font-semibold transition-all transform hover:scale-105 font-display ${
                    plan.highlighted
                      ? "bg-[#FFE41F] text-black hover:bg-[#FFE41F]/90"
                      : "bg-black text-white hover:bg-gray-900"
                  }`}
                >
                  Começar Agora
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16 tracking-tight font-display">
            Comparação Detalhada
          </h2>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-6 text-left font-display">Recurso</th>
                  <th className="py-4 px-6 text-center font-display">Básico</th>
                  <th className="py-4 px-6 text-center font-display">Profissional</th>
                  <th className="py-4 px-6 text-center font-display">Enterprise</th>
                </tr>
              </thead>
              <tbody className="font-body">
                {[
                  { feature: "Pedidos WhatsApp", basic: true, pro: true, enterprise: true },
                  { feature: "Cardápio Digital", basic: true, pro: true, enterprise: true },
                  { feature: "Gestão de Pedidos", basic: true, pro: true, enterprise: true },
                  { feature: "Integração Instagram", basic: false, pro: true, enterprise: true },
                  { feature: "Sistema de Cupons", basic: false, pro: true, enterprise: true },
                  { feature: "Relatórios Avançados", basic: false, pro: true, enterprise: true },
                  { feature: "API Personalizada", basic: false, pro: false, enterprise: true },
                  { feature: "Suporte 24/7", basic: false, pro: false, enterprise: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-4 px-6">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {/* {row.basic ? <Check weight="bold" className="w-5 h-5 text-green-500 mx-auto" /> : "-"} */}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {/* {row.pro ? <Check weight="bold" className="w-5 h-5 text-green-500 mx-auto" /> : "-"} */}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {/* {row.enterprise ? <Check weight="bold" className="w-5 h-5 text-green-500 mx-auto" /> : "-"} */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FFE41F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8 tracking-tight text-black font-display">
            Ainda com Dúvidas?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-black/80 font-medium font-body">
            Fale com nossa equipe e encontre o plano perfeito para o seu restaurante
          </p>
          <Link
            href="/contato"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-xl text-lg font-display"
          >
            Falar com Consultor
          </Link>
        </div>
      </section>
    </main>
  );
} 