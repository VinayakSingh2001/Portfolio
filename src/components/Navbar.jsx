import React from 'react'
import Header from './Header'

const Navbar = () => {
    return (
        <>
            <div className='flex bg-gary-100 '>
                <div className="flex py-3 w-full mx-4 md:mx-10 justify-between items-center">
                    <div className="flex items-center">
                        {/* <img
                            src="https://m.media-amazon.com/images/M/MV5BMTgzMTA0MDUzNF5BMl5BanBnXkFtZTcwOTM2ODcwNw@@._V1_.jpg"
                            alt=""
                            className='rounded-full h-[60px] w-[60px] md:h-[80px] md:w-[80px] object-cover'
                        /> */}
                        <div className='py-4 md:px-7 text-center'>
                            <h2 className='text-3xl font-bold text-[#ac46a1] hover:underline cursor-pointer md:text-[35px]'>An aspiring Web-Developer</h2>
                        </div>

                    </div>
                </div>
            </div>

            {/* //Navbar */}
            {/* <Header /> */}
        </>
    )
}

export default Navbar
