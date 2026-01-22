import React from "react";

type Props = { text: string };

const CaseStudiesSubTitle: React.FC<Props> = ({ text }) => {
  return (
    <div className="w-full h-[60px] flex items-center justify-center font-['Rihal'] font-normal text-[24px] leading-[30px] tracking-[0] text-center text-[#E5E5E5]">
      <p>
        {text}
        <br />
      </p>
    </div>
  );
};

export default CaseStudiesSubTitle;
