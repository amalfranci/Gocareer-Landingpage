import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { UserPlus, Send, Trophy } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion-presets";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const steps = [
  {
    icon: UserPlus,
    title: "Create your profile",
    desc: "Upload a resume or sign in with LinkedIn. Our AI builds a rich, structured profile in seconds.",
  },
  {
    icon: Send,
    title: "Apply or post jobs",
    desc: "Candidates apply in under 30 seconds. Recruiters publish openings with AI-suggested requirements.",
  },
  {
    icon: Trophy,
    title: "Get hired. Hire talent.",
    desc: "Smart matching shortlists the right people automatically. Move from application to offer in days.",
  },
];

export function HowItWorks() {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0.15, 0.75], [0, 1]);

  return (
    <section id="how" className="py-32 relative scroll-mt-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-4xl md:text-5xl font-bold tracking-tight font-display"
          >
            How <span className="text-gradient">GoCareer</span> works
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className="mt-4 text-muted-foreground text-lg"
          >
            Three steps. Zero friction. From signup to signed offer.
          </motion.p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-6">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-border overflow-hidden">
            <motion.div
              className="h-full bg-gradient-brand origin-left"
              style={{ scaleX: reduced ? 1 : lineScale }}
            />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="relative text-center px-4"
            >
              <motion.div
                className="relative inline-flex mb-6"
                whileHover={reduced ? {} : { scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-50 animate-pulse-glow" />
                <motion.div
                  className="relative size-24 rounded-3xl bg-gradient-primary flex items-center justify-center shadow-glow"
                  animate={reduced ? {} : { boxShadow: ["var(--shadow-glow)", "0 0 40px oklch(0.52 0.21 258 / 0.5)", "var(--shadow-glow)"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <s.icon className="size-9 text-primary-foreground" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                  className="absolute -top-2 -right-2 size-8 rounded-full glass flex items-center justify-center text-xs font-bold text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.div>
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 font-display">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
