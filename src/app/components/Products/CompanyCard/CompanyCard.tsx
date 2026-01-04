import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProductCardData } from "../Products";

type Props = {
  data: ProductCardData;
};

const CompanyCard: React.FC<Props> = ({ data }) => {
  return (
    <div
      className=" relative flex w-full max-w-287.5 rounded-xl bg-[#0B1A2B] border border-[#0B9E8C] overflow-hidden px-4 py-6 justify-center sm:px-6 sm:py-8 md:px-10 md:py-9 "
    >
      {/* Background Blurs */}
      <div className="absolute w-[613.1221px] h-[510.4886px] top-[160.1328px] left-[-179.334px] bg-[#0B9E8C] blur-[180px] rotate-180 z-0 sm:w-153.25 sm:h-127.5 sm:top-40 sm:-left-44.75" />
      <div className="absolute w-77 h-73.25 top-78 left-10 bg-[#FFC300] blur-[206.09px] rotate-180 z-0 sm:w-77 sm:h-73.25 sm:top-78 sm:left-10" />
      <div className="absolute w-[541.8144px] h-[451.1342px] top-[271.2157px] left-[21.191px]  bg-[#0B1A2B] blur-[92.74px] rotate-180 z-0" />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-6.25">
        {/* LEFT */}
        <div className="flex flex-col justify-between items-start gap-6 md:h-full ">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col gap-3 ">
              <div className="flex gap-3">

                <div className="w-12 h-12 relative">


                  <div className="w-12 h-12 absolute">
                    <Image
                      src={data.logoImage}
                      alt={`${data.name} logo`}
                      width={51}
                      height={51}
                      className="items-center"
                    />

                  </div>
                </div>
                <div className="text-[#F4FFFE] leading-tight">
                  <p className="text-[22px] sm:text-[26px] md:text-[30px] font-bold">
                    {data.name}
                  </p>
                  <p className="text-[16px] sm:text-[18px] md:text-[22.5px] font-semibold">
                    {data.title}
                  </p>
                </div>
              </div>



              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-0.5 rounded-full text-[12px] sm:text-[13px] text-[#9CF2E8] bg-linear-to-r from-teal-300/40 to-teal-600/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="text-[#F4FFFE] text-[14px] sm:text-[15px] ">
              <p className="mb-2">
                Empowering government and enterprise teams with:
              </p>

              <ul className="list-disc list-inside pl-2 sm:pl-6">
                {data.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="mt-2 text-[#FFC300] font-bold text-[14px] sm:text-[15px]">
                {data.highlight}
              </p>



            </div>

            {/* Trusted By */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <span className="text-[#F4FFFE] text-sm font-medium">
                Trusted By:
              </span>

              <div className="flex items-center gap-2 flex-wrap">
                {data.trustedBy.map((logo) => (
                  <Image
                    key={logo}
                    src={logo}
                    alt="Trusted company"
                    width={28}
                    height={28}

                  />
                ))}
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="flex w-full items-center gap-3 sm:gap-4 ">
            <Link
              href={data.demoHref}
              className="flex h-12 px-3 sm:px-4 py-2 items-center justify-center gap-2 rounded-full bg-[#F4FFFE]
                sm:w-auto whitespace-nowrap "
            >
              <span className="text-[#0B9E8C] text-[16px] font-medium ">
                Book A Demo
              </span>

              <Image
                src="/Images/ProductComponenets/Company_Card_Image/Presentation.svg"
                alt="Demo Icon"
                width={20}
                height={20}

              />
            </Link>

            <Link
              href={data.productHref}
              className="flex h-12 px-3 sm:px-4 py-2 items-center justify-center gap-2
               w-[48%]  sm:w-auto whitespace-nowrap"
            >
              <span className="text-[#F4FFFE] text-[16px] font-medium underline underline-offset-4">
                View Product Page
              </span>

              <Image
                src="/Images/ProductComponenets/Company_Card_Image/arrow-right.svg"
                alt="Arrow Icon"
                width={20}
                height={26}
                className="w-4 h-5 "
              />
            </Link>
          </div>


        </div>

        {/* Right Image */}
        <div className="w-full md:w-136.75 rounded-3xl md:rounded-[33px] overflow-hidden bg-white/5">
          <div className="relative w-full h-55 sm:h-70 md:h-109.25">
            <Image
              src={data.mediaSrc}
              alt={`${data.name} preview`}
              fill

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
