"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type ServiceKey = "siraaj" | "jadawel" | "iqra";

type ServiceItem = {
  key: ServiceKey;
  title: string;
  subtitle: string;
  comingSoon: boolean;
  description: string;
  href: string;
};

const servicesItems: ServiceItem[] = [
  {
    key: "siraaj",
    title: "Siraaj",
    subtitle: "AI-Powered Enterprise Intelligence",
    comingSoon: false,
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    href: "/services/siraaj",
  },
  {
    key: "jadawel",
    title: "Jadawel",
    subtitle: "Capture, Collaborate, Control Data",
    comingSoon: false,
    description:
      "A collaborative platform designed to manage and control enterprise data efficiently.",
    href: "/services/jadawel",
  },
  {
    key: "iqra",
    title: "Iqra",
    subtitle: "Data Extraction Suite",
    comingSoon: true,
    description:
      "Advanced data extraction tools to streamline document processing and insights.",
    href: "/services/iqra",
  },
];

type Props = {
  defaultActiveKey?: ServiceKey;
};

export default function ServicesDropdown({ defaultActiveKey = "siraaj" }: Props) {
  const [activeKey, setActiveKey] = useState<ServiceKey>(defaultActiveKey);

  const active = useMemo(
    () => servicesItems.find((i) => i.key === activeKey) ?? servicesItems[0],
    [activeKey]
  );

  return (
    <div className="absolute left-1/2 top-full z-50 mt-5 -translate-x-1/2">
      <div className="w-[980px] max-w-[92vw] overflow-hidden rounded-2xl border border-black/5 bg-[#EEF3F8] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
        <div className="grid grid-cols-[420px_1fr]">
          {/* LEFT LIST */}
          <div className="space-y-3 p-5">
            {servicesItems.map((item) => {
              const isActive = item.key === activeKey;

              const row = (
                <div
                  onMouseEnter={() => setActiveKey(item.key)}
                  className={[
                    "rounded-xl px-4 py-3 transition cursor-default",
                    isActive ? "bg-[#E7EEF4]" : "hover:bg-[#EAF1F6]",
                  ].join(" ")}
                >
                  <div className="flex gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-xl border border-black/10 bg-white">
                      {/* أيقونات من فيجما (SVG) */}
                      {item.key === "siraaj" && <SparkIcon />}
                      {item.key !== "siraaj" && <GridIcon />}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <p className="text-lg font-semibold text-[#020618]">
                          {item.title}
                        </p>

                        {item.comingSoon && (
                          <span className="text-sm italic text-black/30">
                            Coming Soon
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-black/40">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              );

              if (item.comingSoon) return <div key={item.key}>{row}</div>;

              return (
                <Link key={item.key} href={item.href} className="block">
                  {row}
                </Link>
              );
            })}
          </div>

          {/* RIGHT PREVIEW */}
          <div className="border-l border-black/10 p-6">
            <div className="h-[220px] rounded-2xl bg-black/20" />
            <p className="mt-5 max-w-[320px] leading-relaxed text-black/55">
              {active.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** ============ SVG ICONS (من فيجما) ============ */

// نفس فكرة الأيقونة المربعة (19x19) اللي أرسلتيها
function SquareOutlineIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 9.5C0.5 5.25736 0.5 3.13604 1.81802 1.81802C3.13604 0.5 5.25736 0.5 9.5 0.5C13.7426 0.5 15.864 0.5 17.182 1.81802C18.5 3.13604 18.5 5.25736 18.5 9.5C18.5 13.7426 18.5 15.864 17.182 17.182C15.864 18.5 13.7426 18.5 9.5 18.5C5.25736 18.5 3.13604 18.5 1.81802 17.182C0.5 15.864 0.5 13.7426 0.5 9.5Z"
        stroke="#020618"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// خطوط الشبكة: عمودي + أفقي (من SVGs اللي أرسلتيها)
function GridIcon() {
  return (
    <div className="relative h-6 w-6">
      <div className="absolute inset-0 flex items-center justify-center">
        <SquareOutlineIcon />
      </div>

      {/* خط عمودي 1px */}
      <svg
        className="absolute left-1/2 top-[2px] -translate-x-1/2"
        width="1"
        height="18"
        viewBox="0 0 1 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 0.5L0.500002 17.5"
          stroke="#404040"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* خط أفقي 18px */}
      <svg
        className="absolute left-[3px] top-1/2 -translate-y-1/2"
        width="18"
        height="1"
        viewBox="0 0 18 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 0.5H0.5"
          stroke="#020618"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// مثال لأيقونة “Siraaj” (بدّليها بالـ SVG الحقيقي حقها من فيجما)
function SparkIcon() {
  return <span className="text-[#020618] text-xl">✳︎</span>;
}
