import React from 'react'
import Link from 'next/link'
import { MdArrowOutward } from "react-icons/md";
import { Logo } from '../../../public/Icons/icons'
import { IoMenu } from "react-icons/io5";
import Mobilemenu from './Mobilemenu';



const Header = () => {
  return (
    <>
    
        <header className='py-2'>
          <div className='md:container mx-auto px-5'>
            <div className='flex justify-between items-center' >
              <Logo className=" w-[118px] h-[61px]"/>
             
          
           <ul className=' gap-x-5 lg:flex items-center hidden'>
                <Link href={"/"} className='hover:text-green-500 text-[16px] font-bold'>Home</Link>
                <Link href={"/"} className='hover:text-green-500 text-[16px] font-bold'>Services</Link>
                <Link href={"/"} className='hover:text-green-500 text-[16px] font-bold'>Project</Link>
                <Link href={"/"} className='hover:text-green-500 text-[16px] font-bold'>Blogs</Link>
                <Link href={"/contact"} className='hover:text-green-500 text-[16px] font-bold'>Contact Us</Link> </ul>
                <div>
                  
                <div className="flex justify-center items-center">
  <button className="lg:flex hidden border-2 px-4 py-3 rounded-3xl bg-[#00A87D] mt-5 hover:bg-black items-center space-x-2 onclick{/contact}">
    <span className='text-white text-[18px] font-bold'>Contact Us</span>
    <MdArrowOutward className='w-[18px] h-[14.5px] text-white' />
  </button>
</div>
<Mobilemenu/>



                </div>
                </div>
                </div>
        </header>
    
    </>
  )
}

export default Header