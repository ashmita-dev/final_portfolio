import { motion } from "framer-motion";
import { about } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/20 via-neutral-950 to-neutral-950" />
      <div className="absolute w-[550px] h-[550px] bg-amber-600/20 rounded-full blur-[100px] -top-20 -right-40" />
      <div className="absolute w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] bottom-10 -left-20" />
      <div className="absolute w-64 h-64 bg-orange-500/15 rounded-full blur-[80px] top-1/2 right-1/3" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-4xl font-bold mb-10 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-2xl text-neutral-300 text-lg mb-4 text-center"
      >
        {about.bio}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="relative max-w-2xl text-amber-400 italic text-center mb-16"
      >
        {about.wittyLine}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 max-w-2xl w-full"
      >
        <h3 className="text-xl font-semibold text-white mb-2">
          {about.education.degree}
        </h3>
        <p className="text-neutral-400 mb-1">{about.education.school}</p>
        <p className="text-neutral-500 mb-6">{about.education.graduation}</p>

        <div className="flex flex-wrap gap-2">
          {about.education.coursework.map((course, i) => (
            <motion.span
              key={course}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
              className="text-sm bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full"
            >
              {course}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;