import React from 'react';
import { Instagram, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative z-10 bg-vangogh-darkBlue border-t border-vangogh-midBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="font-decorative text-3xl text-vangogh-yellow mb-2">GenZScriptZ</h2>
            <p className="font-serif text-gray-400 italic">"Words that hook. Scripts that hit."</p>
          </div>

          {/* Social / Contact */}
          <div className="flex gap-6">
             <a 
              href="mailto:ohpopcorn1@gmail.com" 
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-vangogh-yellow/20 transition-all duration-300 border border-white/10 hover:border-vangogh-yellow"
              title="Email Us"
            >
              <Mail size={20} className="text-gray-300 group-hover:text-vangogh-yellow" />
            </a>
            <a 
              href="https://www.instagram.com/genzscriptz/" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-pink-600/20 transition-all duration-300 border border-white/10 hover:border-pink-500"
              title="Instagram"
            >
              <Instagram size={20} className="text-gray-300 group-hover:text-pink-500" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-sans">
          <p>&copy; {new Date().getFullYear()} GenZScriptZ. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-vangogh-yellow transition-colors">
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;