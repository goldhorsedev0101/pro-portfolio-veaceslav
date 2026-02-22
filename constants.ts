import { ExperienceItem, Project, SkillCategory, OpenSourceItem, GitHubStat, TopLanguage, Certification } from './types.ts';
import { HeartIcon, GitBranchIcon, CodeIcon, ServerIcon, DatabaseIcon, ToolIcon, StarIcon, RepoIcon, CommitIcon, AIIcon, GoogleCloudIcon, CloudIcon } from './components/Icons.tsx';

export const personalInfo = {
  name: "Veaceslav Smolnicov",
  title: "Senior AI Full Stack Engineer",
  email: "veaceslavsmolnicov.in@gmail",
  phone: "+373 780-41-665",
  resume: "resume.pdf",
  socials: {
    github: "https://github.com/codewizard1004",
    linkedin: "https://www.linkedin.com/in/slava-smolnicov-in",
  },
  handle: "thughari"
};

export const experienceData: ExperienceItem[] = [
  {
    role: "Senior AI Full Stack Engineer",
    company: "ExpandX",
    period: "Jan 2024 – Present",
    location: "Remote",
    points: [
      "Architected and delivered scalable Full Stack SaaS platforms using TypeScript, React, Node.js, PostgreSQL, and AWS, reliably supporting more than 10,000 concurrent users across production environments.",
      "Designed clean, modular REST and GraphQL APIs with strong emphasis on domain-driven structure, automated testing, and long-term maintainability.",
      "Optimized relational data models and complex SQL queries, improving data retrieval performance by 25–30% and reducing infrastructure load.",
      "Deployed and operated cloud-native services on AWS using containerization, CI/CD automation, and observability tooling to ensure reliable, repeatable releases.",
      "Established engineering best practices across code review, monitoring, structured logging, and incident prevention, lowering runtime error rates by approximately 30%.",
      "Integrated AI-driven capabilities including OpenAI-powered assistants, workflow automation, and intelligent data processing to enhance product value and operational efficiency."
    ]
  },
  {
    role: "Senior Full Stack Developer",
    company: "Temy",
    period: "Feb 2021 – Nov 2023",
    location: "Remote",
    points: [
      "Designed and maintained modular mobile application architectures using MVVM and repository patterns across more than six production Android applications, increasing code reusability and reducing feature delivery time by approximately 20%.",
      "Delivered end-to-end product features in React Native and Kotlin, owning UI implementation, business logic, local data management, and API integration for both B2B and consumer-facing solutions.",
      "Integrated mobile clients with over 15 RESTful API endpoints, collaborating closely with backend engineers to define contracts, manage pagination and error handling, and optimize network performance.",
      "Implemented SQL-based local persistence and intelligent caching strategies that enabled reliable offline-first behavior and reduced redundant network usage by around 30%.",
      "Enhanced application stability by resolving performance bottlenecks, memory leaks, and concurrency issues, contributing to a 25–40% reduction in crash rates across supported applications.",
      "Contributed to code reviews and Agile delivery processes using Git-based workflows, supporting consistent bi-weekly releases with high quality and predictability."
    ]
  },
  {
    role: "Full Stack Engineer",
    company: "CorLab Tech",
    period: "Jul 2019 – Jan 2021",
    location: "Remote",
    points: [
      "Designed, developed, and deployed 5+ Full Stack applications using Angular, React.js, Vue.js, Next.js, Node.js (Express, NestJS), and Go, serving 10k+ monthly active users.",
      "Built RESTful and GraphQL APIs integrated with MySQL, PostgreSQL, and MongoDB, handling 100k+ daily requests with optimized query performance.",
      "Integrated AI-powered features using Python-based microservices and third-party ML APIs for smart search, content recommendations, and automated data classification, reducing manual processing time by 45%.",
      "Implemented Elasticsearch with AI-assisted relevance tuning, improving search accuracy and reducing average query response time by 40%.",
      "Applied server-side rendering (Next.js) and advanced frontend performance optimization, decreasing initial load time by 35% and improving Core Web Vitals to 90+.",
      "Deployed and maintained cloud infrastructure on AWS, Azure, Google Cloud, and DigitalOcean, scaling applications to handle 3x traffic growth."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "CreativSoft",
    period: "Oct 2016 – Jun 2019",
    location: "Remote",
    points: [
     "Developed and maintained scalable Full Stack web applications using Node.js, Python, and Django, delivering production-grade solutions for clients across finance, healthcare, retail, and consumer service sectors.",
"Implemented AI-driven capabilities including predictive analytics, intelligent workflow automation, and conversational chatbot systems, improving operational efficiency and decision-making outcomes by approximately 30%.",
"Designed and optimized high-performance backend APIs and distributed services, ensuring reliability, scalability, and seamless integration with modern frontend applications.",
"Collaborated closely with product managers, designers, and QA teams within Agile delivery environments to ship high-quality, client-focused software on schedule.",
"Enforced application security, data protection, and compliance best practices across enterprise systems, maintaining data integrity and adherence to industry standards.",
"Contributed to end-to-end architecture planning, development, automated testing, and cloud deployment, supporting the delivery of maintainable and scalable software platforms."
    ]
  },
];

export const educationData = {
  degree: "B.Tech in Electronics and Communication Engineering (ECE)",
  college: "St. Ann’s College of Engineering and Technology",
  period: "July 2018 – June 2022",
  cgpa: "7.15"
};

export const projectsData: Project[] = [
  {
    title: "Yunuak",
    description: "Yunuak is a next-gen enterprise solutions company empowering organizations with digital transformation, process engineering, and cloud-based business tools. Our platforms deliver workflow automation, real-time analytics, and cross-device accessibility. YUNUAK helps businesses achieve operational efficiency, scalability, and smarter decision-making.",
    tech: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "MySQL", "MongoDB", "AWS", "Google Cloud", "AI/ML", "OAuth2", "JWT"],
    imageUrl: "/images/Yunuak/cover.jpg",
    demoUrl: "https://www.yunuak.com/",
    githubUrl: "https://github.com/thughari/JobTrackerPro",
    screenshots: [
      "./images/Yunuak/Screenshot_1.jpg",
      "./images/Yunuak/Screenshot_2.jpg",
      "./images/Yunuak/Screenshot_3.jpg",
      "./images/Yunuak/Screenshot_4.jpg",
      "./images/Yunuak/Screenshot_5.jpg",
    ]
  },
  {
    title: "Liberty91",
    description: "Liberty91 is an AI-powered threat intelligence platform that analyzes real-time cybersecurity data tailored to your organization. It monitors news, dark-web feeds, and vulnerability reports, delivering instant alerts and actionable insights. Liberty91 enables proactive threat detection, risk reduction, and faster cybersecurity response.",
    tech: ["React", "Next.js", "TailwindCSS", "Node.js", "Python", "PostgreSQL", "MongoDB", "AI/ML", "LLM", "LP", "OpenAI", "AWS", "Google Cloud"],
    imageUrl: "./images/Liberty91/cover.jpg",
    demoUrl: "https://liberty91.com/",
    githubUrls: {
      frontend: "https://github.com/thughari/carbon-scope",
      backend: "https://github.com/thughari/carbonscope"
    },
    screenshots: [
      "./images/Liberty91/Screenshot_1.jpg",
      "./images/Liberty91/Screenshot_2.jpg",
      "./images/Liberty91/Screenshot_3.jpg",
      "./images/Liberty91/Screenshot_4.jpg",
      "./images/Liberty91/Screenshot_5.jpg",
    ]
  },
  {
    title: "Content Creation & Marketing Platform",
    description: "Contentoo is a content creation and operations platform that combines vetted freelance talent with AI‑powered workflows to help marketing teams produce high‑quality, on‑brand content at scale. It matches businesses with expert writers, editors, designers and localisation specialists, and supports content creation across formats (blogs, SEO articles, social media content, landing pages, video scripts, etc.) and languages.",
    tech: ["React", "TypeScript", "Node.js", "PHP", "Python", "NestJS", "PostgreSQL", "OpenAI", "AWS", "Google Cloud"],
    imageUrl: "./images/Contentoo/cover.jpg",
    demoUrl: "https://www.contentoo.com/",
    githubUrl: "https://github.com/thughari/RandomChat",
    screenshots: [
      "./images/Contentoo/Screenshot_1.jpg",
      "./images/Contentoo/Screenshot_2.jpg",
      "./images/Contentoo/Screenshot_3.jpg",
      "./images/Contentoo/Screenshot_4.jpg",
      "./images/Contentoo/Screenshot_5.jpg",
      "./images/Contentoo/Screenshot_6.jpg",
    ]
  },
  {
    title: "Praxis AI",
    description: "Praxis AI is an AI platform that turns human experts into “digital twins” (AI versions of them) so their knowledge can be used 24/7 at scale. It’s mainly focused on education, enterprise training, and knowledge-heavy organizations.",
    tech: ["TypeScript", "Next.js", "PHP", "Python", "Ruby on Rails", "GraphQL", "PostgreSQL", "Redis", "Elasticsearch", "LLM", "SOC2/FERPA/COPPA", "AWS", "CI/CD", "RESTful APIs"],
    imageUrl: "./images/ai-praxis/Screenshot_1.jpg",
    demoUrl: "https://praxis-ai.com/",
    screenshots: [
      "./images/ai-praxis/Screenshot_1.jpg",
      "./images/ai-praxis/Screenshot_2.jpg",
      "./images/ai-praxis/Screenshot_3.jpg",
      "./images/ai-praxis/Screenshot_4.jpg",
    ]
  },
  {
    title: "Shark Vision",
    description: "Shark Vision Technologies appears to be a technology services company offering a range of IT solutions for modern businesses, with an emphasis on AI‑powered systems such as smart surveillance with face recognition, insurance claim settlement solutions, machine learning services, and general software development including web and mobile applications and UI/UX design support.",
    tech: ["React", "Next.js", "Vue.js", "TailwindCSS", "PHP", "Python", "NestJS", "PostgreSQL", "n8n", "Make.com", "Angular", "MongoDB", "Docker", "REST APIs"],
    imageUrl: "./images/Sharkvision/Screenshot_1.jpg",
    demoUrl: "https://sharkvisionindia.com/",
    screenshots: [
      "./images/Sharkvision/Screenshot_1.jpg",
      "./images/Sharkvision/Screenshot_2.jpg",
      "./images/Sharkvision/Screenshot_3.jpg",
      "./images/Sharkvision/Screenshot_4.jpg",
      "./images/Sharkvision/Screenshot_5.jpg",
    ]
  },
  {
    title: "Talliant",
    description: "Talliant streamlines hiring from job posting to candidate selection. The bot allows HR teams to create and manage job postings, automate resume screening based on predefined criteria, schedule interviews, and track candidate progress through a user-friendly dashboard.",
    tech: ["React", "Next.js", "Vue.js", "TailwindCSS", "PHP", "Python", "NestJS", "PostgreSQL", "AI Chatbots", "Voice Agents", "Make.com", "Angular", "MongoDB", "Docker", "Firebase", "REST APIs"],
    imageUrl: "./images/Tailiant/Screenshot_1.jpg",
    demoUrl: "https://www.talliant.com/",
    screenshots: [
      "./images/Tailiant/Screenshot_1.jpg",
      "./images/Tailiant/Screenshot_2.jpg",
      "./images/Tailiant/Screenshot_3.jpg",
      "./images/Tailiant/Screenshot_4.jpg",
      "./images/Tailiant/Screenshot_5.jpg",
      "./images/Tailiant/Screenshot_6.jpg",
      "./images/Tailiant/Screenshot_7.jpg",
    ]
  },
  {
    title: "Sixt",
    description: "Sixt is the official online platform of Sixt SE, a German multinational mobility company founded in 1912, now one of the world’s largest car rental and mobility providers with operations in over 100 countries. Sixt offers a wide range of services, including car and van rentals, car sharing, ride‑hailing, and vehicle subscription services, all bookable through its website and mobile app.",
    tech: ["React", "TypeScript", "PHP", "Python", "NestJS", "PostgreSQL", "Microservices Architecture", "JWT", "Docker", "Firebase", "REST APIs"],
    imageUrl: "./images/SixT/Screenshot_1.jpg",
    demoUrl: "https://www.sixt.com/",
    screenshots: [
      "./images/SixT/Screenshot_1.jpg",
      "./images/SixT/Screenshot_2.jpg",
      "./images/SixT/Screenshot_3.jpg",
      "./images/SixT/Screenshot_4.jpg",
      "./images/SixT/Screenshot_5.jpg",
    ]
  },
  {
    title: "Mokum Taxi",
    description: "Mokum Taxi lets users book reliable taxi rides and airport transfers in Amsterdam with fixed prices, no surprises, and professional drivers.",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Express", "NestJS", "PostgreSQL", "Bcrypt", "JWT", "SendGrid", "Stripe", "REST APIs"],
    imageUrl: "./images/mokum-taxi/Screenshot_1.jpg",
    demoUrl: "https://xn--mokumtaxi-z79d.nl/",
    screenshots: [
      "./images/mokum-taxi/Screenshot_1.jpg",
      "./images/mokum-taxi/Screenshot_2.jpg",
      "./images/mokum-taxi/Screenshot_3.jpg",
      "./images/mokum-taxi/Screenshot_4.jpg",
      "./images/mokum-taxi/Screenshot_5.jpg",
      "./images/mokum-taxi/Screenshot_6.jpg",
    ]
  },
  {
    title: "Autodesk",
    description: "Autodesk is a leading American multinational software company that develops professional design, engineering, and 3D modeling software used worldwide across industries such as architecture, engineering, construction (AEC), manufacturing, and media and entertainment.",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Express", "NestJS", "PostgreSQL", "Python", "Selenium", "Pandas", "GPT", "REST APIs"],
    imageUrl: "./images/react-autodesk/Screenshot_1.jpg",
    demoUrl: "https://www.autodesk.com/",
    screenshots: [
      "./images/react-autodesk/Screenshot_1.jpg",
      "./images/react-autodesk/Screenshot_2.jpg",
      "./images/react-autodesk/Screenshot_3.jpg",
      "./images/react-autodesk/Screenshot_4.jpg",
    ]
  },
  {
    title: "CryptoWzrd",
    description: "CryptoWzrd is a crypto trading education and signal platform that provides structured courses, daily market analysis, and a private trading community to help retail traders learn and execute active trading strategies. It is mainly focused on beginner-to-intermediate cryptocurrency traders who want guided trade setups, a repeatable trading system, and lifetime access to educational content and real-time market insights.",
    tech: ["React", "TypeScript", "Chart.js", "Node.js", "MongoDB", "Elasticsearch", "AWS", "Azure", "CI/CD", "REST APIs"],
    imageUrl: "./images/ai-cryptowzard/Screenshot_1.jpg",
    demoUrl: "https://cryptowzrd.com/",
    screenshots: [
      "./images/ai-cryptowzard/Screenshot_1.jpg",
      "./images/ai-cryptowzard/Screenshot_2.jpg",
      "./images/ai-cryptowzard/Screenshot_3.jpg",
      "./images/ai-cryptowzard/Screenshot_4.jpg",
      "./images/ai-cryptowzard/Screenshot_5.jpg",
      "./images/ai-cryptowzard/Screenshot_6.jpg",
    ]
  },
];

