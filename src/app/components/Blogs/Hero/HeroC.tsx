import React from 'react'
import FeaturedNewsCard from "../../Home/FeaturedNews/FeaturedNewsCard";
import type { FeaturedNewsItem } from "../../Home/FeaturedNews/featuredNewsData";

function HeroC() {
    const cards: FeaturedNewsItem[] = [
  {
    id: "1",
    tag: "Artificial Intelligence",
    date: "Jan 14, 2026",
    title: "AI Trends in 2026",
    description:
      "Explore the most important artificial intelligence trends shaping the future of technology.",
    imageSrc: "/images/news/ai.jpg",
  },
  {
    id: "2",
    tag: "UX Design",
    date: "Jan 10, 2026",
    title: "Designing for Better UX",
    description:
      "Best practices to create intuitive and user-friendly digital experiences.",
    imageSrc: "/images/news/ux.jpg",
  },
  {
    id: "3",
    tag: "Software Development",
    date: "Jan 5, 2026",
    title: "Modern Web Development",
    description:
      "A practical guide to building scalable and maintainable web applications.",
    imageSrc: "/images/news/dev.jpg",
  },
];

  return (
   <div className="mt-12 flex flex-wrap justify-center gap-8">
  {cards.map((item) => (
    <FeaturedNewsCard key={item.id} item={item} />
  ))}
</div>


 
  )
}

export default HeroC
