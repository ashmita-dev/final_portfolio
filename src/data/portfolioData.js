export const personalInfo = {
  name: "Ashmita Mazumdar",
  role: "Full Stack Developer | Computer Science Student",
  tagline: "Some people collect stamps. I collect side projects and mildly concerning amounts of coffee.",
  email: "ashmita110609@gmail.com",
  phone: "7265073446",
  location: "India",
  github: "https://github.com/ashmita-dev",
  linkedin: "https://www.linkedin.com/in/ashmita-mazumdar-009863394/",
  resume: "",
};

export const about = {
  bio: "I'm a Computer Science student who enjoys building full-stack web applications that solve real problems. I like creating products that are both technically strong and visually appealing.",
  wittyLine: "I studied Computer Science. I minored in overthinking every semicolon.",
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
    year: "Expected 2028",
    title: "B.Tech in Computer Science",
    subtitle: "SVKM's NMIMS MPSTME, Shirpur Campus",
    type: "education",
  },
  {
    year: "Ongoing",
    title: "JP Morgan Chase Software Engineering Virtual Experience",
    subtitle: "Forage",
    type: "certification",
  },
  {
    year: "Ongoing",
    title: "Microsoft Learn Cloud Computing Certifications & Badges",
    subtitle: "Microsoft Learn",
    type: "certification",
  },
  {
    year: "Recent",
    title: "Second Prize — Python Mini Project Competition",
    subtitle: "College Competition",
    type: "achievement",
  },
  {
    year: "Recent",
    title: "Yugantar 2.0 Inter-Institute Hackathon",
    subtitle: "SIH 2025 Round-1 Selection",
    type: "achievement",
  },
];