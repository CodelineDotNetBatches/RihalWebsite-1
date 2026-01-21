"use client";

import React from "react";

type Props = {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  className?: string;
};

const CaseStudiesButtonIndustry: React.FC<Props> = ({
  options,
  selected,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex flex-wrap justify-center gap-[12.19px] ${className}`}>
      {options.map((label) => {
        const active = selected === label;

        return (
          <button
            key={label}
            type="button"
            onClick={() => onChange(label)}
            className={[
              "h-[48.76px] px-[18px] rounded-[20.32px] flex items-center justify-center transition",
              active ? "bg-[#0B9E8C]" : "bg-[#0B9E8C]/[0.18]",
            ].join(" ")}
          >
            <span className="font-['Rihal'] text-[16.25px] leading-[24.38px] text-[#F4FFFE]">
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CaseStudiesButtonIndustry;
