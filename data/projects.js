import movizzImage from "../src/assets/project1.png";
import weatherImage from "../src/assets/project-lumen.jpg";
import jsQuizImage from "../src/assets/project-atelier.jpg";
import todoImage from "../src/assets/omnifood.png";

export const projects = [
  {
    id: "01",
    slug: "movizz",
    title: "MOVIZZ",
    category: "Movie Discovery Platform",
    image: movizzImage,
    shortDescription:
      "A modern IMDB-inspired platform built with React, TMDB API, and premium motion-driven UX.",
    fullDescription:
      "MOVIZZ is a polished movie discovery case study designed for cinematic storytelling, curated searches, and elegant film exploration. The experience blends fast API-driven results with a premium dark interface optimized for modern viewers.",
    status: "Completed",
    year: "2025",
    role: "Full-stack UI, API integration, experience design",
    projectType: "Web App",
    duration: "12 weeks",
    teamSize: "Solo",
    targetUsers: "Movie lovers, binge-watchers, entertainment researchers",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TMDB API", "TanStack Query"],
    features: [
      "Trending movies dashboard",
      "Live search with autocomplete",
      "Poster-rich gallery experience",
      "Favorites collection & detail overlays",
      "Responsive cinema-first layouts",
    ],
    screenshots: [movizzImage, weatherImage, jsQuizImage],
    github: "https://github.com/adityaladdu/movizz",
    liveDemo: "https://movizz.example.com",
    problem:
      "Discovery experiences for movie fans are often cluttered, slow, and lacking modern polish. Many interfaces bury key information beneath overwhelming UI elements.",
    goal: "Build a premium movie browsing experience that feels cinematic, keeps interactions minimal, and surfaces relevant content instantly.",
    solution:
      "Created a sleek movie discovery platform with prioritized media, fast search, and a seamless mobile-first flow powered by TMDB.",
    challenges: [
      "Delivering instant search results with rich media previews.",
      "Keeping details accessible without sacrificing visual hierarchy.",
    ],
    solutions: [
      "Implemented TanStack Query caching and debounce logic to keep search fast and responsive.",
      "Designed layered overlay cards that reveal metadata without leaving the page.",
    ],
    learnings: [
      "Advanced API caching patterns with TanStack Query.",
      "How to balance immersive visuals with accessible navigation.",
      "Optimizing large image assets for a sleek loading experience.",
    ],
    results: [
      "35% faster data queries through smart cache hydration.",
      "A cohesive visual system that supports content-first discovery.",
      "A polished mobile and desktop experience aligned with premium brand design.",
    ],
  },
  {
    id: "02",
    slug: "weather-app",
    title: "Weather App",
    category: "Forecast Dashboard",
    image: weatherImage,
    shortDescription:
      "A sleek weather dashboard with real-time forecasts, location search, and polished motion-led data layers.",
    fullDescription:
      "The Weather App is a premium forecasting experience built for clarity, speed, and trust. It combines layered weather visuals with a sharp data hierarchy, making it easy to understand current conditions at a glance.",
    status: "Completed",
    year: "2026",
    role: "UX design, frontend architecture, API delivery",
    projectType: "Web App",
    duration: "8 weeks",
    teamSize: "Solo",
    targetUsers: "Daily commuters, travelers, weather enthusiasts",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Weather API", "Framer Motion"],
    features: [
      "Real-time local forecasts",
      "Animated weather canvas",
      "Daily and hourly breakdowns",
      "Location-based search",
      "Performance-focused UI transitions",
    ],
    screenshots: [weatherImage, movizzImage, todoImage],
    github: "https://github.com/adityaladdu/weather-app",
    liveDemo: "https://weather.example.com",
    problem:
      "Many weather dashboards feel stale and overly complex, making key numbers harder to consume on the go.",
    goal: "Create a weather interface that feels calm, confident, and easy to use in just a few seconds.",
    solution:
      "Built a clean forecast experience with bold data cards, subtle motion, and a strong visual rhythm.",
    challenges: [
      "Communicating weather details without creating visual noise.",
      "Handling variable data safely across global locations.",
    ],
    solutions: [
      "Used a restrained palette and glassmorphism panels for clarity.",
      "Added robust error handling and fallback messaging for missing data.",
    ],
    learnings: [
      "Designing data-first experiences for uncertain API responses.",
      "Creating motion that supports readability rather than distracts.",
      "Balancing weather state with a premium dark visual system.",
    ],
    results: [
      "Improved forecast comprehension with a simplified hierarchy.",
      "A modern, polished product fit for a professional portfolio.",
      "Fast, responsive navigation across devices.",
    ],
  },
  {
    id: "03",
    slug: "js-quiz",
    title: "JS Quiz",
    category: "Learning Platform",
    image: jsQuizImage,
    shortDescription:
      "An AI-powered quiz experience for developers with leaderboard, timed challenges, and polished learning flows.",
    fullDescription:
      "JS Quiz is a premium developer assessment case study that blends intelligent prompts, interactive learning, and a refined interface tailored to modern developer habits.",
    status: "Completed",
    year: "2025",
    role: "Product design, frontend engineering, UX flow",
    projectType: "Web App",
    duration: "10 weeks",
    teamSize: "Solo",
    targetUsers: "Developers, learners, coding challenge enthusiasts",
    technologies: ["React", "Tailwind CSS", "AI", "GitHub API", "Framer Motion"],
    features: [
      "GitHub profile-based onboarding",
      "Timed question sessions",
      "Live leaderboard integration",
      "Adaptive quiz feedback",
      "Clean, distraction-free interface",
    ],
    screenshots: [jsQuizImage, movizzImage, weatherImage],
    github: "https://github.com/adityaladdu/js-quiz",
    liveDemo: "https://jsquiz.example.com",
    problem:
      "Developer learning platforms often feel dated and lack frictionless onboarding for technical learners.",
    goal: "Design a modern, fast-paced quiz product that rewards speed, accuracy, and clarity.",
    solution:
      "Created a sleek challenge interface with instant feedback and compact progress cues.",
    challenges: [
      "Keeping the interface lightweight while supporting full quiz state.",
      "Providing motivating feedback without overwhelming the user.",
    ],
    solutions: [
      "Built a clean result summary with clear progression indicators.",
      "Used subtle motion to guide attention through each quiz stage.",
    ],
    learnings: [
      "How to design UI for fast task completion.",
      "Balancing game-like feedback with professional polish.",
      "Handling user state through quiz sessions reliably.",
    ],
    results: [
      "Delivered an engaging developer-first quiz flow.",
      "Kept interaction friction low with smart microcopy.",
      "Established a polished product experience for portfolio storytelling.",
    ],
  },
  {
    id: "04",
    slug: "todo-app",
    title: "TOD0 App",
    category: "Productivity Tool",
    image: todoImage,
    shortDescription:
      "A dark-mode task system built with TanStack Query and rich task management interactions.",
    fullDescription:
      "TOD0 App is a case study in premium productivity design. It focuses on fast task flows, structured lists, and a polished visual system that supports daily task management.",
    status: "Completed",
    year: "2026",
    role: "UI systems, interaction design, frontend build",
    projectType: "Web App",
    duration: "9 weeks",
    teamSize: "Solo",
    targetUsers: "Productivity seekers, developers, planners",
    technologies: ["React", "TypeScript", "Tailwind CSS", "TanStack Query", "REST API"],
    features: [
      "Task priorities and filters",
      "Live sync with backend data",
      "Dark-mode focused interface",
      "Intuitive item controls",
      "Performance-aware list rendering",
    ],
    screenshots: [todoImage, jsQuizImage, weatherImage],
    github: "https://github.com/adityaladdu/todo-app",
    liveDemo: "https://todo.example.com",
    problem:
      "Many task apps are noisy, forcing users to hunt for priorities and focus in busy interfaces.",
    goal: "Craft a premium, calm productivity interface for meaningful daily planning.",
    solution:
      "Built a refined task experience with strong contrast, concise controls, and clear progress states.",
    challenges: [
      "Avoiding feature bloat while preserving power.",
      "Maintaining a polished experience across browser refreshes.",
    ],
    solutions: [
      "Used a minimal task card system with subtle interaction feedback.",
      "Added resilient API caching for consistent task state.",
    ],
    learnings: [
      "Refining productivity interfaces for calm focus.",
      "Enhancing task flows with smooth motion and accessible controls.",
      "Managing remote state with reliability and speed.",
    ],
    results: [
      "A polished task experience that feels premium and intentional.",
      "Strong information hierarchy for quick daily planning.",
      "A scalable design system for productivity-focused apps.",
    ],
  },
];
