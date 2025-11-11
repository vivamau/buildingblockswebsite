import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { CollaborationSection } from "@/components/landing/CollaborationSection";
import { ImpactSection } from "@/components/landing/ImpactSection";
import { FutureSection } from "@/components/landing/FutureSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="justify-center items-stretch flex flex-col overflow-hidden bg-white">
      <Navbar />
      <main>
        <div className="bg-gradient-to-br from-[#C9EDFF] 70% to-white 10%">
          <HeroSection />
        </div>
        <CollaborationSection />
        <ImpactSection />
        <FutureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
