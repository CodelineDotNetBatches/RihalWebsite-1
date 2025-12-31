import React from 'react'

function HeroSearch() {
  return (
  <div className="h-12 p-2 bg-gradient-to-l from-[rgba(255,195,0,0.48)] to-[rgba(0,230,208,0.48)] rounded-full flex justify-center items-center gap-4">

      {/* Search Box */}
      <div className="w-96 h-10 px-3 py-2 bg-gray-900 rounded-3xl outline outline-1 outline-gray-700 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Magnifying Glass */}
          <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
          </svg>
          <span className="text-gray-400 text-sm font-normal font-['Inter'] leading-5">
            Search A Product
          </span>
        </div>

        {/* Right Icon */}
        <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>

      {/* Filter Box */}
      <div className="w-44 h-10 px-3 py-2 bg-gray-900 rounded-3xl outline outline-1 outline-gray-700 flex justify-between items-center opacity-50">
        <span className="flex-1 text-gray-100 text-sm font-normal font-['Inter'] leading-5">
          Filter By
        </span>
        <svg className="w-4 h-4 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default HeroSearch
