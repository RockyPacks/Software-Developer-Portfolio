import React from 'react';
import { NAV_LINKS, PERSONAL_DETAILS } from '../constants';
import ThemeToggle from './ThemeToggle';

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
  onOpenChat: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, onNavigate, onOpenChat }) => {
  const handleLinkClick = (href: string) => {
    onNavigate(href);
    onClose();
  };
  
  const handleAIClick = () => {
    onOpenChat();
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-primary z-50 flex flex-col animate-fade-in md:hidden">
      <div className="flex items-center justify-between h-16 border-b border-gray-200 dark:border-border-color px-4">
        <span className="text-gray-900 dark:text-white font-medium">{PERSONAL_DETAILS.name}</span>
        <button onClick={onClose} className="p-2 text-gray-500 dark:text-text-secondary">
          <CloseIcon />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
        {NAV_LINKS.map((link, index) => (
          <button
            key={link.name}
            onClick={() => link.name === '_ai-interviewer' ? handleAIClick() : handleLinkClick(link.href)}
            className="text-2xl font-mono text-gray-800 dark:text-text-primary transition-colors hover:text-blue-600 dark:hover:text-accent"
            style={{ animation: `slideUp 0.3s ease-out ${index * 0.05 + 0.2}s backwards` }}
          >
            {link.name}
          </button>
        ))}
        <a
          href={PERSONAL_DETAILS.cvPath}
          download
          className="flex items-center text-lg font-mono text-gray-500 dark:text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors"
           style={{ animation: `slideUp 0.3s ease-out ${NAV_LINKS.length * 0.05 + 0.2}s backwards` }}
        >
          <DownloadIcon />
          _download-cv
        </a>
      </nav>
    </div>
  );
};


interface HeaderProps {
  onOpenChat: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenChat, onNavigate, activeSection, theme, toggleTheme, isMenuOpen, setIsMenuOpen }) => {
  const handleNavClick = (href: string) => {
    onNavigate(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-secondary/80 backdrop-blur-sm transition-colors duration-300">
        <div className="flex items-center justify-between h-16 border-b border-gray-200 dark:border-border-color px-4 transition-colors duration-300">
          <div className="flex items-center space-x-8">
            <span className="text-gray-900 dark:text-white font-medium transition-colors duration-300">{PERSONAL_DETAILS.name}</span>
            <nav className="hidden md:flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => link.name === '_ai-interviewer' ? onOpenChat() : handleNavClick(link.href)}
                  className={`text-sm font-mono transition-colors ${
                    activeSection === link.href ? 'text-gray-900 dark:text-white border-b-2 border-blue-600 dark:border-accent' : 'text-gray-500 dark:text-text-secondary hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <a
              href={PERSONAL_DETAILS.cvPath}
              download
              className="hidden sm:flex items-center text-sm font-mono text-gray-500 dark:text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <DownloadIcon />
              _download-cv
            </a>
            <img
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-600 dark:border-accent transition-colors duration-300 hidden sm:block"
              src={PERSONAL_DETAILS.avatar}
              alt="Profile Avatar"
            />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-gray-500 dark:text-text-secondary md:hidden"
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      <MobileNav 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={onNavigate}
        onOpenChat={onOpenChat}
      />
    </>
  );
};

export default Header;