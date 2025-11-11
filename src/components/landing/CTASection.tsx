import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export const CTASection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted with email:", email);
    setEmail("");
  };

  return (
    <section className="items-center flex w-full flex-col overflow-hidden gap-6 bg-white px-6 py-0 max-md:max-w-full max-md:px-5">
      <div className="max-w-screen-xl items-center flex w-full gap-16 bg-zinc-900 p-16 rounded-xl max-md:max-w-full max-md:px-5">
        <div className="self-stretch flex min-w-60 w-full items-center gap-[40px_100px] justify-between flex-wrap flex-1 shrink basis-[0%] max-w-screen-xl my-auto max-md:max-w-full">
          <div className="max-w-xl self-stretch min-w-60 text-neutral-50 flex-1 shrink basis-[0%] gap-4 my-auto max-md:max-w-full">
            <h2
              className="text-neutral-50 text-2xl font-bold leading-8 max-md:max-w-full"
              style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
            >
              Be part of the change.
            </h2>
            <p className="text-neutral-50 text-base font-normal leading-6 opacity-80 mt-4 max-md:max-w-full">
              Harness the power of the network.
            </p>
          </div>
          <div className="items-center self-stretch flex gap-3 text-sm text-zinc-900 font-medium leading-none my-auto">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md border border-gray-300 text-zinc-900 min-w-[200px] hidden md:block"
                required
              />
              <Button variant="secondary" type="submit">
                Get in touch
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
