import React from 'react';

import work1 from './images/work1.jpeg';
import work2 from './images/work2.jpeg';
import work3 from './images/work3.jpeg';
import work4 from './images/work4.jpeg';
import work5 from './images/work5.png';
import work6 from './images/work6.jpeg';

const Portfolio: React.FC = () => {

  const works = [
    { id: 1, title: 'Tech Review Script', category: 'Video Script', img: work1 },
    { id: 2, title: 'Travel Vlog Reels', category: 'Reels Strategy', img: work2 },
    { id: 3, title: 'Executive Resume', category: 'Resume Design', img: work3 },
    { id: 4, title: 'Fashion Blog', category: 'Content Writing', img: work4 },
    { id: 5, title: 'Artist Portfolio', category: 'Web Development', img: work5 },
    { id: 6, title: 'Product Launch', category: 'Campaign Idea', img: work6 },
  ];

  return (
    <section id="portfolio" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-decorative text-4xl md:text-5xl text-vangogh-swirl mb-4 drop-shadow-lg">
            The Gallery
          </h2>
          <div className="w-24 h-1 bg-vangogh-yellow mx-auto rounded-full mb-6"></div>
          <p className="font-serif text-xl text-gray-300 max-w-2xl mx-auto">
            A curated collection of my recent masterpieces.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {works.map((work) => (
            <div 
              key={work.id} 
              className="group relative overflow-hidden rounded-lg shadow-xl cursor-pointer"
            >
              
              {/* Frame Border */}
              <div className="absolute inset-0 border-8 border-vangogh-darkBlue/80 z-20 pointer-events-none rounded-lg"></div>
              
              {/* Image */}
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 
                  bg-gradient-to-t 
                  from-vangogh-darkBlue 
                  via-vangogh-darkBlue/40 
                  to-transparent 
                  opacity-0 
                  group-hover:opacity-100 
                  transition-opacity duration-300 
                  z-10 
                  flex flex-col justify-end p-6">

                <span className="text-vangogh-yellow font-decorative text-sm tracking-wider mb-1 
                    translate-y-4 group-hover:translate-y-0 
                    transition-transform duration-500 delay-75">
                  {work.category}
                </span>

                <h3 className="text-white font-serif text-xl font-bold 
                    translate-y-4 group-hover:translate-y-0 
                    transition-transform duration-500 delay-100">
                  {work.title}
                </h3>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
