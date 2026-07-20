import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
  Zap,
  Lightbulb,
  Rocket,
  Code,
  CheckCircle2,
  Target,
  Award,
} from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { ease } from "@/lib/motion";
import { Nav } from "@/components/Nav";
import { ProjectCard } from "@/components/Projects";

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug]);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Aditya Portfolio`;
    }
    return () => {
      document.title = "Aditya";
    };
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
      }
      if (e.key === "ArrowLeft") {
        setCurrentImageIndex(
          (prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length,
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, project]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setSelectedImage(project.screenshots[index]);
  };

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container-page relative z-10">
          <button
            type="button"
            onClick={() => navigate("/projects")}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10"
          >
            <ArrowLeft className="size-4" strokeWidth={2} />
            Back to Projects
          </button>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.42em] text-white/60">
              {project.status}
            </span>
            <h1 className="mt-6 text-[clamp(3rem,8vw,5.5rem)] font-bold leading-tight text-white">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              {project.fullDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                {project.category}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                {project.year}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container-page pb-24">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[11px] uppercase tracking-[0.42em] text-white/40">Overview</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold text-white">
            The Challenge & Solution
          </h2>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-4 inline-flex rounded-full bg-red-500/10 p-3">
              <Target className="size-5 text-red-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Problem</h3>
            <p className="text-base leading-8 text-white/65">{project.problem}</p>
          </motion.div>

          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-4 inline-flex rounded-full bg-green-500/10 p-3">
              <Lightbulb className="size-5 text-green-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Solution</h3>
            <p className="text-base leading-8 text-white/65">{project.solution}</p>
          </motion.div>
        </div>

        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <div className="mb-4 inline-flex rounded-full bg-blue-500/10 p-3">
            <Rocket className="size-5 text-blue-400" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">Goal</h3>
          <p className="text-base leading-8 text-white/65">{project.goal}</p>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="container-page pb-24">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[11px] uppercase tracking-[0.42em] text-white/40">Technology stack</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold text-white">
            Premium Toolkit
          </h2>
        </motion.div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {project.technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease }}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container-page pb-24">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[11px] uppercase tracking-[0.42em] text-white/40">Features</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold text-white">
            Key Capabilities
          </h2>
        </motion.div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/8"
            >
              <div className="mt-1 shrink-0 rounded-full bg-blue-500/10 p-2">
                <CheckCircle2 className="size-4 text-blue-400" strokeWidth={1.5} />
              </div>
              <span className="text-base text-white/80">{feature}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="container-page pb-24">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[11px] uppercase tracking-[0.42em] text-white/40">Process</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold text-white">
            Development Journey
          </h2>
        </motion.div>
        <div className="mt-8 space-y-4">
          {[
            {
              icon: Lightbulb,
              title: "Research",
              desc: "Deep dive into requirements and user needs",
            },
            { icon: Code, title: "Design", desc: "Wireframing and prototyping the solution" },
            { icon: Zap, title: "Development", desc: "Building with modern technologies" },
            {
              icon: CheckCircle2,
              title: "Testing",
              desc: "Rigorous QA and performance optimization",
            },
            { icon: Rocket, title: "Deployment", desc: "Launch and continuous monitoring" },
          ].map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease }}
              className="flex items-center gap-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="shrink-0 rounded-full bg-white/10 p-3">
                <step.icon className="size-5 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-white/60">{step.desc}</p>
              </div>
              <div className="text-sm font-mono text-white/40">0{index + 1}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Challenges Section */}
      <section className="container-page pb-24">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[11px] uppercase tracking-[0.42em] text-white/40">Challenges</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold text-white">
            Obstacles & Solutions
          </h2>
        </motion.div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {project.challenges.map((challenge, index) => (
            <motion.div
              key={challenge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-3 inline-flex rounded-full bg-orange-500/10 p-2">
                <Target className="size-4 text-orange-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Challenge</h3>
              <p className="text-sm text-white/65 mb-4">{challenge}</p>
              <div className="h-px w-full bg-white/10 my-4" />
              <div className="mb-3 inline-flex rounded-full bg-green-500/10 p-2">
                <Lightbulb className="size-4 text-green-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Solution</h3>
              <p className="text-sm text-white/65">{project.solutions[index]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="container-page pb-24">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[11px] uppercase tracking-[0.42em] text-white/40">Gallery</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold text-white">
            Visual Showcase
          </h2>
        </motion.div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease }}
              onClick={() => handleImageClick(index)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer transition hover:border-white/20"
            >
              <img
                src={screenshot}
                alt={`${project.title} screenshot ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ExternalLink className="size-8 text-white" strokeWidth={1.5} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="container-page pb-24">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[11px] uppercase tracking-[0.42em] text-white/40">Results</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold text-white">
            Key Outcomes
          </h2>
        </motion.div>
        <div className="mt-8 space-y-4">
          {project.results.map((result, index) => (
            <motion.div
              key={result}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease }}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="mt-1 shrink-0 rounded-full bg-green-500/10 p-2">
                <Award className="size-4 text-green-400" strokeWidth={1.5} />
              </div>
              <span className="text-base text-white/80">{result}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-page pb-24">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.7, ease }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl"
        >
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-white/40">Take Action</p>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold text-white">
                Experience the Project
              </h2>
              <p className="mt-4 text-base text-white/60">
                Explore the live demo or dive into the source code to see how it was built.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-white/90"
                >
                  Launch Live Demo
                  <ExternalLink className="size-5" strokeWidth={1.6} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/30"
                >
                  View Source Code
                  <Github className="size-5" strokeWidth={1.6} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Projects */}
      <section className="container-page pb-24">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[11px] uppercase tracking-[0.42em] text-white/40">Related projects</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold text-white">More Work</h2>
        </motion.div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((p) => p.slug !== project.slug)
            .slice(0, 3)
            .map((relatedProject, index) => (
              <ProjectCard
                key={relatedProject.id}
                project={relatedProject}
                index={index}
                onClick={() => navigate(`/projects/${relatedProject.slug}`)}
              />
            ))}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            >
              <X className="size-6" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(
                  (prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length,
                );
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            >
              <ChevronLeft className="size-6" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            >
              <ChevronRight className="size-6" strokeWidth={1.5} />
            </button>

            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={project.screenshots[currentImageIndex]}
              alt={`${project.title} screenshot`}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
