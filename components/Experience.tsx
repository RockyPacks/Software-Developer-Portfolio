import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center transition-colors duration-300">
        <span className="font-mono text-blue-600 dark:text-accent mr-3 text-2xl transition-colors duration-300">04</span>_experience
      </h2>
      <div className="relative border-l-2 border-gray-200 dark:border-border-color ml-4 transition-colors duration-300">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="mb-12 ml-8 relative">
            <div className="absolute -left-10 w-4 h-4 bg-blue-600 dark:bg-accent rounded-full border-4 border-white dark:border-secondary mt-1.5 transition-colors duration-300"></div>
            <p className="text-sm font-mono text-gray-500 dark:text-text-secondary mb-1 transition-colors duration-300">{job.period}</p>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{job.role}</h3>
            <p className="text-blue-600 dark:text-accent mb-4 transition-colors duration-300">{job.company}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-text-secondary transition-colors duration-300">
              {job.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;