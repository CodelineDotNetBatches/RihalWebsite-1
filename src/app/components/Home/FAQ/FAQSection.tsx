"use client";

import { useState } from "react";
import { faqData } from "./FaqData";
import FAQItem from "./FAQItem";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id ?? null);

  return (
    <section className="relative">
  <div
    className="relative bg-gradient-to-b from-[#041427] to-[#020B16] rounded-t-[48px] pt-24 pb-28 "
  >
        {/* Title */}
        <div className="text-center">
          <h2 className="text-white text-[34px] md:text-[48px] font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-[820px] text-white/80 text-[15px] md:text-[18px] leading-[1.7]">
            Get answers to common questions about our software engineering services
            <br className="hidden md:block" />
            and development process
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-12 md:mt-14 flex max-w-[980px] flex-col gap-6">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
