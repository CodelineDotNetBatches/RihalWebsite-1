import React from 'react'
import HeroTitle from './HeroSection/HeroTitle'
import HeroEmp from './HeroSection/HeroEmp'
import HeroDescrption from './HeroSection/HeroDescrption'
import HeroSearch from './HeroSection/HeroSearch'

const Products = () => {
  return (
    <div
      className="px-[238px] pt-[196px] pb-[375px] flex flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/5.png')" }}
    >
      
       <HeroTitle />
       <HeroEmp />
       <HeroDescrption />
       <HeroSearch />
      
    </div>
  )
}

export default Products
