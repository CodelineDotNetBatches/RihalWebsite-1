import Image from 'next/image'
import React from 'react'
import HeroBg from '../../../../../public/images/Industry/Rectangle.svg'
import CompanyLogoBP from '../../../../../public/images/Industry/BP.png'
import CompanyLogoOQ from '../../../../../public/images/Industry/OQ.svg'
import CompanyLogoOO from '../../../../../public/images/Industry/OO.svg'
import CompanyLogoOLNG from '../../../../../public/images/Industry/OLNG.png'
import CompanyLogoPDO from '../../../../../public/images/Industry/PDO.png'




const IndustriesHero = () => {
    return (
      
            <div className="absolute w-[1282px] h-[1282px] bg-[#0B1A2B]/[0.31]">
                <Image src={HeroBg} alt="Industry Hero" />
                <div className="absolute top-[311px] left-[89px] w-[1103px] flex flex-col gap-[20px] justify-center items-center ">
                    {/* Top  */}
                    <div className="w-[1025px] flex flex-col gap-[24px] text-[#F4FFFE] justify-center items-center">

                        <h3 className="font-['Rihal'] font-normal text-[20px] leading-[25px] tracking-[0]">Industry Solutions</h3>
                        <h1 className="w-full max-w-[900px] text-[#F4FFFE] font-inter font-medium text-[56px] leading-[64px] justify-center text-center">
                            Turning energy data into decisions that{" "}
                            <span className="bg-[linear-gradient(20deg,#FFC300_50%,#962A2A_100%)] bg-clip-text text-transparent">
                                power results
                            </span>
                            .
                        </h1>


                    </div>
                    {/* Middle  */}
                    <div className="w-full max-w-[803px] text-xl leading-7 font-sans font-normal text-center text-[#F4FFFE]">
                        <p>At Rihal, we help energy companies turn data into smarter decisions that optimize operations, enhance safety, and drive sustainable growth.</p>
                    </div>
                    {/* Bottom  */}
                    <div className="flex items-center w-[241.8413px] h-[51.127px] gap-[8px] px-[34.92px] py-[12.06px] rounded-[26.03px] bg-[#F4FFFE] text-[#051323] opacity-100 ">
                        <span className="text-[18.67px] leading-[26.67px] font-sans font-medium text-center text-[#051323]">
                            Get expert’s advice
                        </span>
                    </div>







                </div>

                <div className="absolute top-[735px] left-[-86px] w-[1454px] h-[171px] flex flex-col gap-[22.86px] overflow-x-auto ">

                    <p className="w-[1454px] text-[30.48px] leading-[33.86px] font-sans font-medium text-center text-[#FFFFFF]">
                        Trusted by
                    </p>

                    <div className="sticky top-[22.9px] w-[1454px] h-[114px] overflow-hidden items-center gap-[84.66px]">

                        {/* Track */}
                        <div className="flex animate-marquee  gap-[84.66px]">

                            {/* Row 1 */}
                            <div className="w-[930px] flex items-center gap-[84.66px]">
                                <div className="h-[63px] w-[84px] flex items-center justify-center">
                                    <Image src={CompanyLogoBP} alt="BP" width={84} height={63} />
                                </div>
                                <div className="h-[74px] w-[74px] flex items-center justify-center">
                                    <Image src={CompanyLogoOLNG} alt="OLNG" width={74} height={74} />
                                </div>
                                <div className="h-[83px] w-[73px] flex items-center justify-center">
                                    <Image src={CompanyLogoOO} alt="OO" width={73} height={83} />
                                </div>
                                <div className="h-[145px] w-[91px] flex items-center justify-center">
                                    <Image src={CompanyLogoOQ} alt="OQ" width={91} height={145} />
                                </div>
                                <div className="h-[83px] w-[56px] flex items-center justify-center">
                                    <Image src={CompanyLogoPDO} alt="PDO" width={56} height={83} />
                                </div>
                            </div>

                           

                            {/* Row 2  */}
                            <div className="w-[930px] flex items-center gap-[84.66px]">
                                <div className="h-[63px] w-[84px] flex items-center justify-center">
                                    <Image src={CompanyLogoBP} alt="BP" width={84} height={63} />
                                </div>
                                <div className="h-[74px] w-[74px] flex items-center justify-center">
                                    <Image src={CompanyLogoOLNG} alt="OLNG" width={74} height={74} />
                                </div>
                                <div className="h-[83px] w-[73px] flex items-center justify-center">
                                    <Image src={CompanyLogoOO} alt="OO" width={73} height={83} />
                                </div>
                                <div className="h-[145px] w-[91px] flex items-center justify-center">
                                    <Image src={CompanyLogoOQ} alt="OQ" width={91} height={145} />
                                </div>
                                <div className="h-[83px] w-[56px] flex items-center justify-center">
                                    <Image src={CompanyLogoPDO} alt="PDO" width={56} height={83} />
                                </div>
                            </div>

                             {/* Row 3  */}
                            <div className="w-[930px] flex items-center gap-[84.66px]">
                                <div className="h-[63px] w-[84px] flex items-center justify-center">
                                    <Image src={CompanyLogoBP} alt="BP" width={84} height={63} />
                                </div>
                                <div className="h-[74px] w-[74px] flex items-center justify-center">
                                    <Image src={CompanyLogoOLNG} alt="OLNG" width={74} height={74} />
                                </div>
                                <div className="h-[83px] w-[73px] flex items-center justify-center">
                                    <Image src={CompanyLogoOO} alt="OO" width={73} height={83} />
                                </div>
                                <div className="h-[145px] w-[91px] flex items-center justify-center">
                                    <Image src={CompanyLogoOQ} alt="OQ" width={91} height={145} />
                                </div>
                                <div className="h-[83px] w-[56px] flex items-center justify-center">
                                    <Image src={CompanyLogoPDO} alt="PDO" width={56} height={83} />
                                </div>
                            </div>

                         

                        </div>
                    </div>
                      

                </div>



            </div>


       




    )
}

export default IndustriesHero