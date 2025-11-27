import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
    {
      name: 'Pricing',
      href: 'https://erratic-tower-44d.notion.site/Pricing-e58a7fc7d93c4b6db5c6db7cc22718ce?pvs=74',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-vangogh-darkBlue/90 backdrop-blur-md shadow-lg border-b border-vangogh-yellow/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
             {/* Abstract Logo icon representing a script/feather */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-vangogh-yellow to-vangogh-orange flex items-center justify-center border-2 border-white/20">
               <span className="font-decorative text-vangogh-darkBlue font-bold text-xl">G</span>
            </div>
            <span className="font-decorative text-2xl text-vangogh-yellow tracking-wider">
              GenZScriptZ
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-serif text-gray-200 hover:text-vangogh-yellow transition-colors duration-300 text-lg tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vangogh-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="https://www.instagram.com/genzscriptz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
            >
              <Instagram size={20} className="text-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-vangogh-yellow hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-vangogh-darkBlue/95 backdrop-blur-xl border-b border-vangogh-yellow/20">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-xl text-gray-200 hover:text-vangogh-yellow block py-2"
              >
                {link.name}
              </a>
            ))}
             <a 
              href="https://www.instagram.com/genzscriptz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-400 mt-4 font-serif"
            >
              <Instagram size={20} />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
