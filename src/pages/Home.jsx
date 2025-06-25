import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Mission from '../components/Mission';
import Programs from "../components/Programs";
import Focus from './components/Focus';
import Sponsor from './components/Sponsor';
import Stories from "../components/Stories";
import HowToSupport from './components/HowToSupport';
import News from "../components/News.jsx";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Mission />
      
      <Programs />
      <Focus />
      <Sponsor />
      <Stories />
      <HowToSupport />
      <News />
      <Footer />
    </>
  );
}
