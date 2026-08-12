import omnifood from "@/assets/omnifood.png";
import project1 from "@/assets/project1.png";
import amazonQDeveloper from "@/assets/Amazon Q Developer.png";
import amazonQIntroduction from "@/assets/Amazon Q Introduction.png";
import azureMachineLearning from "@/assets/Azure Machine Learning.png";
import dataAnalysis from "@/assets/Data Analysis.png";
import developerTools from "@/assets/Developer tools.png";
import awsRag from "@/assets/Screenshot 2026-07-27 223140.png";
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
  core: ["HTML", "CSS", "Python"],
  languages: ["JavaScript", "TypeScript", "React", "Tailwind CSS"],
  tools: ["Git", "Vite", "Framer Motion", "React Router"],
};

export const projects = [
  {
    id: "01",
    slug: "womens-safety-analytics",
    title: "Women's Safety Analytics Platform",
    category: "Analytics Platform",
    description:
      "A data-heavy safety experience that combines product thinking, analytics workflows, and a strong visual storytelling layer.",
    fullDescription:
      "This project was shaped as a practical analytics product for community safety reporting, combining information architecture, visual summaries, and clear incident triage flows for a complex domain.",
    image: project1,
    tech: ["Python", "Data Visualization", "Analytics"],
    github: "https://github.com/Adi-Dev18/RTRP-PROJECT",
    featured: true,
    status: "Completed",
    year: "2025",
    problem:
      "The original workflow depended on fragmented information and lacked a clear way to interpret safety trends quickly.",
    solution:
      "I structured the experience around data clarity, prioritizing readable dashboards, streamlined reporting, and stronger decision support.",
    goal: "Create a product that makes safety monitoring feel actionable rather than overwhelming.",
    technologies: ["Python", "Data Visualization", "Analytics", "Product Thinking"],
    features: [
      "Interactive dashboards",
      "Incident-focused reporting views",
      "Clear information hierarchy",
      "Performance-minded data presentation",
    ],
    challenges: [
      "Turning a sensitive domain into a calm, usable experience without losing essential detail.",
    ],
    solutions: [
      "The interface was simplified around key workflows and supported with clear visual structure.",
    ],
    screenshots: [project1],
    results: [
      "Delivered a stronger information architecture for decision-making and stakeholder review.",
    ],
  },
  {
    id: "02",
    slug: "omnifood",
    title: "OmniFood",
    category: "Food Delivery App",
    description:
      "A polished front-end experience focused on conversion, clarity, and a premium mobile-first product feel.",
    fullDescription:
      "OmniFood was built as a conversion-driven landing experience that balances strong design, thoughtful interactions, and a reliable content structure for a modern food ordering brand.",
    image: omnifood,
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/adityaladdu/omnifood",
    liveDemo: "https://adityasharma18.netlify.app/",
    featured: true,
    status: "Completed",
    year: "2024",
    problem:
      "The experience needed to feel fast, trustworthy, and visually confident while staying lightweight.",
    solution:
      "I focused on a clean layout system, strong hierarchy, and motion that supports the product without feeling ornamental.",
    goal: "Ship a highly polished front-end experience that feels modern and credible on first impression.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: [
      "Mobile-first layout",
      "Conversion-focused calls to action",
      "Clear visual hierarchy",
      "Accessible interaction patterns",
    ],
    challenges: [
      "Balancing visual richness with a lightweight implementation that stays performant.",
    ],
    solutions: [
      "The build was kept modular and content-led, with interactions tuned for clarity rather than noise.",
    ],
    screenshots: [omnifood],
    results: [
      "Produced a clean, reliable front-end experience that communicates confidence and polish.",
    ],
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
    title: "Amazon Q Developer Getting Started",
    verifyUrl: undefined as string | undefined,
    images: [amazonQDeveloper],
  },
  {
    id: "aws-rag-apps",
    org: "AWS Training & Certification",
    title: "Designing Secure Retrieval Augmented Generation (RAG) Applications with AWS",
    verifyUrl: undefined as string | undefined,
    images: [awsRag],
  },
  {
    id: "udemy-html-css",
    org: "Udemy",
    title: "Build Responsive Real-World Websites with HTML and CSS",
    verifyUrl: "https://ude.my/UC-8f778f93-f6e3-477d-87ec-c31bf611c344",
    images: [udemyHtmlCss],
  },
];
