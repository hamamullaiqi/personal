import React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CapabilitiesBento } from "@/components/capabilities-bento";
import { CaseStudies } from "@/components/case-studies";
import { EngineeringPrinciples } from "@/components/engineering-principles";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { BookingSection } from "@/components/booking-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#0B0F19] dark:text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <CapabilitiesBento />
        <CaseStudies />
        <EngineeringPrinciples />
        <ExperienceTimeline />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
