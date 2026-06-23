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
import { Toaster } from "@/components/ui/sonner";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { DeleteMyAccountPage } from "@/pages/DeleteMyAccountPage";

function getPage() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  if (pathname === "/deletemyaccount") return "delete-account";
  const params = new URLSearchParams(window.location.search);
  if (params.get("page") === "privacy-policy") return "privacy-policy";
  return "home";
}

export default function App() {
  const page = getPage();

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <AmbientBackground />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        {page === "privacy-policy" ? (
          <PrivacyPolicyPage />
        ) : page === "delete-account" ? (
          <DeleteMyAccountPage />
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
      <Toaster richColors position="top-center" />
    </div>
  );
}
