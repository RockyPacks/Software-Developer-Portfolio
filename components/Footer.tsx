import React from 'react';
import { PERSONAL_DETAILS } from '../constants';

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MicrosoftLearnIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-border-color mt-16 py-8 pb-16 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-center sm:text-left">
            <p className="font-bold text-gray-900 dark:text-white transition-colors duration-300">{PERSONAL_DETAILS.name}</p>
            <p className="text-sm text-gray-500 dark:text-text-secondary transition-colors duration-300">{PERSONAL_DETAILS.email}</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href={PERSONAL_DETAILS.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors"><GitHubIcon /></a>
          <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors"><LinkedInIcon /></a>
          <a href={PERSONAL_DETAILS.microsoftLearn} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Microsoft Learn Profile"><MicrosoftLearnIcon /></a>
          <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-gray-500 dark:text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors"><MailIcon /></a>
        </div>
      </div>
      <div className="text-center text-gray-400 dark:text-text-secondary text-xs mt-8 transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} Morokolo Chueu. All rights reserved.</p>
        <p>Built with React & Tailwind CSS. Inspired by modern developer portfolios.</p>
      </div>
    </footer>
  );
};

export default Footer;