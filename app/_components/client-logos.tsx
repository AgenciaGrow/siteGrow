import Image from "next/image";

export default function ClientLogos() {
    const logos = [
      { name: "Metro", logo: "/placeholder.svg?height=40&width=100" },
      { name: "Martins", logo: "/placeholder.svg?height=40&width=100" },
      { name: "Reale", logo: "/placeholder.svg?height=40&width=100" },
      { name: "Group", logo: "/placeholder.svg?height=40&width=100" },
      { name: "Acon", logo: "/placeholder.svg?height=40&width=100" },
      { name: "Boomberg", logo: "/placeholder.svg?height=40&width=100" },
      { name: "Sun Center", logo: "/placeholder.svg?height=40&width=100" },
      { name: "Hocks", logo: "/placeholder.svg?height=40&width=100" },
      { name: "Jet", logo: "/placeholder.svg?height=40&width=100" },
      { name: "Coinbase", logo: "/placeholder.svg?height=40&width=100" },
    ]
  
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={logo.logo || "/mkt.webp"}
              alt={`${logo.name} logo`}
              width={100} height={100}
              className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    )
  }
  
  