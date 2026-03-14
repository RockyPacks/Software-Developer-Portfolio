import React from 'react';
import { PERSONAL_DETAILS } from '../constants';
import Section from './Section'; // Assuming you have a Section component for consistent styling

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="_contact">
      <div className="mt-8 text-center">
        <p className="text-lg text-text-secondary">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href={`mailto:${PERSONAL_DETAILS.email}`}
            className="text-accent hover:underline"
          >
            {PERSONAL_DETAILS.email}
          </a>
          <a
            href={PERSONAL_DETAILS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
