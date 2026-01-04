import React from 'react'
import HeroTitle from './HeroSection/HeroTitle'
import HeroEmp from './HeroSection/HeroEmp'
import HeroDescrption from './HeroSection/HeroDescrption'
import HeroSearch from './HeroSection/HeroSearch'
import CompanyCard from './CompanyCard/CompanyCard'

export type ProductCardData = {
  id: number;
  logoImage: string;
  name: string;
  title: string;
  tags: string[];
  bullets: string[];
  highlight: string;
  trustedBy: string[];
  demoHref: string;
  productHref: string;
  mediaSrc: string;
};

const Products: React.FC = () => {
  const cards: ProductCardData[] = [
    {
      id: 1,
      logoImage: "/Images/ProductComponenets/Company_Card_Image/IconContainer.png",
      name: "Siraqi",
      title: "Enterprise AI Platform",
      tags: ["Oil & Gas"],
      bullets: [
        "Smart, secure AI search",
        "Chat & meeting assistant",
        "Workflow automation",
        "Arabic & English support",
        "On-premise, privacy-first deployment",
      ],
      highlight: "Used by 12+ organizations to reduce processing time by 40%",
      trustedBy: [
        "/Images/ProductComponenets/Company_Card_Image/image11.png",
        "/Images/ProductComponenets/Company_Card_Image/image14.png",
        "/Images/ProductComponenets/Company_Card_Image/image12.png",
      ],
      demoHref: "#",
      productHref: "#",
      mediaSrc: "/Images/ProductComponenets/Company_Card_Image/source_Option4.5.png",
    },
    {
      id: 2,
      logoImage: "/Images/ProductComponenets/Company_Card_Image/Layer_1.svg",
      name: "Jadowel",
      title: "Data Collaboration Platform",
      tags: ["Oil & Gas", "Government"],
      bullets: [
        "Capture and manage data through custom forms",
        "Automate approvals and workflows",
        "Analyze data with AI-powered insights",
        "Import from Excel with flexible structures",
        "Track and audit large-scale datasets",
      ],
      highlight: "Manages 5M+ data entries monthly across national data projects",
      trustedBy: [
        "/Images/ProductComponenets/Company_Card_Image/image11.png",
        "/Images/ProductComponenets/Company_Card_Image/image14.png",
        "/Images/ProductComponenets/Company_Card_Image/image12.png",
      ],
      demoHref: "#",
      productHref: "#",
      mediaSrc:
        "/Images/ProductComponenets/Company_Card_Image/08d676bdfde560814b8ee2a14df3e4dce675e60d.png",
    },
    {
      id: 3,
      logoImage: "/Images/ProductComponenets/Company_Card_Image/Layer_1.svg",
      name: "Iqra’a",
      title: "AI Powered Data Extraction",
      tags: ["Oil & Gas", "Telecommunication"],
      bullets: [
        "Automates data capture with OCR",
        "OCR for scanned & digital files",
        "AI rule-based validation",
        "Customizable models",
        "Built-in validation checks",
      ],
      highlight: "Processes over 100K documents with 95% accuracy",
      trustedBy: [
        "/Images/ProductComponenets/Company_Card_Image/image11.png",
        "/Images/ProductComponenets/Company_Card_Image/image14.png",
        "/Images/ProductComponenets/Company_Card_Image/image12.png",
      ],
      demoHref: "#",
      productHref: "#",
      mediaSrc:
        "/Images/ProductComponenets/Company_Card_Image/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png",
    },
  ];
  return (
    <div
      className="
        w-full
        min-h-screen
        bg-[url('/images/5.png')]
        bg-no-repeat
        bg-cover
        bg-center
        px-6 sm:px-[238px]
        pt-6 sm:pt-[196px]
        pb-6 sm:pb-[375px]
        flex flex-col items-center overflow-hidden
        relative
        
      "
    >

   {/* <div className="w-[839.71px] h-[849.89px] bg-teal-600 rounded-full blur-[203.71px] z-0 absolute "></div>
    <div className="w-[873px] h-[838px] bg-teal-600/80 rounded-full blur-[203.71px] z-0 absolute"></div>
    <div className="w-[653.65px] h-[1058.70px] origin-top-left rotate-[112.20deg] bg-gradient-to-bl from-slate-900/50 to-black/0 blur-3xl z-0 absolute"></div>
    <div className="w-[1628px] h-[1639px] bg-gradient-to-br from-teal-600 to-yellow-400/50 rounded-full blur-[203.71px] z-0 absolute"></div>
    <div className="w-[1270.03px] h-[601.72px] origin-top-left rotate-[-7.68deg] bg-gradient-to-bl from-slate-900/90 to-black/0 blur-3xl z-0 absolute"></div>
    <div className="w-[1081.35px] h-[470.50px] origin-top-left rotate-[-15deg] bg-gradient-to-bl from-yellow-400 to-teal-600/0 blur-3xl  z-0 absolute"></div>
    <div className="w-[1520.11px] h-[1490.37px] bg-teal-600/40 rounded-full blur-[203.71px]  z-0 absolute"></div>
*/}
      <div className="flex flex-col flex-wrap items-center w-full gap-6 sm:gap-0">
   
        <div className="w-full sm:max-w-[785px]">
          <HeroTitle />
        </div>

        <div className="w-full sm:max-w-[785px] mt-6 sm:mt-[24px]">
          <HeroEmp />
        </div>

        <div className="w-full sm:max-w-[785px] mt-6 sm:mt-[26px]">
          <HeroDescrption />
        </div>


        <div className="w-full sm:max-w-[500px] mt-6 sm:mt-[45px]">
          <HeroSearch />
        </div>
      </div>

     <div className="flex flex-col gap-13 max-w-7xl mx-auto">
        {cards.map((card) => (
          <CompanyCard key={card.id} data={card} />
        ))}
      </div>
     



    </div>
  )
}

export default Products
