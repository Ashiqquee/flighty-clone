import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { ImportSection } from "@/components/import-section";
import { SharingSection } from "@/components/sharing-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ImportSection />
      <SharingSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
}
