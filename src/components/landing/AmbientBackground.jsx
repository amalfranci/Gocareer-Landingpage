import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function AmbientBackground() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -top-32 left-[10%] size-[420px] rounded-full bg-[oklch(0.52_0.21_258/0.08)] blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-[5%] size-[360px] rounded-full bg-[oklch(0.74_0.17_55/0.1)] blur-3xl"
        animate={{ x: [0, -35, 0], y: [0, 25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 size-[280px] rounded-full bg-[oklch(0.65_0.16_240/0.08)] blur-3xl"
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </div>
  );
}
