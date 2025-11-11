import React from "react";

export const CollaborationSection: React.FC = () => {
  return (
    <section className="items-center flex w-full flex-col overflow-hidden font-normal justify-center gap-6 px-0 py-24 max-md:max-w-full">
      <div className="max-w-screen-xl items-center flex w-full gap-16 flex-wrap px-6 py-0 max-md:max-w-full max-md:px-5">
        <div className="flex flex-col bg-blend-normal self-stretch relative min-h-[480px] min-w-60 overflow-hidden items-center text-lg text-black whitespace-nowrap text-center leading-loose justify-center flex-1 shrink basis-[0%] my-auto px-20 py-[79px] rounded-sm max-md:max-w-full max-md:px-5">
          <video
            src="/230609_BUILDING_BLOCKS.mp4"
            className="absolute h-full w-full object-cover inset-0"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
        <article className="self-stretch min-w-60 flex-1 shrink basis-40 gap-8 my-auto max-md:max-w-full">
          <div className="w-full gap-5 max-md:max-w-full">
            <h2
              className="text-zinc-900 text-4xl font-normal leading-10 max-md:max-w-full"
              style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
            >
              Leveraging technology
              <br />
              for effective inter-agency collaboration
            </h2>
            <p className="text-zinc-500 text-lg font-normal leading-7 mt-5 max-md:max-w-full">
              In many humanitarian settings, multiple organizations operate in
              the same areas, increasing the risk of unintentional overlap and
              duplication of assistance. Today, as humanitarian needs are
              projected to increase, combined with declining funding -
              coordinated aid delivery is more critical than ever.
              <br />
              <br />
              Building Blocks envisions a world where various humanitarian
              organizations are linked together through a neutral blockchain
              network, to optimize and harmonize collective efforts, ensure
              limited humanitarian resources are used efficiently to
              collectively reach more affected people, and increase convenience
              and choice for those served.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
