import React, { useState, useEffect } from 'react';
import { EDUCATION, MICROSOFT_CERTIFICATIONS, AI_CERTIFICATIONS, GENERAL_TECH_CERTIFICATIONS, PROFESSIONAL_DEVELOPMENT_CERTIFICATIONS, BADGES } from '../constants';
import type { Certification } from '../types';

// --- Core Tech Provider Logos ---
const MicrosoftLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.025 10.125H.5V.625h9.525v9.5z" fill="#F25022"/>
    <path d="M20.525 10.125h-9.5V.625h9.5v9.5z" fill="#7FBA00"/>
    <path d="M10.025 20.625H.5v-9.5h9.525v9.5z" fill="#00A4EF"/>
    <path d="M20.525 20.625h-9.5v-9.5h9.5v9.5z" fill="#FFB900"/>
  </svg>
);
const GoogleLogo = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);
const IbmLogo = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 26H12V20.5H8V26H6V18H14V26zM22.5 24H20V22.5H18V21H20V19.5H18V18H20V19.5H22.5V21H20V22.5H22.5V24zM26 26H24V18H26V26z"/>
        <path d="M18,14h2V6h-2V14zM24,14h2V6h-2V14zM6,14h2V6H6V14zM12,14h2V6h-2V14z"/>
        <path d="M28,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4Zm0,22H4V6H28Z"/>
    </svg>
);
const IntelLogo = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.726 6.313v11.374h-5.467V6.313h5.467zm-7.31 0v11.374h-5.467V6.313h5.467zM12 0L2.274 3.06v15.22L12 24l9.726-5.72V3.06L12 0zM20.25 18.28L12 22.88l-8.25-4.6v-12.2L12 1.12l8.25 4.6v12.56z"/>
    </svg>
);

