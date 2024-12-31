// 'use client'
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from 'next/image';
// import work from '../../../public/images/newWork.jpg';
// import work2 from '../../../public/images/newWork2.jpg'; // Ensure this is imported


//   export default function SimpleSlider() {
//     var settings = {
//       dots: true,
//       arrow:true,
//       infinite: true,
//       speed: 500,
//       slidesToShow:2 ,
//       slidesToScroll: 1,

//       responsive: [
//         {
//           breakpoint: 1024, // Adjust for tablets
//           settings: {
//             slidesToShow: 2,
//           },
//         },
//         {
//           breakpoint: 768, // Adjust for mobile
//           settings: {
//             slidesToShow: 1,
//           },
//         },
//       ],
//     };
//   return (
//     <Slider {...settings}>
//       {/* slider1 */}
//         <div className=" px-6">
//         <div className='bg-[#333333] xl:w-[600px] lg:w-[550px] md:w-[500px] w-[310px] h-[500px]  rounded-2xl'>
//                <p className=' text-white px-12 font-bold py-2'>01</p>
//                <div className='px-12'>
//              <Image
//                src={work}
//                alt="Work Image 1"
//              className="w-[full] xl:h-[300px]  object-cover rounded-2xl "

//            />
//              </div>
            
//             <h1 className='px-12 font-bold text-[20px] text-white py-2'>Product Data</h1>
//            <p className='text-white px-12'>A Platform that connects design and construction professionals with product,
//               manufacturers, and suppliers in a convenient and user-friendly platform.</p>
//              </div>
//              </div>
//              {/* new */}
//              <div className="px-6">
//              <div className='bg-[#333333] xl:w-[600px] lg:w-[550px] md:w-[500px] w-[310px] h-[500px] rounded-2xl '>
//                <p className=' text-white px-12 font-bold py-2'>01</p>
//                <div className='px-12'>
//              <Image
//                src={work2}
//                alt="Work Image 1"
//              className="w-[full] xl:h-[300px]  object-cover rounded-2xl "

//            />
//              </div>
            
//             <h1 className='px-12 font-bold text-[20px] text-white py-2'>Product Data</h1>
//            <p className='text-white px-12'>A Platform that connects design and construction professionals with product,
//               manufacturers, and suppliers in a convenient and user-friendly platform.</p>
//         </div>

//              </div>
//       {/* slider2 */}
//       <div className="px-6">
//       <div className='bg-[#333333] xl:w-[600px] lg:w-[550px] md:w-[500px] w-[310px] h-[500px]  rounded-2xl'>
//                <p className=' text-white px-12 font-bold py-2'>01</p>
//                <div className='px-12'>
//              <Image
//                src={work}
//                alt="Work Image 1"
//              className="w-[full] xl:h-[300px]  object-cover rounded-2xl "

//            />
//              </div>
            
//             <h1 className='px-12 font-bold text-[20px] text-white py-2'>Product Data</h1>
//            <p className='text-white px-12'>A Platform that connects design and construction professionals with product,
//               manufacturers, and suppliers in a convenient and user-friendly platform.</p>
//              </div>
//       </div>
//       <div className="px-6">      
//       <div className='bg-[#333333] xl:w-[600px] lg:w-[550px] md:w-[500px] w-[310px] h-[500px] rounded-2xl '>
//                <p className=' text-white px-12 font-bold py-2'>01</p>
//                <div className='px-12'>
//              <Image
//                src={work2}
//                alt="Work Image 1"
//              className="w-[full] xl:h-[300px]   object-cover rounded-2xl "

//            />
//              </div>
            
//             <h1 className='px-12 font-bold text-[20px] text-white py-2'>Product Data</h1>
//            <p className='text-white px-12'>A Platform that connects design and construction professionals with product,
//               manufacturers, and suppliers in a convenient and user-friendly platform.</p>
//         </div>
          
      
//       </div>
        
      
   
//     </Slider>
//   );
// }
// 2Caursol

// import React from "react";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } 
// from "@/components/ui/carousel";
// import Image from "next/image";
// import work from "../../../public/images/newWork.jpg";
// import work2 from "../../../public/images/newWork2.jpg";

// function Slider() {
//   return (
//     <Carousel>
//       <CarouselContent>
//         {/* Slide 1 */}
//         <CarouselItem className="xl:px-24 lg:px-12 px-6 xl:basis-1/2 ">
//           {/* Card 1 */}
//           <div className='bg-[#333333] xl:w-[600px] lg:w-[550px] md:w-[500px] w-[300px] h-[500px]  rounded-2xl py-4'>
//                 <p className=' text-white px-12 font-bold py-2'>01</p>
//                 <div className='px-12'>
//               <Image
//                 src={work}
//                alt="Work Image 1"
//              className=" w-[full] h-[300px]  object-cover rounded-2xl "

//             />
//               </div>
            
//              <h1 className='px-12 font-bold text-[20px] text-white py-2'>Product Data</h1>
//             <p className='text-white px-12'>A Platform that connects design and construction professionals with product,
//                manufacturers, and suppliers in a convenient and user-friendly platform.</p>
//               </div>
          
//           {/* Card 2 */}
               
       
//         </CarouselItem>

