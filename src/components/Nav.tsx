import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ease } from "@/lib/motion";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const links = [
  ["Innovation", "innovation"],
  ["Stack", "stack"],
  ["Work", "projects"],
  ["Hackathons", "hackathons"],
  ["About", "about"],
] as const;

export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.4, ease }}
        className="fixed inset-x-0 top-0 z-50 bg-background/70 backdrop-blur-md"
      >
        <div className="container-page flex items-center justify-between py-5 md:py-6 md:grid md:grid-cols-[1fr_auto_1fr]">
          {/* Logo / Name */}
          <a
            href="#"
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
          >
            <img src={logo} alt="Aditya" className="h-6 w-6" />
            <span className="text-[0.75rem] tracking-[0.4em] text-white/75">Aditya</span>
          </a>

          {/* Nav links - hidden on mobile */}
          <nav className="hidden md:flex items-center gap-7 md:gap-10">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="magnetic-underline text-sm tracking-wide transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger menu */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="md:hidden ml-auto flex items-center justify-end"
          >
            <Menu className="size-6 text-white/90 transition-colors hover:text-white" strokeWidth={2} />
          </button>

          {/* Available dot - hidden on mobile */}
          <a
            href="#footer"
            className="hidden lg:flex items-center justify-end gap-2 text-[0.75rem] tracking-[0.3em] text-white/75 transition-opacity hover:opacity-70"
          >
            <span className="inline-block size-1.5 rounded-full bg-green-400/80" />
            Available
          </a>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX, background: "rgba(255, 255, 255, 0.14)" }}
          className="absolute bottom-0 left-0 right-0 h-px origin-left"
        />
      </motion.header>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="absolute top-6 right-6 p-2"
              >
                <X className="size-8 text-white/90 transition-colors hover:text-white" strokeWidth={2} />
              </button>

              {/* Menu links */}
              <nav className="flex flex-col items-center gap-8">
                {links.map(([label, id]) => (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-[clamp(1.5rem,4vw,2.2rem)] font-medium tracking-[0.08em] text-white/90 transition-all hover:text-white hover:translate-x-2"
                    style={{ fontWeight: 500 }}
                  >
                    {label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
