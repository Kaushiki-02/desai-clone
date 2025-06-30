import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Landing page components
import Hero from './components/Hero';
import Stats from './components/Stats';
import Mission from './components/Mission';
import Programs from './components/Programs';
import Focus from './components/Focus';
import Sponsor from './components/Sponsor';
import Stories from './components/Stories';
import HowToSupport from './components/HowToSupport';
import News from './components/News';

// Pages
import About from './pages/About';
// import Team from './pages/Team';
// import OurWork from './pages/OurWork';
// import RegionalMap from './pages/RegionalMap';
// import Impact from './pages/Impact';
// import Awards from './pages/Awards';
import Donation from './pages/Donation';
// import GetInvolved from './pages/GetInvolved';
// import PartnerWithUs from './pages/PartnerWithUs';
// import Donate from './pages/Donate';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Mission />
      <Programs />
      <Focus />
      <Sponsor />
      <Stories />
      <HowToSupport />
      <News />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />

          <Route path="/Donation" element={<Donation />} />
          {/* <Route path="/team" element={<Team />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/map" element={<RegionalMap />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/awards" element={<Awards />} />
         
          <Route path="/GetInvolved" element={<GetInvolved />} />
          <Route path="/PartnerWithUs" element={<PartnerWithUs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/news" element={<News />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
