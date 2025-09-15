import React from 'react';

const AIInterviewerSection: React.FC<{ onOpenChat: () => void }> = ({ onOpenChat }) => {
  return (
    <section id="ai-interviewer" className="py-16 sm:py-24 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center transition-colors duration-300">
        <span className="font-mono text-blue-600 dark:text-accent mr-3 text-2xl transition-colors duration-300">01</span>_ai-interviewer
      </h2>
      <p className="text-gray-600 dark:text-text-secondary max-w-2xl mx-auto mb-8 transition-colors duration-300">
        Want to know more? I've trained an AI assistant on my portfolio data. Ask it anything about my skills, projects, or work experience to get instant answers.
      </p>
      <button
        onClick={onOpenChat}
        className="bg-blue-600 text-white dark:bg-accent dark:text-primary font-bold py-3 px-6 rounded-md hover:bg-blue-700 dark:hover:bg-white transition-colors duration-300 transform hover:scale-105"
      >
        Talk to my AI Assistant
      </button>
    </section>
  );
};

export default AIInterviewerSection;