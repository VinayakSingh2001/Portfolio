import React, { useRef } from 'react'
import { RxCaretRight } from "react-icons/rx";
import { Link } from 'react-scroll';



const Hero = () => {



    return (
        <div className='my-20 container mx-auto justify-center'>
            <div className='flex justify-center container mx-auto rounded-[10px] border bg-[#adb5bd]/ shadow-lg px-2 py-14'>
                <section className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-8 px-4 text-black'>
                    <Link to='aboutPage' spy={true} smooth={true} duration={600} className='p-4 md:p-6 border border-[#495057] rounded-[12px] text-[#757bc8] hover:text-black flex flex-col gap-1 col-span-1 row-span-1 cursor-pointer hover:bg-pink-50 transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <span className='text-[18px] md:text-[25px] font-bold'>About Me</span>
                    </Link>

                    <Link to='skillPage' spy={true} smooth={true} duration={600} className='p-4 md:p-6 border border-[#495057] text-[#757bc8] hover:text-black rounded-[12px] flex flex-col gap-1 col-span-1 row-span-1 cursor-pointer hover:bg-pink-50 transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <span className='text-[14px] md:text-[16px]'>Tech</span>
                        <span className='text-[18px] md:text-[28px] font-bold'>Skills</span>
                    </Link>

                    <Link to='/#' className='p-4 md:p-6 border border-[#495057] text-[#757bc8]  hover:text-black rounded-[12px] flex flex-col gap-1 col-span-2 row-span-1 cursor-pointer hover:bg-pink-50 transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <span className='text-[18px] md:text-[28px] font-bold'>Blogs</span>
                    </Link>

                    <Link to='projectPage' spy={true} smooth={true} duration={600} className='p-4 md:p-6 border border-[#495057] rounded-[12px] flex flex-col gap-1 col-span-2 row-span-2 cursor-pointer text-[#757bc8]  hover:bg-[#fff0f3] hover:text-black  transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <span className='text-[18px] md:text-[28px] font-bold text-center'>Featured Projects</span>
                        <span className='text-[14px] md:text-[16px] pb-2  flex items-center justify-center transform hover:scale-105 transition-transform duration-300 ease-in-out text-[#4c75d6]'>
                            View All <RxCaretRight className='text-[23px]' />
                        </span>

                        <img
                            src="https://img.freepik.com/free-photo/front-view-people-celebrating-christmas_23-2150977060.jpg?t=st=1703498166~exp=1703501766~hmac=1db853fc2a1c5930f62748210a65432315643ebce30d1ea16d529727cdf39c9d&w=1380"
                            alt=""
                            className='h-[200px] md:h-[300px] w-full rounded-[8px]'
                        />
                    </Link>
                    <Link to='#' className='p-4 md:p-6 border border-[#495057] rounded-[12px]  flex flex-col gap-1 col-span-1 row-span-1 cursor-pointer text-[#757bc8]  hover:bg-[#fff0f3] hover:text-black  transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <span className='text-[14px] md:text-[16px]'>Custom</span>
                        <span className='text-[18px] md:text-[28px] font-bold'>Web Solutions</span>
                    </Link>
                    <Link to='/#' className='p-4 md:p-6 border border-[#495057] rounded-[12px] flex flex-col gap-1 col-span-1 text-[#757bc8]  hover:text-black row-span-1 cursor-pointer hover:bg-pink-50 transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <span className='text-[18px] md:text-[28px] font-bold'>Books</span>
                        <span className='text-[14px] md:text-[16px]'>I Like</span>
                    </Link>
                    <Link to='/#' className='p-4 md:p-6 border border-[#495057] rounded-[12px] text-[#757bc8] hover:text-black flex flex-col gap-1 col-span-2 row-span-1 cursor-pointer hover:bg-pink-50 transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <span className='text-[18px] md:text-[28px] font-bold'>Connect</span>
                        <span className='text-[14px] md:text-[16px] text-[#4c75d6] '>Let's Talk</span>
                    </Link>


                </section>


            </div>

        </div>
    )

}

export default Hero
