import React from 'react';
import focus1 from '../assets/focus1.png';
import focus2 from '../assets/focus2.png';
import focus3 from '../assets/focus3.png';
import focus4 from '../assets/focus4.png';

export default function OurFocus() {
  return (
    <section className="bg-white">
       {/* === Awards Section === */}
<div className="mt-16 bg-gray-100 py-1">
  <div className="max-w-2xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
    
    {/* Left Text */}
    <div className="text-center md:text-left md:w-1/2 mb-6 md:mb-0">
      <h3 className="text-dfPink font-bold text-lg mb-2">
        Recent Awards
      </h3>
      <p className="text-base md:text-sm font-bold text-gray-800 leading-snug">
        AWARDED THE “TOP 20 MOST TRUSTED NGO’S” BY <br />
        THE INDIAN CSR AWARDS
      </p>
    </div>

    {/* Right Logo */}
    <div className="md:w-1/3 w-40">
      <img
        src={require('../assets/csr-award-logo.png')}
        alt="CSR Award Logo"
        className="w-full object-contain"
      />
    </div>
  </div>
</div>

      {/* Top Focus Title */}
      <div className="text-center py-8">
        <h3 className="text-dfPink font-bold text-lg mb-2">Our Focus</h3>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          BUILDING RESILIENT COMMUNITIES AND CULTIVATING DIGNITY
        </h2>
      </div>

      {/* Four Focus Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {[{
          img: focus1,
          label: 'HEALTH'
        }, {
          img: focus2,
          label: 'LIVELIHOOD'
        }, {
          img: focus3,
          label: 'MENSTRUAL EQUITY'
        }, {
          img: focus4,
          label: 'WOMEN & CHILDREN'
        }].map((item, index) => (
<div
  key={index}
  className="relative group overflow-hidden shadow-md"
>
  {/* Image with zoom on hover */}
  <div className="relative w-full h-64 overflow-hidden">
    <img
      src={item.img}
      alt={item.label}
      className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
    />
    
    {/* Pink overlay on hover */}
    <div className="absolute inset-0 bg-dfPink opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
  </div>

  {/* Button-like Label that slides up on hover */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full px-4">
    <span className="block bg-dfPink text-white font-bold text-xs text-center px-4 py-2 rounded shadow-lg max-w-[90%] mx-auto transition-all duration-700 transform group-hover:-translate-y-2">
      {item.label}
    </span>
  </div>
</div>

        ))}
      </div>

      {/* Our Pledge Bar */}
      <div className="bg-pink-300 text-center py-8 px-4">
        <h3 className="text-lg font-bold text-[#711743] mb-3">OUR PLEDGE</h3>
        <p className="max-w-4xl mx-auto text-[#711743] font-semibold leading-relaxed text-sm">
          Every dollar raised goes directly to programs that change lives for women and girls in rural India. Our staff and infrastructure are supported by the founding endowment from the Desai Family and its Board Members.
        </p>
      </div>
    </section>
  );
}
