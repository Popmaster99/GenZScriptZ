import React from 'react';
import { Video, ScrollText, FileText, Globe, PenLine } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'scripts',
    title: 'Video Scripts',
    description: 'Scripts so sticky your audience won’t blink. We hook ‘em in the first 3 seconds and keep them locked in like it’s their new comfort creator.',
    icon: ScrollText,
  },
  {
    id: 'reels',
    title: 'Reels Ideas',
    description: 'Viral level ideas built different. Trend-hacked, scroll stopping, and crafted to shove your content straight onto the FYP throne.',
    icon: Video,
  },
  {
    id: 'content',
    title: 'Content Writing',
    description: 'Words that hit. Aesthetic, SEO-loaded, and branded to perfection—so your audience reads it and goes, “yeah this is so them.”',
    icon: PenLine,
  },
  {
    id: 'resume',
    title: 'Resume Making',
    description: 'Resumes that stand out harder than a sunflower in a grayscale world. Clean, modern, recruiter approved, and impossible to ignore.',
    icon: FileText,
  },
  {
    id: 'website',
    title: 'Portfolio Website',
    description: 'Sleek, bougie, React powered portfolios that make your work look like it belongs in a designer showroom.',
    icon: Globe,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative z-10 bg-gradient-to-b from-transparent to-vangogh-darkBlue/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-decorative text-4xl md:text-5xl text-vangogh-yellow mb-4 drop-shadow-lg">
            My Palette of Services
          </h2>
          <div className="w-24 h-1 bg-vangogh-orange mx-auto rounded-full mb-6"></div>
          <p className="font-serif text-xl text-gray-300 max-w-2xl mx-auto">
            Each service is crafted with precision, creativity, and a touch of artistic flair to elevate your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative bg-vangogh-midBlue/30 backdrop-blur-md border border-vangogh-lightBlue/20 rounded-xl p-8 hover:bg-vangogh-midBlue/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Decorative Swirl Background on Card */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-vangogh-yellow/10 rounded-full blur-3xl group-hover:bg-vangogh-yellow/20 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-vangogh-darkBlue rounded-lg flex items-center justify-center mb-6 border border-vangogh-yellow/30 group-hover:border-vangogh-yellow transition-colors duration-300 shadow-lg">
                  <service.icon className="text-vangogh-yellow" size={28} />
                </div>
                
                <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-vangogh-yellow transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-sans text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-vangogh-swirl/30 to-transparent group-hover:via-vangogh-yellow/50 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
