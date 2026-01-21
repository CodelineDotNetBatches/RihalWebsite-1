"use client";
import React, { useMemo, useState } from 'react'
import type { StaticImageData } from "next/image";

import TheBestSection from './TheBestSection/TheBestSection'


import bgTexture from "./../../../../public/Images/HomeComponenets/CaseStudiesCardImage/Vector 35.svg";
import bgTexture2 from "./../../../../public/Images/HomeComponenets/CaseStudiesCardImage/Vector 37.svg";


import companyImage from "./../../../../public/Images/HomeComponenets/CaseStudiesCardImage/image 12.svg";
import cardImage1 from "./../../../../public/Images/HomeComponenets/CaseStudiesCardImage/Frame 1410119294.png";
import cardImage2 from "./../../../../public/Images/HomeComponenets/CaseStudiesCardImage/Frame 1410119294.png";

import IndustriesHero from './IndustriesHero/IndustriesHero';
import IndustriesVideo from './IndustriesVideo/IndustriesVideo';
import IndustriesHelps from './IndustriesHelps/IndustriesHelps';
import CaseStudiesBackground from '../SharedComponents/CaseStudies/CaseStudiesBackground';
import CaseStudiesTitle from '../SharedComponents/CaseStudies/CaseStudiesTitle';
import CaseStudiesCardSection from '../SharedComponents/CaseStudies/CaseStudiesCardSection';
import CaseStudiesButtonIndustry from '../SharedComponents/CaseStudies/CaseStudiesButtonIndustry';
import Navbar from '../SharedComponents/Navbar/Navbar';
// import { FeaturedNewsSection } from '../Home/FeaturedNews';
import FeaturedNewsCard from '../Home/FeaturedNews/FeaturedNewsCard';
import { FeaturedNewsSection } from '../Home/FeaturedNews';
import { FAQSection } from '../Home/FAQ';
import Footer from '../SharedComponents/Footer/Footer';
import CTA from '../SharedComponents/CTA/CTA';


export type CaseStudyCardData = {
    id: number;
    industry: string;
    year: string;
    description: string;
    companyLogo: StaticImageData;
    mainImage: StaticImageData;
    services: string[];
};

