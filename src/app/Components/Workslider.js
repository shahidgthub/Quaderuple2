// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
 // <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
    //   {/* Carousel Container */}
    //   <Carousel className="flex ">
    //     <CarouselContent className="flex">
    //       <CarouselItem className="flex gap-8 justify-center items-center">
    //         <div className='bg-[#333333] w-[647px] h-[500px] '>
    //           <p className=' text-white px-12 font-bold py-2'>01</p>
    //           <div className='px-12'>
    //         <Image
    //           src={work}
    //           alt="Work Image 1"
    //           className="w-[591px]  object-cover rounded-2xl "

    //         />
    //         </div>
            
    //         <h1 className='px-12 font-bold text-[20px] text-white py-2'>Product Data</h1>
    //         <p className='text-white px-12'>A Platform that connects design and construction professionals with product,
    //          manufacturers, and suppliers in a convenient and user-friendly platform.</p>
    //         </div>
    //         {/* 2 */}
    //         <div className='bg-[#333333] w-[647px] h-[500px] '>
    //           <p className=' text-white px-12 font-bold py-2'>02</p>
    //           <div className='px-12'>
    //         <Image
    //           src={work2}
    //           alt="Work Image 1"
    //           className="w-[591px]  object-cover rounded-2xl "

    //         />
    //         </div>
            
    //         <h1 className='px-12 font-bold text-[20px] text-white py-2'>Web Development</h1>
    //         <p className='text-white px-12'>A Platform that connects design and construction professionals with product,
    //          manufacturers, and suppliers in a convenient and user-friendly platform.</p>
    //         </div>
            
            
    //       </CarouselItem>
    //       <CarouselItem className="flex gap-8  justify-center items-center">
    //       <div className='bg-[#333333] bg-no-repeat w-[647px] h-[500px] '>
    //           <p className=' text-white px-12 font-bold py-2'>01</p>
    //           <div className='px-12'>
    //         <Image
    //           src={work}
    //           alt="Work Image 1"
    //           className="w-[591px]  object-cover rounded-2xl "

    //         />
    //         </div>
            
    //         <h1 className='px-12 font-bold text-[20px] text-white py-2'>Product Data</h1>
    //         <p className='text-white px-12'>A Platform that connects design and construction professionals with product,
    //          manufacturers, and suppliers in a convenient and user-friendly platform.</p>
    //         </div>
    //         {/* 2 */}
    //         <div className='bg-[#333333] w-[647px] h-[500px] '>
    //           <p className=' text-white px-12 font-bold py-2'>02</p>
    //           <div className='px-12'>
    //         <Image
    //           src={work2}
    //           alt="Work Image 1"
    //           className="w-[591px]  object-cover rounded-2xl "

    //         />
    //         </div>
            
    //         <h1 className='px-12 font-bold text-[20px] text-white py-2'>Web Development</h1>
    //         <p className='text-white px-12'>A Platform that connects design and construction professionals with product,
    //          manufacturers, and suppliers in a convenient and user-friendly platform.</p>
    //         </div>
    //       </CarouselItem>
    //     </CarouselContent>

    //     {/* Previous Arrow */}
    //     <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-50 bg-opacity-50 p-2 rounded-full">
    //       <FaArrowLeft className="text-white" />
    //     </CarouselPrevious>

    //     {/* Next Arrow */}
    //     <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-50 bg-opacity-50 p-2 rounded-full">
    //       <FaArrowRight className="text-white" />
    //     </CarouselNext>
    //   </Carousel>
    // </div>
'use client';


import React, { useState } from 'react';
import Image from 'next/image';
import work from '../../../public/images/newWork.jpg';
import work2 from '../../../public/images/newWork2.jpg';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const Workslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    [
      {
        id: 1,
        image: work,
        title: "01",
        heading: "Product Data",
        description:
          "A Platform that connects design and construction professionals with product, manufacturers, and suppliers in a convenient and user-friendly platform.",
        head: 'Product Data',
      },
      {
        id: 2,
        image: work2,
        title: "02",
        description:
          "We start by getting to know our clients, their business goals, and their target audience.",
        head: 'Web Development',
      },
    ],
    [
      {
        id: 3,
        image: work,
        title: "03",
        description:
          "A Platform that connects design and construction professionals with product, manufacturers, and suppliers in a convenient and user-friendly platform.",
        head: 'Product Data',
      },
      {
        id: 4,
        image: work2,
        title: "04",
        description:
          "We start by getting to know our clients, their business goals, and their target audience.",
        head: "Web Development",
      },
    ],
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
   

    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
  {/* Carousel Content */}
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {slides.map((slide, index) => (
      <div
        key={index}
        className="min-w-full flex flex-wrap justify-center gap-6 px-4"
      >
        {slide.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[48%] lg:w-[45%] bg-[#333333] rounded-3xl text-white p-6"
          >
            <h1 className="text-xl font-bold">{item.title}</h1>
            <Image
              src={item.image}
              alt={item.title}
              className="mt-4 w-full h-[300px] rounded-md object-cover"
            />
            <h2 className="text-lg lg:text-[24px] py-4">{item.head}</h2>
            <p className="text-sm lg:text-base">{item.description}</p>
          </div>
        ))}
      </div>
    ))}
  </div>

  {/* Previous Button */}
  <button
    onClick={handlePrevious}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white mt-4 border border-green-800 rounded-full w-10 h-10 z-50 flex items-center justify-center"
    aria-label="Previous"
  >
    <FaArrowLeft className="text-lg" />
  </button>

  {/* Next Button */}
  <button
    onClick={handleNext}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-green-800 mt-4 rounded-full w-10 h-10 z-50 flex items-center justify-center"
    aria-label="Next"
  >
    <FaArrowRight className="text-lg" />
  </button>
</div>

  );
};

export default Workslider;
