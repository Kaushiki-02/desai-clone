import React from 'react';
import sponsorHeroImg from '../assets/sponsor.jpg'; 

export default function SponsorHero() {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">

        {/* Left Half-circle Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={sponsorHeroImg}
            alt="Sponsor a Hero Graphic"
            className="max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Text Block */}
        <div className="w-full md:w-1/2 text-center md:text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-1">SPONSOR A HERO</h3>
          <h2 className="text-dfPink text-xl font-bold mb-4">STRENGTHEN THE COMMUNITIES</h2>
          <p className="text-sm text-gray-800 leading-relaxed mb-4">
            Heroes for Humanity are community health workers and local leaders trained to deliver the Desai Foundation’s programs directly in their own villages. From menstrual health and hygiene to anemia and diabetes screenings, banking and savings education, vocational training, and more, our Heroes bring critical health and livelihood initiatives to rural communities across India.
          </p>
          <p className="text-sm text-gray-800 leading-relaxed mb-4">
            But their impact goes far beyond service. These Heroes are also empowering themselves economically through earning a livelihood, gaining valuable skills, and becoming respected changemakers in their communities.
          </p>
          <p className="text-sm text-gray-800 leading-relaxed mb-6">
            When you sponsor a Hero, you spark a powerful ripple effect, transforming one Hero’s life so they can transform thousands more.
          </p>
          <button className="bg-dfPink text-white font-bold px-6 py-2 rounded-full text-sm shadow-md hover:bg-desaiPink transition">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
}
