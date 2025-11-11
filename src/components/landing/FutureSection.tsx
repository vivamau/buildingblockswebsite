import React from "react";

export const FutureSection: React.FC = () => {
  return (
    <section className="items-center flex w-full flex-col overflow-hidden font-normal justify-center gap-6 px-0 py-24 max-md:max-w-full">
      <div className="max-w-screen-xl items-center flex w-full gap-16 flex-wrap px-6 py-0 max-md:max-w-full max-md:px-5">
        <article className="self-stretch min-w-60 flex-1 shrink basis-40 gap-8 my-auto max-md:max-w-full">
          <div className="w-full gap-5 max-md:max-w-full">
            <h2
              className="text-zinc-900 text-4xl font-normal leading-10 max-md:max-w-full"
              style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
            >
              The future is now
            </h2>
            <p className="text-zinc-500 text-lg font-normal leading-7 mt-5 max-md:max-w-full">
              Building Blocks is a blockchain network for humanitarian and
              development use, enabling secure, transparent coordination and
              preventing duplication of aid. Already operating at scale, it
              offers a shared infrastructure where organizations deploy free
              applications, such as WFP's financial value transfer tool, which
              distributes food, cash, WASH, and medicine to millions. Future
              applications like Digital ID and supply chain management could
              further enhance transparency. Ultimately, as connectivity and
              literacy grow, Building Blocks could empower people to own and
              control their data, reshaping humanitarian assistance.
            </p>
          </div>
        </article>
        <div className="flex flex-col self-stretch relative min-h-[480px] min-w-60 overflow-hidden text-lg text-black whitespace-nowrap text-center leading-loose justify-center flex-1 shrink basis-[0%] my-auto px-20 py-[79px] rounded-sm max-md:max-w-full max-md:px-5">
          <img
            src="/future-vision-new.png"
            alt="Future Vision Background"
            className="absolute h-full w-full object-cover inset-0"
          />
        </div>
      </div>
    </section>
  );
};
