import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="items-center flex w-full flex-col justify-center gap-8 bg-white px-0 py-24 max-md:max-w-full">
      <div className="max-w-screen-xl items-stretch flex w-full flex-col gap-16 px-6 py-0 max-md:max-w-full max-md:px-5">
        <div className="items-stretch self-center flex w-[317px] max-w-full flex-col text-base text-zinc-500 font-normal gap-12">
          <Link to="/" className="self-center">
            <img
              src="/footer-logo.svg"
              alt="Building Blocks Logo"
              className="aspect-[1] object-contain w-20 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
          <nav className="items-center flex w-full gap-8 mt-12 max-md:mt-10">
            <a
              href="#home"
              className="text-zinc-500 text-base font-normal leading-6 self-stretch my-auto hover:text-zinc-700 transition-colors"
            >
              Home
            </a>
            <Link
              to="/impact"
              className="text-zinc-500 text-base font-normal leading-6 self-stretch my-auto hover:text-zinc-700 transition-colors"
            >
              Impact
            </Link>
            <Link
              to="/faq"
              className="text-zinc-500 text-base font-normal leading-6 self-stretch my-auto hover:text-zinc-700 transition-colors"
            >
              FAQ
            </Link>
            <a
              href="#contact"
              className="text-zinc-500 text-base font-normal leading-6 self-stretch my-auto hover:text-zinc-700 transition-colors"
            >
              Get in touch
            </a>
          </nav>
        </div>
        <div className="w-full mt-16 p-0 max-md:max-w-full max-md:mt-10">
          <div className="border-zinc-200 border min-h-px w-full bg-zinc-200 border-solid max-md:max-w-full" />
        </div>
        <div className="flex w-full items-center gap-[40px_100px] text-base text-zinc-500 font-normal justify-between flex-wrap mt-16 max-md:max-w-full max-md:mt-10">
          <div className="text-zinc-500 text-base font-normal leading-6 self-stretch my-auto">
            Copyright {currentYear} © Building Blocks
          </div>
          <div className="items-center self-stretch flex min-w-60 gap-8 my-auto">
            <a
              href="#privacy"
              className="text-zinc-500 text-base font-normal leading-6 self-stretch my-auto hover:text-zinc-700 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-zinc-500 text-base font-normal leading-6 self-stretch my-auto hover:text-zinc-700 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="text-zinc-500 text-base font-normal leading-6 self-stretch my-auto hover:text-zinc-700 transition-colors"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
