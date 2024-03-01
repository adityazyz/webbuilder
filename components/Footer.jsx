import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

function Footer() {
  return (
    <footer className='bg-[#202731] h-fit md:h-[50vh] px-[17vw]  pb-10 md:pb-0'>
        <ul className='flex flex-col md:flex-row items-center justify-between'>
            <li className='mt-10'>
                <ul>
                    <li className='text-[#FFFFFE] text-[14px] font-light mb-3 tracking-wider'>CATEGORIES</li>
                    <li className='text-[#B1B6BC] text-[12px] mb-3 hover:text-white'>Web Builder</li>
                    <li className='text-[#B1B6BC] text-[12px] mb-3 hover:text-white'>Hosting</li>
                    <li className='text-[#B1B6BC] text-[12px] mb-3 hover:text-white'>Data Center</li>
                    <li className='text-[#B1B6BC] text-[12px] mb-3 hover:text-white'>Robotic-Automation</li>
                </ul>
            </li>
            <li className='mt-10'>
                <ul className='mt-6'>
                    <li className=' text-[#FFFFFE] text-[14px] mb-3 font-light tracking-wider'>CONTACT</li>
                    <li className='text-[#B1B6BC] text-[12px] mb-3 hover:text-white'>Contact</li>
                    <li className='text-[#B1B6BC] text-[12px] mb-3 hover:text-white'>Privacy Policy</li>
                    <li className='text-[#B1B6BC] text-[12px] mb-3 hover:text-white'>Terms Of Service</li>
                    <li className='text-[#B1B6BC] text-[12px] mb-3 hover:text-white'>Categories</li>
                    <li className='text-[#B1B6BC] text-[12px] mb-3 hover:text-white'>About</li>
                </ul>
            </li>
            <li className='text-[#B1B6BC] text-[12px] font-light mt-12 md:mt-6 mb-3 flex mr-0 lg:mr-24 items-center hover:text-white'>United States <IoIosArrowDown className='text-[#c9ccd0] h-5 w-5 ml-3'/></li>
        </ul>
    </footer>
  )
}

export default Footer