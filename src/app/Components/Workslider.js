
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
