import { motion } from "framer-motion";

function KineticText({ text, className, delayStart = 0 }) {
  const letters = text.split("");

  return (
    <span className={className}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.7,
            delay: delayStart + i * 0.035,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: "inline-block", transformStyle: "preserve-3d" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default KineticText;