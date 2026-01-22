"use client";

import React, { useEffect, useMemo, useState } from "react";
import type { CaseStudyCardData } from "./CaseStudies";
import CaseStudiesCard from "./CaseStudiesCard";

type Props = { cards: CaseStudyCardData[] };

type Direction = "prev" | "next";
type Phase = "idle" | "collapse" | "move";

const TOTAL_MS = 450; //total time for full animation
const COLLAPSE_MS = 120; //time to collapse
const MOVE_MS = TOTAL_MS - COLLAPSE_MS; //time to move

const CaseStudiesCardSection: React.FC<Props> = ({ cards }) => {
  const total = cards.length;

  const [activeIndex, setActiveIndex] = useState(0);

  const [direction, setDirection] = useState<Direction>("next");
  const [phase, setPhase] = useState<Phase>("idle");

  const isAnimating = phase !== "idle";

  if (total === 0) return null;

  const prevIndex = useMemo(() => (activeIndex - 1 + total) % total, [activeIndex, total]);
  const nextIndex = useMemo(() => (activeIndex + 1) % total, [activeIndex, total]);

  const activeCard = cards[activeIndex];
  const prevCard = cards[prevIndex];
  const nextCard = cards[nextIndex];

  const incomingCard = direction === "prev" ? prevCard : nextCard;

  const startAnimation = (dir: Direction) => {
    if (isAnimating || total <= 1) return;

    setDirection(dir);
    setPhase("collapse"); //  collapse

    // collapse -> move + expand
    window.setTimeout(() => {
      setPhase("move");
    }, COLLAPSE_MS);

    // end of animation: fix the new card
    window.setTimeout(() => {
      setActiveIndex((i) => (dir === "prev" ? (i - 1 + total) % total : (i + 1) % total));
      setPhase("idle");
    }, TOTAL_MS);
  };

  const onPrev = () => startAnimation("prev");
  const onNext = () => startAnimation("next");

  useEffect(() => {
    if (activeIndex >= total) setActiveIndex(0);
  }, [activeIndex, total]);

  return (
    <CaseStudiesCard
      data={activeCard}
      prevCard={prevCard}
      nextCard={nextCard}
      incomingCard={incomingCard}
      direction={direction}
      phase={phase}
      durationMs={TOTAL_MS}
      collapseMs={COLLAPSE_MS}
      moveMs={MOVE_MS}
      onPrev={onPrev}
      onNext={onNext}
    />
  );
};

export default CaseStudiesCardSection;
