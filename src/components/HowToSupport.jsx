import React from 'react';
import hts1 from '../assets/HowToSupport/hts1.png';

const HowToSupport = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      {/* Top Heading */}
      <h3 className="text-dfPink font-bold text-xl mb-2">Get Involved</h3>
      <h2 className="text-gray-800 font-extrabold text-2xl mb-8">HOW TO SUPPORT</h2>

      {/* Button Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button className="bg-dfPink text-white font-bold px-4 py-2 text-sm shadow hover:opacity-90">
          DONATE TO THE DESAI FOUNDATION
        </button>
        <button className="bg-gray-100 font-bold px-4 py-2 text-sm hover:bg-gray-200">
          SPONSOR A PROGRAM
        </button>
        <button className="bg-gray-100 font-bold px-4 py-2 text-sm hover:bg-gray-200">
          HOST AN EVENT, BUILD A CAMPAIGN
        </button>
        <button className="bg-gray-100 font-bold px-4 py-2 text-sm hover:bg-gray-200">
          CORPORATE PARTNERSHIPS
        </button>
        <button className="bg-gray-100 font-bold px-4 py-2 text-sm hover:bg-gray-200">
          VOLUNTEER OPPORTUNITIES
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        <div className="w-[180px] sm:w-[220px] md:w-[250px] aspect-square rounded-full overflow-hidden">
  <img
    src={hts1}
    alt="How to support"
    className="w-full h-full object-cover"
  />
</div>

        {/* Right Content */}
        <div className="text-left max-w-xl">
          <p className="text-dfPink font-semibold mb-2 text-lg">
            <span className="inline-block w-10 h-[2px] bg-gray-400 align-middle mr-2"></span>
            Empower Change: Donate Today!
          </p>

          <h3 className="text-xl font-extrabold text-gray-900 mb-4">
            DONATE TO THE DESAI FOUNDATION
          </h3>

          <ul className="text-gray-800 space-y-3 text-sm">
            <li>
              <strong>Transform Lives</strong> <br />
              Empower health, education, and livelihood programs.
            </li>
            <li>
              <strong>Support Menstrual Equity</strong> <br />
              Ensure dignity for women and girls.
            </li>
            <li>
              <strong>Healthcare Heroes</strong> <br />
              Give for accessible healthcare in underserved areas.
            </li>
            <li>
              <strong>Empower Women: Give Monthly!</strong> <br />
              Champion gender equality through your support every month.
            </li>
          </ul>

          <button className="mt-6 bg-dfPink text-white font-bold py-2 px-6 rounded-full hover:opacity-90">
            DONATE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToSupport;
