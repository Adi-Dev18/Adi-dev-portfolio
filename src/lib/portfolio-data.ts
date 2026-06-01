import omnifood from "@/assets/omnifood.png";
import projectAtelier from "@/assets/project-atelier.jpg";
import projectLumen from "@/assets/project-lumen.jpg";
import project1 from "@/assets/project1.png";
import amazonQDeveloper from "@/assets/Amazon Q Developer.png";
import amazonQIntroduction from "@/assets/Amazon Q Introduction.png";
import azureMachineLearning from "@/assets/Azure Machine Learning.png";
import dataAnalysis from "@/assets/Data Analysis.png";
import developerTools from "@/assets/Developer tools.png";
import novus24 from "@/assets/Novus24.png";
import technovanza from "@/assets/Technovanza.png";
import yukthi1 from "@/assets/Yukthi 1.png";
import yukthi2 from "@/assets/Yukthi 2.png";

export const social = {
  github: "https://github.com/adityaladdu",
  linkedin: "https://www.linkedin.com/in/aditya-kumar-833112258/",
  email: "hello@aditya.dev",
  location: "Hyderabad, India",
};

export const education = {
  institution: "CMR Technical Campus",
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Computer Science and Engineering (Data Science)",
  period: "July 2025 – April 2028",
  location: "Hyderabad, Telangana, India",
  majorSubjects: [
    "Big Data Analytics",
    "Machine Learning",
    "Data Structures & Algorithms",
    "Python Programming",
    "Java Programming",
  ],
};

export const techStack = {
  core: ["HTML", "CSS", "React", "Tailwind CSS"],
  languages: ["JavaScript", "TypeScript", "Python"],
  tools: ["Git", "Vite", "Framer Motion", "React Router", "React Hook Form"],
};

export const projects = [
  {
    id: "01",
    title: "Women's Safety Analytics Platform",
    kind: "Machine Learning • NLP",
    role: "End-to-end ML pipeline, NLP analysis & dashboard design",
    year: "2026",
    desc: "A premium case study designed to surface meaningful safety insights from real-world conversations.",
    problem:
      "How might we make women's safety discussions more visible through data-driven storytelling?",
    approach:
      "Built an end-to-end analytics pipeline that combines preprocessing, feature engineering, and model-driven visualization.",
    results:
      "Delivered a clear analytics dashboard with safety patterns, sentiment trends, and actionable insights.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Flask", "TextBlob"],
    image: project1,
    github: "https://github.com/Adi-Dev18/RTRP-PROJECT",
    live: undefined as string | undefined,
  },
  {
    id: "02",
    title: "OmniFood",
    kind: "Frontend Engineering",
    role: "UI design, responsive layout & frontend implementation",
    year: "2025",
    desc: "A responsive editorial landing experience built for a premium food service with strong mobile-first polish.",
    problem: "Craft a fast, accessible interface for a modern food subscription concept.",
    approach:
      "Designed the experience with mobile-first workflows, semantic HTML, and a clean visual hierarchy.",
    results:
      "Delivered polished desktop and mobile touchpoints with clear product storytelling and interaction rhythm.",
    tech: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
    image: omnifood,
    github: "https://github.com/adityaladdu/OmniFood",
    live: "https://adityasharma18.netlify.app/",
  },
];

export const hackathons = [
  {
    id: "yukti-2026",
    title: "Yukti 2026",
    category: "Certificate of Appreciation",
    desc: "Innovation Competition showcasing early-stage problem solving and polished concept delivery.",
    images: [yukthi1, yukthi2],
  },
  {
    id: "novus-24",
    title: "Novus 24",
    category: "Hackathon Participant",
    desc: "Rapid prototyping experience under tight timelines with a focus on usability and clarity.",
    images: [novus24],
  },
  {
    id: "technovanza-5",
    title: "Technovanza 5.0",
    category: "Internal Innovation Challenge",
    desc: "A strategic effort aligned to SIH preparation and solution design thinking.",
    images: [technovanza],
  },
];

export const certifications = [
  {
    id: "ms-data-analysis",
    org: "Microsoft",
    title: "Data Analysis Certification",
    verifyUrl: undefined as string | undefined,
    images: [dataAnalysis],
  },
  {
    id: "azure-ml",
    org: "Microsoft Azure",
    title: "Azure Machine Learning Workspace Resources and Assets",
    verifyUrl: undefined as string | undefined,
    images: [azureMachineLearning],
  },
  {
    id: "ms-dev-tools",
    org: "Microsoft",
    title: "Developer Tools for Workspace Interaction",
    verifyUrl: undefined as string | undefined,
    images: [developerTools],
  },
  {
    id: "amazon-q-introduction",
    org: "Amazon Web Services",
    title: "Amazon Q Introduction",
    verifyUrl: undefined as string | undefined,
    images: [amazonQIntroduction],
  },
  {
    id: "amazon-q-developer",
    org: "Amazon Web Services",
    title: "Amazon Q Developer",
    verifyUrl: undefined as string | undefined,
    images: [amazonQDeveloper],
  },
];
