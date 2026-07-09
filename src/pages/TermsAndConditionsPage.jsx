import { motion } from "motion/react";
import { FileText, Scale, Mail } from "lucide-react";

const sections = [
  {
    id: "about-gocareer",
    title: "1. About GoCareer",
    body: "GoCareer is a technology-based career and recruitment platform designed to connect job seekers (“Candidates”) with employers, recruiters, and organizations (“Recruiters”).",
    points: [
      "Candidate registration and profile creation",
      "Recruiter and company registration",
      "Resume and document uploads",
      "AI-assisted resume processing and profile creation",
      "Job posting and job discovery",
      "AI-based job and Candidate recommendations",
      "Job applications",
      "Candidate and Recruiter matching",
      "Interview scheduling",
      "Calendar integration",
      "Job sharing",
      "Candidate and Recruiter referral programs",
      "Notifications and communications",
      "Candidate support services",
      "Other career and recruitment-related features",
    ],
    note: "The Platform may provide features including, but not limited to, the above. GoCareer may modify, improve, add, restrict, or discontinue certain features of the Platform from time to time.",
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    body: "You must be legally capable of entering into a binding agreement under the laws applicable in your jurisdiction to use GoCareer. By registering for or using the Platform, you represent and warrant that:",
    points: [
      "The information provided by you is accurate and complete",
      "You are authorized to create and operate the account",
      "Your use of the Platform does not violate any applicable laws or regulations",
      "You agree to comply with these Terms and Conditions",
    ],
    note: "If you are using GoCareer on behalf of a company or organization, you represent that you have the authority to accept these Terms on behalf of that organization.",
  },
  {
    id: "user-accounts",
    title: "3. User Accounts",
    body: "Certain features of GoCareer require users to create an account. Users may be required to provide information including, but not limited to:",
    points: [
      "Name",
      "Mobile number",
      "Email address",
      "Professional information",
      "Employment history",
      "Educational qualifications",
      "Skills",
      "Resume or curriculum vitae",
      "Company information",
      "Recruiter information",
      "Other information necessary to provide Platform services",
    ],
    note: "You are responsible for ensuring that the information associated with your account remains accurate and up to date. You are also responsible for maintaining the confidentiality and security of your login credentials and for all activities performed through your account. You must immediately notify GoCareer if you become aware of unauthorized access to or use of your account. GoCareer shall not be responsible for losses resulting from unauthorized account access caused by your failure to protect your account credentials.",
  },
  {
    id: "candidate-accounts",
    title: "4. Candidate Accounts",
    body: "Candidates may use GoCareer to create professional profiles, upload resumes, discover employment opportunities, apply for jobs, receive job recommendations, schedule interviews, participate in referral programs, and access other career-related services. Candidates are responsible for ensuring that:",
    points: [
      "Their profile information is accurate",
      "Their qualifications and experience are represented truthfully",
      "Uploaded resumes and documents are authentic",
      "They have the right to provide all information uploaded to the Platform",
      "Their use of the Platform complies with applicable laws",
    ],
    note: "Creating a profile or applying for a job through GoCareer does not guarantee employment, an interview, an offer, or any other employment outcome.",
  },
  {
    id: "recruiter-accounts",
    title: "5. Recruiter and Employer Accounts",
    body: "Recruiters and employers may use GoCareer to create company profiles, post job opportunities, search for Candidates, receive Candidate recommendations, manage applications, schedule interviews, and use other recruitment-related services. Recruiters and employers agree that:",
    points: [
      "Company and job information provided on the Platform must be accurate",
      "Job opportunities must be genuine and legally compliant",
      "Candidate information must only be used for legitimate recruitment purposes",
      "Candidate data must not be sold, misused, or disclosed without proper authorization",
      "Recruitment activities must comply with applicable employment, labor, privacy, and anti-discrimination laws",
      "The Platform must not be used to conduct fraudulent or misleading recruitment activities",
    ],
    note: "GoCareer reserves the right to review, reject, suspend, or remove Recruiter accounts, company profiles, or job postings that violate these Terms.",
  },
  {
    id: "resume-upload",
    title: "6. Resume Upload and Processing",
    body: "Candidates may upload resumes and other professional documents to GoCareer. By uploading a resume or document, you confirm that:",
    points: [
      "You have the right to upload and use the content",
      "The information provided is accurate to the best of your knowledge",
      "The content does not violate the rights of another person or organization",
      "GoCareer may process the uploaded information to provide Platform services",
    ],
    note: "The Platform may use automated technologies to extract, organize, categorize, analyze, and process information contained in uploaded resumes and documents. Users should review automatically extracted information and make corrections where necessary. GoCareer does not guarantee that automated resume processing will always be complete, accurate, or error-free.",
  },
  {
    id: "ai-resume-parsing",
    title: "7. AI-Based Resume Parsing and Gemini Processing",
    body: "GoCareer uses artificial intelligence technology to assist with automated resume parsing and Candidate profile creation. When a Candidate uploads a resume, the resume file and/or text extracted from the resume may be securely transmitted to Google Gemini or another authorized artificial intelligence service provider for processing.",
    blocks: [
      {
        heading: "Information sent for resume parsing may include",
        points: [
          "Candidate name, email address, phone number, and location information included in the resume",
          "Professional summary, employment history, previous employers, job titles, and employment dates",
          "Educational qualifications, institutions attended, skills, and competencies",
          "Certifications, professional licenses, projects, achievements, and awards",
          "Languages, portfolio information, professional profile links, and other information voluntarily included in the uploaded resume",
        ],
      },
      {
        heading: "The information is processed for purposes including",
        points: [
          "Extracting information from the uploaded resume",
          "Converting unstructured resume information into structured data",
          "Creating or updating the Candidate profile",
          "Identifying Candidate skills and professional experience",
          "Supporting job matching functionality and generating job recommendations",
          "Calculating or supporting Candidate-job match scores",
          "Improving search and discovery functionality",
          "Providing other AI-assisted recruitment features available through GoCareer",
        ],
      },
    ],
    note: "GoCareer only sends information necessary to provide the relevant AI-powered resume parsing and processing functionality. Account passwords, OTPs, authentication credentials, and other unrelated Platform information are not sent to the AI service for resume parsing. AI-generated or automatically extracted information may not always be complete, accurate, or error-free. Candidates are responsible for reviewing their parsed information and making corrections where necessary. The processing of information by Google Gemini or other third-party AI service providers may also be subject to the applicable provider’s terms, privacy policies, data processing terms, and security practices. By uploading a resume and using the AI-based resume processing functionality, the Candidate acknowledges and agrees that information contained in the uploaded resume may be processed by authorized third-party AI service providers for the purposes described above.",
  },
  {
    id: "ai-features",
    title: "8. Artificial Intelligence and Automated Features",
    body: "In addition to resume parsing, GoCareer may use artificial intelligence, machine learning, algorithms, automated processing systems, and similar technologies to provide certain Platform features. These features may include:",
    points: [
      "Candidate profile generation",
      "Job recommendations and Candidate recommendations",
      "Match scores, skill analysis, search results, ranking and filtering",
      "Career-related suggestions and other automated services",
    ],
    note: "AI-generated recommendations, scores, rankings, and suggestions are provided for informational and assistance purposes only. GoCareer does not guarantee the accuracy, completeness, suitability, or reliability of AI-generated results. Candidates and Recruiters are responsible for independently reviewing information and making their own employment and recruitment decisions. GoCareer does not make final hiring, employment, or recruitment decisions on behalf of Candidates or Recruiters unless explicitly stated otherwise.",
  },
  {
    id: "job-listings",
    title: "9. Job Listings",
    body: "Job opportunities displayed on GoCareer may be posted by Recruiters, employers, companies, or authorized representatives. GoCareer does not guarantee:",
    points: [
      "The accuracy of every job listing",
      "The availability of a job opportunity",
      "That a Recruiter will respond to an application",
      "That a Candidate will receive an interview or employment offer",
      "The terms, conditions, compensation, or working environment offered by an employer",
    ],
    note: "Users should independently verify job opportunities and employers before making employment-related decisions. GoCareer reserves the right to remove job listings that are fraudulent, misleading, unlawful, expired, or otherwise violate these Terms.",
  },
  {
    id: "job-applications",
    title: "10. Job Applications and Recruitment Decisions",
    body: "Candidates may apply for available job opportunities through the Platform. Submitting an application does not guarantee selection, shortlisting, an interview, communication from the Recruiter, employment, or any specific recruitment outcome.",
    note: "Recruiters and employers remain responsible for their recruitment and employment decisions. GoCareer is not responsible for hiring decisions, employment agreements, salary negotiations, workplace conditions, termination decisions, or disputes between Candidates and Recruiters.",
  },
  {
    id: "interview-scheduling",
    title: "11. Interview Scheduling and Calendar Integration",
    body: "GoCareer may allow Candidates and Recruiters to schedule interviews and add interview details to supported third-party calendar services. Users are responsible for verifying interview dates, interview times, time zones, meeting locations, online meeting links, and other scheduling information.",
    note: "GoCareer shall not be responsible for missed interviews, scheduling conflicts, incorrect calendar settings, time zone differences, or failures caused by third-party calendar services.",
  },
  {
    id: "job-sharing",
    title: "12. Job Sharing",
    body: "The Platform may allow users to share job opportunities with other individuals through third-party applications or communication services.",
    note: "Users are responsible for ensuring that their use of job-sharing features complies with applicable laws and the terms of the relevant third-party services. GoCareer is not responsible for the availability, functionality, privacy practices, or actions of third-party platforms used to share job opportunities.",
  },
  {
    id: "referral-programs",
    title: "13. Referral Programs",
    body: "GoCareer may offer Candidate and Recruiter referral programs. Referral program eligibility, rewards, benefits, limitations, and other conditions may be governed by separate referral program rules displayed within the Platform. Users must not:",
    points: [
      "Create fake accounts to obtain referral benefits",
      "Refer themselves using multiple accounts",
      "Use automated methods to generate referrals",
      "Provide misleading information or manipulate the referral system",
      "Engage in fraudulent referral activities",
    ],
    note: "GoCareer reserves the right to investigate referral activity and withhold, cancel, reverse, or revoke referral benefits where misuse or fraud is suspected.",
  },
  {
    id: "communications",
    title: "14. Communications and Notifications",
    body: "By using GoCareer, you may receive communications relating to account activity, job applications, job recommendations, Candidate recommendations, interview schedules, recruitment updates, referral programs, Platform updates, customer support, and other service-related information.",
    note: "Communications may be provided through email, SMS, push notifications, in-app notifications, or other supported communication methods. Users may manage certain communication preferences through available Platform settings.",
  },
  {
    id: "candidate-support",
    title: "15. Candidate Support Chat",
    body: "GoCareer may provide Candidate support services through chat or other communication channels. Support services are intended to assist users with Platform-related questions and issues. Users must not use support services to harass or threaten support representatives, submit unlawful or offensive content, send spam, attempt fraud, distribute malware, or engage in other abusive activities.",
    note: "GoCareer reserves the right to restrict access to support services in cases of misuse.",
  },
  {
    id: "acceptable-use",
    title: "16. Acceptable Use",
    body: "Users agree not to use GoCareer to:",
    points: [
      "Violate applicable laws or regulations",
      "Create fake or misleading accounts or impersonate another person or organization",
      "Provide false professional, educational, employment, or company information",
      "Post fraudulent or misleading job opportunities",
      "Harass, threaten, abuse, or discriminate against others",
      "Collect Candidate information for unauthorized purposes or sell or commercially exploit user information",
      "Upload malicious software, viruses, or harmful code",
      "Attempt unauthorized access to the Platform or its systems",
      "Interfere with the operation or security of the Platform",
      "Scrape, copy, extract, or collect Platform data using unauthorized automated systems",
      "Manipulate Platform recommendations, rankings, referral systems, or other functionality",
      "Use the Platform for purposes unrelated to legitimate career, employment, or recruitment activities",
    ],
    note: "Violation of these rules may result in content removal, account restrictions, suspension, or permanent account termination.",
  },
  {
    id: "user-content",
    title: "17. User-Provided Content",
    body: "Users may submit information and content to the Platform, including profile information, resumes, professional information, company information, job listings, documents, messages, feedback, and other materials. Users retain ownership of the content they provide.",
    note: "By submitting content to GoCareer, users grant GoCareer a limited, non-exclusive license to host, store, process, reproduce, display, and use the content as necessary to operate, maintain, secure, improve, and provide Platform services. Users are responsible for ensuring that submitted content does not violate applicable laws or third-party rights.",
  },
  {
    id: "intellectual-property",
    title: "18. Intellectual Property Rights",
    body: "The GoCareer Platform, including its software, design, branding, logos, graphics, user interfaces, databases, algorithms, content, and other materials, is owned by or licensed to GoCareer and is protected by applicable intellectual property laws. Except where expressly permitted, users may not copy, reproduce, modify, distribute, sell, license, reverse engineer, decompile, create derivative works from, or commercially exploit any part of the Platform without prior written authorization.",
  },
  {
    id: "third-party-services",
    title: "19. Third-Party Services",
    body: "GoCareer may integrate with or provide access to third-party services, including artificial intelligence service providers, authentication providers, calendar services, communication platforms, cloud hosting services, analytics services, notification services, and other technology providers.",
    note: "Third-party services operate according to their own terms and privacy policies. GoCareer does not control and is not responsible for the availability, security, functionality, content, or privacy practices of third-party services.",
  },
  {
    id: "privacy",
    title: "20. Privacy and Data Protection",
    body: "Your use of GoCareer is also subject to the GoCareer Privacy Policy. The Privacy Policy explains how personal information is collected, processed, stored, shared, and protected when users access the Platform.",
    note: "By using GoCareer, you acknowledge that your information will be processed in accordance with the Privacy Policy and applicable data protection laws.",
  },
  {
    id: "platform-availability",
    title: "21. Platform Availability",
    body: "GoCareer aims to provide reliable Platform services but does not guarantee continuous, uninterrupted, secure, or error-free access. The Platform may become temporarily unavailable due to maintenance, technical issues, software updates, security incidents, third-party service failures, internet or network problems, or circumstances beyond GoCareer’s reasonable control.",
    note: "GoCareer shall not be liable for temporary interruptions or unavailability of Platform services.",
  },
  {
    id: "account-suspension",
    title: "22. Account Suspension and Termination",
    body: "GoCareer may suspend, restrict, or terminate an account if these Terms are violated, fraudulent activity is suspected, false or misleading information is provided, the Platform is misused, security risks are identified, required by applicable law or legal authorities, or continued account access may cause harm to GoCareer, its users, or third parties.",
    note: "Where appropriate and legally required, users may be provided with notice regarding account suspension or termination. Users may request account deletion through the available Platform functionality or by contacting GoCareer support.",
  },
  {
    id: "disclaimer",
    title: "23. Disclaimer of Warranties",
    body: "GoCareer is provided on an “as is” and “as available” basis to the maximum extent permitted by applicable law. GoCareer does not guarantee employment outcomes, Candidate availability, Recruiter responses, job availability, interview selection, hiring decisions, accuracy of user-provided information, accuracy of AI-generated recommendations, uninterrupted Platform availability, or error-free Platform functionality.",
    note: "Users access and use the Platform at their own discretion and risk.",
  },
  {
    id: "limitation-of-liability",
    title: "24. Limitation of Liability",
    body: "To the maximum extent permitted by applicable law, GoCareer and its owners, affiliates, employees, directors, officers, representatives, and service providers shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to use or inability to use the Platform, employment or recruitment decisions, user-provided information, job listings, AI-generated recommendations, unauthorized account access, third-party services, loss of data, loss of business opportunities, or interactions between Candidates, Recruiters, employers, or other users.",
    note: "Nothing in these Terms excludes liability that cannot legally be excluded under applicable law.",
  },
  {
    id: "indemnification",
    title: "25. Indemnification",
    body: "To the extent permitted by applicable law, users agree to indemnify and hold harmless GoCareer and its affiliates, officers, employees, representatives, and service providers from claims, liabilities, damages, losses, and expenses arising from violation of these Terms, misuse of the Platform, violation of applicable laws, infringement of third-party rights, or content or information submitted through the Platform.",
  },
  {
    id: "changes-platform",
    title: "26. Changes to the Platform",
    body: "GoCareer reserves the right to modify, update, suspend, restrict, or discontinue any part of the Platform.",
    note: "Where significant changes affect users, GoCareer may provide reasonable notice through the Platform or other available communication channels.",
  },
  {
    id: "changes-terms",
    title: "27. Changes to These Terms",
    body: "GoCareer may update these Terms and Conditions from time to time. The updated Terms will be made available through the Platform, along with the revised “Last Updated” date.",
    note: "Continued use of GoCareer after updated Terms become effective constitutes acceptance of the revised Terms. Where required by applicable law, users may be asked to provide renewed consent to material changes.",
  },
  {
    id: "governing-law",
    title: "28. Governing Law and Jurisdiction",
    body: "These Terms and Conditions shall be governed by and interpreted in accordance with the applicable laws of India.",
    note: "Any disputes arising from or relating to these Terms or the use of GoCareer shall be subject to the jurisdiction of the courts located in Ernakulam, Kerala, India, unless otherwise required by applicable law.",
  },
  {
    id: "severability",
    title: "29. Severability",
    body: "If any provision of these Terms is determined to be invalid, unlawful, or unenforceable, the remaining provisions shall continue to remain valid and enforceable.",
  },
  {
    id: "entire-agreement",
    title: "30. Entire Agreement",
    body: "These Terms and Conditions, together with the GoCareer Privacy Policy and any additional policies or terms displayed within the Platform, constitute the entire agreement between users and GoCareer regarding the use of the Platform.",
  },
  {
    id: "contact",
    title: "31. Contact Us",
    points: [
      "GoCareer",
      "Email: gocareerdev@gmail.com",
      "Registered Address: Ernakulam",
      "Website: gocareer.co",
    ],
  },
];

export function TermsAndConditionsPage() {
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
              <FileText className="size-3.5 text-primary" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
              Terms and <span className="text-gradient">Conditions</span>
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Welcome to GoCareer. These Terms and Conditions (“Terms”) govern your access to and use
              of the GoCareer mobile application, website, web application, recruiter portal, admin
              portal, and related services (collectively referred to as the “Platform”).
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              By accessing, registering for, or using GoCareer, you acknowledge that you have read,
              understood, and agreed to be bound by these Terms and Conditions. If you do not agree
              with any part of these Terms, you should not access or use the Platform.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                <Scale className="size-3" />
                Effective: 01-07-2026
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                <FileText className="size-3" />
                Last updated: 01-07-2026
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
                <p className="mt-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {section.note}
                </p>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