// --- Creative & Thematic Provider Logos ---
const DeepLearningAILogo = () => (
  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
    <path d="M12 9V6M9 12H6m-2.8-4.2L5 9m-1.8 4.8L5 15m10-6l1.8-1.8M15 12h3m-1.2 4.2L19 15m-7 6v-3"/>
  </svg>
);
const CourseraLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.28 14.28L6 11.51V10h2.49l2.23 2.77L15.51 10H18v1.51l-4.72 4.77h-2.56z" fill="currentColor"/>
  </svg>
);
const JohnsHopkinsLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V13H5V6.3l7-3.11v10.8z"/>
  </svg>
);
const GeorgiaTechLogo = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3h12v2H6zm0 16h12v2H6zM8 7h2v10H8zm6 0h2v10h-2z" />
    </svg>
);
const PennLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L4 5v6c0 5.52 3.58 10 8 10s8-4.48 8-10V5l-8-2zm-1 13.5V11h2v5.5H11zm0-7.5V5h2v4H11z" />
  </svg>
);
const UvaLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 21V3h10v18M7 9h10m-5 12v-6" />
  </svg>
);
const ApaLogo = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 20V4m-4 8h8m-8 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0z" />
    </svg>
);
const CybersecurityLogo = () => (
    <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
);
const StarweaverLogo = () => (
    <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        <path d="M2 16l2.34-1.34M22 16l-2.34-1.34M12 22v-3.33M5.4 5.4l1.34 2.34M18.6 5.4l-1.34 2.34"/>
    </svg>
);
const UciLogo = () => (
    <svg className="w-6 h-6 text-blue-800 dark:text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 5v14h2V5H7zm5 0v14h2V5h-2zm5.02 0v2h-3v10h3v2h-5V5h5.02z"/>
    </svg>
);
const AsuLogo = () => (
    <svg className="w-6 h-6 text-red-800 dark:text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v10m-4 0h8M9 12a3 3 0 0 0-3 3v4h12v-4a3 3 0 0 0-3-3M6 22h12"/>
    </svg>
);
const UlondonLogo = () => (
    <svg className="w-6 h-6 text-blue-900 dark:text-blue-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 5v14h2V5H7zm4 0v14h2v-2h4V7h-4V5h-2zm2 4h2v7h-2v-7z"/>
    </svg>
);
const UiucLogo = () => (
    <svg className="w-6 h-6 text-blue-900 dark:text-orange-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 5h10v2.5H7zm0 11.5h10V19H7zM10.5 7.5h3v9h-3z"/>
    </svg>
);
const UmdLogo = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-current text-red-600" d="M12 4.31V12H5.61V7.5L12 4.31zM12 4.31L18.39 7.5V12H12V4.31z"/>
        <path className="fill-current text-yellow-400" d="M5.61 12H12v8.94C7.72 19.84 5 15.68 5 11v1z"/>
        <path className="fill-current text-black dark:text-white" d="M12 12h7V11c0-4.68-2.72-8.84-7-9.94v10.94z"/>
        <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z" fill="none" stroke="currentColor" className="stroke-current text-gray-400 dark:text-gray-600" strokeWidth=".5"/>
    </svg>
);
const MacquarieLogo = () => (
    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-6 3H2v2h4zm16 0h-4v2h4zM11 2h2v5h-2zm-6.78 3.22l-1.42 1.42 3.54 3.54 1.42-1.42zm15.18 0l-1.42 1.42-3.54 3.54 1.42-1.42zM11 17h2v5h-2zm-6.78-1.78l-1.42-1.42 3.54-3.54 1.42 1.42zm15.18 0l-1.42-1.42-3.54-3.54 1.42 1.42z"/>
    </svg>
);
const CredlyLogo = () => (
    <svg className="w-6 h-6" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 58.7C17.3 58.7 5.3 46.7 5.3 32S17.3 5.3 32 5.3s26.7 12 26.7 26.7-12 26.7-26.7 26.7z" fill="#FF6B00"/>
      <path d="M32 14.7c-9.6 0-17.3 7.8-17.3 17.3s7.8 17.3 17.3 17.3 17.3-7.8 17.3-17.3-7.7-17.3-17.3-17.3zm0 29.3c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z" fill="#FF6B00"/>
    </svg>
);
const TryHackMeLogo = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.727,15.787c-0.583,4.282-4.113,7.52-8.381,7.52c-4.665,0-8.455-3.79-8.455-8.455 c0-4.321,3.238-7.851,7.52-8.381" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12.111,12.111l4.318,4.318" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M16.429,12.111L7.793,3.474L3.474,7.793l8.637,8.637" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);


// --- Thematic Icons for specific certs ---
const CreativeThinkingLogo = () => (
  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 1.54.83 2.9 2 3.72V12h5v-1.78c1.17-.82 2-2.18 2-3.72A4.5 4.5 0 0 0 12 2z" />
    <path d="M9 14v2a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v-2" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="9" y1="12" x2="15" y2="12" />
  </svg>
);
const InterpersonalSkillsLogo = () => (
  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="6" r="2"></circle>
    <path d="M9 8h1a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h2a1 1 0 0 0 1-1V9a2 2 0 0 0-2-2h-1"></path>
    <circle cx="17" cy="15" r="2"></circle>
    <path d="M15 17h-1a2 2 0 0 1-2-2V9a2 2 0 0 0-2-2H8a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h1"></path>
  </svg>
);
const ChatbotLogo = () => (
  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M10 10h.01M14 10h.01" />
  </svg>
);
const AIIntroLogo = () => (
  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a4 4 0 0 0-4 4v2c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V6a4 4 0 0 0-4-4Z"/>
    <path d="M4 10c0 4.4 3.6 8 8 8s8-3.6 8-8"/>
    <path d="M4 14c0 2.2 1.8 4 4 4h8a4 4 0 0 0 4-4"/>
    <path d="M4 18c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2"/>
  </svg>
);
const PersonalBrandingLogo = () => (
  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="3" />
    <path d="M12 11a5 5 0 0 0-5 5v1h10v-1a5 5 0 0 0-5-5z" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);
const PythonForDSLogo = () => (
  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4z"/>
    <path d="M12 16a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4z"/>
    <path d="M9 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
    <path d="M15 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
    <path d="M16.5 14.5c.33-1 .5-2.5.5-2.5s-.17-1.5-.5-2.5"/>
    <path d="M7.5 9.5c-.33 1-.5 2.5-.5 2.5s.17 1.5.5 2.5"/>
  </svg>
);

