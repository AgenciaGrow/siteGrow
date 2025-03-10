"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const ClientLogos = () => {
  const companies = [
    { id: 1, logo: "/images/company1.png", alt: "Logo da Empresa 1" },
    { id: 2, logo: "/images/company2.png", alt: "Logo da Empresa 2" },
    { id: 3, logo: "/images/company3.png", alt: "Logo da Empresa 3" },
    { id: 4, logo: "/images/company4.png", alt: "Logo da Empresa 4" },
    { id: 5, logo: "/images/company5.png", alt: "Logo da Empresa 5" },
    { id: 6, logo: "/images/company6.png", alt: "Logo da Empresa 6" },
  ];

  return (
    <section className="py-12 bg-[#EAE9E8]">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 0, // Remove qualquer pausa entre os slides
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // Não pausa ao passar o mouse
          }}
          loop={true} // Loop infinito
          speed={2000} // Transição mais suave e contínua
          loopAdditionalSlides={10} // Garante que sempre haja slides adicionais durante o loop
          slidesPerGroup={1} // Garante que cada slide se mova individualmente
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          className="w-full"
        >
          {companies.map((company) => (
            <SwiperSlide key={company.id}>
              <div className="flex items-center justify-center h-24 bg-white rounded-lg shadow-md p-4">
                <Image
                  src={company.logo}
                  alt={company.alt}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientLogos;
