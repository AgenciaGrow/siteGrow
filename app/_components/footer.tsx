import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Rss, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a1017] relative text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top section with logo and navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pl-24 ">
          {/* Logo section */}
          <div>
            <Image src="/logo-grow.png" alt="logo agencia grow" width={450} height={150}/>
          </div>

          {/* Navigation columns */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  WEEKLY THEMES
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  PRE-SALE FAQS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  SUBMIT A TICKET
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  THEME TWEAK
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-0">
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  SHOWCASE
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  WIDGETKIT
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  SUPPORT
                </Link>
              </li>
            </ul>

            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  AFFILIATES
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  RESOURCES
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Social icons and copyright */}
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Facebook size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Twitter size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Rss size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Globe size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              
            </Link>
          </div>
          <div className="text-sm text-gray-400">©Copyright | 2025</div>
        </div>
      </div>
    </footer>
  )
}

