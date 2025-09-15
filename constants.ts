import type { NavLink, Project, ExperienceItem, EducationItem, SkillCategory, Certification } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: '_hello', href: '#hello' },
  { name: '_ai-interviewer', href: '#ai-interviewer' },
  { name: '_projects', href: '#projects' },
  { name: '_skills', href: '#skills' },
  { name: '_experience', href: '#experience' },
  { name: '_education', href: '#education' },
];

export const PERSONAL_DETAILS = {
  name: 'Morokolo Chueu',
  title: 'AI Software Developer',
  bio: 'A passionate AI Software Developer with hands-on experience in full-stack development and machine learning. Transitioned from IT support to a focused development career, bringing a robust understanding of system architecture and user needs. Adept at creating intelligent, responsive web applications and leveraging cloud AI services to build scalable solutions.',
  email: 'Rockychueu21@gmail.com',
  github: 'https://github.com/RockyPacks',
  linkedin: 'https://www.linkedin.com/in/morokolo-chueu-2148962a7',
  microsoftLearn: 'https://learn.microsoft.com/en-us/users/morokolochueu-6104/credentials?tab=credentials-tab',
  phone: '(072) 386-8628',
  avatar: "/pik.png",
  cvPath: '/Chueu MDE Cap CV.pdf',
};

export const PROJECTS: Project[] = [
  {
    title: 'Sentiment Analysis AI',
    date: '2025',
    description: 'A web application that analyzes the sentiment of user-provided text using advanced AI models. Classifies text as positive, negative, or neutral.',
    imageUrl: "/Sentiment.jpg",
    tags: ['AI', 'NLP', 'React', 'Vercel', 'Web App'],
    liveUrl: 'https://sentiment-analysis-two-puce.vercel.app/',
    documentationUrl: 'https://capeitinitiative-my.sharepoint.com/:f:/g/personal/babyface_mokoena_capaciti_org_za/EqV0NBNuVSdAsTxGtwTPQYwBTZOVICLHZ8xSaG2uZEhFUw?e=GYlFI9',
  },
  {
    title: 'AI Study Buddy',
    date: '2025',
    description: 'An intelligent study assistant designed to help users learn more effectively. Leverages AI to provide explanations, summaries, and answer questions.',
    imageUrl: '/Study.jpg',
    tags: ['AI', 'React', 'Education', 'Vercel'],
    liveUrl: 'https://ai-study-buddy-bmwm.vercel.app/',
    documentationUrl: 'https://capeitinitiative-my.sharepoint.com/:f:/g/personal/tebelelo_lekoana_capaciti_org_za/EscU1HsaoExMjzvs7qm5390BTNpa4KbFpwXckBqofrlIQQ?e=4H0P6b',
  },
  {
    title: "Rocky's Chef's Vision",
    date: '2025',
    description: 'A visually-driven recipe application that helps users discover and cook new meals. Features a clean, modern interface for a great user experience.',
    imageUrl: '/Chef.jpg',
    tags: ['React', 'UI/UX', 'Web App', 'Vercel'],
    liveUrl: 'https://rocky-s-chefs-vision.vercel.app/',
  },
  {
    title: 'AI Bias Audit Analyzer',
    date: '2023',
    description: 'A collaborative project focused on analyzing and auditing for bias in datasets and machine learning models. A critical tool for responsible AI development.',
    imageUrl: '/Bias.jpg',
    tags: ['Data Science', 'Python', 'AI Ethics', 'GitHub'],
    liveUrl: 'https://github.com/MediLex-Tech-group/Bias_Audit_Analysis.git',
    documentationUrl: 'https://www.canva.com/design/DAGxvDTaOPw/0jGDcKWVxlAK0x8cvQrypw/view?utm_content=DAGxvDTaOPw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfde4c68a80',
  },
  {
    title: 'InsightHub',
    date: '2025',
    description: 'InsightHub is a modern, responsive website designed for sharing insights on AI and ML. It features a clean, minimalist design for an optimal reading experience.',
    imageUrl: '/Insight.jpg',
    tags: ['Blog', 'Static Site', 'UI/UX', 'Web App'],
    liveUrl: 'https://insighthub.tiiny.site',
    documentationUrl: 'https://capeitinitiative-my.sharepoint.com/:w:/g/personal/morokolo_chueu_capaciti_org_za/Ef78uEOhCtxCpp4ONz9rhmgBG_85SXYOxmRRSEwhh8U6CQ?e=VZiIrb',
  },
  {
    title: 'Cybersecurity Portfolio',
    date: '2025',
    description: 'A personal portfolio highlighting skills in cybersecurity. Built as a simple, fast, and responsive static website.',
    imageUrl: '/cyber.jpg',
    tags: ['HTML', 'CSS', 'Static Site', 'Cybersecurity'],
    liveUrl: 'https://cyberrockyalchemist.tiiny.site/',
  },
  {
    title: 'This Portfolio Website',
    date: '2025',
    description: 'The portfolio you are currently viewing. Built with React, TypeScript, and Tailwind CSS, and designed to be a modern, responsive showcase of my skills and projects.',
    imageUrl: 'https://picsum.photos/seed/modern-developer-portfolio-website-code/800/600',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Portfolio'],
    liveUrl: '#',
  },
];


