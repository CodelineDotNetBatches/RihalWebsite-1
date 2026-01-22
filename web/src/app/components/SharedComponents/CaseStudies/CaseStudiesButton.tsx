import React from "react";

type Props = {
  text: string;
  onClick?: () => void;
};

const CaseStudiesButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center w-[189px] h-[50px] rounded-[50px] pt-[16px] pr-[52.23px] pb-[17.19px] pl-[51.77px] bg-gradient-to-r from-[#9CF2E8] via-[#06CBB8] to-[#9CF2E8] mx-auto"
    >
      <span className="w-[85px] h-[28px] flex items-center justify-center font-['Rihal'] font-bold text-[16px] leading-[27.2px] uppercase text-white text-center">
        {text}
      </span>
    </button>
  );
};

export default CaseStudiesButton;