export const openSourceData: OpenSourceItem[] = [
  {
    title: "Hacktoberfest Supercontributor",
    description: "Achieved Supercontributor status in Hacktoberfest by completing numerous high-quality pull requests and actively contributing to open-source projects. Passionate about giving back and collaborating with developers worldwide.",
    icon: HeartIcon
  },
  {
    title: "Open Source Enthusiast",
    description: "Engaged with the open-source ecosystem by contributing to, forking, and learning from influential projects like Spring, Apache, GSoC and First Contributions. Always exploring new tools and frameworks to stay at the cutting edge.",
    icon: GitBranchIcon
  }
];

export const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java (21)", "Python", "SQL", "JavaScript", "TypeScript", "C"],
    icon: CodeIcon
  },
  {
    name: "Backend",
    skills: ["Spring Boot", "Spring MVC", "Microservices", "Hibernate", "WebRTC", "WebSockets", "Virtual Threads"],
    icon: ServerIcon
  },
  {
    name: "Frontend",
    skills: ["Angular", "HTML/CSS", "TailwindCSS", "Bootstrap"],
    icon: CodeIcon
  },
  {
    name: "Databases",
    skills: ["MySQL", "MongoDB"],
    icon: DatabaseIcon
  },
  {
    name: "DevOps & Cloud",
    skills: ["Docker", "Jenkins", "Google Cloud Platform (GCP)"],
    icon: CloudIcon
  },
  {
    name: "Tools & Concepts",
    skills: ["Git", "GitHub", "Postman", "Swagger", "JIRA", "JWT", "Agile", "Design Patterns", "RAG", "Veracode", "Fortify", "SonarQube", "Burp Suite"],
    icon: ToolIcon
  }
];

