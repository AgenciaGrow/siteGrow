import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import ParallaxSection from "@/app/_components/parallax-section";
import ContactForm from "@/app/_components/contact-form";
import ClientLogos from "@/app/_components/client-logos";
import BlogCard from "@/app/_components/blog-cards";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <>
      <main className="relative">
        {/* menu fixo */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1017] pl-44 pr-44 py-4">
          <div className="container mx-auto flex items-center justify-between px-4">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo-grow.png"
                  alt="logo grow media"
                  width={100}
                  height={50}
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-20 text-[12px]">
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
                href="#contato"
                className="text-white hover:text-yellow-300"
              >
                Contato
              </Link>
              <Link href="#blog" className="text-white hover:text-yellow-300">
                Blog
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
              src=""
              autoPlay
              loop
              muted
              playsInline
              className="brightness-50 w-full h-[610px] rounded-lg object-cover"
            />
          </div>
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              SUA EMPRESA MERECE{" "}
              <span className="relative inline-block">
                BRILHAR.
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FFCC00]"></span>
              </span>
            </h1>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <ChevronDown size={32} className="text-[#FFCC00]" />
          </div>
        </section>

        {/* sessão Sobre */}
        <ParallaxSection id="sobre" className="bg-[#FFCC00]">
          <div className="container mx-auto px-4 pl-44 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-semibold mb-2 text-gray-800">
                  Sobre <br />
                  <div className="flex gap-1">
                    <span className="text-4xl">a</span>
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
                <Link
                  href="#estrategia"
                  className="inline-flex items-center mt-8 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Leia mais sobre nós{" "}
                  <ChevronRight className="ml-2" size={16} />
                </Link>
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
        <ParallaxSection id="estrategia" className="bg-[#0a1017] text-white">
          <div className="container mx-auto px-4 pl-44 pr-44 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Sua marca mais <br />
                  <span className="flex items-center">
                    <ChevronRight className="text-yellow-[#FFCC00] mr-2" />
                    conhecida,
                  </span>
                  <span className="flex items-center">
                    desejada e <br />
                  </span>
                  <span className="flex items-center">recomendada.</span>
                </h2>
                <p className="my-6 text-[14px]">
                  A Grow pode ser hoje a sua agência digital, ou você pode
                  continuar procurando. O que podemos garantir é que nosso
                  trabalho é focado em resultados e crescimento real para o seu
                  negócio.
                </p>
                <p className="my-6 text-[16px]">
                  No digital e no off-line, trabalhamos como parceiros
                  estratégicos da sua marca para construir as melhores soluções
                  e atingir os objetivos de negócios que você tem para a sua
                  empresa.
                </p>
                <p className="my-6 text-sm">
                  *Baseado em dados e gráficos de nossos principais clientes.
                </p>
                <Link
                  href="#contato"
                  className="inline-flex hover:outline items-center bg-[#FFCC00] text-gray-900 px-6 py-3 rounded-full hover:bg-[#FFCC00] transition-colors"
                >
                  Vamos conversar <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="h-24 w-24 bg-[#FFCC00] rounded-lg ml-auto"></div>
                <div className="h-24 w-24 bg-[#FFCC00] rounded-lg mt-12"></div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* sessão clientes */}
        <ParallaxSection className="bg-[#0a1017] text-white border-t border-gray-800">
          <div className="container mx-auto pl-44 pr-44 px-4 py-16">
            <h2 className="text-3xl font-bold mb-12">
              Marcas que <br />
              <span className="flex items-center">
                <ChevronRight className="text-[#FFCC00] mr-2" />
                confiam no
              </span>
              <span>nosso trabalho</span>
            </h2>
            <ClientLogos />
          </div>
        </ParallaxSection>

        {/* sessão blog */}
        <ParallaxSection id="blog" className="bg-gray-100">
          <div className="container mx-auto px-4 py-16">
            <h2 className="flex items-center text-2xl font-bold mb-12">
              <ArrowRight className="text-yellow-[#FFCC00] mr-2" />
              blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <div className="bg-yellow-[#FFCC00] p-8 rounded-lg h-full flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">
                    Conteúdos <br />
                    especiais <br />
                    para sua <br />
                    empresa
                  </h3>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2">
                <BlogCard
                  title="O que é Inbound Marketing e como ele pode ajudar sua empresa"
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* sessaõ contatos */}
        <section id="contato" className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#FFCC00] p-8 md:p-16">
              <h2 className="text-3xl font-bold mb-8">
                Vamos <br />
                conversar <br />
                sobre a sua <br />
                marca?
              </h2>
              <Link
                href="mailto:contato@shine.com.br"
                className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors mb-8"
              >
                <Mail size={20} />
              </Link>
              <p className="text-sm max-w-xs mb-12">
                Preencha o formulário ao lado para que nossa equipe entre em
                contato com você e conheça mais sobre a sua empresa.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-800 hover:text-gray-900">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-gray-800 hover:text-gray-900">
                  <Linkedin size={20} />
                </Link>
                <Link href="#" className="text-gray-800 hover:text-gray-900">
                  <Facebook size={20} />
                </Link>
              </div>
            </div>
            <div className="bg-[#0a1017] p-8 md:p-16">
              <ContactForm />
            </div>
          </div>
        </section>
        {/* Footer 
      <footer className="bg-[#0a1017] text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">E-mail:</p>
              <Link
                href="mailto:contato@shine.com.br"
                className="text-sm hover:text-[#FFCC00]"
              >
                contato@shine.com.br
              </Link>
            </div>
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">Telefone:</p>
              <Link
                href="tel:+554899990000"
                className="text-sm hover:text-[#FFCC00]"
              >
                +55 48 9999 0000
              </Link>
            </div>
            <div className="mb-8 md:mb-0">
              <p className="text-sm text-gray-400">© 2025, Agência Shine</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-[#FFCC00] font-bold text-xl mb-4 md:mb-0">
              Shine
            </div>
            <div className="text-xs text-gray-400">
              Rua José Augusto, XX - Centro São Francisco - Bairro Progresso/SC
            </div>
          </div>
        </div>
      </footer> */}
      </main>
      <Footer />
    </>
  );
}
