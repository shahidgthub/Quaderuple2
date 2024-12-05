"use client";
import React from 'react'; // Only this import is needed
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from 'next/image';
import baber from '../../../public/images/BaberAzam2.jpg';
import Fakhar from '../../../public/images/Fakhar.jpg';
import Shaheen from '../../../public/images/Shaheen.jpg';
import Haris from '../../../public/images/HarisRauf.jpg';

const Autoplay = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,  // Default slides to show (for larger screens)
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px (tablets and small laptops)
        settings: {
          slidesToShow: 3, // Show 3 slides on tablets
        }
      },
      {
        breakpoint: 768, // For screens smaller than 768px (mobile devices)
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className='items-center justify-center flex'>
            <Image src={baber} className='w-[311px] h-[352px] rounded-3xl' alt="Baber Azam" />
            <div className='bg-[#000000B2] w-[311px] h-[69px] opacity-2 absolute mt-72 rounded-3xl'>
              <p className='text-center text-white text-[20px] font-bold pt-3'>Baber Azam</p>
              <p className='text-center text-white text-[16px]'>Captain (Batting)</p>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div>
          <div className='items-center justify-center flex'>
            <Image src={Fakhar} className='w-[311px] h-[352px] rounded-3xl' alt="Fakhar Zaman" />
            <div className='bg-[#000000B2] w-[311px] h-[69px] opacity-2 absolute mt-72 rounded-3xl'>
              <p className='text-center text-white text-[20px] font-bold pt-3'>Fakhar Zaman</p>
              <p className='text-center text-white text-[16px]'>Batting</p>
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div>
          <div className='items-center justify-center flex'>
            <Image src={Shaheen} className='w-[311px] h-[352px] rounded-3xl' alt="Shaheen Afridi" />
            <div className='bg-[#000000B2] w-[311px] h-[69px] opacity-2 absolute mt-72 rounded-3xl'>
              <p className='text-center text-white text-[20px] font-bold pt-3'>Shaheen Afridi</p>
              <p className='text-center text-white text-[16px]'>Bowler</p>
            </div>
          </div>
        </div>
        {/* Slide 4 */}
        <div>
          <div className='items-center justify-center flex'>
            <Image src={Haris} className='w-[311px] h-[352px] rounded-3xl' alt="Haris Rauf" />
            <div className='bg-[#000000B2] w-[311px] h-[69px] opacity-2 absolute mt-72 rounded-3xl'>
              <p className='text-center text-white text-[20px] font-bold pt-3'>Haris Rauf</p>
              <p className='text-center text-white text-[16px]'>Bowler</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Autoplay;
