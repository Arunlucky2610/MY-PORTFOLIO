export const profile = {
  name: "Arun Lucky",
  fullName: "Arun Sudhaveni",
  title: "Full Stack Developer",
  secondaryTitle: "AI/ML Engineer",
  tagline: "Building Intelligent Digital Products.",
  email: "arunlucky2609@gmail.com",
  location: "India",
  resume: "/Arun-Resume.pdf",
  github: "https://github.com/Arunlucky2610",
  linkedin: "https://www.linkedin.com/in/arun-sudhaveni-072a3a2b4/",
};

export const timeline = [
  {
    label: "Education",
    title: "Computer Science foundation",
    body: "Built strong fundamentals in programming, data systems, web platforms, and applied AI through hands-on projects.",
  },
  {
    label: "Internship",
    title: "RapidSkill full-stack internship",
    body: "Worked on product UI, responsive React components, backend integration, and practical platform improvements.",
  },
  {
    label: "Achievements",
    title: "National hackathon finalist",
    body: "Reached the Top 4 at Statathon 2025 with Survey AI / MoSPI Data Portal and secured seed funding.",
  },
  {
    label: "Journey",
    title: "AI product builder",
    body: "Focused on building intelligent systems that convert messy, real-world data into usable software experiences.",
  },
];

export const counters = [
  { value: "415K+", label: "Government records processed" },
  { value: "100+", label: "LeetCode problems solved" },
  { value: "Top 4", label: "Statathon national finalist" },
  { value: "50K", label: "Seed funding secured" },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Node.js", "Express.js", "REST APIs", "Microservices"],
  },
  {
    category: "AI/ML",
    items: ["LLM APIs", "ML Models", "Predictive Analytics", "NLP", "Data Science"],
  },
  {
    category: "Cloud",
    items: ["Vercel", "Deployment", "Scalable APIs", "Monitoring", "Optimization"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Data Modeling"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Git", "GitHub", "CI/CD", "Linux"],
  },
];

