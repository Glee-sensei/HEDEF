
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Programs', path: '/#programs' },
    { name: 'Impact', path: '/#impact' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo light={!isScrolled} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path} 
              className={`font-medium transition-colors hover:text-red-500 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-lg hover:shadow-red-500/20 active:scale-95">
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className={`w-8 h-8 ${isScrolled ? 'text-teal-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path}
                className="text-lg font-medium text-slate-700 hover:text-teal-600 px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold w-full">
              Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
