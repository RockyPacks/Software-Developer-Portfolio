import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center transition-colors duration-300">
        <span className="font-mono text-blue-600 dark:text-accent mr-3 text-2xl transition-colors duration-300">03</span>_skills
      </h2>
      <div className="space-y-8">
        {SKILLS.map((skillCategory) => (
          <div key={skillCategory.category} className="bg-white dark:bg-secondary border border-gray-200 dark:border-border-color rounded-lg p-6 transition-colors duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{skillCategory.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillCategory.skills.map((skill) => (
                <div key={skill} className="bg-gray-50 dark:bg-primary border border-gray-200 dark:border-border-color px-4 py-2 rounded-md shadow-sm transition-colors duration-300">
                    <p className="text-sm text-gray-800 dark:text-text-primary transition-colors duration-300">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;