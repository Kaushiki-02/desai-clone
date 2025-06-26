import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-xs"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center px-3 py-2 font-semibold text-black hover:text-pink-600 focus:outline-none">
        {title}
        <FaChevronDown className="ml-1 text-xs" />
      </button>

      {/* DROPDOWN FIX: no vertical gap + pointer-safe zone */}
      {open && (
        <div className="absolute left-0 top-full w-48 bg-white border border-gray-200 z-50 shadow-md">
          {items.map((item, index) => (
            <a
              key={index}
              href="/"
              className="block px-4 py-2 text-gray-800 hover:bg-pink-100 text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      {/* Top pink banner */}
      <div
        className="text-white text-center py-2 text-xs"
        style={{ backgroundColor: '#d643b6' }}
      >
        JOIN US AT THIS YEAR'S LOTUS FESTIVAL!
      </div>

      {/* Main navbar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-6 text-xs">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src="/assets/logo.png" alt="Logo" className="h-12" />
          </a>

          {/* Menu */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a href="/" className="text-pink-600 font-semibold underline">
              Home
            </a>
            <Dropdown title="About" items={['About', 'Our Team']} />
            <Dropdown title="What We Do" items={['Our Work', 'Beneficiary Stories', 'Regional Map']} />
            <a href="/news" className="font-semibold text-black hover:text-pink-600">
              News + Events
            </a>
            <Dropdown title="Our Impact" items={['Our Impact', 'Awards & Recognition']} />
            <Dropdown title="Take Action" items={['Volunteer', 'Fundraise', 'Careers']} />
            <a href="/india" className="flex items-center font-semibold hover:text-pink-600">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India"
                className="w-4 h-3 mr-1"
              />
              India Site
            </a>
            <a
              href="/donate"
              className="bg-pink-600 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-pink-700"
            >
              DONATE NOW
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
