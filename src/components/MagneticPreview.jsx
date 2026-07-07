import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function MagneticPreview({ project, children }) {
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMove}
      className="relative"
    >
      {children}

      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{
              position: "fixed",
              left: pos.x + 24,
              top: pos.y - 40,
              pointerEvents: "none",
              zIndex: 150,
            }}
            className="hidden lg:block bg-neutral-900 border border-amber-500/40 rounded-xl p-4 w-56 shadow-2xl"
          >
            <p className="text-amber-400 text-xs uppercase tracking-wide mb-1">{project.status}</p>
            <p className="text-white font-semibold text-sm mb-2">{project.title}</p>
            <div className="flex flex-wrap gap-1">
              {project.tech.slice(0, 4).map((t) => (
                <span key={t} className="text-[10px] bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MagneticPreview;