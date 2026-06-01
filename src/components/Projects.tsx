import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { ease } from "@/lib/motion";

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease }}
      className="card-border group flex flex-col overflow-hidden rounded-2xl bg-[#0d0f1a] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
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
          <h3 className="text-[17px] font-bold leading-snug text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-white/50">
            {project.desc}
          </p>
        </div>

        {/* Bottom row: icon buttons */}
        <div className="mt-5 flex items-center justify-end gap-2.5">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label="View live demo"
              className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/50 transition-all duration-200 hover:border-[rgba(255,255,255,0.25)] hover:text-white"
            >
              <ArrowUpRight className="size-[15px]" strokeWidth={1.8} />
            </a>
          ) : (
            <span className="inline-flex size-8 items-center justify-center rounded-lg border border-white/5 text-white/20">
              <ArrowUpRight className="size-[15px]" strokeWidth={1.8} />
            </span>
          )}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="View source code"
              className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/50 transition-all duration-200 hover:border-[rgba(255,255,255,0.25)] hover:text-white"
            >
              <Github className="size-[14px]" strokeWidth={1.8} />
            </a>
          ) : (
            <span className="inline-flex size-8 items-center justify-center rounded-lg border border-white/5 text-white/20">
              <Github className="size-[14px]" strokeWidth={1.8} />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
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
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
