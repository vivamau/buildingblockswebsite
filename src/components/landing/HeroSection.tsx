import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="items-center relative flex w-full flex-col overflow-hidden gap-6 px-0 py-24 max-md:max-w-full">
      <div className="max-w-screen-xl items-center self-center z-0 flex w-full gap-16 flex-wrap px-6 py-0 max-md:max-w-full max-md:px-5">
        <div className="items-stretch self-stretch flex min-w-60 flex-col flex-1 shrink basis-[0%] gap-8 my-auto max-md:max-w-full">
          <div className="w-full gap-5 max-md:max-w-full">
            <h1
              className="text-zinc-900 text-5xl font-light leading-[52px] max-md:max-w-full max-md:text-[40px] max-md:leading-[48px]"
              style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
            >
              Fairer outcomes.
              <br />
              Greater efficiency.
              <br />
              Harness the power
              <br />
              of the network.
            </h1>
            <p className="text-zinc-500 text-lg font-normal leading-7 mt-5 max-md:max-w-full">
              Building Blocks is a blockchain based humanitarian network
              designed to facilitate collaboration between organisations
              supporting people affected by disasters, climate change and
              conflict.
            </p>
          </div>
          <div className="flex gap-3 text-sm font-medium leading-none mt-8">
            <Button variant="primary">Join the network</Button>
            <Button variant="ghost" icon={<ArrowRight className="w-4 h-4" />}>
              Discover the impact
            </Button>
          </div>
        </div>
        <div className="justify-center items-stretch self-stretch flex min-w-60 flex-col w-[584px] my-auto rounded-xl max-md:max-w-full">
          <img
            src="/hero-network-visualization.png"
            alt="Building Blocks Network Visualization"
            className="aspect-[1] object-contain w-full z-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};
