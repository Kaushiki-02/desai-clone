import React from 'react';
import heroLogo from '../assets/desai_logo_white.png';
import indiaMap from '../assets/indiamap.gif';
import bgImage from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section className="relative w-full h-screen text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(207, 50, 111, 0.25), rgba(207, 50, 111, 0.45)), url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto h-full px-6">
        <div className="max-w-xl">
          <img src={heroLogo} alt="Desai Foundation" className="h-40 mb-12" />
          <h1 className="text-xl md:text-3xl font-semibold leading-snug tracking-wide">
            BUILDING RESILIENT COMMUNITIES <br /> AND CULTIVATING DIGNITY
          </h1>
        </div>
        <div className="hidden lg:block">
          <img
            src={indiaMap}
            alt="India Map"
            style={{
              width: '250px',
              height: '350px',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