const SocAnalystLogo = () => (
  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    {/* Shield from CybersecurityLogo */}
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    {/* TryHackMe elements, scaled down and centered */}
    <g transform="scale(0.5) translate(12, 11)">
      <path d="M21.727,15.787c-0.583,4.282-4.113,7.52-8.381,7.52c-4.665,0-8.455-3.79-8.455-8.455 c0-4.321,3.238-7.851,7.52-8.381" stroke="currentColor" strokeWidth="3" />
      <path d="M12.111,12.111l4.318,4.318" stroke="currentColor" strokeWidth="3" />
      <path d="M16.429,12.111L7.793,3.474L3.474,7.793l8.637,8.637" stroke="currentColor" strokeWidth="3" />
    </g>
  </svg>
);

const GenericCertLogo = () => (
    <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);


const CertificateCard: React.FC<{ cert: Certification }> = ({ cert }) => {
    const renderLogo = () => {
        // Specific name-based overrides for creative icons
        switch (cert.name) {
            case 'Solving Problems with Creative and Critical Thinking': return <CreativeThinkingLogo />;
            case 'Developing Interpersonal Skills': return <InterpersonalSkillsLogo />;
            case 'Building AI Powered Chatbots Without Programming': return <ChatbotLogo />;
            case 'Introduction to Artificial Intelligence (AI)': return <AIIntroLogo />;
            case 'Introduction to Personal Branding': return <PersonalBrandingLogo />;
            case 'Python for Data Science, AI & Development': return <PythonForDSLogo />;
            case 'SOC Analyst Level 1': return <SocAnalystLogo />;
        }

        // Fallback to provider-based logos
        switch (cert.provider) {
            // Core Tech
            case 'Microsoft': return <MicrosoftLogo />;
            case 'Google': return <GoogleLogo />;
            case 'Google Cloud': return <GoogleLogo />;
            case 'IBM': return <IbmLogo />;
            case 'Intel': return <IntelLogo />;
            case 'DeepLearning.AI': return <DeepLearningAILogo />;
            case 'Coursera': return <CourseraLogo />;
            case 'Coursera Instructor Network': return <CourseraLogo />;
            case 'Johns Hopkins University': return <JohnsHopkinsLogo />;
            case 'Other': return <CybersecurityLogo />;

            // Universities & Institutions
            case 'Georgia Institute of Technology': return <GeorgiaTechLogo />;
            case 'University of California, Irvine': return <UciLogo />;
            case 'Arizona State University': return <AsuLogo />;
            case 'University of London': return <UlondonLogo />;
            case 'University of Virginia': return <UvaLogo />;
            case 'University of Illinois Urbana-Champaign': return <UiucLogo />;
            case 'American Psychological Association': return <ApaLogo />;
            case 'University of Maryland, College Park': return <UmdLogo />;
            case 'University of Pennsylvania': return <PennLogo />;
            case 'Macquarie University': return <MacquarieLogo />;
            case 'Starweaver': return <StarweaverLogo />;

            default: return <GenericCertLogo />;
        }
    };
    return (
        <div className="bg-white dark:bg-secondary p-4 rounded-lg border border-gray-200 dark:border-border-color flex items-start space-x-4 transition-all duration-300 hover:shadow-md hover:border-blue-500 dark:hover:border-accent">
            <div className="flex-shrink-0 pt-1">{renderLogo()}</div>
            <div>
                <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">{cert.name}</h3>
                <p className="text-sm text-gray-500 dark:text-text-secondary transition-colors duration-300">{cert.date}</p>
            </div>
        </div>
    );
};

interface Badge {
  name: string;
  provider: string;
  url: string;
}

