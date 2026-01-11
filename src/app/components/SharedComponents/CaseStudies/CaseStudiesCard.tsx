import React from "react";
import Image from "next/image";
import type { CaseStudyCardData } from "./CaseStudies";

import Image2 from "../../../../../public/images/HomeComponenets/CaseStudiesCardImage/Vector.png";
import Image3 from "../../../../../public/images/HomeComponenets/CaseStudiesCardImage/Vector (1).png";
import Image4 from "../../../../../public/images/HomeComponenets/CaseStudiesCardImage/Vector (2).png";
import Image5 from "../../../../../public/images/HomeComponenets/CaseStudiesCardImage/Vector (3).png";

import arrowLeft from "../../../../../public/images/HomeComponenets/CaseStudiesCardImage/arrow-down-left.svg";
import arrowRight from "../../../../../public/images/HomeComponenets/CaseStudiesCardImage/arrow-down-right.svg";

import bgShine1 from "../../../../../public/images/HomeComponenets/CaseStudiesCardImage/Ellipse 21841.svg";
import bgShine2 from "../../../../../public/images/HomeComponenets/CaseStudiesCardImage/Ellipse 21842.svg";

type Direction = "prev" | "next";
type Phase = "idle" | "collapse" | "move";

type Props = {
  data: CaseStudyCardData;
  prevCard: CaseStudyCardData;
  nextCard: CaseStudyCardData;

  incomingCard: CaseStudyCardData;
  direction: Direction;
  phase: Phase;

  durationMs: number;
  collapseMs: number;
  moveMs: number;

  onPrev: () => void;
  onNext: () => void;
};

const STAGE = "relative w-[1504px] h-[808px] overflow-hidden";

// main position
const MAIN_POS = "top-[110px] left-[476px]";

// preview positions
const PREVIEW_LEFT_POS = "top-[235px] left-[120px]";
const PREVIEW_RIGHT_POS = "top-[235px] left-[1100px]";

// preview look
const PREVIEW_LEFT_TF = "rotate-[-37.76deg] scale-[0.92]";
const PREVIEW_RIGHT_TF = "rotate-[37.76deg] scale-[0.92]";

// movement
const TO_LEFT = "translate-x-[-355px] translate-y-[125px] rotate-[-37.76deg] scale-[0.92]";
const TO_RIGHT = "translate-x-[624px] translate-y-[125px] rotate-[37.76deg] scale-[0.92]";

type CardVariant = "main" | "preview";

const CardShell: React.FC<{
  card: CaseStudyCardData;
  variant: CardVariant;
  className?: string;
}> = ({ card, variant, className }) => {
  const isPreview = variant === "preview";

  return (
    <div
      className={[
        
        "absolute transform-gpu will-change-transform origin-center",
        "rounded-[20px] overflow-hidden",
        "bg-[#0B9E8C]",
        isPreview ? "w-[275.76px] h-[329.35px]" : "w-[553px] h-[330px]",
        isPreview ? "z-[20]" : "z-[60]",
        className ?? "",
      ].join(" ")}
    >
      <div
        className={[
          "absolute z-0 rounded-tr-[20.32px] rounded-br-[20.32px] bg-[#0B9E8C]/60 blur-[100px]",
          isPreview
            ? "w-[140px] h-[340px] top-[-6px] left-[145px]"
            : "w-[267px] h-[332px] top-[-2px] left-[286px]",
        ].join(" ")}
      />

      <div className="absolute z-10 inset-0 opacity-60 bg-[linear-gradient(135deg,rgba(239,83,80,0.55)_0%,rgba(229,90,86,0.55)_20%,rgba(193,110,104,0.55)_40%,rgba(140,143,132,0.55)_60%,rgba(67,188,171,0.55)_80%,rgba(0,230,208,0.55)_100%)]" />

      {!isPreview && (
        <Image
          src={card.mainImage}
          alt="case-study"
          className="absolute z-20 w-[267px] h-[332px] top-[-2px] left-[286px] rounded-tr-[20.32px] rounded-br-[20.32px] object-cover"
        />
      )}

      <div className="absolute z-30 inset-0 rounded-[20px] bg-[#054039]/[0.57] border border-white/20" />

      {/* darker + blur for previews */}
      {isPreview && (
        <>
          <div className="absolute inset-0 z-[35] bg-[#0B1A2B]/60" />
          <div className="absolute inset-0 z-[36] backdrop-blur-[2px]" />
        </>
      )}

      <Image
        src={bgShine1}
        alt=""
        className={[
          "absolute z-20 blur-[240px]",
          isPreview ? "opacity-15" : "opacity-40",
          isPreview
            ? "w-[140px] h-[140px] top-[-20px] left-[-20px]"
            : "w-[183px] h-[191px] top-[-21px] left-[-13px]",
        ].join(" ")}
      />
      <Image
        src={bgShine2}
        alt=""
        className={[
          "absolute z-20 blur-[200px]",
          isPreview ? "opacity-12" : "opacity-30",
          isPreview
            ? "w-[150px] h-[150px] top-[0px] left-[70px]"
            : "w-[193px] h-[193px] top-[11px] left-[133px]",
        ].join(" ")}
      />

      <div className="absolute z-40 inset-0">
        <div className={["absolute top-[18px] right-[18px]", isPreview ? "w-[34px] h-[22px]" : "w-[48px] h-[30px]"].join(" ")}>
          <Image src={card.companyLogo} alt="company" className="w-full h-full object-contain" />
        </div>

        <div className={["absolute left-[24px] text-left", isPreview ? "top-[68px] w-[200px]" : "top-[120px] w-[274px]"].join(" ")}>
          <div className="font-['Rihal'] text-[14px] leading-[16.25px] text-[#FFC300]">{card.industry}</div>
          <div className="mt-1 font-['Rihal'] font-extralight text-[14px] leading-[16.25px] text-[#FFC300]/70">{card.year}</div>
          <div className={["mt-2 font-['Rihal'] text-[#F4FFFE]", isPreview ? "text-[18px] leading-[26px]" : "text-[18.29px] leading-[28.44px]"].join(" ")}>
            {card.description}
          </div>
        </div>

        {!isPreview && (
          <div className="absolute left-[27px] top-[260px] w-[145px] h-[36px] rounded-[50px] bg-[#F4FFFE]/90 flex items-center justify-center">
            <p className="font-['Rihal'] text-sm font-medium text-[#0B9E8C]">View Case Study</p>
          </div>
        )}
      </div>
    </div>
  );
};

