
import React from 'react'
import Workslider from './Workslider'
import Image from 'next/image'
import { Star } from '../../../public/Icons/icons'

export const Project = () => {
  return (
    <>
    
      <section className='bg-[#2B2B2B] bg-no-repeat relative xl:mt-24 mt-12 z-10 py-6'>
    <div className='container mx-auto px-5'>
      <Star className='text-[#448C74] w-[35px] h-[35px] absolute lg:left-32 md:left-24 left-6 lg:mt-10 mt-5'/>
      <Star className='absolute  text-[#448C74] w-[35px] h-[35px] lg:right-32 md:right-24 right-6 lg:mt-10 mt-5'/>
      <h1 className='text-white lg:text-[40px] text-center py-6'> Our
        <span className='bg-hero-newbg bg-cover w-[206px] text-center lg:text-6xl px-4  rounded-2xl text-white '>Best Work</span> of<br/> Successful Projects</h1>
        </div>
        <Workslider/>
    </section>
    
    
    </>
  )
}


