import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  Bot,
  Code2,
  Compass,
  Lightbulb,
  Search,
  BarChart3,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { ease, fadeUp, stagger } from "@/lib/motion";

export function InnovationCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Clickable interactive Figma element state
  const [toggleActive, setToggleActive] = useState(true);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x, y });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouse({ x: 0, y: 0 });
  };

  return (
    <section id="innovation" className="relative overflow-x-hidden bg-black py-28 md:py-40">
      <div className="container-page">
        <div className="grid min-w-0 items-center gap-16 lg:grid-cols-[35%_65%]">
          {/* LEFT COLUMN: Large Typography & Massive Whitespace */}
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
              className="text-display mt-8 max-w-full font-bold uppercase text-white text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.9] tracking-[-0.04em]"
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
              className="mt-8 text-sm leading-relaxed text-white/50 max-w-xs"
            >
              An interactive visual map of my research, planning, product architecture, frontend
              engineering, and AI workflow pipeline.
            </motion.p>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Miro-Style Collaborative Canvas */}
          <div
            ref={canvasRef}
            className="relative w-full overflow-x-auto overflow-y-hidden md:overflow-visible scrollbar-none py-4"
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="card-border relative min-w-[780px] md:min-w-0 h-[580px] w-full bg-black rounded-sm overflow-hidden [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] group/canvas transition-all duration-300"
            >
              {/* Flowing Connected SVG Paths */}
              <svg className="absolute inset-0 pointer-events-none size-full z-0">
                {/* 1. Research -> Planning */}
                <motion.path
                  d="M 180,95 C 260,95 280,85 380,85"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1.5"
                  strokeDasharray="4, 4"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                />

                {/* 2. Planning -> Figma Component */}
                <motion.path
                  d="M 380,85 C 280,120 180,180 180,240"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1.5"
                  strokeDasharray="4, 4"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                />

                {/* 3. Figma Component -> AI Router */}
                <motion.path
                  d="M 180,290 C 280,290 320,270 380,270"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1.5"
                  strokeDasharray="4, 4"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                />

                {/* 4. AI Router -> Latency Metrics */}
                <motion.path
                  d="M 380,270 C 380,340 180,380 150,420"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1.5"
                  strokeDasharray="4, 4"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                />

                {/* 5. AI Router -> Customer voice */}
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

              {/* CARD 1: Research signal note (Subtle parallax depth) */}
              <div
                style={{
                  position: "absolute",
                  top: "12%",
                  left: "6%",
                  transform: isHovered
                    ? `translate(${mouse.x * 15}px, ${mouse.y * 15}px)`
                    : "translate(0px, 0px)",
                  transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
                className="z-10 w-full max-w-[200px] border border-dashed border-white/20 bg-black/60 p-4 rounded-sm transition-all duration-300 hover:border-[rgba(255,255,255,0.25)] hover:scale-[1.015]"
              >
                <div className="flex items-center gap-2 text-white/50">
                  <Search className="size-3.5" strokeWidth={1.5} />
                  <span className="text-[9px] uppercase tracking-wider">Research Signal</span>
                </div>
                <h4 className="mt-3 text-xs font-semibold text-white">NLP Topic Modeling</h4>
                <p className="mt-2 text-[10px] leading-relaxed text-white/60">
                  76% of users request optimized caching workflows to reduce query costs.
                </p>
              </div>

              {/* CARD 2: Sprint Kanban Item */}
              <div
                style={{
                  position: "absolute",
                  top: "8%",
                  left: "54%",
                  transform: isHovered
                    ? `translate(${mouse.x * 8}px, ${mouse.y * 8}px)`
                    : "translate(0px, 0px)",
                  transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
                className="z-10 w-full max-w-[220px] border border-white/10 bg-transparent p-4 rounded-sm transition-all duration-300 hover:border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.01)] hover:scale-[1.015]"
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
                  <span className="rounded-sm border border-white/5 bg-white/[0.04] px-1.5 py-0.5 text-white/60 uppercase">
                    High Priority
                  </span>
                </div>
              </div>

              {/* CARD 3: Figma Interactive UI Switch Frame */}
              <div
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "8%",
                  transform: isHovered
                    ? `translate(${mouse.x * 24}px, ${mouse.y * 24}px)`
                    : "translate(0px, 0px)",
                  transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                  boxShadow: toggleActive ? "0 0 20px rgba(255, 255, 255, 0.05)" : "none",
                }}
                className={`z-10 w-full max-w-[210px] border p-4 rounded-sm transition-all duration-300 ${
                  toggleActive ? "border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.02)]" : "border-white/10 bg-transparent"
                }`}
              >
                <div className="flex items-center justify-between text-white/50">
                  <div className="flex items-center gap-1.5">
                    <Code2 className="size-3.5" strokeWidth={1.5} />
                    <span className="text-[9px] uppercase tracking-wider">UI COMPONENT</span>
                  </div>
                  <span className="text-[9px] tracking-wide text-white/40">Figma Live</span>
                </div>

                {/* Toggle interactive component */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-white">Interactive Cache</span>
                  <button
                    type="button"
                    onClick={() => setToggleActive(!toggleActive)}
                    className="cursor-pointer text-white transition-opacity hover:opacity-80"
                  >
                    <div
                      className={`w-8 h-4 rounded-full p-0.5 transition-colors duration-300 ${
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

                <div className="mt-4 border-t border-white/5 pt-3 flex items-center gap-2">
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
              </div>

              {/* CARD 4: AI Workflow router Node */}
              <div
                style={{
                  position: "absolute",
                  top: "35%",
                  left: "56%",
                  transform: isHovered
                    ? `translate(${mouse.x * 12}px, ${mouse.y * 12}px)`
                    : "translate(0px, 0px)",
                  transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
                className="z-10 w-full max-w-[240px] border border-white/10 bg-[#111111]/90 p-4 rounded-sm transition-all duration-300 hover:border-white/30 hover:scale-[1.015]"
              >
                <div className="flex items-center gap-1.5 text-white/50">
                  <Bot className="size-3.5" strokeWidth={1.5} />
                  <span className="text-[9px] uppercase tracking-wider">AI Workflow Model</span>
                </div>
                <h4 className="mt-3 text-xs font-semibold text-white">Cache Router Pipeline</h4>

                {/* Visual model node representation */}
                <div className="mt-3 flex items-center gap-1 bg-black/60 border border-white/5 p-2 rounded-xs text-[9px] text-white/60">
                  <span>Input</span>
                  <span className="text-white/30">→</span>
                  <span className="text-white">LLM Router</span>
                  <span className="text-white/30">→</span>
                  <span className="rounded-sm bg-white/10 px-1 text-white font-medium">
                    Claude 3.5
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-1.5 text-[9px] text-white/40">
                  <Sparkles className="size-3 text-white/60 animate-pulse" />
                  <span>Cost savings: 42% on repetitive logs</span>
                </div>
              </div>

              {/* CARD 5: Telemetry Insights progress bar */}
              <div
                style={{
                  position: "absolute",
                  top: "68%",
                  left: "5%",
                  transform: isHovered
                    ? `translate(${mouse.x * -10}px, ${mouse.y * -10}px)`
                    : "translate(0px, 0px)",
                  transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
                className="z-10 w-full max-w-[200px] border border-white/10 bg-transparent p-4 rounded-sm transition-all duration-300 hover:border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.01)] hover:scale-[1.015]"
              >
                <div className="flex items-center gap-1.5 text-white/50">
                  <BarChart3 className="size-3.5" strokeWidth={1.5} />
                  <span className="text-[9px] uppercase tracking-wider">Data Insights</span>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-2xl font-bold tracking-tight text-white font-mono">
                    120ms
                  </span>
                  <span className="text-[9px] text-emerald-500 font-medium">▲ 4x Faster</span>
                </div>

                <p className="mt-1.5 text-[9px] text-white/50">Server response latency</p>

                {/* Pulsing loading bar */}
                <div className="mt-3 h-1 w-full bg-white/5 overflow-hidden rounded-full">
                  <motion.div
                    className="h-full bg-white origin-left"
                    animate={{ scaleX: [0.15, 0.85, 0.15] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* CARD 6: Speech bubble Feedback Bubble */}
              <div
                style={{
                  position: "absolute",
                  top: "70%",
                  left: "52%",
                  transform: isHovered
                    ? `translate(${mouse.x * 18}px, ${mouse.y * 18}px)`
                    : "translate(0px, 0px)",
                  transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
                className="z-10 w-full max-w-[230px] border border-white/10 bg-transparent p-4 rounded-sm transition-all duration-300 hover:border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.01)] hover:scale-[1.015]"
              >
                <div className="flex items-center gap-1.5 text-white/50">
                  <MessageSquare className="size-3.5" strokeWidth={1.5} />
                  <span className="text-[9px] uppercase tracking-wider">User Feedback</span>
                </div>
                <blockquote className="mt-3 text-[10px] leading-relaxed text-white/70 italic">
                  &ldquo;The cache routing middleware reduced our cloud model cost by 40% with zero
                  latency penalty.&rdquo;
                </blockquote>
                <div className="mt-3 text-[9px] text-white/40 text-right">
                  — Frontend Lead Architect
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
