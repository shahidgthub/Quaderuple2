import React from 'react';
import { Star } from '../../../public/Icons/icons';
import Image from 'next/image';
import mobile from '../../../public/images/mobile.png';
import mobile2 from '../../../public/images/mobile2.png';
import mobile3 from '../../../public/images/mobile3.png';
import mobile4 from '../../../public/images/mobile4.png';

const Home = () => {
  return (
    <>
      <section className="bg-[#2B2B2B] min-h-[606px] relative px-4 py-12 sm:px-6 md:px-8 lg:px-12 bg-no-repeat">
        {/* Stars */}
        <Star className="absolute left-4 top-4 sm:left-6 sm:top-6 lg:left-32 lg:top-10 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
        <Star className="absolute right-4 top-4 sm:right-6 sm:top-6 lg:right-32 lg:top-10 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />

        {/* Content */}
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <p className="text-white font-bold text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] leading-tight">
            <span className="bg-hero-newbg bg-cover lg:w-[457px] uppercase px-4 py-2 rounded-2xl">
              Quadruple
            </span>{" "}
            Solution
          </p>

          {/* Subtitle */}
          <p className="text-white font-bold mt-4 text-[18px] sm:text-[20px] md:text-[28px] lg:text-[36px]">
            Turning Ideas into Digital Success!
          </p>

          {/* Description */}
          <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] py-4">
            At Quadtruple Solutions, we craft web applications that seamlessly blend cutting-edge technology with creative<br />
            innovation, ensuring simplicity, effectiveness, and captivation for your users.
          </p>
        </div>

        {/* Image Section */}
        {/* <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
          <Image src={mobile} className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[297px] lg:h-[297px]" alt="Mobile 1" />
          <Image src={mobile2} className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[297px] lg:h-[297px]" alt="Mobile 2" />
          <Image src={mobile3} className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[297px] lg:h-[297px]" alt="Mobile 3" />
          <Image src={mobile4} className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[297px] lg:h-[297px]" alt="Mobile 4" />
        </div> */}
      </section>
    </>
  );
};

export default Home;
