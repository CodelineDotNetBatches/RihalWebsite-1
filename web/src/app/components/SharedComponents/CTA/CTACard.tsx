import Image from "next/image";

export default function CTACard() {
  return (
    /* ===== OUTER WRAPPER (FOR BORDER) ===== */
    <div
  className="
    relative
    w-[1164px]
    h-[638px]
    rounded-[84px]
    border
    border-[2.5px]
    border-[#9CF2E8]/60
  "
>

      {/* ===== INNER CARD (IMAGE + CONTENT) ===== */}
      <div
        className="
          relative
          w-[1160px]
          h-[638px]
          rounded-[84px]
          overflow-hidden
        "
      >

        {/* ===== Background Image ===== */}
        <Image
          src="/Images/CTA/CTACard.jpg"
          alt="CTA background"
          fill
          priority
          className="object-cover object-center"
        />


        {/* ===== Content ===== */}
        <div className="absolute inset-0 z-10">
          <div
            className="
              absolute
              left-[204px]
              top-[190px]
              w-[537px]
              flex
              flex-col
              gap-[24px]
            "
          >
            {/* Text */}
            <h2 className="text-white text-[40px] leading-[44px] font-medium">
              The future doesn’t wait, and
              <br />
              neither should you.
              <br />
              Let’s shape your digital
              <br />
              transformation together.
            </h2>

            {/* Button */}
            <button
              className="
              w-[200px]
              h-[44px]
              px-[16px]
              rounded-full
              bg-[#F5C542]
              shadow-[0px_2px_8px_rgba(0,0,0,0.25)]
              flex
              items-center
              justify-between
            "
            >
              <span className="text-black text-[16px] font-medium">
                Let’s Work Together
              </span>

              <img
                src="/Images/CTA/arrow-up-right.svg"
                alt="arrow"
                className="w-[20px] h-[20px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
