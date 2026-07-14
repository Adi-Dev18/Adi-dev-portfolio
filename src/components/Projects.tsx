import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/lib/portfolio-data";
import { ease } from "@/lib/motion";

type Project = (typeof projects)[number];

type ProjectCardProps = {
  project: Project;
  index: number;
  onClick: () => void;
};

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      className="group flex flex-col overflow-hidden rounded-[1.25rem] bg-[#0d0f1a] border border-white/[0.08] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:border-white/[0.12] cursor-pointer"
      onClick={onClick}
    >
      {/* Compact Image Area - 55-60% of card height */}
      <div className="relative h-[220px] w-full overflow-hidden sm:h-[240px]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1a]/90 via-[#0d0f1a]/40 to-transparent" />
      </div>

      {/* Compact Information Section */}
      <div className="flex flex-1 flex-col px-5 pt-3 pb-3">
        <h3 className="text-[16px] font-bold leading-tight text-white">{project.title}</h3>
        <p className="mt-2 text-[12px] leading-relaxed text-white/60 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="inline-block rounded-full border border-white/[0.12] bg-white/[0.04] px-2.25 py-1 text-[10.5px] font-medium text-white/70 transition-colors duration-200 group-hover:border-white/[0.18] group-hover:bg-white/[0.06] group-hover:text-white/90"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="inline-block rounded-full border border-white/[0.12] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/70">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Compact Action Buttons - Only Icons */}
        <div className="mt-3 flex items-center gap-2">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              aria-label="View live demo"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.04] text-white/60 transition-all duration-200 hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowUpRight className="size-[14px]" strokeWidth={1.8} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="View source code"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.04] text-white/60 transition-all duration-200 hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="size-[14px]" strokeWidth={1.8} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const navigate = useNavigate();
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative bg-black py-24 md:py-32">
      <div className="container-page max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/40 mb-3">03 / Work</p>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-bold italic leading-none text-white">
              Featured Projects
            </h2>
          </div>

          <button
            type="button"
            onClick={() => navigate("/projects")}
            className="flex items-center gap-2 text-[13px] text-white/50 transition-colors duration-200 hover:text-white"
          >
            View All
            <ArrowUpRight className="size-4" strokeWidth={1.5} />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => navigate(`/projects/${project.slug}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
