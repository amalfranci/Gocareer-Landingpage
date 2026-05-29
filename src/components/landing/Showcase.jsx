import { motion } from "motion/react";
import { TrendingUp, Activity, Smartphone } from "lucide-react";
import { slideInLeft, slideInRight, viewportOnce } from "@/lib/motion-presets";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { HiringVelocityChart } from "@/components/landing/HiringVelocityChart";

const highlights = [
  { icon: Activity, label: "Live pipeline updates across teams" },
  { icon: TrendingUp, label: "Real-time analytics and conversion insights" },
  { icon: Smartphone, label: "Native-feeling mobile experience" },
];

export function Showcase() {
  const reduced = useReducedMotion();

  return (
    <section id="platform" className="py-32 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-hero opacity-40 pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
            custom={0}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Platform</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight font-display">
              A unified workspace
              <br />
              for modern <span className="text-gradient">recruitment</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Web dashboard for recruiters. Mobile-first app for candidates. Real-time chat,
              analytics, and pipeline orchestration — all in one elegant system.
            </p>
            <div className="mt-8 space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={reduced ? {} : { x: 6 }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="size-9 rounded-xl glass flex items-center justify-center group-hover:shadow-glow transition-shadow">
                    <item.icon className="size-4 text-accent" />
                  </div>
                  <span className="text-sm text-foreground/90">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
            custom={0.1}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-full animate-pulse-glow" />
            <motion.div
              whileHover={reduced ? {} : { scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="relative glass rounded-3xl p-6 md:p-7 shadow-card glow-border overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-primary opacity-[0.07] blur-3xl rounded-full pointer-events-none" />
              <HiringVelocityChart />
            </motion.div>

            <motion.div
              animate={reduced ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -right-4 md:-right-12 w-48 glass rounded-[2rem] p-3 shadow-card border-2 border-border premium-card"
            >
              <div className="rounded-3xl bg-card p-4 space-y-3">
                <div className="text-xs text-muted-foreground">New match</div>
                <div className="flex items-center gap-2">
                  <div className="size-10 rounded-full bg-gradient-accent" />
                  <div>
                    <div className="text-sm font-semibold">Sr. Engineer</div>
                    <div className="text-xs text-muted-foreground">Acme · Remote</div>
                  </div>
                </div>
                <motion.button
                  whileHover={reduced ? {} : { scale: 1.02 }}
                  whileTap={reduced ? {} : { scale: 0.98 }}
                  className="w-full rounded-xl bg-gradient-primary text-primary-foreground text-xs font-medium py-2 btn-shine"
                >
                  Apply in 30s
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
