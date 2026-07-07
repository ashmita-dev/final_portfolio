import { motion } from "framer-motion";

function SkillBars({ levels }) {
  return (
    <div className="relative flex flex-col gap-5 max-w-xl w-full">
      {levels.map((skill, i) => (
        <div key={skill.label}>
          <div className="flex justify-between text-sm mb-1.5">
            <span className="text-neutral-300 font-medium">{skill.label}</span>
            <span className="text-amber-400">{skill.value}%</span>
          </div>
          <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-amber-600 to-orange-400 rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillBars;