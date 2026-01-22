

import Image from "next/image";
import type { FeaturedNewsItem } from "./featuredNewsData";

function tagClasses(tag: FeaturedNewsItem["tag"]) {
  switch (tag) {
    case "Artificial Intelligence":
      return "bg-[#E7E2FF] text-[#6C63FF]";
    case "UX Design":
      return "bg-[#DDF7F3] text-[#16A394]";
    case "Software Development":
      return "bg-[#F7E1E1] text-[#B74B4B]";
    default:
      return "bg-gray-200 text-gray-700";
  }
}

export default function FeaturedNewsCard({ item }: { item: FeaturedNewsItem }) {
  return (
    <article
      className="
        group w-full max-w-[370px] overflow-hidden rounded-[18px] bg-white
        shadow-[0_18px_50px_rgba(0,0,0,0.12)]
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,0,0,0.16)]
      "
    >
      {/* Cover */}
      <div className="relative h-[210px] w-full overflow-hidden">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Body */}
      <div className="px-6 pb-6 pt-5">
        {/* Tag + Date */}
        <div className="flex items-center justify-between gap-3">
          <span
            className={[
              "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium",
              tagClasses(item.tag),
            ].join(" ")}
          >
            {item.tag}
          </span>

          <div className="flex items-center gap-2 text-sm text-[#4B5563]">
            <Image
              src="/featured-icons/calendar.svg"
              alt="calendar"
              width={18}
              height={18}
            />
            <span>{item.date}</span>
          </div>
        </div>

        <h3 className="mt-5 text-[22px] font-semibold leading-[1.25] text-[#0F172A]">
          {item.title}
        </h3>

        <p className="mt-3 text-[15px] leading-[1.75] text-[#475569]">
          {item.description}
        </p>

        {/* Read more (arrow-green) */}
        <div className="mt-6 flex justify-end">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#16A394]"
          >
            Read More
            <Image
              src="/featured-icons/arrow-green.svg"
              alt="arrow"
              width={18}
              height={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
