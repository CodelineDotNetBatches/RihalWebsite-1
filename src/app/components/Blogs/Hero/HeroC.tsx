"use client"; 

import React, { useState } from "react";
import FeaturedNewsCard from "../../Home/FeaturedNews/FeaturedNewsCard";
import type { FeaturedNewsItem } from "../../Home/FeaturedNews/featuredNewsData";

function HeroC() {
  const initialCards: FeaturedNewsItem[] = [
    {
      id: "1",
      tag: "Artificial Intelligence",
      date: "Jan 14, 2026",
      title: "AI Trends in 2026",
      description:
        "Explore the most important artificial intelligence trends shaping the future of technology.",
      imageSrc: "/images/re.jpg",
    },
    {
      id: "2",
      tag: "UX Design",
      date: "Jan 10, 2026",
      title: "Designing for Better UX",
      description:
        "Best practices to create intuitive and user-friendly digital experiences.",
      imageSrc: "/images/re.jpg",
    },
    {
      id: "3",
      tag: "Software Development",
      date: "Jan 5, 2026",
      title: "Modern Web Development",
      description:
        "A practical guide to building scalable and maintainable web applications.",
      imageSrc: "/images/re.jpg",
    },
  ];

  const [showExtra, setShowExtra] = useState(false);

  const handleViewMore = () => {
    setShowExtra(true);
  };

  const extraCards: FeaturedNewsItem[][] = [];
  if (showExtra) {
    for (let i = 0; i < 3; i++) {
      const row = initialCards.map((card) => ({
        ...card,
        id: `${card.id}-extra-${i}`,
      }));
      extraCards.push(row);
    }
  }

  return (
    <section className="mt-12 bg-white py-12">
      {/* Original 3 cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {initialCards.map((item) => (
          <FeaturedNewsCard key={item.id} item={item} />
        ))}
      </div>

      {/* View More button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleViewMore}
          className="h-12 px-6 bg-gradient-to-l from-teal-200 via-teal-600 to-teal-200 rounded-[50px] flex items-center justify-center"
        >
          <span className="text-white text-base font-bold font-['Rihal'] uppercase leading-7 tracking-wider">
            View More
          </span>
        </button>
      </div>

      {/* Extra 9 cards */}
      {showExtra &&
        extraCards.map((row, idx) => (
          <div key={idx} className="flex flex-wrap justify-center gap-8 mt-8">
            {row.map((item) => (
              <FeaturedNewsCard key={item.id} item={item} />
            ))}
          </div>
        ))}

       {/* <div className="inline-flex justify-start items-center gap-[5px]">
    <div className="flex justify-start items-center gap-5">
        <div className="w-8 h-8 p-2.5 bg-teal-600 rounded-full inline-flex flex-col justify-center items-center gap-2.5">
            <div className="self-stretch text-center justify-start text-teal-50 text-2xl font-normal font-['Rihal'] leading-[48px]">1</div>
        </div>
        <div className="w-6 h-10 text-center justify-center text-color-Rihal-Black text-2xl font-normal font-['Rihal'] leading-[48px]">2</div>
        <div className="w-6 h-10 text-center justify-center text-slate-900 text-2xl font-normal font-['Rihal'] leading-[48px]">3</div>
    </div>
    <div className="flex justify-center items-center">
        <div className="inline-flex flex-col justify-center items-center gap-2.5">
            <div className="w-8 text-center justify-start text-slate-900 text-2xl font-normal font-['Rihal'] leading-[48px]">...</div>
        </div>
        <div className="w-6 h-6 relative">
            <div className="w-3.5 h-3 left-[4.50px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-slate-900" />
        </div>
    </div>
</div>*/}
    </section>
  );
}

export default HeroC;
