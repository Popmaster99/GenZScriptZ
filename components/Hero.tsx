import React from 'react';
import { ArrowDown, PenTool } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-block">
          <span className="font-handwriting text-3xl md:text-4xl text-vangogh-yellow animate-pulse">
            Painting ideas into reality
          </span>
        </div>
        
        <h1 className="font-decorative text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-wide drop-shadow-[0_0_15px_rgba(244,197,66,0.3)]">
          <span className="block mb-2">Masterpiece</span>
          <span className="bg-gradient-to-r from-vangogh-yellow via-vangogh-orange to-vangogh-lightBlue text-transparent bg-clip-text">
            Content Creation
          </span>
        </h1>

        <p className="font-serif text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed border-l-4 border-vangogh-yellow pl-6 text-left bg-black/30 p-4 rounded-r-lg backdrop-blur-sm">
          Crafting viral scripts, flex worthy resumes, and aesthetic digital portfolios with the same energy a post impressionist brings to a masterpiece.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#services"
            className="group relative px-8 py-4 bg-vangogh-yellow text-vangogh-darkBlue font-bold font-serif rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(244,197,66,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Services <PenTool size={18} />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          
          <a 
            href="https://www.instagram.com/genzscriptz/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border-2 border-vangogh-lightBlue text-vangogh-lightBlue font-serif font-bold rounded-full hover:bg-vangogh-lightBlue/10 transition-all duration-300"
          >
            Visit Instagram
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-vangogh-swirl hover:text-white transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
