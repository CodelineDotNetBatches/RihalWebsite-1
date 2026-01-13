import React from 'react'
import HeroA from './HeroSection/HeroA'
import HeroB from './HeroSection/HeroB'
import { FAQSection } from './FAQ'
import { FeaturedNewsSection } from './FeaturedNews'
import ProofOfInspect from './ProofOfInspect/ProofOfInspect'
import CaseStudies from '../SharedComponents/CaseStudies/CaseStudies'

function Home() {
  return (
    <div>
      <HeroA/>
      <HeroB/>
      <ProofOfInspect/>
      <CaseStudies/>
      
      <FeaturedNewsSection/>
      <FAQSection/>
      

      
    </div>
  )
}

export default Home
