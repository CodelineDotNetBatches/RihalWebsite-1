"use client";

import React, { useMemo } from "react";
import type { StaticImageData } from "next/image";

import CaseStudiesBackground from "./CaseStudiesBackground";
import CaseStudiesTitle from "./CaseStudiesTitle";
import CaseStudiesSubTitle from "./CaseStudiesSubTitle";
import CaseStudiesButton from "./CaseStudiesButton";
import CaseStudiesCardSection from "./CaseStudiesCardSection";

import bgTexture from "../../../../../public/images/HomeComponenets/CaseStudiesCardImage/Vector 35.svg";
import bgTexture2 from "../../../../../public/images/HomeComponenets/CaseStudiesCardImage/Vector 37.svg";

import companyImage from "../../../../../public/images/HomeComponenets/CaseStudiesCardImage/image 12.svg";
import cardImage1 from "../../../../../public/images/HomeComponenets/CaseStudiesCardImage/Frame 1410119294.png";
import cardImage2 from "../../../../../public/images/HomeComponenets/CaseStudiesCardImage/Frame 1410119294.png";

export type CaseStudyCardData = {
  id: number;
  industry: string;
  year: string;
  description: string;
  companyLogo: StaticImageData;
  mainImage: StaticImageData;
};

const CaseStudies = () => {
  const cards: CaseStudyCardData[] = useMemo(
    () => [
      {
        id: 1,
        industry: "Oil and Gas",
        year: "2022",
        description: "Optimizing business operations and transforming customer experience with data and AI",
        companyLogo: companyImage,
        mainImage: cardImage1,
      },
      {
        id: 2,
        industry: "Government",
        year: "2023",
        description: "Enhancing digital services and decision-making using AI-powered analytics",
        companyLogo: companyImage,
        mainImage: cardImage2,
      },
      {
        id: 3,
        industry: "Government",
        year: "2024",
        description: "Enhancing digital services and decision-making using AI-powered analytics",
        companyLogo: companyImage,
        mainImage: cardImage2,
      },
      {
        id: 4,
        industry: "Government",
        year: "2025",
        description: "Enhancing digital services and decision-making using AI-powered analytics",
        companyLogo: companyImage,
        mainImage: cardImage2,
      },
    ],
    []
  );

  return (
    <div className="relative w-[1504px] h-[1169px]  bg-[#0B1A2B] overflow-hidden mx-auto mb-[100px]">
      <CaseStudiesBackground texture1={bgTexture} texture2={bgTexture2} />

      <div className="absolute flex flex-col w-[1504px] h-[1088px] gap-[65px]">
        <div className="flex flex-col w-[1056px] h-[216px] gap-[16px] mx-auto mt-[60px]">
          <div className="flex flex-col w-[1056px] h-[216px] gap-[12px] mx-auto mt-[60px]">
            <CaseStudiesTitle text="Case Studies" />
            <CaseStudiesSubTitle text="Our impact is best told through the organizations we’ve partnered with. Together, we’ve solved challenges, built resilience, and delivered measurable value." />
            <CaseStudiesButton text="View all" />
          </div>
        </div>

        {/* Main + Prev + Next */}
        <CaseStudiesCardSection cards={cards} />
      </div>
    </div>
  );
};

export default CaseStudies;
