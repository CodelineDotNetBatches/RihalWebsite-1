"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FeaturedNewsCard from "./FeaturedNewsCard";
import type { FeaturedNewsItem } from "./featuredNewsData";

export default function FeaturedNewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const [items, setItems] = useState<FeaturedNewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const CARD_WIDTH = 370;
  const GAP = 24;
  const STEP = CARD_WIDTH + GAP;

  // ✅ Fetch from Mock API: /api/featured-news
  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/featured-news", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load featured news");

        const data: FeaturedNewsItem[] = await res.json();
        setItems(data);
      } catch (e: any) {
        setError(e?.message ?? "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, []);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === "left" ? -STEP : STEP,
      behavior: "smooth",
    });
  };

  return (
   <section className="relative py-20 bg-[#F4FFFE]">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-[44px] font-semibold tracking-tight text-[#0B1F2A]">
            Featured News
          </h2>
          <p className="mx-auto mt-4 max-w-[780px] text-[18px] leading-[1.7] text-[#28424F]">
            Stay ahead with our latest thoughts on software engineering, emerging
            technologies, and industry best practices
          </p>
        </div>

        {/* Cards Area */}
        <div className="relative mt-12">
          {/* Left arrow */}
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByAmount("left")}
            className="
              absolute -left-5 lg:-left-14 top-1/2 z-20 -translate-y-1/2
              hidden h-11 w-11 items-center justify-center
              rounded-full bg-white border border-[#051323]
              shadow-[0_10px_30px_rgba(0,0,0,0.10)]
              transition hover:scale-105 md:flex
            "
          >
            <Image
              src="/featured-icons/arrow-left.svg"
              alt="previous"
              width={18}
              height={18}
            />
          </button>

          {/* Track */}
         <div
  ref={trackRef}
  className="
    flex gap-6 pb-2
    overflow-x-auto scroll-smooth
    snap-x snap-mandatory
    [-ms-overflow-style:none] [scrollbar-width:none]
    md:overflow-hidden
  "
>
  <div className="hidden" />

            {loading && (
              <>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="shrink-0 snap-start
    w-[85%] sm:w-[70%] md:w-full md:max-w-[370px]
    overflow-hidden rounded-[18px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]
  "
                  >
                    <div className="h-[210px] w-full animate-pulse bg-slate-200" />
                    <div className="p-6">
                      <div className="h-6 w-40 animate-pulse rounded bg-slate-200" />
                      <div className="mt-5 h-7 w-56 animate-pulse rounded bg-slate-200" />
                      <div className="mt-3 h-4 w-full animate-pulse rounded bg-slate-200" />
                      <div className="mt-2 h-4 w-[90%] animate-pulse rounded bg-slate-200" />
                      <div className="mt-6 h-5 w-24 animate-pulse rounded bg-slate-200 ml-auto" />
                    </div>
                  </div>
                ))}
              </>
            )}

            {!loading &&
              items.map((item) => (
                <div
  key={item.id}
  className="
    shrink-0
    snap-start
    w-[85%] sm:w-[70%] md:w-auto
  "
>
  <FeaturedNewsCard item={item} />
</div>

              ))}
          </div>

          {/* Right arrow */}
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByAmount("right")}
            className="
              absolute -right-5 lg:-right-14 top-1/2 z-20 -translate-y-1/2
              hidden h-11 w-11 items-center justify-center
              rounded-full bg-white border border-[#051323]
              shadow-[0_10px_30px_rgba(0,0,0,0.10)]
              transition hover:scale-105 md:flex
            "
          >
           <Image
            src="/featured-icons/arrow-right.svg"
            alt="previous"
             width={18}
             height={18}
              className="rotate-180"
              />

          </button>
        </div>

        {/* Error */}
        {error && <p className="mt-6 text-center text-red-600">{error}</p>}

        {/* View All */}
        <div className="mt-14 flex justify-center">
          <button className="h-[62px] w-[240px] rounded-full bg-gradient-to-r from-[#3FD6CB] to-[#16A394] text-white text-[18px] font-semibold tracking-wide shadow-[0_18px_45px_rgba(22,163,148,0.35)] cursor-pointer">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
}
