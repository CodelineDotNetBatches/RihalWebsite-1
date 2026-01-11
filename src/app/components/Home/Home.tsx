import React from 'react'
import HeroA from './HeroSection/HeroA'
import HeroB from './HeroSection/HeroB'
import { FAQSection } from './FAQ'
import { FeaturedNewsSection } from './FeaturedNews'
import ProofOfInspect from './ProofOfInspect/ProofOfInspect'

function Home() {
  return (
    <div>
      <HeroA/>
      <HeroB/>
      <ProofOfInspect/>
      
      <FeaturedNewsSection/>
      <FAQSection/>
      

      
    </div>
  )
}

export default Home
