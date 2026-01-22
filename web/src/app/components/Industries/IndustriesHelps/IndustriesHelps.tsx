"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";

import ArrowUpRight from "./../../../../../public/images/Industry/arrow-up-right.svg";
import Plus from "./../../../../../public/images/Industry/plus.svg";
import Minus from "./../../../../../public/images/Industry/minus.svg";
import BG1 from "./../../../../../public/images/Industry/Ellipse 611.svg";

type HelpCard = {
  id: number;
  title: React.ReactNode;
  description?: string;
  showViewService?: boolean;
  glow?: boolean;
};

const ACTIVE_W = 305;
const COLLAPSED_W = 216;

const IndutriesHelps = () => {
  const cards: HelpCard[] = useMemo(
    () => [
      {
        id: 1,
        title: "Insightful Dashboards",
        description:
          "Optimizing business operations and transforming customer experience with data and AI",
        showViewService: true,
        glow: true,
      },
      {
        id: 2,
        title: "Custom Built Systems",
        description:
          "Enhancing digital services and decision-making using AI-powered analytics",
        showViewService: true,
        glow: true,
      },
      {
        id: 3,
        title: " Advanced Analytics",
        description:
          "Driving efficiency and innovation through data-driven strategies and solutions",
        showViewService: true,
        glow: true,
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative left-[117px] top-[98px] w-[1050.41px] flex flex-col gap-[50px] justify-center items-center">
      {/* Title */}
      <div className="w-[1027px] h-[258px] text-sky-950 text-[48px] font-medium font-['Inter'] leading-[64.28px]">
        <div className="flex flex-col w-full h-full gap-[111px]">
          <p>
            Rihal helps the oil, gas and energy sector turn complex data into
            real outcomes.
            <br />
            We build systems and insights that power operations, sustainability,
            and growth.
          </p>
        </div>
      </div>

      {/* Cards Row */}
      <div className="w-[817px] h-[411px] flex gap-[40px]">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={card.id}
              className={[
                "relative h-[411px] rounded-[11.6216px] overflow-hidden",
                "transition-[width] duration-500 ease-in-out",
              ].join(" ")}
              style={{ width: isActive ? `${ACTIVE_W}px` : `${COLLAPSED_W}px` }}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-[#0B1A2B] rounded-[11.6216px]" />
              <div className="absolute inset-0 rounded-[11.62px] border border-[0.97px] border-[#00E6D0]/[0.34]" />

              {/* Glow / Blob only for active card */}
              {isActive && card.glow && (
                <>
                  <div className="absolute top-[87.7427px] left-[148.7314px] w-[178.9924px] h-[174.5774px] ">
                    <Image
                      src={BG1}
                      alt="blob1"
                      width={179}
                      height={175}
                      className="blur-3xl"
                    />
                  </div>
                  <div className="absolute top-[116.6566px] left-[128.7773px] w-[147.6402px] h-[143.9986px] rounded-full bg-[#0B9E8C] blur-[189.82px] pointer-events-none" />
                </>
              )}

              {/* Content */}
              <div
                className={[
                  "absolute top-[48px] left-[27px] w-[211px] flex flex-col gap-[8px]",
                  "transition-all duration-500 ease-in-out",
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-100 translate-x-0",
                ].join(" ")}
              >
                <div className="h-[66px] flex items-center">
                  <span className="font-['Rihal'] font-semibold text-[23.2432px] leading-[30.9909px] text-[#F4FFFE]">
                    {card.title}
                  </span>
                </div>

                {/* Description */}
                {isActive && card.description && (
                  <p className="font-['Rihal'] font-normal text-[15.4955px] leading-[23.2432px] text-[#F4FFFE]">
                    {card.description}
                  </p>
                )}
              </div>

              {/* Shine */}
              <div className="absolute top-[-14px] left-[117.95px] w-[462.92px] h-[438.06px] rounded-[11.62px] bg-transparent" />
              <div className="absolute top-[118px] left-[232.51px] w-[103.69px] h-[112.55px] bg-[#00E6D0] blur-[106.92px] mix-blend-plus-lighter " />
              <div className="absolute top-[151.56px] left-[318.6504px] w-[115.3987px] h-[122.3395px] bg-[#00E6D0] blur-[92.1px] mix-blend-plus-lighter " />

              {/* View Service button 1 */}
              {isActive && card.showViewService && (
                <button
                  type="button"
                  className="absolute left-[11px] top-[290px] flex items-center gap-[6px] h-[36px] rounded-[8px] px-[16px] py-[8px] bg-[#0B9E8C]/0"
                >
                  <span className="font-sans font-medium text-[14px] leading-[20px] text-[#00E6D0]">
                    View Service
                  </span>
                  <Image
                    src={ArrowUpRight}
                    alt="arrow-up-right"
                    className="w-[20px] h-[20px]"
                  />
                </button>
              )}

              {/* Plus / Minus button */}
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={[
                  "absolute w-[40px] h-[40px] flex items-center justify-center gap-[10px] rounded-full",
                  "bg-[#0B9E8C] text-[#F4FFFE]",
                  "transition-transform duration-300 hover:scale-110",
                ].join(" ")}
                style={{
                  top: isActive ? "349px" : "349.4127px",
                  left: isActive ? "246.7119px" : "160.4131px",
                }}
                aria-label={isActive ? "Collapse card" : "Expand card"}
              >
                <Image
                  src={isActive ? Minus : Plus}
                  alt={isActive ? "minus" : "plus"}
                  className="w-[20px] h-[20px]"
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndutriesHelps;
