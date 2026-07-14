import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ease } from "@/lib/motion";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const links = [
  ["Innovation", "innovation"],
  ["Stack", "stack"],
  ["Projects", "/projects"],
  ["Hackathons", "hackathons"],
  ["About", "about"],
] as const;

const getSectionId = (id: string) => (id.startsWith("/") ? id.slice(1) : id);

export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    // Set active section based on current route
    if (location.pathname === "/projects" || location.pathname.startsWith("/projects/")) {
      setActiveSection("/projects");
    } else if (location.pathname === "/") {
      // Only run scroll-spy on homepage
      const handleScroll = () => {
        const sections = links
          .map(([_, id]) => document.getElementById(getSectionId(id)))
          .filter(Boolean) as HTMLElement[];
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(section.id);
            break;
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setActiveSection("");
    }
  }, [location]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // If it's a route (starts with /), let it navigate normally
    if (id.startsWith("/")) {
      return;
    }

    // Check if we're not on homepage
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/");
      // Scroll after navigation
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return;
    }

    // Otherwise, smooth scroll to the anchor
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMobileNavClick = (id: string) => {
    setIsOpen(false);

    if (id.startsWith("/")) {
      navigate(id);
      return;
    }

    // Check if we're not on homepage
    if (location.pathname !== "/") {
      navigate("/");
      // Scroll after navigation
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return;
    }

    // Smooth scroll to anchor
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.4, ease }}
        className="fixed inset-x-0 top-0 z-50 bg-background/70 backdrop-blur-md"
      >
        <div className="container-page flex items-center justify-between py-5 md:py-6">
          {/* Logo / Name */}
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-70">
            <img src={logo} alt="Aditya" className="h-6 w-6" />
            <span className="text-[0.75rem] tracking-[0.4em] text-white/75">Aditya</span>
          </Link>

          {/* Nav links - hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-7 md:gap-10 relative">
            {links.map(([label, id]) => {
              const isActive = activeSection === id || activeSection === getSectionId(id);

              return (
                <div key={id} className="relative">
                  {id.startsWith("/") ? (
                    <Link
                      to={id}
                      className={`magnetic-underline text-sm tracking-wide transition-all duration-300 ${
                        isActive
                          ? "text-white opacity-100"
                          : "text-white/60 hover:text-white hover:opacity-90"
                      }`}
                    >
                      {label}
                    </Link>
                  ) : (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={(e) => handleSmoothScroll(e, id)}
                      className={`magnetic-underline text-sm tracking-wide transition-all duration-300 ${
                        isActive
                          ? "text-white opacity-100"
                          : "text-white/60 hover:text-white hover:opacity-90"
                      }`}
                    >
                      {label}
                    </a>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ background: "#FF8C42" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right side: Available dot (desktop) or Hamburger (mobile) */}
          <div className="flex items-center gap-4">
            {/* Available dot - hidden on mobile */}
            <a
              href="#footer"
              className="hidden lg:flex items-center gap-2 text-[0.75rem] tracking-[0.3em] text-white/75 transition-opacity hover:opacity-70"
            >
              <span className="inline-block size-1.5 rounded-full bg-green-400/80" />
              Available
            </a>

            {/* Mobile hamburger menu */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden flex items-center"
            >
              <Menu
                className="size-6 text-white/90 transition-colors hover:text-white"
                strokeWidth={2}
              />
            </button>
          </div>
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
            className="fixed inset-0 z-60 bg-black"
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
                <X
                  className="size-8 text-white/90 transition-colors hover:text-white"
                  strokeWidth={2}
                />
              </button>

              {/* Menu links */}
              <nav className="flex flex-col items-center gap-8">
                {links.map(([label, id], index) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {id.startsWith("/") ? (
                      <button
                        type="button"
                        onClick={() => handleMobileNavClick(id)}
                        className="text-[clamp(1.5rem,4vw,2.2rem)] font-medium tracking-[0.08em] text-white/90 transition-all hover:text-white hover:translate-x-2"
                        style={{ fontWeight: 500 }}
                      >
                        {label}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleMobileNavClick(id)}
                        className="text-[clamp(1.5rem,4vw,2.2rem)] font-medium tracking-[0.08em] text-white/90 transition-all hover:text-white hover:translate-x-2"
                        style={{ fontWeight: 500 }}
                      >
                        {label}
                      </button>
                    )}
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
