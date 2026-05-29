import { motion } from "motion/react";
import { ShieldCheck, Lock, Database, Mail } from "lucide-react";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    body: "We collect different types of information to provide and improve our services.",
    blocks: [
      {
        heading: "a. Information You Provide",
        points: [
          "Job Seekers: Name, email address, phone number, resume/CV, qualifications, experience, profile details, employment preferences, skills, certifications, and uploaded documents.",
          "Employers: Company name, contact details, job postings, billing information, and recruitment-related information.",
          "Communications: Information shared through forms, emails, support requests, or feedback submissions.",
        ],
      },
      {
        heading: "b. Automatically Collected Information",
        points: [
          "Log Data: IP address, browser type, device information, operating system, pages visited, and access timestamps.",
          "Cookies and Tracking Technologies: Data collected to improve user experience and analyze website traffic.",
          "Analytics: Usage data from analytics tools to understand user behavior and improve platform performance.",
        ],
      },
      {
        heading: "c. Third-Party Information",
        points: [
          "We may receive information from third-party platforms such as LinkedIn or other integrated services when you choose to connect your accounts.",
        ],
      },
    ],
  },
  {
    id: "purpose-of-data-collection",
    title: "2. Purpose of Data Collection",
    points: [
      "Facilitate recruitment and job application processes.",
      "Connect job seekers with employers.",
      "Improve job search results and candidate recommendations.",
      "Provide customer support and respond to inquiries.",
      "Send notifications, updates, and promotional communications (you may opt out at any time).",
      "Maintain platform security and prevent fraudulent activities.",
      "Comply with legal and regulatory requirements.",
      "Personalize your experience on the Platform.",
    ],
  },
  {
    id: "sharing-your-information",
    title: "3. Sharing Your Information",
    body: "We do not sell your personal information. However, we may share information in the following situations:",
    blocks: [
      {
        heading: "With Employers or Job Seekers",
        points: ["To enable recruitment, communication, and application processing."],
      },
      {
        heading: "Service Providers",
        points: [
          "With trusted third-party vendors who assist in hosting, analytics, payment processing, communication, and marketing services.",
        ],
      },
      {
        heading: "Legal Compliance",
        points: ["When required by law, regulation, legal process, or governmental request."],
      },
      {
        heading: "Business Transfers",
        points: [
          "In connection with a merger, acquisition, restructuring, or sale of company assets.",
        ],
      },
    ],
  },
  {
    id: "your-rights",
    title: "4. Your Rights",
    points: [
      "Access: Request access to your personal information.",
      "Correction: Update or correct inaccurate information.",
      "Deletion: Request deletion of your data, subject to legal obligations.",
      "Data Portability: Request a copy of your information in a structured format.",
      "Opt-Out: Unsubscribe from promotional emails and communications.",
    ],
    body: "To exercise your rights, contact us at gocareerdev@gmail.com.",
  },
  {
    id: "data-security",
    title: "5. Data Security",
    points: [
      "We implement industry-standard security measures including secure storage, restricted access, and encryption where applicable.",
      "While we strive to protect your information, no online platform can guarantee complete security.",
      "Please contact us immediately if you suspect unauthorized access or a security breach.",
    ],
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    points: [
      "We retain personal information only as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements.",
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies and Tracking Technologies",
    body: "We use cookies and similar technologies to:",
    points: [
      "Remember user preferences and login sessions.",
      "Improve website functionality and performance.",
      "Deliver personalized content and recommendations.",
      "Analyze website traffic and user engagement.",
    ],
    note: "You may disable cookies through browser settings, though some platform features may not function properly.",
  },
  {
    id: "third-party-links",
    title: "8. Third-Party Links",
    points: [
      "Our Platform may contain links to third-party websites or services.",
      "We are not responsible for their privacy practices or content.",
      "Please review third-party privacy policies before sharing personal information.",
    ],
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    points: [
      "GoCareer services are intended for individuals aged 18 years and above.",
      "We do not knowingly collect personal information from children under 18.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to This Privacy Policy",
    points: [
      "We may update this Privacy Policy to reflect changes in practices, technologies, or legal requirements.",
      "Updated versions will be posted on this page with the revised effective date.",
    ],
  },
  {
    id: "contact",
    title: "11. Contact Us",
    points: [
      "Email: gocareerdev@gmail.com",
      "Address: Ernakulam, India",
    ],
  },
  {
    id: "disclaimer",
    title: "12. Disclaimer",
    points: [
      "GoCareer may display job postings, news, articles, or updates sourced from publicly available information or third-party providers.",
      "All copyrights and intellectual property rights belong to their respective owners and original sources.",
    ],
  },
];

export function PrivacyPolicyPage() {
  return (
    <section className="relative z-10 pt-36 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-10 glow-border">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/70 px-3 py-1 text-xs text-muted-foreground mb-4">
              <ShieldCheck className="size-3.5 text-primary" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At GoCareer, our mission is to connect talented professionals with the right career
              opportunities while helping employers discover skilled candidates efficiently and
              securely. This Privacy Policy explains how we collect, use, and protect your personal
              information when you use our website and related services ("Platform").
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              By accessing or using GoCareer, you agree to the practices described in this Privacy
              Policy.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                <Lock className="size-3" />
                Security-first
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                <Database className="size-3" />
                Data transparency
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                <Mail className="size-3" />
                Contact: gocareerdev@gmail.com
              </span>
            </div>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto mt-8 space-y-5">
          {sections.map((section, idx) => (
            <motion.article
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.02, duration: 0.45 }}
              className="glass rounded-2xl p-6 md:p-7"
            >
              <h2 className="text-xl md:text-2xl font-semibold font-display">{section.title}</h2>
              {section.body ? (
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {section.body}
                </p>
              ) : null}

              {section.points ? (
                <ul className="mt-4 space-y-2.5 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span className="mt-2 size-1.5 rounded-full bg-primary/70 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.blocks ? (
                <div className="mt-5 space-y-4">
                  {section.blocks.map((block) => (
                    <div key={block.heading} className="rounded-xl bg-background/60 border border-border/70 p-4">
                      <h3 className="text-sm md:text-base font-semibold">{block.heading}</h3>
                      <ul className="mt-2.5 space-y-2 text-sm text-muted-foreground leading-relaxed">
                        {block.points.map((point) => (
                          <li key={point} className="flex gap-2.5">
                            <span className="mt-2 size-1.5 rounded-full bg-accent/80 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}

              {section.note ? (
                <p className="mt-4 text-xs md:text-sm text-muted-foreground">{section.note}</p>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
