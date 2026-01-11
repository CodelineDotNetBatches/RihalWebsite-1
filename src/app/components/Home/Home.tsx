import React from 'react'
import HeroA from './HeroSection/HeroA'
import HeroB from './HeroSection/HeroB'
import { FAQSection } from './FAQ'
import { FeaturedNewsSection } from './FeaturedNews'

function Home() {
  return (
    <div>
      <HeroA/>
      <HeroB/>
      
      <FeaturedNewsSection/>
      <FAQSection/>
      

      
    </div>
  )
}

export default Home
