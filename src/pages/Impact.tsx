import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { ImpactPageSection } from "@/components/landing/ImpactPageSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Impact = () => {
  return (
    <div className="justify-center items-stretch flex flex-col overflow-hidden bg-white">
      <Navbar />
      <main>
        <ImpactPageSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
