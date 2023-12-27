import React from 'react'

const Header = () => {
    return (
        <div className='flex bg-black justify-center'>
            <div className="flex flex-col items-center pt-4 pb-4 w-full ml-14">
                <div className='flex gap-3'>
                    <button className='bg-black rounded-full text-white hover:bg-white hover:text-black border border-gray-300'>
                        <h3 className='text-xs pl-4 pr-4'>Home</h3>
                    </button>
                    <button className='bg-white rounded-full hover:bg-gray-300 hover:text-black'>
                        <h3 className='text-black text-xs pl-4 pr-4'>About</h3>
                    </button>
                    <button className='bg-white rounded-full p-1 hover:bg-gray-300 hover:text-black'>
                        <h3 className='text-black text-xs pl-4 pr-4'>Blog</h3>
                    </button>
                    <button className='bg-white rounded-full hover:bg-gray-300 hover:text-black'>
                        <h3 className='text-black text-xs pl-4 pr-4'>Projects</h3>
                    </button>
                    <button className='bg-white rounded-full p-1 hover:bg-gray-300 hover:text-black'>
                        <h3 className='text-black text-xs pl-4 pr-4'>Contact</h3>
                    </button>
                    <button className='bg-white rounded-full hover:bg-gray-300 hover:text-black'>
                        <h3 className='text-black text-xs pl-4 pr-4'>Books</h3>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Header
