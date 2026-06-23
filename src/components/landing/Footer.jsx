import { motion } from "motion/react";
import { Twitter, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion-presets";
import logo from "@/assets/gocareer-logo.png";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Platform", href: "/#platform" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Help center", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Privacy Policy", href: "/?page=privacy-policy" },
      { label: "Delete My Account", href: "/deletemyaccount" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 pt-20 pb-10 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid lg:grid-cols-12 gap-10"
        >
          <motion.div variants={fadeUp} custom={0} className="lg:col-span-4">
            <img src={logo} alt="GoCareer" className="h-10 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Your gateway to global careers. The AI-powered platform connecting talent with
              opportunity.
            </p>
            <form className="mt-6 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <label className="text-xs text-muted-foreground">Get product updates</label>
              <div className="mt-2 flex gap-2">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  className="rounded-xl bg-secondary border-border focus-visible:ring-primary"
                  aria-label="Email for updates"
                />
                <Button
                  type="submit"
                  className="rounded-xl bg-gradient-primary text-primary-foreground hover:opacity-90 btn-shine shrink-0"
                  aria-label="Subscribe"
                >
                  <Mail className="size-4" />
                </Button>
              </div>
            </form>
          </motion.div>

          {columns.map((col, ci) => (
            <motion.div key={col.title} variants={fadeUp} custom={0.1 + ci * 0.05} className="lg:col-span-2">
              <h4 className="text-sm font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors link-premium inline-block"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div variants={fadeUp} custom={0.25} className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>gocareerdev@gmail.com</li>
              <li>9744225015</li>
              <li>Ernakulam</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GoCareer. Powered by Yesen Energia Private Limited.
          </p>
          <div className="flex items-center gap-2">
            {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="size-9 rounded-xl glass flex items-center justify-center hover:bg-secondary hover:shadow-glow transition-shadow"
                aria-label="Social link"
              >
                <Icon className="size-4 text-muted-foreground" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
