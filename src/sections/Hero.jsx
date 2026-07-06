import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl top-10 left-1/3" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-purple-400 font-medium mb-4 tracking-wide"
      >
        Hi, I'm
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-5xl md:text-7xl font-bold text-white mb-4"
      >
        {personalInfo.name}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-xl md:text-2xl text-neutral-400 mb-8"
      >
        {personalInfo.role}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-xl text-neutral-300 italic mb-10"
      >
        "{personalInfo.tagline}"
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex gap-4"
      >
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 transition rounded-full text-white font-medium"
        >
          View GitHub
        </a>

        <a
          href="#projects"
          className="px-6 py-3 border border-neutral-600 hover:border-purple-400 transition rounded-full text-white font-medium"
        >
          See Projects
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;