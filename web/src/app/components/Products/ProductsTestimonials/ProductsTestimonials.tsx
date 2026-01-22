"use client";

import { useState } from "react";


import Image from "next/image";

export default function ProductsTestimonials() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[1040px]
        bg-[#F4FFFE]
        overflow-hidden
        flex
        justify-center
      "
    >
      {/* ===============================
          TOP GRADIENT BACKGROUND
         =============================== */}
     {/* Curved Gradient Background */}
<div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none">
  <svg
    width="100%"
    height="420"
    viewBox="0 0 1440 420"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className="block"
  >
    <defs>
      {/* Main curved gradient */}
      <linearGradient id="curvedGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0FA9A0" stopOpacity="0.9" />
        <stop offset="70%" stopColor="#0FA9A0" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#0FA9A0" stopOpacity="0" />
      </linearGradient>

      {/* Soft bottom gradient */}
      <linearGradient id="softGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0FA9A0" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#0FA9A0" stopOpacity="0" />
      </linearGradient>

      {/* Blur filters */}
      <filter id="mainBlur">
     <feGaussianBlur stdDeviation="40" />
     </filter>

     <filter id="softBlur">
    <feGaussianBlur stdDeviation="60" />
     </filter>

    </defs>

    {/* Main curved shape */}
   <path 
   d=" 
   M0 0 
   H1440 
   V180 
   C850 260 590 260 0 180 
   Z 
   " fill="url(#curvedGradient)"
    />


    {/* Soft faded area below the curve */}
  <path
  d="
    M0 0
    H1440
    V200
    C900 300 600 280 0 20
  "
  fill="none"
  stroke="url(#softGradient)"
  stroke-width="340"
  filter="url(#softBlur)"
/>



  </svg>
</div>



      {/* ===============================
          CONTENT
         =============================== */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1279px]
          flex
          flex-col
          items-center
          pt-[340px]
        "
      >
        {/* Title */}
        <h2 className="text-[50px] font-semibold text-[#0B2F33] mb-[100px]">
          What they say about our products?
        </h2>

        {/* ===============================
            CARDS + INDICATORS
           =============================== */}
        <div className="flex gap-[10px] items-start">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            <TestimonialCard />

            {/* Indicators */}
            <div className="mt-[24px] flex items-center gap-[12px]">
              {/* LEFT ARROW */}
             <button
             
             className="
             relative
             w-[52px]
             h-[52px]
             rounded-full
             overflow-hidden
             flex
             items-center
             justify-center
             

             border-0
             outline-none
             ring-0
             shadow-none
             "
            >
                  {/* Gradient base */}
  <div
    className="
      absolute inset-0
      rounded-full
      bg-[linear-gradient(45deg,rgba(5,19,35,0.92)_25.15%,rgba(8,89,88,0.92)_48.62%,rgba(11,158,140,0.92)_72.52%)]
    "
  />

  {/* Inactive overlay (controls the faded look) */}
  <div
    className="
      absolute inset-0
      rounded-full
      bg-white/70
      transition-opacity
      duration-200
      
      
    "
  />
                <Image
                  src="/Images/ProductsTestimonials/arrow-left.svg"
                  alt="Previous"
                  width={20}
                  height={20}
                  className="relative z-10"
                />
              </button>

              {/* RIGHT ARROW */}
              <button
                 className="
                  relative
                  w-[52px]
                  h-[52px]
                  rounded-full
                  overflow-hidden
                  flex
                  items-center
                  justify-center

                  bg-[linear-gradient(45deg,rgba(5,19,35,0.92)_25.15%,rgba(8,89,88,0.92)_48.62%,rgba(11,158,140,0.92)_72.52%)]

                  border-0
                  outline-none
                  ring-0
                  shadow-none
                  focus:outline-none
                 focus:ring-0
                 "
                 >
                <Image
                  src="/Images/ProductsTestimonials/arrow-right.svg"
                  alt="Next"
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            <TestimonialCard />
            <div className="mt-[24px] h-[52px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================
   TESTIMONIAL CARD
   =============================== */

function TestimonialCard() {
  return (
    <div
      className="
        relative
        w-[520px]
        bg-[#F4FFFE]
        rounded-[24px]
        px-[34px]
        pt-[34px]
        pb-[34px]
        border-2
        border-[rgba(0,230,208,0.34)]
      "
    >
      {/* Quote icon */}
      <div className="absolute -top-[35px] right-[28px]">
        <Image
          src="/images/ProductsTestimonials/quote-icon.svg"
          alt="Quote icon"
          width={60}
          height={60}
        />
      </div>

      {/* Logo */}
      <Image
        src="/images/ProductsTestimonials/jadawel.svg"
        alt="Jadawel Logo"
        width={120}
        height={48}
      />

      {/* Text */}
      <div className="mt-[32px]">
        <p className="text-[20px] leading-[28px] text-[#4B6B6F]">
          PDO are privileged to partner, learn from and support Rihal, a role model
          in entrepreneurial{" "}
          <span className="relative inline-block z-10">
            
            {/* Highlight: creativity */}
            creativity
           <span
            className=
            " absolute left-[1px] top-[1px] w-[70px] h-[28px] rounded-[26.03px] -z-10 bg-[linear-gradient(270deg,rgba(156,242,232,0)_10.71%,#9CF2E8_114.29%)] " /> </span>

          , intensity and commitment to make a difference in unleashing{" "}

         {/* Highlight: Omani talent */}
          <span className="relative inline-block z-10"> 
            Omani talent 
            <span 
            className=" absolute left-[1px] top-[1px] w-[75px] h-[28px] rounded-[26.03px] -z-10 bg-[linear-gradient(270deg,rgba(156,242,232,0)_10.71%,#9CF2E8_114.29%)] " /> </span>
          and national capacity.
        </p>
      </div>

      {/* Author */}
      <div className="mt-[24px]">
        <div className="leading-[40px]">
        <p className="text-[16px] font-semibold text-[#0B2F33]">
          Raoul Restucci
        </p>
        </div>
        <div className="leading-[20px]">
          <p className="text-[14px] text-[#7AA6A4] m-0">
            Former Managing Director
          </p>
          <p className="text-[14px] text-[#D6A300] m-0">
            Petroleum Development Oman
          </p>
        </div>
      </div>
    </div>
  );
}
