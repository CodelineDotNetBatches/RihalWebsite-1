import React from 'react'

function HeroSearch() {
  return (
    <div
      className="mb-11 flex h-[50px] p-2 justify-center items-center gap-[18px] shrink-0 rounded-[500px]
      bg-gradient-to-l from-[rgba(255,195,0,0.23)] to-[rgba(0,230,208,0.23)]"
    >
      {/* Search Box */}
      <div className="w-[435px] h-10 px-3 py-2 bg-[#FFFFFF] rounded-3xl outline outline-1 outline-[#E2E8F0] flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Search Icon */}
          <svg
            className="w-5 h-5 text-[#6B7280]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
          </svg>

        
          <span className="text-[#9AA5B1] text-sm font-normal font-['Inter'] leading-5">
            Search A Product
          </span>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          {/* Mic Icon */}
          <svg
            viewBox="0 0 21 21"
            fill="none"
            className="w-5 h-5 text-[#62748E] hover:text-cyan-400 transition cursor-pointer"
          >
            <path d="M6.88867 18.0833H13.7776" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.3335 15.5V18.0833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M13.7776 5.53572C13.7776 3.90516 12.2354 2.58334 10.3331 2.58334C8.4308 2.58334 6.88867 3.90516 6.88867 5.53572V9.96429C6.88867 11.5948 8.4308 12.9167 10.3331 12.9167C12.2354 12.9167 13.7776 11.5948 13.7776 9.96429V5.53572Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.30566 9.47222C4.30566 12.8013 7.00439 15.5 10.3334 15.5C13.6625 15.5 16.3612 12.8013 16.3612 9.47222"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Filter Box */}
      <div className="flex justify-between items-center w-44 h-10 px-3 py-2 bg-[#FFFFFF] rounded-3xl outline outline-1 outline-[#E2E8F0]">
      
        <div className="flex-1 text-[#020618] opacity-50 text-sm font-normal font-['Inter'] leading-5">
          Filter By
        </div>

  
        <svg
          className="w-4 h-4 text-[#020618] opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

export default HeroSearch
