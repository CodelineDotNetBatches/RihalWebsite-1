import React from 'react'
import Hero from './Hero/Hero'
import HeroB from './Hero/HeroB'
import { FAQSection } from '../Home/FAQ'
import { FeaturedNewsSection } from '../Home/FeaturedNews'
import CTA from '../SharedComponents/CTA/CTA'
import HeroC from './Hero/HeroC'

function Blogs() {
  return (
    <div>
          <div className="w-screen h-48  bg-teal-500 rounded-t-[66px] shadow-xl flex items-center justify-center">

            <Hero />
      <HeroB />
      <HeroC />
      
  </div>
   
    </div>
  )
}

export default Blogs
