export const personalInfo = {
  name: "Ashmita Mazumdar",
  role: "Full Stack Developer | Computer Science Student",
  tagline: "Some people collect stamps. I collect side projects and mildly concerning amounts of coffee.",
  email: "ashmita110609@gmail.com",
  phone: "7265073446",
  location: "India",
  github: "https://github.com/ashmita-dev",
  linkedin: "https://www.linkedin.com/in/ashmita-mazumdar-009863394/",
  resume: "/Ashmita_Mazumdar_Resume .pdf",
};

export const about = {
  bio: "I'm a Computer Science student who enjoys building full-stack web applications that solve real problems — not just checkbox projects, but things people would actually use.",
  extendedBio: "My focus is on the full pipeline: designing clean database schemas, building REST APIs that don't fall over under real use, and wiring it all up to interfaces people actually enjoy using. I care as much about the query plan behind a feature as I do about the pixel spacing in front of it.",
  wittyLine: "I studied Computer Science. I minored in overthinking every semicolon.",
  highlights: [
    {
      title: "Full-Stack Development",
      description: "React front-ends paired with Node.js/Express back-ends, built as one connected system, not two disjointed halves.",
    },
    {
      title: "Database Architecture",
      description: "Designing relational schemas in PostgreSQL and SQL Server that stay clean even as features stack up.",
    },
    {
      title: "API Design",
      description: "Building REST APIs with proper auth (JWT), sensible error handling, and documentation that doesn't lie.",
    },
    {
      title: "Problem-First Thinking",
      description: "Starting from the actual user problem before touching a single line of code — CS taught me the theory, projects taught me the judgment.",
    },
  ],
  education: {
    degree: "B.Tech in Computer Science",
    school: "SVKM's NMIMS MPSTME, Shirpur Campus",
    graduation: "Expected 2028",
    coursework: [
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Design & Analysis of Algorithms",
    ],
  },
};

export const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "React Router", "Vite"],
  backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  database: ["PostgreSQL", "Microsoft SQL Server", "SQL"],
  tools: ["Git", "GitHub", "VS Code", "Postman"],
  languages: ["JavaScript", "Java", "Python", "C++", "SQL"],
};

export const projects = [
  {
    id: 1,
    title: "Career Copilot",
    subtitle: "AI-Powered Career Intelligence Platform",
    description:
      "A career guidance platform that helps students understand their skill level, discover career paths, identify skill gaps, and plan learning roadmaps using 15+ REST APIs and 8+ PostgreSQL tables.",
    wittyLine: "Exhibit A: proof that ideas survive contact with real users.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "JWT", "GitHub API"],
    liveLink: "https://career-copilot-frontend.onrender.com",
    githubLink: "https://github.com/ashmita-dev/career-copilot",
    flagship: true,
    status: "Actively maintained",
  },
  {
    id: 2,
    title: "Event Management Portal",
    subtitle: "College Event Management System",
    description:
      "A role-based event management platform supporting event creation, registrations, tracking, and administrative workflows through RESTful backend services.",
    wittyLine: "Version 1 shipped. Version 2 is already plotting a glow-up.",
    tech: ["HTML", "CSS", "JavaScript", "AngularJS", "Node.js", "Microsoft SQL Server"],
    liveLink: "",
    githubLink: "https://github.com/ashmita-dev/event-management-portal",
    flagship: false,
    status: "Currently being rebuilt",
  },
  {
    id: 3,
    title: "SneakerDB",
    subtitle: "Sneaker E-Commerce Platform",
    description:
      "A full-stack sneaker e-commerce platform with authentication, inventory, order processing, payments, shipment tracking, and 40+ SQL queries across 12 relational tables.",
    wittyLine: "Built for sneakerheads, powered by clean SQL joins.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Microsoft SQL Server"],
    liveLink: "",
    githubLink: "https://github.com/ashmita-dev/SneakerDB",
    flagship: false,
    status: "Stable, occasionally poked at 2am",
  },
];

export const certifications = [
  "JP Morgan Chase Software Engineering Virtual Experience Program (Forage)",
  "Microsoft Learn Cloud Computing Certifications & Badges",
];

export const achievements = [
  "Second Prize – Python Mini Project Competition",
  "Yugantar 2.0 Inter-Institute Hackathon (SIH 2025 Round-1 Selection)",
];

export const timeline = [
  {
    label: "Education",
    title: "B.Tech in Computer Science",
    subtitle: "SVKM's NMIMS MPSTME, Shirpur Campus",
    type: "education",
    certificate: null,
  },
  {
    label: "Certification",
    title: "JP Morgan Chase Software Engineering Virtual Experience",
    subtitle: "Forage",
    type: "certification",
    certificate: "/certificates/jpmorgan.png",
  },
  {
    label: "Certification",
    title: "Microsoft Learn Cloud Computing Certifications & Badges",
    subtitle: "Microsoft Learn",
    type: "certification",
    certificate: "/certificates/microsoft-learn.png",
  },
  {
    label: "Achievement",
    title: "Second Prize — Python Mini Project Competition",
    subtitle: "College Competition",
    type: "achievement",
    certificate: "/certificates/python-mini-project.png",
  },
  {
    label: "Achievement",
    title: "Yugantar 2.0 Inter-Institute Hackathon",
    subtitle: "SIH 2025 Round-1 Selection",
    type: "achievement",
    certificate: "/certificates/yugantar-hackathon.png",
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "REST APIs Built" },
  { value: 3, suffix: "", label: "Major Projects Shipped" },
  { value: 40, suffix: "+", label: "SQL Queries Written" },
  { value: 12, suffix: "+", label: "Relational Tables Designed" },
];

export const skillLevels = [
  { label: "Frontend Development", value: 88 },
  { label: "Backend Development", value: 80 },
  { label: "Database Design", value: 78 },
  { label: "Tools & Workflow", value: 85 },
];

export const currentlyBuilding = "Open to online internships";