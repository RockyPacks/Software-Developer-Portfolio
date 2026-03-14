import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Section;
