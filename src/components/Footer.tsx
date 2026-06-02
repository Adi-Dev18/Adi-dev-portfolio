import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { social } from "@/lib/portfolio-data";
import { ease } from "@/lib/motion";

const links = [
  { label: "GitHub", href: social.github, icon: Github },
  { label: "LinkedIn", href: social.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${social.email}`, icon: Mail },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative border-t py-16 md:py-20"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease }}
          className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-sm text-muted-foreground">© 2026 Aditya</p>
            <p className="mt-3 text-base text-white">Frontend Engineer · Data Science Student</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                aria-label={label}
                className="footer-link group flex items-center gap-2 text-[11px] uppercase tracking-[0.34em] text-white hover:text-white"
              >
                <Icon
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
