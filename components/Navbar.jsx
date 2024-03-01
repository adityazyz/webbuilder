import React from 'react'
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
        <nav className='bg-[#202731] py-4  lg:h-[9vh] h-fit px-[15vw]'>
            <ul className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                <li className='h-9 outline-none mt-4 lg:mt-0  lg:mr-20 rounded-lg w-[40vw] lg:w-56 bg-white text-gray-600 flex items-center justify-between px-1'>
                <CiSearch className='h-[26px] w-[26px] mb-1'/>
                    <input className='px-2 w-[40vw] lg:w-56 h-8 outline-none rounded-lg bg-white text-gray-600' type="text" />
                </li>
 
                <li className='lg:ml-10 mb-[2px]'>
                    <ul className='flex justify-center items-center h-full '>
                        <li className='mr-12 text-[13px] text-[#D1D7DA] hover:text-white tracking-wide font-light'>
                            Categories
                        </li>
                        <li className='mr-16 text-[13px] text-[#D1D7DA] hover:text-white tracking-wide font-light'>
                            Website Builders
                        </li>
                        <li className='text-[13px] text-[#D1D7DA] hover:text-white tracking-wide font-light'>
                            Today's deals
                        </li>
                    </ul>
                </li>
                
            </ul>
        </nav>
  )
}

export default Navbar