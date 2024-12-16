'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import work from '../../../public/images/newWork.jpg';
import work2 from '../../../public/images/newWork2.jpg'; // Ensure this is imported


  export default function SimpleSlider() {
    var settings = {
      dots: true,
      arrow:true,
      infinite: true,
      speed: 500,
      slidesToShow:2 ,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 1024, // Adjust for tablets
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768, // Adjust for mobile
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  return (
    <Slider {...settings}>
      {/* slider1 */}
        <div className=" px-6">
        <div className='bg-[#333333] xl:w-[600px] lg:w-[550px] md:w-[500px] w-[310px] h-[500px]  rounded-2xl'>
               <p className=' text-white px-12 font-bold py-2'>01</p>
               <div className='px-12'>
             <Image
               src={work}
               alt="Work Image 1"
             className="w-[full] xl:h-[300px]  object-cover rounded-2xl "

           />
             </div>
            
            <h1 className='px-12 font-bold text-[20px] text-white py-2'>Product Data</h1>
           <p className='text-white px-12'>A Platform that connects design and construction professionals with product,
              manufacturers, and suppliers in a convenient and user-friendly platform.</p>
             </div>
             </div>
             {/* new */}
             <div className="px-6">
             <div className='bg-[#333333] xl:w-[600px] lg:w-[550px] md:w-[500px] w-[310px] h-[500px] rounded-2xl '>
               <p className=' text-white px-12 font-bold py-2'>01</p>
               <div className='px-12'>
             <Image
               src={work2}
               alt="Work Image 1"
             className="w-[full] xl:h-[300px]  object-cover rounded-2xl "

           />
             </div>
            
            <h1 className='px-12 font-bold text-[20px] text-white py-2'>Product Data</h1>
           <p className='text-white px-12'>A Platform that connects design and construction professionals with product,
              manufacturers, and suppliers in a convenient and user-friendly platform.</p>
        </div>

             </div>
      {/* slider2 */}
      <div className="px-6">
      <div className='bg-[#333333] xl:w-[600px] lg:w-[550px] md:w-[500px] w-[310px] h-[500px]  rounded-2xl'>
               <p className=' text-white px-12 font-bold py-2'>01</p>
               <div className='px-12'>
             <Image
               src={work}
               alt="Work Image 1"
             className="w-[full] xl:h-[300px]  object-cover rounded-2xl "

           />
             </div>
            
            <h1 className='px-12 font-bold text-[20px] text-white py-2'>Product Data</h1>
           <p className='text-white px-12'>A Platform that connects design and construction professionals with product,
              manufacturers, and suppliers in a convenient and user-friendly platform.</p>
             </div>
      </div>
      <div className="px-6">      
      <div className='bg-[#333333] xl:w-[600px] lg:w-[550px] md:w-[500px] w-[310px] h-[500px] rounded-2xl '>
               <p className=' text-white px-12 font-bold py-2'>01</p>
               <div className='px-12'>
             <Image
               src={work2}
               alt="Work Image 1"
             className="w-[full] xl:h-[300px]   object-cover rounded-2xl "

           />
             </div>
            
            <h1 className='px-12 font-bold text-[20px] text-white py-2'>Product Data</h1>
           <p className='text-white px-12'>A Platform that connects design and construction professionals with product,
              manufacturers, and suppliers in a convenient and user-friendly platform.</p>
        </div>
          
      
      </div>
        
      
   
    </Slider>
  );
}
// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";
// import work from "../../../public/images/newWork.jpg";
// import work2 from "../../../public/images/newWork2.jpg";

// function Slider() {
//   return (
//     <Carousel>
//       <CarouselContent>
//         {/* Slide 1 */}
//         <CarouselItem className="basis-1/2">
//             {/* Card 1 */}
//             <div className="bg-[#333333] w-[647px] h-[500px] rounded-2xl">
//               <p className="text-white px-12 font-bold py-2">01</p>
//               <div className="px-12">
//                 <Image
//                   src={work}
//                   alt="Work Image 1"
//                   className="w-full h-[300px] object-cover rounded-2xl"
//                 />
//               </div>
//               <h1 className="px-12 font-bold text-[20px] text-white py-2">
//                 Product Data
//               </h1>
//               <p className="text-white px-12">
//                 A Platform that connects design and construction professionals
//                 with product, manufacturers, and suppliers in a convenient and
//                 user-friendly platform.
//               </p>
//             </div>
//             {/* Card 2 */}
//             <div className="bg-[#333333] w-[647px] h-[500px] rounded-2xl">
//               <p className="text-white px-12 font-bold py-2">02</p>
//               <div className="px-12">
//                 <Image
//                   src={work2}
//                   alt="Work Image 2"
//                   className="w-full h-[300px] object-cover rounded-2xl"
//                 />
//               </div>
//               <h1 className="px-12 font-bold text-[20px] text-white py-2">
//                 Product Data
//               </h1>
//               <p className="text-white px-12">
//                 A Platform that connects design and construction professionals
//                 with product, manufacturers, and suppliers in a convenient and
//                 user-friendly platform.
//               </p>
//             </div>
          
//         </CarouselItem>
//         {/* Slide 2 */}
//         <CarouselItem className="basis-1/2">
//             {/* Card 1 */}
//             <div className="bg-[#333333] xl:w-[647px] lg:w-[600px] md:w-[500px] sm:w-[300px] h-[500px] rounded-2xl">
//               <p className="text-white px-12 font-bold py-2">03</p>
//               <div className="px-12">
//                 <Image
//                   src={work}
//                   alt="Work Image 1"
//                   className="w-full h-[300px] object-cover rounded-2xl"
//                 />
//               </div>
//               <h1 className="px-12 font-bold text-[20px] text-white py-2">
//                 Product Data
//               </h1>
//               <p className="text-white px-12">
//                 A Platform that connects design and construction professionals
//                 with product, manufacturers, and suppliers in a convenient and
//                 user-friendly platform.
//               </p>
//             </div>
//             {/* Card 2 */}
//             <div className="bg-[#333333] xl:w-[647px] h-[500px] rounded-2xl">
//               <p className="text-white px-12 font-bold py-2">04</p>
//               <div className="px-12">
//                 <Image
//                   src={work2}
//                   alt="Work Image 2"
//                   className="w-full h-[300px] object-cover rounded-2xl"
//                 />
//               </div>
//               <h1 className="px-12 font-bold text-[20px] text-white py-2">
//                 Product Data
//               </h1>
//               <p className="text-white px-12">
//                 A Platform that connects design and construction professionals
//                 with product, manufacturers, and suppliers in a convenient and
//                 user-friendly platform.
//               </p>
//             </div>
//         </CarouselItem>
//       </CarouselContent>
//       <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700 z-50" />
//       <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700 z-50" />
//     </Carousel>
//   );
// }

// export default Slider;


