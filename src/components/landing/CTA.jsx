import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonHover, buttonTap, scaleIn, viewportOnce } from "@/lib/motion-presets";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function CTA() {
  const reduced = useReducedMotion();

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scaleIn}
          custom={0}
          className="relative glass rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden glow-border"
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90 pointer-events-none" />
          <motion.div
            className="absolute -top-20 left-1/2 -translate-x-1/2 size-96 rounded-full bg-gradient-primary blur-3xl opacity-40"
            animate={reduced ? {} : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <div className="absolute inset-0 rounded-[2.5rem] border border-primary/20 animate-border-glow pointer-events-none" />

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto font-display"
            >
              Build your career journey with{" "}
              <span className="text-gradient animate-gradient-text">GoCareer</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.1 }}
              className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto"
            >
              Join 2.4M+ candidates and 12K+ companies already moving faster, hiring smarter.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90 rounded-2xl px-8 h-12 shadow-glow btn-shine"
                >
                  <a href="https://gocareerrecruiter.kods.app/">
                    Start Hiring <ArrowRight className="ml-1 size-4" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl px-8 h-12 glass hover:bg-secondary hover:border-primary/30"
                >
                  Find Jobs
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
