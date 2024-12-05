import React from 'react'
import { IoMenu } from "react-icons/io5";
import Link from 'next/link'
import { MdArrowOutward } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Mobilemenu = () => {
  return (
    <div>
      <Sheet>
  <SheetTrigger><IoMenu  className='lg:hidden flex'/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>
        </SheetTitle>
      <SheetDescription>
        
      <ul className='flex flex-col space-y-4 '>
                <Link href={"/"} className='hover:text-green-500 text-[16px] font-bold'>Home</Link>
                <Link href={"/"} className='hover:text-green-500 text-[16px] font-bold'>Services</Link>
                <Link href={"/"} className='hover:text-green-500 text-[16px] font-bold'>Project</Link>
                <Link href={"/"} className='hover:text-green-500 text-[16px] font-bold'>Blogs</Link>
                <Link href={"/"} className='hover:text-green-500 text-[16px] font-bold'>Contact Us</Link> </ul>
                
                  
                <div className="flex justify-center items-center">
  <button className="lg:flex border-2 px-4 py-3 rounded-3xl bg-[#00A87D] mt-5 hover:bg-black items-center space-x-2">
    <span className='text-white text-[18px] font-bold'>Contact Us</span>
    <MdArrowOutward className='w-[18px] h-[14.5px] text-white' />
  </button>
</div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default Mobilemenu