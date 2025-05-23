'use client';

import { memo } from 'react';

const features = [
  { text: "Automatize seus pedidos com IA", href: "#ia" },
  { text: "Integração com iFood, Uber Eats e Rappi", href: "#integrations" },
  { text: "Gestão inteligente de estoque", href: "#estoque" },
  { text: "Análise de dados em tempo real", href: "#analytics" },
  { text: "Cupons personalizados automáticos", href: "#cupons" },
  { text: "Sistema de fidelidade integrado", href: "#fidelidade" },
  { text: "PDV completo e intuitivo", href: "#pdv" },
  { text: "Relatórios detalhados de vendas", href: "#relatorios" },
  { text: "Suporte 24/7 especializado", href: "#suporte" },
  { text: "Pagamentos instantâneos com Pix", href: "#pix" }
];

const CarouselItem = memo(({ text, href }: { text: string; href: string }) => (
  <div className="flex items-center shrink-0">
    <a 
      href={href}
      className="inline-block px-8 text-lg font-medium text-black/80 hover:text-[#7C3AED] active:text-[#7C3AED] focus:text-[#7C3AED] transition-colors cursor-pointer"
    >
      {text}
    </a>
    <div className="w-2 h-2 bg-black transform rotate-45"></div>
  </div>
));

CarouselItem.displayName = 'CarouselItem';

export default function FeatureCarousel() {
  return (
    <div className="w-screen overflow-hidden bg-black/5 backdrop-blur-sm py-6 mt-12 group">
      <div className="flex animate-scroll">
        {[...features, ...features].map((feature, index) => (
          <CarouselItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
} 