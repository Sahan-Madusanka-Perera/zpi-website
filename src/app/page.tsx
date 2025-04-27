// app/page.tsx
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import TeamSection from "@/components/sections/team-section";
import { ContactSection } from "@/components/sections/contact-section";
import { StrengthSection } from "@/components/sections/strength-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TimelineSection />
      <TeamSection />
      <StrengthSection />
      <ContactSection />
    </main>
  );
}