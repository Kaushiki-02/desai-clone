import React from 'react';
import mainNews from '../assets/news/main.png';
import news1 from '../assets/news/news1.png';
import news2 from '../assets/news/news2.png';
import news3 from '../assets/news/news3.png';
import event1 from '../assets/news/event1.png';
import event2 from '../assets/news/event2.png';
import instagram from '../assets/news/instagram-grid.png';

const News = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12">
      {/* Latest News Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <h4 className="text-dfPink font-semibold text-lg mb-1">News</h4>
        <h2 className="text-gray-800 font-bold text-2xl mb-8 uppercase">
          Latest News and Updates
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left main news */}
          <div className="flex-10 border border-dfPink rounded p-0.5">
            <img src={mainNews} alt="Main News" className="w-full object-cover rounded" />
            <div className="p-4">
              <p className="text-lg text-gray-800 leading-snug">
                DESAI FOUNDATION'S 11TH ANNUAL LOTUS FESTIVAL TO CELEBRATE 10 MILLION LIVES IMPACTED — SEPT. 13 AT BOSTON'S OMNI SEAPORT
              </p>
              <button className="mt-4 bg-dfPink text-white text-sm font-semibold px-4 py-2 rounded-full">
                VIEW ALL NEWS
              </button>
            </div>
          </div>

          {/* Right small news list */}
          <div className="flex flex-col gap-9 w-full lg:w-[60%]">
            {[{ img: news1, text: 'SGCCI Honours Excellence Across 15 Categories At Grand Golden Jubilee Awards Ceremony In Surat' },
              { img: news2, text: 'Making Strides — 2024' },
              { img: news3, text: 'The Desai Foundation Reaches The Milestone Of Impacting Over 10 Million Lives In Rural India' }].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <img src={item.img} alt={`News ${i}`} className="w-48 h-32 object-cover border border-dfPink rounded p-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-800 leading-tight mb-1">
                    {item.text}
                  </p>
                  <a href="#" className="text-dfPink text-xs font-semibold">LEARN MORE</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto">
        <h4 className="text-dfPink font-extrabold text-xl mb-1">
          <span className="inline-block w-10 h-[2px] bg-gray-400 align-middle mr-2"></span>
          Events
        </h4>
        <h2 className="text-gray-800 font-bold text-2xl mb-4 uppercase">
          Upcoming Events
        </h2>

       <div className="flex flex-col lg:flex-row justify-between gap-8">
  {/* Left text column */}
  <div className="lg:w-1/2">
    <p className="text-sm text-gray-800 mb-4">
      Here's all the exciting things you can expect this year:
      <br />
      From the vibrant lights of Diwali on the Hudson in NYC to the cultural richness of the Lotus Festival in Boston, and the global charm of Cocktails and Chat, our events promise unforgettable moments.
    </p>
    <button className="bg-dfPink text-white text-sm font-semibold px-4 py-2 rounded-full">
      VIEW ALL EVENTS
    </button>
  </div>

  {/* Right card column */}
 <div className="lg:w-1/2">
  <div className="grid grid-cols-2 gap-4">
    {[{ img: event1, title: 'LOTUS FESTIVAL 2025' }, { img: event2, title: 'DIWALI ON THE HUDSON 2025' }].map((item, i) => (
      <div key={i} className="border border-dfPink rounded overflow-hidden">
        <img src={item.img} alt={`Event ${i}`} className="w-full h-34 object-cover" />
        <div className="p-5">
          <h3 className="text-xs font-bold text-gray-800 mb-1">{item.title}</h3>
          <a
            href="#"
            className="bg-dfPink text-white text-[10px] font-semibold px-3 py-1 rounded-full inline-block"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    ))}
  </div>
</div>



</div>
{/* Newsletter Section */}
<div className="w-full bg-dark relative py-10 px-4 md:px-12 mt-16">
  <div className="max-w-10xl mx-auto text-white flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
    {/* Left text */}
    <div className="md:w-1/2">
      <p className="text-xl mb-1">Sign Up for Newsletter</p>
      <h3 className="text-2xl font-extrabold">JOIN THE COMMUNITY</h3>
    </div>

    {/* Right input form */}
    <div className="w-full md:w-1/2">
      <label htmlFor="email" className="text-sm block mb-1">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        className="w-full mb-3 p-3 rounded-full text-black outline-none"
      />
      <button className="w-full bg-desaiPink hover:bg-lightPink text-dark font-bold py-3 rounded-full">
        SEND
      </button>
    </div>
  </div>
</div>

{/* Instagram Section */}
<div className="bg-white py-16 px-4 md:px-12">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-start justify-between gap-10">
    {/* Left Text Content */}
    <div className="lg:w-1/2">
      <h4 className="text-dfPink font-extrabold text-xl mb-1">
        <span className="inline-block w-10 h-[2px] bg-gray-400 align-middle mr-2"></span>
        Instagram
      </h4>
      <h2 className="text-gray-800 font-bold text-2xl mb-4 uppercase">
        Follow The Desai Foundation
      </h2>
      <p className="text-gray-700 text-base mb-6">
        Connect with us on social media! We share inspiring stories from the ground, upcoming events, and more about the work we do.
      </p>
      <button className="bg-dfPink text-white text-sm font-semibold px-6 py-3 rounded-full">
        FOLLOW
      </button>
    </div>

    {/* Right Grid Image (as one image) */}
    <div className="lg:w-1/2">
    <img
  src={instagram}
  alt="Instagram Grid"
  className="w-full h-auto rounded"
/>
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default News;
