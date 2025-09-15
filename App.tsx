import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AIInterviewerSection from './components/AIInterviewerSection';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import SponsoringOrgs from './components/SponsoringOrgs';
import Chatbot from './components/Chatbot';
import type { Project } from './types';
import { NAV_LINKS } from './constants';

type Theme = 'light' | 'dark';

const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-gray-900/80 dark:bg-primary/80 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in" onClick={onClose}>
            <div className="bg-white dark:bg-secondary rounded-lg border border-gray-200 dark:border-border-color max-w-3xl w-full mx-auto relative shadow-2xl shadow-blue-500/20 dark:shadow-accent/20 animate-slide-up transition-colors duration-300" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 dark:text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors z-10" aria-label="Close modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="grid md:grid-cols-2">
                    <div className="p-8 flex flex-col justify-center">
                        <div>
                            <p className="text-sm font-mono text-gray-500 dark:text-text-secondary mb-1 transition-colors duration-300">{project.date}</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{project.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                <span key={tag} className="text-xs font-mono bg-blue-100 text-blue-600 dark:bg-border-color dark:text-accent px-2 py-1 rounded transition-colors duration-300">{tag}</span>
                                ))}
                            </div>
                            <p className="text-gray-600 dark:text-text-secondary text-sm mb-6 max-h-48 overflow-y-auto transition-colors duration-300">{project.description}</p>
                        </div>
                        <div className="mt-auto flex flex-col sm:flex-row gap-4">
                            {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 text-white dark:bg-accent dark:text-primary font-bold py-2 px-4 rounded-md text-center hover:bg-blue-700 dark:hover:bg-white transition-colors duration-300">
                                Visit Site
                            </a>
                            )}
                            {project.documentationUrl && (
                            <a href={project.documentationUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-blue-600 dark:text-accent border border-blue-600 dark:border-accent font-bold py-2 px-4 rounded-md text-center hover:bg-blue-50 dark:hover:bg-border-color transition-colors duration-300">
                                View Documentation
                            </a>
                            )}
                        </div>
                    </div>
                    <div className="aspect-w-1 aspect-h-1 hidden md:block rounded-r-lg overflow-hidden">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

interface SectionWrapperProps {
  isActive: boolean;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ isActive, children }) => (
  <div
    className={`
      md:absolute md:inset-0 md:transition-transform md:duration-500 md:ease-in-out
      ${isActive ? 'block' : 'hidden md:block'}
      ${isActive ? 'md:translate-x-0' : 'md:translate-x-full'}
    `}
    style={{ willChange: 'transform' }}
  >
    <div className="md:h-full md:overflow-y-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </div>
);


const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(NAV_LINKS[0].href);
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return savedTheme || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const body = document.body;
    if (selectedProject || isChatOpen || isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [selectedProject, isChatOpen, isMenuOpen]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleOpenChat = () => setIsChatOpen(true);
  const handleCloseChat = () => setIsChatOpen(false);

  const sections = {
    '#hello': <Hero />,
    '#ai-interviewer': <AIInterviewerSection onOpenChat={handleOpenChat} />,
    '#projects': <Projects onProjectSelect={handleSelectProject} />,
    '#skills': <Skills />,
    '#experience': <Experience />,
    '#education': (
      <>
        <Education />
        <SponsoringOrgs />
      </>
    ),
  };

  return (
    <div className="bg-white dark:bg-primary text-gray-900 dark:text-text-primary font-sans min-h-screen flex flex-col transition-colors duration-300">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#3B82F61A_1px,transparent_1px)] dark:bg-[radial-gradient(#58a6ff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
         <Header 
            onOpenChat={handleOpenChat} 
            onNavigate={handleNavigate} 
            activeSection={activeSection} 
            theme={theme} 
            toggleTheme={toggleTheme} 
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
        />
      </div>
      <main className="flex-1 container mx-auto max-w-6xl md:relative md:overflow-hidden">
        {Object.entries(sections).map(([id, component]) => (
            <SectionWrapper key={id} isActive={activeSection === id}>
                {component}
                {/* Footer for desktop: visible inside each scrollable section */}
                <div className="hidden md:block">
                  <Footer />
                </div>
            </SectionWrapper>
        ))}
        {/* Footer for mobile: one footer at the very end of the page */}
        <div className="md:hidden px-4 sm:px-6 lg:px-8">
            <Footer />
        </div>
      </main>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      <Chatbot 
        isOpen={isChatOpen} 
        onClose={handleCloseChat}
        onNavigate={(sectionId) => {
          handleNavigate(sectionId);
          handleCloseChat();
        }}
      />
    </div>
  );
};

export default App;