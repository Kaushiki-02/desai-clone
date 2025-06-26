import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-xs">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center px-3 py-2 font-semibold text-black hover:text-dfPink focus:outline-none"
      >
        {title}
        <FaChevronDown className="ml-1 text-xs" />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-48 bg-dfPink rounded border border-gray-200 z-50">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block px-4 py-2 text-white hover:bg-white hover:text-dfPink text-sm transition-colors duration-150"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="text-white text-center py-2 text-xs" style={{ backgroundColor: '#d643b6' }}>
        JOIN US AT THIS YEAR'S LOTUS FESTIVAL!
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-6 text-xs">
          <Link to="/" className="flex-shrink-0">
            <img src="/assets/logo.png" alt="Logo" className="h-12" />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link to="/" className="text-dfPink font-semibold underline">Home</Link>

            <Dropdown title="About" items={[
              { label: 'About', link: '/about' },
              { label: 'Our Team', link: '/team' },
            ]} />

            <Dropdown title="What We Do" items={[
              { label: 'Our Work', link: '/our-work' },
              { label: 'Beneficiary Stories', link: '/stories' },
              { label: 'Regional Map', link: '/map' },
            ]} />

            <Link to="/news" className="font-semibold text-black hover:text-dfPink">
              News + Events
            </Link>

            <Dropdown title="Our Impact" items={[
              { label: 'Our Impact', link: '/impact' },
              { label: 'Awards & Recognition', link: '/awards' },
            ]} />

            <Dropdown title="Take Action" items={[
              { label: 'Volunteer', link: '/volunteer' },
              { label: 'Fundraise', link: '/fundraise' },
              { label: 'Careers', link: '/careers' },
            ]} />

            <a href="/india" className="flex items-center font-semibold hover:text-dfPink">
              <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4 h-3 mr-1" />
              India Site
            </a>

            <Link
              to="/donate"
              className="bg-dfPink text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-pink-700"
            >
              DONATE NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
