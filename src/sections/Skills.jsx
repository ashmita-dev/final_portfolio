import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

const categories = [
  { label: "Frontend", items: skills.frontend },
  { label: "Backend", items: skills.backend },
  { label: "Database", items: skills.database },
  { label: "Tools", items: skills.tools },
  { label: "Languages", items: skills.languages },
];

function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-neutral-950 to-neutral-950" />
      <div className="absolute w-[450px] h-[450px] bg-amber-600/20 rounded-full blur-[100px] top-1/4 -left-32" />
      <div className="absolute w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] -bottom-20 right-0" />
      <div className="absolute inset-0 opacity-[0.1]" style={{
        backgroundImage: "linear-gradient(rgba(245,158,11,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.25) 1px, transparent 1px)",
        backgroundSize: "50px 50px"
      }} />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-4xl font-bold mb-4 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent"
      >
        Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative text-amber-400 italic mb-14 text-center max-w-xl"
      >
        These are the tools I trust not to betray me at 2am before a deadline.
      </motion.p>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {categories.map((category, i) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, scale: 0.75, rotate: i % 2 === 0 ? -4 : 4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-amber-400 mb-4">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, j) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.15 + 0.3 + j * 0.04 }}
                  className="text-sm bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative text-neutral-600 text-sm mt-12 text-center"
      >
        Not shown: the 40 browser tabs open at all times, mostly Stack Overflow.
      </motion.p>
    </section>
  );
}

export default Skills;