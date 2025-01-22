
'use client'
import { GoArrowUpRight } from 'react-icons/go';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Service = () => {
  const [services, setServices] = useState([]); // State to store services
  const [error, setError] = useState(null); // State for errors

  // Fetch data from the API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/service'); // Fetch data from API
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        console.log("data : ", data.services[0].img);
        console.log(data); // Log the response to check the structure

        // Check if the response contains an array of services
        if (Array.isArray(data.services)) {
          setServices(data.services); // Set the services array if found
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err) {
        setError(err.message); // Catch any errors and show them
      }
    };

    fetchServices();
  }, []); // Empty dependency array means it runs once after the component mounts

  if (error) {
    return <p>Error: {error}</p>; // Show error message if fetching fails
  }

  if (services.length === 0) {
    return <p>No services available</p>; // Handle case where no services are fetched
  }

  return (
    <div className="container pt-12 mx-auto">
      <h1 className="text-center xl:text-6xl text-4xl capitalize font-bold">
        Our{' '}
        <span className="bg-hero-newbg bg-cover w-[206px] text-center uppercase lg:text-6xl px-4 rounded-2xl text-white">
          Service
        </span>
      </h1>
      <p className="font-semibold text-center py-4">Discover Our Core Services</p>

      {/* Service Cards */}
      <div className="flex flex-wrap justify-center gap-6 pt-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-black w-[280px] md:w-[350px] lg:w-[380px] xl:w-[400px] h-[450px] rounded-2xl rotate-3"
          >
            <div className="bg-[#F7F7F7] w-full h-full rounded-2xl -rotate-2">
              <div className="flex items-center justify-center py-8 lg:py-12">
                <img src={service?.img} alt="service images" width={'50px'} height={'60px'} />
                <p className="text-center text-[#2B2B2B] font-bold text-[26px]">{service.title}</p>
              </div>
              <p className="px-5 py-6 font-normal text-center">{service.description}</p>
              <div className="flex justify-between px-5 py-6">
                <p className="font-bold text-[18px]">See more</p>
                <span className="flex items-center justify-center w-12 h-12 text-white bg-black rounded-full">
                  {/* Add your icon here if you like */}
                  <GoArrowUpRight className="w-[24px] h-[24px]" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;


// change

// import React from 'react';
// import Image from 'next/image';
// import { GoArrowUpRight } from 'react-icons/go';

// // Service data array
// const services = [
//   {
//     id: 1,
//     title: 'AI Service',
//     description:
//       'Unlock the power of Artificial Intelligence (AI) with our comprehensive suite of services.',
//     image: '/images/Aiservice.png', // Use paths relative to "public" folder
//   },
//   {
//     id: 2,
//     title: 'Blockchain Development',
//     description:
//       'The groundbreaking potential of Blockchain technology is a core belief at Quadruple.',
//     image: '/images/block.png',
//   },
//   {
//     id: 3,
//     title: 'Web Development',
//     description:
//       'At Quadruple Solutions, we craft web applications that seamlessly blend cutting-edge technology with creative innovation.',
//     image: '/images/web.png',
//   },
//   {
//     id: 4,
//     title: 'DevOps Service',
//     description:
//       'Quadruple offers comprehensive DevOps services to streamline and enhance your development and operations processes.',
//     image: '/images/Dvop.png',
//   },
//   {
//     id: 5,
//     title: 'Web/Cyber Security',
//     description:
//       'Protect your business with Quadruple’s comprehensive web and cybersecurity solutions.',
//     image: '/images/Security.png',
//   },
//   {
//     id: 6,
//     title: 'AWS Services',
//     description:
//       'Unlock the full potential of cloud computing with Quadruple\'s AWS services, delivering unparalleled scalability, reliability, and innovation.',
//     image: '/images/Aws.png',
//   },
// ];

// const Service = () => {
//   return (
//     <div className="container pt-12 mx-auto">
//       <h1 className="text-center xl:text-6xl text-4xl capitalize font-bold">
//         Our{' '}
//         <span className="bg-hero-newbg bg-cover w-[206px] text-center uppercase lg:text-6xl px-4 rounded-2xl text-white">
//           Service
//         </span>
//       </h1>
//       <p className="font-semibold text-center py-4">Discover Our Core Services</p>

//       {/* Service Cards */}
//       <div className="flex flex-wrap justify-center gap-6 pt-8">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="bg-black w-[280px] md:w-[350px] lg:w-[380px] xl:w-[400px] h-[450px] rounded-2xl rotate-3"
//           >
//             <div className="bg-[#F7F7F7] w-full h-full rounded-2xl -rotate-2">
//               <div className="flex items-center justify-center py-8 lg:py-12">
//                 <Image src={service.image} alt={service.title} width={100} height={100} />
//               </div>
//               <p className="text-center text-[#2B2B2B] font-bold text-[26px]">{service.title}</p>
//               <p className="px-5 py-6 font-normal text-center">{service.description}</p>
//               <div className="flex justify-between px-5 py-6">
//                 <p className="font-bold text-[18px]">See more</p>
//                 <span className="flex items-center justify-center w-12 h-12 text-white bg-black rounded-full">
//                   <GoArrowUpRight className="w-[24px] h-[24px]" />
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       </div>
   
    
//    )
//  }
 
 
//  export default Service
    
              {/* <div className='bg-black xl:w-[400px] lg:w-[380px] md:w-[360px] xl:sm:w-[320px] w-[280px] h-[450px] rounded-2xl rotate-3 '>
              <div className='bg-[#F7F7F7] xl:w-[400px] lg:w-[380px] md:w-[360px] xl:sm:w-[320px] w-[280px] h-[450px] rounded-2xl -rotate-2'>
              <div className='flex items-center justify-center xl:py-10 py-8'>
                  <Image src={image4} alt='img4' className/>
                </div>
                <p className='text-center text-[#2B2B2B] font-bold text-[26px]'>DevOps Service</p>


                <p className='px-5 py-10 font-normal text-center'>Quadruple offers comprehensive DevOps services
                 to streamline and enhance your development and operations processes.</p>
          <div className='flex justify-between px-5 lg:py-12'>
            <p className='font-bold text-[18px]'>See more</p>
            <span className='flex items-center justify-center w-12 h-12 text-white bg-black rounded-full'>
            <GoArrowUpRight className=' w-[24px] h-[24px] '/></span> </div>
              </div>
              </div> */}
        {/* 2nd */}
        {/* <div className='bg-black xl:w-[400px] lg:w-[380px] md:w-[360px] xl:sm:w-[320px] w-[280px]  h-[450px] rounded-2xl rotate-3  '>
              <div className='bg-[#F7F7F7] xl:w-[400px] lg:w-[380px] md:w-[360px] xl:sm:w-[320px] w-[280px]  h-[450px] rounded-2xl -rotate-2 '>
              <div className='flex items-center justify-center xl:py-10 py-8'>
                  <Image src={image5} alt='img5' className/>
                </div>
                <p className='text-center text-[#2B2B2B] font-bold text-[26px]'>Web/Cyber Security</p>


                <p className='px-5 py-10 font-normal text-center'>Quadruple offers comprehensive 
                DevOps services to streamline and enhance your development and operations processes.</p>
          <div className='flex justify-between px-5 lg:py-12'>
            <p className='font-bold text-[18px]'>See more</p>
            <span className='flex items-center justify-center w-12 h-12 text-white bg-black rounded-full'>
            <GoArrowUpRight className=' w-[24px] h-[24px] '/></span> </div>
              </div>
              </div> */}
        {/* 3rd */}
        {/* <div className='bg-black xl:w-[400px] lg:w-[380px] md:w-[360px] xl:sm:w-[320px] w-[280px] h-[450px] rounded-2xl rotate-3 '>
              <div className='bg-[#F7F7F7] xl:w-[400px]  lg:w-[380px] md:w-[360px] xl:sm:w-[320px] w-[280px] h-[450px] rounded-2xl -rotate-2 '>
              <div className='flex items-center justify-center xl:py-10 py-8'>
                  <Image src={image6}  alt='img6' className/>
                </div>
                <p className='text-center text-[#2B2B2B] font-bold text-[26px]'>AWS Services</p>


                <p className='px-5 py-10 font-normal text-center'>Unlock the full potential of cloud computing with Quadruple's
                 AWS services, delivering unparalleled scalability, reliability, and innovation.</p>
          <div className='flex justify-between px-5 lg:py-12'>
            <p className='font-bold text-[18px]'>See more</p>
            <span className='flex items-center justify-center w-12 h-12 text-white bg-black rounded-full'>
            <GoArrowUpRight className=' w-[24px] h-[24px] '/></span> </div>
              </div>
              </div>        */}
   
// Integration

// 'use client'
// import React, { useEffect, useState } from 'react';

// const Service = () => {
//   const [services, setServices] = useState([]); // State to store services
//   const [error, setError] = useState(null); // State for errors

//   // Fetch data from the API
//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/service'); // Fetch data from API
//         if (!response.ok) {
//           throw new Error('Failed to fetch services');
//         }
//         const data = await response.json(); // Parse JSON response

//         // Log the data to check its structure
//         console.log(data);

//         // Assuming the response has a 'services' key containing an array
//         if (Array.isArray(data.services)) {
//           setServices(data.services);
//         } else {
//           throw new Error('Invalid data format');
//         }
//       } catch (err) {
//         setError(err.message); // Catch any errors and show them
//       }
//     };

//     fetchServices();
//   }, []); // Empty dependency array means it runs once after the component mounts

//   if (error) {
//     return <p>Error: {error}</p>; // Show error message if fetching fails
//   }

//   if (!Array.isArray(services)) {
//     return <p>No services available</p>; // Handle case where services is not an array
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold text-center mb-4">Our Services</h1>
//       <div className="flex flex-col items-center gap-4">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="border p-4 rounded-md shadow-sm w-full max-w-md"
//           >
//             <h2 className="text-lg font-semibold">{service.title}</h2>
//             <p className="text-gray-600">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Service;

