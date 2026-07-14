import omnifood from "@/assets/omnifood.png";
import projectAtelier from "@/assets/project-atelier.jpg";
import projectLumen from "@/assets/project-lumen.jpg";
import project1 from "@/assets/project1.png";
import amazonQDeveloper from "@/assets/Amazon Q Developer.png";
import amazonQIntroduction from "@/assets/Amazon Q Introduction.png";
import azureMachineLearning from "@/assets/Azure Machine Learning.png";
import dataAnalysis from "@/assets/Data Analysis.png";
import developerTools from "@/assets/Developer tools.png";
import udemyHtmlCss from "@/assets/udemy html&css.png";
import novus24 from "@/assets/Novus24.png";
import technovanza from "@/assets/Technovanza.png";
import yukthi1 from "@/assets/Yukthi 1.png";
import yukthi2 from "@/assets/Yukthi 2.png";

export const social = {
  github: "https://github.com/adityaladdu",
  linkedin: "https://www.linkedin.com/in/aditya-kumar-833112258/",
  email: "adithyaluddu@gmail.com",
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

export const diploma = {
  institution: "SREE DATTHA INSTITUTION",
  program: "Diploma in Electronics & Communication Engineering (ECE)",
  duration: "2022 – 2025",
  overview:
    "Completed a Diploma in Electronics & Communication Engineering with a strong foundation in electronics, communication systems, embedded systems, and digital technologies. Developed analytical thinking, problem-solving skills, and practical engineering knowledge through both theoretical and laboratory-based learning.",
  majorSubjects: [
    "Foundational & Basic Sciences",
    "Electronic Devices and Circuits",
    "Digital Electronics",
    "Microcontrollers",
    "VLSI Technology",
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
    slug: "womens-safety-analytics",
    title: "Women's Safety Analytics Platform",
    category: "Analytics Platform",
    description:
      "A comprehensive analytics platform for women's safety with real-time data visualization, incident tracking, and predictive analytics to enhance community safety measures.",
    image: project1,
    tech: ["React", "Python", "TensorFlow", "Leaflet", "MongoDB"],
    github: "https://github.com/adityaladdu/womens-safety-analytics",
    liveDemo: "-",
    featured: true,
  },
  {
    id: "02",
    slug: "omnifood",
    title: "OmniFood",
    category: "Food Delivery App",
    description:
      "A modern food delivery application with real-time order tracking, restaurant discovery, and seamless checkout experience for hungry customers.",
    image: omnifood,
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/adityaladdu/omnifood",
    liveDemo: "https://adityasharma18.netlify.app/",
    featured: true,
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
  {
    id: "udemy-html-css",
    org: "Udemy",
    title: "Build Responsive Real-World Websites with HTML and CSS",
    verifyUrl: "https://ude.my/UC-8f778f93-f6e3-477d-87ec-c31bf611c344",
    images: [udemyHtmlCss],
  },
];
