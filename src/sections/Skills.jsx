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
    <section id="skills" className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-4"
      >
        Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-purple-400 italic mb-14 text-center max-w-xl"
      >
        These are the tools I trust not to betray me at 2am before a deadline.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {categories.map((category, i) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-purple-400 mb-4">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="text-sm bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;