import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { Zap, ShieldCheck, Lock, Brain, MessageSquare, Workflow } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion-presets";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const items = [
  { icon: Zap, title: "Faster Hiring", value: 87, suffix: "%", desc: "Reduction in time-to-hire on average." },
  { icon: ShieldCheck, title: "Verified Recruiters", value: 100, suffix: "%", desc: "Every recruiter passes identity verification." },
  { icon: Lock, title: "Secure Platform", value: 256, suffix: "-bit", desc: "End-to-end encryption and SOC 2 ready." },
  { icon: Brain, title: "AI Recommendations", value: 98, suffix: "%", desc: "Average match relevance from our model." },
  { icon: MessageSquare, title: "Easy Communication", value: 24, suffix: "/7", desc: "In-app messaging with real-time delivery." },
  { icon: Workflow, title: "Modern Workflow", value: 10, suffix: "x", desc: "More efficient than legacy ATS tools." },
];

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="text-4xl font-bold text-gradient font-display">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function WhyChoose() {
  const reduced = useReducedMotion();

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-4xl md:text-5xl font-bold tracking-tight font-display"
          >
            Why teams choose <span className="text-gradient">GoCareer</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.1} className="mt-4 text-muted-foreground text-lg">
            Built for the speed, signal, and scale modern hiring demands.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              variants={fadeUp}
              custom={i * 0.08}
              whileHover={reduced ? {} : { y: -6, scale: 1.02 }}
              className="glass rounded-3xl p-7 glow-border premium-card group"
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  className="size-11 rounded-2xl bg-gradient-primary/20 border border-border flex items-center justify-center"
                  whileHover={reduced ? {} : { rotate: 10, scale: 1.1 }}
                >
                  <it.icon className="size-5 text-accent" />
                </motion.div>
                <Counter to={it.value} suffix={it.suffix} />
              </div>
              <h3 className="text-lg font-semibold font-display">{it.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
