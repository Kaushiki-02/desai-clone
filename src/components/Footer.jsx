import React from 'react';
import logo from '../assets/footer/TheDesaiFoundation-log0.png';
import client1 from '../assets/footer/clientlogo1.png';
import client2 from '../assets/footer/clientlogo2.png';
import client3 from '../assets/footer/clientlogo3.png';
import client4 from '../assets/footer/clientlogo4.png';
import client5 from '../assets/footer/clientlogo5.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dfPink text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <img src={logo} alt="Desai Foundation Logo" className="h-16 mb-4" />
          <p className="text-sm mb-4">
            The Desai Foundation is an organization that empowers women and children through community programming to elevate health, livelihood, and menstrual equity in rural India.
          </p>
          <button className="bg-white text-dfPink font-bold px-6 py-2 rounded-full text-sm">
            DONATE NOW
          </button>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="text-sm">300 Tradecenter, Suite 3450 Woburn, MA 01801</p>
          <p className="text-sm font-bold mt-2">Phone:</p>
          <p className="text-sm">(781)-270-3655</p>
          <p className="text-sm font-bold mt-2">Email:</p>
          <p className="text-sm">info@thedesaifoundation.org</p>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>➤ Our Programs</li>
            <li>➤ Events</li>
            <li>➤ Ways to Donate</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Social media</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaFacebookF /> Facebook</li>
            <li className="flex items-center gap-2"><FaInstagram /> Instagram</li>
            <li className="flex items-center gap-2"><FaLinkedinIn /> LinkedIn</li>
          </ul>
        </div>
      </div>

      {/* Logos row */}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
        {[client1, client2, client3, client4, client5].map((img, i) => (
          <img key={i} src={img} alt={`Client ${i + 1}`} className="h-16" />
        ))}
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-xs">
        <p>© 2023 Desai Foundation. All rights reserved.</p>
        <p className="mt-1">
          DESAI FOUNDATION is a registered 501(c)3 organization<br />
          <strong>Tax ID#:</strong> 04-3433749 80(G) <strong>Registration Number:</strong> E-31940(M) PAN Number: AACTT7301H
        </p>
      </div>
    </footer>
  );
};

export default Footer;