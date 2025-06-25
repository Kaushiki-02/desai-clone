import React from 'react';
import missionGroup from '../assets/mission-group.png';
import missionWheel from '../assets/mission-wheel.png';

const Mission = () => {
  return (
    <section className="w-full flex flex-wrap min-h-screen">
      {/* LEFT SIDE */}
      <div
        className="w-full md:w-1/2 px-10 py-12 flex flex-col items-center justify-center text-white relative"
        style={{ backgroundColor: '#711743' }}
      >
        {/* Text block */}
        <div className="mb-8 text-left max-w-md">
          <h2 className="text-3xl font-bold mb-4">OUR MISSION</h2>
          <p className="text-base font-semibold leading-relaxed">
            We empower women and children <br />
            through community programs to <br />
            elevate health, livelihood, and <br />
            menstrual equity in rural India.
          </p>
        </div>

        {/* Group image */}
        <div className="mt-8 w-full max-w-md">
          <img
            src={missionGroup}
            alt="Group of Women"
            className="rounded w-full object-cover"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center py-12">
        <img
          src={missionWheel}
          alt="Mission Wheel"
          className="w-64 md:w-80 object-contain"
        />
      </div>
    </section>
  );
};

export default Mission;
