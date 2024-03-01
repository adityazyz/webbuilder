import React from 'react'

function CardSquare() {
  return (
    <div className='py-2 px-1 h-auto w-[60vw] md:w-[24vw] text-[#4A5665] bg-white rounded-lg mx-2'>
        <div className='flex justify-center'>
            <img src="/square.png" alt="sq-image" className='h-[24vh]'/>
        </div>
        <div className='ml-2'>
            <span className="text-[#074786] text-[13px] rounded-[5px] w-fit mt-2 bg-[#F2F4F6] px-1 py-1">
                20% off
            </span>
            <span className="text-[#074786] mx-2 rounded-[5px] text-[13px] w-fit mt-2 bg-[#F2F4F6] px-1 py-1">
                Limited time
            </span>
        </div>
        <div className='text-sm font-semibold h-auto flex justify-center my-2'>
            Webbuilder 1
        </div>
        <div className='text-sm h-auto flex justify-center pr-8 pl-3 my-2 font-light'>
            Computer modern classic with wix support
        </div>
        <div className='px-3 mb-2 flex items-end flex-wrap'>
            <div className='text-[17px] font-light'>
                $39.96
            </div>
            <div className='text-[12px] text-[#9FA9B3] font-light mx-2'>
                $49.96
            </div>
            <div className='text-[12px] text-[#EF4D5D] font-light  '>
                (20% off)
            </div>
        </div>
        <button className="bg-[#1B89F5] w-[90%] rounded-[10px] text-white text-[14px] font-light tracking-wider h-12 py-2 mx-3 mb-2">
              View Deals
        </button>
    </div>
  )
}

export default CardSquare