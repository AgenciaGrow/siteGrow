import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grow | Media",
  description: "Agência de marketing e estratégia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#000000" />

        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Agência Grow Media",
                  description:
                    "A Grow Media é uma agência de marketing digital especializada em estratégias para negócios, gestão de redes sociais, tráfego pago e criação de conteúdo de alta performance. Nosso objetivo é gerar resultados reais para empresas através de campanhas personalizadas e gestão estratégica.",
                  url: "https://www.agenciagrowmedia.com.br/",
                  logo: "https://www.agenciagrowmedia.com.br/logo.png",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Assis",
                    addressRegion: "SP",
                    addressCountry: "BR",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    email: "growmediaassis@gmail.com",
                    areaServed: "BR",
                    availableLanguage: ["Portuguese", "English"],
                  },
                  sameAs: ["https://www.instagram.com/growmediamkt/"],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Serviços de Marketing Digital",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Gestão de Redes Sociais",
                          serviceType:
                            "Criação e gerenciamento de conteúdo para redes sociais, aumentando o engajamento e alcance da sua marca.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Tráfego Pago",
                          serviceType:
                            "Criação e gestão de campanhas no Google Ads, Facebook Ads e Instagram Ads para maximizar conversões.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Marketing de Conteúdo",
                          serviceType:
                            "Produção de conteúdos otimizados para blogs, redes sociais e e-mail marketing, melhorando a autoridade da marca.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Consultoria Estratégica",
                          serviceType:
                            "Análise de mercado e desenvolvimento de estratégias personalizadas para alavancar seu negócio.",
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <Analytics />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
