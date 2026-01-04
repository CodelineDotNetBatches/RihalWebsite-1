"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type ServiceKey = "software" | "ml" | "data" | "dtgc" | "training";

type ServiceItem = {
  key: ServiceKey;
  title: string;
  subtitle?: string;
  href?: string; // internal
  externalHref?: string; // external
  description: string;
  icon: React.ReactNode;
  iconBoxBg: string;
  iconBoxBorder: string;
};

const items: ServiceItem[] = [
  {
    key: "software",
    title: "Software Engineering",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    href: "/services/software-engineering",
    iconBoxBg: "bg-[#D2E5F7]",
    iconBoxBorder: "outline-[#A3CDF8]",
    icon: <SoftwareIcon />,
  },
  {
    key: "ml",
    title: "Machine Learning",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    href: "/services/machine-learning",
    iconBoxBg: "bg-white",
    iconBoxBorder: "outline-[#CDBDD2]",
    icon: <MLIcon />,
  },
  {
    key: "data",
    title: "Data Engineering",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    href: "/services/data-engineering",
    iconBoxBg: "bg-white",
    iconBoxBorder: "outline-[#E9CCB0]",
    icon: <DataIcon />,
  },
  {
    key: "dtgc",
    title: "Digital Transformation & Governance Consulting",
    subtitle: "Transformation Pioneers",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    externalHref: "https://example.com",
    iconBoxBg: "bg-white",
    iconBoxBorder: "outline-[#E2E8F0]",
    icon: <MainIconSquare />,
  },
  {
    key: "training",
    title: "Technical Training",
    subtitle: "Codeline",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    externalHref: "https://example.com",
    iconBoxBg: "bg-white",
    iconBoxBorder: "outline-[#E2E8F0]",
    icon: <MainIconBook />,
  },
];

type Props = {
  defaultActiveKey?: ServiceKey;
  previewImageSrc?: string; // حطي صورة عندك في /public
};

export default function ServicesDropdown({
  defaultActiveKey = "software",
  previewImageSrc = "/services-preview.jpg",
}: Props) {
  const [activeKey, setActiveKey] = useState<ServiceKey>(defaultActiveKey);

  const active = useMemo(
    () => items.find((i) => i.key === activeKey) ?? items[0],
    [activeKey]
  );

  return (
    <div className="absolute left-1/2 top-full z-50 mt-4 -translate-x-1/2">
      <div className="w-[646px] max-w-[92vw] p-3.5 rounded-md bg-white shadow-md border border-[#E2E8F0]">
        <div className="flex items-start gap-3.5">
          {/* LEFT LIST */}
          <div className="flex-1 inline-flex flex-col justify-start items-start">
            {items.map((item) => {
              const isActive = item.key === activeKey;

              const row = (
                <div
                  onMouseEnter={() => setActiveKey(item.key)}
                  className={[
                    "self-stretch min-w-32 p-1 rounded",
                    "inline-flex justify-start items-center gap-2",
                    "cursor-default transition",
                    isActive ? "bg-[#F5F5F5]" : "hover:bg-[#F5F5F5]",
                  ].join(" ")}
                >
                  {/* ICON BOX */}
                  <div
                    className={[
                      "w-9 h-9 p-[5px] rounded",
                      "outline outline-[0.5px] outline-offset-[-0.5px]",
                      item.iconBoxBorder,
                      item.iconBoxBg,
                      "inline-flex items-center justify-center",
                    ].join(" ")}
                  >
                    <div className="w-6 h-6 relative">{item.icon}</div>
                  </div>

                  {/* TEXT */}
                  <div className="flex-1 min-w-0 inline-flex flex-col justify-center items-start gap-0.5">
                    <div className="self-stretch text-[#020618] text-sm font-normal leading-5">
                      {item.title}
                    </div>

                    {item.subtitle && (
                      <div className="inline-flex justify-start items-center gap-1.5">
                        <div className="text-[#A1A1A1] text-xs font-normal leading-4">
                          {item.subtitle}
                        </div>
                        <ExternalMiniIcon />
                      </div>
                    )}
                  </div>
                </div>
              );

              // External
              if (item.externalHref) {
                return (
                  <a
                    key={item.key}
                    href={item.externalHref}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full"
                  >
                    {row}
                  </a>
                );
              }

              // Internal
              if (item.href) {
                return (
                  <Link key={item.key} href={item.href} className="block w-full">
                    {row}
                  </Link>
                );
              }

              return (
                <div key={item.key} className="w-full">
                  {row}
                </div>
              );
            })}
          </div>

          {/* RIGHT PREVIEW */}
          <div className="min-w-32 rounded inline-flex flex-col justify-start items-start gap-2">
            <img
              className="w-48 h-36 rounded object-cover"
              src={previewImageSrc}
              alt="Service preview"
            />

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

/** ================= SVG ICONS ================= */

function SoftwareIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18.5 10.3V14.7" stroke="#033D7C" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M9.2 10.3V14.7" stroke="#033D7C" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M13.4 9V15" stroke="#033D7C" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="2" stroke="#033D7C" strokeWidth="1.2" />
    </svg>
  );
}

function MLIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5.5" y="5.5" width="13" height="13" rx="2" stroke="#5D3FD3" strokeWidth="1.2" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="6" width="12" height="4" rx="1" stroke="#8A4A14" strokeWidth="1.2" />
      <rect x="6" y="10" width="12" height="6" rx="1" stroke="#8A4A14" strokeWidth="1.2" />
      <rect x="6" y="16" width="12" height="2" rx="1" stroke="#8A4A14" strokeWidth="1.2" />
    </svg>
  );
}

function MainIconSquare() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5.5" y="5.5" width="13" height="13" rx="2" stroke="#0DA698" strokeWidth="1.2" />
    </svg>
  );
}

function MainIconBook() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="7" width="12" height="10" rx="2" stroke="#0DA698" strokeWidth="1.2" />
      <path d="M12 7v10" stroke="#0DA698" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function ExternalMiniIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2.5" y="2.5" width="11" height="11" rx="2" stroke="#A1A1A1" strokeWidth="1" />
      <path d="M9 3.5H12.5V7" stroke="#A1A1A1" strokeWidth="1" strokeLinecap="round" />
      <path d="M12.2 3.8L8.4 7.6" stroke="#A1A1A1" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