const BadgeCard: React.FC<{ badge: Badge }> = ({ badge }) => {
  const getLogo = (provider: string) => {
    switch(provider) {
      case 'Coursera': return <CourseraLogo />;
      case 'Credly': return <CredlyLogo />;
      default: return <GenericCertLogo />;
    }
  };

  return (
    <div className="bg-white dark:bg-secondary p-4 rounded-lg border border-gray-200 dark:border-border-color flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-accent dark:hover:border-accent group">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 pt-1 text-gray-800 dark:text-white">{getLogo(badge.provider)}</div>
        <div>
            <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">{badge.name}</h3>
            <p className="text-sm text-gray-500 dark:text-text-secondary transition-colors duration-300">Provider: {badge.provider}</p>
        </div>
      </div>
      <a 
        href={badge.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 w-full text-center bg-gray-100 dark:bg-border-color text-sm font-semibold py-2 rounded-md text-gray-700 dark:text-text-primary group-hover:bg-blue-600 dark:group-hover:bg-accent group-hover:text-white dark:group-hover:text-primary transition-colors duration-300"
      >
        View Credential
      </a>
    </div>
  );
};


const Education: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
        return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  useEffect(() => {
      const observer = new MutationObserver(() => {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
      });
      observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class'],
      });
      return () => observer.disconnect();
  }, []);
    
  const tryHackMeTheme = isDarkMode ? 'dark' : 'light';
  const tryHackMeSrc = `https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4166756&theme=${tryHackMeTheme}`;

  return (
    <section id="education" className="py-16 sm:py-24 pb-8 sm:pb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center transition-colors duration-300">
        <span className="font-mono text-blue-600 dark:text-accent mr-3 text-2xl transition-colors duration-300">05</span>_education
      </h2>
      
      {/* Main Qualification */}
      <div className="mb-12">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="bg-white dark:bg-secondary p-6 rounded-lg border-2 border-blue-600 dark:border-accent transition-colors duration-300 shadow-lg shadow-blue-500/10 dark:shadow-accent/10">
            <p className="text-sm font-mono text-gray-500 dark:text-text-secondary mb-1 transition-colors duration-300">{edu.date}</p>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{edu.degree}</h3>
            <p className="text-blue-600 dark:text-accent font-semibold transition-colors duration-300">{edu.institution}</p>
          </div>
        ))}
      </div>

      {/* Badges & Credentials Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center transition-colors duration-300">
          Badges & Credentials
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BADGES.map((badge, index) => (
            <BadgeCard key={index} badge={badge} />
          ))}
           <div className="bg-white dark:bg-secondary p-4 rounded-lg border border-gray-200 dark:border-border-color flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-accent dark:hover:border-accent group">
            <div>
              <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 text-gray-800 dark:text-white"><TryHackMeLogo /></div>
                  <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">TryHackMe Profile</h3>
                      <p className="text-sm text-gray-500 dark:text-text-secondary transition-colors duration-300">Cybersecurity Skills Showcase</p>
                  </div>
              </div>
            </div>
            <div className="mt-4 rounded-md overflow-hidden border border-gray-200 dark:border-border-color">
                  <iframe 
                    src={tryHackMeSrc} 
                    style={{ border: 'none', width: '100%', height: '135px', display: 'block' }}
                    title="TryHackMe Profile Badge"
                    loading="lazy"
                ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Microsoft Certifications */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center transition-colors duration-300">
          Microsoft Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MICROSOFT_CERTIFICATIONS.map((cert, index) => (
            <CertificateCard key={index} cert={cert} />
          ))}
        </div>
      </div>

      {/* AI & Data Science Certifications */}
       <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center transition-colors duration-300">
          AI & Data Science Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_CERTIFICATIONS.map((cert, index) => (
            <CertificateCard key={index} cert={cert} />
          ))}
        </div>
      </div>

      {/* General Technical Certifications */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center transition-colors duration-300">
          General Technical Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GENERAL_TECH_CERTIFICATIONS.map((cert, index) => (
            <CertificateCard key={index} cert={cert} />
          ))}
        </div>
      </div>

      {/* Professional Development Certifications */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center transition-colors duration-300">
          Professional Development & Soft Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFESSIONAL_DEVELOPMENT_CERTIFICATIONS.map((cert, index) => (
            <CertificateCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;