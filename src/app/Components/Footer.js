import React from 'react'
import { Camera, Facebook, Facebook2, Linkedlin, Logo } from '../../../public/Icons/icons'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";




const Footer = () => {
  return (
    
        <section className='pt-12'>
            <div className='container mx-auto'>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:text-start text-center">
                <div>
                <Logo/>
                <div className='flex gap-3 py-4'>
                <Facebook/>
                <Facebook2/>
                <Linkedlin/>
                <Camera/>
                </div>
                </div>
                <div className='xl:block lg:block hidden'></div>
                <div>
              <h1 className="font-bold text-[20px] pt-6 hover:text-[#007D58]">Company</h1>
              <p className="font-semibold py-3">About</p>
              <p className="font-semibold py-3">Work</p>
              <p className="font-semibold py-3">Service</p>
            </div>
            <div>
              <h1 className="font-bold text-[20px] pt-6 hover:text-[#007D58]">Other</h1>
              <p className="font-semibold py-3">Blog</p>
              <p className="font-semibold py-3">Privacy Policy</p>
              <p className="font-semibold py-3">Cookies Policy</p>
            </div>
            <div>
              <h1 className="font-bold text-[20px] pt-6 hover:text-[#007D58]">Contact Us</h1>
              <div className="flex space-x-2 ">
              <FaLocationDot  className='text-[#007D58] mt-3'/>

                <p className="font-semibold py-2">Islamabad, Pakistan</p>
              </div>
              <div className="flex space-x-2 py-3">
                <IoCall className='text-[#007D58] mt-3'/>
                <p className="font-semibold py-2">(333) 223-5084</p>
              </div>
              <div className="flex space-x-2 ">
                < MdOutlineEmail className='text-[#007D58] mt-1' />
                <p className="font-semibold">info@marvellex.com</p>
              </div>
            </div>                




            </div>
            </div>
        </section>
    
  )
}

export default Footer