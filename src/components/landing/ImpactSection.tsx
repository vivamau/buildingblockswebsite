import React from 'react';
import { StatCard } from '@/components/ui/StatCard';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const stats = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/2bde0eab5b540413c41bc0a2c8a3511856e00e77?placeholderIfAbsent=true",
      title: "\nBank fees\nsaved",
      value: "$3,5\nMillion"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/75d352bde0d4945f295f1c282da82293ae666231?placeholderIfAbsent=true",
      title: "\nPeople\nsupported",
      value: "6.000.000+\n"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/c7f37e3f44bbad78769557dd5009cf30143b57f5?placeholderIfAbsent=true",
      title: "Cash-based\nredemptions\nprocessed ",
      value: "$760\nMillion"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/bff35858b39d2d5ab94bb30a857d8bd732dc64ed?placeholderIfAbsent=true",
      title: "\nOrganisations\ncollaborating",
      value: "80+\n"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/f2c1528c7c4602ccea973b0c810594f68efec5d4?placeholderIfAbsent=true",
      title: "Unintented\nassistance overlap\nprevented",
      value: "$230\nMillion",
      className: "z-10 mr-[-276px]"
    }
  ];

  return (
    <section className="items-center flex w-full flex-col overflow-hidden gap-10 bg-[#C5ECFF] px-0 py-24 max-md:max-w-full">
      <div className="self-stretch flex w-full flex-col items-center font-normal text-center max-md:max-w-full">
        <div className="max-w-screen-xl justify-center flex w-full gap-16 px-6 py-0 max-md:max-w-full max-md:px-5">
          <div className="max-w-xl min-w-60 w-[576px] flex-1 shrink basis-[0%] gap-10 max-md:max-w-full">
            <div className="items-stretch flex w-full flex-col gap-5 max-md:max-w-full">
              <h2 className="text-zinc-900 text-4xl font-normal leading-10 max-md:max-w-full">
                History & impact
              </h2>
              <p className="text-[#023] text-lg font-normal leading-7 opacity-80 self-center mt-5 max-md:max-w-full">
                Born as a small pilot, the network has grown into one of the
                largest humanitarian technology collaborations, shaping how
                organizations work together. It has already safeguarded
                resources, streamlined assistance, and improved the lives of
                millions across multiple regions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto flex w-[1280px] max-w-full items-stretch gap-6 text-teal-50 mt-10">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            className={stat.className}
          />
        ))}
      </div>
      <div className="flex gap-3 text-sm font-medium leading-none mt-10">
        <Button variant="primary">
          Join the network
        </Button>
        <Button 
          variant="ghost" 
          icon={<ArrowRight className="w-4 h-4" />}
        >
          Discover the impact
        </Button>
      </div>
    </section>
  );
};
