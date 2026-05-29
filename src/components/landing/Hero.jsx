import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  Search,
  Users,
  Building2,
  BarChart3,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { buttonHover, buttonTap, staggerContainer, viewportOnce } from "@/lib/motion-presets";

const stats = [
  { label: "Active Jobs", value: "48K+", icon: Briefcase },
  { label: "Companies", value: "12K+", icon: Building2 },
  { label: "Candidates", value: "2.4M+", icon: Users },
];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/5 size-72 rounded-full bg-[oklch(0.6_0.22_295)]/20 blur-3xl"
          animate={reduced ? {} : { scale: [1, 1.15, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/5 size-96 rounded-full bg-[oklch(0.6_0.22_200)]/20 blur-3xl"
          animate={reduced ? {} : { scale: [1, 1.2, 1], opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.58 0.20 255 / 0.07) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.58 0.20 255 / 0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 70%)",
        }}
      />

      <div className="container relative mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 overflow-hidden"
          >
            <Sparkles className="size-3.5 text-accent animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">
              AI-powered contextual matchmaking · 2026 release
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] font-display"
          >
            Smart hiring,
            <br />
            <span className="text-gradient animate-gradient-text">starts here.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            GoCareer connects talent with opportunity through AI-powered semantic matching.
            Apply in 30 seconds. Hire in days, not months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 rounded-2xl px-7 h-12 shadow-glow btn-shine"
              >
                Get Started
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl px-7 h-12 glass border-border hover:bg-secondary hover:border-primary/30"
              >
                Explore Jobs
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-20 max-w-6xl mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full animate-pulse-glow" />
          <motion.div
            whileHover={reduced ? {} : { y: -4 }}
            transition={{ duration: 0.4 }}
            className="relative glass rounded-3xl p-2 shadow-card glow-border"
          >
            <div className="rounded-2xl bg-card overflow-hidden border border-border">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-background/50">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-destructive/70" />
                  <span className="size-2.5 rounded-full bg-[oklch(0.78_0.16_80)]/70" />
                  <span className="size-2.5 rounded-full bg-[oklch(0.7_0.18_150)]/70" />
                </div>
                <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
                  <Search className="size-3" />
                  app.gocareer.io/dashboard
                </div>
              </div>
              <div className="grid md:grid-cols-12 gap-4 p-6">
                <div className="md:col-span-3 space-y-3">
                  {["Pipeline", "Candidates", "Jobs", "Analytics", "Inbox"].map((t, i) => (
                    <motion.div
                      key={t}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.08 }}
                      className={`px-3 py-2 rounded-xl text-sm flex items-center gap-2 transition-colors ${
                        i === 0
                          ? "bg-gradient-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <div className="size-1.5 rounded-full bg-current opacity-60" />
                      {t}
                    </motion.div>
                  ))}
                </div>
                <div className="md:col-span-9 grid grid-cols-3 gap-4">
                  {["Sourced", "Interview", "Offer"].map((stage, i) => (
                    <div
                      key={stage}
                      className="rounded-2xl bg-secondary/40 p-3 border border-border"
                    >
                      <div className="flex justify-between items-center mb-3 text-xs">
                        <span className="font-medium">{stage}</span>
                        <span className="text-muted-foreground">{[18, 7, 3][i]}</span>
                      </div>
                      <div className="space-y-2">
                        {[0, 1, 2].map((j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + i * 0.1 + j * 0.06 }}
                            className="rounded-xl bg-card p-3 border border-border"
                          >
                            <div className="flex items-center gap-2">
                              <div className="size-6 rounded-full bg-gradient-accent" />
                              <div className="flex-1">
                                <div className="h-1.5 w-3/4 rounded bg-muted-foreground/30" />
                                <div className="h-1.5 w-1/2 rounded bg-muted-foreground/20 mt-1.5" />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={reduced ? {} : { y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 md:-left-16 top-32 hidden md:block"
          >
            <div className="glass rounded-2xl p-4 shadow-card w-56 premium-card glow-border">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-gradient-accent flex items-center justify-center">
                  <CheckCircle2 className="size-5 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Match found</div>
                  <div className="text-sm font-semibold">98% relevance</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={reduced ? {} : { y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 md:-right-16 top-56 hidden md:block"
          >
            <div className="glass rounded-2xl p-4 shadow-card w-60 premium-card glow-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">Hires this month</span>
                <BarChart3 className="size-3.5 text-accent" />
              </div>
              <div className="text-2xl font-bold text-gradient font-display">+247</div>
              <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-primary"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 max-w-4xl mx-auto"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={reduced ? {} : { y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center glow-border premium-card"
            >
              <s.icon className="size-5 mx-auto text-accent mb-3" />
              <div className="text-3xl font-bold text-gradient font-display">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
