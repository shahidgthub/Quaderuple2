import React from 'react'
import { Star } from '../../../public/Icons/icons'
import Image from 'next/image'
import mobile from '../../../public/images/mobile.png'
import mobile2 from '../../../public/images/mobile2.png'
import mobile3 from '../../../public/images/mobile3.png'
import mobile4 from '../../../public/images/mobile4.png'

const Home = () => {
  return (
      <>
    <section className="bg-[#2B2B2B] h-[606px] relative px-6 py-12">
    {/* Stars */}
    <Star className="absolute left-6 top-4 lg:left-32 lg:top-10 md:left-24 md:top-6 w-6 h-6 lg:w-10 lg:h-10"/>
    <Star className="absolute right-6 top-4 lg:right-32 lg:top-10 md:right-24 md:top-6 w-6 h-6 lg:w-10 lg:h-10"/>
  
    {/* Content */}
    <div className="max-w-7xl mx-auto">
      {/* Main Heading */}
      <p className="text-white text-center font-bold text-[32px] md:text-[48px] lg:text-[64px] leading-tight">
        <span className="bg-hero-newbg bg-cover lg:w-[457px] text-center uppercase lg:text-6xl px-4  rounded-2xl">
          Quadruple
        </span>{" "}
        Solution
      </p>
  
      {/* Subtitle */}
      <p className="text-center text-[20px] md:text-[28px] lg:text-[36px] font-bold text-white mt-6">
        Turning Ideas into Digital Success!
      </p>
  
      {/* Description */}
      <p className="text-center text-[14px] md:text-[16px] lg:text-[18px] text-white py-6">
        At Quadtruple Solutions, we craft web applications that seamlessly blend cutting-edge technology with creative<br/> 
        innovation, ensuring simplicity, effectiveness, and captivation for your users.
      </p>
      
    </div>
   
    {/* <div className='flex items-center justify-center lg:pt-32 pt-24'>
    <Image src={mobile} className="w-[297px] h-[297px] "/>
    <Image src={mobile2} className="w-[297px] h-[297px]"/>
    <Image src={mobile3} className="w-[297px] h-[297px]"/>
    <Image src={mobile4} className="w-[297px] h-[297px]"/>
    </div> */}
    </section>
   </>
    
  )
}

export default Home