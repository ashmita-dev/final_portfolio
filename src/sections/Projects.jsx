import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-amber-900/20 via-neutral-950 to-neutral-950" />
      <div className="absolute w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[100px] top-10 right-1/4" />
      <div className="absolute w-72 h-72 bg-amber-500/20 rounded-full blur-[100px] bottom-0 left-10" />
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
        className="text-amber-400 italic mb-14 text-center max-w-xl"
      >
        Exhibit A: proof that ideas survive contact with real users.
      </motion.p>

      <div className="flex flex-col gap-8 max-w-4xl w-full">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`bg-neutral-900 border rounded-2xl p-8 ${
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;