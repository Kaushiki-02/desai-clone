import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ben1 from '../assets/stories/ben1.png';
import ben2 from '../assets/stories/ben2.png';
import ben3 from '../assets/stories/ben3.png';
import ben4 from '../assets/stories/ben4.png';
import ben5 from '../assets/stories/ben5.png';
import ben6 from '../assets/stories/ben6.png';
import ben7 from '../assets/stories/ben7.png';
import ben8 from '../assets/stories/ben8.png';
import ben9 from '../assets/stories/ben9.png';
import ben10 from '../assets/stories/ben10.png';
import ben11 from '../assets/stories/ben11.png';

const slides = [ben1, ben2, ben3, ben4, ben5, ben6, ben7, ben8, ben9, ben10, ben11];

export default function Stories() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-gray-50 py-12">
      <div className="text-center mb-8">
        <h3 className="text-dfPink font-bold text-lg">Beneficiary Stories</h3>
        <h2 className="text-2xl font-bold text-gray-800 mt-2">STORIES FROM THE GROUND</h2>
      </div>

      <div className="relative flex items-center justify-center px-4 md:px-16 max-w-4xl mx-auto">
        {/* Prev Arrow */}
        <div
          ref={prevRef}
          className="swiper-button-prev w-10 h-10 bg-[#CF306E] text-white rounded-full flex items-center justify-center cursor-pointer z-10 text-xl"
        >
        </div>

        {/* Swiper Container */}
        <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  slidesPerView={1}
  loop
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  className="w-full px-6"
>

          {slides.map((img, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <img
                src={img}
                alt={`beneficiary-${idx}`}
                className="w-[300px] h-auto rounded-md shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Arrow */}
        <div
          ref={nextRef}
          className="swiper-button-next w-10 h-10 bg-[#CF306E] text-white rounded-full flex items-center justify-center cursor-pointer z-10 text-xl"
        >
    
        </div>
      </div>
    </section>
  );
}
