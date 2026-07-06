import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project }) {
  return (
    <div className="w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] shrink-0 px-4">
      <div
        className={`bg-neutral-900 border rounded-2xl p-8 h-full ${
          project.flagship ? "border-amber-500" : "border-neutral-800"
        }`}
      >
        <div className="flex flex-wrap gap-2 mb-4">
          {project.flagship && (
            <span className="text-xs uppercase tracking-wide bg-amber-600 text-white px-3 py-1 rounded-full inline-block">
              Flagship Project
            </span>
          )}

          <span className="text-xs text-neutral-500 border border-neutral-700 px-3 py-1 rounded-full inline-block">
            {project.status}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-1">
          {project.title}
        </h3>

        <p className="text-neutral-400 mb-4">
          {project.subtitle}
        </p>

        <p className="text-neutral-300 mb-4">
          {project.description}
        </p>

        <p className="text-amber-400 italic mb-6">
          {project.wittyLine}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-sm bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 bg-amber-600 hover:bg-amber-500 transition rounded-full text-white text-sm font-medium"
            >
              Live Demo
            </a>
          )}

          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 border border-neutral-600 hover:border-amber-400 transition rounded-full text-white text-sm font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth;
      };

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-neutral-950 overflow-hidden md:h-screen flex flex-col justify-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-amber-900/20 via-neutral-950 to-neutral-950" />
      <div className="absolute w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[100px] top-10 right-1/4" />
      <div className="absolute w-72 h-72 bg-amber-500/20 rounded-full blur-[100px] bottom-0 left-10" />

      <div className="relative px-6 md:px-16 pt-24 md:pt-0 pb-8 md:pb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-amber-400 italic max-w-xl"
        >
          Exhibit A: proof that ideas survive contact with real users.
        </motion.p>
      </div>

      {/* Desktop: horizontal scrolling */}
      <div
        ref={trackRef}
        className="relative flex flex-col md:flex-row gap-8 md:gap-0 px-6 md:px-16 pb-16 md:pb-0"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;