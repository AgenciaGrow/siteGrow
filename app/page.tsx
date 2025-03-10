"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Mail,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";
import ParallaxSection from "@/app/_components/parallax-section";
import ContactForm from "@/app/_components/contact-form";
import ClientLogos from "@/app/_components/client-logos";
import Footer from "./_components/footer";
import { motion } from "framer-motion";
import TeamSection from "./_components/TeamSection";
import PortfolioGallery from "./_components/portfolio-gallery";

export default function Home() {
  return (
    <>
      <main className="relative">
        {/* menu fixo */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#101820] bg-opacity-95 pl-5 pr-5 py-4 sm:px-10 md:px-20">
          <div className="container mx-auto flex items-center justify-between px-4">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo-grow.png"
                  alt="logo grow media"
                  width={200}
                  height={50}
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-10 text-[12px]">
              <Link
                href="#home"
                className="text-yellow-400 hover:text-yellow-300"
              >
                Home
              </Link>
              <Link href="#sobre" className="text-white hover:text-yellow-300">
                Sobre
              </Link>
              <Link
                href="#estrategia"
                className="text-white hover:text-yellow-300"
              >
                Estratégia
              </Link>
              <Link
                href="#serviços"
                className="text-white hover:text-yellow-300"
              >
                Serviços
              </Link>
              <Link
                href="#contato"
                className="text-white hover:text-yellow-300"
              >
                Contato
              </Link>
            </div>
          </div>
        </nav>

        {/* sessão hero */}
        <section
          id="home"
          className="h-screen flex items-center justify-center relative overflow-hidden z-0"
        >
          <div className="inset-0 z-0 fixed">
            <video
              src="/universe3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="brightness-50 w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="container mx-auto px-4 z-10 text-center">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              SUA EMPRESA MERECE{" "}
              <span className="relative inline-block">
                BRILHAR.
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FFCC00]"></span>
              </span>
            </motion.h1>
          </div>
          <div className="absolute cursor-pointer bottom-10 left-1/2 transform-translate-x-1/2 text-white animate-bounce">
            <Link
              href="#sobre"
              className="justify-center flex items-center flex-col"
            >
              <ChevronDown size={32} className="text-[#FFCC00]" />
            </Link>
          </div>
        </section>

        {/* sessão Sobre */}
        <ParallaxSection id="sobre" className="bg-[#FFCd00]">
          <div className="container mx-auto px-4 sm:px-10 md:px-24 py-20 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-semibold mb-2 text-gray-800 flex flex-row items-center sm:flex-col sm:items-start">
                  Sobre
                  <div className="flex gap-1">
                    <span className="text-4xl ml-2">a</span>
                    <span className="text-4xl">Grow</span>
                  </div>
                </h2>
                <p className="my-6 text-gray-800 text-[16px]">
                  A Grow é uma agência de marketing digital focada em
                  resultados. Nosso objetivo é promover o crescimento real e
                  mensurável da sua empresa através de estratégias
                  personalizadas que impactam diretamente nos negócios e no
                  número de vendas para seu negócio.
                </p>
                <p className="my-6 text-gray-800 text-[16px]">
                  Acreditamos que ter um planejamento estratégico é parte
                  essencial do crescimento sólido profissional. Somos de
                  Florianópolis e atendemos todo o Brasil. Nosso time é
                  especializado para criar um plano de comunicação personalizado
                  para cada cliente e ter um relacionamento próximo com eles.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/mkt.webp"
                  alt="Marketing equipment"
                  width={450}
                  height={450}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* sessão estratégias */}
        <ParallaxSection id="estrategia" className="bg-[#101820] text-white">
          <div className="container mx-auto mt-10 px-4 sm:px-10 md:px-24 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Sua marca mais <br />
                  <span className="flex items-center">
                    <ChevronRight className="text-[#FFCd00] mr-2" />
                    conhecida,
                  </span>
                  <span className="flex items-center">
                    desejada e <br />
                  </span>
                  <span className="flex items-center">recomendada.</span>
                </h2>
                <p className="my-6 text-[14px] sm:text-[16px]">
                  A Grow pode ser hoje a sua agência digital, ou você pode
                  continuar procurando. O que podemos garantir é que nosso
                  trabalho é focado em resultados e crescimento real para o seu
                  negócio.
                </p>
                <p className="my-6 text-[14px] sm:text-[16px]">
                  No digital e no off-line, trabalhamos como parceiros
                  estratégicos da sua marca para construir as melhores soluções
                  e atingir os objetivos de negócios que você tem para a sua
                  empresa.
                </p>
                <p className="my-6 text-sm sm:text-[14px]">
                  *Baseado em dados e gráficos de nossos principais clientes.
                </p>
                <Link
                  href="#contato"
                  className="inline-flex hover:outline items-center bg-[#FFCd00] text-gray-900 px-6 py-3 rounded-full hover:bg-[#FFCC00] transition-colors"
                >
                  Vamos conversar <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="h-24 w-24 bg-[#FFCd00] rounded-lg ml-auto"></div>
                <Image
                  src="/growLogoIcon.png"
                  alt="logo icone grow"
                  width={250}
                  height={100}
                  className="absolute z-50 ml-20 sm:ml-0 left-1/2 transform -translate-x-1/2 sm:left-auto sm:transform-none"
                />
                <div className="h-24 w-24 bg-[#FFCd00] rounded-lg mt-24"></div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* sessão clientes */}
        <ParallaxSection id="clientes" className="bg-[#EAE9E8] text-white border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-10 md:px-24 py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#101820] mb-12">
              Empresas que <br />
              <span className="flex items-center">
                <ChevronRight className="text-[#FFCd00] mr-2" />
                confiam no
              </span>
              <span>nosso trabalho</span>
            </h2>
            <ClientLogos />
          </div>
        </ParallaxSection>

        {/* sessão serviços */}
        <ParallaxSection id="serviços" className="bg-[#101820] ">
          <div className="container mt-20 mx-auto px-4 sm:px-10 md:px-24 py-16">
            <h2 className="text-3xl text-white sm:text-4xl font-bold mb-2">
              Confira Nosso
              <br />
              <span className="flex items-center">
                <ChevronRight className="text-white mr-2" />
                Portifólio
              </span>
            </h2>
            <PortfolioGallery />
          </div>
        </ParallaxSection>

        {/* sessão Nosso Time */}
        <ParallaxSection id="nosso-time" className="bg-gray-100">
          <div className="container mx-auto px-4 sm:px-10 md:px-24 py-16">
            <h2 className="flex items-center text-2xl sm:text-3xl font-bold mb-12">
              <ArrowRight className="text-yellow-[#FFCC00] mr-2" />
              Nosso Time
            </h2>
            <TeamSection />
          </div>
        </ParallaxSection>

        {/* sessaõ contatos */}
        <section id="contato" className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#FFCC00] p-8 md:p-16">
              <h2 className="text-3xl sm:text-4xl font-bold mt-10 ml-6 mb-8">
                Vamos <br />
                conversar <br />
                sobre a sua <br />
                marca?
              </h2>
              <Link
                href="mailto:contato@shine.com.br"
                className="inline-flex items-center justify-center w-12 h-12 ml-6 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors mb-8"
              >
                <Mail size={20} />
              </Link>
              <p className="text-sm sm:text-base max-w-xs ml-6 mb-12">
                Preencha o formulário ao lado para que nossa equipe entre em
                contato com você e conheça mais sobre a sua empresa.
              </p>
              <div className="flex ml-6 space-x-4">
                <Link href="#" className="text-gray-800 hover:text-gray-900">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-gray-800 hover:text-gray-900">
                  <Youtube size={20} />
                </Link>
                <Link href="#" className="text-gray-800 hover:text-gray-900">
                  <Facebook size={20} />
                </Link>
              </div>
            </div>
            <div className="bg-[#101820] p-8 md:p-16">
              <ContactForm />
            </div>
          </div>
        </section>
        <ParallaxSection>
          <Footer />
        </ParallaxSection>
      </main>
    </>
  );
}
