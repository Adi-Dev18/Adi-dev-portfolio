import { motion } from "framer-motion";
import { projects } from "@/lib/portfolio-data";
import { ease } from "@/lib/motion";
import { useNavigate } from "react-router-dom";
import { ProjectCard } from "@/components/Projects";
import { Nav } from "@/components/Nav";

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Nav />

      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="max-w-4xl"
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/40">All Projects</p>
            <h1 className="mt-4 text-[clamp(3rem,8vw,6rem)] font-bold leading-tight text-white">
              MY PROJECTS
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              A collection of my work in frontend engineering, machine learning, and data science.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => navigate(`/projects/${project.slug}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
