import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pediu - Transforme seu Restaurante com IA",
  description: "Pediu.aí ajuda restaurantes a otimizar operações e melhorar a experiência do cliente com automação inteligente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,500,600,700,1&display=swap"
          rel="stylesheet"
          precedence="default"
        />
      </head>
      <body suppressHydrationWarning={true} className="antialiased">
        {children}
      </body>
    </html>
  );
}
