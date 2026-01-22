"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type ResourceKey = "news" | "blog" | "events" | "presskit";

type Item = {
  key: ResourceKey;
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
};

const items: Item[] = [
  {
    key: "news",
    title: "News",
    href: "/resources/news",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <NewsIcon />,
  },
  {
    key: "blog",
    title: "Blog",
    href: "/resources/blog",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <BlogIcon />,
  },
  {
    key: "events",
    title: "Events",
    href: "/resources/events",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <EventsIcon />,
  },
  {
    key: "presskit",
    title: "Presskit",
    href: "/resources/presskit",
    description:
      "Custom software solutions tailored to your business needs, from web and mobile apps to enterprise systems.",
    icon: <PresskitIcon />,
  },
];

type Props = {
  defaultActiveKey?: ResourceKey;
  previewImageSrc?: string; // اختياري
};

export default function ResourcesDropdown({
  defaultActiveKey = "news",
  previewImageSrc,
}: Props) {
  const [activeKey, setActiveKey] = useState<ResourceKey>(defaultActiveKey);

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
                <Link key={item.key} href={item.href} className="block w-full">
                  <div
                    onMouseEnter={() => setActiveKey(item.key)}
                    className={[
                      "self-stretch min-w-32 px-3.5 py-1.5 rounded-sm",
                      "inline-flex justify-start items-center gap-2",
                      "transition cursor-default",
                      isActive ? "bg-[#F5F5F5]" : "hover:bg-[#F5F5F5]",
                    ].join(" ")}
                  >
                    {/* ICON BOX */}
                    <div
                      className={[
                        "w-9 h-9 p-[5px] rounded",
                        "outline outline-[0.5px] outline-offset-[-0.5px]",
                        "outline-[#D4D4D4] bg-white",
                        "inline-flex items-center justify-center",
                        isActive ? "bg-[#FAFAFA]" : "",
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
                alt="Resources preview"
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

/** ================= SVG ICONS (Figma-style outline) ================= */

function NewsIcon() {
  // TV/news icon style
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="4"
        y="7"
        width="16"
        height="11"
        rx="2"
        stroke="#404040"
        strokeWidth="1.2"
      />
      <path
        d="M9.2 5.5h5.6"
        stroke="#404040"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M7 5.5l2.2 2.0"
        stroke="#404040"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M17 5.5l-2.2 2.0"
        stroke="#404040"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BlogIcon() {
  // document icon style
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="6"
        y="4"
        width="12"
        height="16"
        rx="2"
        stroke="#404040"
        strokeWidth="1.2"
      />
      <path
        d="M9 14h6"
        stroke="#404040"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M9 11h6"
        stroke="#404040"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EventsIcon() {
  // calendar icon style
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="5"
        y="6"
        width="14"
        height="14"
        rx="2"
        stroke="#404040"
        strokeWidth="1.2"
      />
      <path
        d="M5 10h14"
        stroke="#404040"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M9 4.5v3"
        stroke="#404040"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M15 4.5v3"
        stroke="#404040"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PresskitIcon() {
  // presskit/list icon style
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="4.5"
        y="6.5"
        width="15"
        height="11"
        rx="2"
        stroke="#404040"
        strokeWidth="1.2"
      />
      <path
        d="M8 10h8"
        stroke="#404040"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M8 13h8"
        stroke="#404040"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