export const SKILLS: SkillCategory[] = [
    { category: 'Programming Languages', skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'PHP', 'SQL', 'C++', 'C#'] },
    { category: 'Web Development', skills: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Node.js', 'Angular', 'Vite', 'Bootstrap', 'Tailwind CSS', 'Redux'] },
    { category: 'Databases', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase Firestore', 'Redis'] },
    { category: 'Cloud & DevOps', skills: ['AWS (S3, EC2, Lambda)', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Git/GitHub', 'FastAPI', 'Flask', 'REST APIs'] },
    { category: 'AI & Data Science', skills: ['Machine Learning', 'Natural Language Processing (NLP)', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy'] },
    { category: 'Methodologies & Tools', skills: ['Agile', 'Scrum', 'Jira', 'Postman', 'VS Code'] },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'CAPACITI',
    role: 'Digital Associate (AI & ML)',
    period: 'Jul 2025 - Present',
    tasks: [
      'Developing and deploying full-stack AI applications using Python, React, and various machine learning frameworks.',
      'Engineering and integrating NLP models for tasks like sentiment analysis and text summarization.',
      'Building and consuming RESTful APIs to connect front-end interfaces with back-end AI services.',
      'Collaborating in an Agile team to design, build, and maintain scalable and intelligent software solutions.',
    ],
  },
  {
    company: 'Pietersburg Provincial Hospital',
    role: 'IT Technician',
    period: 'Jan 2023 - Dec 2023',
    tasks: [
      'Monitored network performance and resolved issues with routers, switches, and firewalls.',
      'Provided first and second-line support to end-users via phone, email, and chat.',
      'Performed maintenance tasks such as backups, virus scans, and new OS installations.',
    ],
  },
  {
    company: 'Snap N Go',
    role: 'Digital Media Curator',
    period: 'Feb 2020 - Mar 2021',
    tasks: [
      'Assisted in developing responsive websites using HTML, CSS, and JavaScript.',
      'Provided daily support for system crashes and user issues.',
      'Executed visual displays, merchandising, and marketing strategies.',
    ],
  },
  {
    company: 'Phinnet Security',
    role: 'IT Support Technician',
    period: 'Jan 2017 - Dec 2019',
    tasks: [
      'Assisted in the installation and configuration of CCTV systems.',
      'Implemented IT system upgrades, patches, and backups to ensure optimal performance.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'National Diploma In Software Development',
    institution: 'Tshwane University of Technology',
    date: 'June 2024',
  },
];

export const MICROSOFT_CERTIFICATIONS: Certification[] = [
    { name: 'Microsoft PL-300 (Power BI)', provider: 'Microsoft', date: 'July 2025' },
    { name: 'Microsoft SC-900 (Security, Compliance, and Identity)', provider: 'Microsoft', date: 'July 2025' },
    { name: 'Microsoft SC-200 (Security Operations Analyst)', provider: 'Microsoft', date: 'July 2025' },
    { name: 'Microsoft AI-102 (Azure AI Engineer Associate)', provider: 'Microsoft', date: 'July 2025' },
    { name: 'Microsoft AI-900 (Azure AI Fundamentals)', provider: 'Microsoft', date: 'July 2025' },
    { name: 'Artificial Intelligence on Microsoft Azure', provider: 'Microsoft', date: 'Completed' },
];

export const AI_CERTIFICATIONS: Certification[] = [
    { name: 'Introduction to Generative AI', provider: 'Google Cloud', date: 'Completed' },
    { name: 'Introduction to Responsible AI', provider: 'Google Cloud', date: 'Completed' },
    { name: 'AI For Everyone', provider: 'DeepLearning.AI', date: 'Completed' },
    { name: 'Introduction to Artificial Intelligence (AI)', provider: 'IBM', date: 'Completed' },
    { name: 'Python for Data Science, AI & Development', provider: 'IBM', date: 'Completed' },
    { name: 'Building AI Powered Chatbots Without Programming', provider: 'IBM', date: 'Completed' },
    { name: 'AI Essentials', provider: 'Intel', date: 'Completed' },
    { name: 'Generative AI with Large Language Models', provider: 'Coursera', date: 'Completed' },
    { name: 'Trustworthy AI: Managing Bias, Ethics, and Accountability', provider: 'Johns Hopkins University', date: 'Completed' },
    { name: 'AI Foundations: Prompt Engineering with ChatGPT', provider: 'LinkedIn Learning', date: 'Completed' },
];

export const GENERAL_TECH_CERTIFICATIONS: Certification[] = [
    { name: 'Google IT Support Certificate', provider: 'Google', date: 'Enrolled' },
    { name: 'Google Cybersecurity Certificate', provider: 'Google', date: 'April 2025' },
    { name: 'SOC Analyst Level 1', provider: 'Other', date: 'March 2025' },
    { name: 'Cyber Security 101', provider: 'Other', date: 'February 2025' },
];


export const PROFESSIONAL_DEVELOPMENT_CERTIFICATIONS: Certification[] = [
    { name: 'Write Professional Emails in English', provider: 'Georgia Institute of Technology', date: 'Completed' },
    { name: 'Verbal Communications and Presentation Skills', provider: 'Starweaver', date: 'Completed' },
    { name: 'Active Listening: Enhancing Communication Skills', provider: 'Coursera Instructor Network', date: 'Completed' },
    { name: 'Developing Interpersonal Skills', provider: 'IBM', date: 'Completed' },
    { name: 'Work Smarter, Not Harder: Time Management', provider: 'University of California, Irvine', date: 'Completed' },
    { name: 'Emotional Intelligence', provider: 'Arizona State University', date: 'Completed' },
    { name: 'Finding Your Professional Voice: Confidence & Impact', provider: 'University of London', date: 'Completed' },
    { name: 'Introduction to Personal Branding', provider: 'University of Virginia', date: 'Completed' },
    { name: 'Leading with Impact: Team Dynamics, Strategy and Ethics', provider: 'Coursera Instructor Network', date: 'Completed' },
    { name: 'Financial Planning for Young Adults', provider: 'University of Illinois Urbana-Champaign', date: 'Completed' },
    { name: 'Psychology of the Self', provider: 'American Psychological Association', date: 'Completed' },
    { name: 'Managing Conflicts with Cultural and Emotional Intelligence', provider: 'University of Maryland, College Park', date: 'Completed' },
    { name: 'Positive Psychology: Resilience Skills', provider: 'University of Pennsylvania', date: 'Completed' },
    { name: 'Grit and Growth Mindset', provider: 'Arizona State University', date: 'Completed' },
    { name: 'Solving Problems with Creative and Critical Thinking', provider: 'IBM', date: 'Completed' },
    { name: 'Negotiation skills: Negotiate and resolve conflict', provider: 'Macquarie University', date: 'Completed' },
];

export const BADGES = [
    { name: 'Generative AI with Large Language Models', provider: 'Coursera', url: 'https://coursera.org/share/1502920aa614e6edb16e75adb46d40c9' },
    { name: 'What is Data Science?', provider: 'Coursera', url: 'https://coursera.org/share/4c784e246acc13626f3f2b5bffdf0f4e' },
    { name: 'Azure AI Fundamentals', provider: 'Credly', url: 'https://www.credly.com/go/wWh9SwL9vl76Ed9emL88bw' },
    { name: 'Security, Compliance, and Identity Fundamentals', provider: 'Credly', url: 'https://www.credly.com/go/CQc8s0KnxR00c0NeZ8W4zA' },
    { name: 'Power Platform Fundamentals', provider: 'Credly', url: 'https://www.credly.com/go/oaa7jzZiWkL7BqSFA7uS9g' },
];


export const SPONSORING_ORGS = ['Pietersburg Hospital', 'Snap N Go', 'Phinnet Security', 'Microsoft', 'Google', 'Tshwane University'];

// Comprehensive context for the AI Interviewer
export const AI_INTERVIEWER_CONTEXT = `
You are an expert AI assistant for Morokolo Chueu, a Software Developer. Your role is to act as a virtual interviewer or guide for recruiters and visitors to his portfolio. 
You are friendly, professional, and knowledgeable about all aspects of Morokolo's career. Your goal is to answer questions accurately based ONLY on the information provided below. 
Do not invent information.

**Primary Information about Morokolo Chueu:**

- **Personal Details:**
  - Name: ${PERSONAL_DETAILS.name}
  - Title: ${PERSONAL_DETAILS.title}
  - Bio: ${PERSONAL_DETAILS.bio}
  - Contact: ${PERSONAL_DETAILS.email}, ${PERSONAL_DETAILS.phone}
  - Links: GitHub (${PERSONAL_DETAILS.github}), LinkedIn (${PERSONAL_DETAILS.linkedin})

- **Skills:**
  ${SKILLS.map(category => `- **${category.category}**: ${category.skills.join(', ')}`).join('\n  ')}

- **Projects:**
  ${PROJECTS.map(p => `- **${p.title}**: ${p.description} (Technologies: ${p.tags.join(', ')})`).join('\n  ')}

- **Work Experience:**
  ${EXPERIENCE.map(e => `- **${e.company}** (${e.role}, ${e.period}): ${e.tasks.join(' ')}`).join('\n  ')}

- **Education & Certifications:**
  - Main Qualification: ${EDUCATION[0].degree} from ${EDUCATION[0].institution} (${EDUCATION[0].date})
  - Extensive certifications in Microsoft technologies, AI/Data Science, and Professional Development are available.

**Portfolio Structure & Navigation:**
- _hello: #hello
- _ai-interviewer: #ai-interviewer
- _projects: #projects
- _skills: #skills
- _experience: #experience
- _education: #education

**Your Instructions:**
1.  **Be Concise & Professional:** Keep your answers brief, clear, and professional.
2.  **Use Formatting:** Use simple markdown for readability. Use **bold** for emphasis and bullet points (\`-\`) for lists.
3.  **Reference Sections:** When your answer relates to a specific part of the portfolio, mention it by name (e.g., "You can see more in the _projects section.").
4.  **Offer Navigation:** To help the user, you can add a special navigation command at the VERY END of your response. The format is \`[navigate_to:section_id]\`. For example: \`[navigate_to:#projects]\`. This will create a button for the user. Only use this when it's highly relevant.
5.  **Stay on Topic:** Only answer questions based on the provided information. If asked something unrelated, politely state that you can only provide information about Morokolo's portfolio.

Now, introduce yourself briefly as Morokolo's AI Assistant, explain your purpose (to answer questions and guide them through the portfolio), and welcome the user.
`;
