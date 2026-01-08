import React from 'react'
import Image from "next/image";
function HeroB() {
  return (
   <section className="w-full bg-slate-900 py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-14 sm:gap-16">

        {/* ===== Header ===== */}
        <div className="max-w-3xl text-center flex flex-col gap-4 sm:gap-6">
          <h2 className="text-white text-2xl sm:text-4xl lg:text-5xl font-medium leading-tight">
            Trusted by those who know us best
          </h2>

          <p className="text-white/80 text-sm sm:text-lg lg:text-2xl">
            Stay ahead with our latest thoughts on software engineering,
            emerging technologies, and industry best practices
          </p>

          <div className="flex justify-center">
            <button className="
              h-11 sm:h-12
              px-6 sm:px-10
              bg-gradient-to-l from-teal-200 via-teal-600 to-teal-200
              rounded-full
              flex items-center gap-2
            ">
              <span className="text-white text-sm sm:text-lg font-bold uppercase tracking-wider">
                Know more
              </span>
              <img
                src="/icon/arrow-up-right.svg"
                alt="arrow"
                className="w-3 h-3"
              />
            </button>
          </div>
        </div>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">

          {/* ===== Card 1 ===== */}
          <div className="
            relative w-full max-w-xl mx-auto
            p-5 sm:p-8
            rounded-2xl
            border border-cyan-500/30
            flex flex-col gap-4 sm:gap-6
          ">
            {/* decorative */}
            <div className="absolute top-1/2 right-24 w-20 h-8 bg-gradient-to-l from-teal-200/0 to-teal-200 rounded-full hidden sm:block" />
            <div className="absolute top-1/2 left-10 w-28 h-8 bg-gradient-to-l from-teal-200/0 to-teal-200 rounded-full hidden sm:block" />

            {/* icon */}
            <div className="absolute right-6 -top-6">
              <Image
                src="/icon/gradient-icon.svg"
                alt="decorative shape"
                width={56}
                height={56}
              />
            </div>

            <img
              src="/images/image 16.png"
              alt="client logo"
              className="w-24 sm:w-28"
            />

            <p className="text-white text-sm sm:text-base lg:text-lg leading-7">
              “We sincerely appreciate the great support and promptness during
              development. Your commitment to timely delivery and smooth
              communication made a significant difference.”
            </p>
          </div>

          {/* ===== Card 2 ===== */}
          <div className="
            relative w-full max-w-xl mx-auto
            p-5 sm:p-8
            rounded-2xl
            border border-cyan-500/30
            flex flex-col gap-4 sm:gap-6
          ">
            {/* decorative */}
            <div className="absolute top-1/2 right-20 w-24 h-8 bg-gradient-to-l from-teal-200/0 to-teal-200 rounded-full hidden sm:block" />
            <div className="absolute top-2/3 left-20 w-32 h-8 bg-gradient-to-l from-teal-200/0 to-teal-200 rounded-full hidden sm:block" />

            {/* icon */}
            <div className="absolute right-6 -top-6">
              <Image
                src="/icon/gradient-icon.svg"
                alt="decorative shape"
                width={56}
                height={56}
              />
            </div>

            <img
              src="/images/image 22.png"
              alt="client logo"
              className="w-20 brightness-0 invert"
            />

            <p className="text-white text-sm sm:text-base lg:text-lg leading-7">
              PDO are privileged to partner, learn from and support Rihal, a role
              model in entrepreneurial creativity, intensity and commitment to
              make a difference in unleashing Omani talent.
            </p>
          </div>

        </div>
      </div>
    </section>

  )
}

export default HeroB
