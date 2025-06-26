import React, { useState } from 'react';

const Timeline = ({ data }) => {
  const [activeYear, setActiveYear] = useState(data[0]?.year || '');
  const activeItem = data.find((item) => item.year === activeYear);

  return (
    <section className="px-4 py-12 bg-white">
      <h2 className="text-2xl font-bold text-dfPink mb-2 text-center">Our History</h2>
      <h3 className="text-lg font-semibold text-center mb-6">A TIMELINE: 1997 – PRESENT</h3>

      {/* Centered Container Box */}
      {activeItem && (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6 mb-6 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="md:w-2/5">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="rounded-md w-full h-auto max-h-60 object-cover"
            />
          </div>
          <div className="md:w-3/5">
            <h4 className="text-dfPink font-semibold text-base mb-2">{activeItem.title}</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{activeItem.content}</p>
          </div>
        </div>
      )}

      {/* Year Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm text-dfPink font-semibold border-t pt-4 max-w-4xl mx-auto">
        {data.map((item) => (
          <button
            key={item.year}
            onClick={() => setActiveYear(item.year)}
            className={`px-3 py-1 rounded hover:underline transition-all ${
              item.year === activeYear ? 'underline text-pink-800' : ''
            }`}
          >
            {item.year}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
