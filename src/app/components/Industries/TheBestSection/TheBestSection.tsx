import Image from 'next/image'
import React from 'react'
import Expert1 from "./../../../../../public/Images/Industry/AzzanAlkindi.png";
const TheBestSection = () => {
    return (
        <div className="flex flex-col relative w-[1015.87px] h-[624.79px] gap-[50px] items-center justify-center mx-auto mb-[100px]">
            {/* Frame 1410119444  */}
            {/* Text Col */}
            <div className="flex flex-col w-[1015.87px] h-[206.54px] gap-[30px] ">
                {/* Frame 1410119422 */}
                {/* Title + Description */}
                <div className="flex flex-col w-[1015.87px] h-[125.42px] gap-[18.62px] items-center justify-center mx-auto">
                    <div className="max-w-[785.61px] min-h-[48px] flex items-center justify-center px-4">
                        <h1 className="font-sans font-normal text-5xl leading-[1] tracking-normal text-[#051323] text-center">
                            The best minds in the field
                        </h1>
                    </div>

                    <div className="flex flex-col w-[732.28px] h-[50.79px] gap-[22.86px]">
                        <div className="max-w-[786px] min-h-[56px] flex items-center justify-center px-4">
                            <p className="font-sans font-normal text-xl leading-7 tracking-normal text-black text-center">
                                Our industry specialists bring years of experience to every project, and
                                they’re here to connect with you.
                            </p>
                        </div>
                    </div>

                </div>
                {/* Button */}
                <div className="w-[238.84px] h-[51.13px] gap-[19.47px] justify-center items-center flex mx-auto">
                    <div className="w-[238.84px] h-[51.13px] rounded-[26.03px] bg-[#0B9E8C] flex justify-center items-center mx-auto px-[34.92px] py-[12.06px] gap-[8px] opacity-100">
                        <span className="font-inter font-semibold text-[18.67px] leading-[26.67px] text-center text-[#FFFFFF]">
                            Speak to an expert
                        </span>
                    </div>








                </div>




            </div>
            {/* Pic row */}
            <div className="flex flex-row w-[983.52px] h-[368.24px] gap-[62px]">
                {/* Frame 1410119437 */}
                <div className="flex flex-col w-[256.51.52px] h-[368.24px] gap-[18px] justify-center items-center mx-auto">
                    <div className="w-[256.51px] h-[368.24px] bg-[#FFC3001A]/[0.10] rounded-[50%]" >
                        <Image src={Expert1} alt="image1" width={256} height={368} className="rounded-[50%]" />

                    </div>
                    <div className="flex flex-col w-[256.51px] h-[90.35px] gap-[4px] items-center justify-center">
                        <div className="w-[256.51px] h-[32.17px] flex items-center justify-center ">
                            <span className="font-['Rihal'] font-semibold text-[20.32px] leading-[27.09px] text-[#032346]/[0.75] text-center">
                                Azzan Al Kindi
                            </span>
                        </div>
                        <div className="w-[182.01px] h-[54.18px] flex items-center justify-center">
                            <p className="font-['Rihal'] font-normal text-[15.24px] leading-[23.7px] text-[#032346]/[0.75] text-center">
                                Industry Expert with over 30 years of experience
                            </p>
                        </div>
                        


                    </div>

                </div>



                  <div className="flex flex-col w-[256.51.52px] h-[368.24px] gap-[18px] justify-center items-center mx-auto">
                    <div className="w-[256.51px] h-[368.24px] bg-[#FFC3001A]/[0.10] rounded-[50%]" >
                        <Image src={Expert1} alt="image1" width={256} height={368} className="rounded-[50%]" />

                    </div>
                    <div className="flex flex-col w-[256.51px] h-[90.35px] gap-[4px] items-center justify-center">
                        <div className="w-[256.51px] h-[32.17px] flex items-center justify-center ">
                            <span className="font-['Rihal'] font-semibold text-[20.32px] leading-[27.09px] text-[#032346]/[0.75] text-center">
                                Azzan Al Kindi
                            </span>
                        </div>
                        <div className="w-[182.01px] h-[54.18px] flex items-center justify-center">
                            <p className="font-['Rihal'] font-normal text-[15.24px] leading-[23.7px] text-[#032346]/[0.75] text-center">
                                Industry Expert with over 30 years of experience
                            </p>
                        </div>
                        


                    </div>

                </div>




                  <div className="flex flex-col w-[256.51.52px] h-[368.24px] gap-[18px] justify-center items-center mx-auto">
                    <div className="w-[256.51px] h-[368.24px] bg-[#FFC3001A]/[0.10] rounded-[50%]" >
                        <Image src={Expert1} alt="image1" width={256} height={368} className="rounded-[50%]" />

                    </div>
                    <div className="flex flex-col w-[256.51px] h-[90.35px] gap-[4px] items-center justify-center">
                        <div className="w-[256.51px] h-[32.17px] flex items-center justify-center">
                            <span className="font-['Rihal'] font-semibold text-[20.32px] leading-[27.09px] text-[#032346]/[0.75] text-center">
                                Azzan Al Kindi
                            </span>
                        </div>
                        <div className="w-[182.01px] h-[54.18px] flex items-center justify-center">
                            <p className="font-['Rihal'] font-normal text-[15.24px] leading-[23.7px] text-[#032346]/[0.75] text-center">
                                Industry Expert with over 30 years of experience
                            </p>
                        </div>
                        


                    </div>

                </div>



              
            </div>
        </div>
    )
}

export default TheBestSection