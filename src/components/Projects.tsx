import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { ease } from "@/lib/motion";
import { useState, useEffect } from "react";

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease }}
      className="card-border group flex flex-col overflow-hidden rounded-2xl bg-[#0d0f1a] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)] cursor-pointer"
      onClick={onClick}
    >
      {/* ── Image area ── */}
      <div className="relative h-52 w-full overflow-hidden sm:h-60 lg:h-64">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1a]/70 via-transparent to-transparent" />

        {/* Number badge — top-left */}
        <div className="absolute left-3 top-3 flex size-7 items-center justify-center rounded-full bg-black/60 text-[11px] font-bold text-white backdrop-blur-sm">
          {project.id}
        </div>

        {/* Category badge — top-right */}
        <div className="absolute right-3 top-3 rounded bg-black/60 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
          {project.kind.split("•")[0].trim()}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="text-[17px] font-bold leading-snug text-white">{project.title}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-white/50">{project.desc}</p>

          {/* ── TL;DR Info Layer ── */}
          <div className="mt-5 space-y-3">
            {/* Tech Stack */}
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="inline-block rounded border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.03)] px-2 py-1 text-[11px] text-white/60"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="inline-block rounded border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.03)] px-2 py-1 text-[11px] text-white/60">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Impact */}
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">Impact</p>
              <p className="text-[12px] leading-relaxed text-white/70">{project.results}</p>
            </div>
          </div>
        </div>

        {/* Bottom row: icon buttons */}
        <div className="mt-5 flex items-center justify-end gap-2.5">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label="View live demo"
              className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg border border-[rgba(255,255,255,0.14)] bg-white/[0.04] text-white/50 transition-all duration-200 hover:border-[rgba(255,255,255,0.25)] hover:bg-white/[0.08] hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowUpRight className="size-[15px]" strokeWidth={1.8} />
            </a>
          ) : (
            <span className="inline-flex size-8 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.08)] text-white/20">
              <ArrowUpRight className="size-[15px]" strokeWidth={1.8} />
            </span>
          )}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="View source code"
              className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg border border-[rgba(255,255,255,0.14)] bg-white/[0.04] text-white/50 transition-all duration-200 hover:border-[rgba(255,255,255,0.25)] hover:bg-white/[0.08] hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="size-[14px]" strokeWidth={1.8} />
            </a>
          ) : (
            <span className="inline-flex size-8 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.08)] text-white/20">
              <Github className="size-[14px]" strokeWidth={1.8} />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease }}
          className="fixed inset-4 md:inset-8 lg:inset-12 overflow-hidden rounded-2xl bg-[#0d0f1a]"
          style={{ borderColor: "rgba(255,255,255,0.14)", borderWidth: "1px" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-black/60 text-white/90 transition-colors hover:bg-black/80 hover:text-white"
          >
            <X className="size-5" strokeWidth={2} />
          </button>

          {/* Scrollable content */}
          <div className="h-full overflow-y-auto">
            {/* Large image */}
            <div className="relative h-64 w-full sm:h-80 md:h-96">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1a] to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              <div className="mb-8">
                <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">
                  {project.kind}
                </p>
                <h2 className="mt-4 text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight text-white">
                  {project.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white/70">{project.desc}</p>
              </div>

              <div className="space-y-8">
                {/* Problem */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
                    Problem
                  </h3>
                  <p className="text-base leading-relaxed text-white/60">{project.problem}</p>
                </div>

                {/* Approach */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
                    Approach
                  </h3>
                  <p className="text-base leading-relaxed text-white/60">{project.approach}</p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
                    Results
                  </h3>
                  <p className="text-base leading-relaxed text-white/60">{project.results}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full px-3 py-1.5 text-sm text-white/70"
                        style={{
                          borderColor: "rgba(255,255,255,0.14)",
                          borderWidth: "1px",
                          backgroundColor: "rgba(255,255,255,0.03)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition-all duration-200"
                    style={{
                      borderColor: "rgba(255,255,255,0.14)",
                      borderWidth: "1px",
                      backgroundColor: "rgba(255,255,255,0.03)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                    }}
                  >
                    Live Demo
                    <ArrowUpRight className="size-4" strokeWidth={1.5} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition-all duration-200"
                    style={{
                      borderColor: "rgba(255,255,255,0.14)",
                      borderWidth: "1px",
                      backgroundColor: "rgba(255,255,255,0.03)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                    }}
                  >
                    GitHub
                    <Github className="size-4" strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <section id="projects" className="relative bg-black py-24 md:py-32">
      <div className="container-page">
        {/* ── Header row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-10 flex items-end justify-between"
        >
          {/* Title — italic serif style matching screenshot */}
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.4rem)] font-bold italic leading-none text-white">
            featured projects
          </h2>

          {/* "view more" link */}
          <a
            href="https://github.com/adityaladdu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[13px] text-white/50 transition-colors duration-200 hover:text-white"
          >
            view more
            <ArrowUpRight className="size-4" strokeWidth={1.5} />
          </a>
        </motion.div>

        {/* ── 2-column grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
