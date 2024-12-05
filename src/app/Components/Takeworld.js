import React from 'react'
import { Star } from '../../../public/Icons/icons'
import Image from 'next/image'
import newyork from '../../../public/images/NewYork.jpg'
import london from '../../../public/images/London.jpg'
import singha from '../../../public/images/singhaphor.jpg'
import bgteam from '../../../public/images/bgteam.png'
import bgteam2 from '../../../public/images/bgteam2.png'
import bgteam3 from '../../../public/images/bgteam3.png'
import bgteam4 from '../../../public/images/bg-team4.png'
import baber from '../../../public/images/BaberAzam2.jpg'
import Fakhar from '../../../public/images/Fakhar.jpg'
import Shaheen from '../../../public/images/Shaheen.jpg'
import Haris from '../../../public/images/HarisRauf.jpg'
import Autoplay from './AutoPlay'
const Takeworld = () => {
  return (
    <>
    <section className="bg-[#2B2B2B] xl:mt-24 mt-12 py-6">
        <div className="container mx-auto relative px-4">
          {/* Star Icons */}
          <Star className="absolute left-4 lg:left-32 top-10" />
          <Star className="absolute right-4 lg:right-32 top-10" />

          {/* Heading */}
          <h1 className="text-white text-center text-2xl lg:text-4xl py-6">
            Take on the <br />
            <span className="bg-hero-newbg bg-cover w-[206px] text-center lg:text-6xl px-2  rounded-2xl text-white ">world </span> with us
          </h1>
          {/* CardSection */}
          <div className='flex  lg:flex-nowrap flex-wrap gap-8'>
          <div className="bg-[#333333] w-full max-w-xs lg:max-w-sm rounded-2xl">
              <div className="px-6 pt-4">
                <Image src={newyork} alt="New york" className="w-full h-auto object-cover rounded-lg" />
                <p className="text-2xl text-white py-2"> New York</p>
                <p className="text-white py-2">
                  Pleasanton, California – 6701 Koll Center Parkway, #250 Pleasanton, CA 94566
                </p>
                <p className="text-white py-2">Tel: +1 408 365 4638</p>
              </div>
            </div>
            {/* 2 */}
            <div className="bg-[#333333] w-full max-w-xs lg:max-w-sm rounded-2xl">
              <div className="px-6 pt-4">
                <Image src={london} alt="New york" className="w-full h-auto object-cover rounded-lg" />
                <p className="text-2xl text-white py-2"> London</p>
                <p className="text-white py-2">
                  Pleasanton, California – 6701 Koll Center Parkway, #250 Pleasanton, CA 94566
                </p>
                <p className="text-white py-2">Tel: +1 408 365 4638</p>
              </div>
            </div>
            {/* 3 */}
            <div className="bg-[#333333] w-full max-w-xs lg:max-w-sm rounded-2xl">
              <div className="px-6 pt-4">
                <Image src={singha} alt="New york" className="w-full h-auto object-cover rounded-lg" />
                <p className="text-2xl text-white py-2"> Singhaphor</p>
                <p className="text-white py-2">
                  Pleasanton, California – 6701 Koll Center Parkway, #250 Pleasanton, CA 94566
                </p>
                <p className="text-white py-2">Tel: +1 408 365 4638</p>
              </div>
            </div>
          </div>
         
          </div>
          </section>
         
        
          
        <section className='mt-12'>
          <div className=' container mx-auto'>
            <h1 className='text-center text-[40px] py-6'>Our <span className=' bg-hero-newbg bg-cover w-[206px] text-center lg:text-6xl px-4  
            rounded-2xl text-white'>Team</span></h1>
            {/* <div className='flex gap-4 pt-6 lg:flex-nowrap flex-wrap'> */}
            <Autoplay/>
              {/* new */}
{/* <div className='items-center justify-center flex'>
                <Image src={baber} className='w-[311px]  h-[352px] rounded-3xl'/>
              
              <div className='bg-[#000000B2] w-[311px] h-[69px] opacity-2  absolute mt-72 rounded-3xl'>
                <p className='text-center text-white text-[20px] font-bold pt-3'>BaberAzam</p>
                <p className='text-center text-white text-[16px]'>CApton (Batting)</p>

              </div>
              </div> */}
            {/* new2 */}
            {/* <div className='items-center justify-center flex'>
                <Image src={Fakhar} className='w-[311px]  h-[352px] rounded-3xl'/>
              
              <div className='bg-[#000000B2] w-[311px] h-[69px] opacity-2  absolute mt-72 rounded-3xl'>
                <p className='text-center text-white text-[20px] font-bold pt-3'>Fakhar Zaman</p>
                <p className='text-center text-white text-[16px]'>Batting</p>

              </div>
              </div> */}
              {/* new3 */}
              {/* <div className=' items-center justify-center flex'>
                <Image src={Shaheen} className='w-[311px]  h-[352px] rounded-3xl'/>
              
              <div className='bg-[#000000B2] w-[311px] h-[69px] opacity-2  absolute mt-72 rounded-3xl'>
                <p className='text-center text-white text-[20px] font-bold pt-3'>Shaheen Afridi</p>
                <p className='text-center text-white text-[16px]'>Bowler</p>

              </div>
              </div>  */}
                           {/* new4 */}
                           {/* <div className=' items-center justify-center flex'>
                <Image src={Haris} className='w-[311px]  h-[352px] rounded-3xl'/>
              
              <div className='bg-[#000000B2] w-[311px] h-[69px] opacity-2  absolute mt-72 rounded-3xl'>
                <p className='text-center text-white text-[20px] font-bold pt-3'>HarisRauf</p>
                <p className='text-center text-white text-[16px]'>Bowler</p>

              </div>
              </div> */}
            {/* </div> */}
        
              
              

            </div>
            


        

        </section>
        </>
          
  )
}

export default Takeworld