import React from 'react';
import CountUp from 'react-countup';
import impactBg from '../assets/impact-logo-bg.jpeg';

const Stats = () => {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Text + swirl */}
        <div className="relative w-full flex items-center justify-center min-h-[300px]">
          
          {/* Background swirl image manually styled */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '400px',
              height: '400px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundImage: `url(${impactBg})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 0.25,
              filter: 'blur(2px)',
              zIndex: 0,
              position: 'absolute',
            }}
          ></div>

          {/* Text block (above the swirl) */}
          <div className="text-center relative" style={{ zIndex: 10 }}>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-black mb-2">
              WE’VE IMPACTED
            </h2>
            <CountUp
              start={0}
              end={10000000}
              duration={3}
              separator=","
              className="text-5xl md:text-6xl font-extrabold text-black"
            />
            <h2 className="text-xl md:text-2xl text-black mt-2">LIVES</h2>
          </div>
        </div>

        {/* Right: Video */}
        <div className="w-full">
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/JiGzZkab6JA?si=AFlsfxXo1gVNrWRV"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
