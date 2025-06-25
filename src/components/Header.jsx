// src/components/Header.jsx
import React from 'react';
import logo from '../assets/logo.png'; // Your handwritten logo image

const Header = () => {
  return (
    <>
      {/* Top Pink Banner */}
      <div className="bg-[#dd298a] text-white text-sm text-center py-2">
        JOIN US AT THIS YEAR’S LOTUS FESTIVAL!
      </div>

      {/* Main Nav */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <img src={logo} alt="Desai Foundation" className="h-12" />

          {/* Nav Items */}
          <nav className="flex items-center space-x-6 text-sm font-semibold">
            <a href="#" className="hover:text-[#dd298a]">Home</a>
            <a href="#" className="hover:text-[#dd298a]">About</a>
            <a href="#" className="hover:text-[#dd298a]">What We Do</a>
            <a href="#" className="hover:text-[#dd298a]">News + Events</a>
            <a href="#" className="hover:text-[#dd298a]">Our Impact</a>
            <a href="#" className="hover:text-[#dd298a]">Take Action</a>
            <a href="#" className="hover:text-[#dd298a]">🇮🇳 India Site</a>
          </nav>

          {/* Donate Button */}
          <button className="bg-[#dd298a] text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-pink-700">
            DONATE NOW
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
