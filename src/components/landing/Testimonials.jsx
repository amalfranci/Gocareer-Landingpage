import { motion } from "motion/react";
import { Star } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion-presets";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const testimonials = [
  {
    quote:
      "GoCareer cut our time-to-hire by 60%. The semantic matching surfaces candidates we'd have missed entirely.",
    name: "Maya Chen",
    role: "Head of Talent, Lumen",
  },
  {
    quote:
      "Finally an ATS that doesn't feel like a 2008 spreadsheet. Our recruiters live in it daily.",
    name: "James Okafor",
    role: "VP People, Nexus",
  },
  {
    quote:
      "I applied to a senior role in 28 seconds. Got a response the same afternoon. It's a different game.",
    name: "Priya Sharma",
    role: "Senior Product Designer",
  },
  {
    quote:
      "The AI screening summaries save my team hours every single day. Genuine 10x tool.",
    name: "Daniel Reyes",
    role: "Talent Lead, Stellar",
  },
];

function TestimonialCard({ t }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      whileHover={reduced ? {} : { y: -6, scale: 1.02 }}
      className="glass rounded-3xl p-8 w-[380px] shrink-0 glow-border premium-card"
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, j) => (
          <Star key={j} className="size-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-foreground/90 leading-relaxed whitespace-normal">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="size-10 rounded-full bg-gradient-accent ring-2 ring-border" />
        <div>
          <div className="text-sm font-semibold">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-hero opacity-30 pointer-events-none" />
      <div className="container mx-auto px-6 relative">
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
            Loved by <span className="text-gradient">people</span> who hire
          </motion.h2>
        </motion.div>

        <div
          className="relative overflow-hidden marquee-pause"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="flex gap-6 animate-marquee w-max"
            style={{ animationDuration: "45s" }}
          >
            {doubled.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

        <div
          className="relative overflow-hidden marquee-pause mt-6 hidden md:block"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="flex gap-6 animate-marquee-reverse w-max"
            style={{ animationDuration: "50s" }}
          >
            {[...doubled].reverse().map((t, i) => (
              <TestimonialCard key={`rev-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
