import { motion } from "framer-motion";
import { useMemo, useRef, useState, type MouseEvent } from "react";
import {
  BarChart3,
  Bot,
  Code2,
  Compass,
  Lightbulb,
  MessageSquare,
  Search,
  Sparkles,
} from "lucide-react";
import { ease, fadeUp, stagger } from "@/lib/motion";

type CanvasCardProps = {
  children: React.ReactNode;
  className?: string;
  position: { top: string; left: string };
  intensity: number;
  hover?: boolean;
  accent?: boolean;
};

function CanvasCard({ children, className, position, intensity, hover = false }: CanvasCardProps) {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        transform: hover ? `translate(${intensity}px, ${intensity}px)` : "translate(0px, 0px)",
        transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
        borderColor: "rgba(255,255,255,0.14)",
        borderWidth: "1px",
      }}
    >
      {children}
    </div>
  );
}

export function InnovationCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [toggleActive, setToggleActive] = useState(true);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x, y });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouse({ x: 0, y: 0 });
  };

  const cardMotion = useMemo(
    () => ({
      cardOne: isHovered ? mouse.x * 15 : 0,
      cardTwo: isHovered ? mouse.x * 8 : 0,
      cardThree: isHovered ? mouse.x * 24 : 0,
      cardFour: isHovered ? mouse.x * 12 : 0,
      cardFive: isHovered ? mouse.x * -10 : 0,
      cardSix: isHovered ? mouse.x * 18 : 0,
    }),
    [isHovered, mouse.x],
  );

  return (
    <section id="innovation" className="relative overflow-x-hidden bg-black py-28 md:py-40">
      <div className="container-page">
        <div className="grid min-w-0 items-center gap-16 lg:grid-cols-[35%_65%]">
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-12% 0px" }}
            className="min-w-0 self-center pr-4"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.9, ease }}
              className="text-[11px] uppercase tracking-[0.4em] text-white/50"
            >
              01 / WORKSPACE
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 1.1, ease }}
              className="mt-8 max-w-full text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white"
            >
              FROM IDEAS
              <br />
              TO DIGITAL
              <br />
              EXPERIENCES.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 1.1, ease }}
              className="mt-8 max-w-xs text-sm leading-relaxed text-white/50"
            >
              An interactive visual map of my research, planning, product architecture, frontend
              engineering, and AI workflow pipeline.
            </motion.p>
          </motion.div>

          <div
            ref={canvasRef}
            className="relative w-full overflow-x-auto overflow-y-hidden py-4 md:overflow-visible"
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative h-[580px] w-full min-w-[780px] overflow-hidden rounded-lg border border-white/10 bg-black bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[24px_24px] transition-all duration-300 md:min-w-0"
            >
              <svg className="pointer-events-none absolute inset-0 z-0 size-full">
                <motion.path
                  d="M 180,95 C 260,95 280,85 380,85"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1.5"
                  strokeDasharray="4, 4"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                />
                <motion.path
                  d="M 380,85 C 280,120 180,180 180,240"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1.5"
                  strokeDasharray="4, 4"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                />
                <motion.path
                  d="M 180,290 C 280,290 320,270 380,270"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1.5"
                  strokeDasharray="4, 4"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                />
                <motion.path
                  d="M 380,270 C 380,340 180,380 150,420"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1.5"
                  strokeDasharray="4, 4"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                />
                <motion.path
                  d="M 380,270 C 380,340 340,365 360,420"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1.5"
                  strokeDasharray="4, 4"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                />
              </svg>

              <CanvasCard
                position={{ top: "12%", left: "6%" }}
                intensity={cardMotion.cardOne}
                hover={isHovered}
                className="z-10 w-full max-w-[200px] rounded-lg border-dashed bg-black/60 p-4 transition-all duration-300 hover:scale-[1.015] hover:border-white/25"
              >
                <div className="flex items-center gap-2 text-white/50">
                  <Search className="size-3.5" strokeWidth={1.5} />
                  <span className="text-[9px] uppercase tracking-wider">Research Signal</span>
                </div>
                <h4 className="mt-3 text-xs font-semibold text-white">NLP Topic Modeling</h4>
                <p className="mt-2 text-[10px] leading-relaxed text-white/60">
                  76% of users request optimized caching workflows to reduce query costs.
                </p>
              </CanvasCard>

              <CanvasCard
                position={{ top: "8%", left: "54%" }}
                intensity={cardMotion.cardTwo}
                hover={isHovered}
                className="z-10 w-full max-w-[220px] rounded-lg bg-transparent p-4 transition-all duration-300 hover:scale-[1.015] hover:border-white/25 hover:bg-white/[0.01]"
              >
                <div className="flex items-center justify-between text-white/50">
                  <div className="flex items-center gap-1.5">
                    <Compass className="size-3.5" strokeWidth={1.5} />
                    <span className="text-[9px] uppercase tracking-wider">ADI-308 · Sprint</span>
                  </div>
                  <span className="inline-flex size-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h4 className="mt-3 text-xs font-semibold text-white">Cache Router Middleware</h4>
                <p className="mt-2 text-[10px] leading-relaxed text-white/60">
                  Develop intelligent route-caching algorithm inside standard ML server.
                </p>
                <div className="mt-3 flex items-center justify-between text-[9px]">
                  <span className="text-white/40">Sprint backlog</span>
                  <span className="rounded-lg border border-white/10 bg-white/5 px-1.5 py-0.5 font-medium uppercase text-white/70">
                    High Priority
                  </span>
                </div>
              </CanvasCard>

              <CanvasCard
                position={{ top: "40%", left: "8%" }}
                intensity={cardMotion.cardThree}
                hover={isHovered}
                className={`z-10 w-full max-w-[210px] rounded-lg p-4 transition-all duration-300 ${
                  toggleActive ? "bg-white/[0.02]" : "bg-transparent"
                }`}
              >
                <div className="flex items-center justify-between text-white/50">
                  <div className="flex items-center gap-1.5">
                    <Code2 className="size-3.5" strokeWidth={1.5} />
                    <span className="text-[9px] uppercase tracking-wider">UI COMPONENT</span>
                  </div>
                  <span className="text-[9px] tracking-wide text-white/40">Figma Live</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-white">Interactive Cache</span>
                  <button
                    type="button"
                    onClick={() => setToggleActive((current) => !current)}
                    className="cursor-pointer text-white transition-opacity hover:opacity-80"
                  >
                    <div
                      className={`h-4 w-8 rounded-full p-0.5 transition-colors duration-300 ${
                        toggleActive ? "bg-white" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`size-3 rounded-full bg-black transition-transform duration-300 ${
                          toggleActive ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </div>
                  </button>
                </div>

                <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-3">
                  <Lightbulb
                    className={`size-3.5 transition-colors duration-300 ${
                      toggleActive
                        ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        : "text-white/20"
                    }`}
                    strokeWidth={1.5}
                  />
                  <span className="text-[10px] text-white/50">
                    {toggleActive ? "Cache layer active" : "Cache bypassed"}
                  </span>
                </div>
              </CanvasCard>

              <CanvasCard
                position={{ top: "35%", left: "56%" }}
                intensity={cardMotion.cardFour}
                hover={isHovered}
                className="z-10 w-full max-w-[240px] rounded-lg bg-[#111111]/90 p-4 transition-all duration-300 hover:scale-[1.015] hover:border-white/30"
              >
                <div className="flex items-center gap-1.5 text-white/50">
                  <Bot className="size-3.5" strokeWidth={1.5} />
                  <span className="text-[9px] uppercase tracking-wider">AI Workflow Model</span>
                </div>
                <h4 className="mt-3 text-xs font-semibold text-white">Cache Router Pipeline</h4>

                <div className="mt-3 flex items-center gap-1 rounded-lg border border-white/5 bg-black/60 p-2 text-[9px] text-white/60">
                  <span>Input</span>
                  <span className="text-white/30">→</span>
                  <span className="text-white">LLM Router</span>
                  <span className="text-white/30">→</span>
                  <span className="rounded-lg bg-white/10 px-1 font-medium text-white">
                    Claude 3.5
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-1.5 text-[9px] text-white/40">
                  <Sparkles className="size-3 animate-pulse text-white/60" />
                  <span>Cost savings: 42% on repetitive logs</span>
                </div>
              </CanvasCard>

              <CanvasCard
                position={{ top: "68%", left: "5%" }}
                intensity={cardMotion.cardFive}
                hover={isHovered}
                className="z-10 w-full max-w-[200px] rounded-lg bg-transparent p-4 transition-all duration-300 hover:scale-[1.015] hover:border-white/25 hover:bg-white/[0.01]"
              >
                <div className="flex items-center gap-1.5 text-white/50">
                  <BarChart3 className="size-3.5" strokeWidth={1.5} />
                  <span className="text-[9px] uppercase tracking-wider">Data Insights</span>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-mono text-2xl font-bold tracking-tight text-white">
                    120ms
                  </span>
                  <span className="text-[9px] font-medium text-emerald-500">▲ 4x Faster</span>
                </div>

                <p className="mt-1.5 text-[9px] text-white/50">Server response latency</p>

                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full origin-left bg-white"
                    animate={{ scaleX: [0.15, 0.85, 0.15] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  />
                </div>
              </CanvasCard>

              <CanvasCard
                position={{ top: "70%", left: "52%" }}
                intensity={cardMotion.cardSix}
                hover={isHovered}
                className="z-10 w-full max-w-[230px] rounded-lg bg-transparent p-4 transition-all duration-300 hover:scale-[1.015] hover:border-white/25 hover:bg-white/[0.01]"
              >
                <div className="flex items-center gap-1.5 text-white/50">
                  <MessageSquare className="size-3.5" strokeWidth={1.5} />
                  <span className="text-[9px] uppercase tracking-wider">User Feedback</span>
                </div>
                <blockquote className="mt-3 text-[10px] leading-relaxed text-white/70 italic">
                  “The cache routing middleware reduced our cloud model cost by 40% with zero
                  latency penalty.”
                </blockquote>
                <div className="mt-3 text-right text-[9px] text-white/40">
                  — Frontend Lead Architect
                </div>
              </CanvasCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
