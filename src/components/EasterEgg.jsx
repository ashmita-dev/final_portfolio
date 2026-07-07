import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

function EasterEgg() {
  const [triggered, setTriggered] = useState(false);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const handleKey = (e) => {
      const next = [...progress, e.key].slice(-KONAMI.length);
      setProgress(next);
      if (next.join() === KONAMI.join()) {
        setTriggered(true);
        setProgress([]);
        setTimeout(() => setTriggered(false), 3000);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [progress]);

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[400] flex items-center justify-center pointer-events-none"
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
              animate={{
                x: (Math.random() - 0.5) * 800,
                y: (Math.random() - 0.5) * 600,
                opacity: 0,
                scale: 1,
                rotate: Math.random() * 360,
              }}
              transition={{ duration: 1.5 + Math.random(), ease: "easeOut" }}
              className="absolute w-3 h-3 rounded-full"
              style={{ background: i % 2 === 0 ? "#F59E0B" : "#FB923C" }}
            />
          ))}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-neutral-900 border border-amber-500 rounded-2xl px-8 py-6 text-center"
          >
            <p className="text-amber-400 font-bold text-lg mb-1">You found it 🎉</p>
            <p className="text-neutral-400 text-sm">Debug skills confirmed. Hire this girl.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EasterEgg;