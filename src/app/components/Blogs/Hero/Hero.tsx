import React from 'react'

function Hero() {
  return (
    <div>
       <section className="w-full  bg-[#3BADE6] relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0  bg-teal-500" />
      

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Left text */}
       <h1 className="text-2xl font-normal font-['Rihal'] leading-6">
  <span className="bg-clip-text text-transparent bg-gradient-to-r 
                   from-[rgba(255,141,141,1)] via-[rgba(255,195,0,1)] to-[rgba(150,42,42,1)]">
    The Rihal Blog
  </span>
  <br />
  <div className="text-white text-4xl font-bold font-['Rihal'] leading-[60px] max-w-xl w-full">
  Get insights on digital transformation, AI, data, and UX design
</div>
</h1>
        {/* Right subscription box */}
     <div className="w-full max-w-lg bg-[rgba(98,116,142,0.34)] rounded-[60px] p-6 flex flex-col items-center gap-4">

  <div className="text-2xl font-['Rihal'] leading-7">
  <span className="text-white font-bold">
    Join professionals worldwide who receive fresh perspectives on technology and design every month.
  </span>
  <br />
  <span className="text-slate-900 font-medium">
  
  </span>
</div>
<div className="w-full max-w-lg">
  <div className="flex rounded-3xl overflow-hidden border border-gray-300">

    <input
      type="email"
      placeholder="Email Address"
      className="flex-1 px-4 py-3 text-sm font-['Inter'] text-gray-900 placeholder-gray-400 outline-none bg-white"
    />
  <div className="flex justify-start items-start gap-4">
    <div className="h-12 flex justify-center items-center gap-5">
        <div className="h-12 px-12 pt-3 pb-3.5 bg-gradient-to-l from-teal-200 via-teal-600 to-teal-200 rounded-[46.20px] flex justify-start items-start gap-1">
            <div className="text-center justify-center text-white text-sm font-bold font-['Rihal'] leading-6 tracking-wider">
                Sign me up
            </div>
            
        </div>
    </div>
</div>

  </div>
</div>

<div className="w-full max-w-md text-xs font-['Rihal'] font-medium flex flex-wrap gap-1">
  <span className="text-white">By signing up you agree to our</span>
  <span className="text-yellow-400">Privacy Policy</span>
</div>


</div>
    
      </div>
    </section>
    </div>
  )
}

export default Hero
