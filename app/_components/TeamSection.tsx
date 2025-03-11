import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Thiago Oliveira',
      role: 'Diretor Executivo',
      image: '/images/joao.jpg',
    },
    {
      id: 2,
      name: 'Ritiely Camolezi',
      role: 'Gerente de processos',
      image: '/images/maria.jpg',
    },
    {
      id: 3,
      name: 'Thiago Henrique',
      role: 'Designer',
      image: '/images/carlos.jpg',
    },
    {
      id: 4,
      name: 'Rebeca Venâncio',
      role: 'Designer',
      image: '/images/ana.jpg',
    },
    {
      id: 5,
      name: 'Matheus Skavinski',
      role: 'Copywrite',
      image: '/images/ana.jpg',
    },
    {
      id: 6,
      name: 'Mikeias Cristian',
      role: 'Desenvolvedor',
      image: '/images/ana.jpg',
    },
  ];

  return (
    <section className="py-12 md:mr-52">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="w-full"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;