import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Showcase } from "@/components/landing/Showcase";
import { WhyChoose } from "@/components/landing/WhyChoose";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { BackToTop } from "@/components/landing/BackToTop";
import { AmbientBackground } from "@/components/landing/AmbientBackground";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const isPrivacyPolicyPage = params.get("page") === "privacy-policy";

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <AmbientBackground />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        {isPrivacyPolicyPage ? (
          <PrivacyPolicyPage />
        ) : (
          <>
            <Hero />
            <LogoMarquee />
            <Features />
            <HowItWorks />
            <Showcase />
            <WhyChoose />
            <Testimonials />
            <CTA />
          </>
        )}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
