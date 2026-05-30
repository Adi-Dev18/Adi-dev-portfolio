import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-48">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex items-baseline justify-between border-b border-border pb-6 md:mb-24"
        >
          <div className="flex items-baseline gap-6">
            <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">08</span>
            <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              Contact
            </span>
          </div>
        </motion.div>

        <div className="grid gap-20 md:grid-cols-12 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <h2 className="text-display text-[clamp(2.5rem,6vw,5rem)] font-medium">
              Let's build
              <br />
              <span className="text-muted-foreground">something meaningful</span>
              <br />
              together.
            </h2>

            <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Connect by email, GitHub, LinkedIn, or location for frontend development, machine
              learning, and creative technology collaborations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 md:col-start-7"
          >
            <div className="rounded-[2rem] border border-foreground/10 bg-surface p-10 shadow-[0_35px_90px_-55px_rgba(0,0,0,0.8)]">
              <div className="space-y-10">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:hello@aditya.dev"
                    data-cursor="hover"
                    className="magnetic-underline mt-3 inline-block text-lg text-foreground md:text-xl"
                  >
                    hello@aditya.dev
                  </a>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/adityaladdu"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="magnetic-underline mt-3 inline-block text-lg text-foreground md:text-xl"
                  >
                    Github
                  </a>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/aditya-kumar-833112258/"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="magnetic-underline mt-3 inline-block text-lg text-foreground md:text-xl"
                  >
                    Linkedin
                  </a>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                    Location
                  </p>
                  <p className="mt-3 text-lg text-foreground/90 md:text-xl">Hyderabad, India</p>
                </div>
              </div>

              <div className="mt-10 border-t border-foreground/10 pt-8">
                <a
                  href="mailto:hello@aditya.dev"
                  data-cursor="open"
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent/90"
                >
                  Let's build something meaningful together
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
