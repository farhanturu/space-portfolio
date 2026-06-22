"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const SpaceScene = dynamic(() => import("@/components/SpaceScene"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative">
      <SpaceScene />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
