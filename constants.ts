import type { NavLink, Project, ExperienceItem, EducationItem, SkillCategory, Certification } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: '_hello', href: '#hello' },
  { name: '_projects', href: '#projects' },
  { name: '_skills', href: '#skills' },
  { name: '_experience', href: '#experience' },
  { name: '_education', href: '#education' },
  { name: '_contact', href: '#contact' },
];

export const PERSONAL_DETAILS = {
  name: 'Morokolo Chueu',
  title: 'AI Software Developer',
  bio: 'A passionate AI Software Developer with hands-on experience in full-stack development and machine learning. Transitioned from IT support to a focused development career, bringing a robust understanding of system architecture and user needs. Adept at creating intelligent, responsive web applications and leveraging cloud AI services to build scalable solutions.',
  email: 'Rockychueu21@gmail.com',
  github: 'https://github.com/RockyPacks',
  linkedin: 'https://www.linkedin.com/in/morokolo-chueu-2148962a7',
  microsoftLearn: 'https://learn.microsoft.com/en-us/users/morokolochueu-6104/credentials?tab=credentials-tab',
  coursera: 'https://www.coursera.org/user/3a76038132199d285b8160f47513d13',
  phone: '(072) 386-8628',
  whatsapp: 'https://wa.me/27723868628',
  avatar: '/pik.png',
  cvPath: '/Morokolo_Chueu_Software_Engineer.pdf',
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
    date: '2025',
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
    { name: 'Microsoft PL-300 (Power BI)', provider: 'Microsoft', date: 'July 2025', credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-za/MorokoloChueu-6104/4BE407359E2C41B2?sharingId=FE6E2CC7FBABF2AB', imageUrl: '/Power Bi.pdf' },
    { name: 'Microsoft SC-900 (Security, Compliance, and Identity)', provider: 'Microsoft', date: 'July 2025', credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-za/MorokoloChueu-6104/7BE9C64E9A4C17C?sharingId=FE6E2CC7FBABF2AB', imageUrl: '/Security, Compliance, and Identity Fundament.pdf' },
    { name: 'Microsoft SC-200 (Security Operations Analyst)', provider: 'Microsoft', date: 'July 2025', credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-za/MorokoloChueu-6104/2A5145765BC89EFF?sharingId=FE6E2CC7FBABF2AB', imageUrl: '/Security Operations Analyst Associate.pdf' },
    { name: 'Microsoft AI-102 (Azure AI Engineer Associate)', provider: 'Microsoft', date: 'July 2025', credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-za/MorokoloChueu-6104/9707FB96ED70C037?sharingId=FE6E2CC7FBABF2AB', imageUrl: '/AI Associate.pdf' },
    { name: 'Microsoft AI-900 (Azure AI Fundamentals)', provider: 'Microsoft', date: 'July 2025', credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-za/MorokoloChueu-6104/9AA4E9538BE0395A?sharingId=FE6E2CC7FBABF2AB', imageUrl: '/Azure AI Fundamentals.pdf' },
    { name: 'Artificial Intelligence on Microsoft Azure', provider: 'Microsoft', date: 'Completed', imageUrl: '/Artificial Intelligence on Microsoft Azure.pdf', credentialUrl: 'https://coursera.org/share/a93393703a81993c6ac43b1e7cbe8e59' },
];

export const AI_CERTIFICATIONS: Certification[] = [
    { name: 'Introduction to Generative AI', provider: 'Google Cloud', date: 'Completed', imageUrl: '/Introduction to Generative (AI).pdf', credentialUrl: 'https://coursera.org/share/d64505fc330e0aaae6f40740eee62f9c' },
    { name: 'Introduction to Responsible AI', provider: 'Google Cloud', date: 'Completed', imageUrl: '/Introduction to Responsible AI.pdf', credentialUrl: 'https://coursera.org/share/f9c0dbcbe06038a01c1b7307e07238a5' },
    { name: 'AI For Everyone', provider: 'DeepLearning.AI', date: 'Completed', imageUrl: '/AI For Everyone.pdf', credentialUrl: 'https://coursera.org/share/d940799ef0a8943a4ccaf335f7ac8013' },
    { name: 'Introduction to Artificial Intelligence (AI)', provider: 'IBM', date: 'Completed', imageUrl: '/Introduction to Artificial Intelligence (AI).pdf', credentialUrl: 'https://coursera.org/share/78a7f4915df0781cfde2655826ed7c24' },
    { name: 'Python for Data Science, AI & Development', provider: 'IBM', date: 'Completed', imageUrl: '/Python for Data Science, AI & Development.pdf', credentialUrl: 'https://coursera.org/share/8ae1711fe1a912b7eeb9fc7d3804f664' },
    { name: 'Building AI Powered Chatbots Without Programming', provider: 'IBM', date: 'Completed', imageUrl: '/Building AI powered Chatbot without programming.pdf', credentialUrl: 'https://coursera.org/share/34591ffed66fda7da93c74d4ad4959f7' },
    { name: 'AI Essentials', provider: 'Intel', date: 'Completed', imageUrl: '/AI Essentials.pdf', credentialUrl: 'https://coursera.org/share/773dce8cc37adbbeeabf38ce8175a5cf' },
    { name: 'Generative AI with Large Language Models', provider: 'Coursera', date: 'Completed', imageUrl: '/Generative AI with Large Language Models.pdf', credentialUrl: 'https://coursera.org/share/9820e7f9ecb2caed9cd4dfc2b2a83d42' },
    { name: 'Trustworthy AI: Managing Bias, Ethics, and Accountability', provider: 'Johns Hopkins University', date: 'Completed', imageUrl: '/Trustworthy AI Managing Bias , Ethics , and Accountability.pdf', credentialUrl: 'https://coursera.org/share/c8b74ac0f5610a1d7cceade40c00ff6e' },
    { name: 'AI Foundations: Prompt Engineering with ChatGPT', provider: 'LinkedIn Learning', date: 'Completed', imageUrl: '/AI Foundations Prompt Engineering with ChatGPT.pdf', credentialUrl: 'https://coursera.org/share/bb41a80d2bea3ddc7019a029e670774d' },
];

export const GENERAL_TECH_CERTIFICATIONS: Certification[] = [
    { name: 'Google IT Support Certificate', provider: 'Google', date: 'Enrolled' },
    { name: 'Google Cybersecurity Certificate', provider: 'Google', date: 'April 2025', credentialUrl: 'https://coursera.org/share/29e581b34db37efc0e25ffd65aabb4f7', imageUrl: '/Google cybersec.pdf' },
    { name: 'SOC Analyst Level 1', provider: 'Other', date: 'March 2025', credentialUrl: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-L25UIMJFZF.pdf', imageUrl: '/SOC level 1.pdf' },
    { name: 'Cyber Security 101', provider: 'Other', date: 'February 2025', credentialUrl: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-GDZ1AQYPLX.pdf', imageUrl: '/Cyber security 101.pdf' },
];


export const PROFESSIONAL_DEVELOPMENT_CERTIFICATIONS: Certification[] = [
    { name: 'Write Professional Emails in English', provider: 'Georgia Institute of Technology', date: 'Completed', imageUrl: '/Write professional emails in english.pdf', credentialUrl: 'https://coursera.org/share/73585a3c3a2aaa7e3f485b80fc1e7667' },
    { name: 'Verbal Communications and Presentation Skills', provider: 'Starweaver', date: 'Completed', imageUrl: '/Verbal Communications and Presentation Skills.pdf', credentialUrl: 'https://coursera.org/share/af1442191183b1ab65a5b342a00a96f3' },
    { name: 'Active Listening: Enhancing Communication Skills', provider: 'Coursera Instructor Network', date: 'Completed', imageUrl: '/Active Listening Enhancing Communication Skills.pdf', credentialUrl: 'https://coursera.org/share/5e9f755fe900c133fe1431935fe3a396' },
    { name: 'Developing Interpersonal Skills', provider: 'IBM', date: 'Completed', imageUrl: '/Developing Interpersonal Skills.pdf', credentialUrl: 'https://coursera.org/share/f3229bd281f2bdafbf97e528fd1e39db' },
    { name: 'Work Smarter, Not Harder: Time Management', provider: 'University of California, Irvine', date: 'Completed', imageUrl: '/Work Smarter, Not Harder Time Management for Personal and Proffessional Prductivity.pdf', credentialUrl: 'https://coursera.org/share/4ab541f26bf5a9a1571a71a1dab6216f' },
    { name: 'Emotional Intelligence', provider: 'Arizona State University', date: 'Completed', imageUrl: '/Emotional Intelligence.pdf', credentialUrl: 'https://coursera.org/share/c53656bf23580245f4f04a93cff23f98' },
    { name: 'Finding Your Professional Voice: Confidence & Impact', provider: 'University of London', date: 'Completed', imageUrl: '/Finding Your Professional Voice Confidence  Ethics.pdf', credentialUrl: 'https://coursera.org/share/5e1b512f3e198a94260bf30187bf6e93' },
    { name: 'Introduction to Personal Branding', provider: 'University of Virginia', date: 'Completed', imageUrl: '/Introduction to Personal Branding.pdf', credentialUrl: 'https://coursera.org/share/9a9c9fcb08ab5858f14a4e8e4db0237a' },
    { name: 'Leading with Impact: Team Dynamics, Strategy and Ethics', provider: 'Coursera Instructor Network', date: 'Completed', imageUrl: '/Leading with Impact Team Dynamics, Strategy and Ethics.pdf', credentialUrl: 'https://coursera.org/share/0741b2de9389a74b03ab9701f2ae1483' },
    { name: 'Financial Planning for Young Adults', provider: 'University of Illinois Urbana-Champaign', date: 'Completed', imageUrl: '/Financial planning for young adults.pdf', credentialUrl: 'https://coursera.org/share/9102851a39fb29c34dd29eb9f97037b6' },
    { name: 'Psychology of the Self', provider: 'American Psychological Association', date: 'Completed', imageUrl: '/Psychology of the self.pdf', credentialUrl: 'https://coursera.org/share/018069119a51fb2372a2a8a50ec39cf1' },
    { name: 'Managing Conflicts with Cultural and Emotional Intelligence', provider: 'University of Maryland, College Park', date: 'Completed', imageUrl: '/Managing Conflict with Cultural and Emotional Intelligence.pdf', credentialUrl: 'https://coursera.org/share/dd88d0257ffe8565b77bf503bc179745' },
    { name: 'Positive Psychology: Resilience Skills', provider: 'University of Pennsylvania', date: 'Completed', imageUrl: '/Positive Psychology Resilience Skills.pdf', credentialUrl: 'https://coursera.org/share/b50c28acc9b91c5f7f00e5bf0a4c9ef2' },
    { name: 'Grit and Growth Mindset', provider: 'Arizona State University', date: 'Completed', imageUrl: '/Grit and Growth Mindset.pdf', credentialUrl: 'https://coursera.org/share/b0c5b32158ad5fc8fed3ba00a068a986' },
    { name: 'Solving Problems with Creative and Critical Thinking', provider: 'IBM', date: 'Completed', imageUrl: '/Solving Problems With Creative and Critical Thinking.pdf', credentialUrl: 'https://coursera.org/share/bef5936b72c45866dc97e5b36106cca7' },
    { name: 'Negotiation skills: Negotiate and resolve conflict', provider: 'Macquarie University', date: 'Completed', imageUrl: '/Negotiation skills Negotiate and resolve conflict.pdf', credentialUrl: 'https://coursera.org/share/e73889445f76185d8db54be92c9f8806' },
];

export const BADGES = [
    { name: 'Generative AI with Large Language Models', provider: 'Coursera', url: 'https://coursera.org/share/1502920aa614e6edb16e75adb46d40c9' },
    { name: 'What is Data Science?', provider: 'Coursera', url: 'https://coursera.org/share/4c784e246acc13626f3f2b5bffdf0f4e' },
    { name: 'AI Bootcamp', provider: 'Coursera', url: 'https://coursera.org/share/cff6cc700dd85dbbb1940718db3452e8' },
    { name: 'Azure AI Fundamentals', provider: 'Credly', url: 'https://www.credly.com/go/wWh9SwL9vl76Ed9emL88bw' },
    { name: 'Security, Compliance, and Identity Fundamentals', provider: 'Credly', url: 'https://www.credly.com/go/CQc8s0KnxR00c0NeZ8W4zA' },
    { name: 'Power Platform Fundamentals', provider: 'Credly', url: 'https://www.credly.com/go/oaa7jzZiWkL7BqSFA7uS9g' },
];


export const SPONSORING_ORGS = ['Pietersburg Hospital', 'Snap N Go', 'Phinnet Security', 'Microsoft', 'Google', 'Tshwane University'];

export const CHATBOT_SYSTEM_PROMPT = `
You are a helpful and friendly AI assistant for Morokolo Chueu's portfolio. 
Your goal is to provide concise and accurate information based ONLY on the details provided below. Do not invent information.

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
  - He holds extensive certifications in Microsoft technologies, AI/Data Science, and Professional Development.

**Portfolio Structure & Navigation:**
- _hello: #hello
- _projects: #projects
- _skills: #skills
- _experience: #experience
- _education: #education
- _contact: #contact

**Your Instructions:**
1.  **Be Concise & Professional:** Keep your answers brief, clear, and professional.
2.  **Use Formatting:** Use simple markdown for readability. Use **bold** for emphasis and bullet points (\`-\`) for lists.
3.  **Reference Sections:** When your answer relates to a specific part of the portfolio, mention it by name (e.g., "You can see more in the _projects section.").
4.  **Offer Navigation:** To help the user, you can add a special navigation command at the VERY END of your response. The format is \`[navigate_to:section_id]\`. For example: \`[navigate_to:#projects]\`. This will create a button for the user. Only use this when it's highly relevant.
5.  **Stay on Topic:** Only answer questions based on the provided information. If asked something unrelated, politely state that you can only provide information about Morokolo's portfolio.

Now, introduce yourself briefly as Morokolo's AI Assistant, explain your purpose (to answer questions and guide them through the portfolio), and welcome the user.
`;
