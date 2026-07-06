import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiCplusplus,
  SiPython,
} from "react-icons/si";

import {
  FaJava,
  FaDatabase,
  FaCss3Alt,
} from "react-icons/fa";

import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "JavaScript (ES6+)": { icon: SiJavascript, color: "#F7DF1E" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "HTML5": { icon: SiHtml5, color: "#E34F26" },
  "CSS3": { icon: FaCss3Alt, color: "#1572B6" },
  "Vite": { icon: SiVite, color: "#BD34FE" },
  "Node.js": { icon: SiNodedotjs, color: "#83CD29" },
  "Express.js": { icon: SiExpress, color: "#F5F5F5" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "Git": { icon: SiGit, color: "#F05032" },
  "GitHub": { icon: SiGithub, color: "#F5F5F5" },
  "Postman": { icon: SiPostman, color: "#FF6C37" },
  "Java": { icon: FaJava, color: "#EA2D2E" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "SQL": { icon: FaDatabase, color: "#F59E0B" },
  "Microsoft SQL Server": { icon: FaDatabase, color: "#CC2927" },
  "REST APIs": { icon: Code2, color: "#F59E0B" },
  "JWT Authentication": { icon: Code2, color: "#F5F5F5" },
  "React Router": { icon: SiReact, color: "#CA4245" },
  "VS Code": { icon: Code2, color: "#007ACC" },
};

function TechStack({ items }) {
  return (
    <div className="relative flex flex-wrap justify-center gap-4 max-w-4xl">
      {items.map((item, i) => {
        const entry = iconMap[item] || {
          icon: Code2,
          color: "#F59E0B",
        };

        const Icon = entry.icon;

        return (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            whileHover={{ y: -6, scale: 1.05 }}
            className="flex flex-col items-center gap-2 bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition rounded-2xl px-5 py-4 w-28"
          >
            <Icon size={28} color={entry.color} />
            <span className="text-xs text-neutral-400 text-center leading-tight">
              {item}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default TechStack;