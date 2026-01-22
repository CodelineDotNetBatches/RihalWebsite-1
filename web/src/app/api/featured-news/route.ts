import { NextResponse } from "next/server";

type FeaturedNewsItem = {
  id: string;
  tag: "Artificial Intelligence" | "UX Design" | "Software Development";
  date: string;
  title: string;
  description: string;
  imageSrc: string;
};

const TAGS: FeaturedNewsItem["tag"][] = [
  "Artificial Intelligence",
  "UX Design",
  "Software Development",
];

export async function GET() {
  // تقدري تغيّري العدد هنا لأي رقم (30 / 50 / 100)
  const count = 100;

  const data: FeaturedNewsItem[] = Array.from({ length: count }, (_, i) => {
    const tag = TAGS[i % TAGS.length];

    return {
      id: `news-${i + 1}`,
      tag,
      date: "Jan 15, 2025",
      title: `Building Scalable Cloud-Native Applications #${i + 1}`,
      description:
        "A comprehensive guide to designing and implementing cloud-native solutions that can scale efficiently while maintaining performance and reliability.",
      imageSrc: "/featured-news/cover.jpg", // نفس صورتك الموجودة
    };
  });

  return NextResponse.json(data);
}
