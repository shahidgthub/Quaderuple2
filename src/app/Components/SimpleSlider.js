"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import home from "../../../public/images/Home.jpg";
import home2 from "../../../public/images/Home2.jpg";
import home3 from "../../../public/images/Home3.jpg";
import home4 from "../../../public/images/Home4.jpg";

const SimpleSlider = () => {
  const settings = {
    dots: true,          // Show navigation dots
    infinite: true,      // Enable infinite scrolling
    speed: 500,
    slidesToShow: 3,     // Number of visible slides
    slidesToScroll: 1,   // Scroll one slide at a time
    centerMode: true,    // Center active slide
    centerPadding: "0px",
    arrows: false,       // Hide the navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="-top-32">
      <div className="px-8">
        <Image
          src={home}
          className="w-[397px] h-[297px] object-cover rounded-2xl"
          alt="Image 1"
        />
      </div>
      <div className="px-8">
        <Image
          src={home2}
          className="w-[397px] h-[297px] object-cover rounded-2xl "
          alt="Image 2"
        />
      </div>
      <div className="px-8">
        <Image
          src={home3}
          className="w-[397px] h-[297px] object-cover rounded-2xl"
          alt="Image 3"
        />
      </div>
      <div className="px-8">
        <Image
          src={home4}
          className="w-[397px] h-[297px] object-cover rounded-2xl"
          alt="Image 4"
        />
      </div>
    </Slider>
  );
};

export default SimpleSlider;
