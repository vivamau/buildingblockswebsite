import React from 'react';

interface StatCardProps {
  icon: string;
  title: string;
  value: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, title, value, className = '' }) => {
  return (
    <div className={`justify-center items-center border shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-2px_rgba(0,0,0,0.05)] flex gap-4 flex-1 bg-[#023] p-6 rounded-lg border-solid border-[#004D73] max-md:px-5 ${className}`}>
      <img
        src={icon}
        alt=""
        className="aspect-[1] object-contain w-20 self-stretch shrink-0 my-auto"
      />
      <div className="self-stretch w-[148px] gap-2 my-auto">
        <div className="text-teal-50 text-sm font-medium leading-5">
          {title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {index > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </div>
        <div className="text-teal-50 text-2xl font-bold leading-8 mt-2">
          {value.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {index > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
