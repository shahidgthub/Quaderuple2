"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import mobile from "../../../public/images/mobile.png";
import mobile2 from "../../../public/images/mobile2.png";
import mobile3 from "../../../public/images/mobile3.png";
import mobile4 from "../../../public/images/mobile4.png";

const SimpleSlider = () => {
  const settings = {
    dots: true,          // Show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
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
    <Slider {...settings} className='-top-24'>
      <div className="flex items-center justify-center">
        <Image
          src={mobile}
          className="w-[297px] h-[297px] object-cover"
          alt="Mobile 1"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={mobile2}
          className="w-[297px] h-[297px] object-cover"
          alt="Mobile 2"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={mobile3}
          className="w-[297px] h-[297px] object-cover"
          alt="Mobile 3"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={mobile4}
          className="w-[297px] h-[297px] object-cover"
          alt="Mobile 4"
        />
      </div>
    </Slider>
  );
};

export default SimpleSlider;