const Industries = () => {
    const cards: CaseStudyCardData[] = useMemo(
        () => [
            {
                id: 1,
                industry: "Oil and Gas",
                year: "2022",
                description: "Optimizing business operations and transforming customer experience with data and AI",
                companyLogo: companyImage,
                mainImage: cardImage1,
                services: ["Data Engineering", "Machine Learning"]
            },
            {
                id: 2,
                industry: "Government",
                year: "2023",
                description: "Enhancing digital services and decision-making using AI-powered analytics",
                companyLogo: companyImage,
                mainImage: cardImage2,
                services: ["Data Engineering", "Software Engineering"]
            },
            {
                id: 3,
                industry: "Government",
                year: "2024",
                description: "Enhancing digital services and decision-making using AI-powered analytics",
                companyLogo: companyImage,
                mainImage: cardImage2,
                services: ["Machine Learning", "Software Engineering"]
            },
            {
                id: 4,
                industry: "Government",
                year: "2025",
                description: "Enhancing digital services and decision-making using AI-powered analytics",
                companyLogo: companyImage,
                mainImage: cardImage2,
                services: ["Data Engineering", "Machine Learning"]
            },
        ],
        []
    );


    // Services list for buttons 
    const serviceOptions = useMemo(() => {
        const set = new Set<string>();
        cards.forEach((c) => c.services.forEach((s) => set.add(s)));
        return Array.from(set);
    }, [cards]);

    // Selected service state
    const [selectedService, setSelectedService] = useState<string>(() => serviceOptions[0]);

    // Filtered cards
    const filteredCards = useMemo(() => {

        return cards.filter((c) => c.services.includes(selectedService));
    }, [cards, selectedService]);

    return (
        <div className='relative flex flex-col w-[1280px] h-[8788px] align-center mx-auto overflow-hidden '>


            <Navbar />

            <IndustriesHero />




            <div className='absolute flex flex-col w-[1460.1633px] h-[7990px] top-[1300px] left-[-90px]  gap-[100px] bg-[#F4FFFE] justify-center items-center'>
                {/* Frame 1410119458  */}
                {/* Industry Section 1 */}
                <div className=' flex flex-col w-[1460.1633px] h-[5572px] gap-[100px] '>
                    {/* Frame 1410119457  */}
                    {/* Industry sub Section 1 */}
                    <div className=" flex flex-col w-full h-[4730.0303px] gap-[150px]">
                        {/* Frame 1410119456  */}

                        <div className="flex flex-col w-[1460.1633px] h-[3820.0305px] gap-[150px]">
                            {/* Frame 1410119455 */}
                            <div className=" flex flex-col justify-center items-center w-[1460.1633px] h-[3045.2422px] gap-[100px] ">


                                {/* Rihal helps + Vedio sections */}
                                {/* Frame 1410119446  */}
                                <div className="relative flex flex-col w-[1285px] h-[1750px] gap-[100px] ">
                                    {/* Frame 1410119260 */}

                                    <div className="relative w-[1285px] h-[930px] rounded-tl-[55.6132px] rounded-tr-[55.6132px] bg-white " >
                                        {/* Rihal helps  */}
                                        <IndustriesHelps />


                                    </div>

                                    <div className="relative w-[1129.31px] h-[782.22px]">
                                        {/* Vedio Section  */}
                                        <IndustriesVideo />
                                    </div>

                                </div>
                                {/* Frame 1410119802  */}
                                {/* Case Study Section */}
                                <div className="relative flex flex-col w-[1547.5px] h-[1233.0208px]">
                                    <div className="  overflow-hidden">
                                        <div className='w-[1292PX] h-[955px] relative  '>
                                            <div className="relative w-[1504px] h-[1169px]  bg-[#0B1A2B] overflow-hidden">
                                                {/* top-[4279px] left-[-118px] */}
                                                <CaseStudiesBackground texture1={bgTexture} texture2={bgTexture2} />

                                                <div className="absolute flex flex-col w-[1504px] h-[1088px] gap-[65px]">
                                                    <div className="flex flex-col w-[1056px] h-[216px] gap-[16px] mx-auto mt-[60px]">
                                                        <div className="flex flex-col w-[1056px] h-[216px] gap-[12px] mx-auto mt-[60px]" >
                                                            <CaseStudiesTitle text="Case Studies" />

                                                            {/* Services Filter Buttons */}
                                                            <div className="flex items-center justify-center">
                                                                <div className="flex flex-wrap justify-center gap-[12.19px]">
                                                                    <CaseStudiesButtonIndustry
                                                                        options={serviceOptions}
                                                                        selected={selectedService}
                                                                        onChange={setSelectedService}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Send filtered cards */}
                                                    <CaseStudiesCardSection cards={filteredCards} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Frame 1410119312  */}
                                {/*  Head of Case Study */}
                                {/* <CaseStudiesTitle text="Case Studies" /> */}
                                <div className="relative flex flex-col w-[1460.1633px] h-[3820.0305px] gap-[100px]">
                                    <TheBestSection />
                                    <div className="relative flex flex-col w-[1280px] h-[760px] rounded-[66px] bg-[#051323] ">
                                        <h1>Hello </h1>
                                        {/* <CTA /> */}

                                    </div>
                                </div>
                                <div className="relative flex flex-col w-[1290px] h-[717px] py-[10px] px-[160px] gap-[50px]">
                                    <FeaturedNewsSection />
                                </div>

                                <div className="relative flex flex-col justify-between w-[1280px] h-[2318px] top-[100px] rounded-tl-[66px] rounded-tr-[66px] py-[85.2px] ">
                                    {/* <FAQSection /> */}

                                    {/* <div className="relative w-[1280px] h-[1393px] ">
                                        <CTA />


                                        <Footer />
                                    </div> */}
                                </div>




                            </div>


                            {/* Frame 1410119326  */}
                            {/* <div className="flex flex-col w-[1547.5px] h-[1233.0208px] bg-yellow-400">
                
              </div> */}

                            {/* Frame 1410119444  */}
                            {/* Industry Featured News Section 1 */}
                            {/* <div className="relative flex flex-col w-[1290px] h-[717px] py-[10px] px-[160px] gap-[50px]">
                                <FeaturedNewsSection />
                            </div> */}

                        </div>
                        {/* Frame 1410119326  */}

                        {/* <div className="flex flex-col w-[1547.5px] h-[1233.0208px] ">

            </div> */}
                        {/* Frame 1410119444  */}
                        {/* <div className="relative flex flex-col w-[1290px] h-[709px] py-[10px] px-[160px] gap-[27px] "> */}
                        {/* Industry Featured News Section 2 */}
                        {/* <FeaturedNewsSection /> */}

                        {/* <FeaturedNewsCard item={item} /> */}
                        {/* </div> */}

                    </div>

                    {/* Frame 1410119440  */}
                    {/* <div className="flex flex-col w-[1290px] h-[717px] py-[10px] px-[160px] gap-[10px]">
            
          </div> */}

                </div>

                {/* Industry Section 2 */}

                {/* <Footer /> */}



            </div>



















        </div>
        // </div>
    )
}

export default Industries