const CaseStudiesCard: React.FC<Props> = ({
  data,
  prevCard,
  nextCard,
  incomingCard,
  direction,
  phase,
  collapseMs,
  moveMs,
  onPrev,
  onNext,
}) => {
  const isAnimating = phase !== "idle";

  const outgoingTo = direction === "next" ? TO_LEFT : TO_RIGHT;
  const incomingFrom = direction === "next" ? TO_RIGHT : TO_LEFT;

  const hideLeftPreview = isAnimating && direction === "prev";
  const hideRightPreview = isAnimating && direction === "next";

  // transitions separated (collapse then move)
  const collapseTransition = `transition-[transform,opacity] duration-[${collapseMs}ms] ease-out`;
  const moveTransition = `transition-[transform,opacity] duration-[${moveMs}ms] ease-in-out`;

  // OUTGOING: center -> collapse -> move to preview
  const outgoingClass =
  phase === "collapse"
    ? `${collapseTransition} ${outgoingTo} opacity-100`
    : phase === "move"
      ? `${outgoingTo} opacity-100`
      : "opacity-100";

  // INCOMING: from preview (collapsed) -> expand to center
const incomingClass =
  phase === "idle"
    ? "opacity-0 pointer-events-none"
    : phase === "collapse"
      ? `${incomingFrom} opacity-100 pointer-events-none`
      : `${moveTransition} opacity-100 pointer-events-none`;

  return (
    <div className={STAGE}>
      {/* background glow */}
      <div className="absolute left-[55px] top-[321px] w-[1352px] h-[262px] blur-[50px] bg-[linear-gradient(180deg,#0B1A2B_0%,#0B323D_97.45%,#0B444A_95.55%,#0B5A5A_93.18%,#0B716B_90.73%,#0B8C7F_87.91%,#0B9E8C_86%,#00E6D0_100%)] z-[5]" />

      {/* previews */}
      <div className="absolute inset-0 z-[20]">
        <CardShell
          card={prevCard}
          variant="preview"
          className={[
            PREVIEW_LEFT_POS,
            PREVIEW_LEFT_TF,
            hideLeftPreview ? "opacity-0" : "opacity-100",
            `transition-opacity duration-[${collapseMs + moveMs}ms] ease-in-out`,
          ].join(" ")}
        />
        <CardShell
          card={nextCard}
          variant="preview"
          className={[
            PREVIEW_RIGHT_POS,
            PREVIEW_RIGHT_TF,
            hideRightPreview ? "opacity-0" : "opacity-100",
            `transition-opacity duration-[${collapseMs + moveMs}ms] ease-in-out`,
          ].join(" ")}
        />
      </div>

      {/*arcs moved down + in front of previews */}
      <div className="absolute inset-0 z-[30] pointer-events-none">
        <div className="absolute left-0 top-[255px] w-[752px] h-[654px]">
          <Image src={Image2} alt="" className="absolute inset-0 w-full h-full object-contain" />
          <Image src={Image4} alt="" className="absolute inset-0 top-[10px] w-full h-full object-contain" />
        </div>
        <div className="absolute left-[752px] top-[255px] w-[752px] h-[654px]">
          <Image src={Image3} alt="" className="absolute inset-0 w-full h-full object-contain" />
          <Image src={Image5} alt="" className="absolute inset-0 top-[10px] w-full h-full object-contain" />
        </div>
      </div>

      {/* buttons */}
      <button
        type="button"
        onClick={onPrev}
        disabled={isAnimating}
        className="absolute z-[80] w-[44px] h-[44px] top-[285px] left-[405px] rounded-full p-[6px] bg-[#F4FFFE] border border-[#051323] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Image src={arrowLeft} alt="prev" className="absolute inset-0 w-full h-full" />
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={isAnimating}
        className="absolute z-[80] w-[44px] h-[44px] top-[285px] left-[1058px] rounded-full p-[6px] bg-[#F4FFFE] border border-[#051323] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Image src={arrowRight} alt="next" className="absolute inset-0 w-full h-full" />
      </button>

      {/* outgoing main */}
      <CardShell card={data} variant="main" className={["z-[60]", MAIN_POS, outgoingClass].join(" ")} />

      {/* incoming main */}
      <CardShell card={incomingCard} variant="main" className={["z-[70]", MAIN_POS, incomingClass].join(" ")} />
    </div>
  );
};

export default CaseStudiesCard;
