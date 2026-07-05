import { motion } from "framer-motion";
import { about } from "../data/portfolioData";

function About() {
  return (
    <section className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-10"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-2xl text-neutral-300 text-lg mb-4 text-center"
      >
        {about.bio}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl text-purple-400 italic text-center mb-16"
      >
        {about.wittyLine}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 max-w-2xl w-full"
      >
        <h3 className="text-xl font-semibold text-white mb-2">
          {about.education.degree}
        </h3>
        <p className="text-neutral-400 mb-1">{about.education.school}</p>
        <p className="text-neutral-500 mb-6">{about.education.graduation}</p>

        <div className="flex flex-wrap gap-2">
          {about.education.coursework.map((course) => (
            <span
              key={course}
              className="text-sm bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full"
            >
              {course}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;