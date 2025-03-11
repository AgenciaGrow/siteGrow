import Link from "next/link"
import Image from "next/image";
import { Youtube, Instagram  } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#101820] h-full text-white py-6 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-wrap items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo-grow.png"
                alt="logo grow media"
                width={200}
                height={100}
                className="md:ml-36"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-sm">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#sobre" className="text-gray-300 hover:text-white transition-colors">
                Sobre
              </Link>
              <Link href="#estrategias" className="text-gray-300 hover:text-white transition-colors">
                Estratégias
              </Link>
              <Link href="#serviços" className="text-gray-300 hover:text-white transition-colors">
                Serviços
              </Link>
              <Link href="#contato" className="text-gray-300 hover:text-white transition-colors">
                Contato
              </Link>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 md:mr-36">
              <Link href="https://www.instagram.com/growmediamkt/" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                <Instagram  size={18} />
              </Link> 
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={18} />
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700"></div>

          {/* Copyright */}
          <div className="text-xs text-gray-400 text-center">
            ©Grow Media {new Date().getFullYear()}, Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}

