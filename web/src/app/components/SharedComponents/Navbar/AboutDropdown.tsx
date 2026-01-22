"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type AboutKey = "who" | "management" | "awards" | "team" | "careers";

type AboutItem = {
  key: AboutKey;
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
};

const items: AboutItem[] = [
  {
    key: "who",
    title: "Who we are",
    href: "/about/who-we-are",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <GlobeIcon />,
  },
  {
    key: "management",
    title: "Management",
    href: "/about/management",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <PeopleIcon />,
  },
  {
    key: "awards",
    title: "Awards",
    href: "/about/awards",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <BadgeIcon />,
  },
  {
    key: "team",
    title: "Team & Culture",
    href: "/about/team-culture",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <UsersIcon />,
  },
  {
    key: "careers",
    title: "Careers",
    href: "/about/careers",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <BriefcaseIcon />,
  },
];

type Props = {
  defaultActiveKey?: AboutKey;
  previewImageSrc?: string;
};

export default function AboutDropdown({
  defaultActiveKey = "who",
  previewImageSrc,
}: Props) {
  const [activeKey, setActiveKey] = useState<AboutKey>(defaultActiveKey);

  const active = useMemo(
    () => items.find((i) => i.key === activeKey) ?? items[0],
    [activeKey]
  );

  return (
    <div className="absolute left-1/2 top-full z-50 mt-4 -translate-x-1/2">
      <div className="w-[651px] max-w-[92vw] p-3.5 rounded-md bg-white shadow-md border border-[#E2E8F0]">
        <div className="flex items-start gap-3.5">
          {/* LEFT LIST */}
          <div className="flex-1 flex flex-col justify-start items-start">
            {items.map((item) => {
              const isActive = item.key === activeKey;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={[
                    "self-stretch min-w-32 px-3.5 py-1.5 rounded-sm",
                    "inline-flex justify-start items-center gap-2",
                    "transition",
                    isActive ? "bg-[#F5F5F5]" : "hover:bg-[#F5F5F5]",
                  ].join(" ")}
                  onMouseEnter={() => setActiveKey(item.key)}
                >
                  {/* ICON BOX */}
                  <div className="w-9 h-9 p-[5px] bg-[#FAFAFA] rounded outline outline-[0.5px] outline-offset-[-0.5px] outline-[#D4D4D4] inline-flex items-center justify-center">
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
                alt="About preview"
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

/** ================= SVG ICONS (شكل قريب من فيجما: outline) ================= */

function GlobeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="#020618"
        strokeWidth="1.2"
      />
      <path
        d="M4.5 12h15"
        stroke="#020618"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M12 4c2.2 2.2 3.5 5 3.5 8s-1.3 5.8-3.5 8c-2.2-2.2-3.5-5-3.5-8s1.3-5.8 3.5-8z"
        stroke="#020618"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="9" r="3" stroke="#020618" strokeWidth="1.2" />
      <path
        d="M4.5 19c.8-3 3-4.5 4.5-4.5S12.7 16 13.5 19"
        stroke="#020618"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M14.5 11.5c1.8.2 3.5 1.6 4 3.8"
        stroke="#020618"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="15.5" cy="9.5" r="2.2" stroke="#020618" strokeWidth="1.2" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="9" r="4" stroke="#020618" strokeWidth="1.2" />
      <path
        d="M10 13.5 9 20l3-2 3 2-1-6.5"
        stroke="#020618"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="10" r="3" stroke="#020618" strokeWidth="1.2" />
      <circle cx="16.5" cy="10.5" r="2.4" stroke="#020618" strokeWidth="1.2" />
      <path
        d="M4.5 19c.8-3 3-4.5 4.5-4.5S12.7 16 13.5 19"
        stroke="#020618"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M14.2 19c.4-1.8 1.6-3 3.3-3.4 1.3-.3 2.4 0 3 1"
        stroke="#020618"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="5"
        y="8"
        width="14"
        height="11"
        rx="2"
        stroke="#020618"
        strokeWidth="1.2"
      />
      <path
        d="M9 8V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"
        stroke="#020618"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M5 12h14"
        stroke="#020618"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <rect x="11" y="11" width="2" height="2" rx="0.4" fill="#020618" />
    </svg>
  );
}
