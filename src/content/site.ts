import type { Project, SocialLink, Tech } from "@/types";

export const site = {
  name: "Leonardo Uranga",
  role: "Software Engineer",
  location: "USA",
  tagline:
    "I build fast, scalable web applications using modern frontend and backend technologies.",
};

export const socials: SocialLink[] = [
  { label: "Email", href: "mailto:leo.uranga@hotmail.com" },
  { label: "GitHub", href: "https://github.com/leouranga" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leonardouranga/" },
];

export const skills: Tech[] = [
  {
    key: "javascript",
    label: "JavaScript",
    iconClass: "devicon-javascript-plain colored",
  },
  {
    key: "typescript",
    label: "TypeScript",
    iconClass: "devicon-typescript-plain colored",
  },
  { key: "html", label: "HTML", iconClass: "devicon-html5-plain colored" },
  { key: "css", label: "CSS", iconClass: "devicon-css3-plain colored" },
  { key: "react", label: "React", iconClass: "devicon-react-original colored" },
  { key: "nodejs", label: "Node.js", iconClass: "devicon-nodejs-plain colored" },
  { key: "express", label: "Express.js", iconClass: "devicon-express-original" },
  { key: "tailwind", label: "Tailwind", iconClass: "devicon-tailwindcss-plain colored" },
  { key: "bootstrap", label: "Bootstrap", iconClass: "devicon-bootstrap-plain colored" },
  { key: "vite", label: "Vite", iconClass: "devicon-vitejs-plain colored" },
  { key: "git", label: "Git", iconClass: "devicon-git-plain colored" },
  { key: "github", label: "GitHub", iconClass: "devicon-github-original" },
  { key: "postman", label: "Postman", iconClass: "devicon-postman-plain colored" },
  { key: "mssql", label: "MSSQL", iconClass: "devicon-microsoftsqlserver-plain colored" },
  { key: "csharp", label: "C#", iconClass: "devicon-csharp-plain colored" },
  { key: "sqlite", label: "SQLite", iconClass: "devicon-sqlite-plain colored" },
  { key: "jquery", label: "jQuery", iconClass: "devicon-jquery-plain colored" },
  {
    key: "postgresql",
    label: "PostgreSQL",
    iconClass: "devicon-postgresql-plain colored",
  },
  { key: "docker", label: "Docker", iconClass: "devicon-docker-plain colored" },
  { key: "vercel", label: "Vercel", iconClass: "devicon-vercel-original" },
  { key: "aspnet", label: "ASP.NET", iconClass: "devicon-dot-net-plain colored" },
  { key: "nextjs", label: "Next.js", iconClass: "devicon-nextjs-plain" },
  { key: "prisma", label: "Prisma", iconClass: "devicon-prisma-original colored" },
  { key: "mongodb", label: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
];

export const about = {
  title: "About",
  text: [
    "I’m a developer who cares about how things work, not just how they look.",
    "I focus on building clear, maintainable applications and solving problems in a way that makes sense long-term.",
    "I test, refactor, and debug continuously, treating issues as part of the process instead of exceptions.",
  ],
  image: { src: "/profile.jpg", alt: "Profile photo" },
};

export const projects: Project[] = [
  {
    name: "Jobify",
    description: "Job tracking dashboard with authentication and CRUD.",
    href: "https://jobify-6dw2.onrender.com/",
    repo: "https://github.com/leouranga/Jobify",
    image: { src: "/Jobify.png", alt: "Jobify screenshot" },
    tech: ["javascript", "react", "vite", "nodejs", "express", "mongodb"],
    category: "fullstack",
  },
  {
    name: "YelpCamp",
    description: "Full-stack campground app with auth, reviews, and maps.",
    href: "https://yelpcamp-t75w.onrender.com/",
    repo: "https://github.com/leouranga/yelpcamp",
    image: { src: "/YelpCamp.png", alt: "YelpCamp screenshot" },
    tech: ["javascript", "nodejs", "express", "mongodb", "bootstrap"],
    category: "fullstack",
  },
  {
    name: "Portfolio",
    description: "My personal Portfolio with my projects.",
    href: "http://localhost:3000/",
    repo: "https://github.com/leouranga/Portfolio",
    image: { src: "/portfoliopic.png", alt: "portfolio screenshot" },
    tech: ["nextjs", "react", "typescript", "tailwind"],
    category: "frontend",
  },
  {
    name: "Discuss Forum",
    description: "Forum app with GitHub auth, topics, posts, and threaded comments.",
    href: "https://discuss-git-main-leonardos-projects-51c1ab26.vercel.app?_vercel_share=IKqGrz4khl2gZtajZOcrGEBS0LTvWNwb",
    repo: "https://github.com/leouranga/Discuss",
    image: { src: "/Discuss.png", alt: "Discuss screenshot" },
    tech: ["react", "typescript", "tailwind", "postgresql", "prisma", "nextjs"],
    category: "fullstack",
  },
  {
    name: "Expense Tracker",
    description: "Track expenses with filters, categories, and insights.",
    href: "https://your-expense-tracker-url.com",
    repo: "https://github.com/leouranga/Crypto-Live",
    image: { src: "/Jobify.png", alt: "Expense Tracker screenshot" },
    tech: ["react", "typescript", "tailwind", "sqlite"],
    category: "games",
  },
  {
    name: "API Status Monitor",
    description: "Monitor endpoints with uptime logs and alerts.",
    href: "https://your-api-monitor-url.com",
    repo: "https://github.com/your-handle/api-status-monitor",
    image: { src: "/YelpCamp.png", alt: "API Status Monitor screenshot" },
    tech: ["nodejs", "express", "typescript", "postman", "git", "github"],
    category: "games",
  },
];
