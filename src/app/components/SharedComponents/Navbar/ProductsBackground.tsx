"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type IndustryKey =
  | "energy"
  | "government"
  | "finance"
  | "telecom"
  | "health"
  | "environment";

type IndustryItem = {
  key: IndustryKey;
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
};

const items: IndustryItem[] = [
  {
    key: "energy",
    title: "Energy, Oil & Gas",
    href: "/industries/energy-oil-gas",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <EnergyIcon />,
  },
  {
    key: "government",
    title: "Government & Public Sector",
    href: "/industries/government-public-sector",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <GovernmentIcon />,
  },
  {
    key: "finance",
    title: "Finance & Investment",
    href: "/industries/finance-investment",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <FinanceIcon />,
  },
  {
    key: "telecom",
    title: "Telecommunications & Technology",
    href: "/industries/telecommunications-technology",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <TelecomIcon />,
  },
  {
    key: "health",
    title: "Health & International Organizations",
    href: "/industries/health-international",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <HealthIcon />,
  },
  {
    key: "environment",
    title: "Environment & Sustainability",
    href: "/industries/environment-sustainability",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <EnvironmentIcon />,
  },
];

type Props = {
  defaultActiveKey?: IndustryKey;
  previewImageSrc?: string; // optional image
};

export default function IndustriesDropdown({
  defaultActiveKey = "energy",
  previewImageSrc,
}: Props) {
  const [activeKey, setActiveKey] = useState<IndustryKey>(defaultActiveKey);

  const active = useMemo(
    () => items.find((i) => i.key === activeKey) ?? items[0],
    [activeKey]
  );

  return (
    <div className="absolute left-1/2 top-full z-50 mt-4 -translate-x-1/2">
      <div className="w-[651px] max-w-[92vw] p-3.5 rounded-md bg-white shadow-md border border-[#E2E8F0]">
        <div className="flex items-start gap-3.5">
          {/* LEFT LIST */}
          <div className="flex-1 inline-flex flex-col justify-start items-start">
            {items.map((item) => {
              const isActive = item.key === activeKey;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={[
                    "self-stretch min-w-32 rounded-sm",
                    "px-3.5 py-1.5",
                    "inline-flex justify-start items-center gap-2",
                    "transition",
                    isActive ? "bg-[#F5F5F5]" : "hover:bg-[#F5F5F5]",
                  ].join(" ")}
                  onMouseEnter={() => setActiveKey(item.key)}
                >
                  {/* ICON BOX */}
                  <div
                    className={[
                      "w-9 h-9 p-[5px] rounded",
                      "bg-[#FAFAFA]",
                      "outline outline-[0.5px] outline-offset-[-0.5px] outline-[#D4D4D4]",
                      "inline-flex items-center justify-center",
                    ].join(" ")}
                  >
                    <div className="w-6 h-6 relative">{item.icon}</div>
                  </div>

                  {/* TEXT */}
                  <div className="flex-1 inline-flex flex-col justify-center items-start gap-0.5">
                    <div className="self-stretch text-[#020618] text-sm font-normal leading-5">
                      {item.title}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* RIGHT PREVIEW */}
          <div className="min-w-32 rounded inline-flex flex-col justify-start items-start gap-2">
            {previewImageSrc ? (
              <img
                className="w-48 h-36 rounded object-cover"
                src={previewImageSrc}
                alt="Industry preview"
              />
            ) : (
              <div className="w-48 h-36 bg-[#C4C4C4] rounded" />
            )}

            <div className="w-48 flex flex-col justify-center items-start gap-2">
              <div className="self-stretch text-[#404040] text-xs font-light leading-4">
                {active.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** ================= ICONS (simple outline like Figma) ================= */

function baseStrokeProps() {
  return {
    stroke: "#404040",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

function EnergyIcon() {
  // lightning
  const p = baseStrokeProps();
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M13 2L4 14h7l-1 8 10-14h-7l0-6Z"
        {...p}
      />
    </svg>
  );
}

function GovernmentIcon() {
  // simple building
  const p = baseStrokeProps();
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 10h16" {...p} />
      <path d="M6 10V20" {...p} />
      <path d="M10 10V20" {...p} />
      <path d="M14 10V20" {...p} />
      <path d="M18 10V20" {...p} />
      <path d="M3 20h18" {...p} />
      <path d="M12 4 4 10h16L12 4Z" {...p} />
    </svg>
  );
}

function FinanceIcon() {
  // credit card
  const p = baseStrokeProps();
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="6" width="16" height="12" rx="2" {...p} />
      <path d="M4 10h16" {...p} />
      <path d="M7 15h5" {...p} />
    </svg>
  );
}

function TelecomIcon() {
  // antenna/waves
  const p = baseStrokeProps();
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="1.6" {...p} />
      <path d="M9 15c1.8-1.8 4.2-1.8 6 0" {...p} />
      <path d="M7 17c3-3 7-3 10 0" {...p} />
      <path d="M12 13.8V21" {...p} />
    </svg>
  );
}

function HealthIcon() {
  // pulse inside square
  const p = baseStrokeProps();
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="5" width="14" height="14" rx="2" {...p} />
      <path d="M7 12h3l1.2-3 2.2 6 1.4-3H17" {...p} />
    </svg>
  );
}

function EnvironmentIcon() {
  // leaf
  const p = baseStrokeProps();
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 20c6-2 8-8 8-14-6 0-12 2-14 8-1 3 1 6 6 6Z" {...p} />
      <path d="M12 20V10" {...p} />
    </svg>
  );
}