//         {/* Slide 2 */}
//         <CarouselItem className=" xl:basis-1/2 basis-1">
        
          
//           {/* Card 2 */}
               
//        <div className='bg-[#333333] xl:w-[600px] lg:w-[550px] md:w-[500px] w-[310px] h-[500px] rounded-2xl '>
//                 <p className=' text-white px-12 font-bold py-2'>02</p>
//                 <div className='px-12'>
//              <Image
//                 src={work2}
//                 alt="Work Image 1"
//               className="w-[full] h-[300px]   object-cover rounded-2xl "

//             />
//               </div>
            
//              <h1 className='px-12 font-bold text-[20px] text-white py-2'>WebDevelopment</h1>
//             <p className='text-white px-12'>We start by getting to know our clients, their business goals, and their target audience.</p>
//          </div>
//         </CarouselItem>
        
//         <CarouselItem className=" xl:basis-1/2 basis-1">
//           {/* Card 1 */}
//           <div className='bg-[#333333] xl:w-[600px] lg:w-[550px] md:w-[500px] w-[310px] h-[500px]  rounded-2xl'>
//                 <p className=' text-white px-12 font-bold py-2'>03</p>
//                 <div className='px-12'>
//              <Image
//                 src={work}
//                alt="Work Image 1"
//              className="w-[full] h-[300px]  object-cover rounded-2xl "

//             />
//               </div>
            
//              <h1 className='px-12 font-bold text-[20px] text-white py-2'>Product Data</h1>
//             <p className='text-white px-12'>A Platform that connects design and construction professionals with product,
//                manufacturers, and suppliers in a convenient and user-friendly platform.</p>
//               </div>
          
               
       
//         </CarouselItem>
//         <CarouselItem className=" xl:basis-1/2 basis-1">

//         <div className='bg-[#333333] xl:w-[600px] lg:w-[550px] md:w-[500px] w-[310px] h-[500px] rounded-2xl '>
//                 <p className=' text-white px-12 font-bold py-2'>04</p>
//                 <div className='px-12'>
//              <Image
//                 src={work2}
//                 alt="Work Image 1"
//               className="w-[full] h-[300px]   object-cover rounded-2xl "

//             />
//               </div>
            
//              <h1 className='px-12 font-bold text-[20px] text-white py-2'>WebDevelopment</h1>
//             <p className='text-white px-12'> We start by getting to know our clients, their business goals, and their target audience.</p>
//          </div>
//         </CarouselItem>

//       </CarouselContent>

//       {/* Carousel navigation */}
//       <CarouselPrevious className="absolute xl:left-5 left-3  top-1/2 transform -translate-y-1/2 text-white border-[#00A87D] bg-gray-800 p-3 rounded-full hover:bg-gray-700 z-50" />
//       <CarouselNext className="absolute right-5  top-1/2 transform -translate-y-1/2 text-white hover:text-white bg-green-500 p-3 rounded-full hover:bg-green-700  border-green-700 z-50" />
//     </Carousel>
//   );
// }

// export default Slider;


import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } 
from "@/components/ui/carousel";
import Image from "next/image";
import work from "../../../public/images/newWork.jpg";
import work2 from "../../../public/images/newWork2.jpg";

const sliderData = [
  {
    id: 1,
    image: work,
    title: "Product Data",
    description: "A Platform that connects design and construction professionals with product, manufacturers, and suppliers in a convenient and user-friendly platform.",
  },
  {
    id: 2,
    image: work2,
    title: "Web Development",
    description: "We start by getting to know our clients, their business goals, and their target audience.",
  },
  {
    id: 3,
    image: work,
    title: "Product Data",
    description: "A Platform that connects design and construction professionals with product, manufacturers, and suppliers in a convenient and user-friendly platform.",
  },
  {
    id: 4,
    image: work2,
    title: "Web Development",
    description: "We start by getting to know our clients, their business goals, and their target audience.",
  },
];

function Slider() {
  return (
    <Carousel>
      <CarouselContent>
        {sliderData.map((item) => (
          <CarouselItem key={item.id} className="xl:px-14 lg:px-44 md:px-32 px-6 xl:basis-1/2 ">
            <div className='bg-[#333333] xl:w-[600px] lg:w-[550px] md:w-[500px] w-[300px] h-[500px] rounded-2xl py-4'>
              <p className='text-white px-12 font-bold py-2'>{`0${item.id}`}</p>
              <div className='px-12'>
                <Image
                  src={item.image}
                  alt={`Work Image ${item.id}`}
                  className="w-full h-[300px] object-cover rounded-2xl"
                />
              </div>
              <h1 className='px-12 font-bold text-[20px] text-white py-2'>{item.title}</h1>
              <p className='text-white px-12'>{item.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Carousel navigation */}
      <CarouselPrevious className="absolute  xl:left-1 left-3 top-1/2 transform -translate-y-1/2 text-white hover:text-white border-[#00A87D] bg-gray-800 p-3 rounded-full hover:bg-gray-700 z-50" />
      <CarouselNext className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white hover:text-white bg-green-500 p-3 rounded-full hover:bg-green-700 border-green-700 z-50" />
    </Carousel>
  );
}

export default Slider;