export const projects = [
  {
    title: "Survey AI / MoSPI Data Portal",
    shortTitle: "Survey AI",
    description:
      "AI-powered intelligent data platform serving Ministry of Statistics & Programme Implementation. Users ask in plain English, LLMs convert intent to SQL, ML models analyze patterns, and dashboards turn government survey data into decisions.",
    image: "/mospi-portal.png",
    challenge:
      "Government statistical data was fragmented and inaccessible. Manual analysis required hours of SQL queries and still missed patterns, anomalies, and policy-level insights.",
    solution:
      "Built a production AI system with a Survey Agent, natural language querying, FastAPI services, PostgreSQL warehouse, React dashboards, predictive analytics, and automated insight generation.",
    architecture:
      "Next.js and React interface, FastAPI backend, PostgreSQL data layer, LLM query planner, ML trend models, role-based access, and visualization pipelines.",
    impact:
      "Reduced analysis time from hours to seconds and made 415K+ records explorable through conversational analytics.",
    tags: ["FastAPI", "PostgreSQL", "React", "LLM APIs", "ML Models", "Next.js", "Recharts", "SQLAlchemy", "JWT Auth"],
    github: "https://github.com/Chandu2815/STATAHON-PROJECT",
    live: "#",
    featured: true,
    results: ["415K+ records", "Plain-English analytics", "Top 4 Statathon finalist", "50K seed funding"],
  },
  {
    title: "AI Oral Health Detection",
    description:
      "Computer-vision health assistant concept for detecting oral health issues from images and guiding users toward early awareness.",
    image: "/ong-image.png",
    challenge: "Oral health problems are often ignored until they become expensive or painful.",
    solution: "Designed an AI-first detection flow with guided capture, model feedback, and accessible health recommendations.",
    architecture: "Image upload, preprocessing, model inference, confidence scoring, and recommendation UI.",
    impact: "Supports faster early screening and user education.",
    tags: ["AI/ML", "Computer Vision", "React", "Python"],
    github: "#",
    live: "#",
  },
  {
    title: "Traffic AI",
    description:
      "AI traffic intelligence project focused on identifying congestion patterns and helping cities reason about movement.",
    image: "/Portfolio.png",
    challenge: "Traffic data is noisy, fast-moving, and hard to translate into operational decisions.",
    solution: "Created an analytics workflow for pattern detection, visualization, and AI-assisted recommendations.",
    architecture: "Data ingestion, analytics engine, visual dashboard, and insight layer.",
    impact: "Turns mobility signals into clearer planning decisions.",
    tags: ["AI", "Analytics", "Python", "Visualization"],
    github: "#",
    live: "#",
  },
  {
    title: "Mana Survey",
    description:
      "Survey platform for collecting structured feedback and turning responses into practical analytics.",
    image: "/mospi-portal.png",
    challenge: "Teams need faster ways to collect, filter, and understand survey responses.",
    solution: "Built survey workflows with data filtering, reporting, and clean dashboard experiences.",
    architecture: "React UI, API layer, structured survey storage, and reporting views.",
    impact: "Helps teams move from raw responses to decisions faster.",
    tags: ["React", "Dashboard", "Data", "API"],
    github: "#",
    live: "#",
  },
  {
    title: "Sahay",
    description:
      "Assistance-focused product concept built around accessible support, clear user flows, and practical problem solving.",
    image: "/RapidSkill.png",
    challenge: "Support experiences often feel slow, fragmented, and difficult to navigate.",
    solution: "Designed a simple assistance platform with guided flows and clear action paths.",
    architecture: "Frontend experience, backend services, and modular support flows.",
    impact: "Improves accessibility and speed for people seeking help.",
    tags: ["Full Stack", "UX", "React", "API"],
    github: "#",
    live: "#",
  },
  {
    title: "Ancient Text Translational Portal",
    description:
      "Full-stack web application that translates ancient Sanskrit text into Telugu, English, Hindi, Kannada, Tamil, and Malayalam using AI-powered translation technologies.",
    image: "/IMAGE.jpeg",
    challenge: "Ancient language access is limited by OCR quality, translation complexity, and fragmented tools.",
    solution: "Combined authentication, OCR image extraction, document uploads, translation APIs, and translation history.",
    architecture: "FastAPI, React, SQLAlchemy, JWT auth, OCR pipeline, PostgreSQL, and translation APIs.",
    impact: "Makes classical text translation more accessible across Indian languages.",
    tags: ["FastAPI", "React", "Python", "SQLAlchemy", "JWT Auth", "TesseractOCR", "PostgreSQL"],
    github: "https://github.com/Arunlucky2610/AI-Powered-Sanskrit-Story-Visual-Translator",
    live: "#",
  },
  {
    title: "RapidSkill",
    description:
      "Modern EdTech platform redesign with a dark-themed UI, improved visual hierarchy, and clearer learning journeys.",
    image: "/RapidSkill.png",
    challenge: "The learning journey needed stronger clarity, hierarchy, and conversion-focused UX.",
    solution: "Redesigned interface patterns, responsive components, and product flows for a cleaner EdTech experience.",
    architecture: "React components, Tailwind styling, responsive layouts, and motion enhancements.",
    impact: "Improved product polish and navigation across learning workflows.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://rapidskill.in/",
    live: "https://rapidskill.in/",
  },
  {
    title: "Personal Portfolio",
    description:
      "Premium full-stack portfolio website showcasing projects, skills, experience, and AI-focused product building.",
    image: "/Portfolio.png",
    challenge: "A developer portfolio needs to communicate craft, credibility, and technical range quickly.",
    solution: "Built an animated Next.js experience with reusable sections, motion, and responsive presentation.",
    architecture: "Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Three.js.",
    impact: "Creates a polished home for projects, achievements, and professional contact.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "#",
    live: "localhost:3000",
  },
];

export const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "RapidSkill",
    duration: "Jan 2026 - Present",
    stack: ["React", "Tailwind", "API Integration", "UX"],
    body: "Transformed EdTech platform screens with modern responsive UI, backend integration, and sharper user flow.",
  },
  {
    role: "Project Finalist",
    company: "Statathon 2025",
    duration: "Jul 2025 - Jun 2026",
    stack: ["AI", "FastAPI", "PostgreSQL", "Analytics"],
    body: "All India Top 4 finalist building Survey AI for government data access and insight generation.",
  },
  {
    role: "Full-Stack Developer",
    company: "EasyLearnova",
    duration: "2024 - 2025",
    stack: ["React", "FastAPI", "Auth", "Payments"],
    body: "Developed learning platform features, authentication, progress tracking, and performance improvements.",
  },
];

export const achievements = [
  "Statathon 2025 national finalist",
  "Hackathon team leader",
  "50K seed funding",
  "ICIC Innovation Event 3rd prize",
  "AI Health Chatbot recognition",
];
