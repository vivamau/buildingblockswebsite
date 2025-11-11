import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const FAQ = () => {
  return (
    <div className="justify-center items-stretch flex flex-col overflow-hidden bg-white">
      <Navbar />
      <main>
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
