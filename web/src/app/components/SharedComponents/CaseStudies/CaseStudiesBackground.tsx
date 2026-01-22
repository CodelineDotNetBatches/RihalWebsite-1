import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  texture1: StaticImageData;
  texture2: StaticImageData;
};

const CaseStudiesBackground: React.FC<Props> = ({ texture1, texture2 }) => {
  return (
    <>
      <div className="absolute w-[1327px] h-[841px] left-[-7px] top-[4279px] bg-[#0B1A2B]" />

      <Image src={texture1} alt="" className="absolute w-[1504px] top-[321px]" />
      <Image src={texture2} alt="" className="absolute w-[1504px] top-[900px]" />
    </>
  );
};

export default CaseStudiesBackground;
