import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/motion-presets";

const companies = [
  "Acme Corp",
  "Lumen",
  "Nexus",
  "Vertex",
  "Flowbase",
  "Quantum",
  "Northwind",
  "Stellar",
  "Atlas Labs",
  "Cipher",
  "Helios",
  "Orbit",
];

export function LogoMarquee() {
  const doubled = [...companies, ...companies];

  return (
    <section className="py-16 border-y border-border/60 bg-background/50 relative">
      <div className="container mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          custom={0}
          className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10"
        >
          Trusted by teams hiring at the world&apos;s most ambitious companies
        </motion.p>
        <div
          className="relative overflow-hidden marquee-pause"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-16 animate-marquee whitespace-nowrap w-max">
            {doubled.map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, color: "var(--foreground)" }}
                className="text-2xl font-semibold text-muted-foreground/70 font-display tracking-tighter transition-colors cursor-default"
              >
                {c}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
