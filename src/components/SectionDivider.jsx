import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <div className="relative h-px w-full flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ width: "0%", opacity: 0 }}
        whileInView={{ width: "60%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
      />
    </div>
  );
}

export default SectionDivider;