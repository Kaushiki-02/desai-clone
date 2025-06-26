import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  [
    {
      number: '121,075+',
      label: 'Adults Benefited Through Health Camps & Seminars',
      icon: require('../assets/icons/icon7.png'),
    },
    {
      number: '16,000+',
      label: 'Students Have Been Taught How to Use a Computer',
      icon: require('../assets/icons/icon8.png'),
    },
    {
      number: '34,000+',
      label: 'Women Have Received Vocational Training',
      icon: require('../assets/icons/icon9.png'),
    },
    {
      number: '10,700+',
      label: 'Total Students at Lok Vidyalaya School From 2013–2024',
      icon: require('../assets/icons/icon10.png'),
    },
    {
      number: '23,000+',
      label: 'Benefitted From Gynec Health Camps',
      icon: require('../assets/icons/icon11.png'),
    },
    {
      number: '11,000+',
      label: 'Women Have Been Taught to Sew',
      icon: require('../assets/icons/icon12.png'),
    },
  ],
  [
    {
      number: '10 MILLION+',
      label: 'People Have Been Directly Impacted By Our Programs',
      icon: require('../assets/icons/icon1.png'),
    },
    {
      number: '3,400+',
      label: 'Rural Communities Reached',
      icon: require('../assets/icons/icon2.png'),
    },
    {
      number: '2.7 MILLION+',
      label: 'Reached From Help Desk',
      icon: require('../assets/icons/icon3.png'),
    },
    {
      number: '9.9 MILLION+',
      label: 'Sanitary Napkins Produced',
      icon: require('../assets/icons/icon4.png'),
    },
    {
      number: '75,000+',
      label: 'Children Have Attended Our Health Camps',
      icon: require('../assets/icons/icon5.png'),
    },
    {
      number: '333,000+',
      label: 'Children Reached With Primary Health & Hygiene',
      icon: require('../assets/icons/icon6.png'),
    },
  ],
];

export default function ImpactCarousel() {
  return (
    <section className="py-12 bg-white text-center">
      <h3 className="text-lg font-bold mb-2" style={{ color: '#CF306E' }}>
        Our Impact
      </h3>
      <h2 className="text-2xl font-bold mb-8 text-gray-900">
        CREATING LASTING CHANGE
      </h2>

      <div className="px-4 max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {slides.map((group, idx) => (
            <SwiperSlide key={idx}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {group.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white shadow rounded border-t-4"
                    style={{
                      borderColor: '#CF306E',
                      padding: '16px',
                    }}
                  >
                    <img
                      src={item.icon}
                      alt="icon"
                      className="w-16 h-16 mx-auto mb-3"
                    />
                    <div
                      className="text-lg font-bold mb-1"
                      style={{ color: '#CF306E' }}
                    >
                      {item.number}
                    </div>
                    <p className="text-sm text-gray-700 leading-snug px-2">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style>{`
  .swiper-button-next, .swiper-button-prev {
    width: 48px;
    height: 48px;
    background-color: #CF306E;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 45%;
    transform: translateY(-50%);
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    border: solid white;
    border-width: 0 3px 3px 0;
    padding: 3px;
  }

  .swiper-button-prev::after {
    transform: rotate(135deg);
  }

  .swiper-button-next::after {
    transform: rotate(-45deg);
  }

  .swiper-pagination-bullet {
    background-color: #eee;
  }

  .swiper-pagination-bullet-active {
    background-color: #CF306E !important;
  }
`}</style>


      </div>
   
    </section>
  );
}
