import Image from "next/image";

export default function PortfolioGallery() {
  return (
    <div className="min-h-screen md:mr-52 text-white">

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Item 1 */}
          <div className="bg-neutral-200 p-4 transition-transform hover:scale-[1.02]">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="City skyline at night with bridge"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Item 2 */}
          <div className="bg-neutral-200 p-4 md:row-span-2 transition-transform hover:scale-[1.02]">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Red box mockup package design"
              width={600}
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* Item 3 */}
          <div className="bg-neutral-200 p-4 transition-transform hover:scale-[1.02]">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Modern furniture with decorative items"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Item 4 */}
          <div className="bg-neutral-200 p-4 transition-transform hover:scale-[1.02]">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Business card and coffee cup"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Item 5 */}
          <div className="bg-neutral-200 p-4 transition-transform hover:scale-[1.02]">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Desk with keyboard, notebook and coffee"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Item 6 */}
          <div className="bg-neutral-200 p-4 transition-transform hover:scale-[1.02]">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Desk with keyboard, notebook and coffee"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Item 7 */}
          <div className="bg-neutral-200 p-4 transition-transform hover:scale-[1.02]">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Desk with keyboard, notebook and coffee"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
          {/* Item 8 */}
          <div className="bg-neutral-200 p-4 transition-transform hover:scale-[1.02]">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Desk with keyboard, notebook and coffee"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
