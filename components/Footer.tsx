
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand and Description (Spans 3/12) */}
          <div className="lg:col-span-3 space-y-6">
            <Link to="/" className="inline-block">
              <Logo light />
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              The Humane EDUCATION AND EMPOWERMENT FOUNDATION (HEdEF) is committed to quality education and economic growth in underserved communities.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors group">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-slate-400 rounded-sm group-hover:bg-white transition-colors"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Key Pillars (Spans 3/12 - Stretched into rows) */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-teal-400 uppercase tracking-wider text-sm border-b border-slate-800 pb-2">Key Pillars</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-y-4 text-sm">
              {['Education Access', 'Vocational Training', 'Economic Empowerment', 'Community Engagement', 'Sustainable Partnerships'].map((item) => (
                <li key={item} className="flex items-start group">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-red-600 rounded-full mr-3 shrink-0 group-hover:scale-125 transition-transform"></span>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get Involved (Spans 3/12 - Stretched into rows) */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-teal-400 uppercase tracking-wider text-sm border-b border-slate-800 pb-2">Get Involved</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-y-4 text-sm">
              {['Back-to-School Sponsorship', 'Become a Mentor', 'Corporate Partnership', 'Donations', 'Career Support'].map((item) => (
                <li key={item} className="flex items-start group">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-teal-500 rounded-full mr-3 shrink-0 group-hover:scale-125 transition-transform"></span>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (Spans 3/12) */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-teal-400 uppercase tracking-wider text-sm border-b border-slate-800 pb-2">Contact Us</h4>
            <div className="space-y-5 text-sm text-slate-400">
              <div className="flex items-start">
                <span className="mr-3 text-red-500 mt-1">📍</span>
                <p className="leading-relaxed">
                  2B Irowa Obazie Street,<br />
                  Benin City, Egor LGA,<br />
                  Edo State, Nigeria.
                </p>
              </div>
              <p className="flex items-center">
                <span className="mr-3 text-red-500">✉️</span>
                <a href="mailto:hedef.nigeria@gmail.com" className="hover:text-white transition-colors">hedef.nigeria@gmail.com</a>
              </p>
              <div className="pt-2">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg w-full transition-all shadow-lg shadow-teal-900/20 active:scale-95">
                  Request Information
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] uppercase tracking-[0.2em]">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Humane EDUCATION AND EMPOWERMENT FOUNDATION (HEdEF).</p>
          <div className="flex space-x-6">
            <span className="flex items-center"><span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span> SDG 1, 4, 8 & 10</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
