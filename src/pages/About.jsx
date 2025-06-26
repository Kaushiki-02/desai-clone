import React from 'react';
import aboutHero from '../assets/about-hero.png'; // rename the uploaded image accordingly

export default function About() {
  return (
    <section className="pt-16 bg-white">
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src={aboutHero}
          alt="About Desai Foundation"
          className="w-full object-cover"
        />
      </div>

      {/* Embedded YouTube Video */}
      <div className="flex justify-center py-10 px-4 bg-white">
        <div className="w-full max-w-3xl aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/SX6ArlzBi-M"
            title="Desai Foundation About Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
