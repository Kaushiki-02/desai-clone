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
      {/* === SDG and Indian Initiatives Section === */}
<section className="px-4 md:px-20 py-8 bg-white">
  <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
    Our Alignment with Global & National Goals
  </h2>
  <img
    src="/assets/sdg-initiatives.png"
    alt="UN SDGs and Indian Government Initiatives"
    className="mx-auto w-full max-w-6xl h-auto"
  />
</section>

{/* === Annual Reports Section === */}
<section className="px-4 md:px-20 py-16 bg-gray-50">
  <div className="flex flex-col lg:flex-row items-center gap-10">
    
    {/* Left Image */}
    <div className="lg:w-1/2 w-full">
      <img
        src="/assets/annual-reports.jpg"
        alt="Annual Reports"
        className="w-full h-auto rounded shadow"
      />
    </div>

    {/* Right Text + Buttons */}
    <div className="lg:w-1/2 w-full">
      <h2 className="text-3xl font-bold text-dfPink mb-4">Annual Reports</h2>
      <p className="text-gray-700 mb-6">
        This comprehensive document outlines our work, impact, objectives, approach, and goals in the current year and moving forward. We hope you take a few moments to learn about our programs in India.
      </p>

      {/* Grid of buttons */}
      <div className="grid grid-cols-2 gap-4">
        <a href="#" className="bg-dfPink text-white font-semibold py-3 px-6 text-center hover:bg-pink-800 transition">ANNUAL REPORT 2024</a>
        <a href="#" className="bg-dfPink text-white font-semibold py-3 px-6 text-center hover:bg-pink-800 transition">ANNUAL REPORT 2023</a>
        <a href="#" className="bg-dfPink text-white font-semibold py-3 px-6 text-center hover:bg-pink-800 transition">ANNUAL REPORT 2022</a>
        <a href="#" className="bg-dfPink text-white font-semibold py-3 px-6 text-center hover:bg-pink-800 transition">ANNUAL REPORT 2021</a>
        <a href="#" className="bg-dfPink text-white font-semibold py-3 px-6 text-center hover:bg-pink-800 transition">ANNUAL REPORT 2020</a>
        <a href="#" className="bg-dfPink text-white font-semibold py-3 px-6 text-center hover:bg-pink-800 transition">ANNUAL REPORT 2019</a>
      </div>
    </div>
  </div>
</section>

{/* === Audited Financial Statements Section === */}
<section className="px-4 md:px-20 py-16 bg-white">
  <div className="flex flex-col lg:flex-row items-center gap-10">
    
    {/* Left Image */}
    <div className="lg:w-1/2 w-full">
      <img
        src="/assets/financial-statements.jpg"
        alt="Audited Financial Statements"
        className="w-full h-auto rounded shadow"
      />
    </div>

    {/* Right Text + Buttons */}
    <div className="lg:w-1/2 w-full">
      <h2 className="text-3xl font-bold text-dfPink mb-4">Audited Financial Statements</h2>
      <p className="text-gray-700 mb-6">
        We invite you to review our financials in greater detail below.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#" className="bg-dfPink text-white font-semibold py-3 px-6 text-center hover:bg-pink-800 transition">
          STATEMENT FY 2023
        </a>
        <a href="#" className="bg-dfPink text-white font-semibold py-3 px-6 text-center hover:bg-pink-800 transition">
          STATEMENTS FY 2022 & 2021
        </a>
      </div>
    </div>
  </div>
</section>

{/* === Our Programs Section === */}
<section className="px-4 md:px-20 py-16 bg-[#fcf8fb] text-center">
  <h2 className="text-3xl font-bold text-dfPink mb-2">Our Programs</h2>
  <h3 className="text-2xl font-semibold text-gray-800 mb-8">EXPLORE OUR PROGRAMS</h3>

  {/* Static Screenshot */}
  <div className="flex justify-center mb-8">
    <img
      src="/assets/our-programs.png"
      alt="Our Programs"
      className="w-full max-w-5xl rounded shadow-md"
    />
  </div>

  {/* Description Text */}
  <p className="text-gray-700 max-w-3xl mx-auto mb-6">
    At the Desai Foundation, our commitment to fostering meaningful impact drives us to design and
    implement a diverse range of programs that touch the lives of individuals and communities.
  </p>
  <p className="text-gray-700 max-w-4xl mx-auto mb-8">
    Our programming focuses on health, livelihood, menstrual equity, and community engagement. We do
    this by ensuring that our programs cultivate dignity and create an impact for the people we serve.
    Through collaborative efforts and innovative solutions, we create lasting change that resonates
    far beyond our projects’ boundaries.
  </p>

  {/* Button */}
  <a
    href="#"
    className="inline-block bg-dfPink text-white font-bold py-3 px-6 rounded-full hover:bg-pink-800 transition"
  >
    ALL PROGRAMS
  </a>
</section>

    </div>
  );
};

export default About;
