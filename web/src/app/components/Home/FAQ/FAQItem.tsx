"use client";

import Image from "next/image";
import type { FAQItemType } from "./FaqData";

type Props = {
  item: FAQItemType;
  isOpen: boolean;
  onToggle: () => void;
};

function ShineLeftDecor() {
  return (
    // ✅ هذا يمثل "Mask group" (قص داخل الكرت)
    <div className="pointer-events-none absolute inset-y-0 left-0 w-[260px] overflow-hidden">
      {/* ✅ صندوق الشاين الرئيسي (w-96 h-96) لكن مزاح لليسار عشان يطلع "نص دائرة" */}
      <div className="absolute -left-[210px] top-1/2 -translate-y-1/2 w-96 h-96">
        {/* =========================
            1) SVG Ellipses (shine)
           ========================= */}
        <Image
          src="/faq-icons/Ellipse611.svg"
          alt=""
          width={127}
          height={123}
          className="absolute left-[134px] top-[74px] opacity-100"
          priority
        />

        <Image
          src="/faq-icons/Ellipse612.svg"
          alt=""
          width={105}
          height={102}
          className="absolute left-[150px] top-[86px] opacity-95"
          priority
        />
        <Image
          src="/faq-icons/Ellipse613.svg"
          alt=""
          width={105}
          height={102}
          className="absolute left-[146px] top-[92px] opacity-90"
          priority
        />
        <Image
          src="/faq-icons/Ellipse614.svg"
          alt=""
          width={105}
          height={102}
          className="absolute left-[156px] top-[98px] opacity-85"
          priority
        />
        <Image
          src="/faq-icons/Ellipse615.svg"
          alt=""
          width={105}
          height={102}
          className="absolute left-[142px] top-[104px] opacity-80"
          priority
        />
        <Image
          src="/faq-icons/Ellipse616.svg"
          alt=""
          width={105}
          height={102}
          className="absolute left-[160px] top-[110px] opacity-75"
          priority
        />
        <Image
          src="/faq-icons/Ellipse617.svg"
          alt=""
          width={105}
          height={102}
          className="absolute left-[152px] top-[116px] opacity-70"
          priority
        />

        {/* =========================
            2) SVG Ellipses (light)
           ========================= */}
        <Image
          src="/faq-icons/Ellipse646.svg"
          alt=""
          width={182}
          height={197}
          className="absolute left-[105px] top-[60px] opacity-55"
          priority
        />
        <Image
          src="/faq-icons/Ellipse645.svg"
          alt=""
          width={122}
          height={133}
          className="absolute left-[132px] top-[88px] opacity-70"
          priority
        />
        <Image
          src="/faq-icons/Ellipse644.svg"
          alt=""
          width={104}
          height={112}
          className="absolute left-[162px] top-[112px] opacity-75"
          priority
        />
        <Image
          src="/faq-icons/Ellipse643.svg"
          alt=""
          width={102}
          height={112}
          className="absolute left-[120px] top-[124px] opacity-70"
          priority
        />
        <Image
          src="/faq-icons/Ellipse642.svg"
          alt=""
          width={91}
          height={100}
          className="absolute left-[150px] top-[138px] opacity-70"
          priority
        />
        <Image
          src="/faq-icons/Ellipse641.svg"
          alt=""
          width={82}
          height={86}
          className="absolute left-[132px] top-[150px] opacity-70"
          priority
        />
        <Image
          src="/faq-icons/Ellipse647.svg"
          alt=""
          width={74}
          height={80}
          className="absolute left-[176px] top-[168px] opacity-70"
          priority
        />

        {/* =========================
            3) Teal blur blobs (لون #0B9E8C)
            (هذه اللي آخر الكود عندك)
           ========================= */}
        <div className="absolute left-[134.06px] top-[73.49px] w-32 h-32 rounded-full bg-[#0B9E8C]/85 blur-[94.91px]" />
        <div className="absolute left-[111.79px] top-[84.49px] w-28 h-24 rounded-full bg-[#0B9E8C] blur-[94.91px]" />
        <div className="absolute left-[205.03px] top-[46.28px] w-28 h-24 rounded-full bg-[#0B9E8C] blur-[94.91px]" />
        <div className="absolute left-[78.12px] top-[219.82px] w-28 h-24 rounded-full bg-[#0B9E8C] blur-[94.91px]" />

        <div className="absolute left-[217.78px] top-[171.27px] w-20 h-20 bg-[#0B9E8C] blur-2xl" />
        <div className="absolute left-[260.84px] top-[125.26px] w-24 h-24 bg-[#0B9E8C] blur-3xl" />
        
        <div className="absolute left-[195.63px] top-[206.41px] w-24 h-28 bg-[#0B9E8C] blur-2xl" />
        <div className="absolute left-[244.06px] top-[193.67px] w-24 h-28 bg-[#0B9E8C] blur-2xl" />

       <div className="absolute left-[262.06px] top-[200.34px] w-32 h-32 bg-[#0B9E8C]/90 blur-2xl" />
        <div className="absolute left-[137.18px] top-[22.67px] w-44 h-48 bg-[#0B9E8C]/70 blur-[96.85px]" />
        <div className="absolute left-[175.72px] top-[121.02px] w-20 h-20 bg-[#0B9E8C] blur-[53.46px]" />
      </div>
    </div>
  );
}

export default function FAQItem({ item, isOpen, onToggle }: Props) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[18px] border transition-all duration-300",
        isOpen
          ? "border-white/25 shadow-[0_18px_70px_rgba(0,0,0,0.35)]"
          : "border-white/20 bg-white/[0.02]",
      ].join(" ")}
    >
      {/* ✅ OPEN BACKGROUND + LEFT SHINE */}
      {isOpen && (
        <>
          {/* خلفية الكرت */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0E3E43] via-[#0A2E37] to-[#081B2A]" />

          {/* الشاين (نص دائرة داخل الكرت) */}
          <ShineLeftDecor />
        </>
      )}

      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
       className="relative z-10 flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"

      >
        <span className="text-[18px] font-semibold text-white md:text-[20px]">
          {item.question}
        </span>

        <span className="shrink-0">
          <Image
            src="/faq-icons/chevron-down.svg"
            alt="toggle"
            width={22}
            height={22}
            className={[
              "transition-transform duration-300",
              isOpen ? "rotate-180" : "rotate-0",
            ].join(" ")}
          />
        </span>
      </button>

      {/* Body */}
      <div
        className={[
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="relative z-10 px-6 pb-6 text-[14px] leading-[1.7] text-white/80 md:text-[15px]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}
