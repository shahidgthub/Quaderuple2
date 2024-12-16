import React from 'react'
import Image from 'next/image'
import Article from '../../../public/images/AiTecchnology.jpg'
import Article2 from '../../../public/images/CyberSecurity.jpg'
import Article3 from '../../../public/images/Article3.png'


import articleshort from '../../../public/images/Article.png'



const Blog = () => {
  return (
      
          <div className='container mx-auto xl:pt-24 pt-12 '>
              <h1 className='xl:text-6xl text-4xl text-center'>Our  <span className='bg-hero-newbg bg-cover w-[206px] text-center xl:text-6xl text-4xl px-4  rounded-2xl text-white '>Article</span></h1>
              <p className='text-center py-6'>Discover Our latest blog and news</p>
              {/* parent */}
              <div className='flex gap-8 lg:flex-nowrap flex-wrap py-6 lg:justify-start justify-center'>
              <div className='bg-[#F7F7F7] xl:w-[420px] lg:w-[400px] md:w-[360px] w-[310px]  h-[520px] rounded-xl px-3 py-6'>
          <Image src={Article} className='xl:w-[395px] lg:w-[360px] md:w-[340px] w-[310px]  h-[260px] rounded-2xl'/>
          <button className='bg-[#00A87D] text-white rounded-2xl h-[32px] w-[126px] mt-3'>Technology</button>
          <p className='xl:text-[22px] text-[16px] font-bold py-2'>Google launches Cloud AI Platform Pipelines</p>
          <p className='text-[14px]'>Richard Thomas was born in 1990, and at only 29 years old, his trajectory is good.
             When he is asked how he describes</p>
             <div className='flex justify-between py-4'>
               <div className='flex space-x-3'>
               <Image src={articleshort} alt='img' className='h-[28px] w-[28px] rounded-full'/>
               <p className='font-semibold'>James Curran</p>
               </div>
               <p className='font-semibold'>Dec 29, 2023</p></div>
               </div>
               <div className='bg-[#F7F7F7] xl:w-[420px]   lg:w-[400px] md:w-[360px] w-[310px] h-[520px] rounded-xl px-3 py-6'>
          <Image src={Article2} className='xl:w-[395px]  lg:w-[360px] md:w-[340px] w-[310px] h-[260px] rounded-2xl'/>
          <button className='bg-[#9DFF50]  rounded-2xl h-[32px] w-[126px] mt-3'>Technology</button>
          <p className='text-[22px] font-bold py-2'>Google launches Cloud AI Platform Pipelines</p>
          <p className='text-[14px] '>Richard Thomas was born in 1990, and at only 29 years old, his trajectory is good.
             When he is asked how he describes</p>
             <div className='flex justify-between py-4'>
               <div className='flex space-x-3'>
               <Image src={articleshort}  alt='img' className='h-[28px] w-[28px] rounded-full'/>
               <p className='font-semibold'>James Curran</p>
               </div>
               <p className='font-semibold'>Dec 29, 2023</p>

             </div>
        </div>
        <div className='bg-[#F7F7F7] xl:w-[420px]  lg:w-[400px] md:w-[360px] w-[310px] h-[520px] rounded-xl px-3 py-6'>
          <Image src={Article3} className='xl:w-[395px] lg:w-[360px] md:w-[340px] w-[310px]  h-[260px]'/>
          <button className='bg-[#2B2B2B] text-white  rounded-2xl h-[32px] w-[126px] mt-3'>Technology</button>
          <p className='text-[22px] font-bold py-2'>Google launches Cloud AI Platform Pipelines</p>
          <p className='text-[14px] '>Richard Thomas was born in 1990, and at only 29 years old, his trajectory is good.
             When he is asked how he describes</p>
             <div className='flex justify-between py-4'>
               <div className='flex space-x-3'>
               <Image src={articleshort} alt='img' className='h-[28px] w-[28px] rounded-full'/>
               <p className='font-semibold'>James Curran</p>
               </div>
               <p className='font-semibold'>Dec 29, 2023</p>

             </div>
        </div>
                  
              </div>
              {/* takeworld */}
              

          </div>
      
    
  )
}

export default Blog