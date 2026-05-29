import { motion } from "motion/react";
import { Sparkles, FileSearch, Bell, CalendarCheck, LayoutDashboard, UserCheck } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion-presets";

const features = [
  {
    icon: Sparkles,
    title: "Smart Job Matching",
    desc: "Vector-based semantic matching pairs candidates with roles by skills, intent, and trajectory — not keywords.",
  },
  {
    icon: FileSearch,
    title: "AI Resume Screening",
    desc: "Real-time OCR parsing and contextual scoring summarize candidates instantly with explainable insights.",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    desc: "Stay synced across applications, messages, and pipeline changes with push-grade delivery.",
  },
  {
    icon: CalendarCheck,
    title: "Interview Scheduling",
    desc: "Auto-suggested slots, calendar integrations, and timezone-aware booking that just works.",
  },
  {
    icon: LayoutDashboard,
    title: "Recruiter Dashboard",
    desc: "A Kanban-first workflow with live pipeline updates, bulk actions, and team collaboration built in.",
  },
  {
    icon: UserCheck,
    title: "Candidate Tracking",
    desc: "End-to-end visibility from sourcing to offer with a complete audit trail and unified history.",
  },
];

export function Features() {
  const reduced = useReducedMotion();

  return (
    <section id="features" className="py-32 relative scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-hero opacity-30 pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5"
          >
            <span className="text-xs font-medium text-accent">Features</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="text-4xl md:text-5xl font-bold tracking-tight font-display"
          >
            Everything you need to <span className="text-gradient">hire smarter</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-4 text-muted-foreground text-lg"
          >
            A complete recruitment OS replacing inboxes, spreadsheets, and ATSs with one
            intelligent platform.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              custom={i * 0.08}
              whileHover={
                reduced
                  ? {}
                  : {
                      y: -8,
                      rotateX: 2,
                      rotateY: i % 2 === 0 ? -2 : 2,
                      transition: { duration: 0.35 },
                    }
              }
              style={{ transformPerspective: 1000 }}
              className="group relative glass rounded-3xl p-7 glow-border premium-card"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
              <div className="relative">
                <motion.div
                  className="size-12 rounded-2xl bg-gradient-primary/20 border border-border flex items-center justify-center mb-5"
                  whileHover={reduced ? {} : { scale: 1.12, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <f.icon className="size-5 text-accent" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 font-display">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
