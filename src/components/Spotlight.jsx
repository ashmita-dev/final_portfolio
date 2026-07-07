import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function Spotlight() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMove = (e) => {
      const rect = ref.current?.parentElement?.getBoundingClientRect();
      if (!rect) return;
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className="absolute w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen"
      style={{
        left: springX,
        top: springY,
        x: "-50%",
        y: "-50%",
        background: "radial-gradient(circle, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0) 70%)",
      }}
    />
  );
}

export default Spotlight;