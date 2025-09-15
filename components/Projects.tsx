import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; onProjectSelect: (project: Project) => void; }> = ({ project, onProjectSelect }) => (
  <button 
    className="bg-white dark:bg-secondary rounded-lg border border-gray-200 dark:border-border-color overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-accent/20 text-left w-full block focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-primary"
    onClick={() => onProjectSelect(project)}
    aria-label={`View details for ${project.title}`}
  >
    <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-4">
            <h3 className="text-white text-xl font-bold transition-colors duration-300">{project.title}</h3>
        </div>
    </div>
    <div className="p-6 transition-colors duration-300">
      <p className="text-xs text-gray-500 dark:text-text-secondary font-mono mb-2 transition-colors duration-300">{project.date}</p>
      <p className="text-gray-600 dark:text-text-secondary text-sm mb-4 line-clamp-3 transition-colors duration-300">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs font-mono bg-blue-100 text-blue-600 dark:bg-border-color dark:text-accent px-2 py-1 rounded transition-colors duration-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </button>
);


const Projects: React.FC<{ onProjectSelect: (project: Project) => void; }> = ({ onProjectSelect }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % PROJECTS.length);
        setIsFading(false);
      }, 500); // match transition duration
    }, 3000); // Change project name every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-24">
       <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center transition-colors duration-300">
            <span className="font-mono text-blue-600 dark:text-accent mr-3 text-2xl transition-colors duration-300">02</span>_projects
        </h2>
        <div className="h-6 mt-2">
            <p className={`font-mono text-sm text-gray-500 dark:text-text-secondary transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                Featuring: {PROJECTS[currentProjectIndex].title}
            </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} onProjectSelect={onProjectSelect} />
        ))}
      </div>
    </section>
  );
};

export default Projects;