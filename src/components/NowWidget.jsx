import { motion } from "framer-motion";
import { currentlyBuilding } from "../data/portfolioData";

function NowWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed top-20 left-4 md:left-6 z-30 hidden sm:flex items-center gap-2 bg-neutral-900/80 backdrop-blur border border-amber-500/30 rounded-full px-3 py-1.5 max-w-[220px]"
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
      </span>
      <span className="text-xs text-neutral-300 truncate">{currentlyBuilding}</span>
    </motion.div>
  );
}

export default NowWidget;