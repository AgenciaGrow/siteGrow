import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface BlogCardProps {
  title: string
  image: string
}

export default function BlogCard({ title, image }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <Image src={image || "/mkt.webp"} width={100} height={100} alt={title} className="w-full h-48 object-cover"/>
        <div className="absolute top-4 left-4 bg-[#FFCC00] text-xs font-bold px-2 py-1">SHINE</div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <Link href="#" className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-[#FFCC00]">
          Leia mais <ArrowRight className="ml-2" size={14} />
        </Link>
      </div>
    </div>
  )
}

