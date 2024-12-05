import React from 'react'
 import Image from 'next/image'
 import image1 from '../../../public/images/Aiservice.png'
  import image2 from "../../../public/images/block.png"
  import image3 from "../../../public/images/web.png"
  import image4 from "../../../public/images/Dvop.png"
  import image5 from "../../../public/images/Security.png"
  import image6 from "../../../public/images/Aws.png"






import { GoArrowUpRight } from "react-icons/go";

const Service = () => {
  return (
    <div className='container pt-6 mx-auto'>
      <h1 className='text-center text-[40px] font-bold'>Our <span className='bg-hero-newbg bg-cover w-[206px] text-center uppercase lg:text-6xl px-4  rounded-2xl text-white '> Sevice</span></h1>
      <p className='font-semibold text-center'>Discover Our Core Services</p>
      {/* start */}
      <div className='flex flex-wrap gap-8 pt-8 lg:flex-nowrap'>
                {/* 1stdiv */}

          <div className='bg-black xl:w-[400px] lg:w-[380px]  md:w-[360px] xl:sm:w-[340px] w-[310px] h-[450px] rounded-2xl rotate-3'>
              <div className='bg-[#F7F7F7] xl:w-[400px] lg:w-[380px] md:w-[360px] xl:sm:w-[340px] w-[310px] h-[450px] rounded-2xl -rotate-2 '>
              <div className='flex items-center justify-center xl:py-12 py-8'>
                  <Image src={image1} className/>
                </div>
                <p className='text-center text-[#2B2B2B] font-bold text-[26px]'>Ai Service</p>


                <p className='px-5 py-6 font-normal text-center'>Unlock the power of Artificial Intelligence (AI) with our comprehensive suite of services</p>
          <div className='flex justify-between px-5 py-24'>
            <p className='font-bold text-[18px]'>See more</p>
            <span className='flex items-center justify-center w-12 h-12 text-white bg-black rounded-full'>
            <GoArrowUpRight className=' w-[24px] h-[24px] '/></span> </div>
              </div>
              </div>
              {/* 2nddiv */}
              <div className='bg-black xl:w-[400px] lg:w-[380px] md:w-[360px] xl:sm:w-[340px] w-[310px] h-[450px] rounded-2xl rotate-3'>
              <div className='bg-[#F7F7F7] xl:w-[400px]  lg:w-[380px] md:w-[360px] xl:sm:w-[340px] w-[310px] h-[450px] rounded-2xl -rotate-2 '>
              <div className='flex items-center justify-center xl:py-12 py-8'>
                  <Image src={image2} className/>
                </div>
                <p className='text-center text-[#2B2B2B] font-bold text-[26px]'>Blockchain Development</p>


                <p className='px-5 py-6 font-normal text-center'>The groundbreaking potential of Blockchain technology is a core belief at Quadruple.</p>
          <div className='flex justify-between px-5 lg:py-24'>
            <p className='font-bold text-[18px]'>See more</p>
            <span className='flex items-center justify-center w-12 h-12 text-white bg-black rounded-full'>
            <GoArrowUpRight className=' w-[24px] h-[24px] '/></span> </div>
              </div>
              </div>
              {/* 3div */}
              <div className='bg-black xl:w-[400px] lg:w-[380px] md:w-[360px] xl:sm:w-[340px] w-[310px] h-[450px] rounded-2xl rotate-3'>
              <div className='bg-[#F7F7F7] xl:w-[400px] lg:w-[380px]  md:w-[360px] xl:sm:w-[340px] w-[310px] h-[450px] rounded-2xl -rotate-2 '>
              <div className='flex items-center justify-center lg:py-12 py-8'>
                  <Image src={image3} className/>
                </div>
                <p className='text-center text-[#2B2B2B] font-bold text-[26px]'>WebDevelopment</p>


                <p className='px-5 py-6 font-normal text-center'>At Quadtruple Solutions, we craft web applications that seamlessly blend cutting-edge technology with creative innovation, ensuring 
                simplicity, effectiveness, and captivation for your users.</p>
          <div className='flex justify-between px-5 lg:py-12'>
            <p className='font-bold text-[18px]'>See more</p>
            <span className='flex items-center justify-center w-12 h-12 text-white bg-black rounded-full'>
            <GoArrowUpRight className=' w-[24px] h-[24px] '/></span> </div>
              </div>
              </div></div>
              {/* Last */}
              <div className='flex flex-wrap gap-8 pt-12 lg:flex:nowrap '>
              <div className='bg-black xl:w-[400px] lg:w-[380px] md:w-[360px] xl:sm:w-[340px] w-[310px] h-[450px] rounded-2xl rotate-3'>
              <div className='bg-[#F7F7F7] xl:w-[400px] lg:w-[380px] md:w-[360px] xl:sm:w-[340px] w-[310px] h-[450px] rounded-2xl -rotate-2 '>
              <div className='flex items-center justify-center xl:py-10 py-8'>
                  <Image src={image4} className/>
                </div>
                <p className='text-center text-[#2B2B2B] font-bold text-[26px]'>DevOps Service</p>


                <p className='px-5 py-10 font-normal text-center'>Quadruple offers comprehensive DevOps services
                 to streamline and enhance your development and operations processes.</p>
          <div className='flex justify-between px-5 lg:py-12'>
            <p className='font-bold text-[18px]'>See more</p>
            <span className='flex items-center justify-center w-12 h-12 text-white bg-black rounded-full'>
            <GoArrowUpRight className=' w-[24px] h-[24px] '/></span> </div>
              </div>
              </div>
        {/* 2nd */}
        <div className='bg-black xl:w-[400px] lg:w-[380px] md:w-[360px] xl:sm:w-[340px] w-[310px]  h-[450px] rounded-2xl rotate-3'>
              <div className='bg-[#F7F7F7] xl:w-[400px] lg:w-[380px] md:w-[360px] xl:sm:w-[340px] w-[310px]  h-[450px] rounded-2xl -rotate-2 '>
              <div className='flex items-center justify-center xl:py-10 py-8'>
                  <Image src={image5} className/>
                </div>
                <p className='text-center text-[#2B2B2B] font-bold text-[26px]'>Web/Cyber Security</p>


                <p className='px-5 py-10 font-normal text-center'>Quadruple offers comprehensive 
                DevOps services to streamline and enhance your development and operations processes.</p>
          <div className='flex justify-between px-5 lg:py-12'>
            <p className='font-bold text-[18px]'>See more</p>
            <span className='flex items-center justify-center w-12 h-12 text-white bg-black rounded-full'>
            <GoArrowUpRight className=' w-[24px] h-[24px] '/></span> </div>
              </div>
              </div>
        {/* 3rd */}
        <div className='bg-black xl:w-[400px] lg:w-[380px] md:w-[360px] xl:sm:w-[340px] w-[310px] h-[450px] rounded-2xl rotate-3'>
              <div className='bg-[#F7F7F7] xl:w-[400px]  lg:w-[380px] md:w-[360px] xl:sm:w-[340px] w-[310px] h-[450px] rounded-2xl -rotate-2 '>
              <div className='flex items-center justify-center xl:py-10 py-8'>
                  <Image src={image6} className/>
                </div>
                <p className='text-center text-[#2B2B2B] font-bold text-[26px]'>AWS Services</p>


                <p className='px-5 py-10 font-normal text-center'>Unlock the full potential of cloud computing with Quadruple's
                 AWS services, delivering unparalleled scalability, reliability, and innovation.</p>
          <div className='flex justify-between px-5 lg:py-12'>
            <p className='font-bold text-[18px]'>See more</p>
            <span className='flex items-center justify-center w-12 h-12 text-white bg-black rounded-full'>
            <GoArrowUpRight className=' w-[24px] h-[24px] '/></span> </div>
              </div>
              </div>
            

              
    </div>
    </div>
    
  )
}


export default Service