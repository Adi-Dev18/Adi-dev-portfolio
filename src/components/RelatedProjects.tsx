import { useMemo } from "react";
import { ProjectCard } from "@/components/Projects";
import { useNavigate } from "react-router-dom";

type RelatedProjectsProps = {
  currentSlug: string;
  projects: Array<{
    id: string;
    slug: string;
    title: string;
    category: string;
    image: string;
    shortDescription: string;
    technologies: string[];
    github?: string;
    liveDemo?: string;
  }>;
};

export function RelatedProjects({ currentSlug, projects }: RelatedProjectsProps) {
  const navigate = useNavigate();

  const related = useMemo(
    () => projects.filter((item) => item.slug !== currentSlug).slice(0, 3),
    [currentSlug, projects],
  );

  return (
    <section className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0f1a]/90 p-6 sm:p-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-white/40">More projects</p>
          <h3 className="mt-3 text-[clamp(1.65rem,4vw,2.4rem)] font-semibold text-white">
            Explore other case studies
          </h3>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {related.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => navigate(`/projects/${project.slug}`)}
          />
        ))}
      </div>
    </section>
  );
}
