"use client";
import { useEffect, useRef } from "react";
import React from 'react'
function HeroA() {
   const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let speed = 0.5;

    const autoScroll = () => {
      if (!isDragging.current) {
        container.scrollLeft += speed;

      
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }

      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, []);
  return (
  <section className="w-full bg-[rgba(244,255,254,1)]">

      {/* ================= HERO + TRUST + CTA ================= */}
      <div className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 gap-16">

        {/* HERO */}
        <div className="relative w-full h-[420px] sm:h-[600px] lg:h-[816px] rounded-2xl overflow-hidden bg-black">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-cyan-500/10" />

          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div className="space-y-4">
              <p className="text-white text-lg sm:text-2xl font-Rihal">
                AI That Works
              </p>
              <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-Inter">
                Automate, predict,
                <br />
                and decide <span className="font-bold">Smarter</span>
              </h1>
            </div>
          </div>
        </div>

        {/* ===== TRUST ===== */}
    <div className="flex flex-col sm:flex-row gap-6 items-center w-full max-w-7xl mx-auto px-4">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-Inter text-center sm:text-left whitespace-nowrap">
        They Trust us
      </h3>

      <div
       ref={scrollRef}
        className="flex-1 flex gap-6 sm:gap-8 overflow-x-auto cursor-grab no-scrollbar"
        onMouseDown={() => (isDragging.current = true)}
        onMouseUp={() => (isDragging.current = false)}
        onMouseLeave={() => (isDragging.current = false)}
      >
        <img className="h-16 flex-shrink-0" src="/images/image 15.png" />
        <img className="h-20 flex-shrink-0" src="/images/image 23.png" />
        <img className="h-16 flex-shrink-0" src="/images/image 22.png" />
        <img className="h-16 flex-shrink-0" src="/images/image 11.png" />
        <img className="h-12 flex-shrink-0" src="/images/image 16.png" />
        <img className="h-14 flex-shrink-0" src="/images/20.png" />
        <img className="h-20 flex-shrink-0" src="/images/21.png" />
      </div>
    </div>
  



        {/* CTA */}
        <div className="max-w-4xl text-center space-y-8 mb-[35px]">
<p className="text-slate-900 text-xl sm:text-2xl lg:text-4xl font-bold font-['Rihal'] leading-relaxed lg:leading-[67px] text-center max-w-5xl mx-auto">
  Your trusted partner in AI, data, and software. We transform complex data into
  intelligent tools that simplify operations, spark innovation, and accelerate
  digital transformation
</p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-l from-teal-200 via-teal-600 to-teal-200 text-white font-bold uppercase flex items-center gap-2">
              Discover Our Solutions
              <img src="/icon/arrow-up-right.svg" className="w-3 h-3" />
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-teal-700 flex items-center gap-2">
              <span className="text-teal-700 font-bold uppercase">
                Contact Sales
              </span>

              {/* Gradient Arrow */}
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <defs>
                  <linearGradient id="arrowGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(0, 115, 104, 1)" />
                    <stop offset="100%" stopColor="rgba(14, 108, 221, 1)" />
                  </linearGradient>
                </defs>
                <path
                  d="M2 10L10 2M10 2H6M10 2V6"
                  stroke="url(#arrowGradient)"
                  strokeWidth="2"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>



{/* ================= SOLUTIONS STRIPS ================= */}
<div className="flex flex-col w-full">

<div className="relative h-[220px] sm:h-[260px] lg:h-[300px] w-full bg-slate-900 overflow-hidden flex items-center">
  
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-teal-600 blur-[150px]" />

  <h2 className="px-6 sm:px-12 lg:px-24 text-white text-2xl sm:text-4xl lg:text-5xl font-medium font-Rihal text-left">
    Data Intelligence Solutions
  </h2>

</div>



  {/* ===== STRIP 2 ===== */}
   <div className="relative h-[220px] sm:h-[260px] lg:h-[300px] w-full bg-slate-900 overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-l from-red-500 to-black/0 blur-[150px]" />

    <h2 className="relative z-10 px-6 text-white text-2xl sm:text-4xl lg:text-5xl font-medium font-Rihal text-center">
      Software Intelligence Solutions
    </h2>
  </div>
 
  {/* ===== STRIP 3 ===== */}
  <div className="relative h-[220px] sm:h-[260px] lg:h-[300px] w-full bg-slate-900 overflow-hidden flex items-center">
    <div className="absolute inset-0 bg-gradient-to-l from-teal-600 to-black/0 blur-[150px]" />

    <h2 className="relative z-10 px-6 text-white text-2xl sm:text-4xl lg:text-6xl font-medium font-Rihal text-center">
      AI That Works in the Real World
    </h2>
  </div> 
</div>
</section>
  )
}

export default HeroA
