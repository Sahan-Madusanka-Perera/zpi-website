// app/page.tsx
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { GallerySection } from "@/components/sections/gallery-section";
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
      <GallerySection />
      <TimelineSection />
      <TeamSection />
      <StrengthSection />
      <ContactSection />

      {/* Copyright Footer */}
      <footer className="bg-gray-950 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Zeus Power International (Pvt) Ltd. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            A subsidiary of Illukkumbura Industrial Automation (Pvt) Ltd
          </p>
        </div>
      </footer>
    </main>
  );
}