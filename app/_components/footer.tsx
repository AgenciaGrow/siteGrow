"use-client";

import { Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0a1017] text-white py-12 px-6 z-50">
      <div className="max-w-6xl mx-auto">
        {/* Top section with logo and navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo section */}
          <div>
            <Image
              src="/logo-grow.png"
              alt="logo agencia grow"
              width={200}
              height={100}
            />
          </div>

          {/* Links section */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#clientes"
                  className="hover:text-gray-300 transition-colors"
                >
                  Clientes
                </Link>
              </li>
              <li>
                <Link
                  href="#nosso-time"
                  className="hover:text-gray-300 transition-colors"
                >
                  Nosso Time
                </Link>
              </li>
            </ul>
          </div>

          {/* More links section */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="hover:text-gray-300 transition-colors"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="hover:text-gray-300 transition-colors"
                >
                  SOBRE
                </Link>
              </li>
              <li>
                <Link
                  href="#estrategia"
                  className="hover:text-gray-300 transition-colors"
                >
                  ESTRATÉGIAS
                </Link>
              </li>
            </ul>
          </div>

          {/* Services links section */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#serviços"
                  className="hover:text-gray-300 transition-colors"
                >
                  SERVIÇOS
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="hover:text-gray-300 transition-colors"
                >
                  CONTATO
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisão do footer */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Redes Sociais e Copyright */}
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <Link
              href="https://www.instagram.com/growmediamkt/"
              target='_blank'
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Instagram size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Youtube size={16} />
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            ©Copyright. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;