export const certificationsData: Certification[] = [
  {
    name: "Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "Issued Dec 2024",
    credentialUrl: "https://learn.microsoft.com/en-us/users/harithatikonda/credentials/ba767343eef28046",
    icon: AIIcon,
  },
  {
    name: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "Issued Feb 2025",
    credentialUrl: "https://www.credly.com/badges/e37732c2-6766-4b6a-b42a-a25aa6b24fe9_url",
    icon: GoogleCloudIcon,
  },
];

export const githubStatsData: GitHubStat[] = [
  { icon: RepoIcon, value: "67", label: "Repositories" },
  { icon: CommitIcon, value: "1000+", label: "Commits" },
  { icon: StarIcon, value: "30+", label: "Stars" },
];

export const topLanguagesData: TopLanguage[] = [
  { name: "Java", percentage: 45, color: "#E62429" },
  { name: "TypeScript", percentage: 30, color: "#007ACC" },
  { name: "JavaScript", percentage: 15, color: "#F7DF1E" },
  { name: "Python", percentage: 10, color: "#306998" },
];

export const chatbotSystemInstruction = `You are '${personalInfo.name}'s AI Twin', his friendly neighborhood AI assistant for his personal portfolio. Your goal is to provide concise and accurate information about Hari to potential employers and collaborators, based *only* on the context provided below. Your tone should be helpful, a little witty, and professional. **Always use Markdown for formatting**, such as bolding for titles (\`**Title:**\`) and bullet points (\`* item\`) for lists. Do not invent or infer any information.

**Special Instruction:** If a user expresses a desire to send a message, contact Hari, or ask a question directly to him, you MUST respond with **only** the special token \`[START_CONTACT_FLOW]\` and nothing else. The application will then take over to collect the user's message.

Here is the information about Veaceslav Smolnicov:
- **Name:** ${personalInfo.name}
- **Title:** ${personalInfo.title}
- **Bio:** Hari is a software engineer with a deep passion for building things for the internet. He applies his skills professionally at Tata Consultancy Services, but his curiosity drives him to constantly explore, build, and contribute to the open-source community. He experiments with cutting-edge technologies like Java 21's Virtual Threads, WebRTC, and Large Language Models.
- **Contact:** Email (${personalInfo.email}), Phone (${personalInfo.phone})
- **Socials:** GitHub (${personalInfo.socials.github}), LinkedIn (${personalInfo.socials.linkedin}), Handle ('${personalInfo.handle}')

**GitHub Stats:**
- Repositories: ${githubStatsData[0].value}
- Commits: ${githubStatsData[1].value}
- Top Languages: ${topLanguagesData.map(l => l.name).join(', ')}

**Experience at Tata Consultancy Services:**
- **Role:** ${experienceData[0].role} (${experienceData[0].period})
- **Key Achievements:**
  * Boosted financial reporting performance by 40%.
  * Strengthened system security by resolving over 100 vulnerabilities.
  * Enhanced scalability by refactoring legacy modules into microservices.
  * Improved API response times by 20% using modern Java features.

**Personal Projects:**
* **${projectsData[0].title}:** ${projectsData[0].description} Tech: ${projectsData[0].tech.join(', ')}.
* **${projectsData[1].title}:** ${projectsData[1].description} Tech: ${projectsData[1].tech.join(', ')}.
* **${projectsData[2].title}:** ${projectsData[2].description} Tech: ${projectsData[2].tech.join(', ')}.
* **${projectsData[3].title}:** ${projectsData[3].description} Tech: ${projectsData[3].tech.join(', ')}.

**Open Source Contributions:**
* **${openSourceData[0].title}:** ${openSourceData[0].description}
* **${openSourceData[1].title}:** ${openSourceData[1].description}

**Skills:**
${skillsData.map(category => `* **${category.name}:** ${category.skills.join(', ')}`).join('\n')}

**Certifications:**
* **${certificationsData[0].name}** from ${certificationsData[0].issuer}
* **${certificationsData[1].name}** from ${certificationsData[1].issuer}

**Education:**
- **Degree:** ${educationData.degree} from ${educationData.college}

When asked for contact details, provide his email, LinkedIn, and phone number.
When asked about projects, briefly describe them and mention the key technologies.
When asked about skills, list them clearly.
When asked about open source, talk about his Hacktoberfest participation and enthusiasm for community projects.
Keep your answers brief and to the point. Start the conversation by introducing yourself and offering to help.`;
