"use client";
import Hero from '../components/Blogs/Hero/Hero'
import HeroB from '../components/Blogs/Hero/HeroB'
import { FAQSection } from '../components/Home/FAQ'
import { FeaturedNewsSection } from '../components/Home/FeaturedNews'
import CTA from '../components/SharedComponents/CTA/CTA'
import Navbar from '../components/SharedComponents/Navbar/Navbar'
import Footer from '../components/SharedComponents/Footer/Footer'
import HeroC from '../components/Blogs/Hero/HeroC'

export default function Blogspage() {
  return (
    <div>
      
            <Navbar />
        <Hero />
<div className="w-screen h-[300px] bg-white rounded-t-[66px] shadow-xl flex items-center justify-center">

      <HeroB />
       
     </div>
        <HeroC />
        <FAQSection/>
        <CTA /> 
        <Footer /> 
    </div>
  )
}
