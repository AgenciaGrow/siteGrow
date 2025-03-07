import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Grow | Media",
  description: "Agência de marketing e estratégia.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
