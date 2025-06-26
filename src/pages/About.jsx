import React from 'react';
import ImpactCarousel from '../components/Programs';
import Stories from '../components/Stories';
import Timeline from './timeline';
import { timelineData } from './timelineData';


const About = () => {
  return (
    <div className="m-0 p-0">
      {/* Banner Image */}
      <img
        src="/assets/about-hero.png"
        alt="About Us Banner"
        className="block w-full h-auto object-cover"
      />

      {/* Embedded YouTube Video */}
      <div className="flex justify-center my-10">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Yf_Gd88SUho?si=481wpBgQy8Qd42AV"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16 gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-pink-700 mb-6">Our Mission</h2>
          <p className="mb-4">
            The Desai Foundation is a nonprofit organization dedicated to empowering women
            and children through community programs and initiatives...
          </p>
          {/* ...more paragraphs */}
          <p className="text-gray-800 leading-relaxed mb-4">
            We are driven by a sense of purpose and guided by our core values: compassion,
            integrity, and collaboration...
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/assets/mission-wheel.png"
            alt="Desai Foundation Impact Wheel"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Carousel Section */}
      <ImpactCarousel />

      {/* Our Story + Stories */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
        <div className="md:w-1/2 px-4 md:pl-10">
          <h2 className="text-2xl font-bold text-dfPink mb-4">Our Story</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            In 1997, the Desai Foundation’s story began – ignited by the vision of Samir A. Desai and Nilima Desai...
          </p>
          {/* ...more story paragraphs */}
          <p className="text-gray-800 leading-relaxed mb-4">
            We believe that the best solutions for impact come from within the community itself...
          </p>
        </div>

        <div className="md:w-1/2 w-full">
          <Stories />
        </div>
      </div>

      {/* Interactive Timeline (only one year visible at a time) */}
      <Timeline data={timelineData} />
    </div>
  );
};

export default About;
