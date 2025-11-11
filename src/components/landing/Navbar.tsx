import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export const Navbar: React.FC = () => {
  return (
    <header className="items-center flex w-full flex-col overflow-hidden justify-center gap-6 bg-white px-0 py-4 max-md:max-w-full">
      <div className="max-w-screen-xl justify-center items-stretch flex w-full flex-col gap-16 px-6 py-0 max-md:max-w-full max-md:px-5">
        <nav className="relative flex w-full items-center justify-between max-md:max-w-full">
          <div className="self-stretch z-0 flex min-w-60 flex-col overflow-hidden justify-center flex-1 shrink basis-[0%] my-auto px-[5px] py-1 max-md:max-w-full max-md:pr-5">
            <Link to="/">
              <img
                src="/navbar-logo.svg"
                alt="Building Blocks Logo"
                className="aspect-[0.93] object-contain w-[26px] cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          <div className="items-center self-stretch z-0 flex gap-5 text-sm text-neutral-50 font-medium leading-none my-auto">
            <Button variant="primary">Get in touch</Button>
          </div>
          <div className="items-center absolute z-0 flex gap-1 text-sm text-zinc-900 font-medium whitespace-nowrap leading-none -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
            <Link
              to="/impact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3"
            >
              Impact
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3"
            >
              FAQ
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
