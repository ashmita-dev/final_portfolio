import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-amber-400">
      {count}{suffix}
    </span>
  );
}

function StatsCounter({ stats }) {
  return (
    <div className="relative flex flex-wrap justify-center gap-10 md:gap-16 py-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex flex-col items-center text-center"
        >
          <Counter value={stat.value} suffix={stat.suffix} />
          <span className="text-neutral-400 text-sm mt-2 max-w-[140px]">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsCounter;