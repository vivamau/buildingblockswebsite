import React from "react";

export const ImpactPageSection: React.FC = () => {
  const impactMetrics = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/2bde0eab5b540413c41bc0a2c8a3511856e00e77?placeholderIfAbsent=true",
      title: "Bank fees saved",
      value: "$3.5 Million",
      description:
        "Reduced transaction costs through blockchain-based solutions",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/75d352bde0d4945f295f1c282da82293ae666231?placeholderIfAbsent=true",
      title: "People supported",
      value: "6,000,000+",
      description: "Beneficiaries reached across multiple regions",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/c7f37e3f44bbad78769557dd5009cf30143b57f5?placeholderIfAbsent=true",
      title: "Cash-based redemptions",
      value: "$760 Million",
      description: "Total value of assistance delivered through the network",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/bff35858b39d2d5ab94bb30a857d8bd732dc64ed?placeholderIfAbsent=true",
      title: "Organizations collaborating",
      value: "80+",
      description: "Humanitarian agencies using the Building Blocks network",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/f2c1528c7c4602ccea973b0c810594f68efec5d4?placeholderIfAbsent=true",
      title: "Assistance overlap prevented",
      value: "$230 Million",
      description: "Avoided duplicate aid distribution through coordination",
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
                Our Impact
              </h2>
              <p className="text-[#023] text-lg font-normal leading-7 opacity-80 self-center mt-5 max-md:max-w-full">
                Building Blocks has transformed humanitarian aid coordination,
                delivering measurable results and creating lasting change.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactMetrics.map((metric, index) => (
            <div
              key={index}
              className="justify-center items-center border shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-2px_rgba(0,0,0,0.05)] flex gap-4 flex-1 h-40 bg-[#023] p-6 rounded-lg border-solid border-[#004D73] max-md:px-5"
            >
              <img
                src={metric.icon}
                alt=""
                className="aspect-[1] object-contain w-20 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch w-[148px] gap-2 my-auto">
                <div className="text-teal-50 text-sm font-medium leading-5">
                  {metric.title}
                </div>
                <div className="text-teal-50 text-2xl font-bold leading-8 mt-2">
                  {metric.value}
                </div>
                <div className="text-teal-50 text-xs font-normal leading-4 mt-1 opacity-80">
                  {metric.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl justify-center flex w-full gap-16 px-6 py-0 max-md:max-w-full max-md:px-5">
        <div className="max-w-4xl min-w-60 w-[768px] flex-1 shrink basis-[0%] gap-10 max-md:max-w-full">
          <div className="items-stretch flex w-full flex-col gap-5 max-md:max-w-full">
            <h3
              className="text-zinc-900 text-2xl font-normal leading-8 max-md:max-w-full"
              style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
            >
              Real-World Impact
            </h3>
            <p className="text-zinc-500 text-lg font-normal leading-7 max-md:max-w-full">
              Building Blocks has demonstrated measurable impact across multiple
              humanitarian operations. From preventing aid duplication in
              complex emergency responses to reducing operational costs, the
              network has proven its value as a critical tool for humanitarian
              coordination.
            </p>
            <p className="text-zinc-500 text-lg font-normal leading-7 max-md:max-w-full">
              The platform's success in connecting over 80 organizations
              demonstrates the power of collaboration and shared technology in
              addressing global humanitarian challenges. Each metric represents
              real people helped and resources optimized for maximum impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
