import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";

const typeConfig = {
  education: { icon: GraduationCap, color: "bg-amber-500" },
  certification: { icon: Award, color: "bg-orange-500" },
  achievement: { icon: Trophy, color: "bg-amber-400" },
};

function Timeline({ items }) {
  return (
    <div className="relative max-w-2xl w-full">
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-neutral-800" />
      <div className="flex flex-col gap-6">
        {items.map((item, i) => {
          const config = typeConfig[item.type] || typeConfig.education;
          const Icon = config.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-5 items-start"
            >
              <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full ${config.color} shrink-0`}>
                <Icon size={16} className="text-neutral-950" />
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl px-5 py-4 flex-1">
                <p className="text-xs text-amber-400 uppercase tracking-wide mb-1">
                  {item.year}
                </p>
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-neutral-400 text-sm">{item.subtitle}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;