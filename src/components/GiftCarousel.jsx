import React, { useState } from 'react';

const slides = [
  { image: '/assets/donation-impact/i1.jpg', amount: '₹1,800', description: 'Provides 5 women with a year’s supply of Asani Sanitary Napkins' },
  { image: '/assets/donation-impact/i2.jpg', amount: '₹4,500', description: 'Supports 1 woman for a 3 month Sewing Skills program' },
  { image: '/assets/donation-impact/i3.jpg', amount: '₹15,000', description: 'Provides health services for 15 women for a whole year' },
  { image: '/assets/donation-impact/i4.jpg', amount: '₹35,000', description: 'Supports 1 fun-filled summer camp in one state in India' },
  { image: '/assets/donation-impact/i5.jpg', amount: '₹40,000', description: 'Delivers vocational training to 6 rural women' },
  { image: '/assets/donation-impact/i6.jpg', amount: '₹50,000', description: 'Funds clean water solutions for one village' },
  { image: '/assets/donation-impact/i7.jpg', amount: '₹1,80,000', description: 'Helps 3 women become micro-entrepreneurs' },
  { image: '/assets/donation-impact/i8.jpg', amount: '₹3,00,000', description: 'Conducts hygiene awareness workshops for 100 girls' },
  { image: '/assets/donation-impact/i9.jpg', amount: '₹6,00,000', description: 'Sponsors community outreach campaigns in 3 villages' },
];

const GiftCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 4;
  const totalGroups = Math.ceil(slides.length / cardsPerView);

  const next = () => {
    if (currentIndex < totalGroups - 1) setCurrentIndex(currentIndex + 1);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="relative py-10 bg-white text-center">
      <h2 className="text-2xl font-bold mb-6">
        HOW YOUR GIFT CREATES IMPACT
      </h2>

      <div className="relative w-full overflow-hidden px-4">
        {/* Slide track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(slides.length / cardsPerView) * 100}%`,
            transform: `translateX(-${currentIndex * (100 / totalGroups)}%)`,
          }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="w-1/4 px-2 box-border">
              <div className="bg-lightPink rounded-lg overflow-hidden shadow h-full flex flex-col">
                <img src={slide.image} alt="" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{slide.amount}</h3>
                  <p className="text-sm">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#701b38] text-white w-10 h-10 rounded-full flex items-center justify-center"
          disabled={currentIndex === 0}
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#701b38] text-white w-10 h-10 rounded-full flex items-center justify-center"
          disabled={currentIndex === totalGroups - 1}
        >
          ❯
        </button>

        {/* Dots */}
        <div className="mt-4 flex justify-center">
          {Array.from({ length: totalGroups }).map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`mx-1 w-3 h-3 rounded-full cursor-pointer ${
                i === currentIndex ? 'bg-[#701b38]' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftCarousel;
