import React from 'react';
import { PERSONAL_DETAILS } from '../constants';

const Hero: React.FC = () => {
  // Splitting the bio for the grid layout.
  const bioParts = PERSONAL_DETAILS.bio.split('. ');
  const bioSnippet1 = bioParts.slice(0, 2).join('. ') + '.';
  const creativeQuote = "From pixels to predictions, I craft experiences that learn and adapt.";

  return (
    // The section no longer forces a huge vertical gap.
    <section id="hello" className="relative w-full flex flex-col">
      {/* Center area with text and image. Padding now comes solely from SectionWrapper. */}
      <div className="grid md:grid-cols-2 items-center gap-8 py-10">
        
        {/* Text content on the left */}
        <div className="text-center md:text-left order-2 md:order-1 flex flex-col justify-center">
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-black text-gray-800 dark:text-white leading-[0.9] select-none transition-colors duration-300 tracking-tighter">
            <span className="block">AI SOFTWARE</span>
            <span className="block text-blue-600 dark:text-accent">DEVELOPER</span>
          </h1>
          <p className="font-mono text-sm text-gray-500 dark:text-text-secondary mt-4 md:mt-6 max-w-md mx-auto md:mx-0">
            Engineering intelligent systems that bridge the gap between data and human experience.
          </p>
        </div>

        {/* Image on the right */}
        <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-full md:h-full max-h-[480px] group mx-auto order-1 md:order-2 flex items-center justify-center">
          <div className="absolute -inset-1 bg-blue-500/50 dark:bg-accent/50 blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500 rounded-lg"></div>
          <img 
            src="./pik.png" 
            alt={PERSONAL_DETAILS.name} 
            className="relative w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out rounded-lg shadow-2xl" 
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-lg">
            <p className="text-white font-bold text-lg">{PERSONAL_DETAILS.name}</p>
          </div>
        </div>
      </div>

      {/* Bottom info grid, now full-width within the container by using negative margins */}
      <div className="relative z-10 border-t border-gray-200 dark:border-border-color transition-colors duration-300 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="grid grid-cols-1 md:grid-cols-4">
          {/* Block 1: Name and Title */}
          <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-border-color col-span-1 md:col-span-2 transition-colors duration-300">
              <span className="font-mono text-sm text-gray-500 dark:text-text-secondary transition-colors duration-300">01 / ROLE</span>
              <h2 className="mt-2 text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{PERSONAL_DETAILS.name}</h2>
              <p className="font-mono text-blue-600 dark:text-accent transition-colors duration-300">{PERSONAL_DETAILS.title}</p>
          </div>
          {/* Block 2: Bio Snippet */}
          <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-border-color transition-colors duration-300">
              <span className="font-mono text-sm text-gray-500 dark:text-text-secondary transition-colors duration-300">02 / ABOUT</span>
              <p className="mt-2 text-gray-800 dark:text-text-primary text-sm leading-relaxed transition-colors duration-300">{bioSnippet1}</p>
          </div>
          {/* Block 3: Creative Quote */}
          <div className="p-4 md:p-6 transition-colors duration-300">
              <span className="font-mono text-sm text-gray-500 dark:text-text-secondary transition-colors duration-300">03 / FOCUS</span>
              <p className="mt-2 text-gray-800 dark:text-text-primary text-sm leading-relaxed italic transition-colors duration-300">"{creativeQuote}"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;