import React from 'react'
import FeaturedNewsCard from "../../Home/FeaturedNews/FeaturedNewsCard";
import type { FeaturedNewsItem } from "../../Home/FeaturedNews/featuredNewsData";


function HeroB() {



  return (
  <div>
<div className="relative left-0 right-0 -bottom-40 z-10">
  
</div>

      {/* Header */}
      <div className="w-full max-w-[956px] mx-auto flex flex-col items-center gap-4">
        <h2 className="text-center text-color-Rihal-Black text-4xl lg:text-5xl font-medium font-['Rihal'] leading-tight">
          Featured Posts
        </h2>

        <p className="text-center text-slate-900/70 text-lg lg:text-2xl font-normal font-['Rihal']">
          Stay ahead with our latest thoughts on software engineering, emerging
          technologies, and industry best practices
        </p>
      </div>

      {/* Controls */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 w-96 h-10 px-3 bg-theme-background rounded-full border border-theme-input relative">
          {/* Search Icon (Lens) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.6-5.15a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z"
            />
          </svg>

          {/* Input */}
          <input
            type="text"
            placeholder="Search blog post"
            className="w-full bg-transparent outline-none text-sm font-['Inter'] text-theme-foreground placeholder:text-theme-muted-foreground"
          />

          {/* Microphone Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 1.75a2.75 2.75 0 00-2.75 2.75v6.5a2.75 2.75 0 005.5 0v-6.5A2.75 2.75 0 0012 1.75z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 10.25v1.5a6.75 6.75 0 0013.5 0v-1.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.25v3"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 22.25h8"
            />
          </svg>
        </div>

        {/* Sort By */}
        <div className="flex items-center justify-between w-32 h-10 px-3 bg-theme-background rounded-full border border-theme-input">
          <span
            className="text-sm font-['Inter']"
            style={{ color: "rgba(98, 116, 142, 1)" }}
          >
            Sort by
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            style={{ color: "rgba(98, 116, 142, 1)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Category */}
        <div className="flex items-center justify-between w-44 h-10 px-3 bg-theme-background rounded-full border border-theme-input">
          <span
            className="text-sm font-['Inter']"
            style={{ color: "rgba(98, 116, 142, 1)" }}
          >
            Select a category
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            style={{ color: "rgba(98, 116, 142, 1)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
 
      </div>
        


    </div>
  )
}

export default HeroB
