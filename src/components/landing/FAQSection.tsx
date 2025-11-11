import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What is Building Blocks?",
      answer:
        "Building Blocks is a blockchain-based humanitarian network designed to facilitate collaboration between organizations supporting people affected by disasters, climate change, and conflict. It enables secure, transparent coordination and prevents duplication of aid.",
    },
    {
      question: "How does the network work?",
      answer:
        "The network uses blockchain technology to create a shared, immutable ledger where organizations can record and verify assistance delivery. This prevents duplicate aid distribution and ensures resources are used efficiently to reach more people in need.",
    },
    {
      question: "Which organizations use Building Blocks?",
      answer:
        "Building Blocks is used by over 80 humanitarian organizations worldwide, including the World Food Programme and other major UN agencies. The network has already facilitated millions of dollars in aid delivery and supported millions of people.",
    },
    {
      question: "Is the network secure?",
      answer:
        "Yes, Building Blocks uses blockchain technology which provides inherent security through decentralization and cryptography. All transactions are recorded on an immutable ledger, ensuring transparency and preventing fraud.",
    },
    {
      question: "How can my organization join?",
      answer:
        "Organizations can join the Building Blocks network by contacting the coordination team. The platform is designed to be accessible and user-friendly, with training and technical support provided to new participants.",
    },
    {
      question: "What types of assistance can be tracked?",
      answer:
        "Building Blocks can track various types of assistance including cash-based transfers, food distribution, WASH (Water, Sanitation, and Hygiene) services, medicine distribution, and other forms of humanitarian aid.",
    },
    {
      question: "How does Building Blocks prevent aid duplication?",
      answer:
        "By maintaining a shared registry of beneficiaries and assistance provided, organizations can see what aid has already been given to specific individuals or households, preventing overlap and ensuring efficient resource allocation.",
    },
    {
      question: "What are the benefits for beneficiaries?",
      answer:
        "Beneficiaries experience faster assistance delivery, reduced administrative burden, improved privacy and data protection, and better coordination between organizations providing services.",
    },
  ];

  return (
    <section
      className="items-center flex w-full flex-col gap-10 px-0 py-24 max-md:max-w-full"
      style={{
        background:
          "linear-gradient(to bottom, #C9EDFF 0%, white 20%, white 100%)",
      }}
    >
      <div className="self-stretch flex w-full flex-col items-center font-normal text-center max-md:max-w-full">
        <div className="max-w-screen-xl justify-center flex w-full gap-16 px-6 py-0 max-md:max-w-full max-md:px-5">
          <div className="max-w-4xl min-w-60 w-[768px] flex-1 shrink basis-[0%] gap-10 max-md:max-w-full">
            <div className="items-stretch flex w-full flex-col gap-5 max-md:max-w-full">
              <h2
                className="text-zinc-900 text-4xl font-normal leading-10 max-md:max-w-full"
                style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-[#023] text-lg font-normal leading-7 opacity-80 self-center mt-5 max-md:max-w-full">
                Find answers to common questions about Building Blocks and how
                it's transforming humanitarian aid coordination.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl px-6">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-zinc-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-zinc-900 font-medium py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
