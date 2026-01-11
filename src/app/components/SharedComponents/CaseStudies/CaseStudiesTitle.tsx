import React from "react";

type Props = { text: string };

const CaseStudiesTitle: React.FC<Props> = ({ text }) => {
  return (
    <div className="w-full h-[78px] flex items-center justify-center font-['Rihal'] font-medium text-[56px] leading-[78px] tracking-[0] text-white text-center">
      <p>{text}</p>
    </div>
  );
};

export default CaseStudiesTitle;
