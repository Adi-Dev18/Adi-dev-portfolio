import { motion } from "framer-motion";
import {
  Atom,
  Braces,
  Code2,
  FileCode,
  FileType,
  FormInput,
  GitBranch,
  Move,
  Palette,
  Route,
  Terminal,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { education, techStack } from "@/lib/portfolio-data";
import { ease } from "@/lib/motion";
import { LayoutGroup } from "framer-motion";

type Tab = "stack" | "education";

/* ─── Icon map ─── */
const iconMap: Record<string, LucideIcon> = {
  HTML: FileCode,
  CSS: Palette,
  React: Atom,
  "Tailwind CSS": Wind,
  JavaScript: Braces,
  TypeScript: FileType,
  Python: Terminal,
  Git: GitBranch,
  Vite: Zap,
  "Framer Motion": Move,
  "React Router": Route,
  "React Hook Form": FormInput,
};

/* ─── Single tech item (icon + label inline) ─── */
function TechItem({ name }: { name: string }) {
  const Icon = iconMap[name] ?? Code2;
  return (
    <div className="flex items-center gap-2.5 text-white/70 transition-colors duration-200 hover:text-white">
      <Icon className="size-[18px] flex-shrink-0 text-white/50" strokeWidth={1.4} />
      <span className="text-[13.5px] font-medium">{name}</span>
    </div>
  );
}

/* ─── Category block ─── */
function TechCategory({
  label,
  items,
  icon: CategoryIcon,
}: {
  label: string;
  items: string[];
  icon: LucideIcon;
}) {
  return (
    <div>
      {/* Category header */}
      <div className="mb-5 flex items-center gap-2">
        <CategoryIcon className="size-4 text-blue-400/80" strokeWidth={1.5} />
        <span className="text-[13px] font-semibold text-white">{label}</span>
      </div>

      {/* Items grid */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 pl-1 sm:grid-cols-3 md:grid-cols-4">
        {items.map((item) => (
          <TechItem key={item} name={item} />
        ))}
      </div>
    </div>
  );
}

/* ─── Education tab ─── */
function EducationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease }}
      className="space-y-12"
    >
      {/* Institution name */}
      <div>
        <h3 className="text-[clamp(2rem,4vw,2.5rem)] font-bold text-white leading-tight">
          {education.institution}
        </h3>
      </div>

      {/* Degree */}
      <div>
        <p className="text-[clamp(1.375rem,3vw,1.625rem)] font-semibold text-white/90 leading-relaxed">
          {education.degree}
        </p>
        <p className="mt-2 text-base text-white/60">{education.specialization}</p>
      </div>

      {/* Date range */}
      <div>
        <p className="text-[1rem] font-medium text-white/70">
          {education.period}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.08)" }} />

      {/* Major subjects */}
      <div>
        <p className="mb-6 text-[1.375rem] font-semibold text-white/90">
          Major Subjects
        </p>
        <ul className="space-y-4">
          {education.majorSubjects.map((subject) => (
            <li key={subject} className="flex items-center gap-4 text-[1.125rem] text-white/70 leading-relaxed">
              <span className="size-2 flex-shrink-0 rounded-full bg-white/40" />
              {subject}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}



/* ─── Main export ─── */
export function TechStack() {
  const [tab, setTab] = useState<Tab>("stack");

  return (
    <section id="stack" className="relative bg-black py-24 md:py-36">
      <div className="container-page">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-10"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-white/40">
            02 / Stack
          </p>
          <h2 className="mt-4 text-[clamp(1.8rem,4vw,2.6rem)] font-bold uppercase leading-none tracking-tight text-white">
            Tech Stack & Education
          </h2>
        </motion.div>

        {/* Tab pill switcher with sliding active indicator */}
        <LayoutGroup>
          <div className="mb-8 inline-flex w-full max-w-sm overflow-hidden rounded-full border border-white/10 bg-[#0d0f17] p-1" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            {(
              [
                ["stack", "Tech Stack"],
                ["education", "Education"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className="relative flex-1 rounded-full px-6 py-2.5 text-[12px] font-semibold tracking-wide transition-all duration-300"
              >
                {tab === key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.16)",
                      boxShadow: "0 0 20px rgba(255,255,255,0.03)",
                    }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    tab === key
                      ? "text-white"
                      : "text-white/55 hover:text-white/85"
                  }`}
                  style={{ fontWeight: tab === key ? 600 : 500 }}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        </LayoutGroup>

        {/* Content card — dark rounded box matching screenshot */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease }}
          className="card-border rounded-xl bg-[#0d0f17] p-6 md:p-8"
        >
          {/* Section label for active tab */}
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease }}
            className="mb-6 text-[11px] uppercase tracking-[0.4em] text-white/50"
          >
            {tab === "stack" ? "TECH STACK" : "EDUCATION"}
          </motion.p>

          {tab === "stack" ? (
            <div className="space-y-8">
              <TechCategory
                label="Core"
                items={techStack.core}
                icon={Code2}
              />
              <div className="h-px w-full bg-white/[0.06]" style={{ background: "rgba(255,255,255,0.08)" }} />
              <TechCategory
                label="Languages"
                items={techStack.languages}
                icon={Wrench}
              />
              <div className="h-px w-full bg-white/[0.06]" style={{ background: "rgba(255,255,255,0.08)" }} />
              <TechCategory
                label="Tools"
                items={techStack.tools}
                icon={Wrench}
              />
            </div>
          ) : (
            <EducationCard />
          )}
        </motion.div>
      </div>
    </section>
  );
}
