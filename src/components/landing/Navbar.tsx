import React from 'react';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  return (
    <header className="items-center flex w-full flex-col overflow-hidden justify-center gap-6 bg-white px-0 py-4 max-md:max-w-full">
      <div className="max-w-screen-xl justify-center items-stretch flex w-full flex-col gap-16 px-6 py-0 max-md:max-w-full max-md:px-5">
        <nav className="relative flex w-full items-center justify-between max-md:max-w-full">
          <div className="self-stretch z-0 flex min-w-60 flex-col overflow-hidden justify-center flex-1 shrink basis-[0%] my-auto px-[5px] py-1 max-md:max-w-full max-md:pr-5">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/50707cd75ed5059d5b581c680b2abbff192f5b86?placeholderIfAbsent=true"
              alt="Building Blocks Logo"
              className="aspect-[0.93] object-contain w-[26px]"
            />
          </div>
          <div className="items-center self-stretch z-0 flex gap-5 text-sm text-neutral-50 font-medium leading-none my-auto">
            <Button variant="primary">
              Get in touch
            </Button>
          </div>
          <div className="items-center absolute z-0 flex gap-1 text-sm text-zinc-900 font-medium whitespace-nowrap leading-none -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
            <Button variant="ghost">
              Impact
            </Button>
            <Button variant="ghost" size="sm">
              FAQ
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
