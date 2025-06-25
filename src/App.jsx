import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Stats from './components/Stats';
import Mission from './components/Mission';
import Programs from './components/Programs';
import Focus from './components/Focus';
import Sponsor from './components/Sponsor';
import Stories from './components/Stories';
import HowToSupport from './components/HowToSupport.jsx';
import News from "./components/News";
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Stats />
        <Mission />
        
        <Programs />
        <Focus />
        <Sponsor />
        <Stories />
        <HowToSupport />
        <News />
        
      </main>
      <Footer />
    </div>
  );
}
